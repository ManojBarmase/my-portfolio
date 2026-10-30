import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * High-performance magnetic effect utility powered by GSAP.
 * - Only binds on fine pointer devices (desktops/laptops with mouse/trackpad).
 * - Returns a cleanup function `() => void` to prevent DOM listener memory leaks.
 * - Supports an optional `AbortSignal` for lifecycle management.
 */
export function magneticHelper(
  element: HTMLElement,
  options?: { signal?: AbortSignal }
): () => void {
  // Guard for SSR, non-fine pointer devices, or prefers-reduced-motion
  if (
    typeof window === "undefined" ||
    !window.matchMedia("(pointer: fine)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return () => {};
  }

  // Early exit if signal is already aborted
  if (options?.signal?.aborted) {
    return () => {};
  }

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    const { width, height, left, top } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (x - centerX) / 3;
    const moveY = (y - centerY) / 3;

    gsap.to(element, {
      x: moveX,
      y: moveY,
      ease: "power3.out",
      duration: 0.3,
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 0.6,
      overwrite: "auto",
    });
  };

  const listenerOptions = options?.signal
    ? { signal: options.signal }
    : undefined;

  element.addEventListener("mousemove", handleMouseMove, listenerOptions);
  element.addEventListener("mouseleave", handleMouseLeave, listenerOptions);

  const cleanup = () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
    gsap.killTweensOf(element);
  };

  if (options?.signal) {
    options.signal.addEventListener("abort", cleanup, { once: true });
  }

  return cleanup;
}
