// src/components/cursor/Cursor.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorRef.current!.style.top = `${e.clientY}px`;
      cursorRef.current!.style.left = `${e.clientX}px`;
    };

    window.addEventListener("mousemove", mouseMove);

    // Dynamic variant handling
    const magneticElements = document.querySelectorAll('.magnetic');
    const linkElements = document.querySelectorAll('a, button, .interactive');

    const handleLinkHover = () => setVariant("text");
    const handleMouseLeave = () => setVariant("default");

    magneticElements.forEach(el => {
      el.addEventListener('mouseenter', () => setVariant("text"));
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "normal" as any, // Not interacting yet
    },
    text: {
      height: 64,
      width: 64,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference" as any, // Core inverted effect
      x: "-50%",
      y: "-50%",
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