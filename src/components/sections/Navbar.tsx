"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle"; // Import the toggle

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-border-subtle"
    >
      <Link href="/" className="text-foreground font-semibold tracking-tighter text-lg">
        MB<span className="text-primary-muted">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-muted">
        <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
        <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
        <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
        <Link href="#education" className="hover:text-foreground transition-colors">Education</Link>
        <Link href="#contact" className="hover:text-foreground transition-colors">Contacts</Link>
      </div>

      {/* Button Grouping */}
      <div className="flex items-center gap-4">
        <ThemeToggle /> {/* Inject Toggle Here */}
        {/* <Link 
          href="mailto:manojbarmase9@gmail.com"
          className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-background bg-foreground rounded-full hover:scale-105 transition-transform duration-300"
        >
          Say Hello
        </Link> */}
        {/* THE CTA BUTTON */}
          <a 
            href="#contact" 
            className="magnetic-interactive hidden md:flex items-center justify-center px-6 py-2.5 bg-foreground text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
          >
            Say Hello
          </a>
      </div>
    </motion.nav>
  );
}