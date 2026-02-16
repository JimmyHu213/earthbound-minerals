"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Dodecahedron } from "@react-three/drei";
import type { Mesh } from "three";

export default function NewsScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Dodecahedron ref={meshRef} args={[1, 0]}>
      <meshPhysicalMaterial
        color="#c8d0dc"
        transmission={0.92}
        roughness={0.15}
        thickness={0.5}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0}
        transparent
        opacity={0.6}
      />
    </Dodecahedron>
  );
}
