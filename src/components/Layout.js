import "bootstrap/dist/css/bootstrap.min.css"
import * as React from "react";
import { Link } from "gatsby";
import "../index.scss"

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
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
