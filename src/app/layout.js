import "../index.scss";
import localFont from "next/font/local";
import Script from "next/script";

const asap = localFont({
    src: "./fonts/Asap/Asap-VariableFont_wght.ttf",
    display: "swap",
    variable: "--font-asap"
});

export const metadata = {
    title: {
        template: "%s | UpSpark Media - Web Design and YouTube SEO",
        default: "UpSpark Media - Web Design and YouTube SEO"
    },
    description: "We optimize your website or YouTube channel to increase your visibility and potential for growth online.",
    metadataBase: new URL("https://upsparkmedia.com"),

    openGraph: {
        title: {
            template: "%s | UpSpark Media - Web Design and YouTube SEO",
            default: "UpSpark Media - Web Design and YouTube SEO"
        },
        description: "We optimize your website or YouTube channel to increase your visibility and potential for growth online.",
        url: "/",
        siteName: "UpSpark Media - Web Design and YouTube SEO",
        locale: "en_US",
        type: "website"
    },

    twitter: {
        card: "summary",
        title: {
            template: "%s | UpSpark Media - Web Design and YouTube SEO",
            default: "UpSpark Media - Web Design and YouTube SEO"
        },
        description: "We optimize your website or YouTube channel to increase your visibility and potential for growth online."
    },

    verification: {
        google: "14epdAhFBdX4Urq_zwN3viVK3332v8t33BztT95M0Ic",
        other: {
            "msvalidate.01": "913751F24A1482E2603AE560D9749A01"
        }
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-US">
            <body className={asap.variable}>{children}</body>
            {/* Pixel Code for https://app.tinyanalytics.io/ */}
            <Script src="https://app.tinyanalytics.io/pixel/iKK3di9WSWyeSwWO" />
        </html>
    );
}
