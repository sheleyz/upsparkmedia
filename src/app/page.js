"use client";

// React
import { useMemo } from "react";

// Third-Party
import Image from "next/image";

// Components
import Layout from "../components/branding/Layout";
import PortfolioItem from "../components/portfolio/PortfolioItem";

// Images
import LaptopImage from "../images/laptop.jpg";
import CrowbarRestaurantImage from "../images/portfolio/crowbar-restaurant.jpg";
import OGWEnergyResourcesImage from "../images/portfolio/ogw-energy-resources.jpg";
import LiveDefinedImage from "../images/portfolio/live-defined.jpg";
import CSFImage from "../images/portfolio/csf-iupui.jpg";

const portfolioData = [
    {
        image: CrowbarRestaurantImage,
        heading: "Crowbar Restaurant",
        subheading: "Website Design + Website Maintenance",
        links: [
            {
                url: "https://crowbar.pub/",
                text: "Website"
            }
        ]
    },
    {
        image: OGWEnergyResourcesImage,
        heading: "OGW Energy Resources",
        subheading: "Website Design + Maintenance + SEO",
        links: [
            {
                url: "https://ogwenergyresources.com/",
                text: "Website"
            }
        ]
    },
    {
        image: LiveDefinedImage,
        heading: "Live Defined Co",
        subheading: "Website Design + Website Maintenance",
        links: [
            {
                url: "https://livedefinedco.com/",
                text: "Website"
            }
        ]
    },
    {
        image: CSFImage,
        heading: "Christian Student Fellowship",
        subheading: "Website Design + YouTube SEO + SEO",
        links: [
            {
                url: "https://csfindy.com/",
                text: "Website"
            },
            {
                url: "https://www.youtube.com/channel/UC6e76TemyDULPBQ-9Kc2zMw",
                text: "YouTube Channel"
            }
        ]
    }
];

export default function HomePage() {
    const portfolioItems = useMemo(() => portfolioData, []);
    return (
        <Layout>
            {/* Hero Section */}
            <div className="bg-brand-secondary py-5 hero" id="home">
                <div className="container mw-100 px-4 px-md-5 hero-container d-flex justify-content-center">
                    <div className="row gx-0 align-items-center justify-content-center">
                        <div className="col-md-6 px-0">
                            <div className="heroText my-5">
                                <h1 className="display-5 text-white mb-2">Increase your growth potential online</h1>
                                <p className="lead fw-normal text-grey mb-4">We optimize your website or YouTube channel to increase your visibility and potential for growth online.</p>
                                <div className="d-flex">
                                    <a className="btn btn-outline-brand-primary btn-lg px-4" href="#services">
                                        Find Out More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="heroImage col-md-6 d-none d-md-block text-center">
                            <Image src={LaptopImage} alt="Laptop" placeholder="blur" priority={true} className="rounded-3" />
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-laptop text-brand-secondary" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                </svg>
                            </div>
                            <h3 className="h4 mb-2">Website Design</h3>
                            <p className="mb-0">Reach your target audience with a well-designed, user-friendly website</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-5 mb-lg-0">
                            <div className="mb-4 icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-youtube text-brand-secondary" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                </svg>
                            </div>
                            <h3 className="h4 mb-2">YouTube SEO</h3>
                            <p className="mb-0">Make it easier for people to discover your channel and videos on YouTube</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-5 mb-lg-0">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-fill-gear text-brand-secondary" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>
                            </div>
                            <h3 className="h4 mb-2">Website Maintenance</h3>
                            <p className="mb-0">Have us maintain your website through consistent content updates and general site improvements</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-5 mb-lg-0">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-search text-brand-secondary" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
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
                        {portfolioItems.map((portfolioItem, index) => (
                            <PortfolioItem key={index} portfolioItem={portfolioItem} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="page-section bg-brand-light py-5" id="contact">
                <div className="container mw-100 px-4 px-md-5">
                    <div className="row justify-content-center">
                        <h2 className="mt-0 text-center">Let&rsquo;s Talk!</h2>
                        {/* <p className="brand-text-grey fs-5 my-4">Ready to start your next project or have a few questions first? Contact us using the form below and we will get back to you as soon as possible!</p> */}
                        <p className="brand-text-grey fs-5 mt-4 mb-1">We&rsquo;re currently not taking on any new projects, but feel free to connect with us on social below!</p>
                    </div>
                    {/* <div className="row justify-content-center">
                        <div className="text-center">
                            <a className="btn btn-brand-secondary btn-lg px-4 disabled border-0" href="#" target="_blank" rel="noopener noreferrer">
                                Contact Us
                            </a>
                        </div>
                    </div> */}
                </div>
            </section>
        </Layout>
    );
}
