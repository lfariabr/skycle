'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface PlaceholderModelProps {
  version: string;
}

export default function PlaceholderModel({ version }: PlaceholderModelProps) {
  const meshRef = useRef<Mesh>(null);
  
  // Rotate the model slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Different placeholder geometry for each version
  const getModelGeometry = () => {
    switch (version) {
      case 'v1':
        return (
          <group ref={meshRef as any}>
            {/* V1: Basic skateboard-like shape */}
            <mesh position={[0, 0, 0]} castShadow>
              <boxGeometry args={[2, 0.2, 0.6]} />
              <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[-0.7, -0.3, 0.2]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[-0.7, -0.3, -0.2]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[0.7, -0.3, 0.2]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[0.7, -0.3, -0.2]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
          </group>
        );
      case 'v2':
        return (
          <group ref={meshRef as any}>
            {/* V2: Enhanced with handlebars */}
            <mesh position={[0, 0, 0]} castShadow>
              <boxGeometry args={[2.2, 0.25, 0.7]} />
              <meshStandardMaterial color="#8b5cf6" metalness={0.4} roughness={0.3} />
            </mesh>
            <mesh position={[-0.8, -0.35, 0.25]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.18, 0.18, 0.12, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[-0.8, -0.35, -0.25]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.18, 0.18, 0.12, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[0.8, -0.35, 0.25]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.18, 0.18, 0.12, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[0.8, -0.35, -0.25]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.18, 0.18, 0.12, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            {/* Handlebar stem */}
            <mesh position={[0.9, 0.5, 0]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
              <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.2} />
            </mesh>
            {/* Handlebar */}
            <mesh position={[0.9, 0.9, 0]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
              <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.2} />
            </mesh>
          </group>
        );
      case 'v3':
        return (
          <group ref={meshRef as any}>
            {/* V3: Advanced with seat and larger wheels */}
            <mesh position={[0, 0, 0]} castShadow>
              <boxGeometry args={[2.5, 0.3, 0.75]} />
              <meshStandardMaterial color="#10b981" metalness={0.5} roughness={0.2} />
            </mesh>
            <mesh position={[-0.9, -0.4, 0.3]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.22, 0.22, 0.15, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[-0.9, -0.4, -0.3]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.22, 0.22, 0.15, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[0.9, -0.4, 0.3]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.22, 0.22, 0.15, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            <mesh position={[0.9, -0.4, -0.3]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.22, 0.22, 0.15, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
            {/* Handlebar stem */}
            <mesh position={[1.0, 0.6, 0]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 1.0, 8]} />
              <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.2} />
            </mesh>
            {/* Handlebar */}
            <mesh position={[1.0, 1.1, 0]} castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.04, 0.04, 0.9, 8]} />
              <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.2} />
            </mesh>
            {/* Seat post */}
            <mesh position={[-0.6, 0.4, 0]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.6, 8]} />
              <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.2} />
            </mesh>
            {/* Seat */}
            <mesh position={[-0.6, 0.7, 0]} castShadow>
              <boxGeometry args={[0.3, 0.1, 0.4]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
          </group>
        );
      default:
        return null;
    }
  };

  return <>{getModelGeometry()}</>;
}
