import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="text-white hero py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-7 col-xl-6">
                            <div className="my-5 text-center text-lg-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">Page not found</h1>
                                <p className="lead fw-normal text-grey mb-4">Sorry 😔, we couldn’t find what you were looking for.</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
                                    <a className="btn btn-outline-brand-primary btn-lg px-4" href="/">
                                        Go home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => (
    <>
        <title>Not found</title>
        <meta name="description" content="Page not found." />
        {/* Pixel Code for https://app.tinyanalytics.io/ */}
        <script defer src="https://app.tinyanalytics.io/pixel/iKK3di9WSWyeSwWO"></script>
    </>
);
