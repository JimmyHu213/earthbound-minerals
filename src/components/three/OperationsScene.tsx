"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Octahedron } from "@react-three/drei";
import type { Group } from "three";

const POSITIONS: [number, number, number][] = [
  [0, 0, 0],
  [1.0, 0.3, 0.2],
  [-0.8, -0.3, 0.4],
];

export default function OperationsScene() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      {POSITIONS.map((pos, i) => (
        <Octahedron key={i} args={[0.45, 0]} position={pos}>
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
            opacity={0.5 + i * 0.1}
          />
        </Octahedron>
      ))}
    </group>
  );
}
