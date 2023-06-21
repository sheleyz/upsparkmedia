import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Script from "next/script";
import ReactDOM from "react-dom";

export const metadata = {
    title: "UpSpark Media - Web Design and YouTube SEO",
    description: "We optimize your website or YouTube channel to increase your visibility and potential for growth online.",
    image: "https://upsparkmedia.com/favicon.png",
    themeColor: "#003b60",
    metadataBase: new URL("https://upsparkmedia.com"),

    openGraph: {
        title: "UpSpark Media - Web Design and YouTube SEO",
        description: "We optimize your website or YouTube channel to increase your visibility and potential for growth online.",
        url: "https://upsparkmedia.com",
        siteName: "UpSpark Media - Web Design and YouTube SEO",
        images: ["https://upsparkmedia.com/favicon.png"],
        locale: "en_US",
        type: "website"
    },

    twitter: {
        card: "summary",
        title: "UpSpark Media - Web Design and YouTube SEO",
        description: "We optimize your website or YouTube channel to increase your visibility and potential for growth online.",
        images: ["https://upsparkmedia.com/favicon.png"],
        url: "https://upsparkmedia.com"
    },

    icons: {
        icon: "https://upsparkmedia.com/favicon.png",
        shortcut: "https://upsparkmedia.com/favicon.png"
    },

    verification: {
        google: "14epdAhFBdX4Urq_zwN3viVK3332v8t33BztT95M0Ic",
        other: {
            "msvalidate.01": "913751F24A1482E2603AE560D9749A01"
        }
    }
};

export default function RootLayout({ children }) {
    ReactDOM.preload("https://upsparkmedia.com/fonts/Asap/Asap-VariableFont_wght.ttf", { as: "font", type: "font/ttf", crossOrigin: "anonymous", key: "asapFont" });
    return (
        <html lang="en-US">
            <body>{children}</body>
            {/* Pixel Code for https://app.tinyanalytics.io/ */}
            <Script src="https://app.tinyanalytics.io/pixel/iKK3di9WSWyeSwWO" />
        </html>
    );
}
