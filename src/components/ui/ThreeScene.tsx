"use client";
import React, { useRef, useMemo, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Deterministic pseudo-random generator ensuring pure rendering without React 19 purity violations
function createSeededRandom(seed = 42) {
  let s = seed;
  return function () {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function ParticleCloud({
  count = 1000,
  isPaused = false,
}: {
  count?: number;
  isPaused?: boolean;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  // Memoize geometry and colors using deterministic generation
  const { positions, colors } = useMemo(() => {
    const random = createSeededRandom(1337);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorObj = new THREE.Color();

    // Premium Industry Standard Palette
    const palette = ["#8b5cf6", "#ec4899", "#06b6d4", "#6366f1"];

    for (let i = 0; i < count; i++) {
      // Deterministic spherical distribution
      const theta = (random() - 0.5) * 360;
      const phi = (random() - 0.5) * 360;
      const rand = Math.pow(random(), 1 / 3) * 1.8;

      pos[i * 3] = rand * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = rand * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = rand * Math.cos(theta);

      // Deterministic palette selection
      const colorIndex = Math.floor(random() * palette.length);
      colorObj.set(palette[colorIndex]);
      col[i * 3] = colorObj.r;
      col[i * 3 + 1] = colorObj.g;
      col[i * 3 + 2] = colorObj.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    // Battery & performance optimization: halt calculation when paused
    if (isPaused) return;

    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta / 10;
      pointsRef.current.rotation.y += delta / 15;
    }
  });

  return (
    <group position={[1.5, 0, 0]} scale={1.8}>
      <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
        <PointMaterial
          transparent
          vertexColors={true}
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function subscribeRenderState(callback: () => void) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }
  document.addEventListener("visibilitychange", callback);
  const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionMedia.addEventListener("change", callback);

  return () => {
    document.removeEventListener("visibilitychange", callback);
    motionMedia.removeEventListener("change", callback);
  };
}

function getRenderSnapshot(): boolean {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return true;
  }
  const isHidden = document.visibilityState === "hidden";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return isHidden || prefersReducedMotion;
}

function getServerRenderSnapshot(): boolean {
  return true;
}

const emptySubscribe = () => () => {};

export default function ThreeScene() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isPaused = useSyncExternalStore(
    subscribeRenderState,
    getRenderSnapshot,
    getServerRenderSnapshot
  );

  if (!isMounted) {
    return <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true" />;
  }

  const frameloop = isPaused ? "demand" : "always";

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-80 dark:opacity-40 transition-opacity duration-700"
      aria-hidden="true"
    >
      <Canvas
        frameloop={frameloop}
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        gl={{
          antialias: true,
          toneMapping: THREE.NoToneMapping,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        <Float
          speed={isPaused ? 0 : 1.5}
          rotationIntensity={isPaused ? 0 : 0.5}
          floatIntensity={isPaused ? 0 : 0.8}
        >
          <ParticleCloud isPaused={isPaused} />
        </Float>
      </Canvas>
    </div>
  );
}
