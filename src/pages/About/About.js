import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="about-us container">
            <div>
                <h1 className="setcion-name text-center">About us</h1>
            </div>
            <h4>Our Mission</h4>
            <p>
                A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them. On the other hand, a vision statement describes where the company wants a community, or the world, to be as a result of the company's services. Thus, a mission statement is a roadmap for the company's vision statement
            </p>
            <h4>Our Vision</h4>
            <p>
                The Life is Good brand is about more than spreading optimism — although, with uplifting T-shirt slogans like "Seas The Day" and "Forecast: Mostly Sunny," it's hard not to crack a smile.

                There are tons of T-shirt companies in the world, but Life is Good's mission sets itself apart with a mission statement that goes beyond fun clothing: to spread the power of optimism.
            </p>
        </div>
    );
};

export default About;