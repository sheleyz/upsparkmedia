import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    return (
        <Navbar bg="brand-secondary" expand="md" className="py-3" variant="dark" fixed="top">
            <Container className="px-4 px-lg-5">
                <Navbar.Brand href="/">
                    <StaticImage
                        src="../images/upsparkmedia/upspark-media-logo.png"
                        alt="UpSpark Media logo"
                        className="d-inline-block align-top"
                        width={190}
                        height={43}
                        layout="fixed"
                        placeholder="transparent"
                        loading="eager"
                        imgStyle={{ transform: "none", transition: "none", willChange: "unset" }}
                        style={{ transition: "none" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="my-2 my-md-0">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#services">Services</Nav.Link>
                        <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/#contact" className="pe-0">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
