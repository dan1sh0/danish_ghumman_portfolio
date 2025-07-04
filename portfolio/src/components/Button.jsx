import React from 'react'

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        // how the button works, attached to the about section below
        // we can change this if we dont want to have the about section 
        const target = document.getElementById('about');
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }}
      className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>

      </div>

    </a>
  )
}

export default Button
