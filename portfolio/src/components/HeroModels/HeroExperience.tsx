import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useProgress, Html } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useMediaQuery } from 'react-responsive'
//import { Room } from './Room.jsx'
import HeroLights from './HeroLights.jsx'
import Particles from './Particles.jsx'

import { Gaming_Room } from './Gaming_room.jsx'

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(0)} % loaded</Html>
}

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    
    return (
        <Canvas camera={{ position: [200, 40, 40], fov: 55 }}>
          
            
           

             {/* Bloom effect to make the lights glow */}
             <EffectComposer>
                <Bloom 
                  luminanceThreshold={0.1} // Lower threshold to catch more light
                  luminanceSmoothing={0.9} 
                  intensity={0.8} // A bit more intense bloom
                  mipmapBlur 
                />
            </EffectComposer>

            <OrbitControls
                enableZoom={true}
                enablePan={!isTablet}
                
                maxDistance={35}
                minDistance={8}
                minPolarAngle={Math.PI / 5} // max angle for vertical rotation
                maxPolarAngle={Math.PI / 1.8} // min angle for vertical rotation
                
            />
            <Suspense fallback={<Loader />}>
            <HeroLights />
            <Particles count={150} /> 
            <group
                  scale={isMobile ? 0.35 : 0.45}
                  position={[0, -4, 0]}
                  rotation={[0, -Math.PI / 4, 0]}
              >
                {/* Add a subtle environment light for realism */}
                <ambientLight intensity={0.15} />
                
                    <Gaming_Room />
                    
                
              </group>
              </Suspense>
            
        </Canvas>
    )
}

export default HeroExperience