import * as React from "react";

const PortfolioItem = ({ imgURL, heading, subheading, links, centerImage }) => {
    return (
        <div className="col-lg-4 col-sm-12 mb-4">
            <div className="portfolio-item">
                <img className={`img-fluid${centerImage ? " centerImage" : ""}`} src={imgURL} alt={heading} />
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{heading}</div>
                    <div className="portfolio-caption-subheading text-muted">{subheading}</div>
                    <div className="portfolio-caption-links text-muted">
                        {links.map((item, index) => (
                            <div key={index} className="mx-1">
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
};

export default PortfolioItem;
