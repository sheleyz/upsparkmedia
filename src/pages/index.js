import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
    return (
        <Layout pageTitle="UpSpark Media">
            <p>Hello World</p>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>UpSpark Media</title>;
