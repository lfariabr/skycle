'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import PlaceholderModel from './PlaceholderModel';

interface ModelViewerProps {
  version: string;
}

export default function ModelViewer({ version }: ModelViewerProps) {
  return (
    <div className="w-full h-[500px] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <spotLight position={[-10, 10, -5]} intensity={0.3} />
        
        <Suspense fallback={null}>
          <PlaceholderModel version={version} />
          <Environment preset="sunset" />
        </Suspense>
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={20}
        />
        
        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
      </Canvas>
    </div>
  );
}
