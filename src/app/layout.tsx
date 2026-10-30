import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Cursor from "@/components/cursor/Cursor";
import ThreeScene from "@/components/ui/ThreeScene";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://manojbarmase.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manoj Barmase | Full Stack Developer (MERN + AI Integration)",
    template: "%s | Manoj Barmase",
  },
  description:
    "Results-driven Full Stack Developer with 15+ months of experience architecting scalable MERN applications, designing secure REST APIs, and integrating low-latency AI/LLM models.",
  applicationName: "Manoj Barmase Portfolio",
  authors: [{ name: "Manoj Barmase", url: siteUrl }],
  creator: "Manoj Barmase",
  publisher: "Manoj Barmase",
  keywords: [
    "Manoj Barmase",
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Integration",
    "Groq LPU",
    "React.js 19",
    "Next.js 16",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "CI/CD",
    "Tailwind CSS",
    "REST APIs",
    "RBAC",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manoj Barmase | Full Stack Developer (MERN + AI Integration)",
    description:
      "Full Stack Developer with 15+ months experience architecting scalable MERN applications, high-availability REST APIs (10k+ daily txns), and <400ms low-latency AI integrations.",
    url: siteUrl,
    siteName: "Manoj Barmase Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Manoj Barmase - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Barmase | Full Stack Developer (MERN + AI Integration)",
    description:
      "Full Stack Developer with 15+ months experience architecting scalable MERN applications, high-availability REST APIs, and low-latency AI models.",
    images: ["/profile.png"],
    creator: "@ManojBarmase",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Manoj Barmase",
      jobTitle: "Full Stack Developer (MERN + AI Integration)",
      url: siteUrl,
      image: `${siteUrl}/profile.png`,
      email: "manojbarmase9@gmail.com",
      telephone: "+91-8319548377",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressCountry: "India",
      },
      sameAs: [
        "https://github.com/manojbarmase",
        "https://linkedin.com/in/manoj-barmase",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Brandworks Worldwide (Revynox)",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      },
      knowsAbout: [
        "MERN Stack Architecture",
        "React.js 19",
        "Next.js 16",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Low-Latency AI Integration",
        "Groq LPU",
        "LLM APIs",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "RESTful APIs & RBAC",
        "Redis Caching",
        "CI/CD Pipelines",
      ],
      description:
        "Results-driven Full Stack Developer with 15+ months of experience architecting scalable MERN applications, secure REST APIs with RBAC, and integrating low-latency AI/LLM models.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Manoj Barmase | Full Stack Developer",
      url: siteUrl,
      description:
        "Portfolio and technical showcase of Manoj Barmase, Full Stack Developer specializing in MERN stack and low-latency AI integration.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        {/* Accessible Skip to Main Content Link for Keyboard and Screen Reader Users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] px-6 py-3 bg-foreground text-background font-bold text-sm rounded-full shadow-2xl ring-2 ring-primary focus:outline-none transition-all"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          {/* Single Global WebGL Canvas mounted behind children */}
          <ThreeScene />
          <Cursor /> {/* Mounted Globally */}
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
