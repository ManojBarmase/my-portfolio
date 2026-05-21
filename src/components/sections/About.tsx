"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { 
  Sparkles, FileText, Globe, 
  LayoutTemplate, Server, Database 
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";

// WebGL Background remains for consistency
const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".bento-card", {
      opacity: 0,
      scale: 0.95,
      y: 40,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    if (sectionRef.current) {
      const magneticCards = sectionRef.current.querySelectorAll('.magnetic-card');
      magneticCards.forEach((card) => magneticHelper(card as HTMLElement));
    }
  }, { scope: sectionRef });

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-16 border-t border-black/10 dark:border-white/5 overflow-hidden bg-gray-50/50 dark:bg-transparent"
    >
      <ThreeScene />

      {/* Ambient Aurora Glows */}
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-fuchsia-400/30 dark:bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-cyan-400/30 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-violet-600 dark:text-violet-400 font-bold mb-3">
            01 / Background
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-foreground">
            Software Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* CORE PHILOSOPHY */}
          <div className="bento-card md:col-span-2 relative p-8 md:p-10 bg-white/70 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-2xl group hover:border-violet-500/50 dark:hover:border-violet-500/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none min-h-[300px]">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-500/20 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/30 transition-all duration-700" />
            
            <div className="flex items-center justify-between z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                <Sparkles size={22} />
              </div>
              <span className="text-xs font-mono text-gray-500 dark:text-primary-muted/50 font-semibold">Core Philosophy</span>
            </div>

            <div className="z-10">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 mb-6">
                Driven by Definite Major Purpose.
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-primary-muted leading-relaxed font-medium">
                 I engineer scalable, full-stack software solutions with an obsessive focus on performance and robust architecture. Beyond writing clean, maintainable code, my ultimate goal is to transform complex business requirements into seamless, production-ready web applications that drive real impact.
              </p>
            </div>
          </div>

          {/* SDLC & DOCS */}
          {/* 2. SDLC & Docs Card */}
          <div className="bento-card md:col-span-1 relative p-8 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
                <FileText size={22} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                SDLC & Docs
              </h3>
              {/* Industry Standard Accessibility Fix: Added font-bold and Deep Cyan Text for Light Mode */}
              <div className="space-y-3 font-mono text-xs font-bold">
                {["PRD (Requirements)", "SRS (System Specs)", "FRD (Functional)"].map((doc, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 px-3 py-2.5 bg-cyan-500/10 dark:bg-white/[0.03] border border-cyan-500/20 dark:border-white/5 rounded-lg text-cyan-900 dark:text-primary-muted group-hover:bg-cyan-500/20 dark:group-hover:border-cyan-500/30 transition-all"
                  >
                    {/* Darker dot for light mode, bright dot for dark mode */}
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>
      

          {/* ROW 2: The Splitted Tech Stack (Frontend, Backend, Database) */}
          
          {/* 1. Frontend Card */}
          <div className="bento-card magnetic-card md:col-span-1 relative p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col overflow-hidden backdrop-blur-xl group hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none min-h-[200px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <LayoutTemplate size={18} />
              </div>
              <h4 className="text-lg font-bold tracking-tight text-foreground">Frontend</h4>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["React.js", "Next.js", "Tailwind CSS"].map((tech, i) => (
                <span 
                  key={i} 
                  // Industry Standard Tinted Tokens for Light Mode, Minimal for Dark Mode
                  className="px-3 py-1.5 text-xs font-bold font-mono bg-blue-500/10 text-blue-700 border border-blue-500/20 dark:bg-white/[0.03] dark:text-primary-muted dark:border-white/5 dark:hover:text-blue-400 rounded-lg group-hover:bg-blue-500/20 dark:group-hover:border-blue-500/30 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Backend Card */}
          <div className="bento-card magnetic-card md:col-span-1 relative p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col overflow-hidden backdrop-blur-xl group hover:border-emerald-500/30 transition-colors shadow-sm dark:shadow-none min-h-[200px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Server size={18} />
              </div>
              <h4 className="text-lg font-bold tracking-tight text-foreground">Backend</h4>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Node.js", "Express.js", "Strapi", "Docusaurus"].map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-xs font-bold font-mono bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:bg-white/[0.03] dark:text-primary-muted dark:border-white/5 dark:hover:text-emerald-400 rounded-lg group-hover:bg-emerald-500/20 dark:group-hover:border-emerald-500/30 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Database Card */}
          <div className="bento-card magnetic-card md:col-span-1 relative p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col overflow-hidden backdrop-blur-xl group hover:border-orange-500/30 transition-colors shadow-sm dark:shadow-none min-h-[200px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                <Database size={18} />
              </div>
              <h4 className="text-lg font-bold tracking-tight text-foreground">Database</h4>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["MongoDB", "Supabase", "Prisma", "AWS"].map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-xs font-bold font-mono bg-orange-500/10 text-orange-800 border border-orange-500/20 dark:bg-white/[0.03] dark:text-primary-muted dark:border-white/5 dark:hover:text-orange-400 rounded-lg group-hover:bg-orange-500/20 dark:group-hover:border-orange-500/30 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

         {/* 👇 STEP 3: PASTE SEO SECTION HERE 👇 */}
        {/* SEO SECTION - Now outside the main grid, acting as a full-width footer row */}
        <div className="bento-card w-full mt-6 relative p-6 bg-white/70 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-3xl flex flex-col md:flex-row md:items-center justify-between overflow-hidden backdrop-blur-2xl group hover:border-fuchsia-500/50 dark:hover:border-fuchsia-500/30 transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center">
              <Globe size={22} />
            </div>
            <div>
              <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-foreground mb-1">
                Organic Discoverability & SEO
              </h4>
              <p className="text-sm text-gray-600 dark:text-primary-muted leading-relaxed font-medium">
                Implementing deep programmatic SEO, content architectures, and structural JSON-LD metadata.
              </p>
            </div>
          </div>
          {/* Decorative Dashed Line */}
          <div className="hidden md:block flex-1 max-w-sm h-1 border-t-2 border-dashed border-black/20 dark:border-white/10 mx-auto" />
        </div>
        {/* 👆 SEO SECTION ENDS HERE 👆 */}  

      </div>
    </section>
  );
}


// "use client";
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import dynamic from "next/dynamic";
// import { 
//   Sparkles, FileText, Globe, 
//   LayoutTemplate, Server, Database 
// } from "lucide-react";
// import { magneticHelper } from "@/lib/utils";

// // Re-using the exactly same optimized WebGL background for visual consistency
// const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// export default function About() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.from(".bento-card", {
//       opacity: 0,
//       scale: 0.95,
//       y: 40,
//       stagger: 0.1,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 75%",
//       }
//     });

//     if (sectionRef.current) {
//       const magneticCards = sectionRef.current.querySelectorAll('.magnetic-card');
//       magneticCards.forEach((card) => magneticHelper(card as HTMLElement));
//     }
//   }, { scope: sectionRef });

//   return (
//     <section 
//       id="about" 
//       ref={sectionRef} 
//       className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-black/5 dark:border-white/5 overflow-hidden"
//     >
//       {/* 1. Animated Bubbles (WebGL) Background - Matches Hero Section perfectly */}
//       <ThreeScene />

//       {/* 2. Ambient Aurora Glows (Maintains Colorful Aesthetic in both Light/Dark) */}
//       <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-fuchsia-500/20 dark:bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
//       <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

//       <div className="max-w-6xl w-full mx-auto z-10 relative">
        
//         {/* Section Header */}
//         <div className="mb-16">
//           <p className="text-xs uppercase tracking-[0.2em] font-mono text-violet-600 dark:text-violet-400 font-semibold mb-3">
//             01 / Background
//           </p>
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
//             About Architecture.
//           </h2>
//         </div>

//         {/* Enhanced Apple-Style Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          
//           {/* ROW 1: Philosophy & SDLC */}
//           <div className="bento-card md:col-span-2 relative p-8 md:p-10 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-violet-500/30 transition-colors shadow-sm dark:shadow-none min-h-[300px]">
//             <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/20 transition-all duration-700" />
            
//             <div className="flex items-center justify-between z-10 mb-8">
//               <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
//                 <Sparkles size={22} />
//               </div>
//               <span className="text-xs font-mono text-primary-muted/50">Core Philosophy</span>
//             </div>

//             <div className="z-10">
//               <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 mb-6">
//                 Driven by Definite Major Purpose.
//               </h3>
//               <p className="text-lg md:text-xl text-primary-muted leading-relaxed font-medium">
//                 I cultivate a highly focused, sharp mindset to continuously engineer scalable systems. 
//                 Beyond writing clean code, my ultimate vision centers on architecting innovative enterprise platforms 
//                 and actively contributing to accelerating the tech ecosystem into a global powerhouse.
//               </p>
//             </div>
//           </div>

//           <div className="bento-card md:col-span-1 relative p-8 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
//             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
//             <div className="flex items-center justify-between mb-8">
//               <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
//                 <FileText size={22} />
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
//                 SDLC & Docs
//               </h3>
//               <div className="space-y-3 font-mono text-xs">
//                 {["PRD (Requirements)", "SRS (System Specs)", "FRD (Functional)"].map((doc, i) => (
//                   <div key={i} className="flex items-center gap-3 px-3 py-2.5 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg text-foreground/80">
//                     <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
//                     {doc}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ROW 2: The Splitted Tech Stack (Frontend, Backend, Database) */}
//           <div className="bento-card magnetic-card md:col-span-1 relative p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col overflow-hidden backdrop-blur-xl group hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none min-h-[200px]">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
//                 <LayoutTemplate size={18} />
//               </div>
//               <h4 className="text-lg font-bold tracking-tight text-foreground">Frontend</h4>
//             </div>
//             <div className="flex flex-wrap gap-2 mt-auto">
//               {["React.js", "Next.js", "Tailwind CSS"].map((tech, i) => (
//                 <span key={i} className="px-3 py-1.5 text-xs font-medium font-mono bg-black/[0.04] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg text-primary-muted group-hover:border-blue-500/30 transition-colors">{tech}</span>
//               ))}
//             </div>
//           </div>

//           <div className="bento-card magnetic-card md:col-span-1 relative p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col overflow-hidden backdrop-blur-xl group hover:border-emerald-500/30 transition-colors shadow-sm dark:shadow-none min-h-[200px]">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
//                 <Server size={18} />
//               </div>
//               <h4 className="text-lg font-bold tracking-tight text-foreground">Backend</h4>
//             </div>
//             <div className="flex flex-wrap gap-2 mt-auto">
//               {["Node.js", "Express.js", "Strapi", "Docusaurus"].map((tech, i) => (
//                 <span key={i} className="px-3 py-1.5 text-xs font-medium font-mono bg-black/[0.04] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg text-primary-muted group-hover:border-emerald-500/30 transition-colors">{tech}</span>
//               ))}
//             </div>
//           </div>

//           <div className="bento-card magnetic-card md:col-span-1 relative p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col overflow-hidden backdrop-blur-xl group hover:border-orange-500/30 transition-colors shadow-sm dark:shadow-none min-h-[200px]">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
//                 <Database size={18} />
//               </div>
//               <h4 className="text-lg font-bold tracking-tight text-foreground">Database</h4>
//             </div>
//             <div className="flex flex-wrap gap-2 mt-auto">
//               {["MongoDB", "Supabase", "Prisma", "AWS"].map((tech, i) => (
//                 <span key={i} className="px-3 py-1.5 text-xs font-medium font-mono bg-black/[0.04] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg text-primary-muted group-hover:border-orange-500/30 transition-colors">{tech}</span>
//               ))}
//             </div>
//           </div>

//           {/* ROW 3: Organic Discoverability (Full Width) */}
//           <div className="bento-card md:col-span-3 relative p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col md:flex-row md:items-center justify-between overflow-hidden backdrop-blur-xl group hover:border-fuchsia-500/30 transition-colors shadow-sm dark:shadow-none gap-6">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center">
//                 <Globe size={22} />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold tracking-tight text-foreground mb-1">
//                   Organic Discoverability & SEO
//                 </h4>
//                 <p className="text-sm text-primary-muted leading-relaxed">
//                   Implementing deep programmatic SEO, content architectures, and structural JSON-LD metadata.
//                 </p>
//               </div>
//             </div>
//             <div className="hidden md:block w-32 h-1 border-t-2 border-dashed border-black/10 dark:border-white/10" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { Sparkles, FileText, Terminal, Globe, Cpu } from "lucide-react";
// import { magneticHelper } from "@/lib/utils";

// export default function About() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // GSAP Scroll Trigger or Stagger entry for Bento Cards
//     gsap.from(".bento-card", {
//       opacity: 0,
//       scale: 0.95,
//       y: 40,
//       stagger: 0.12,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 75%",
//       }
//     });

//     // Initialize Magnetic Interaction on interactive bento cards
//     if (sectionRef.current) {
//       const magneticCards = sectionRef.current.querySelectorAll('.magnetic-card');
//       magneticCards.forEach((card) => magneticHelper(card as HTMLElement));
//     }
//   }, []);

//   const skills = [
//     "React.js", "Next.js", "Tailwind CSS", "Strapi", "Docusaurus",
//     "Node.js", "Express.js", "MongoDB", "Supabase", "Prisma"
//   ];

//   return (
//     <section 
//       id="about" 
//       ref={sectionRef} 
//       className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-black/5 dark:border-white/5 overflow-hidden"
//     >
//       {/* Visual Consistency: Identical Ambient Aurora Background Glows as Hero */}
//       <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-fuchsia-500/20 dark:bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
//       <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

//       <div className="max-w-6xl w-full mx-auto z-10">
        
//         {/* Section Header */}
//         <div className="mb-16">
//           <p className="text-xs uppercase tracking-[0.2em] font-mono text-violet-600 dark:text-violet-400 font-semibold mb-3">
//             01 / Background
//           </p>
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
//             About Architecture.
//           </h2>
//         </div>

//         {/* Apple-Style Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          
//           {/* CARD 1: Large Flagship Box - Mindset & Definite Major Purpose (Spans 2 columns, 2 rows) */}
//           <div className="bento-card md:col-span-2 md:row-span-2 relative p-8 md:p-10 bg-black/[0.02] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-violet-500/30 transition-colors shadow-sm dark:shadow-none">
//             {/* Subtle card-specific inner light glow */}
//             <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/20 transition-all duration-700" />
            
//             <div className="flex items-center justify-between z-10">
//               <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
//                 <Sparkles size={22} />
//               </div>
//               <span className="text-xs font-mono text-primary-muted/50">Core Philosophy</span>
//             </div>

//             <div className="mt-8 z-10">
//               <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 mb-6">
//                 Driven by Definite Major Purpose.
//               </h3>
//               <p className="text-lg md:text-xl text-primary-muted leading-relaxed font-medium">
//                 I cultivate a highly focused, sharp mindset to continuously engineer scalable systems. 
//                 Beyond writing clean code, my ultimate vision centers on architecting innovative enterprise platforms 
//                 and actively contributing to accelerating the tech ecosystem into a global powerhouse.
//               </p>
//             </div>
//             <div className="border-t border-black/5 dark:border-white/5 pt-4 mt-6 text-sm font-mono text-primary-muted/60 z-10">
//               Inspired by strategic systems thinking & growth principles.
//             </div>
//           </div>

//           {/* CARD 2: SDLC Documentation & Architecture Mastery (Spans 1 column, 2 rows) */}
//           <div className="bento-card md:col-span-1 md:row-span-2 relative p-8 bg-black/[0.02] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
//             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
//             <div className="flex items-center justify-between">
//               <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
//                 <FileText size={22} />
//               </div>
//               <span className="text-xs font-mono text-primary-muted/50">Methodology</span>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
//                 SDLC & Engineering Lifecycle
//               </h3>
//               <p className="text-base text-primary-muted leading-relaxed mb-6">
//                 Expertise in researching and authoring professional blueprint documentation that ensures production stability:
//               </p>
//               {/* Micro-visual tokens for docs */}
//               <div className="space-y-2 font-mono text-xs">
//                 {["PRD (Product Requirements)", "SRS (System Specifications)", "FRD (Functional Design)"].map((doc, i) => (
//                   <div key={i} className="flex items-center gap-3 px-3 py-2 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg text-foreground/80">
//                     <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
//                     {doc}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* CARD 3: Technical Ecosystem / Skill Tokens (Spans 2 columns, 1 row) */}
//           <div className="bento-card md:col-span-2 md:row-span-1 relative p-6 md:p-8 bg-black/[0.02] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-fuchsia-500/30 transition-colors shadow-sm dark:shadow-none">
//             <div className="flex items-center gap-4">
//               <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center">
//                 <Terminal size={18} />
//               </div>
//               <h4 className="text-lg font-bold tracking-tight text-foreground">Core Tech Infrastructure</h4>
//             </div>

//             <div className="flex flex-wrap gap-2 mt-4">
//               {skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="interactive px-3.5 py-1.5 text-xs font-medium font-mono bg-black/[0.04] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-xl text-primary-muted hover:text-fuchsia-500 hover:border-fuchsia-500/30 transition-all duration-300"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CARD 4: Marketing & Discovery Engine (Spans 1 column, 1 row) - Interactive/Magnetic Card */}
//           <div className="bento-card magnetic-card md:col-span-1 md:row-span-1 relative p-6 bg-black/[0.02] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between overflow-hidden backdrop-blur-xl group hover:border-violet-500/30 transition-colors shadow-sm dark:shadow-none">
//             <div className="flex items-center justify-between">
//               <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
//                 <Globe size={18} />
//               </div>
//               <Cpu size={16} className="text-primary-muted/30 group-hover:text-violet-500 transition-colors" />
//             </div>

//             <div>
//               <h4 className="text-lg font-bold tracking-tight text-foreground mb-1">
//                 Organic Discoverability
//               </h4>
//               <p className="text-xs text-primary-muted leading-relaxed">
//                 Implementing deep programmatic SEO, content architectures, and structural JSON-LD metadata markup.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { FileText, Cpu, Compass, Milestone, Layers, Globe } from "lucide-react";

// export default function About() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // Advanced Intersection Observer logic with GSAP for clean scroll-reveal
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             gsap.fromTo(
//               ".bento-item",
//               { opacity: 0, y: 40 },
//               {
//                 opacity: 1,
//                 y: 0,
//                 stagger: 0.12,
//                 duration: 1.2,
//                 ease: "power4.out",
//                 overwrite: "auto",
//               }
//             );
//             observer.disconnect(); // Fire once for optimal performance
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, { scope: sectionRef });

//   const techCategories = [
//     {
//       title: "Frontend Architecture",
//       icon: Layers,
//       skills: ["React.js", "Next.js", "Tailwind CSS", "Docusaurus"],
//     },
//     {
//       title: "Backend & Microservices",
//       icon: Cpu,
//       skills: ["Node.js", "Express.js", "Strapi Headless CMS"],
//     },
//     {
//       title: "Database & Modeling",
//       icon: Globe,
//       skills: ["MongoDB", "Supabase", "Prisma ORM"],
//     },
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       id="about" 
//       className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-black/5 dark:border-white/5 overflow-hidden"
//     >
//       {/* Ambient Mesh Glows mirroring the Hero Section */}
//       <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-fuchsia-500/10 dark:bg-fuchsia-500/5 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
//       <div className="absolute bottom-1/4 left-1/4 w-[28rem] h-[28rem] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

//       <div className="max-w-6xl w-full mx-auto z-10">
        
//         {/* Section Heading with Gradient Typography */}
//         <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 bento-item text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 pb-2">
//           About Me.
//         </h2>

//         {/* Master Bento Grid Matrix */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          
//           {/* Card 1: Mindset & Purpose (Large Span) */}
//           <div className="bento-item md:col-span-2 md:row-span-2 relative p-8 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl flex flex-col justify-between backdrop-blur-md group hover:border-violet-500/30 transition-all duration-500 shadow-sm dark:shadow-none">
//             <div className="w-12 h-12 rounded-xl bg-black/[0.05] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center text-primary-muted group-hover:text-violet-500 transition-colors">
//               <Compass size={24} />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
//                 Definite Major Purpose & Mindset
//               </h3>
//               <p className="text-lg text-primary-muted leading-relaxed">
//                 Cultivating a highly focused, sharp mindset to continuously learn and adapt. My structural drive extends beyond writing standard modules—I engineer industrial-grade architectures to build innovative tech platforms, contributing to elevating ecosystems into global engineering hubs.
//               </p>
//             </div>
//           </div>

//           {/* Card 2: SDLC & Documentation (Tall Span) */}
//           <div className="bento-item md:col-span-1 md:row-span-2 relative p-8 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl flex flex-col justify-between backdrop-blur-md group hover:border-fuchsia-500/30 transition-all duration-500 shadow-sm dark:shadow-none">
//             <div className="w-12 h-12 rounded-xl bg-black/[0.05] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center text-primary-muted group-hover:text-fuchsia-500 transition-colors">
//               <FileText size={24} />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
//                 SDLC & Technical Assets
//               </h3>
//               <p className="text-base text-primary-muted leading-relaxed mb-6">
//                 Expertise in orchestrating deep lifecycle processes. Authoring systematic documentation architectures:
//               </p>
//               <div className="flex flex-col gap-2 font-mono text-xs text-foreground/70">
//                 <div className="flex items-center gap-2 px-3 py-2 bg-black/[0.05] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg">
//                   <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" /> PRD (Product Requirements)
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-2 bg-black/[0.05] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg">
//                   <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /> SRS (System Specifications)
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-2 bg-black/[0.05] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-lg">
//                   <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> FRD (Functional Architecture)
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Card 3: Core Strategy (Wide Span) */}
//           <div className="bento-item md:col-span-2 md:row-span-1 relative p-8 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl flex flex-col justify-center backdrop-blur-md group hover:border-cyan-500/30 transition-all duration-500 shadow-sm dark:shadow-none">
//             <div className="flex items-start gap-6">
//               <div className="w-12 h-12 min-w-12 rounded-xl bg-black/[0.05] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center text-primary-muted group-hover:text-cyan-500 transition-colors">
//                 <Milestone size={24} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
//                   System Optimization Strategy
//                 </h3>
//                 <p className="text-base text-primary-muted leading-relaxed">
//                   Specializing in complex system folder structures, clean content delivery strategies via headless engines, and implementing automated programmatic / technical SEO tracking schemas.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Cards 4, 5, 6: The Modern Stack Matrix Breakdown */}
//           {techCategories.map((cat, idx) => (
//             <div 
//               key={idx} 
//               className="bento-item md:col-span-1 md:row-span-2 relative p-8 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl flex flex-col justify-between backdrop-blur-md group hover:border-foreground/10 transition-all duration-500 shadow-sm dark:shadow-none"
//             >
//               <div className="w-10 h-10 rounded-lg bg-black/[0.05] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center text-primary-muted group-hover:text-foreground transition-colors">
//                 <cat.icon size={20} />
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">{cat.title}</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {cat.skills.map((skill, sIdx) => (
//                     <span 
//                       key={sIdx}
//                       className="px-2.5 py-1 text-xs font-mono bg-black/[0.05] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 rounded-md text-primary-muted group-hover:text-foreground transition-colors"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FileText, Cpu, Target, Award } from "lucide-react";

// // Register ScrollTrigger plugin for scroll-driven animations
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function About() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // Elegant stagger reveal for the Bento cards when they scroll into view
//     gsap.from(".bento-card", {
//       opacity: 0,
//       y: 40,
//       stagger: 0.15,
//       duration: 1.2,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 75%", // Triggers when top of section hits 75% of viewport
//         toggleActions: "play none none none",
//       },
//     });
//   }, { scope: sectionRef });

//   const techSkills = [
//     { category: "Frontend", tools: ["React.js", "Next.js", "Tailwind CSS"] },
//     { category: "Headless CMS & Docs", tools: ["Strapi", "Docusaurus"] },
//     { category: "Backend & DB", tools: ["Node.js", "Express.js", "MongoDB", "Supabase", "Prisma"] },
//     { category: "Architecture", tools: ["SaaS Architecture", "Programmatic & Technical SEO"] },
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       id="about" 
//       className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-border-subtle/30 bg-background"
//     >
//       <div className="max-w-6xl w-full mx-auto">
        
//         {/* Section Header */}
//         <div className="mb-16">
//           <p className="text-sm font-mono text-primary-muted tracking-widest uppercase mb-3">01 / DISCOVERY</p>
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
//             About & Capability.
//           </h2>
//         </div>

//         {/* Apple Style Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          
//           {/* Card 1: Main Professional Persona (Spans 2 columns, 2 rows) */}
//           <div className="bento-card md:col-span-2 md:row-span-2 relative p-8 bg-white/[0.02] border border-border-subtle rounded-2xl flex flex-col justify-between backdrop-blur-sm group hover:border-foreground/10 transition-colors duration-500 overflow-hidden">
//             <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
//             <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-border-subtle flex items-center justify-center text-primary-muted">
//               <Cpu size={24} />
//             </div>
//             <div>
//               <span className="text-xs font-mono text-primary-muted/60 uppercase tracking-wider block mb-2">Architectural Philosophy</span>
//               <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
//                 Solving complex architectural challenges systematically.
//               </h3>
//               <p className="text-lg text-primary-muted leading-relaxed">
//                 Hello! I'm Manoj, a software developer who thrives on microstructural stability and high-end optimizations. My structural engineering capabilities center around building system frameworks that are fluid, highly scannable, and performant under load.
//               </p>
//             </div>
//           </div>

//           {/* Card 2: SDLC & Documentation (Spans 1 column, 1 row) */}
//           <div className="bento-card relative p-8 bg-white/[0.02] border border-border-subtle rounded-2xl flex flex-col justify-between backdrop-blur-sm group hover:border-foreground/10 transition-colors duration-500">
//             <div className="flex justify-between items-start">
//               <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-border-subtle flex items-center justify-center text-primary-muted">
//                 <FileText size={20} />
//               </div>
//               <span className="text-xs font-mono text-primary-muted/60 uppercase tracking-wider">SDLC</span>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-foreground mb-1 tracking-tight">Technical Authorship</h4>
//               <p className="text-sm text-primary-muted leading-relaxed">
//                 Expertise in researching and authoring professional PRD, SRS, and FRD specs to drive precise lifecycle orchestration.
//               </p>
//             </div>
//           </div>

//           {/* Card 3: Definite Major Purpose (Spans 1 column, 1 row) */}
//           <div className="bento-card relative p-8 bg-white/[0.02] border border-border-subtle rounded-2xl flex flex-col justify-between backdrop-blur-sm group hover:border-foreground/10 transition-colors duration-500">
//             <div className="flex justify-between items-start">
//               <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-border-subtle flex items-center justify-center text-primary-muted">
//                 <Target size={20} />
//               </div>
//               <span className="text-xs font-mono text-primary-muted/60 uppercase tracking-wider">Vision</span>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-foreground mb-1 tracking-tight">The Tech Ecosystem</h4>
//               <p className="text-sm text-primary-muted leading-relaxed">
//                 Driven to build innovative tech companies and contribute toward elevating India into a dominant global IT engine.
//               </p>
//             </div>
//           </div>

//           {/* Card 4: Detailed Tech Matrix (Spans 3 columns, 2 rows) */}
//           <div className="bento-card md:col-span-3 md:row-span-2 relative p-8 bg-white/[0.02] border border-border-subtle rounded-2xl flex flex-col justify-between backdrop-blur-sm group hover:border-foreground/10 transition-colors duration-500 overflow-hidden">
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-border-subtle flex items-center justify-center text-primary-muted">
//                   <Award size={20} />
//                 </div>
//                 <div>
//                   <span className="text-xs font-mono text-primary-muted/60 uppercase tracking-wider block">Capability Stack</span>
//                   <h4 className="text-xl font-bold tracking-tight text-foreground">Technologies I Engineer With</h4>
//                 </div>
//               </div>

//               {/* Matrix Sub-grid inside Bento */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//                 {techSkills.map((skillGroup, idx) => (
//                   <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-border-subtle/40">
//                     <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest block mb-3 pb-2 border-b border-border-subtle/30">
//                       {skillGroup.category}
//                     </span>
//                     <div className="flex flex-wrap gap-1.5">
//                       {skillGroup.tools.map((tool, i) => (
//                         <span 
//                           key={i}
//                           className="px-2.5 py-1 text-xs bg-white/[0.03] border border-border-subtle/60 rounded text-primary-muted group-hover:text-foreground transition-colors"
//                         >
//                           {tool}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="text-xs font-mono text-primary-muted/40 mt-6 lg:mt-0">
//               * Continuously cultivating a focused mindset to adapt to changing tech lifecycles.
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image"; // Industry standard optimized image

// export default function About() {
//   const skills = [
//     "React.js", "Next.js", "Tailwind CSS", "Strapi", "Docusaurus",
//     "Node.js", "Express.js", "MongoDB", "Supabase", "Prisma",
//     "SaaS Architecture", "Programmatic / Technical SEO"
//   ];

//   return (
//     <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-border-subtle/30">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         className="max-w-6xl w-full mx-auto" // Widened container for grid
//       >
//         {/* Industry Standard: Changed to 2-column grid */}
//         <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-16 items-start">
          
//           {/* Column 1: Bio & Skills */}
//           <div className="order-2 md:order-1">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
//               About Me.
//             </h2>
            
//             <div className="space-y-6 text-lg text-primary-muted leading-relaxed mb-12">
//               <p>
//                 Hello! I'm Manoj, a developer who thrives on solving complex architectural challenges. 
//                 My expertise lies in driving the complete Software Development Life Cycle (SDLC)—from 
//                 researching and authoring deep technical documentation (PRD, SRS, FRD) to architecting 
//                 industry-standard scalable systems.
//               </p>
//               <p>
//                 I believe in cultivating a highly focused, sharp mindset to continuously learn and adapt. 
//                 My definite major purpose extends beyond just writing code; I am driven to build 
//                 innovative tech companies and contribute to elevating the Indian tech ecosystem into a 
//                 global IT hub.
//               </p>
//             </div>

//             <div className="mt-12">
//               <h3 className="text-sm font-semibold tracking-widest text-foreground uppercase mb-6">
//                 Technologies I Engineer With
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="px-4 py-2 text-sm bg-white/[0.03] border border-border-subtle rounded-lg text-primary-muted hover:text-foreground hover:bg-white/[0.08] transition-all duration-300"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Column 2: The Attractive Animating Photo Container */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="order-1 md:order-2 flex justify-center sticky top-28" // Sticky for better flow
//           >
//             <motion.div 
//               className="relative group w-[280px] h-[350px]"
//               whileHover={{ scale: 1.05 }} // Floating Effect
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               {/* Grayscale image that turns color on hover (premium style) */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-[0.16,1,0.3,1]">
//                 <Image 
//                   src="/profile.jpg" // Place your profile.jpg in /public directory
//                   alt="Manoj Barmase - Full-Stack Architect"
//                   fill // Fills the container, must have relative parent
//                   className="object-cover" // Crops like a charm
//                   sizes="300px"
//                   priority={true} // High optimization for portfolio
//                 />
//               </div>

//               {/* Subtlest halo border that appears on hover (Linear aesthetic) */}
//               <div className="absolute -inset-2 border border-foreground/5 group-hover:border-foreground/20 rounded-[24px] transition-colors duration-500 pointer-events-none" />
//             </motion.div>
//           </motion.div>

//         </div>
//       </motion.div>
//     </section>
//   );
// }

// "use client";
// import { motion } from "framer-motion";

// export default function About() {
//   const skills = [
//     "React.js", "Next.js", "Tailwind CSS", "Strapi", "Docusaurus",
//     "Node.js", "Express.js", "MongoDB", "Supabase", "Prisma",
//     "SaaS Architecture", "Programmatic / Technical SEO"
//   ];

//   return (
//     // id="about" is crucial here for the Navbar link to work
//     <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-border-subtle/30">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         className="max-w-4xl"
//       >
//         <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
//           About Me.
//         </h2>
        
//         <div className="space-y-6 text-lg text-primary-muted leading-relaxed">
//           <p>
//             Hello! I'm Manoj, a developer who thrives on solving complex architectural challenges. 
//             My expertise lies in driving the complete Software Development Life Cycle (SDLC)—from 
//             researching and authoring deep technical documentation (PRD, SRS, FRD) to architecting 
//             industry-standard scalable systems.
//           </p>
//           <p>
//             I believe in cultivating a highly focused, sharp mindset to continuously learn and adapt. 
//             My definite major purpose extends beyond just writing code; I am driven to build 
//             innovative tech companies and contribute to elevating the Indian tech ecosystem into a 
//             global IT hub.
//           </p>
//         </div>

//         <div className="mt-12">
//           <h3 className="text-sm font-semibold tracking-widest text-foreground uppercase mb-6">
//             Technologies I Engineer With
//           </h3>
//           <div className="flex flex-wrap gap-3">
//             {skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 text-sm bg-white/[0.03] border border-border-subtle rounded-lg text-primary-muted hover:text-foreground hover:bg-white/[0.08] transition-all duration-300"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }