"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { type GLTF } from "three-stdlib";

interface SceneProps {
  scrollY: number;
}

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

function Model({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/scene.gltf") as GLTFResult;

  useFrame(() => {
    if (!meshRef.current) return;
    const rotationSpeed = 0.0015;
    // meshRef.current.rotation.x = scrollY * rotationSpeed;
    meshRef.current.rotation.y = scrollY * rotationSpeed;
  });

  return (
    <Center>
      <primitive
        ref={meshRef}
        object={scene}
        scale={1.5}
        position={[0, 0, 0]}
      />
    </Center>
  );
}

// Preload the model
useGLTF.preload("/scene.gltf");

export default function Scene({ scrollY }: SceneProps) {
  return (
    <div className="relative h-screen w-full">
      <Canvas
        camera={{ position: [50, 0, 0], fov: 45 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={2.1} />
        <pointLight position={[50, 10, 0]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Model scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
