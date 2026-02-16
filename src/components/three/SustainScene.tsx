"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";

export default function SustainScene() {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Group>(null);

  const arcAngle = Math.PI * 1.6;
  const R = 1.0;

  const arrowProps = useMemo(() => {
    const endAngle = arcAngle;
    const pos: [number, number, number] = [
      R * Math.cos(endAngle),
      R * Math.sin(endAngle),
      0,
    ];
    const tx = -Math.sin(endAngle);
    const ty = Math.cos(endAngle);
    const rotZ = -Math.atan2(tx, ty);
    return { pos, rotZ };
  }, [arcAngle]);

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
          color="#D4A843"
          transmission={0.85}
          roughness={0.15}
          thickness={0.8}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.1}
          transparent
          opacity={0.55}
        />
      </Sphere>
      <group ref={ringRef}>
        <group rotation={[Math.PI / 3, 0, 0]}>
          {/* Partial torus arc */}
          <mesh>
            <torusGeometry args={[R, 0.06, 16, 64, arcAngle]} />
            <meshPhysicalMaterial
              color="#D4A843"
              transmission={0.82}
              roughness={0.1}
              thickness={0.3}
              ior={1.5}
              clearcoat={1}
              clearcoatRoughness={0.08}
              metalness={0.12}
              transparent
              opacity={0.5}
            />
          </mesh>
          {/* Arrowhead at end of arc */}
          <mesh position={arrowProps.pos} rotation={[0, 0, arrowProps.rotZ]}>
            <coneGeometry args={[0.13, 0.28, 8]} />
            <meshPhysicalMaterial
              color="#D4A843"
              transmission={0.78}
              roughness={0.1}
              thickness={0.4}
              ior={1.5}
              clearcoat={1}
              clearcoatRoughness={0.08}
              metalness={0.15}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}
