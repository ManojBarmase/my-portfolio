"use server";

import https from "node:https";
import { headers } from "next/headers";
import type { ContactActionState } from "@/types/contact";

// In-memory rate limiting: identifier -> timestamp array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1-minute sliding window
const MAX_REQUESTS_PER_WINDOW = 5;      // Max 5 submissions per minute per IP

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const history = rateLimitMap.get(identifier) || [];
  const validTimestamps = history.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(identifier, validTimestamps);

  // Periodic cleanup of stale entries to prevent memory growth
  if (rateLimitMap.size > 500) {
    for (const [key, times] of rateLimitMap.entries()) {
      const active = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, active);
      }
    }
  }

  return false;
}

async function getClientIp(): Promise<string> {
  try {
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    if (forwarded) {
      return forwarded.split(",")[0].trim();
    }
    const realIp = headersList.get("x-real-ip");
    if (realIp) {
      return realIp.trim();
    }
  } catch {
    // Fallback if headers() is unavailable
  }
  return "127.0.0.1";
}

// RFC 5322 compliant regex for standard email validation
const RFC_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

interface Web3FormsPayload {
  access_key: string;
  name: string;
  email: string;
  message: string;
  subject?: string;
  from_name?: string;
}

function sendToWeb3Forms(payload: Web3FormsPayload): Promise<{ success: boolean; message?: string }> {
  return new Promise((resolve) => {
    const data = JSON.stringify(payload);
    const url = new URL("https://api.web3forms.com/submit");

    const options: https.RequestOptions = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Portfolio-Contact-Gateway/1.0",
        "Content-Length": Buffer.byteLength(data),
      },
      timeout: 10000,
    };

    const req = https.request(options, (res) => {
      let responseBody = "";
      res.on("data", (chunk) => {
        responseBody += chunk;
      });

      res.on("end", () => {
        try {
          const parsed = JSON.parse(responseBody);
          if (parsed && typeof parsed.success === "boolean") {
            resolve({
              success: parsed.success,
              message: parsed.message || (parsed.success ? "Message dispatched successfully. Protocol initiated." : "Submission failed."),
            });
            return;
          }
        } catch {
          // If non-JSON received
        }

        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ success: true, message: "Message dispatched successfully. Protocol initiated." });
        } else {
          resolve({ success: false, message: "Web3Forms gateway error. Please try again later." });
        }
      });
    });

    req.on("error", (err) => {
      console.error("Web3Forms HTTPS transport error:", err);
      resolve({ success: false, message: "Network connection error while contacting gateway. Please try again." });
    });

    req.on("timeout", () => {
      req.destroy();
      resolve({ success: false, message: "Gateway connection timed out. Please try again later." });
    });

    req.write(data);
    req.end();
  });
}

export async function submitContact(
  prevStateOrFormData: ContactActionState | FormData,
  formDataPayload?: FormData
): Promise<ContactActionState> {
  const formData = formDataPayload instanceof FormData
    ? formDataPayload
    : prevStateOrFormData instanceof FormData
    ? prevStateOrFormData
    : new FormData();

  // 1. Honeypot anti-spam check
  const botcheck = formData.get("botcheck");
  if (botcheck && (botcheck === "on" || botcheck === "true" || String(botcheck).trim().length > 0)) {
    // Silently return success to neutralize bot spam without diagnostic feedback
    return {
      success: true,
      message: "Message dispatched successfully. Protocol initiated.",
    };
  }

  // 2. Rate limiting check
  const clientIp = await getClientIp();
  if (isRateLimited(clientIp)) {
    return {
      success: false,
      message: "Rate limit exceeded. Please wait a moment before sending another message.",
    };
  }

  // 3. Extract and sanitize input data
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  // 4. Strict enterprise input validation
  const errors: Record<string, string[]> = {};

  if (!name || name.length < 2) {
    errors.name = ["Name must be at least 2 characters."];
  }

  if (!email || !RFC_EMAIL_REGEX.test(email)) {
    errors.email = ["Please enter a valid email address."];
  }

  if (!message || message.length < 10) {
    errors.message = ["Message must be at least 10 characters."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted errors.",
      errors,
    };
  }

  // 5. Environment variable validation
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("CRITICAL: WEB3FORMS_ACCESS_KEY environment variable is missing.");
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  // 6. Server-to-server dispatch to Web3Forms API
  try {
    const result = await sendToWeb3Forms({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `New Portfolio Message from ${name}`,
      from_name: name,
    });

    return {
      success: result.success,
      message: result.message || (result.success ? "Message dispatched successfully. Protocol initiated." : "Submission failed."),
    };
  } catch (error) {
    console.error("Web3Forms submission failed:", error);
    return {
      success: false,
      message: "An unexpected error occurred while sending your message. Please try again later.",
    };
  }
}
