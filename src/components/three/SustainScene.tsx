"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import type { Group } from "three";

export default function SustainScene() {
  const ringRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5;
      ringRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group>
      <Sphere args={[0.6, 32, 32]}>
        <meshStandardMaterial
          color="#D4A843"
          metalness={0.5}
          roughness={0.4}
        />
      </Sphere>
      <group ref={ringRef}>
        <Torus args={[1.0, 0.05, 16, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial
            color="#D4A843"
            metalness={0.7}
            roughness={0.2}
          />
        </Torus>
      </group>
    </group>
  );
}
