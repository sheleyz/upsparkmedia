import * as React from "react";

const PortfolioItem = ({ image, heading, subheading, links }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="portfolio-item">
                <div className="imageWrapper">{image}</div>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{heading}</div>
                    <div className="portfolio-caption-subheading text-grey-dark">{subheading}</div>
                    <div className="portfolio-caption-links text-grey-dark">
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
};

export default PortfolioItem;
