import * as React from "react";
import Layout from "../components/Layout";

// Images
import Laptop from "../images/laptop.jpg";

const IndexPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <div className="bg-brand-secondary py-5">
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
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>UpSpark Media - YouTube SEO + Web Design</title>;
