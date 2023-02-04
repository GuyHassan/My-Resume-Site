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
    const [showModal, setShowModal] = useState(false);
    const ProjectDetails = ProjectTypes();
    const onClickPortfolio = (e) => {
        setCurrentPortfolio(Number(e.target.id))
        setShowModal(true)
    }
    const PortfolioWindow = () => {
        return (
            <div className="portfolioWindows">
                <h1 className="portfolioTitle">Portfolio</h1>
                <hr />
                <h4>More Projects on my github</h4>
                <h4><a href="https://github.com/GuyHassan" target="_blank" rel="noopener noreferrer">Guy Hassan</a></h4>
                {/* <AliceCarousel >
                    <img src={GtasMain} className="sliderimg" id='1' onClick={onClickPortfolio} alt='NoImage' />
                    <img src={VehicleMain} className="sliderimg" id='2' onClick={onClickPortfolio} alt='NoImage' />
                    <img src={MemoryGameMain} className="sliderimg" id='3' onClick={onClickPortfolio} alt='NoImage' />
                </AliceCarousel> */}
            </div>
        )
    }
    return (
        <div className="portfolio" id="portfolio">
            <PortfolioWindow />
            {
                currentPortfolio !== false ?
                    <ModalPortfolio
                        project={ProjectDetails[currentPortfolio - 1]}
                        showModal={showModal}
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