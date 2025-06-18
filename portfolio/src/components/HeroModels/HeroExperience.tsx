import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useProgress, Html } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room.jsx'
import { OptimizedRoom } from './Optimized-room.jsx'
import { Pokemon_room } from './Pokemon_room.jsx'
import HeroLights from './HeroLights.jsx'
import Particles from './Particles.jsx'

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(0)} % loaded</Html>
}

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    
    return (
        <Canvas camera={{ position: [0, 5, 15], fov: 45 }}>
          
            <HeroLights />
            <Particles  count = {100}/>

             {/* Bloom effect for glow */}
             <EffectComposer>
                <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.2} />
            </EffectComposer>

            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                autoRotate={false}
                maxDistance={20}
                minDistance={2}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
                target={[0, 1, 0]}
            />

            <group
                  scale={isMobile? 0.7: 1}
                  position={[0, -2.5, 0]}
                  rotation={[0, -Math.PI/4, 0]}

              >
                <Suspense fallback={<Loader />}>
                <Pokemon_room />
                </Suspense>
              </group>
            
            
        </Canvas>
    )
}

export default HeroExperience