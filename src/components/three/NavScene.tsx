"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import AboutScene from "./AboutScene";
import ServicesScene from "./ServicesScene";
import OperationsScene from "./OperationsScene";
import SustainScene from "./SustainScene";
import NewsScene from "./NewsScene";

const SCENES: Record<string, React.ComponentType> = {
  About: AboutScene,
  Services: ServicesScene,
  Operations: OperationsScene,
  Sustainability: SustainScene,
  News: NewsScene,
};

export default function NavScene({ navLabel }: { navLabel: string }) {
  const SceneComponent = SCENES[navLabel];
  if (!SceneComponent) return null;

  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 4], fov: 40 }}
      style={{ height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-3, -1, 2]} intensity={0.3} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <SceneComponent />
      </Suspense>
    </Canvas>
  );
}
