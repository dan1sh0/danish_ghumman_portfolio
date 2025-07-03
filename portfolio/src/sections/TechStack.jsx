import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const TechStack = () => {

    // animation for the tech sack icons 
    // make it starts from the bottom and goes up 
    // make it start when the user scrolls to the tech stack section 

    useGSAP(() => {
        gsap.fromTo(
            '.tech-card',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power2.inOut', stagger: 0.2, scrollTrigger: { trigger: '#skills', start: 'top center' } }
        );
    }, []);


    return (
        <div id="skills" className="flex-center section-padding">
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader title="My Skills " sub="💻 Tech Stack" />
                {/* tech stack icons */}
                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className='tech-card-animated-bg' />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon} />
                                </div>

                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TechStack