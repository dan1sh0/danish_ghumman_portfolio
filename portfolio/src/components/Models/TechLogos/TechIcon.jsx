import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Float } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'
// in this we will use the 3d models for the icons 
// get the glb files for each icon 
// add lighting 
// apply environement reflections 
// wrap the model in floating animation 
// disable zoom using orbit controls 

const TechIcon = ({ model }) => {

    const scene = useGLTF(model.modelPath);

    // way to change color of the model to fit the background better 
    useEffect(() => {
        if (model.name === 'Three.js') {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 'white'

                    });
                }
            });
        }
    }, [scene]);


    return (
        // canvas is the main container for the 3d model 
        // ambient light is the light that is always on 
        // environment preset is the environment that is applied to the model 
        // float is the floating animation that is applied to the model 
        // group is the container for the model 
        // primitive is the model that is applied to the group 

        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight
                position={[10, 15, 10]}
                angle={0.3}
                penumbra={1}
                intensity={2}
            />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={2}>
                {/* scale is the size of the model */}
                {/* rotation is the rotation of the model */}
                {/* these can be changed individually for each icon in index.js */}
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon