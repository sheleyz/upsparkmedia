import * as React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Components
import Layout from "../components/Layout";
import PortfolioItem from "../components/PortfolioItem";
import Seo from "../components/Seo";

// Images
import LaptopImage from "../images/laptop.jpg";
import LiveDefinedImage from "../images/portfolio/live-defined.jpg";
import CSFImage from "../images/portfolio/csf-iupui.jpg";
import MPCCImage from "../images/portfolio/mpcc.jpg";
import RoughTerrainStudiosImage from "../images/portfolio/rough-terrain-studios.jpg";
import CenterGroveChoirsImage from "../images/portfolio/cg-choirs.jpg";

const IndexPage = () => {
    return (
        <Layout>
            <Seo />
            {/* Hero Section */}
            <div className="bg-brand-secondary py-5 hero" id="home">
                <div className="container mw-100 px-4 px-md-5 hero-container d-flex justify-content-center">
                    <div className="row gx-0 align-items-center justify-content-center">
                        <div className="col-md-6 px-0">
                            <div className="heroText my-5">
                                <h1 className="display-5 fw-bolder text-white mb-2">Increase your growth potential online</h1>
                                <p className="lead fw-normal text-grey mb-4">We optimize your website or YouTube channel to increase your visibility and potential for growth online.</p>
                                <div className="d-flex">
                                    <a className="btn btn-outline-brand-primary btn-lg px-4" href="#services">
                                        Find Out More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="heroImage col-md-6 d-none d-md-block text-center">
                            <Image src={LaptopImage} alt="Laptop" placeholder="blur" priority className="rounded-3" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="page-section bg-brand-light" id="services">
                <div className="container mw-100 px-4 px-md-5">
                    <h2 className="text-center mt-0">Services</h2>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-5 mb-lg-0">
                            <div className="mb-4">
                                <FontAwesomeIcon icon={faLaptop} size="5x" fixedWidth color="var(--upspark-secondary)" />
                            </div>
                            <h3 className="h4 mb-2">Website Design</h3>
                            <p className="mb-0">Reach your target audience with a well-designed, user-friendly website</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-5 mb-lg-0">
                            <div className="mb-4 icon">
                                <FontAwesomeIcon icon={faYoutube} size="5x" fixedWidth color="var(--upspark-secondary)" />
                            </div>
                            <h3 className="h4 mb-2">YouTube SEO</h3>
                            <p className="mb-0">Make it easier for people to discover your channel and videos on YouTube</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-5 mb-lg-0">
                            <div className="mb-4">
                                <FontAwesomeIcon icon={faUserGear} size="5x" fixedWidth color="var(--upspark-secondary)" />
                            </div>
                            <h3 className="h4 mb-2">Website Maintenance</h3>
                            <p className="mb-0">Have us maintain your website through consistent content updates and general site improvements</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-5 mb-lg-0">
                            <div className="mb-4">
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="5x" fixedWidth color="var(--upspark-secondary)" />
                            </div>
                            <h3 className="h4 mb-2">SEO</h3>
                            <p className="mb-0">Optimize your website in order to rank higher in search engines and improve discoverability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="page-section bg-brand-secondary" id="portfolio">
                <div className="container mw-100 px-4 px-md-5">
                    <h2 className="section-heading text-center text-white">Portfolio</h2>
                    <div className="row mt-5 d-flex">
                        <PortfolioItem
                            image={<Image src={LiveDefinedImage} alt="Live Defined Co" placeholder="blur" />}
                            heading={"Live Defined Co"}
                            subheading={"Website Design + Website Maintenance"}
                            links={[
                                {
                                    link: "https://livedefinedco.com/",
                                    text: "Website"
                                }
                            ]}
                        />
                        <PortfolioItem
                            image={<Image src={CSFImage} alt="Christian Student Fellowship" placeholder="blur" />}
                            heading={"Christian Student Fellowship"}
                            subheading={"YouTube SEO + Website Design"}
                            links={[
                                {
                                    link: "https://www.youtube.com/channel/UC6e76TemyDULPBQ-9Kc2zMw",
                                    text: "YouTube Channel"
                                },
                                {
                                    link: "https://csfiupui.com/",
                                    text: "Website"
                                }
                            ]}
                        />
                        <PortfolioItem
                            image={<Image src={MPCCImage} alt="Mount Pleasant Christian Church" placeholder="blur" />}
                            heading={"Mount Pleasant Christian Church"}
                            subheading={"YouTube SEO"}
                            links={[
                                {
                                    link: "https://www.youtube.com/@MountPleasantChristianChurch",
                                    text: "YouTube Channel"
                                }
                            ]}
                        />
                        <PortfolioItem
                            image={<Image src={RoughTerrainStudiosImage} alt="Rough Terrain Studios" placeholder="blur" />}
                            heading={"Rough Terrain Studios"}
                            subheading={"YouTube SEO"}
                            links={[
                                {
                                    link: "https://www.youtube.com/channel/UCh16fC0-zzcdRHcTWKYJurg",
                                    text: "YouTube Channel"
                                }
                            ]}
                        />
                        <PortfolioItem
                            image={<Image src={CenterGroveChoirsImage} alt="Center Grove Choirs" placeholder="blur" className="centerImage" />} //center
                            heading={"Center Grove Choirs"}
                            subheading={"Website Maintenance"}
                            links={[
                                {
                                    link: "https://centergrovechoirs.org/",
                                    text: "Website"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="page-section bg-brand-light" id="contact">
                <div className="container mw-100 px-4 px-md-5">
                    <div className="row justify-content-center">
                        <h2 className="mt-0 text-center">Let's Talk!</h2>
                        <p className="brand-text-grey fs-5 mt-5 mb-4">
                            Ready to start your next project or have a few questions first? Contact us using the form below and we will get back to you as soon as possible!
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="text-center">
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
