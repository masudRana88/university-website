import React from 'react';
import './HeroSection.css'
import img from '../../images/bg.jpg'
const HeroSection = () => {
    return (
        <div className="hero-section">
            <div class="hero-image" style={{backgroundImage: `linear-gradient(rgba(45, 48, 146, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`}}>
                <div class="hero-text">
                     <h1>The New way to Learn properly in with us!</h1>
                    <button className="get-started-button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;