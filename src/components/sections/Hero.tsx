"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { magneticHelper } from "@/lib/utils";
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight, 
  Download, 
  Activity, 
  Zap, 
  Server 
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hero-entry", {
      opacity: 0,
      y: 50,
      stagger: 0.12,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.15,
    });

    const cleanups: (() => void)[] = [];
    if (ctaContainerRef.current) {
      const magneticElements = ctaContainerRef.current.querySelectorAll<HTMLElement>(
        ".magnetic, .magnetic-interactive"
      );
      magneticElements.forEach((el) => {
        cleanups.push(magneticHelper(el));
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, { scope: containerRef });

  const techPillars = [
    {
      title: "MERN Stack Systems",
      badge: "Core Architecture",
      icon: Layers,
      color: "text-blue-500",
      desc: "Architecting end-to-end web applications with React 19, Next.js 16, Node.js, Express, and MongoDB/PostgreSQL schemas.",
    },
    {
      title: "Low-Latency AI / LLM",
      badge: "<400ms TTFT",
      icon: Cpu,
      color: "text-violet-500",
      desc: "Integrating Groq LPU conversational engines, custom PDF parsing pipelines, and Redis rate-limiting for real-time AI responses.",
    },
    {
      title: "DevOps & Secure APIs",
      badge: "Enterprise Ready",
      icon: ShieldCheck,
      color: "text-emerald-500",
      desc: "Designing secure REST APIs with granular 5-role RBAC, ACID compliance, Docker containerization, and automated CI/CD.",
    },
  ];

  const enterpriseMetrics = [
    { value: "15+", label: "Months Experience", icon: Activity },
    { value: "10K+", label: "Daily Transactions", icon: Server },
    { value: "<400ms", label: "Groq AI Latency", icon: Zap },
    { value: "99.9%", label: "Backend Uptime", icon: ShieldCheck },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Ambient Aurora Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[130px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl z-10 w-full mx-auto">
        {/* Availability / Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold mb-6 hero-entry backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Full Stack Developer (MERN + AI Integration) • Pune, India</span>
        </div>

        {/* Name Header */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-4 hero-entry text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 pb-1">
          Manoj Barmase.
        </h1>

        {/* Subtitle / Value Proposition */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground/90 dark:text-foreground mb-8 hero-entry max-w-4xl">
          Architecting scalable MERN applications & low-latency AI solutions.
        </h2>

        {/* Executive Summary */}
        <p className="text-base sm:text-lg md:text-xl text-primary-muted font-normal leading-relaxed max-w-3xl mb-12 hero-entry">
          Over 15 months of production experience delivering high-availability B2B platforms, optimizing database schemas for 10,000+ daily transactions, and engineering sub-400ms conversational AI pipelines with Groq LPU and Docker.
        </p>

        {/* Enterprise Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-2xl backdrop-blur-xl mb-12 hero-entry">
          {enterpriseMetrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-3.5 p-2">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/20">
                <metric.icon size={20} />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                  {metric.value}
                </div>
                <div className="text-xs text-primary-muted font-medium font-mono uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 hero-entry">
          {techPillars.map((tech, i) => (
            <div
              key={i}
              className="relative p-7 bg-white/70 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-2xl flex flex-col justify-between backdrop-blur-xl group hover:border-violet-500/40 dark:hover:border-violet-500/30 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-black/[0.04] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon size={22} />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-primary-muted border border-black/5 dark:border-white/5">
                    {tech.badge}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-foreground tracking-tight mb-2.5">
                  {tech.title}
                </h4>
                <p className="text-sm text-primary-muted leading-relaxed font-normal">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Magnetic CTA Action Buttons */}
        <div
          ref={ctaContainerRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 relative z-20 hero-entry"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            className="magnetic-interactive group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-foreground text-background font-semibold text-base md:text-lg rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.08)] hover:opacity-95 transition-all cursor-pointer border border-transparent"
          >
            <span>Explore Featured Work</span>
            <ArrowUpRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Secondary CTA */}
          <a
            href="/Manoj_Barmase_FullStack_AI_Resume.pdf"
            download="Manoj_Barmase_Resume.pdf"
            className="magnetic-interactive group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/70 dark:bg-white/[0.03] text-foreground font-semibold text-base md:text-lg border border-black/15 dark:border-white/10 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/25 dark:hover:border-white/20 transition-all shadow-sm dark:shadow-none backdrop-blur-md cursor-pointer"
          >
            <span>Download Resume</span>
            <Download
              size={19}
              className="text-primary-muted group-hover:text-foreground transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
