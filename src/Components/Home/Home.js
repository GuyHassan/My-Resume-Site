import React from 'react';
import './Home.css';
import cv from "../../Assets/CV Guy Hassan - English.pdf"
const Home = () => {
    return (
        <div className="Home" id="home">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="warper-home">
                <div className="animation">
                    <h1 className="title">Hi ! <span>I'm Guy Hassan</span></h1>
                    <hr />
                    <a className="resume" href={cv} target="_blank" rel="noopener noreferrer"> <h2>Get My Resume</h2></a>
                </div>
            </div>
        </div>
    )
}
export default Home;