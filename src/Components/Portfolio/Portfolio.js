import React, { useState } from 'react';
import './Portfolio.css';
import AliceCarousel from 'react-alice-carousel';
import GtasMain from '../../Assets/GTAS - Project/GtasMain.JPG'
import VehicleMain from '../../Assets/Vehicle - Project/VehicleMain.jpg'
import MemoryGameMain from '../../Assets/Memory Game - Project/MemoryGameMain.JPG';
import "react-alice-carousel/lib/alice-carousel.css";
import ModalPortfolio from "./ModalPortfolio";
import { ProjectTypes } from './ProjectTypes';

const Portfolio = () => {
    const [currentPortfolio, setCurrentPortfolio] = useState(false)
    const [showHover, setShowHover] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const ProjectDetails = ProjectTypes();
    // const tmp = { name: 'guy', description: 'wow wow wow', site: 'guy.hassan@gmail.com', techs: ['react', 'hooks'], images: [PrivateProject1, PrivateProject2] }
    const check = (e) => {

        setCurrentPortfolio(Number(e.target.id))
    }
    const PortfolioWindow = () => {
        return (
            <div className="portfolioWindows">
                <h1 className="portfolioTitle">Portfolio</h1>
                <hr />
                <h4>More Projects on my github</h4>
                <h4><a href="https://github.com/GuyHassan" target="_blank">Guy Hassan</a></h4>\
                <AliceCarousel /* autoPlay autoPlayInterval="1000" */ >
                    <img src={GtasMain} className="sliderimg" id='1' onClick={check} />
                    <img src={VehicleMain} className="sliderimg" id='2' onClick={check} />
                    <img src={MemoryGameMain} className="sliderimg" id='3' onClick={check} />
                </AliceCarousel>
            </div>
        )
    }
    return (
        <div className="portfolio">
            <PortfolioWindow />
            {
                currentPortfolio !== false ?
                    <ModalPortfolio
                        project={ProjectDetails[currentPortfolio - 1]}
                        showModal={true}
                        setShowModal={() => {
                            setShowModal(false);
                            setCurrentPortfolio(false);
                            document.body.style.overflow = "unset"
                        }}
                    /> : null}
        </div>
    )
}
export default Portfolio;