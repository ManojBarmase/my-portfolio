// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

// Existing CN helper
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Industry Standard Magnetic Utility using GSAP
export function magneticHelper(element: HTMLElement) {
  element.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    const { width, height, left, top } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (x - centerX) / 3; // Force of the magnet
    const moveY = (y - centerY) / 3;

    gsap.to(element, { x: moveX, y: moveY, ease: 'power3.out', duration: 0.3 });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { x: 0, y: 0, ease: 'elastic.out(1, 0.3)', duration: 0.6 });
  });
}


// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }