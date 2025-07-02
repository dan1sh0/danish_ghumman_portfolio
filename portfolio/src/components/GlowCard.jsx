import React from 'react'
import { useRef } from 'react';


// function to animate the glow effect on the card
const GlowCard = ({ card, children, index }) => {
    const cardRefs = useRef([]);
    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        // get the mouse poisiton relative to the card
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // calculate the angle of the mouse relative to the card
        let angle = Math.atan2(y, x);
        angle = angle * (180 / Math.PI);

        let new_angle = (angle + 360) % 360;

        card.style.setProperty('--start', new_angle + 60);
    }

    return (
        <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 flex justify-center items-center h-full">
            <div className="glow" />
            {children}
        </div>
    )
}

export default GlowCard