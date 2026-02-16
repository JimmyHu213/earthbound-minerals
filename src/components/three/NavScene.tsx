"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
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
      camera={{ position: [0, 0, 3.5], fov: 45 }}
      style={{ height: "120px" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 2]} intensity={1} />
      <Suspense fallback={null}>
        <SceneComponent />
      </Suspense>
    </Canvas>
  );
}
