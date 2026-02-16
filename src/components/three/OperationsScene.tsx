"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Octahedron } from "@react-three/drei";
import type { Group } from "three";

const POSITIONS: [number, number, number][] = [
  [0, 0, 0],
  [1.2, 0.3, 0],
  [-1.0, -0.3, 0.5],
];

export default function OperationsScene() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {POSITIONS.map((pos, i) => (
        <Octahedron key={i} args={[0.4, 0]} position={pos}>
          <meshStandardMaterial
            color="#D4A843"
            metalness={0.6}
            roughness={0.3}
            wireframe={i === 0}
          />
        </Octahedron>
      ))}
    </group>
  );
}
