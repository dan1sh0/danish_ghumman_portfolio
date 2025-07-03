import { RectAreaLight } from 'three';

const HeroLights = () => {
    return (
        <>
            {/* --- Main Monitor Glow --- */}
            {/* A strong but soft light simulating the screen's emission */}
            <rectAreaLight
                width={4}
                height={3}
                intensity={16}
                color={"#6ab1ff"} // A stronger, cool blue light
                position={[1, 1, -2]} // Positioned closer to the desk and monitor
                rotation={[0, 3.5, 0]}
            />

            {/* --- Under-Desk LED Strip (Purple) --- */}
            {/* Increased intensity and adjusted position for a more visible glow */}
            <pointLight
                intensity={2}
                color={"#9370db"} // Medium Purple
                position={[1, -1, -1]} // Lower and closer to the desk
                distance={16}
            />

            {/* --- Accent Room Light (Red/Orange) --- */}
            {/* A soft, warm light to fill the room from a corner */}
            <spotLight
                intensity={6}
                color={"#ff4500"}
                position={[-5, 6, 5]}
                angle={0.35}
                penumbra={1}
                distance={28}
            />

            {/* --- Blue Rim Light from the left --- */}
            <directionalLight
                intensity={0.7}
                color={"#3b82f6"}
                position={[-10, 5, 5]}
            />

            {/* --- Magenta Accent Light from the right --- */}
            <pointLight
                intensity={0.8}
                color={"#e040fb"}
                position={[8, 3, 8]}
                distance={20}
            />

            {/* --- Soft White Fill Light from the front --- */}
            <directionalLight
                intensity={0.7}
                color={"#ffffff"}
                position={[0, 8, 10]}
                castShadow={false}
            />

            {/* --- Increased Ambient Fill Light --- */}
            <ambientLight intensity={0.45} />
        </>
    )
}

export default HeroLights;