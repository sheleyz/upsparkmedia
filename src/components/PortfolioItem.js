import * as React from "react";

const PortfolioItem = ({ image, heading, subheading, links }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="portfolio-item">
                {image}
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
