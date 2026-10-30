"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Workflow, 
  Terminal,
  MapPin,
  Clock
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".bento-card", {
      opacity: 0,
      scale: 0.96,
      y: 35,
      stagger: 0.08,
      duration: 0.9,
      ease: "power3.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    const cleanups: (() => void)[] = [];
    if (sectionRef.current) {
      const magneticCards = sectionRef.current.querySelectorAll<HTMLElement>('.magnetic-card');
      magneticCards.forEach((card) => {
        cleanups.push(magneticHelper(card));
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, { scope: sectionRef });

  const skillCategories = [
    {
      title: "Languages & Frontend",
      icon: Layers,
      color: "text-blue-500",
      bgBadge: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      skills: [
        "TypeScript",
        "JavaScript (ES6+)",
        "React.js 19",
        "Next.js 16",
        "Vite",
        "Tailwind CSS v4",
        "HTML5 / CSS3",
        "WebSockets"
      ]
    },
    {
      title: "Backend & System APIs",
      icon: Server,
      color: "text-emerald-500",
      bgBadge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "WebSockets",
        "Python (FastAPI / Flask)",
        "Core Java",
        "Zod Validation",
        "RBAC Security"
      ]
    },
    {
      title: "Databases & DevOps",
      icon: Database,
      color: "text-orange-500",
      bgBadge: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
      skills: [
        "MongoDB (Aggregations)",
        "PostgreSQL",
        "Supabase",
        "Prisma ORM",
        "Docker Containerization",
        "CI/CD Pipelines",
        "AWS / GCP Basics",
        "Git & Vercel"
      ]
    },
    {
      title: "AI Integration & Tools",
      icon: Cpu,
      color: "text-violet-500",
      bgBadge: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20",
      skills: [
        "LLM APIs",
        "Groq LPU (<400ms TTFT)",
        "PDF Parsing Pipelines",
        "Redis (Upstash/KV)",
        "Rate-Limiting (10 req/m)",
        "Role-Based Access (5 Roles)",
        "Postman",
        "Agile / Scrum"
      ]
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-black/10 dark:border-white/5 overflow-hidden bg-gray-50/50 dark:bg-transparent"
    >
      {/* Ambient Aurora Glows */}
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-fuchsia-400/25 dark:bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 left-1/4 w-[32rem] h-[32rem] bg-cyan-400/25 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-violet-600 dark:text-violet-400 font-bold mb-3">
            01 / Professional Profile
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-foreground">
            Engineering & Technical Mastery.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {/* Main Professional Summary Card (Spans 8 columns) */}
          <div className="bento-card md:col-span-8 relative p-8 md:p-10 bg-white/80 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-2xl group hover:border-violet-500/40 dark:hover:border-violet-500/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none min-h-[340px]">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-500/15 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/25 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between z-10 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center border border-violet-500/20">
                  <Sparkles size={22} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.03] text-xs font-mono font-semibold text-primary-muted border border-black/5 dark:border-white/5">
                    <Clock size={13} className="text-violet-500" />
                    15+ Months Exp
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.03] text-xs font-mono font-semibold text-primary-muted border border-black/5 dark:border-white/5">
                    <MapPin size={13} className="text-cyan-500" />
                    Pune, India
                  </span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                Architecting Resilient Web Systems with Low-Latency Intelligence.
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 dark:text-primary-muted leading-relaxed font-normal mb-6">
                Results-driven Full Stack Developer with over 15 months of experience architecting scalable MERN stack applications, designing secure REST APIs, and integrating low-latency AI/LLM models. Proven expertise in optimizing MongoDB databases, deploying containerized applications via Docker and CI/CD pipelines, and delivering high-performance, AI-powered solutions in Agile environments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-black/10 dark:border-white/5 font-mono text-xs">
              <span className="font-semibold text-foreground mr-2">Core Focus:</span>
              <span className="px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-700 dark:text-violet-300 font-medium">Enterprise B2B Modules</span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-medium">Groq LPU Acceleration</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-medium">ACID Schema Optimization</span>
              <span className="px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-700 dark:text-orange-300 font-medium">Granular RBAC</span>
            </div>
          </div>

          {/* Quick Metrics / Philosophy Card (Spans 4 columns) */}
          <div className="bento-card md:col-span-4 relative p-8 bg-white/80 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-cyan-500/30 transition-all shadow-sm dark:shadow-none min-h-[340px]">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <Workflow size={22} />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                Agile Lifecycle
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">
                Production-Grade Delivery
              </h3>
              <p className="text-sm text-primary-muted leading-relaxed mb-6 font-normal">
                Bridging business requirements with resilient technical execution through daily cross-functional collaboration, Dockerized micro-services, and CI/CD automation.
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <span className="text-primary-muted">B2B Core Modules</span>
                  <span className="font-bold text-foreground">6+ Shipped</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <span className="text-primary-muted">Real-Time AI TTFT</span>
                  <span className="font-bold text-violet-500">&lt;400ms</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <span className="text-primary-muted">Transaction Load</span>
                  <span className="font-bold text-emerald-500">10,000+ / day</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Deep Technical Domains Bento Cards (4 x 3 Cols = 12 Cols) */}
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="bento-card magnetic-card md:col-span-6 lg:col-span-3 relative p-6 bg-white/70 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-violet-500/30 transition-all shadow-sm dark:shadow-none min-h-[280px]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-2xl bg-black/[0.04] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center ${cat.color} group-hover:scale-105 transition-transform`}>
                    <cat.icon size={20} />
                  </div>
                  <Terminal size={16} className="text-primary-muted/50" />
                </div>
                
                <h4 className="text-lg font-bold tracking-tight text-foreground mb-4">
                  {cat.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-semibold font-mono bg-black/[0.04] dark:bg-white/[0.03] text-foreground/80 dark:text-primary-muted border border-black/5 dark:border-white/5 rounded-lg group-hover:border-violet-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Enterprise Security & Architecture Banner */}
          <div className="bento-card md:col-span-12 relative p-6 bg-white/80 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between backdrop-blur-xl group hover:border-emerald-500/30 transition-all gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold tracking-tight text-foreground mb-1">
                  Enterprise-Grade Security & Performance Standards
                </h4>
                <p className="text-sm text-primary-muted leading-relaxed font-normal">
                  Strict Zod runtime data validation, 5-level hierarchical Role-Based Access Control (RBAC), Redis-backed distributed rate limiting (10 req/min), and ACID-compliant transaction integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
