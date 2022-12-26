import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-brand-secondary py-5 text-white">
            <div className="container px-4 px-lg-5 fw-semibold">
                <div className="text-center">UpSpark Media</div>
                <div className="text-center">
                    <a className="btn btn-social mx-2 my-3" href="https://twitter.com/upsparkmedia" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitterSquare} size="3x" fixedWidth />
                    </a>{" "}
                    <a className="btn btn-social mx-2 my-3" href="https://instagram.com/upspark.media" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagramSquare} size="3x" fixedWidth />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
