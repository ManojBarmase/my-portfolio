"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { 
  ExternalLink, LayoutGrid, Database, 
  Lock, Activity, Terminal 
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// Custom Github Icon to avoid Lucide package errors
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.05 5.05 0 0 0 19 4.78a4.6 4.6 0 0 0-.1-3.2s-1.3-.4-4.2 1.6a14.2 14.2 0 0 0-7.8 0c-2.9-2-4.2-1.6-4.2-1.6a4.6 4.6 0 0 0-.1 3.2A5.05 5.05 0 0 0 3 7.82c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 8.5 18v4"></path>
  </svg>
);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-bento');
    
    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        scale: 0.95,
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
      id="projects" 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-16 border-t border-black/5 dark:border-white/5 overflow-hidden"
    >
      {/* 1. Seamless WebGL Background */}
      <ThreeScene />

      {/* 2. Vibrant Aurora Glows (Fuchsia & Violet for the Project aesthetic) */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-fuchsia-500/20 dark:bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-fuchsia-600 dark:text-fuchsia-400 font-semibold mb-3">
            03 / Flagship Build
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Featured Work.
          </h2>
        </div>

        {/* Apple-Style Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* ==========================================
              BENTO 1: The Main Spotlight (Title & Links)
              Spans 7 columns.
              ========================================== */}
          <div className="project-bento md:col-span-7 relative p-8 md:p-10 bg-white/60 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-[2.5rem] flex flex-col justify-between overflow-hidden backdrop-blur-2xl group hover:border-fuchsia-500/40 dark:hover:border-fuchsia-500/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none min-h-[400px]">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-fuchsia-500/10 dark:bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-fuchsia-500/20 transition-all duration-700" />
            
            <div className="z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center border border-fuchsia-500/20">
                  <LayoutGrid size={24} />
                </div>
                <span className="text-sm font-mono font-bold text-fuchsia-700 dark:text-fuchsia-400 bg-fuchsia-500/10 dark:bg-white/[0.03] px-3 py-1.5 rounded-full border border-fuchsia-500/20 dark:border-white/5">
                  SaaS Dashboard
                </span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Product Management Software.
              </h3>
              <p className="text-lg md:text-xl text-primary-muted font-medium leading-relaxed max-w-xl mb-10">
                A full-stack agile dashboard engineered to streamline task tracking, states, and team collaboration at scale.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 z-10 mt-auto">
              <a 
                href="https://task-pink-seven.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="magnetic interactive flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)]">
                <ExternalLink size={18} />
                Live Application
              </a>
              <a 
               href="https://github.com/ManojBarmase/Task" 
               target="_blank" 
               rel="noopener noreferrer"
               className="magnetic interactive flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-white/[0.03] text-foreground font-bold border border-black/15 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                <GithubIcon size={18} />
                Source Code
              </a>
            </div>
          </div>

          {/* ==========================================
              BENTO 2: Abstract Wireframe / Visual
              Spans 5 columns.
              ========================================== */}
         {/* ==========================================
              BENTO 2: Real App Screenshot (Mac OS Frame)
              Spans 5 columns.
              ========================================== */}
          <div className="project-bento md:col-span-5 relative bg-black/[0.02] dark:bg-white/[0.01] border border-black/15 dark:border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-md flex items-center justify-center min-h-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none group">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* FIX 1: Removed h-5/6 and added `aspect-[16/10]` to make it widescreen */}
            <div className="w-11/12 aspect-[16/10] border border-black/10 dark:border-white/10 rounded-xl flex flex-col shadow-2xl bg-white dark:bg-black/50 backdrop-blur-xl transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-500 overflow-hidden relative z-10">
              
              {/* Window Top Bar (Traffic Lights) */}
              <div className="h-8 md:h-10 border-b border-black/5 dark:border-white/5 flex items-center px-4 gap-2 bg-black/[0.02] dark:bg-white/[0.02] shrink-0">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
              </div>
              
              {/* FIX 2: Added `object-contain` just in case, but cover works perfectly now with correct aspect ratio */}
              <div className="relative flex-1 w-full bg-black/5 dark:bg-black/40">
                <Image 
                  src="/project-dashboard.png" /* Make sure your image name is correct here */
                  alt="Enterprise SaaS Dashboard Screenshot"
                  fill
                  className="object-cover object-top" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                />
              </div>

            </div>
          </div>

          {/* ==========================================
              BENTO 3, 4, 5: The Extracted Features
              Long text broken into 3 micro-cards.
              ========================================== */}
          <div className="project-bento magnetic-card md:col-span-4 p-8 bg-white/80 dark:bg-white/[0.03] rounded-3xl border border-black/15 dark:border-white/5 group hover:bg-fuchsia-50/50 dark:hover:bg-white/[0.05] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none min-h-[220px]">
            <Lock className="text-fuchsia-600 dark:text-fuchsia-400 mb-5" size={26} />
            <h4 className="text-xl font-bold text-foreground mb-3">Secure RESTful API</h4>
            <p className="text-sm text-primary-muted font-medium leading-relaxed">
              Developed a highly secure backend infrastructure, ensuring seamless and protected data flow across the entire platform ecosystem.
            </p>
          </div>

          <div className="project-bento magnetic-card md:col-span-4 p-8 bg-white/80 dark:bg-white/[0.03] rounded-3xl border border-black/15 dark:border-white/5 group hover:bg-emerald-50/50 dark:hover:bg-white/[0.05] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none min-h-[220px]">
            <Database className="text-emerald-600 dark:text-emerald-400 mb-5" size={26} />
            <h4 className="text-xl font-bold text-foreground mb-3">Normalized Schema</h4>
            <p className="text-sm text-primary-muted font-medium leading-relaxed">
              Designed an advanced MongoDB database schema specifically structured to handle complex relationships and rapid querying.
            </p>
          </div>

          <div className="project-bento magnetic-card md:col-span-4 p-8 bg-white/80 dark:bg-white/[0.03] rounded-3xl border border-black/15 dark:border-white/5 group hover:bg-blue-50/50 dark:hover:bg-white/[0.05] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none min-h-[220px]">
            <Activity className="text-blue-600 dark:text-blue-400 mb-5" size={26} />
            <h4 className="text-xl font-bold text-foreground mb-3">Real-Time Task States</h4>
            <p className="text-sm text-primary-muted font-medium leading-relaxed">
              Engineered highly efficient state management to handle complex task lifecycles and real-time dashboard updates flawlessly.
            </p>
          </div>

          {/* ==========================================
              BENTO 6: Tech Stack Footer
              ========================================== */}
          <div className="project-bento md:col-span-12 mt-2 p-6 bg-white/90 dark:bg-white/[0.02] rounded-2xl border border-black/15 dark:border-white/5 flex flex-col md:flex-row md:items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-none">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Terminal size={18} className="text-fuchsia-500" />
              <span className="text-sm md:text-base">MERN Stack Deployed:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Node.js", "Express", "MongoDB"].map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 text-xs md:text-sm font-bold font-mono bg-fuchsia-500/10 text-fuchsia-800 border border-fuchsia-500/20 dark:bg-white/[0.03] dark:text-primary-muted dark:border-white/5 dark:hover:text-fuchsia-400 rounded-xl transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


// "use client";
// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";

// const GithubIcon = ({ size = 20 }: { size?: number }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.05 5.05 0 0 0 19 4.78a4.6 4.6 0 0 0-.1-3.2s-1.3-.4-4.2 1.6a14.2 14.2 0 0 0-7.8 0c-2.9-2-4.2-1.6-4.2-1.6a4.6 4.6 0 0 0-.1 3.2A5.05 5.05 0 0 0 3 7.82c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 8.5 18v4"></path>
//   </svg>
// );

// export default function Projects() {
//   const project = {
//     title: "Product Management Software",
//     description: "Engineered a full-stack project management dashboard designed to streamline task tracking and team collaboration. Developed a highly secure RESTful API backend and designed a normalized MongoDB database schema to handle complex task states and real-time updates efficiently.",
//     tech: ["React.js", "Node.js", "Express", "MongoDB"],
//     links: {
//       github: "#",
//       live: "#"
//     }
//   };

//   return (
//     <section id="projects" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-border-subtle/30">
//       <div className="max-w-5xl w-full mx-auto">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
//         >
//           Featured Work.
//         </motion.h2>

//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
//         >
//           {/* Abstract Project Visual/Placeholder (Linear aesthetic) */}
//           <div className="lg:col-span-7 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden bg-white/[0.02] border border-border-subtle/50 group-hover:border-border-subtle transition-colors duration-500">
//             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
//             {/* Minimalist wireframe illustration */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/10 rounded-lg flex flex-col shadow-2xl bg-background/50 backdrop-blur-sm">
//               <div className="h-8 border-b border-white/10 flex items-center px-4 gap-1.5">
//                 <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
//                 <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
//                 <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
//               </div>
//               <div className="flex-1 p-4 flex gap-4">
//                 <div className="w-1/4 h-full border border-white/5 rounded" />
//                 <div className="flex-1 flex flex-col gap-3">
//                   <div className="h-10 border border-white/5 rounded w-full" />
//                   <div className="flex-1 border border-white/5 rounded w-full" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Project Details */}
//           <div className="lg:col-span-5 flex flex-col justify-center lg:pl-8 z-10">
//             <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
//               {project.title}
//             </h3>
            
//             <div className="bg-white/[0.03] backdrop-blur-md border border-border-subtle p-6 rounded-xl mb-6 shadow-xl">
//               <p className="text-primary-muted text-base leading-relaxed">
//                 {project.description}
//               </p>
//             </div>

//             <ul className="flex flex-wrap gap-3 mb-8 font-mono text-sm text-primary-muted/80">
//               {project.tech.map((tech, i) => (
//                 <li key={i}>{tech}</li>
//               ))}
//             </ul>

//             <div className="flex items-center gap-6">
//               <a href={project.links.github} target="_blank" rel="noreferrer" className="text-primary-muted hover:text-foreground transition-colors flex items-center gap-2">
//                 <GithubIcon size={20} />
//                 <span className="text-sm font-medium">Source</span>
//               </a>
//               <a href={project.links.live} target="_blank" rel="noreferrer" className="text-primary-muted hover:text-foreground transition-colors flex items-center gap-2">
//                 <ExternalLink size={20} />
//                 <span className="text-sm font-medium">Live Demo</span>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }