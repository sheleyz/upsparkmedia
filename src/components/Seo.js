import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Seo = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="google-site-verification" content="14epdAhFBdX4Urq_zwN3viVK3332v8t33BztT95M0Ic" />
            <meta name="msvalidate.01" content="913751F24A1482E2603AE560D9749A01" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={seo.description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            {children}
            {/* Pixel Code for https://app.tinyanalytics.io/ */}
            <script defer src="https://app.tinyanalytics.io/pixel/iKK3di9WSWyeSwWO"></script>
        </>
    );
};

export default Seo;
