"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type { Group } from "three";

export default function AboutScene() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => (
        <RoundedBox
          key={i}
          args={[1.4, 1.4, 0.05]}
          radius={0.15}
          smoothness={4}
          position={[i * 0.15 - 0.15, i * 0.15 - 0.15, i * 0.3 - 0.3]}
          rotation={[0.1 * i, 0.05 * i, 0]}
        >
          <meshPhysicalMaterial
            color="#D4A843"
            transmission={0.85}
            roughness={0.15}
            thickness={0.5}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.5 + i * 0.05}
          />
        </RoundedBox>
      ))}
    </group>
  );
}
