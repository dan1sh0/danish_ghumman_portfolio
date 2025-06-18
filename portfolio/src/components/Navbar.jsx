import React from 'react'

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="inner">
                {/* href makes it that when we click my name, it points directly to the hero section */}
                <a className="logo" href="#hero">
                    Danish Ghumman
                </a>
            </div>


        </header>
    )
}

export default Navbar
