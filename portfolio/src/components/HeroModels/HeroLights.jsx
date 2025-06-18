import { ReactThreeFiber } from "@react-three/fiber";

const HeroLights = () => {
    return (
        <>
            {/* Ambient light for base brightness */}
            <ambientLight intensity={0.4} />

            {/* Vibrant colored spotlights */}
            <spotLight
                position={[10, 20, 10]}
                angle={0.5}
                penumbra={1}
                intensity={2}
                color="#ff4ecd"
                castShadow
            />
            <spotLight
                position={[-10, 15, 10]}
                angle={0.6}
                penumbra={1}
                intensity={1.5}
                color="#00eaff"
                castShadow
            />
            {/* Rim light for glow effect */}
            <pointLight
                position={[0, 10, -10]}
                intensity={1.2}
                color="#fff176"
            />

            {/* Subtle fill light */}
            <pointLight
                position={[0, 2, 10]}
                intensity={0.7}
                color="#ffffff"
            />


        </>
    )
}

export default HeroLights;