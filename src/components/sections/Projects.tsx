"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  ExternalLink, 
  Layers, 
  Database, 
  Lock, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  FileText, 
  Activity,
  Terminal,
  ArrowUpRight
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom Github Icon matching Lucide aesthetic
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.05 5.05 0 0 0 19 4.78a4.6 4.6 0 0 0-.1-3.2s-1.3-.4-4.2 1.6a14.2 14.2 0 0 0-7.8 0c-2.9-2-4.2-1.6a4.6 4.6 0 0 0-.1 3.2A5.05 5.05 0 0 0 3 7.82c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 8.5 18v4"></path>
  </svg>
);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"all" | "mankray" | "ai">("all");

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.project-bento');
    
    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        scale: 0.96,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });

    const cleanups: (() => void)[] = [];
    if (sectionRef.current) {
      const magneticCards = sectionRef.current.querySelectorAll<HTMLElement>('.magnetic-card, .magnetic-interactive');
      magneticCards.forEach((el) => {
        cleanups.push(magneticHelper(el));
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, { scope: sectionRef });

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-black/5 dark:border-white/5 overflow-hidden"
    >
      {/* Aurora Glows */}
      <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] bg-fuchsia-500/15 dark:bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-violet-500/15 dark:bg-violet-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-fuchsia-600 dark:text-fuchsia-400 font-semibold mb-3">
              03 / Flagship Architectures
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              Featured Work.
            </h2>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/5 w-fit">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === "all" 
                  ? "bg-foreground text-background shadow-md" 
                  : "text-primary-muted hover:text-foreground"
              }`}
            >
              All Flagships (2)
            </button>
            <button
              onClick={() => setActiveTab("mankray")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === "mankray" 
                  ? "bg-foreground text-background shadow-md" 
                  : "text-primary-muted hover:text-foreground"
              }`}
            >
              Enterprise VMS
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === "ai" 
                  ? "bg-foreground text-background shadow-md" 
                  : "text-primary-muted hover:text-foreground"
              }`}
            >
              Low-Latency AI
            </button>
          </div>
        </div>

        <div className="space-y-16">
          {/* ============================================================== */}
          {/* PROJECT 1: Mankray - Enterprise Procurement & VMS              */}
          {/* ============================================================== */}
          {(activeTab === "all" || activeTab === "mankray") && (
            <div className="project-bento relative p-8 md:p-12 bg-white/75 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-2xl group hover:border-violet-500/40 dark:hover:border-violet-500/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                {/* Left Col: Project Info */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center border border-violet-500/20">
                        <Layers size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-violet-700 dark:text-violet-300 bg-violet-500/10 dark:bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-violet-500/20 dark:border-white/5">
                        Enterprise MERN & VMS
                      </span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        5 Hierarchical RBAC Roles
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                      Mankray — Enterprise Procurement & VMS
                    </h3>
                    
                    <p className="text-base md:text-lg text-primary-muted font-normal leading-relaxed mb-6">
                      Architected an enterprise-grade Procurement System using the MERN stack to centralize vendor data, manage complex contract lifecycles, and automate purchasing workflows. Designed with normalized schema integrity, sub-second query execution, and comprehensive spend auditing.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a 
                      href="https://mankray-app.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="magnetic-interactive flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold text-sm rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md"
                    >
                      <ExternalLink size={17} />
                      Live Application
                    </a>
                    <a 
                      href="https://github.com/ManojBarmase/mankray-procurement-vms" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="magnetic-interactive flex items-center gap-2 px-6 py-3 bg-black/[0.03] dark:bg-white/[0.03] text-foreground font-bold text-sm border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                      <GithubIcon size={17} />
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Right Col: Interactive Visual Mockup */}
                <div className="lg:col-span-5 relative bg-black/[0.03] dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl group/img aspect-[16/11] flex flex-col">
                  {/* Window Bar */}
                  <div className="h-8 border-b border-black/5 dark:border-white/5 flex items-center px-4 gap-2 bg-black/[0.02] dark:bg-white/[0.02] shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[11px] font-mono text-primary-muted/60 ml-2">mankray-app.vercel.app</span>
                  </div>
                  <div className="relative flex-1 w-full bg-black/5 dark:bg-black/40 overflow-hidden">
                    <Image 
                      src="/Mankray-dashboard.png"
                      alt="Mankray Enterprise Procurement Dashboard"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105" 
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      quality={95}
                    />
                  </div>
                </div>
              </div>

              {/* Architecture Deep Dive Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-black/10 dark:border-white/5">
                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2.5 text-foreground font-bold mb-2">
                    <Lock size={18} className="text-violet-500" />
                    <span>Granular RBAC Security</span>
                  </div>
                  <p className="text-xs text-primary-muted leading-relaxed font-normal">
                    Engineered secure REST API endpoints with granular Role-Based Access Control enforcing permission barriers across 5 hierarchical roles (Admin, Procurement Officer, Vendor, Auditor, Manager).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2.5 text-foreground font-bold mb-2">
                    <Database size={18} className="text-emerald-500" />
                    <span>Optimized MongoDB Pipelines</span>
                  </div>
                  <p className="text-xs text-primary-muted leading-relaxed font-normal">
                    Optimized database aggregation queries and indexing strategies, eliminating N+1 query bottlenecks and safeguarding transaction integrity across heavy procurement logs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2.5 text-foreground font-bold mb-2">
                    <Activity size={18} className="text-cyan-500" />
                    <span>Real-Time Spend Tracking</span>
                  </div>
                  <p className="text-xs text-primary-muted leading-relaxed font-normal">
                    Built dynamic analytics dashboards providing real-time procurement spend tracking, budget thresholds, and automated alerting pipelines for impending contract expirations.
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-semibold text-primary-muted mr-2 flex items-center gap-1.5">
                  <Terminal size={14} className="text-violet-500" />
                  Stack:
                </span>
                {["MongoDB", "Express.js", "React.js", "Node.js", "Vite", "Tailwind CSS", "RBAC", "REST APIs"].map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-black/[0.04] dark:bg-white/[0.03] text-foreground/80 dark:text-primary-muted border border-black/5 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PROJECT 2: AI-Powered Mock Interviewer (Low-Latency AI)        */}
          {/* ============================================================== */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div className="project-bento relative p-8 md:p-12 bg-white/75 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-2xl group hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                {/* Left Col: Project Info */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                        <Cpu size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 dark:bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-cyan-500/20 dark:border-white/5">
                        Low-Latency AI Architecture
                      </span>
                      <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-semibold bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                        Groq LPU Acceleration (&lt;400ms TTFT)
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                      AI-Powered Mock Interviewer
                    </h3>
                    
                    <p className="text-base md:text-lg text-primary-muted font-normal leading-relaxed mb-6">
                      Developed a full-stack real-time AI application integrating cutting-edge LLM APIs and custom PDF parsing pipelines to ingest candidate resumes and dynamically generate context-aware, personalized technical interviews with instant feedback.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a 
                      href="https://ai-interviewer-app-manoj.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="magnetic-interactive flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold text-sm rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md"
                    >
                      <ExternalLink size={17} />
                      Live Application
                    </a>
                    <a 
                      href="https://github.com/manojbarmase/ai-interviewer-app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="magnetic-interactive flex items-center gap-2 px-6 py-3 bg-black/[0.03] dark:bg-white/[0.03] text-foreground font-bold text-sm border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                      <GithubIcon size={17} />
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Right Col: Interactive Visual Mockup */}
                <div className="lg:col-span-5 relative bg-black/[0.03] dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl group/img aspect-[16/11] flex flex-col">
                  {/* Window Bar */}
                  <div className="h-8 border-b border-black/5 dark:border-white/5 flex items-center px-4 gap-2 bg-black/[0.02] dark:bg-white/[0.02] shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[11px] font-mono text-primary-muted/60 ml-2">ai-interviewer-app-manoj.vercel.app</span>
                  </div>
                  <div className="relative flex-1 w-full bg-black/5 dark:bg-black/40 overflow-hidden">
                    <Image 
                      src="/Ai-interviewer-app.png"
                      alt="AI-Powered Mock Interviewer Application Screenshot"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105" 
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      quality={95}
                    />
                    {/* Floating Telemetry Pill */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-emerald-400 text-[11px] font-mono font-semibold shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Groq LPU • &lt;400ms TTFT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture Deep Dive Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-black/10 dark:border-white/5">
                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-foreground font-bold">
                        <Zap size={18} className="text-amber-500" />
                        <span>Groq LPU Acceleration</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        &lt;400ms
                      </span>
                    </div>
                    <p className="text-xs text-primary-muted leading-relaxed font-normal">
                      Overcame critical conversational latency bottlenecks by migrating execution to Groq LPU, delivering sub-400ms real-time AI generation without conversational stutters.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-foreground font-bold">
                        <FileText size={18} className="text-blue-500" />
                        <span>Dynamic CV Ingestion</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        PDF Parsing
                      </span>
                    </div>
                    <p className="text-xs text-primary-muted leading-relaxed font-normal">
                      Built custom PDF processing pipelines extracting candidate experiences, proficiencies, and metrics to tailor question difficulty and context dynamically in real-time.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-foreground font-bold">
                        <ShieldCheck size={18} className="text-rose-500" />
                        <span>Redis Rate-Limiting</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                        10 req/min
                      </span>
                    </div>
                    <p className="text-xs text-primary-muted leading-relaxed font-normal">
                      Secured serverless endpoints via Redis rate-limiting middleware (10 req/min) to prevent abuse and deployed containerized workflows using Docker and cloud platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-semibold text-primary-muted mr-2 flex items-center gap-1.5">
                  <Terminal size={14} className="text-cyan-500" />
                  Stack:
                </span>
                {["Next.js", "Supabase", "Groq LPU", "Python / Node AI APIs", "Redis (Upstash)", "Docker", "Zod", "Vercel"].map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-black/[0.04] dark:bg-white/[0.03] text-foreground/80 dark:text-primary-muted border border-black/5 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
