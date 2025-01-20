"use client";

import styles from "./portfolio.module.scss";

export default function PortfolioItem({ image, heading, subheading, links }) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className={`${styles["portfolio-item"]}`}>
                <div className={`${styles["imageWrapper"]}`}>{image}</div>
                <div className={`${styles["portfolio-caption"]}`}>
                    <div className={`${styles["portfolio-caption-heading"]}`}>{heading}</div>
                    <div className={`${styles["portfolio-caption-subheading"]} ${styles["text-grey-dark"]}`}>{subheading}</div>
                    <div className={`${styles["portfolio-caption-links"]} ${styles["text-grey-dark"]}`}>
                        {links.map((item, index) => (
                            <div key={index} className="my-1 mx-2">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.text}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
