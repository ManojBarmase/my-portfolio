"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  GraduationCap, 
  Award, 
  LibraryBig, 
  CheckCircle2,
  Calendar,
  Code2
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.edu-bento');
    
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
      const magneticCards = sectionRef.current.querySelectorAll<HTMLElement>('.magnetic-card');
      magneticCards.forEach((el) => {
        cleanups.push(magneticHelper(el));
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, { scope: sectionRef });

  const btechCoursework = [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Operating Systems & Architecture",
    "Computer Networks & Protocols",
    "Software Engineering Methodologies"
  ];

  const certifications = [
    {
      title: "Web Development Certification",
      organization: "Infosys Springboard",
      date: "Dec 2024",
      desc: "Comprehensive enterprise web engineering covering modern JavaScript, scalable full-stack architectures, and production best practices.",
      badge: "Verified Credential",
      color: "text-indigo-600 dark:text-indigo-400",
      bgBadge: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20"
    },
    {
      title: "Core Java Training",
      organization: "Sage University",
      date: "Jan 2022",
      desc: "Rigorous programmatic foundation in Java OOP design principles, multithreading, algorithmic problem-solving, and memory architectures.",
      badge: "Specialized Training",
      color: "text-rose-600 dark:text-rose-400",
      bgBadge: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20"
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef} 
      className="relative min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 border-t border-black/5 dark:border-white/5 overflow-hidden"
    >
      {/* Aurora Glows */}
      <div className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 left-1/4 w-[32rem] h-[32rem] bg-rose-500/15 dark:bg-rose-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        <div className="mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
            04 / Credentials & Foundations
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Education & Certifications.
          </h2>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {/* BENTO 1: B.Tech Degree (Spans 6 Columns) */}
          <div className="edu-bento magnetic-card md:col-span-6 relative p-5 sm:p-8 md:p-10 bg-white/75 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-3xl sm:rounded-[2.5rem] flex flex-col justify-between overflow-hidden backdrop-blur-2xl group hover:border-indigo-500/40 dark:hover:border-indigo-500/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none min-h-[380px] h-full">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/20 shrink-0">
                  <GraduationCap size={26} />
                </div>
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-500/10 dark:bg-white/[0.03] border border-indigo-500/20 dark:border-white/5 rounded-full text-indigo-800 dark:text-indigo-400 text-xs sm:text-sm font-mono font-bold">
                  2020 – 2024
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-1.5">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                Computer Science
              </p>
              
              <p className="text-sm text-primary-muted leading-relaxed font-normal mb-6">
                Completed formal 4-year Computer Science curriculum with disciplined rigor in algorithmic foundations, data structures, low-level system designs, and distributed databases.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {btechCoursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-black/[0.03] dark:bg-white/[0.03] text-foreground/80 dark:text-primary-muted border border-black/5 dark:border-white/5"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/5 pt-5 sm:pt-6 mt-auto">
              <div className="flex items-center gap-2.5">
                <LibraryBig size={18} className="text-primary-muted shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Award size={18} className="text-amber-500 shrink-0" />
                <span className="text-sm sm:text-base font-bold text-foreground font-mono">
                  CGPA: 7.57<span className="text-primary-muted text-xs">/10</span>
                </span>
              </div>
            </div>
          </div>

          {/* BENTO 2: Verified Certifications (Spans 6 Columns) */}
          <div className="edu-bento magnetic-card md:col-span-6 relative p-5 sm:p-8 md:p-10 bg-white/75 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-3xl sm:rounded-[2.5rem] flex flex-col justify-between overflow-hidden backdrop-blur-2xl group hover:border-rose-500/40 dark:hover:border-rose-500/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none min-h-[380px] h-full">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-rose-500/20 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20 shrink-0">
                  <Award size={26} />
                </div>
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-rose-500/10 dark:bg-white/[0.03] border border-rose-500/20 dark:border-white/5 rounded-full text-rose-800 dark:text-rose-400 text-xs sm:text-sm font-mono font-bold">
                  Industry Certified
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-1.5">
                Professional Certifications
              </h3>
              <p className="text-base sm:text-lg font-semibold text-rose-600 dark:text-rose-400 mb-6">
                Verified Technical Accreditations
              </p>

              <div className="space-y-4 mb-6">
                {certifications.map((cert, cIdx) => (
                  <div 
                    key={cIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-rose-500/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 mb-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <Code2 size={16} className={`${cert.color} shrink-0`} />
                        <h4 className="text-sm sm:text-base font-bold text-foreground tracking-tight">
                          {cert.title}
                        </h4>
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${cert.bgBadge} w-fit shrink-0 self-start sm:self-auto`}>
                        {cert.badge}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-primary-muted font-medium mb-2 sm:pl-6">
                      <span className="font-semibold text-foreground/90">{cert.organization}</span>
                      <span className="text-primary-muted/40">•</span>
                      <span className="inline-flex items-center gap-1 font-mono">
                        <Calendar size={12} />
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-xs text-primary-muted leading-relaxed sm:pl-6">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-black/10 dark:border-white/5 pt-5 sm:pt-6 mt-auto">
              <span className="text-xs font-mono text-primary-muted">
                Continuous Technical Advancement
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">
                  Applied Production Mastery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
