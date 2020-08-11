import React from "react";
import "./ModalPortfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { } from '../../Assets/GTAS - Project/';

const ModalPortfolio = ({ showModal, setShowModal, project }) => {
    showModal
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");

    return (
        <div>
            <div className={showModal ? "modal display-block" : "modal display-none"}>
                <div className="portfolio-modal">
                    <div className="container">
                        <div className="row portfolio-modal-inner">
                            <div className="col-sm-5">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <div className="about-tag">
                                    <ul>
                                        {project.techs.map((tech, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{tech}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                {project.site ?
                                    <a href={project.site} target="_blank" className="btn-website">
                                        {project.name} - Website
                                        <br /><br />
                                    </a>
                                    : null}
                                <a href={project.code} target="_blank" className="btn-code">
                                    Github Code
                                </a>
                            </div>
                            <div className="col-sm-7">
                                <div className="portfolio-modal-img">
                                    {project.images.map((image, index) => {
                                        return (
                                            <div key={index}>
                                                <p className="titleImg">{image[1]}</p>
                                                <a href={image[0]} target="_blank">
                                                    <img src={image[0]} alt="" className="img-fluid" />
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="close-btn" onClick={setShowModal}>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="search-icon"></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalPortfolio;