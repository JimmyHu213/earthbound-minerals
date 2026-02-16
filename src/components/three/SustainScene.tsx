"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import type { Group } from "three";

export default function SustainScene() {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[0.6, 32, 32]}>
        <meshPhysicalMaterial
          color="#c8d0dc"
          transmission={0.92}
          roughness={0.15}
          thickness={0.8}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0}
          transparent
          opacity={0.6}
        />
      </Sphere>
      <group ref={ringRef}>
        <Torus args={[1.0, 0.06, 16, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshPhysicalMaterial
            color="#c8d0dc"
            transmission={0.9}
            roughness={0.1}
            thickness={0.3}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0}
            transparent
            opacity={0.5}
          />
        </Torus>
      </group>
    </group>
  );
}
