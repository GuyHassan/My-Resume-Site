import React, { useEffect } from 'react';
import './About.css';
import selfImage from '../../Assets/mySelfImage.jpeg'
import countapi from 'countapi-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
    const KeyProgrammingLanguage = () => {
        return (
            <div className="keyLanguage">
                <p className="medium-text">Development Languages :</p>
                <ul>
                    <li>Javascript</li>
                    <li>React.Js</li>
                    <li>Hooks</li>
                    <li>Node.Js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C/C++</li>
                    <li>Firebase</li>
                </ul>
            </div>
        )
    }
    const Contact = () => {
        return (
            <div className="priavte-details">
                <ul>
                    <li className="contact-list">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="icons"></FontAwesomeIcon>
                        <a className="text-icon" target="_blank" rel="noopener noreferrer" href="mailto:guy.hasan@gmail.com">
                            guy.hasan@gmail.com
                         </a>
                    </li>
                    <li className="contact-list">
                        <FontAwesomeIcon icon={faPhone} className="icons"></FontAwesomeIcon>
                        <a className="text-icon" href="callto:(+972) 52 4899286">
                            +972 - 524 - 899 - 286
                        </a>
                    </li>
                    <li className="contact-list">
                        <FontAwesomeIcon
                            icon={faGlobeAmericas}
                            className="icons"></FontAwesomeIcon>
                        <a href="none" className="text-icon">
                            Ashdod, Israel
                        </a>
                    </li>
                </ul>
                <ul className="social-contact">
                    <li>
                        <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guy-hassan-790a43160/">
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/GuyHassan">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a className="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/guy.hasan/">
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
    useEffect(() => {
        countapi.hit('guy-hassan.herokuapp.com', 'visitors').then((result) => { console.log(`Vistors: ${result.value}`); });
    })
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <img className="selfImage" src={selfImage} alt="noDetected" />
                    </div>
                    <div className="mt-2 col-sm-12 col-md-4 col-lg-6">
                        <div className="about-text">
                            <h1 className="titleAbout">About Me</h1>
                            <hr />
                            <p className="medium-text">Junior Software Engineer</p>
                            <p>Hey, I’m Guy, Software Engineering Graduate with honor. <br />
                            Experience in the development of undergraduate studies.<br />
                            i'm Passionate and enthusiastic with a great social skills and self-learning abilities.<br />
                            Love learning and earning new abilities.<br />
                            High motivation and willingness of challenging mission.<br />
                            Aside from having fun with code I like to Cooking, Travel And Listen Music.<br />
                            </p>
                        </div>
                        <KeyProgrammingLanguage />
                        <Contact />
                    </div>
                </div>


            </div>
        </div>
    )
}
export default About;