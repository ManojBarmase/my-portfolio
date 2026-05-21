"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { 
  GraduationCap, BookOpen, School, 
  Award, LibraryBig, Milestone
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Seamless WebGL Background integration
const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.edu-bento');
    
    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        rotationX: 5,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });

    if (sectionRef.current) {
      const magneticCards = sectionRef.current.querySelectorAll('.magnetic-card');
      magneticCards.forEach((el) => magneticHelper(el as HTMLElement));
    }
  }, { scope: sectionRef });

  return (
    <section 
      id="education" 
      ref={sectionRef} 
      className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 py-16 border-t border-black/5 dark:border-white/5 overflow-hidden perspective-[1000px]"
    >
      {/* 1. Consistent WebGL Background */}
      <ThreeScene />

      {/* 2. Vibrant Aurora Glows (Indigo & Rose color theme for Academics) */}
      <div className="absolute top-1/4 right-1/4 w-[35rem] h-[35rem] bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-rose-500/20 dark:bg-rose-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
            04 / Academic Foundation
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Education.
          </h2>
        </div>

        {/* Apple-Style Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* ==========================================
              BENTO 1: B.Tech (The Crown Jewel) - Spans 6 Columns
              ========================================== */}
          <div className="edu-bento magnetic-card md:col-span-6 relative p-8 md:p-10 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-[2.5rem] flex flex-col justify-between overflow-hidden backdrop-blur-2xl group hover:border-indigo-500/40 dark:hover:border-indigo-500/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none min-h-[320px]">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                  <GraduationCap size={28} />
                </div>
                {/* Highlighted Year Pill */}
                <div className="px-4 py-2 bg-indigo-500/10 dark:bg-white/[0.03] border border-indigo-500/20 dark:border-white/5 rounded-full text-indigo-800 dark:text-primary-muted text-sm font-mono font-bold">
                  2020 - 2024
                </div>
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                Bachelor of Technology
              </h3>
              <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                Computer Science & Engineering
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-black/10 dark:border-white/5 pt-6">
              <div className="flex items-center gap-3">
                <LibraryBig size={20} className="text-primary-muted" />
                <span className="text-sm font-medium text-primary-muted">RGPV University</span>
              </div>
              {/* Score Highlight */}
              <div className="flex items-center gap-2">
                <Award size={20} className="text-amber-500" />
                <span className="text-lg font-bold text-foreground">CGPA: 7.57<span className="text-primary-muted text-sm">/10</span></span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}