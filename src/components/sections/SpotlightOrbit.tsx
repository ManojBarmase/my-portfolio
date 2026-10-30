"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { magneticHelper } from "@/lib/utils";

interface OrbitLabel {
  text: string;
  color: string;
  borderHover: string;
  radius: string;
  duration: number;
  delay: number;
}

// Responsive clamp configurations for concentric rings
const RING_RADII = {
  inner: "clamp(170px, 38vw, 360px)",
  middle: "clamp(220px, 54vw, 520px)",
  outer: "clamp(270px, 70vw, 680px)",
};

// MATHEMATICAL DISTRIBUTION: Tailored Text Labels for Manoj's MERN + AI Persona
const orbitLabels: OrbitLabel[] = [
  // Ring 1 (Inner): Core Persona (3 items, 120deg apart)
  { text: "MERN Stack", color: "text-blue-600 dark:text-blue-400", borderHover: "group-hover/item:border-blue-500/50", radius: RING_RADII.inner, duration: 32, delay: (0 / 3) * 32 },
  { text: "AI / LLM Integration", color: "text-violet-600 dark:text-violet-400", borderHover: "group-hover/item:border-violet-500/50", radius: RING_RADII.inner, duration: 32, delay: (1 / 3) * 32 },
  { text: "Full Stack Engineer", color: "text-emerald-600 dark:text-emerald-400", borderHover: "group-hover/item:border-emerald-500/50", radius: RING_RADII.inner, duration: 32, delay: (2 / 3) * 32 },

  // Ring 2 (Middle): Core Technical Competencies (4 items, 90deg apart)
  { text: "React 19 & Next.js 16", color: "text-foreground", borderHover: "group-hover/item:border-white/50", radius: RING_RADII.middle, duration: 42, delay: (0 / 4) * 42 },
  { text: "Groq LPU (<400ms TTFT)", color: "text-cyan-600 dark:text-cyan-400", borderHover: "group-hover/item:border-cyan-500/50", radius: RING_RADII.middle, duration: 42, delay: (1 / 4) * 42 },
  { text: "MongoDB & PostgreSQL", color: "text-orange-600 dark:text-orange-400", borderHover: "group-hover/item:border-orange-500/50", radius: RING_RADII.middle, duration: 42, delay: (2 / 4) * 42 },
  { text: "Node.js & Express APIs", color: "text-fuchsia-600 dark:text-fuchsia-400", borderHover: "group-hover/item:border-fuchsia-500/50", radius: RING_RADII.middle, duration: 42, delay: (3 / 4) * 42 },

  // Ring 3 (Outer): Infrastructure & Enterprise Standards (4 items, 90deg apart)
  { text: "Docker & CI/CD", color: "text-blue-500", borderHover: "group-hover/item:border-blue-500/50", radius: RING_RADII.outer, duration: 52, delay: (0 / 4) * 52 },
  { text: "Redis & Rate-Limiting", color: "text-rose-500", borderHover: "group-hover/item:border-rose-500/50", radius: RING_RADII.outer, duration: 52, delay: (1 / 4) * 52 },
  { text: "Granular RBAC Security", color: "text-amber-500", borderHover: "group-hover/item:border-amber-500/50", radius: RING_RADII.outer, duration: 52, delay: (2 / 4) * 52 },
  { text: "ACID High-Availability", color: "text-emerald-500", borderHover: "group-hover/item:border-emerald-500/50", radius: RING_RADII.outer, duration: 52, delay: (3 / 4) * 52 },
];

export default function SpotlightOrbit() {
  const profileContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (profileContainerRef.current) {
      return magneticHelper(profileContainerRef.current);
    }
  }, []);

  return (
    <section className="relative min-h-[460px] sm:min-h-[560px] md:min-h-screen w-full flex items-center justify-center overflow-hidden py-12 sm:py-20 md:py-36 lg:py-48 bg-transparent border-y border-border-subtle/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[480px] md:w-[600px] h-[280px] sm:h-[480px] md:h-[600px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative flex items-center justify-center w-full h-full z-10 max-w-7xl mx-auto px-4">
        {/* Profile Container (Gravity Source) */}
        <motion.div 
          ref={profileContainerRef}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="magnetic interactive relative z-30 group"
        >
          <div className="absolute inset-0 rounded-full bg-violet-500/20 animate-ping duration-[3000ms]" />
          <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-violet-500/10 animate-pulse" />
          
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-background shadow-2xl transition-all duration-700 grayscale group-hover:grayscale-0">
             <Image 
               src="/profile.png" 
               alt="Manoj Barmase" 
               fill 
               className="object-cover" 
               priority 
               sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, (max-width: 1024px) 224px, 288px"
             />
          </div>

          <div className="absolute -bottom-5 sm:-bottom-7 md:-bottom-8 left-1/2 -translate-x-1/2 px-4 py-1.5 sm:px-6 sm:py-2.5 bg-foreground text-background text-xs sm:text-sm font-bold rounded-full shadow-2xl whitespace-nowrap z-40 flex items-center gap-1.5">
            <span>Manoj Barmase</span>
            <span className="text-violet-500">•</span>
            <span className="text-xs opacity-80 hidden sm:inline">MERN & AI Integration</span>
          </div>
        </motion.div>

        {/* Static Visual Concentric Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="absolute rounded-full border border-dashed border-black/[0.08] dark:border-white/[0.08]"
            style={{ width: RING_RADII.inner, height: RING_RADII.inner }}
          />
          <div 
            className="absolute rounded-full border border-dashed border-black/[0.08] dark:border-white/[0.08]"
            style={{ width: RING_RADII.middle, height: RING_RADII.middle }}
          />
          <div 
            className="absolute rounded-full border border-dashed border-black/[0.08] dark:border-white/[0.08]"
            style={{ width: RING_RADII.outer, height: RING_RADII.outer }}
          />
        </div>

        {/* Dynamic Text Orbits */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {orbitLabels.map((item, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: -(item.delay ?? 0) }}
              style={{ width: item.radius, height: item.radius }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group/item"
                animate={{ rotate: -360 }}
                transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: -(item.delay ?? 0) }}
              >
                <div className={`magnetic-logo px-2.5 py-1 sm:px-3.5 sm:py-1.5 md:px-5 md:py-2.5 rounded-full flex items-center justify-center bg-white/80 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-lg md:shadow-xl transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-background ${item.borderHover} cursor-default select-none`}>
                   <span className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-tight sm:tracking-wide whitespace-nowrap ${item.color}`}>
                     {item.text}
                   </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
