"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { 
  Briefcase, Code2, Layers, Search, 
  Server, LayoutTemplate, Terminal 
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.exp-card');
    
    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        scale: 0.95,
        rotationX: 5,
        duration: 1.2,
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
      id="experience" 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-16 border-t border-black/5 dark:border-white/5 overflow-hidden perspective-[1000px]"
    >
      <ThreeScene />

      <div className="absolute top-1/4 right-1/3 w-[35rem] h-[35rem] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/3 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400 font-semibold mb-3">
            02 / Career Path
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Professional Experience.
          </h2>
        </div>

        <div className="space-y-12">
          
          {/* =========================================================
              ROLE 1: Brandworks Worldwide
              ========================================================= */}
          <div className="exp-card relative p-8 md:p-10 bg-white/60 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-2xl group hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-black/10 dark:border-white/5 pb-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
                  <Briefcase size={26} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Software Developer</h3>
                  <p className="text-lg font-medium text-primary-muted mt-1">Revynox</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-blue-500/10 dark:bg-white/[0.03] border border-blue-500/20 dark:border-white/5 rounded-full text-blue-700 dark:text-primary-muted text-sm font-mono font-bold w-fit">
                Nov 2025 - Present
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* FIX: Stronger border (border-black/15) and custom crisp shadow for pop-out effect */}
              <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/15 dark:border-white/5 group-hover:bg-blue-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none">
                <Layers className="text-violet-600 dark:text-violet-400 mb-4" size={24} />
                <h4 className="text-lg font-bold text-foreground mb-2">Enterprise B2B SaaS Platform</h4>
                <p className="text-sm text-primary-muted font-medium leading-relaxed">
                  Spearheaded end-to-end development of a comprehensive company-internal B2B platform managing complex invoicing, e-signatures, and inventory.
                </p>
              </div>

              <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/15 dark:border-white/5 group-hover:bg-cyan-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none">
                <Code2 className="text-cyan-600 dark:text-cyan-400 mb-4" size={24} />
                <h4 className="text-lg font-bold text-foreground mb-2">Architecture & SDLC</h4>
                <p className="text-sm text-primary-muted font-medium leading-relaxed">
                  Driven the complete lifecycle. Engineered core business logic and authored deep technical documentation (PRD, SRS, FRD) for scalable structure.
                </p>
              </div>

              <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/15 dark:border-white/5 group-hover:bg-emerald-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none">
                <Search className="text-emerald-600 dark:text-emerald-400 mb-4" size={24} />
                <h4 className="text-lg font-bold text-foreground mb-2">Programmatic SEO</h4>
                <p className="text-sm text-primary-muted font-medium leading-relaxed">
                  Architected technical wikis utilizing Docusaurus and Strapi. Implemented JSON-LD schemas to drastically drive organic discoverability.
                </p>
              </div>

              {/* FIX: Solid white background and distinct border for the bottom Tech Stack card */}
              <div className="md:col-span-3 mt-2 p-5 bg-white/90 dark:bg-white/[0.02] rounded-2xl border border-black/15 dark:border-white/5 flex flex-col md:flex-row md:items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-none">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Terminal size={18} className="text-blue-500" />
                  <span className="text-sm">Technologies Applied:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "Tailwind CSS", "Strapi", "Docusaurus"].map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-xs font-bold font-mono bg-blue-500/10 text-blue-700 border border-blue-500/20 dark:bg-white/[0.03] dark:text-primary-muted dark:border-white/5 dark:hover:text-blue-400 rounded-lg transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* =========================================================
              ROLE 2: White Soft Info
              ========================================================= */}
          <div className="exp-card relative p-8 md:p-10 bg-white/60 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-2xl group hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-black/10 dark:border-white/5 pb-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Code2 size={26} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Software Developer</h3>
                  <p className="text-lg font-medium text-primary-muted mt-1">White Soft Info</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-emerald-500/10 dark:bg-white/[0.03] border border-emerald-500/20 dark:border-white/5 rounded-full text-emerald-800 dark:text-primary-muted text-sm font-mono font-bold w-fit">
                Apr 2025 - Sep 2025
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/15 dark:border-white/5 group-hover:bg-blue-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none">
                <LayoutTemplate className="text-blue-600 dark:text-blue-400 mb-4" size={24} />
                <h4 className="text-lg font-bold text-foreground mb-2">Dynamic UI Engineering</h4>
                <p className="text-sm text-primary-muted font-medium leading-relaxed">
                  Developed highly engaging and dynamic web interfaces utilizing React.js and Tailwind CSS, significantly improving overall user engagement.
                </p>
              </div>

              <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/15 dark:border-white/5 group-hover:bg-orange-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none">
                <Server className="text-orange-600 dark:text-orange-400 mb-4" size={24} />
                <h4 className="text-lg font-bold text-foreground mb-2">Scalable Backend Architecture</h4>
                <p className="text-sm text-primary-muted font-medium leading-relaxed">
                  Engineered secure and efficient RESTful APIs utilizing Node.js and MongoDB, ensuring optimized data flow and robust server-side performance.
                </p>
              </div>

              {/* FIX: Solid background and robust border for long tech card */}
              <div className="md:col-span-2 mt-2 p-5 bg-white/90 dark:bg-white/[0.02] rounded-2xl border border-black/15 dark:border-white/5 flex flex-col md:flex-row md:items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-none">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Terminal size={18} className="text-emerald-500" />
                  <span className="text-sm">Technologies Applied:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Tailwind CSS", "Node.js", "MongoDB", "WordPress"].map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-xs font-bold font-mono bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:bg-white/[0.03] dark:text-primary-muted dark:border-white/5 dark:hover:text-emerald-400 rounded-lg transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// "use client";
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import dynamic from "next/dynamic";
// import { 
//   Briefcase, Code2, Layers, Search, 
//   Server, LayoutTemplate, Terminal 
// } from "lucide-react";
// import { magneticHelper } from "@/lib/utils";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// export default function Experience() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const cards = gsap.utils.toArray('.exp-card');
    
//     cards.forEach((card: any) => {
//       gsap.from(card, {
//         opacity: 0,
//         y: 80,
//         scale: 0.95,
//         rotationX: 5,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         }
//       });
//     });

//     if (sectionRef.current) {
//       const magneticCards = sectionRef.current.querySelectorAll('.magnetic-card');
//       magneticCards.forEach((el) => magneticHelper(el as HTMLElement));
//     }
//   }, { scope: sectionRef });

//   return (
//     <section 
//       id="experience" 
//       ref={sectionRef} 
//       className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-black/5 dark:border-white/5 overflow-hidden perspective-[1000px]"
//     >
//       <ThreeScene />

//       <div className="absolute top-1/4 right-1/3 w-[35rem] h-[35rem] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
//       <div className="absolute bottom-1/3 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

//       <div className="max-w-6xl w-full mx-auto z-10 relative">
        
//         <div className="mb-20">
//           <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400 font-semibold mb-3">
//             02 / Career Path
//           </p>
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
//             Professional Experience.
//           </h2>
//         </div>

//         <div className="space-y-12">
          
//           {/* =========================================================
//               ROLE 1: Brandworks Worldwide
//               ========================================================= */}
//           {/* FIX: Improved Light Mode Contrast (bg-white/60, border-black/10, shadow-xl) */}
//           <div className="exp-card relative p-8 md:p-10 bg-white/60 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-2xl group hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-black/10 dark:border-white/5 pb-8">
//               <div className="flex items-center gap-5">
//                 <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
//                   <Briefcase size={26} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Software Developer</h3>
//                   <p className="text-lg font-medium text-primary-muted mt-1">Brandworks Worldwide</p>
//                 </div>
//               </div>
//               <div className="px-4 py-2 bg-blue-500/10 dark:bg-white/[0.03] border border-blue-500/20 dark:border-white/5 rounded-full text-blue-700 dark:text-primary-muted text-sm font-mono font-bold w-fit">
//                 Nov 2025 - Present
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
//               {/* Sub-cards contrast fix: bg-white dark:bg-white/[0.03] */}
//               <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/10 dark:border-white/5 group-hover:bg-blue-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-sm dark:shadow-none">
//                 <Layers className="text-violet-600 dark:text-violet-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Evolvv SaaS Platform</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Spearheaded end-to-end development of a comprehensive company-internal B2B platform managing complex invoicing, e-signatures, and inventory.
//                 </p>
//               </div>

//               <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/10 dark:border-white/5 group-hover:bg-cyan-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-sm dark:shadow-none">
//                 <Code2 className="text-cyan-600 dark:text-cyan-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Architecture & SDLC</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Driven the complete lifecycle. Engineered core business logic and authored deep technical documentation (PRD, SRS, FRD) for scalable structure.
//                 </p>
//               </div>

//               <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/10 dark:border-white/5 group-hover:bg-emerald-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-sm dark:shadow-none">
//                 <Search className="text-emerald-600 dark:text-emerald-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Programmatic SEO</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Architected technical wikis utilizing Docusaurus and Strapi. Implemented JSON-LD schemas to drastically drive organic discoverability.
//                 </p>
//               </div>

//               {/* NEW FEATURE: Full Width Tech Stack Card */}
//               <div className="md:col-span-3 mt-2 p-5 bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl border border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center gap-4">
//                 <div className="flex items-center gap-2 text-foreground font-semibold">
//                   <Terminal size={18} className="text-blue-500" />
//                   <span className="text-sm">Technologies Applied:</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "Tailwind CSS", "Strapi", "Docusaurus"].map((tech, i) => (
//                     <span 
//                       key={i} 
//                       className="px-3 py-1.5 text-xs font-bold font-mono bg-blue-500/10 text-blue-700 border border-blue-500/20 dark:bg-white/[0.03] dark:text-primary-muted dark:border-white/5 dark:hover:text-blue-400 rounded-lg transition-colors"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* =========================================================
//               ROLE 2: White Soft Info
//               ========================================================= */}
//           <div className="exp-card relative p-8 md:p-10 bg-white/60 dark:bg-white/[0.02] border border-black/10 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-2xl group hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-black/10 dark:border-white/5 pb-8">
//               <div className="flex items-center gap-5">
//                 <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
//                   <Code2 size={26} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Software Developer</h3>
//                   <p className="text-lg font-medium text-primary-muted mt-1">White Soft Info</p>
//                 </div>
//               </div>
//               <div className="px-4 py-2 bg-emerald-500/10 dark:bg-white/[0.03] border border-emerald-500/20 dark:border-white/5 rounded-full text-emerald-800 dark:text-primary-muted text-sm font-mono font-bold w-fit">
//                 Apr 2025 - Sep 2025
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
//               <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/10 dark:border-white/5 group-hover:bg-blue-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-sm dark:shadow-none">
//                 <LayoutTemplate className="text-blue-600 dark:text-blue-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Dynamic UI Engineering</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Developed highly engaging and dynamic web interfaces utilizing React.js and Tailwind CSS, significantly improving overall user engagement.
//                 </p>
//               </div>

//               <div className="magnetic-card p-6 bg-white dark:bg-white/[0.03] rounded-3xl border border-black/10 dark:border-white/5 group-hover:bg-orange-50/50 dark:group-hover:bg-white/[0.05] transition-all shadow-sm dark:shadow-none">
//                 <Server className="text-orange-600 dark:text-orange-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Backend Microservices</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Engineered secure backend microservices and RESTful APIs leveraging Node.js and MongoDB to ensure seamless, real-time data flow.
//                 </p>
//               </div>

//               {/* NEW FEATURE: Full Width Tech Stack Card */}
//               <div className="md:col-span-2 mt-2 p-5 bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl border border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center gap-4">
//                 <div className="flex items-center gap-2 text-foreground font-semibold">
//                   <Terminal size={18} className="text-emerald-500" />
//                   <span className="text-sm">Technologies Applied:</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {["React.js", "Tailwind CSS", "Node.js", "MongoDB", "WordPress"].map((tech, i) => (
//                     <span 
//                       key={i} 
//                       className="px-3 py-1.5 text-xs font-bold font-mono bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:bg-white/[0.03] dark:text-primary-muted dark:border-white/5 dark:hover:text-emerald-400 rounded-lg transition-colors"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import dynamic from "next/dynamic";
// import { 
//   Briefcase, Code2, Layers, Search, 
//   Server, LayoutTemplate, Database 
// } from "lucide-react";
// import { magneticHelper } from "@/lib/utils";

// // Register ScrollTrigger
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// export default function Experience() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // Premium ScrollTrigger Stagger Entry
//     const cards = gsap.utils.toArray('.exp-card');
    
//     cards.forEach((card: any, i) => {
//       gsap.from(card, {
//         opacity: 0,
//         y: 80,
//         scale: 0.95,
//         rotationX: 5, // Subtle 3D tilt on entry
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         }
//       });
//     });

//     if (sectionRef.current) {
//       const magneticCards = sectionRef.current.querySelectorAll('.magnetic-card');
//       magneticCards.forEach((el) => magneticHelper(el as HTMLElement));
//     }
//   }, { scope: sectionRef });

//   return (
//     <section 
//       id="experience" 
//       ref={sectionRef} 
//       className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-black/5 dark:border-white/5 overflow-hidden perspective-[1000px]"
//     >
//       {/* Visual Consistency: Animated WebGL Bubbles */}
//       <ThreeScene />

//       {/* Ambient Aurora Glows (Colorful Light/Dark Mode) */}
//       <div className="absolute top-1/4 right-1/3 w-[35rem] h-[35rem] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
//       <div className="absolute bottom-1/3 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

//       <div className="max-w-6xl w-full mx-auto z-10 relative">
        
//         {/* Section Header */}
//         <div className="mb-20">
//           <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400 font-semibold mb-3">
//             02 / Career Path
//           </p>
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
//             Professional Experience.
//           </h2>
//         </div>

//         <div className="space-y-12">
          
//           {/* =========================================================
//               ROLE 1: Brandworks Worldwide (Nov 2025 - Present)
//               ========================================================= */}
//           <div className="exp-card relative p-8 md:p-10 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-xl group hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
            
//             {/* Card Header */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-black/5 dark:border-white/5 pb-8">
//               <div className="flex items-center gap-5">
//                 <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
//                   <Briefcase size={26} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Software Developer</h3>
//                   <p className="text-lg font-medium text-primary-muted mt-1">Brandworks Worldwide</p>
//                 </div>
//               </div>
//               <div className="px-4 py-2 bg-blue-500/10 dark:bg-white/[0.03] border border-blue-500/20 dark:border-white/5 rounded-full text-blue-700 dark:text-primary-muted text-sm font-mono font-bold w-fit">
//                 Nov 2025 - Present
//               </div>
//             </div>

//             {/* Sub-Bento Grid instead of boring bullet points */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
//               {/* Highlight 1: The B2B SaaS */}
//               <div className="magnetic-card p-6 bg-black/[0.04] dark:bg-white/[0.03] rounded-3xl border border-black/5 dark:border-white/5 group-hover:bg-black/[0.06] dark:group-hover:bg-white/[0.05] transition-all">
//                 <Layers className="text-violet-600 dark:text-violet-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Evolvv SaaS Platform</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Spearheaded end-to-end development of a comprehensive company-internal B2B platform managing complex invoicing, e-signatures, and inventory.
//                 </p>
//               </div>

//               {/* Highlight 2: Architecture & SDLC */}
//               <div className="magnetic-card p-6 bg-black/[0.04] dark:bg-white/[0.03] rounded-3xl border border-black/5 dark:border-white/5 group-hover:bg-black/[0.06] dark:group-hover:bg-white/[0.05] transition-all">
//                 <Code2 className="text-cyan-600 dark:text-cyan-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Architecture & SDLC</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Driven the complete lifecycle. Engineered core business logic and authored deep technical documentation (PRD, SRS, FRD) for scalable structure.
//                 </p>
//               </div>

//               {/* Highlight 3: Programmatic SEO */}
//               <div className="magnetic-card p-6 bg-black/[0.04] dark:bg-white/[0.03] rounded-3xl border border-black/5 dark:border-white/5 group-hover:bg-black/[0.06] dark:group-hover:bg-white/[0.05] transition-all">
//                 <Search className="text-emerald-600 dark:text-emerald-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Programmatic SEO</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Architected technical wikis utilizing Docusaurus and Strapi. Implemented JSON-LD schemas to drastically drive organic discoverability.
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* =========================================================
//               ROLE 2: White Soft Info (Apr 2025 - Sep 2025)
//               ========================================================= */}
//           <div className="exp-card relative p-8 md:p-10 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden backdrop-blur-xl group hover:border-emerald-500/30 transition-colors shadow-sm dark:shadow-none">
            
//             {/* Card Header */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-black/5 dark:border-white/5 pb-8">
//               <div className="flex items-center gap-5">
//                 <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
//                   <Code2 size={26} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Software Developer</h3>
//                   <p className="text-lg font-medium text-primary-muted mt-1">White Soft Info</p>
//                 </div>
//               </div>
//               <div className="px-4 py-2 bg-emerald-500/10 dark:bg-white/[0.03] border border-emerald-500/20 dark:border-white/5 rounded-full text-emerald-800 dark:text-primary-muted text-sm font-mono font-bold w-fit">
//                 Apr 2025 - Sep 2025
//               </div>
//             </div>

//             {/* Sub-Bento Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
//               {/* Highlight 1: Frontend */}
//               <div className="magnetic-card p-6 bg-black/[0.04] dark:bg-white/[0.03] rounded-3xl border border-black/5 dark:border-white/5 group-hover:bg-black/[0.06] dark:group-hover:bg-white/[0.05] transition-all">
//                 <LayoutTemplate className="text-blue-600 dark:text-blue-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Dynamic UI Engineering</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Developed highly engaging and dynamic web interfaces utilizing React.js and Tailwind CSS, significantly improving overall user engagement.
//                 </p>
//               </div>

//               {/* Highlight 2: Backend */}
//               <div className="magnetic-card p-6 bg-black/[0.04] dark:bg-white/[0.03] rounded-3xl border border-black/5 dark:border-white/5 group-hover:bg-black/[0.06] dark:group-hover:bg-white/[0.05] transition-all">
//                 <Server className="text-orange-600 dark:text-orange-400 mb-4" size={24} />
//                 <h4 className="text-lg font-bold text-foreground mb-2">Backend Microservices</h4>
//                 <p className="text-sm text-primary-muted font-medium leading-relaxed">
//                   Engineered secure backend microservices and RESTful APIs leveraging Node.js and MongoDB to ensure seamless, real-time data flow.
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion, Variants } from "framer-motion";

// const experiences = [
//   {
//     id: 1,
//     role: "Software Developer",
//     company: "Brandworks Worldwide",
//     period: "Nov 2025 - Present",
//     description: [
//       "Spearheaded the end-to-end development of a comprehensive B2B SaaS platform for invoicing and inventory management.",
//       "Driven the complete Software Development Life Cycle (SDLC) for new features: conducting initial research, authoring deep technical documentation (PRD, SRS, FRD), and architecting scalable, industry-standard folder structures.",
//       "Engineered and implemented core business logic systematically, followed by rigorous manual testing protocols to ensure stable, production-ready software releases.",
//       "Architected technical wikis and blogs utilizing Docusaurus and Strapi, implementing Programmatic SEO and JSON-LD schemas to drive organic discoverability."
//     ]
//   },
//   {
//     id: 2,
//     role: "Software Developer",
//     company: "White Soft Info",
//     period: "Apr 2025 - Sep 2025",
//     description: [
//       "Developed dynamic web interfaces with React.js and Tailwind CSS, improving overall user engagement.",
//       "Engineered secure backend microservices and REST APIs utilizing Node.js and MongoDB to ensure seamless data flow.",
//       "Designed robust content architectures using WordPress, tailoring custom plugins to meet distinct client requirements."
//     ]
//   }
// ];

// export default function Experience() {
//   const itemVariant: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section id="experience" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-border-subtle/30">
//       <div className="max-w-4xl w-full">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
//         >
//           Experience.
//         </motion.h2>

//         <div className="space-y-16 border-l border-border-subtle/50 ml-3 md:ml-4 pl-8 md:pl-12">
//           {experiences.map((exp) => (
//             <motion.div 
//               key={exp.id}
//               variants={itemVariant}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-50px" }}
//               className="relative group"
//             >
//               {/* Timeline Dot */}
//               <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-3 h-3 bg-background border-2 border-primary-muted rounded-full group-hover:border-foreground transition-colors duration-300" />
              
//               <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
//                 <div>
//                   <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
//                     {exp.role}
//                   </h3>
//                   <p className="text-lg text-primary-muted font-medium mt-1">
//                     {exp.company}
//                   </p>
//                 </div>
//                 <span className="text-sm font-mono text-primary-muted/80 px-3 py-1 bg-white/[0.03] border border-border-subtle/50 rounded-full w-fit">
//                   {exp.period}
//                 </span>
//               </div>

//               <ul className="space-y-3 mt-6">
//                 {exp.description.map((item, i) => (
//                   <li key={i} className="text-primary-muted text-base leading-relaxed relative pl-5">
//                     <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-border-subtle rounded-full" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }