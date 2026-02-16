"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Mesh } from "three";

function createGearShape() {
  const shape = new THREE.Shape();
  const teeth = 8;
  const outerR = 0.85;
  const innerR = 0.62;
  const steps = teeth * 4;

  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const phase = i % 4;
    const r = phase === 1 || phase === 2 ? outerR : innerR;
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();

  const hole = new THREE.Path();
  hole.absarc(0, 0, 0.22, 0, Math.PI * 2, false);
  shape.holes.push(hole);

  return shape;
}

const EXTRUDE_SETTINGS: THREE.ExtrudeGeometryOptions = {
  depth: 0.12,
  bevelEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.03,
  bevelSegments: 2,
};

export default function OperationsScene() {
  const meshRef = useRef<Mesh>(null);
  const gearShape = useMemo(() => createGearShape(), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z -= delta * 0.5;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.35;
    }
  });

  return (
    <mesh ref={meshRef}>
      <extrudeGeometry args={[gearShape, EXTRUDE_SETTINGS]} />
      <meshPhysicalMaterial
        color="#D4A843"
        transmission={0.82}
        roughness={0.12}
        thickness={0.6}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0.08}
        metalness={0.12}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}
