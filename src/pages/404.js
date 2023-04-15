import * as React from "react";

// Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
    return (
        <Layout>
            <Seo title="Not found" description="Page not found." />
            <div className="py-5 hero">
                <div className="container px-4 px-md-5 d-flex justify-content-center">
                    <div className="row">
                        <div className="my-5">
                            <h1 className="display-5 fw-bold text-white mb-2">Page not found</h1>
                            <p className="fw-normal text-grey mb-4 fs-5">Sorry 😔, we couldn’t find what you were looking for.</p>
                            <div className="d-flex">
                                <a className="btn btn-outline-brand-primary btn-lg px-4" href="/">
                                    Go home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
