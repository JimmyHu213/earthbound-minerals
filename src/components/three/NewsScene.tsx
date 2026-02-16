"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Dodecahedron } from "@react-three/drei";
import type { Mesh } from "three";

export default function NewsScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <Dodecahedron ref={meshRef} args={[0.9, 0]}>
      <meshStandardMaterial
        color="#D4A843"
        wireframe
        metalness={0.6}
        roughness={0.3}
      />
    </Dodecahedron>
  );
}
