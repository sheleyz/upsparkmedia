"use client";

import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import styles from "./branding.module.scss";

// Images
import UpSparkMediaLogo from "../../images/upsparkmedia/upspark-media-logo.png";

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const handleClick = () => setCollapsed(!collapsed);

    return (
        <Navbar collapseOnSelect expand="sm" className={`bg-brand-secondary ${styles["navbar"]} py-3`} data-bs-theme="dark" fixed="top" onToggle={handleClick}>
            <Container className="px-4 px-md-5 mw-100">
                <Navbar.Brand href="/" className={`${styles["navbar-brand"]}`}>
                    <Image src={UpSparkMediaLogo} alt="UpSpark Media logo" width={178} height={40} priority />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className={`${collapsed ? `${styles["collapsed"]}` : ``} ${styles["navbar-toggler"]} p-0`} onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav" className="mt-2 mt-sm-0">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#services" className={`${styles["nav-link"]}`}>
                            Services
                        </Nav.Link>
                        <Nav.Link href="/#portfolio" className={`${styles["nav-link"]}`}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link href="/#contact" className={`${styles["nav-link"]}`}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
