import React from 'react';
import './Portfolio.css';
const Portfolio = () => {
    const PortfolioWindow = () => {
        return (
            <div className="portfolioWindows">
                <ul>
                    <h1 className="portfolioTitle">Portfolio</h1>
                    <hr />
                    <h4>More Projects on my github</h4>
                    
                    <h4><a href="https://github.com/GuyHassan" target="_blank">Guy Hassan</a></h4>

                    <li >
                        {/* <img src={} alt="error" className="logoExperince" /> */}
                        <p>
                            Ashdod city hall central dispatcher <br />
                            addressing complaints and handling escalations. <br />
                            Responsible for over 500 security cameras deployed throughout the city.
                        </p>
                    </li>
                    <li >
                        {/* <img src={} alt="error" className="logoExperince" /> */}
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
    return (
        <div className="portfolio">
            <PortfolioWindow />
        </div>
    )
}
export default Portfolio;