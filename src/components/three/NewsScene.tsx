"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export default function NewsScene() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0008) * 0.08;
    }
  });

  const pageAngle = 0.22;

  return (
    <group ref={groupRef}>
      {/* Left pages */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={`l${i}`}
          position={[-0.48 + i * 0.02, 0, -i * 0.025]}
          rotation={[0, pageAngle + i * 0.03, 0]}
        >
          <boxGeometry args={[0.85, 1.15, 0.015]} />
          <meshPhysicalMaterial
            color="#D4A843"
            transmission={0.85}
            roughness={0.15}
            thickness={0.3}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.4 + i * 0.08}
          />
        </mesh>
      ))}
      {/* Right pages */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={`r${i}`}
          position={[0.48 - i * 0.02, 0, -i * 0.025]}
          rotation={[0, -pageAngle - i * 0.03, 0]}
        >
          <boxGeometry args={[0.85, 1.15, 0.015]} />
          <meshPhysicalMaterial
            color="#D4A843"
            transmission={0.85}
            roughness={0.15}
            thickness={0.3}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.4 + i * 0.08}
          />
        </mesh>
      ))}
      {/* Spine */}
      <mesh position={[0, 0, -0.04]}>
        <boxGeometry args={[0.06, 1.2, 0.1]} />
        <meshPhysicalMaterial
          color="#D4A843"
          transmission={0.78}
          roughness={0.12}
          thickness={0.5}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.08}
          metalness={0.15}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
