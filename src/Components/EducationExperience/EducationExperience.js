import React from 'react';
import './EducationExperience.css';
import SCE_LOGO from '../../Assets/SCE_LOGO.png';
import JOB_LOGO from '../../Assets/JOB_LOGO.jpg';
import EDUCATION_LOGO from '../../Assets/EDUCATION_LOGO.jpg';
const EducationExperience = () => {
    const Experience = () => {
        return (
            <div className="Experience">
                <ul>
                    <h1 className="EducationExperienceTitle">Work Experience</h1>
                    <hr />
                    <li >
                        <img src={JOB_LOGO} alt="error" className="logoExperince" />
                        <p>
                            Ashdod city hall central dispatcher <br />
                            addressing complaints and handling escalations. <br />
                            Responsible for over 500 security cameras deployed throughout the city.
                        </p>
                    </li>
                    <li >
                        <img src={SCE_LOGO} alt="error" className="logoExperince" />
                        <p>
                            Tutor Student Groups In C & Python Programming languages, Prepare Their Homework Together.
                            <br /> Go Through The Lecturer's Presentations Together.
                            <br /> In Addition I Prepare Them For Final Exams.

                        </p>
                    </li>
                </ul>
            </div>
        )
    }
    const Education = () => {
        return (
            <div className="Education">
                <h1 className="EducationExperienceTitle">Education</h1>
                <hr />
                <li >
                    <img src={SCE_LOGO} alt="error" className="logoExperince" />
                    <p>
                        SCE College. <br />
                        Bachelor of Science, Software Engineering. <br />
                        Graduate with honor. <br />
                    </p>
                    <span> GPA 88 </span>
                </li>
                <li >
                    <img src={EDUCATION_LOGO} alt="error" className="logoExperince" />
                    <p>
                        Mekif Het High School. <br />
                        12 years of study with full matriculation. <br />
                        Expansion of professions of manager and economics to 5 units.
                    </p>
                </li>
            </div>
        )
    }
    return (
        <div className="EducationExperience">
            <Experience />
            <Education />
        </div>
    )
}
export default EducationExperience;