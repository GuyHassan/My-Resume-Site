import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './NavBar.css';
import logo from '../../Assets/logoWebsite.png';
const NavBar = () => {
    const scrollTo = (id) => {
        var my_element = document.getElementById(id);
        my_element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    return (
        <div className="NavBar">
            <Navbar collapseOnSelect expand="md" bg="" variant="dark"  >
                <Navbar.Brand href="#home" className="mr-auto" ><img className="logoBrand" src={logo} alt="noLogo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={() => scrollTo("home")} >Home </Nav.Link>
                        <Nav.Link href="#about" onClick={() => scrollTo("about")}>About Me </Nav.Link>
                        <Nav.Link href="#Experience&Education" onClick={() => scrollTo("EducationExperience")}>Experience & Education </Nav.Link>
                        <Nav.Link href="#Portfolio" onClick={() => scrollTo("portfolio")}>Portfolio </Nav.Link>
                        <Nav.Link href="#Skills&Tools" onClick={() => scrollTo("SkillsTools")}>Skills & Tools </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default NavBar;