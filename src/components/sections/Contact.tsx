"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { 
  Mail, Phone, Send, Sparkles,CheckCircle2, AlertCircle 
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";
// Pura top import kuch aisa dikhna chahiye:
import { useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Consistent WebGL Background
const ThreeScene = dynamic(() => import("../ui/ThreeScene"), { ssr: false });

// Custom Github Icon
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.05 5.05 0 0 0 19 4.78a4.6 4.6 0 0 0-.1-3.2s-1.3-.4-4.2 1.6a14.2 14.2 0 0 0-7.8 0c-2.9-2-4.2-1.6-4.2-1.6a4.6 4.6 0 0 0-.1 3.2A5.05 5.05 0 0 0 3 7.82c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 8.5 18v4"></path>
  </svg>
);

// Custom Linkedin Icon matching Lucide's aesthetic
const LinkedinIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useGSAP(() => {
    const cards = gsap.utils.toArray('.contact-bento');
    
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
      const magneticElements = sectionRef.current.querySelectorAll('.magnetic-interactive');
      magneticElements.forEach((el) => magneticHelper(el as HTMLElement));
    }
  }, { scope: sectionRef });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Later, connect this to Formspree, EmailJS, or Next.js Server Actions
  //   alert("Architect mode: Form submission logic will be integrated here!");
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus("submitting");

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         // YAHAN APNI KEY PASTE KAREIN JO ABHI AAPNE CREATE KI HAI 👇
  //         access_key: "654d1dc1-408c-4840-a814-aa2ee30a2262", 
  //         name: formData.name,
  //         email: formData.email,
  //         message: formData.message,
  //       }),
  //     });

  //     const result = await response.json();
  //     if (result.success) {
  //       setStatus("success");
  //       setFormData({ name: "", email: "", message: "" }); // Form clear karega
  //       setTimeout(() => setStatus("idle"), 5000); // 5 sec baad button normal karega
  //     } else {
  //       setStatus("error");
  //     }
  //   } catch (error) {
  //     setStatus("error");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Industry Standard: Native FormData API (No manual state tracking needed)
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Apni Web3Forms Key yahan add karein
    formData.append("access_key", "654d1dc1-408c-4840-a814-aa2ee30a2262");

    // Convert to JSON
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset(); // Form inputs ko directly clear kar dega
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-16 border-t border-black/5 dark:border-white/5 overflow-hidden perspective-[1000px]"
    >
      {/* 1. Seamless WebGL Background */}
      <ThreeScene />

      {/* 2. Vibrant Ambient Glows (Warm vibes for Contact) */}
      <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-rose-500/20 dark:bg-rose-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-orange-600 dark:text-orange-400 font-semibold mb-3">
            05 / Let's Connect
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Initiate Protocol.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* ==========================================
              LEFT COLUMN: Contact Details (Bento Grid)
              ========================================== */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Email Card */}
            <a 
              href="mailto:manojbarmase9@gmail.com"
              className="contact-bento magnetic-card p-8 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex flex-col justify-center backdrop-blur-2xl group hover:border-orange-500/40 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center border border-orange-500/20 mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h4 className="text-sm font-bold text-primary-muted uppercase tracking-widest mb-1">Email Protocol</h4>
              <p className="text-lg md:text-xl font-semibold text-foreground">manojbarmase9@gmail.com</p>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+918319548377"
              className="contact-bento magnetic-card p-8 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex flex-col justify-center backdrop-blur-2xl group hover:border-rose-500/40 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20 mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h4 className="text-sm font-bold text-primary-muted uppercase tracking-widest mb-1">Direct Line</h4>
              <p className="text-lg md:text-xl font-semibold text-foreground">+91 83195 48377</p>
            </a>

            {/* Social Links Row */}
            <div className="contact-bento flex gap-6">
              <a 
                href="https://www.linkedin.com/in/manoj-barmase-7a382325b" 
                target="_blank" rel="noopener noreferrer"
                className="magnetic-interactive flex-1 p-6 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex items-center justify-center gap-3 backdrop-blur-2xl hover:border-blue-500/40 hover:bg-blue-500/5 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none text-foreground"
              >
                <LinkedinIcon size={22} className="text-blue-600 dark:text-blue-400" />
                <span className="font-bold">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/ManojBarmase" 
                target="_blank" rel="noopener noreferrer"
                className="magnetic-interactive flex-1 p-6 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex items-center justify-center gap-3 backdrop-blur-2xl hover:border-foreground/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none text-foreground"
              >
                <GithubIcon size={22} />
                <span className="font-bold">GitHub</span>
              </a>
            </div>

          </div>

          {/* ==========================================
              RIGHT COLUMN: The Form
              ========================================== */}
          <div className="contact-bento md:col-span-7 relative p-8 md:p-10 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-orange-500" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Send a message</h3>
            </div>

            {/* <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">Your Name</label>
                  <input 
                    type="text" id="name" placeholder="John Doe" required
                    className="w-full px-5 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-foreground placeholder:text-primary-muted/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">Email Address</label>
                  <input 
                    type="email" id="email" placeholder="john@example.com" required
                    className="w-full px-5 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-foreground placeholder:text-primary-muted/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="message" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">Your Message</label>
                <textarea 
                  id="message" placeholder="Tell me about your project or opportunity..." required
                  className="w-full h-full min-h-[160px] px-5 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-foreground placeholder:text-primary-muted/50 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="magnetic-interactive group relative w-full md:w-auto self-end mt-2 flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

            </form> */}
             <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">Your Name</label>
                  {/* Added name="name" and removed value/onChange */}
                  <input 
                    type="text" id="name" name="name" placeholder="John Doe" required
                    className="w-full px-5 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-foreground placeholder:text-primary-muted/50 disabled:opacity-50"
                    disabled={status === "submitting"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">Email Address</label>
                  {/* Added name="email" */}
                  <input 
                    type="email" id="email" name="email" placeholder="john@example.com" required
                    className="w-full px-5 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-foreground placeholder:text-primary-muted/50 disabled:opacity-50"
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="message" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">Your Message</label>
                {/* Added name="message" */}
                <textarea 
                  id="message" name="message" placeholder="Tell me about your project or opportunity..." required
                  className="w-full h-full min-h-[160px] px-5 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-foreground placeholder:text-primary-muted/50 resize-none disabled:opacity-50"
                  disabled={status === "submitting"}
                />
              </div>

              <button 
                type="submit"
                disabled={status === "submitting"}
                className={`magnetic-interactive group relative w-full md:w-auto self-end mt-2 flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-xl transition-all overflow-hidden ${
                  status === "success" 
                    ? "bg-emerald-500 text-white" 
                    : status === "error"
                    ? "bg-rose-500 text-white"
                    : "bg-foreground text-background hover:scale-[1.02] active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "idle" && (
                    <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                  {status === "submitting" && "Sending Protocol..."}
                  {status === "success" && (
                    <>Message Sent <CheckCircle2 size={18} /></>
                  )}
                  {status === "error" && (
                    <>Failed to Send <AlertCircle size={18} /></>
                  )}
                </span>
                {status === "idle" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

            </form>

          </div>

        </div>
      </div>

      {/* Ultra-Minimalist Footer attached to the bottom of the section */}
      <div className="absolute bottom-6 w-full text-center text-sm font-mono text-primary-muted/50 font-medium z-10">
        <p>© {new Date().getFullYear()} Manoj Barmase. Architected with Purpose.</p>
      </div>
    </section>
  );
}                                                    