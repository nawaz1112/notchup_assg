import React from 'react';
import hero from './../images/hero.webp';
import './../index.css'
const HeroSection = () => {

    return (
        <>
            <div className="wrapper">
                <div className="hero-text">
                    <div className="hero-heading">
                        #1 Personalized Online Coding Classes for Age 5 to 17 years
                    </div>
                    <div className="hero-sub">
                        LIVE <strong>Coding sessions</strong> designed by <strong>IIT - IIM Alumni</strong> and adapted as per your child's level so that you pay for only what you need.
                    <br />
                        <button >
                            <a href="#trailform"> Get Free Trail</a>
                        </button>
                    </div>

                </div>
                <div className="hero-image">
                    <img src={hero} alt="Studying-img" />
                </div>
            </div>
            <div className="sub-div">
                We focus on learning outcomes and not marketing gimmicks. More than 10000+ students and parents trust us. Are you ready to NotchUp?
                
            </div>
        </>
    );

}

export default HeroSection;