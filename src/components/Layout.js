import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import "../index.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
