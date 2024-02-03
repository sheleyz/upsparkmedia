import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Images
import UpSparkMediaLogo from "../images/upsparkmedia/upspark-media-logo.png";

export default function Header() {
    return (
        <Navbar bg="brand-secondary" collapseOnSelect expand="sm" className="py-3" data-bs-theme="dark" fixed="top">
            <Container className="px-4 px-md-5 mw-100">
                <Navbar.Brand href="/">
                    <Image src={UpSparkMediaLogo} alt="UpSpark Media logo" width={178} height={40} priority />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className="p-0"><FontAwesomeIcon icon={faBars} size="lg" fixedWidth /></Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav" className="mt-2 mt-sm-0">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#services">Services</Nav.Link>
                        <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
