"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
                <Navbar.Toggle aria-controls="navbar-nav" className={`${collapsed ? `${styles["collapsed"]}` : ``} ${styles["navbar-toggler"]} p-0`} onClick={handleClick}><FontAwesomeIcon icon={faBars} size="lg" fixedWidth /></Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav" className="mt-2 mt-sm-0">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#services" className={`${styles["nav-link"]}`}>Services</Nav.Link>
                        <Nav.Link href="/#portfolio" className={`${styles["nav-link"]}`}>Portfolio</Nav.Link>
                        <Nav.Link href="/#contact" className={`${styles["nav-link"]}`}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
