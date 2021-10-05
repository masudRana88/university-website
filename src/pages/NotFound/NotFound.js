import React from 'react';
import img from '../../images/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="hero-section NotFound-section">
            <div className="hero-image" style={{backgroundImage: `linear-gradient(rgba(45, 48, 146, 0.1), rgba(0, 0, 0, 0.5)), url(${img})`}}>
            </div>
        </div>
    );
};

export default NotFound;