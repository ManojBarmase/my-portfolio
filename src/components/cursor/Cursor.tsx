"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, type Variants } from "framer-motion";

function subscribePointerFine(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(pointer: fine)");
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  } else {
    mediaQuery.addListener(callback);
    return () => mediaQuery.removeListener(callback);
  }
}

function getPointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerPointerSnapshot() {
  return false;
}

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<"default" | "text">("default");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Synchronously subscribe to pointer: fine capability
  const hasFinePointer = useSyncExternalStore(
    subscribePointerFine,
    getPointerSnapshot,
    getServerPointerSnapshot
  );

  useEffect(() => {
    if (!hasFinePointer) return;

    const mouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(
          ".magnetic, .magnetic-interactive, a, button, .interactive, input, textarea, [role='button']"
        )
      ) {
        setVariant("text");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const related = e.relatedTarget as HTMLElement | null;
      const selector = ".magnetic, .magnetic-interactive, a, button, .interactive, input, textarea, [role='button']";
      if (target?.closest(selector) && !related?.closest(selector)) {
        setVariant("default");
      }
    };

    const handleWindowLeave = () => setIsVisible(false);
    const handleWindowEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleWindowLeave);
    document.documentElement.addEventListener("mouseenter", handleWindowEnter);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleWindowLeave);
      document.documentElement.removeEventListener("mouseenter", handleWindowEnter);
    };
  }, [hasFinePointer]);

  // If device is touch or coarse pointer (e.g. mobile/tablet), render null
  if (!hasFinePointer) {
    return null;
  }

  const variants: Variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "normal",
      x: "-50%",
      y: "-50%",
      opacity: isVisible ? 1 : 0,
    },
    text: {
      height: 64,
      width: 64,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      x: "-50%",
      y: "-50%",
      opacity: isVisible ? 1 : 0,
    },
  };

  return (
    <motion.div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] rounded-full"
      variants={variants}
      animate={variant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}
