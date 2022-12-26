import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Images
import Logo from "../images/upsparkmedia/upspark-media-logo.png";

const Header = () => {
    return (
        <Navbar bg="brand-secondary" expand="md" className="py-3" variant="dark" fixed="top">
            <Container className="px-4 px-lg-5">
                <Navbar.Brand href="#home">
                    <img src={Logo} width="190px" height="43px" className="d-inline-block align-top" alt="UpSpark Media logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="my-2 my-md-0">
                    <Nav className="ms-auto">
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact" className="pe-0">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
