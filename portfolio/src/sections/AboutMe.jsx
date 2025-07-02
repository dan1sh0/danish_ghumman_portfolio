import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutMe = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        if (imgRef.current) {
            gsap.from(imgRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top 80%',
                },
            });
        }
        if (textRef.current) {
            gsap.from(textRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                },
            });
        }
    }, []);

    return (
        <section id="about" className="flex-center section-padding">
            <div className="w-full h-full md:px-20 px-5">
                <div className="grid-2-cols items-center gap-10">
                    {/* Left: Photo */}
                    <div className="flex justify-center about-img" ref={imgRef}>
                        <img
                            src="/images/profile-pic.png"
                            alt="Profile"
                            className="md:w-[400px] md:h-[500px] w-72 h-96 object-contain border-4 border-black-50 bg-black-100 shadow-lg rounded-2xl"
                        />
                    </div>
                    {/* Right: About Me Text */}
                    <div className="flex flex-col gap-5 about-text" ref={textRef}>
                        <h2 className="font-semibold md:text-5xl text-3xl text-white">About Me</h2>
                        <p className="text-white-50 md:text-xl text-lg">
                            Hi! I'm Danish, a recent Computer Science graduate and current Master's student. I'm passionate about building things, learning new technologies, and tackling real-world problems. I'm excited to bring my curiosity and drive to a software engineering role!
                        </p>
                        <p className="text-white-50 md:text-lg text-base">
                            I love collaborating with others, exploring new ideas, and always pushing myself to grow. Let's connect and build something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe; 