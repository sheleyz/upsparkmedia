import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./branding.module.scss";

export default function Footer() {
    return (
        <footer className={`${styles["footer"]} bg-brand-secondary text-white`}>
            <div className="container px-4 px-lg-5 pt-4">
                <div className="text-center">
                    <a className={`btn ${styles["btn-social"]} mx-2 my-3`} href="https://instagram.com/upspark.media" target="_blank" rel="noopener noreferrer" title="UpSpark Media Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="3x" fixedWidth />
                    </a>
                </div>
            </div>
            <div className={`${styles["brandName"]} text-center pt-3 fs-5`}>UpSpark Media</div>
            <div className="text-center pt-2">
                <p>Created by <a href="https://zachsheley.com/" target="_blank" rel="noopener noreferrer">Zach Sheley</a></p>
            </div>
        </footer>
    );
}
