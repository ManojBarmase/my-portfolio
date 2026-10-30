"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  Briefcase, 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.exp-card');
    
    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        scale: 0.96,
        duration: 1.1,
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
      const magneticCards = sectionRef.current.querySelectorAll<HTMLElement>('.magnetic-card');
      magneticCards.forEach((el) => {
        cleanups.push(magneticHelper(el));
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, { scope: sectionRef });

  const experiences = [
    {
      company: "Brandworks Worldwide (Revynox)",
      role: "Software Developer",
      period: "Nov 2025 – Sep 2026",
      location: "Remote / India",
      type: "Full-Time",
      accent: "blue",
      metrics: [
        { label: "B2B Modules", value: "6+ Shipped", icon: Briefcase },
        { label: "Daily Transactions", value: "10,000+", icon: Database },
        { label: "Code Delivery Speed", value: "+30%", icon: TrendingUp },
        { label: "Query Latency Reduction", value: "-40%", icon: Zap },
      ],
      highlights: [
        {
          title: "Enterprise B2B Web Applications",
          icon: Code2,
          desc: "Developed and maintained enterprise web applications using React.js, Node.js, and Express.js, delivering 6+ core B2B modules (inventory, and invoicing)."
        },
        {
          title: "ACID Database Architecture & High-Availability",
          icon: Database,
          desc: "Designed secure REST APIs and optimized MongoDB and PostgreSQL database schemas, ensuring ACID compliance and high-availability for over 10,000+ daily transactions."
        },
        {
          title: "AI / LLM Integration & Workflow Automation",
          icon: Cpu,
          desc: "Integrated AI/LLM models and automated workflows into the development lifecycle, accelerating code delivery by 30% and reducing query latency by 40%."
        },
        {
          title: "Agile CI/CD & Containerized Pipelines",
          icon: ShieldCheck,
          desc: "Collaborated closely with Product, UI/UX, and Engineering teams in an Agile environment using Docker, Git, and automated CI/CD deployment pipelines."
        }
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "AI / LLM APIs",
        "Docker",
        "Git",
        "CI/CD Pipelines",
        "RESTful APIs",
        "ACID Transactions"
      ]
    },
    {
      company: "White Soft Info",
      role: "Web Developer Trainee",
      period: "Apr 2025 – Sep 2025",
      location: "Remote / India",
      type: "Trainee / Full-Stack",
      accent: "emerald",
      metrics: [
        { label: "User Retention", value: "+25%", icon: TrendingUp },
        { label: "Daily Requests", value: "5,000+", icon: Database },
        { label: "Backend API Uptime", value: "99.9%", icon: ShieldCheck },
        { label: "Load Speed Boost", value: "+35%", icon: Zap },
      ],
      highlights: [
        {
          title: "Responsive Frontend Engineering",
          icon: Code2,
          desc: "Built and shipped responsive frontend interfaces using React.js and Tailwind CSS, improving cross-device compatibility and driving user retention by 25%."
        },
        {
          title: "Robust REST APIs & Optimized Routing",
          icon: Database,
          desc: "Engineered robust backend REST APIs and optimized data routing with Node.js, Express.js, and MongoDB, handling 5,000+ daily requests with 99.9% uptime."
        },
        {
          title: "Full-Stack Bottleneck Elimination",
          icon: Zap,
          desc: "Identified and resolved full-stack performance bottlenecks, achieving a 35% improvement in overall application loading speed across browsers."
        },
        {
          title: "Cross-Functional Agile Delivery",
          icon: Briefcase,
          desc: "Engaged in daily Agile cross-functional coordination to translate ambiguous business requirements into robust, scalable technical implementations."
        }
      ],
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Performance Optimization",
        "Agile / Scrum"
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-black/5 dark:border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/3 w-[36rem] h-[36rem] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/3 left-1/4 w-[32rem] h-[32rem] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400 font-semibold mb-3">
            02 / Track Record
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Professional Experience.
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="exp-card relative p-8 md:p-10 bg-white/75 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-2xl group hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
            >
              {/* Header Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-black/10 dark:border-white/5 pb-8">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl ${
                    exp.accent === 'blue' 
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' 
                      : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                  } flex items-center justify-center border shrink-0`}>
                    <Briefcase size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm md:text-base text-primary-muted font-medium">
                      <span className="font-semibold text-foreground/90">{exp.company}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/5 rounded-full text-foreground text-sm font-mono font-bold w-fit">
                    {exp.period}
                  </div>
                </div>
              </div>

              {/* Metrics Band */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {exp.metrics.map((m, mIdx) => (
                  <div 
                    key={mIdx}
                    className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] flex items-center justify-center text-primary-muted shrink-0">
                      <m.icon size={16} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground tracking-tight">{m.value}</div>
                      <div className="text-[11px] font-mono text-primary-muted">{m.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullet Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {exp.highlights.map((item, hIdx) => (
                  <div 
                    key={hIdx}
                    className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/10 dark:border-white/5 group-hover:bg-blue-50/30 dark:group-hover:bg-white/[0.04] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-7 h-7 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <h4 className="text-base font-bold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-primary-muted font-normal leading-relaxed pl-10">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Applied Footer */}
              <div className="p-5 bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl border border-black/10 dark:border-white/5 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2 text-foreground font-semibold shrink-0">
                  <Terminal size={17} className={exp.accent === 'blue' ? "text-blue-500" : "text-emerald-500"} />
                  <span className="text-xs uppercase tracking-wider font-mono">Technologies Applied:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1.5 text-xs font-mono font-medium bg-black/[0.04] dark:bg-white/[0.03] text-foreground/80 dark:text-primary-muted border border-black/5 dark:border-white/5 rounded-lg transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
