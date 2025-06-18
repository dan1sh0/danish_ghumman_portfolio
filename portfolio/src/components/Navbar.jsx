import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants'


const Navbar = () => {
    // this is a state that will be used to check if the user has scrolled the page
    // so that the navbar changes color when the user scrolls
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            setIsScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        // this is a ternary operator that will be used to check if the user has scrolled the page
        // so that the navbar changes background color to black when the user scrolls
        <header className={`navbar ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                {/* href makes it that when we click my name, it points directly to the hero section */}
                <a className="logo" href="#hero">
                    Danish Ghumman
                </a>
                {/* navLinks is an array of objects that contains the text and the href, points to our links. Change in index.js */}
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline' />

                                </a>
                            </li>
                        ))}

                    </ul>

                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span> Contact me </span>
                    </div>
                </a>
            </div>


        </header>
    )
}

export default Navbar
