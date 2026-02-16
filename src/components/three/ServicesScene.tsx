"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export default function ServicesScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.7, 0.25, 80, 16]} />
      <meshStandardMaterial
        color="#D4A843"
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}
