"use client";

import Image from "next/image";
import styles from "./portfolio.module.scss";

export default function PortfolioItem({ portfolioItem }) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className={`${styles["portfolio-item"]}`}>
                <div className={`${styles["imageWrapper"]}`}><Image src={portfolioItem.image} alt={portfolioItem.heading} placeholder="blur" sizes="(min-width: 992px) 33.33333333%, (min-width: 768px) 50%, 100%" /></div>
                <div className={`${styles["portfolio-caption"]}`}>
                    <div className={`${styles["portfolio-caption-heading"]}`}>{portfolioItem.heading}</div>
                    <div className={`${styles["portfolio-caption-subheading"]} ${styles["text-grey-dark"]}`}>{portfolioItem.subheading}</div>
                    <div className={`${styles["portfolio-caption-links"]} ${styles["text-grey-dark"]}`}>
                        {portfolioItem.links.map((link, index) => (
                            <div key={index} className="my-1 mx-2">
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.text}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
