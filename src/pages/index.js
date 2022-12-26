import * as React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";

// Images
import Laptop from "../images/laptop.jpg";
import RoughTerrainPortfolio from "../images/portfolio/Rough-Terrain-Studios-YouTube-cropped.jpg";
import CSFPortfolio from "../images/portfolio/CSF-IUPUI-Website-cropped.jpg";
import CGChoirsPortfolio from "../images/portfolio/CG-Choirs-Logo.jpg";

const IndexPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <div className="bg-brand-secondary py-5 hero">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-7 col-xl-6">
                            <div className="my-5 text-center text-lg-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">Increase your growth potential online</h1>
                                <p className="lead fw-normal text-grey mb-4">We optimize your website or YouTube channel to increase your visibility and potential for growth online.</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
                                    <a className="btn btn-outline-brand-primary btn-lg px-4" href="#services">
                                        Find Out More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-6 d-none d-lg-block text-center">
                            <img className="img-cover rounded-3 my-5" src={Laptop} alt="Laptop" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="page-section bg-brand-light" id="services">
                <div className="container px-4 px-lg-5">
                    <h2 className="text-center mt-0">Services</h2>
                    <hr className="divider" />
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="mt-5">
                                <div className="mb-4 icon">
                                    <FontAwesomeIcon icon={faYoutube} size="5x" fixedWidth color="var(--upspark-secondary)" />
                                </div>
                                <h3 className="h4 mb-2">YouTube SEO</h3>
                                <p className="mb-0">Make it easier for people to find your channel on YouTube</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="mt-5">
                                <div className="mb-4">
                                    <FontAwesomeIcon icon={faLaptop} size="5x" fixedWidth color="var(--upspark-secondary)" />
                                </div>
                                <h3 className="h4 mb-2">Website Design</h3>
                                <p className="mb-0">Get a new design for your website or update your current one</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="mt-5">
                                <div className="mb-4">
                                    <FontAwesomeIcon icon={faUserGear} size="5x" fixedWidth color="var(--upspark-secondary)" />
                                </div>
                                <h3 className="h4 mb-2">Website Maintenance</h3>
                                <p className="mb-0">Have your website maintained through consistent content updates and general site improvements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="page-section bg-brand-secondary" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-white">Portfolio</h2>
                        <hr className="divider" />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-sm-12 mb-4">
                            <div className="portfolio-item">
                                <img className="img-fluid" src={RoughTerrainPortfolio} alt="Rough Terrain Studios YouTube" />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Rough Terrain Studios</div>
                                    <div className="portfolio-caption-subheading text-muted">YouTube SEO</div>
                                    <div className="portfolio-caption-subheading text-muted">
                                        <a href="https://www.youtube.com/channel/UCh16fC0-zzcdRHcTWKYJurg" target="_blank" rel="noopener noreferrer">
                                            YouTube Channel
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mb-4">
                            <div className="portfolio-item">
                                <img className="img-fluid" src={CSFPortfolio} alt="CSF IUPUI Website" />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Christian Student Fellowship</div>
                                    <div className="portfolio-caption-subheading text-muted">YouTube SEO + Web Design</div>
                                    <div className="portfolio-caption-subheading text-muted">
                                        <a href="https://www.youtube.com/channel/UC6e76TemyDULPBQ-9Kc2zMw" target="_blank" rel="noopener noreferrer">
                                            YouTube Channel
                                        </a>{" "}
                                        |{" "}
                                        <a href="https://csfiupui.com/" target="_blank" rel="noopener noreferrer">
                                            Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mb-4">
                            <div className="portfolio-item">
                                <img className="img-fluid" src={CGChoirsPortfolio} alt="Center Grove Choirs Logo" style={{ objectPosition: "center" }} />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Center Grove Choirs</div>
                                    <div className="portfolio-caption-subheading text-muted">Web Maintenance</div>
                                    <div className="portfolio-caption-subheading text-muted">
                                        <a href="https://centergrovechoirs.org/" target="_blank" rel="noopener noreferrer">
                                            Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="page-section bg-brand-light" id="contact">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h2 className="mt-0">Let's Talk!</h2>
                            <hr className="divider" />
                            <p className="brand-text-grey mb-5">
                                Ready to start your next project or have a few questions first? Contact us using the form below and I will get back to you as soon as possible!
                            </p>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-4 text-center mb-5 mb-lg-0">
                            <a className="btn btn-brand-primary btn-lg px-4" href="https://form.jotform.com/212678953278067" target="_blank" rel="noopener noreferrer">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>UpSpark Media - YouTube SEO + Web Design</title>;
