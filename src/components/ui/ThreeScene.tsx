// // src/components/ui/ThreeScene.tsx
"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleCloud({ count = 1000 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Memoize geometry and COLORS for maximum performance
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorObj = new THREE.Color();
    
    // Premium Industry Standard Palette (Pops on both Black and White)
    const palette = ['#8b5cf6', '#ec4899', '#06b6d4', '#6366f1']; 

    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const rand = Math.pow(Math.random(), 1/3) * 1.8;
      
      pos[i * 3] = rand * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = rand * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = rand * Math.cos(theta);

      // Assign random color from palette to each particle
      colorObj.set(palette[Math.floor(Math.random() * palette.length)]);
      col[i * 3] = colorObj.r;
      col[i * 3 + 1] = colorObj.g;
      col[i * 3 + 2] = colorObj.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state, delta) => {
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
          vertexColors={true} /* Tells WebGL to use our custom color array */
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function ThreeScene() {
  return (
    // Increased opacity for Light Mode visibility
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-40 transition-opacity duration-700">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
          <ParticleCloud />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
      </Canvas>
    </div>
  );
}



// "use client";
// import React, { useRef, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Float, OrbitControls, Points, PointMaterial } from '@react-three/drei';
// import * as THREE from 'three';

// function ParticleCloud({ count = 800 }) {
//   const pointsRef = useRef<THREE.Points>(null);

//   // Memoize geometry calculation for maximum performance
//   const positions = useMemo(() => {
//     const pos = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const theta = THREE.MathUtils.randFloatSpread(360);
//       const phi = THREE.MathUtils.randFloatSpread(360);
//       const rand = Math.pow(Math.random(), 1/3) * 1.5;
//       pos[i * 3] = rand * Math.sin(theta) * Math.cos(phi);
//       pos[i * 3 + 1] = rand * Math.sin(theta) * Math.sin(phi);
//       pos[i * 3 + 2] = rand * Math.cos(theta);
//     }
//     return pos;
//   }, [count]);

//   // Subtle rotation animation based on frames (60fps)
//   useFrame((state, delta) => {
//     if (pointsRef.current) {
//       pointsRef.current.rotation.x += delta / 10;
//       pointsRef.current.rotation.y += delta / 15;
//     }
//   });

//   return (
//     <group position={[1.5, 0, 0]} scale={1.8}> {/* Positioned to the right of Hero text */}
//        <Points ref={pointsRef} positions={positions} stride={3}>
//         <PointMaterial
//           transparent
//           color="#ffffff" /* Changed from "currentColor" */
//           size={0.015}
//           sizeAttenuation={true}
//           depthWrite={false}
//           blending={THREE.AdditiveBlending}
//         />
//       </Points>
//       {/* <Points ref={pointsRef} positions={positions} stride={3}>
//         <PointMaterial
//           transparent
//           color="currentColor" // Inherits Tailwind's text-foreground color
//           size={0.015}
//           sizeAttenuation={true}
//           depthWrite={false}
//           blending={THREE.AdditiveBlending}
//         />
//       </Points> */}
//     </group>
//   );
// }

// export default function ThreeScene() {
//   return (
//     <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20 text-foreground transition-opacity">
//       <Canvas
//         camera={{ position: [0, 0, 4.5], fov: 60 }}
//         gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
//         dpr={[1, 2]} // Performance: dpr limitation
//       >
//         <ambientLight intensity={0.1} />
//         {/* Adds natural subtle floating to the scene */}
//         <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
//           <ParticleCloud />
//         </Float>
//         {/* User interaction: scene reacts to mouse movement */}
//         <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
//       </Canvas>
//     </div>
//   );
// }