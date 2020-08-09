import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './NavBar.css';
import logo from '../../Assets/logoWebsite.png';
const NavBar = () => {
    const scrollTo = (x, y) => {
        window.scrollTo({ top: y, behavior: 'smooth' })
    }
    window.addEventListener('scroll', (event) => {
        console.log(window.scrollX, window.scrollY)
    });
    return (
        <div className="NavBar">
            <Navbar collapseOnSelect expand="md" bg="" variant="dark"  >
                <Navbar.Brand href="#home" className="mr-auto" ><img className="logoBrand" src={logo} alt="noLogo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => scrollTo(0, 0)} >Home </Nav.Link>
                        <Nav.Link onClick={() => scrollTo(0, 640)}>About Me </Nav.Link>
                        <Nav.Link onClick={() => scrollTo(0, 1285)}>Experiece & Education </Nav.Link>
                        <Nav.Link onClick={() => scrollTo(0, 1800)}>Portfolio </Nav.Link>
                        <Nav.Link onClick={() => scrollTo(0, 500)}>Skills & Tools </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default NavBar;