import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Simple animated mesh component
const AnimatedMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#62e0ff" />
    </mesh>
  );
};

// Floating spheres component
const FloatingSpheres = () => {
  const spheresRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (spheresRef.current) {
      spheresRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5;
        child.rotation.y += 0.02;
      });
    }
  });

  return (
    <group ref={spheresRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i * 2) * 3, 0, Math.cos(i * 2) * 3]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#fd5c79" />
        </mesh>
      ))}
    </group>
  );
};

const ContactExperience = () => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'linear-gradient(135deg, #0e0e10 0%, #1c1c21 100%)' }}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#62e0ff" />
        <pointLight position={[10, -10, -5]} intensity={0.5} color="#fd5c79" />

        {/* Meshes */}
        <AnimatedMesh />
        <FloatingSpheres />

        {/* Environment and Controls */}
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ContactExperience; 