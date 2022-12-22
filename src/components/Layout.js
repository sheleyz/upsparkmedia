import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320
};

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <main style={pageStyles}>
                <h1 style={headingStyles}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
