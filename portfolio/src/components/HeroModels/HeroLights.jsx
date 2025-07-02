import { RectAreaLight } from 'three';

const HeroLights = () => {
    return (
        <>
            {/* --- Main Monitor Glow --- */}
            {/* A strong but soft light simulating the screen's emission */}
            <rectAreaLight
                width={4}
                height={3}
                intensity={10}
                color={"#6ab1ff"} // A stronger, cool blue light
                position={[1, 1, -2]} // Positioned closer to the desk and monitor
                rotation={[0, 3.5, 0]}
            />

            {/* --- Under-Desk LED Strip (Purple) --- */}
            {/* Increased intensity and adjusted position for a more visible glow */}
            <pointLight
                intensity={1}
                color={"#9370db"} // Medium Purple
                position={[1, -1, -1]} // Lower and closer to the desk
                distance={12}
            />

            {/* --- Accent Room Light (Red/Orange) --- */}
            {/* A soft, warm light to fill the room from a corner */}
            <spotLight
                intensity={4}
                color={"#ff4500"}
                position={[-5, 6, 5]}
                angle={0.3}
                penumbra={1}
                distance={20}
            />

            {/* --- Soft Ambient Fill Light --- */}
            {/* Increased intensity to make shadows less harsh */}
            <ambientLight intensity={0.3} />
        </>
    )
}

export default HeroLights;