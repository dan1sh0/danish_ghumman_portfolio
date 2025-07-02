import React from 'react';
import GlowCard from '../components/GlowCard';
import TitleHeader from '../components/TitleHeader';
import { education } from '../constants';


const EducationSection = () => {
    return (
        <section id="education" className="flex-center section-padding">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Education" sub=" 👨🏽‍🎓My Academic Journey" />
                <div className="mt-16 grid-2-cols gap-10">
                    {education.map((edu, idx) => (
                        <GlowCard key={edu.school} card={edu} index={idx}>
                            <div className="flex flex-col items-center gap-5">
                                <img
                                    src={edu.logo}
                                    alt={edu.school}
                                    className="md:h-24 h-16 object-contain mb-2"
                                />
                                <h3 className="text-white text-2xl font-semibold text-center">{edu.school}</h3>
                                <p className="text-white-50 text-lg text-center">{edu.degree}</p>
                                <p className="text-white-50 text-base text-center">{edu.dates}</p>
                                <p className="text-blue-50 text-center">{edu.details}</p>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection; 