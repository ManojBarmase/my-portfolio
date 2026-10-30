"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        document.body.style.paddingRight = "";
      };
    }
  }, [isOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Auto close drawer if viewport resizes to md (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  const drawerVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.25,
        ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        staggerChildren: 0.06,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -16 },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/60 border-b border-border-subtle"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-2.5 text-foreground font-semibold tracking-tighter text-lg focus:outline-none"
          aria-label="Manoj Barmase - Full Stack Developer"
        >
          <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] shadow-sm group-hover:scale-105 group-hover:border-violet-500/40 transition-all duration-300">
            <Image
              src="/icon.png"
              alt="Manoj Barmase Logo"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 32px, 36px"
            />
          </div>
          <span className="font-bold tracking-tight text-base md:text-lg">
            Manoj<span className="hidden sm:inline"> Barmase</span>
            <span className="text-violet-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-muted">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Controls & CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="magnetic-interactive hidden md:flex items-center justify-center px-6 py-2.5 bg-foreground text-background font-bold text-sm rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
          >
            Say Hello
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.05] border border-border-subtle text-foreground hover:bg-black/[0.05] dark:hover:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close-icon"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} className="text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu-icon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} className="text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Accessible Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            data-lenis-prevent
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-2xl flex flex-col justify-between pt-24 px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pt-2">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary-muted mb-2 px-1">
                Navigation
              </p>

              <div className="flex flex-col divide-y divide-border-subtle/50">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between py-4 text-2xl font-semibold tracking-tight text-foreground/90 hover:text-foreground active:text-foreground transition-colors"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-mono text-primary-muted group-hover:translate-x-1 group-active:translate-x-1 transition-transform">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Drawer Footer CTA & Meta */}
            <motion.div variants={itemVariants} className="pt-8 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={closeMenu}
                className="magnetic-interactive flex items-center justify-center gap-2 w-full py-3.5 bg-foreground text-background font-bold text-base rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.08)] active:scale-95 transition-all"
              >
                <span>Say Hello</span>
                <ArrowUpRight size={18} />
              </a>

              <div className="flex items-center justify-between text-xs text-primary-muted font-mono pt-2 border-t border-border-subtle/50">
                <span>Manoj Barmase</span>
                <a
                  href="mailto:manojbarmase9@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  manojbarmase9@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
