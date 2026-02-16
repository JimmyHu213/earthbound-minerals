"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";

function createTriangleShape() {
  const shape = new THREE.Shape();
  const size = 0.85;
  const h = size * Math.sin(Math.PI / 3);
  shape.moveTo(0, h * 0.65);
  shape.lineTo(-size * 0.5, -h * 0.35);
  shape.lineTo(size * 0.5, -h * 0.35);
  shape.closePath();
  return shape;
}

const EXTRUDE_SETTINGS: THREE.ExtrudeGeometryOptions = {
  depth: 0.04,
  bevelEnabled: true,
  bevelThickness: 0.02,
  bevelSize: 0.02,
  bevelSegments: 3,
};

export default function ServicesScene() {
  const groupRef = useRef<Group>(null);
  const triangleShape = useMemo(() => createTriangleShape(), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[i * 0.15 - 0.15, i * 0.15 - 0.15, i * 0.3 - 0.3]}
          rotation={[0.1 * i, 0.05 * i, 0]}
        >
          <extrudeGeometry args={[triangleShape, EXTRUDE_SETTINGS]} />
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
            opacity={0.45 + i * 0.08}
          />
        </mesh>
      ))}
    </group>
  );
}
