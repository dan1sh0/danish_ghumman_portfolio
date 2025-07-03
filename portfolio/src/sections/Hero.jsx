import React from 'react';
import Button from "../components/Button.jsx";
import { words } from "../constants/index.js";
import HeroExperience from "../components/HeroModels/HeroExperience.tsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedCounter from '../components/HeroModels/AnimatedCounter.jsx';
import FeatureCards from './FeatureCards.jsx';

const Hero = () => {

    useGSAP(() => {
        // this creates the animation for out title 
        gsap.fromTo(
            ".hero-text h1",
            //adjust stagger to make the animation smoother or faster
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 1, duration: 0.5, ease: "power2.inOut" }
        );
    }, []);


    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/* LEFT: Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Passionate About
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Crafting Clean, Scalable Code</h1>
                            <h1>that Drives Real Impact</h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Danish! Recent CS Graduate & Software Engineer
                        </p>

                        <Button
                            text="See My Work"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="counter"
                        />
                    </div>
                </header>

                {/* RIGHT: 3D Model or Visual */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>

            { /* <AnimatedCounter /> */}

        </section>
    );
};

export default Hero;
