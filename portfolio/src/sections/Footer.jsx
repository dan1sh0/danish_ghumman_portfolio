import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex flex-col items-center gap-5">
                {/* Social icons */}
                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.url} >
                            <img src={img.imgPath} alt={img.alt} />
                        </a>
                    ))}
                </div>
                {/* Copyright */}
                <p className="text-white-50">
                    &copy; {new Date().getFullYear()} Danish Ghumman.
                </p>
            </div>
        </footer>
    )
}

export default Footer