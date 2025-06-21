import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center">
                    <a href="/">
                        See my Resume
                    </a>
                </div>
                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a className="icon target" target="_blank" href={img.url} key={img.url} >
                            <img src={img.imgPath} alt={img.alt} />
                        </a>
                    ))}


                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        &copy; {new Date().getFullYear()} Danish Ghumman.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer