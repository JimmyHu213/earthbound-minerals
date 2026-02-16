"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";

function createChevronShape() {
  const shape = new THREE.Shape();
  const w = 0.6;
  const h = 0.8;
  const t = 0.15;

  // Outer chevron <
  shape.moveTo(w, h);
  shape.lineTo(-w + t, 0);
  shape.lineTo(w, -h);
  // Inner edge
  shape.lineTo(w - t * 1.5, -h + t);
  shape.lineTo(-w + t * 2.5, 0);
  shape.lineTo(w - t * 1.5, h - t);
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
  const chevronShape = useMemo(() => createChevronShape(), []);

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
          position={[i * 0.2 - 0.2, 0, i * 0.25 - 0.25]}
          rotation={[0, 0, 0]}
        >
          <extrudeGeometry args={[chevronShape, EXTRUDE_SETTINGS]} />
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
        </mesh>
      ))}
    </group>
  );
}
