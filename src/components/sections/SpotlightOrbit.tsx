"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { magneticHelper } from "@/lib/utils";

const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// MATHEMATICAL DISTRIBUTION: Tailored Text Labels for Manoj's Architect Persona
// Note: Increased radii (360, 520, 680) because text pills are wider than icons.
const orbitLabels = [
  // Ring 1 (Inner): Core Identity (3 items, 120deg apart)
  { text: "Problem Solver", color: "text-blue-600 dark:text-blue-400", borderHover: "group-hover/item:border-blue-500/50", radius: "360px", duration: 30, delay: (0/3) * 30 },
  { text: "SaaS Architect", color: "text-violet-600 dark:text-violet-400", borderHover: "group-hover/item:border-violet-500/50", radius: "360px", duration: 30, delay: (1/3) * 30 },
  { text: "Systems Thinker", color: "text-emerald-600 dark:text-emerald-400", borderHover: "group-hover/item:border-emerald-500/50", radius: "360px", duration: 30, delay: (2/3) * 30 },

  // Ring 2 (Middle): Technical Mastery (4 items, 90deg apart)
  { text: "MERN Stack", color: "text-foreground", borderHover: "group-hover/item:border-white/50", radius: "520px", duration: 40, delay: (0/4) * 40 },
  { text: "Programmatic SEO", color: "text-cyan-600 dark:text-cyan-400", borderHover: "group-hover/item:border-cyan-500/50", radius: "520px", duration: 40, delay: (1/4) * 40 },
  { text: "API Design", color: "text-orange-600 dark:text-orange-400", borderHover: "group-hover/item:border-orange-500/50", radius: "520px", duration: 40, delay: (2/4) * 40 },
  { text: "SDLC Master", color: "text-fuchsia-600 dark:text-fuchsia-400", borderHover: "group-hover/item:border-fuchsia-500/50", radius: "520px", duration: 40, delay: (3/4) * 40 },

  // Ring 3 (Outer): Mindset & Infrastructure (3 items, 120deg apart)
  { text: "Definite Purpose", color: "text-yellow-600 dark:text-yellow-400", borderHover: "group-hover/item:border-yellow-500/50", radius: "680px", duration: 50, delay: (0/3) * 50 },
  { text: "Headless CMS", color: "text-blue-500", borderHover: "group-hover/item:border-blue-500/50", radius: "680px", duration: 50, delay: (1/3) * 50 },
  { text: "Cloud Databases", color: "text-green-500", borderHover: "group-hover/item:border-green-500/50", radius: "680px", duration: 50, delay: (2/3) * 50 },
];

export default function SpotlightOrbit() {
  const profileContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (profileContainerRef.current) magneticHelper(profileContainerRef.current);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-56 bg-background border-y border-border-subtle/20">
      
      <ThreeScene />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative flex items-center justify-center w-full h-full z-10 max-w-7xl mx-auto">
        
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
          <div className="absolute -inset-6 rounded-full border border-violet-500/10 animate-pulse" />
          
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-background shadow-2xl transition-all duration-700 grayscale group-hover:grayscale-0">
             <Image src="/profile.jpg" alt="Manoj Barmase" fill className="object-cover" priority sizes="(max-w-768px) 224px, 288px"/>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-foreground text-background text-sm font-bold rounded-full shadow-2xl whitespace-nowrap z-40">
            Manoj Barmase<span className="text-violet-500">.</span>
          </div>
        </motion.div>

        {/* Dynamic Text Orbits */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {orbitLabels.map((item, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: -item.delay }}
              style={{ width: item.radius, height: item.radius }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group/item"
                // Counter-rotate to keep text perfectly horizontal
                animate={{ rotate: -360 }}
                transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: -item.delay }}
              >
                {/* The Pill Badge */}
                <div className={`magnetic-logo px-5 py-2.5 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover/item:scale-110 group-hover/item:bg-background ${item.borderHover} cursor-default`}>
                   <span className={`text-sm md:text-base font-semibold tracking-wide whitespace-nowrap ${item.color}`}>
                     {item.text}
                   </span>
                </div>
              </motion.div>
              {/* Visual Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-black/[0.08] dark:border-white/[0.08] -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { useEffect, useRef } from "react";
// import { magneticHelper } from "@/lib/utils";

// // Optimized Custom SVGs (Fixed Fill/Stroke Issues for clarity)
// const ReactLogo = () => (
//   <svg viewBox="-11.5 -10.2 23 20.4" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.2">
//     <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
//     <ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/>
//   </svg>
// );
// const NextLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//   </svg>
// );
// const TailwindLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//   </svg>
// );
// const NodeLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//   </svg>
// );
// const MongoLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
//   </svg>
// );
// const GithubLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//   </svg>
// );
// const DatabaseLogo = () => ( // Generic for Prisma/Supabase
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
//   </svg>
// );

// const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// // MATHEMATICAL DISTRIBUTION: Delays are calculated to prevent ANY overlap
// const orbitSkills = [
//   // Ring 1 (Inner): 3 items. Dist = 360/3 = 120deg apart. Duration = 20s.
//   // Delay = (index / totalItems) * duration
//   { logo: ReactLogo, color: "text-blue-500", label: "React", radius: "320px", duration: 24, delay: (0/3) * 24 },
//   { logo: NextLogo, color: "text-foreground", label: "Next.js", radius: "320px", duration: 24, delay: (1/3) * 24 },
//   { logo: TailwindLogo, color: "text-cyan-500", label: "Tailwind", radius: "320px", duration: 24, delay: (2/3) * 24 },

//   // Ring 2 (Middle): 4 items. Dist = 360/4 = 90deg apart. Duration = 32s.
//   { logo: NodeLogo, color: "text-green-500", label: "Node.js", radius: "460px", duration: 36, delay: (0/4) * 36 },
//   { logo: DatabaseLogo, color: "text-emerald-500", label: "Supabase", radius: "460px", duration: 36, delay: (1/4) * 36 },
//   { logo: DatabaseLogo, color: "text-blue-600 dark:text-blue-400", label: "Prisma", radius: "460px", duration: 36, delay: (2/4) * 36 },
//   { logo: MongoLogo, color: "text-green-600", label: "MongoDB", radius: "460px", duration: 36, delay: (3/4) * 36 },

//   // Ring 3 (Outer): 3 items. Dist = 360/3 = 120deg apart. Duration = 48s.
//   { logo: GithubLogo, color: "text-foreground", label: "GitHub", radius: "600px", duration: 48, delay: (0/3) * 48 },
//   { logo: NextLogo, color: "text-violet-500", label: "Strapi", radius: "600px", duration: 48, delay: (1/3) * 48 },
//   { logo: NextLogo, color: "text-orange-500", label: "Express", radius: "600px", duration: 48, delay: (2/3) * 48 },
// ];

// export default function SpotlightOrbit() {
//   const profileContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (profileContainerRef.current) magneticHelper(profileContainerRef.current);
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 bg-background border-y border-border-subtle/20">
      
//       <ThreeScene />

//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />

//       <div className="relative flex items-center justify-center w-full h-full z-10 max-w-7xl mx-auto">
        
//         {/* Profile Container */}
//         <motion.div 
//           ref={profileContainerRef}
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="magnetic interactive relative z-30 group"
//         >
//           <div className="absolute inset-0 rounded-full bg-violet-500/20 animate-ping duration-[3000ms]" />
//           <div className="absolute -inset-6 rounded-full border border-violet-500/10 animate-pulse" />
          
//           <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-background shadow-2xl transition-all duration-700 grayscale group-hover:grayscale-0">
//              <Image src="/profile.jpg" alt="Manoj Barmase" fill className="object-cover" priority sizes="(max-w-768px) 224px, 288px"/>
//           </div>

//           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-foreground text-background text-sm font-bold rounded-full shadow-2xl whitespace-nowrap z-40">
//             Manoj Barmase<span className="text-violet-500">.</span>
//           </div>
//         </motion.div>

//         {/* Dynamic Orbits */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           {orbitSkills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               initial={{ rotate: 0 }}
//               animate={{ rotate: 360 }}
//               transition={{ duration: skill.duration, repeat: Infinity, ease: "linear", delay: -skill.delay }}
//               style={{ width: skill.radius, height: skill.radius }}
//             >
//               <motion.div 
//                 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group/item"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: skill.duration, repeat: Infinity, ease: "linear", delay: -skill.delay }}
//               >
//                 <div className={`magnetic-logo relative w-16 h-16 rounded-2xl flex items-center justify-center p-3 bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover/item:scale-125 group-hover/item:border-violet-500/30 group-hover/item:bg-background ${skill.color}`}>
//                    <skill.logo />
                   
//                    {/* Tooltip on hover */}
//                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
//                      <span className="text-[10px] font-bold font-mono text-foreground bg-background px-3 py-1.5 rounded-full border border-border-subtle shadow-xl whitespace-nowrap">
//                        {skill.label}
//                      </span>
//                    </div>
//                 </div>
//               </motion.div>
//               <div className="absolute inset-0 rounded-full border border-dashed border-black/[0.08] dark:border-white/[0.08] -z-10" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { magneticHelper } from "@/lib/utils"; // Ensure this import works
// import { useEffect, useRef } from "react";

// // Re-using the same optimized WebGL scene
// const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// /* =========================================================
//    INDUSTRY STANDARD: Inline Monochromatic SVGs for Brands
//    controlled by 'currentColor' for maximum visual flexibility
//    ========================================================= */

// const ReactLogo = () => (
//   <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" fill="none" stroke="currentColor">
//     <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
//     <g strokeWidth="1">
//       <ellipse rx="11" ry="4.2"/>
//       <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
//       <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
//     </g>
//   </svg>
// );

// const NextLogo = () => (
//   <svg viewBox="0 0 128 128" width="100%" height="100%" fill="none">
//     <path d="M123.6 64a59.6 59.6 0 1 1-119.2 0 59.6 59.6 0 0 1 119.2 0Z" stroke="currentColor" strokeWidth="6" />
//     <path d="M102.2 64 64 34v60l38.2-30ZM45 64l38.2-30v60L45 64Z" fill="currentColor"/>
//   </svg>
// );

// const TailwindLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M17.11 3.86a.83.83 0 0 0-.61-.36H7.5c-1.63 0-3.08 1.05-3.56 2.6L2.61 9.8c-.37 1.2.53 2.45 1.78 2.45h2.51c1.25 0 2.15 1.25 1.78 2.45l-1.33 3.7c-.48 1.55.97 2.6 2.6 2.6h9.61c1.63 0 3.08-1.05 3.56-2.6l1.33-3.7c.37-1.2-.53-2.45-1.78-2.45h-2.51c-1.25 0-2.15-1.25-1.78-2.45l1.33-3.7c.48-1.55-.97-2.6-2.6-2.6Z" />
//   </svg>
// );

// const NodeLogo = () => (
//   <svg viewBox="0 0 128 128" width="100%" height="100%" fill="currentColor">
//     <path d="M112.5 83l-16-9.1V54.1l16-9.1 16 9.1v19.8l-16 9.1zM64 112L1.2 76.2V41.8L64 6l62.8 35.8v34.4L64 112zM16.5 70.8l47.5 27 47.5-27V37.2L64 10.2 16.5 37.2v33.6z" />
//   </svg>
// );

// const MongoLogo = () => (
//   <svg viewBox="0 0 128 128" width="100%" height="100%" fill="currentColor">
//     <path d="M89.2 24.3c-1.1-.3-2.2-.4-3.3-.4-6 0-11 5.3-11.2 11.8v1.3c0 23.9 19.3 43.1 43.2 43.1 3.7 0 7.3-.5 10.8-1.4.3-1.1.4-2.2.4-3.3 0-24.1-19.4-43.6-43.9-43.6-1.1.1-2.2.3-3.3.4zM60.1 27.2c-.3 1-.3 2.1-.3 3.1 0 24.1 19.4 43.6 43.9 43.6.3-.1.6-.1.9-.1C94 51.5 82.5 30.6 60.1 27.2zM63.8 62.4c1.1.3 2.2.4 3.3.4 6 0 11-5.3 11.2-11.8v-1.3c0-23.9-19.3-43.1-43.2-43.1-3.7 0-7.3.5-10.8 1.4-.3 1.1-.4 2.2-.4 3.3 0 24.1 19.4 43.6 43.9 43.6 1.1-.1 2.2-.3 3.3-.4zM92.9 59.5c.3-1 .3-2.1.3-3.1 0-24.1-19.4-43.6-43.9-43.6-.3.1-.6.1-.9.1 10.6 22.3 22.1 43.2 44.5 46.6zM63.8 62.4c-1 0-1.9 0-2.8-.1-24.1-3.3-35.6-24.3-35.6-46.7h.3C48 16 59.5 36.9 63.8 62.4z"/>
//   </svg>
// );

// const SupabaseLogo = () => (
//   <svg viewBox="0 0 128 128" width="100%" height="100%" fill="currentColor">
//     <path d="M64 0C28.7 0 0 28.7 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64C128 28.7 99.3 0 64 0zm0 116c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"/><path d="M64 36v56l24-28-24-28zM64 92V36L40 64l24 28z"/>
//   </svg>
// );

// const PrismaLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
//     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 16.5h2v-6h-2v6zm0-8h2V6.5h-2V8.5z"/>
//   </svg>
// );

// const GithubLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
//     <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
//   </svg>
// );

// const StrapiLogo = () => (
//   <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
//     <circle cx="12" cy="12" r="10"/><path d="M11 17l4-5-4-5V17Z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM11 17V7l4 5-4 5Z" fill="#884de4"/>
//   </svg>
// );

// const DocusaurusLogo = () => (
//   <svg viewBox="0 0 128 128" width="100%" height="100%" fill="none" stroke="currentColor">
//     <path d="M101.3 64 64 26.7 26.7 64 64 101.3 101.3 64Z" strokeWidth="6"/>
//     <path d="M64 0 0 64l64 64 64-64L64 0zM13 64l51-51 51 51-51 51L13 64z" strokeWidth="4" />
//   </svg>
// );

// const ExpressLogo = () => (
//   <svg viewBox="0 0 128 128" width="100%" height="100%" fill="currentColor">
//     <path d="M84.1 63.8c-1.8 1.8-3.9 3-6 3.6l-5.6.8V11h-16v61.4c1.8-.8 3.9-1.2 6.2-1.2h.4v16h11l20.4-20.4-10.4-10.4z"/>
//     <path d="M102.3 84.1l11 11-16 16c1.8 1.8 3 3.9 3.6 6l.8 5.6H11V84.1c1.8-.8 3.9-1.2 6.2-1.2h102.3z" transform="scale(-1)"/>
//   </svg>
// );


// // 11 Skills Distributed across 3 Concentric Rings
// const orbitSkills = [
//   // Ring 1 (Inner): Fast, Highly Vibrant (220px Radius)
//   { logo: ReactLogo, color: "text-blue-500", delay: 0, radius: "220px", duration: 25 },
//   { logo: NextLogo, color: "text-black dark:text-white", delay: 8, radius: "220px", duration: 25 },
//   { logo: TailwindLogo, color: "text-cyan-500", delay: 16, radius: "220px", duration: 25 },

//   // Ring 2 (Middle): Average (320px Radius)
//   { logo: NodeLogo, color: "text-green-500", delay: 0, radius: "320px", duration: 35 },
//   { logo: ExpressLogo, color: "text-gray-600 dark:text-gray-300", delay: 10, radius: "320px", duration: 35 },
//   { logo: StrapiLogo, color: "text-violet-600", delay: 20, radius: "320px", duration: 35 },
  
//   // Ring 3 (Outer): Slow, High Contrasts (420px Radius)
//   { logo: MongoLogo, color: "text-emerald-500", delay: 0, radius: "420px", duration: 50 },
//   { logo: SupabaseLogo, color: "text-emerald-600 dark:text-emerald-400", delay: 10, radius: "420px", duration: 50 },
//   { logo: PrismaLogo, color: "text-blue-600 dark:text-blue-400", delay: 20, radius: "420px", duration: 50 },
//   { logo: GithubLogo, color: "text-black dark:text-white/80", delay: 30, radius: "420px", duration: 50 },
//   { logo: DocusaurusLogo, color: "text-green-600", delay: 40, radius: "420px", duration: 50 },
// ];

// export default function SpotlightOrbit() {
//   const profileContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Magnetic Effect for the central profile image container
//     if (profileContainerRef.current) {
//       magneticHelper(profileContainerRef.current);
//     }
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 bg-background border-y border-border-subtle/20">
      
//       {/* Background Consistency (WebGL Scene) */}
//       <ThreeScene />

//       {/* Identical Ambient Glows as Hero/About */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

//       <div className="relative flex items-center justify-center w-full h-full z-10 max-w-7xl mx-auto">
        
//         {/* 1. CENTRAL PROFILE (Gravity Source) */}
//         <motion.div 
//           ref={profileContainerRef}
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="magnetic interactive relative group"
//         >
//           {/* Animated Halo Rings */}
//           <div className="absolute inset-0 rounded-full bg-violet-500/20 animate-ping duration-[3000ms]" />
//           <div className="absolute -inset-4 rounded-full border border-violet-500/10 animate-pulse" />
//           <div className="absolute -inset-10 rounded-full border border-violet-500/5" />
          
//           {/* Image Container (Grayscale to Color) */}
//           <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-background shadow-2xl transition-all duration-700 grayscale group-hover:grayscale-0">
//              <Image 
//                 src="/profile.jpg" 
//                 alt="Manoj Barmase - Creative Full Stack Architect"
//                 fill
//                 className="object-cover"
//                 priority={true} // High optimization
//                 sizes="(max-w-768px) 192px, 256px"
//              />
//           </div>

//           {/* Floater Label with Glow */}
//           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-foreground text-background text-sm font-bold rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] whitespace-nowrap z-30">
//             Manoj Barmase<span className="text-violet-500">.</span>
//           </div>
//         </motion.div>

//         {/* 2. DYNAMIC TECHNOLOGY ORBITS (11 Items) */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           {orbitSkills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               initial={{ rotate: 0 }}
//               // Orbit Rotation (Path)
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: skill.duration,
//                 repeat: Infinity,
//                 ease: "linear",
//                 delay: -skill.delay // Starts mapping at different path segments
//               }}
//               style={{ width: skill.radius, height: skill.radius }}
//             >
//               {/* Skill Icon Container */}
//               <motion.div 
//                 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group/item"
//                 // Counter-Rotation (Keeps icon readable)
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   duration: skill.duration,
//                   repeat: Infinity,
//                   ease: "linear",
//                   delay: -skill.delay
//                 }}
//               >
//                 {/* The Logo Box (Glassmorphism & Magnetic) */}
//                 <div className={`magnetic-logo w-16 h-16 rounded-2xl flex flex-col items-center justify-center gap-1.5 p-3.5 bg-black/[0.06] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover/item:scale-110 group-hover/item:border-violet-500/30 group-hover/item:shadow-violet-500/10 ${skill.color}`}>
//                    <div className="w-8 h-8 flex items-center justify-center">
//                      {<skill.logo />}
//                    </div>
//                 </div>
//               </motion.div>

//               {/* Dashed Orbit Circle Visual */}
//               <div className="absolute inset-0 rounded-full border border-dashed border-black/[0.05] dark:border-white/[0.05] -z-10" />
//             </motion.div>
//           ))}
//         </div>

//       </div>

//       {/* Decorative Text */}
//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
//         <p className="text-xl md:text-2xl font-bold font-mono text-primary-muted/30 tracking-[0.3em] uppercase">
//           Technology Satellite
//         </p>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { 
//   Atom, Database, Code2, Cpu, 
//   Layers, Cloud, Globe, Smartphone 
// } from "lucide-react";
// import dynamic from "next/dynamic";

// const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// const orbitSkills = [
//   { icon: Atom, color: "text-blue-500", label: "React", delay: 0, radius: "180px", duration: 20 },
//   { icon: Database, color: "text-emerald-500", label: "MongoDB", delay: 5, radius: "180px", duration: 20 },
//   { icon: Code2, color: "text-orange-500", label: "Node.js", delay: 10, radius: "280px", duration: 35 },
//   { icon: Smartphone, color: "text-fuchsia-500", label: "Mobile", delay: 15, radius: "280px", duration: 35 },
//   { icon: Globe, color: "text-cyan-500", label: "SEO", delay: 20, radius: "380px", duration: 50 },
//   { icon: Cloud, color: "text-blue-400", label: "AWS", delay: 25, radius: "380px", duration: 50 },
// ];

// export default function SpotlightOrbit() {
//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 bg-background">
//       {/* Background Consistency */}
//       <ThreeScene />

//       {/* Ambient Glows */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="relative flex items-center justify-center w-full h-full">
        
//         {/* 1. CENTRAL IMAGE (The Gravity Source) */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.5 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="relative z-20 group"
//         >
//           {/* Pulsing Rings around Image */}
//           <div className="absolute inset-0 rounded-full bg-violet-500/20 animate-ping duration-[3000ms]" />
//           <div className="absolute -inset-4 rounded-full border border-violet-500/10 animate-pulse" />
          
//           {/* The Image Container */}
//           <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
//              <Image 
//                 src="/profile.jpg" 
//                 alt="Manoj Barmase"
//                 fill
//                 className="object-cover"
//                 priority
//              />
//           </div>

//           {/* Floating Label */}
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-foreground text-background text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
//             Manoj Barmase
//           </div>
//         </motion.div>

//         {/* 2. DYNAMIC ORBITS */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           {orbitSkills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               initial={{ rotate: 0 }}
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: skill.duration,
//                 repeat: Infinity,
//                 ease: "linear",
//                 delay: -skill.delay // Starts at different positions
//               }}
//               style={{ width: skill.radius, height: skill.radius }}
//             >
//               {/* The Skill Item */}
//               <motion.div 
//                 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group/item"
//                 // Counter-rotation: Keeps the icon upright while the orbit rotates
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   duration: skill.duration,
//                   repeat: Infinity,
//                   ease: "linear",
//                   delay: -skill.delay
//                 }}
//               >
//                 <div className="flex flex-col items-center gap-2">
//                   <div className={`p-3 rounded-xl bg-black/[0.05] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 backdrop-blur-md shadow-xl transition-all duration-300 group-hover/item:scale-125 group-hover/item:border-violet-500/50 ${skill.color}`}>
//                     <skill.icon size={24} strokeWidth={2.5} />
//                   </div>
//                   <span className="opacity-0 group-hover/item:opacity-100 transition-opacity text-xs font-bold font-mono text-foreground bg-background/80 px-2 py-0.5 rounded border border-border-subtle">
//                     {skill.label}
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Visual Orbit Ring (Subtle Dashed Line) */}
//               <div className="absolute inset-0 rounded-full border border-dashed border-black/5 dark:border-white/5 -z-10" />
//             </motion.div>
//           ))}
//         </div>

//       </div>

//       {/* Decorative Text */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
//         <h3 className="text-xl md:text-2xl font-bold text-foreground/40 dark:text-white/20 tracking-[0.3em] uppercase">
//           Technology Satellite
//         </h3>
//       </div>
//     </section>
//   );
// }