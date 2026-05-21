// // src/components/sections/Hero.tsx
"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { magneticHelper } from "@/lib/utils";
import { Grid3X3, DatabaseZap, Package } from "lucide-react";

const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hero-entry", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.2,
    });

    if (ctaContainerRef.current) {
      const magneticElements = ctaContainerRef.current.querySelectorAll('.magnetic');
      magneticElements.forEach((el) => magneticHelper(el as HTMLElement));
    }
  }, { scope: containerRef });

  const techStack = [
    { name: "Modern Full-Stack", icon: Grid3X3, desc: "Architecting scalable web applications utilizing React, Node.js, and both SQL (PostgreSQL/Prisma) & NoSQL ecosystems." },
    { name: "SaaS Platforms", icon: DatabaseZap, desc: "Scalable architecture engineering." },
    { name: "Programmatic SEO", icon: Package, desc: "Seamless data flow optimization." },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      
      {/* 1. Ambient Aurora Background Glows (Industry Standard Splash of Color) */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[128px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      {/* 3D WebGL Element */}
      <ThreeScene />

      <div className="max-w-6xl z-10 w-full mx-auto">
        <p className="text-primary-muted font-medium mb-4 tracking-wide text-lg hero-entry">
          Hi, my name is
        </p>
        
        {/* 2. Gradient Typography for the Name */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-2 hero-entry text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 pb-2">
          Manoj Barmase.
        </h1>
        
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground/80 dark:text-primary-muted mb-16 hero-entry">
           I engineer robust full-stack web applications.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 hero-entry">
          {techStack.map((tech, i) => (
            <div 
              key={i} 
              /* 3. Fixed Card Backgrounds for Light Mode (bg-black/[0.03] vs dark:bg-white/[0.02]) */
              className="relative p-6 bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl flex flex-col gap-4 backdrop-blur-md group hover:border-violet-500/30 transition-colors shadow-sm dark:shadow-none"
            >
              <div className="w-10 h-10 rounded-lg bg-black/[0.05] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center text-primary-muted group-hover:text-violet-500 transition-all">
                <tech.icon size={22} />
              </div>
              <h4 className="text-xl font-semibold text-foreground tracking-tight">{tech.name}</h4>
              <p className="text-base text-primary-muted leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
        
        {/* <div ref={ctaContainerRef} className="flex flex-wrap items-center gap-6 hero-entry">
          <button className="magnetic interactive px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            View My Work
          </button>
          <button className="magnetic interactive px-8 py-4 bg-transparent text-foreground border border-black/20 dark:border-white/20 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Download Resume
          </button>
        </div> */}
        {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-10 relative z-20">
            
            {/* 1. View My Work Button - Smooth Scroll to Projects */}
            <a 
              href="#projects" 
              className="magnetic-interactive flex items-center justify-center px-8 py-4 bg-foreground text-background font-bold text-lg rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
            >
              View My Work
            </a>

            {/* 2. Download Resume Button - Direct Download Logic */}
            <a 
              href="/Manoj_Barmase_Resume.pdf" 
              download="Manoj_Barmase_Resume.pdf" 
              className="magnetic-interactive flex items-center justify-center px-8 py-4 bg-white/50 dark:bg-white/[0.03] text-foreground font-bold text-lg border border-black/15 dark:border-white/10 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all shadow-sm dark:shadow-none backdrop-blur-md"
            >
              Download Resume
            </a>

          </div>
      </div>
    </section>
  );
}


// "use client";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react"; // Core fix for the vanishing bug
// import gsap from "gsap";
// import dynamic from "next/dynamic";
// import { magneticHelper } from "@/lib/utils";
// import { Grid3X3, DatabaseZap, Package } from "lucide-react";

// const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// export default function Hero() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const ctaContainerRef = useRef<HTMLDivElement>(null);

//   // useGSAP automatically handles React 18 strict mode cleanup
//   useGSAP(() => {
//     // 1. Hero Entry Animation
//     gsap.from(".hero-entry", {
//       opacity: 0,
//       y: 60,
//       stagger: 0.15,
//       duration: 1.5,
//       ease: "power4.out",
//       delay: 0.2,
//     });

//     // 2. Magnetic Buttons Initialization
//     if (ctaContainerRef.current) {
//       const magneticElements = ctaContainerRef.current.querySelectorAll('.magnetic');
//       magneticElements.forEach((el) => magneticHelper(el as HTMLElement));
//     }
//   }, { scope: containerRef }); // Good Practice: Scope GSAP to this component only

//   const techStack = [
//     { name: "MERN Stack", icon: Grid3X3, desc: "Robust applications with systemic business logic." },
//     { name: "SaaS Platforms", icon: DatabaseZap, desc: "Scalable architecture engineering." },
//     { name: "Programmatic SEO", icon: Package, desc: "Seamless data flow optimization." },
//   ];

//   return (
//     <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      
//       <ThreeScene />

//       {/* Notice: Removed motion.div, using standard HTML tags since GSAP is controlling them */}
//       <div className="max-w-6xl z-10 w-full mx-auto">
//         <p className="text-primary-muted font-medium mb-4 tracking-wide text-lg hero-entry">
//           Hi, my name is
//         </p>
        
//         <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-2 hero-entry text-foreground">
//           Manoj Barmase.
//         </h1>
        
//         <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-primary-muted mb-16 hero-entry">
//           I architect scalable SaaS platforms.
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 hero-entry">
//           {techStack.map((tech, i) => (
//             <div 
//               key={i} 
//               className="relative p-6 bg-white/[0.02] border border-border-subtle rounded-xl flex flex-col gap-4 backdrop-blur-sm group hover:border-foreground/20 transition-colors"
//             >
//               <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-border-subtle flex items-center justify-center text-primary-muted group-hover:text-foreground group-hover:bg-white/[0.08] transition-all">
//                 <tech.icon size={22} />
//               </div>
//               <h4 className="text-xl font-semibold text-foreground tracking-tight">{tech.name}</h4>
//               <p className="text-base text-primary-muted leading-relaxed">{tech.desc}</p>
//             </div>
//           ))}
//         </div>
        
//         <div ref={ctaContainerRef} className="flex flex-wrap items-center gap-6 hero-entry">
//           <button className="magnetic interactive px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.05)]">
//             View My Work
//           </button>
//           <button className="magnetic interactive px-8 py-4 bg-transparent text-foreground border border-border-subtle rounded-lg hover:bg-white/5 transition-colors">
//             Download Resume
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";
// import { useEffect, useRef } from "react";
// import { motion, Variants } from "framer-motion";
// import gsap from "gsap";
// import dynamic from "next/dynamic";
// import { magneticHelper } from "@/lib/utils"; // Import magnetic utility
// import { Grid3X3, DatabaseZap, Package } from "lucide-react";

// // Performance Optimization: Dynamic import for Three.js (No SSR, reduces bundle)
// const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// export default function Hero() {
//   const ctaContainerRef = useRef<HTMLDivElement>(null);
  
//   // Staggered animation variants
//   const container: Variants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
//   };

//   const item: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
//   };

//   useEffect(() => {
//     // 1. Initial GSAP scene entry timeline
//     gsap.from(".hero-entry", {
//       opacity: 0,
//       y: 100,
//       stagger: 0.2,
//       duration: 1.5,
//       ease: "power4.out",
//       delay: 0.2,
//     });

//     // 2. Initialize Magnetic Micro-Interactions on CTA Buttons
//     if (ctaContainerRef.current) {
//       const magneticElements = ctaContainerRef.current.querySelectorAll('.magnetic');
//       magneticElements.forEach((el) => magneticHelper(el as HTMLElement));
//     }

//   }, []);

//   // Awards standard: Visual "Nodes/Cards" instead of long text paragraph
//   const techStack = [
//     { name: "MERN Stack", icon: Grid3X3, desc: "Robust applications with systemic business logic." },
//     { name: "SaaS Platforms", icon: DatabaseZap, desc: "Scalable architecture engineering." },
//     { name: "Programmatic SEO", icon: Package, desc: "Seamless data flow optimization." },
//   ];

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      
//       {/* Subtle 3D WebGL Element (z-0) */}
//       <ThreeScene />

//       <motion.div 
//         variants={container} 
//         initial="hidden" 
//         animate="show"
//         className="max-w-6xl z-10 w-full mx-auto"
//       >
//         <motion.p variants={item} className="text-primary-muted font-medium mb-4 tracking-wide text-lg hero-entry">
//           Hi, my name is
//         </motion.p>
        
//         <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tighter mb-2 hero-entry">
//           Manoj Barmase.
//         </motion.h1>
        
//         <motion.h2 variants={item} className="text-4xl md:text-7xl font-bold tracking-tight text-primary-muted mb-16 hero-entry">
//           I architect scalable SaaS platforms.
//         </motion.h2>
        
//         {/* Radical UX Shift: Text paragraph replaced by visual Node Grid */}
//         <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 hero-entry">
//           {techStack.map((tech, i) => (
//             <div 
//               key={i} 
//               className="relative p-6 bg-white/[0.02] border border-border-subtle rounded-xl flex flex-col gap-4 backdrop-blur-sm group hover:border-foreground/10 transition-colors"
//             >
//               <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-border-subtle flex items-center justify-center text-primary-muted group-hover:text-foreground group-hover:bg-white/[0.08] transition-all">
//                 <tech.icon size={22} />
//               </div>
//               <h4 className="text-xl font-semibold text-foreground tracking-tight">{tech.name}</h4>
//               <p className="text-base text-primary-muted leading-relaxed">{tech.desc}</p>
//             </div>
//           ))}
//         </motion.div>
        
//         {/* Magnetic Buttons (using the utility ref) */}
//         <motion.div variants={item} ref={ctaContainerRef} className="flex flex-wrap items-center gap-6 hero-entry">
//           <button className="magnetic interactive px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.05)]">
//             View My Work
//           </button>
//           <button className="magnetic interactive px-8 py-4 bg-transparent text-foreground border border-border-subtle rounded-lg hover:bg-white/5 transition-colors">
//             Download Resume
//           </button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }



// "use client";
// import { motion, useMotionTemplate, useMotionValue, Variants } from "framer-motion";
// import { Code2, Database, Rocket} from "lucide-react";

// // 1. Advanced Awwwards-style Spotlight Card Component
// function SpotlightCard({ title, description, icon: Icon, delay }: { title: string, description: string, icon: any, delay: number }) {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
//       onMouseMove={handleMouseMove}
//       className="group relative flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-border-subtle hover:border-white/10 transition-colors overflow-hidden"
//     >
//       {/* Dynamic Hover Spotlight */}
//       <motion.div
//         className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(
//               300px circle at ${mouseX}px ${mouseY}px,
//               rgba(255,255,255,0.06),
//               transparent 80%
//             )
//           `,
//         }}
//       />
      
//       <div className="mb-4 inline-flex p-3 rounded-lg bg-white/[0.03] border border-white/5 text-primary-muted group-hover:text-foreground transition-colors">
//         <Icon size={24} />
//       </div>
//       <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">{title}</h3>
//       <p className="text-sm text-primary-muted leading-relaxed">{description}</p>
//     </motion.div>
//   );
// }

// // 2. The Main Hero Layout
// export default function Hero() {
//   const item: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
//       {/* Background Premium Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

//       <div className="max-w-6xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
//         {/* Left Side: Typography */}
//         <motion.div 
//           initial="hidden" 
//           animate="show"
//           variants={{
//             hidden: { opacity: 0 },
//             show: { opacity: 1, transition: { staggerChildren: 0.1 } }
//           }}
//         >
//           <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-border-subtle text-sm text-primary-muted mb-6">
//             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//             Available for new opportunities
//           </motion.div>
          
//           <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-[1.1]">
//             Manoj <br/> Barmase.
//           </motion.h1>
          
//           <motion.h2 variants={item} className="text-2xl md:text-4xl font-semibold tracking-tight text-primary-muted mb-10">
//             Architecting scalable <span className="text-foreground">SaaS platforms.</span>
//           </motion.h2>

//           <motion.div variants={item} className="flex flex-wrap items-center gap-4">
//             <a href="#projects" className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:scale-105 transition-transform duration-300">
//               Explore Work
//             </a>
//             <a href="#contact" className="px-8 py-4 bg-transparent text-foreground border border-border-subtle rounded-full hover:bg-white/5 transition-colors">
//               Contact Me
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Right Side: Bento Grid Cards (Replaced the long text) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="sm:col-span-2">
//             <SpotlightCard 
//               delay={0.4}
//               icon={Code2}
//               title="MERN Stack Architecture"
//               description="Engineering robust full-stack applications with React, Node.js, Express, and MongoDB. Focused on clean code and scalable folder structures."
//             />
//           </div>
//           <SpotlightCard 
//             delay={0.5}
//             icon={Database}
//             title="Headless CMS"
//             description="Building dynamic content architectures utilizing Strapi, Supabase, and Prisma ORM."
//           />
//           <SpotlightCard 
//             delay={0.6}
//             icon={Rocket}
//             title="End-to-End SDLC"
//             description="Driving features from PRD/SRS documentation to production deployment and Programmatic SEO."
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion, Variants, useMotionValue, useMotionTemplate } from "framer-motion";
// import { MouseEvent } from "react";

// export default function Hero() {
//   // 1. Mouse position tracking for the Spotlight effect
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   // 2. Staggered animation variants
//   const container: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//     },
//   };

//   const item: Variants = {
//     hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, // Added subtle blur reveal
//     show: { 
//       opacity: 1, 
//       y: 0, 
//       filter: "blur(0px)",
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
//     },
//   };

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden group"
//     >
//       {/* 3. The Interactive Spotlight Background */}
//       <motion.div
//         className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(
//               600px circle at ${mouseX}px ${mouseY}px,
//               rgba(255,255,255,0.04),
//               transparent 80%
//             )
//           `,
//         }}
//       />

//       {/* Static subtle glow fallback */}
//       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[128px] pointer-events-none" />

//       <motion.div 
//         variants={container} 
//         initial="hidden" 
//         animate="show"
//         className="max-w-4xl z-10"
//       >
//         <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
//           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//           <span className="text-sm font-medium text-primary-muted tracking-wide">Available for new opportunities</span>
//         </motion.div>
        
//         {/* Animated Gradient Text for Name */}
//         <motion.h1 variants={item} className="text-5xl md:text-8xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
//           Manoj Barmase.
//         </motion.h1>
        
//         <motion.h2 variants={item} className="text-3xl md:text-6xl font-bold tracking-tight text-primary-muted mb-8">
//           I architect scalable SaaS platforms.
//         </motion.h2>
        
//         <motion.p variants={item} className="text-base md:text-lg text-primary-muted max-w-2xl leading-relaxed mb-12">
//           I am a Full-Stack Software Developer specializing in the MERN stack and Headless CMS. 
//           I engineer robust applications with complex business logic, seamless data flow, 
//           and programmatic SEO optimizations.
//         </motion.p>
        
//         <motion.div variants={item} className="flex flex-wrap items-center gap-4">
//           {/* Magnetic CTA Button */}
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300"
//           >
//             View My Work
//           </motion.button>
          
//           <motion.button 
//             whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 bg-transparent text-foreground border border-border-subtle rounded-lg transition-all duration-300"
//           >
//             Download Resume
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


// "use client";
// import { motion, Variants } from "framer-motion"; // Explicitly importing Variants

// export default function Hero() {
//   // 1. Industry Standard: Strictly type the animation objects as Variants
//   const container: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//     },
//   };

//   const item: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
//       {/* Very subtle background glow effect (Linear aesthetic) */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-[128px] pointer-events-none" />

//       <motion.div 
//         variants={container} 
//         initial="hidden" 
//         animate="show"
//         className="max-w-4xl z-10"
//       >
//         <motion.p variants={item} className="text-primary-muted font-medium mb-4 tracking-wide">
//           Hi, my name is
//         </motion.p>
        
//         <motion.h1 variants={item} className="text-5xl md:text-8xl font-bold tracking-tighter mb-2">
//           Manoj Barmase.
//         </motion.h1>
        
//         <motion.h2 variants={item} className="text-3xl md:text-6xl font-bold tracking-tight text-primary-muted mb-8">
//           I architect scalable SaaS platforms.
//         </motion.h2>
        
//         <motion.p variants={item} className="text-base md:text-lg text-primary-muted max-w-2xl leading-relaxed mb-12">
//           I am a Full-Stack Software Developer specializing in the MERN stack and Headless CMS. 
//           I engineer robust applications with complex business logic, seamless data flow, 
//           and programmatic SEO optimizations.
//         </motion.p>
        
//         <motion.div variants={item} className="flex flex-wrap items-center gap-4">
//           <button className="px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors">
//             View My Work
//           </button>
//           <button className="px-6 py-3 bg-transparent text-foreground border border-border-subtle rounded-lg hover:bg-white/5 transition-colors">
//             Download Resume
//           </button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }