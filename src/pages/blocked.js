import * as React from "react";

// Components
import Seo from "../components/Seo";

const BlockedPage = () => {
    return (
        <div className="text-white d-flex justify-content-center align-items-center">
            <h1>Blocked</h1>
        </div>
    );
};

export default BlockedPage;

export const Head = () => (
    <>
        <Seo title="Blocked" />
    </>
);
