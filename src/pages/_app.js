import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* Pixel Code for https://app.tinyanalytics.io/ */}
            <Script src="https://app.tinyanalytics.io/pixel/iKK3di9WSWyeSwWO" />
            <Component {...pageProps} />
        </>
    );
}
