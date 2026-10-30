"use client";
import { useEffect, useRef, useState, useActionState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  Mail, Phone, Send, Sparkles, CheckCircle2, AlertCircle 
} from "lucide-react";
import { magneticHelper } from "@/lib/utils";
import { submitContact } from "@/app/actions/contact";
import { initialContactState } from "@/types/contact";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom Github Icon matching Lucide aesthetic
const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.05 5.05 0 0 0 19 4.78a4.6 4.6 0 0 0-.1-3.2s-1.3-.4-4.2 1.6a14.2 14.2 0 0 0-7.8 0c-2.9-2-4.2-1.6-4.2-1.6a4.6 4.6 0 0 0-.1 3.2A5.05 5.05 0 0 0 3 7.82c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 8.5 18v4"></path>
  </svg>
);

// Custom Linkedin Icon matching Lucide aesthetic
const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitContact, initialContactState);
  const [dismissedState, setDismissedState] = useState<typeof state | null>(null);

  const showSuccess = state.success && state !== dismissedState;

  useEffect(() => {
    if (state.success && state !== dismissedState) {
      formRef.current?.reset();
      const timer = setTimeout(() => {
        setDismissedState(state);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state, dismissedState]);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.contact-bento');
    
    cards.forEach((card) => {
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

    const cleanups: (() => void)[] = [];
    if (sectionRef.current) {
      const magneticElements = sectionRef.current.querySelectorAll<HTMLElement>('.magnetic-interactive');
      magneticElements.forEach((el) => {
        cleanups.push(magneticHelper(el));
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, { scope: sectionRef });

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 border-t border-black/5 dark:border-white/5 overflow-hidden perspective-[1000px]"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-rose-500/20 dark:bg-rose-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal" />

      <div className="max-w-6xl w-full mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-orange-600 dark:text-orange-400 font-semibold mb-3">
            05 / Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Initiate Protocol.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LEFT COLUMN: Contact Details */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Email Card */}
            <a 
              href="mailto:manojbarmase9@gmail.com"
              className="contact-bento magnetic-card p-5 sm:p-8 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex flex-col justify-center backdrop-blur-2xl group hover:border-orange-500/40 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center border border-orange-500/20 mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-primary-muted uppercase tracking-widest mb-1">Email Protocol</h4>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground break-all">manojbarmase9@gmail.com</p>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+918319548377"
              className="contact-bento magnetic-card p-5 sm:p-8 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex flex-col justify-center backdrop-blur-2xl group hover:border-rose-500/40 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20 mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-primary-muted uppercase tracking-widest mb-1">Direct Line</h4>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">+91 83195 48377</p>
            </a>

            {/* Location & Availability Card */}
            <div className="contact-bento p-4 sm:p-6 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex items-center gap-4 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-primary-muted uppercase tracking-widest mb-0.5">Location & Work Status</h4>
                <p className="text-sm sm:text-base font-semibold text-foreground">Pune, India • Available for Remote & Onsite</p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="contact-bento flex gap-3 sm:gap-6">
              <a 
                href="https://linkedin.com/in/manoj-barmase" 
                target="_blank" 
                rel="noopener noreferrer"
                className="magnetic-interactive flex-1 p-4 sm:p-6 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-2xl hover:border-blue-500/40 hover:bg-blue-500/5 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none text-foreground"
              >
                <LinkedinIcon size={20} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-sm sm:text-base font-bold">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/manojbarmase" 
                target="_blank" 
                rel="noopener noreferrer"
                className="magnetic-interactive flex-1 p-4 sm:p-6 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-2xl hover:border-foreground/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none text-foreground"
              >
                <GithubIcon size={20} className="shrink-0" />
                <span className="text-sm sm:text-base font-bold">GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="contact-bento md:col-span-7 relative p-5 sm:p-8 md:p-10 bg-white/80 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-3xl sm:rounded-[2.5rem] overflow-hidden backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-orange-500" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Send a message</h3>
            </div>

            <form ref={formRef} action={formAction} className="flex flex-col gap-5 flex-1">
              {/* Honeypot field for invisible bot protection */}
              <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="botcheck">Do not fill this field if human</label>
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  id="botcheck" 
                  tabIndex={-1} 
                  autoComplete="off" 
                />
              </div>

              {/* Accessible Status Feedback */}
              {(showSuccess || (!state.success && state.message)) && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium transition-all ${
                    showSuccess
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : "bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {showSuccess ? (
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  ) : (
                    <AlertCircle size={18} className="shrink-0 text-rose-500" />
                  )}
                  <span>
                    {showSuccess
                      ? state.message || "Message dispatched successfully. Protocol initiated."
                      : state.message}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required
                    disabled={isPending}
                    aria-invalid={!!state.errors?.name}
                    aria-describedby={state.errors?.name ? "name-error" : undefined}
                    className={`w-full px-5 py-4 bg-white dark:bg-black/20 border rounded-xl outline-none transition-all text-foreground placeholder:text-primary-muted/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                      state.errors?.name 
                        ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500" 
                        : "border-black/10 dark:border-white/10 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50"
                    }`}
                  />
                  {state.errors?.name && (
                    <p id="name-error" role="alert" className="text-xs text-rose-500 dark:text-rose-400 font-medium ml-1">
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required
                    disabled={isPending}
                    aria-invalid={!!state.errors?.email}
                    aria-describedby={state.errors?.email ? "email-error" : undefined}
                    className={`w-full px-5 py-4 bg-white dark:bg-black/20 border rounded-xl outline-none transition-all text-foreground placeholder:text-primary-muted/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                      state.errors?.email 
                        ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500" 
                        : "border-black/10 dark:border-white/10 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50"
                    }`}
                  />
                  {state.errors?.email && (
                    <p id="email-error" role="alert" className="text-xs text-rose-500 dark:text-rose-400 font-medium ml-1">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="message" className="text-xs font-bold font-mono text-primary-muted uppercase ml-1">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell me about your project or opportunity..." 
                  required
                  disabled={isPending}
                  aria-invalid={!!state.errors?.message}
                  aria-describedby={state.errors?.message ? "message-error" : undefined}
                  className={`w-full h-full min-h-[160px] px-5 py-4 bg-white dark:bg-black/20 border rounded-xl outline-none transition-all text-foreground placeholder:text-primary-muted/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                    state.errors?.message 
                      ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500" 
                      : "border-black/10 dark:border-white/10 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50"
                  }`}
                />
                {state.errors?.message && (
                  <p id="message-error" role="alert" className="text-xs text-rose-500 dark:text-rose-400 font-medium ml-1">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>

              <button 
                type="submit"
                disabled={isPending}
                className={`magnetic-interactive group relative w-full md:w-auto self-end mt-2 flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-xl transition-all overflow-hidden ${
                  showSuccess 
                    ? "bg-emerald-500 text-white" 
                    : (!state.success && state.message)
                    ? "bg-rose-500 text-white"
                    : "bg-foreground text-background hover:scale-[1.02] active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isPending && "Sending Protocol..."}
                  {!isPending && showSuccess && (
                    <>Message Sent <CheckCircle2 size={18} /></>
                  )}
                  {!isPending && !showSuccess && (!state.success && state.message) && (
                    <>Failed to Send <AlertCircle size={18} /></>
                  )}
                  {!isPending && !showSuccess && !(!state.success && state.message) && (
                    <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </span>
                {!isPending && !showSuccess && !state.message && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full text-center pt-12 sm:pt-16 pb-4 sm:pb-6 px-4 z-10">
        <p className="text-xs sm:text-sm font-mono text-primary-muted/60 font-medium tracking-tight sm:tracking-normal flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>© {new Date().getFullYear()} Manoj Barmase.</span>
          <span className="hidden sm:inline opacity-40">•</span>
          <span className="text-primary-muted/50">Architected with Purpose.</span>
        </p>
      </div>
    </section>
  );
}
