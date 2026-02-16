"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import type { Mesh } from "three";

export default function AboutScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial
        color="#D4A843"
        wireframe
        metalness={0.6}
        roughness={0.3}
      />
    </Icosahedron>
  );
}
