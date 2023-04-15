import React from "react";
import Head from "next/head";
import config from "../config";

const Seo = ({ title, description }) => {
    const siteTitle = config.title;
    const metaDescription = description || config.description;
    const siteUrl = config.siteUrl;

    return (
        <Head>
            <title>{`${title ? title : siteTitle}`}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={siteUrl + config.image} />
            <meta name="google-site-verification" content="14epdAhFBdX4Urq_zwN3viVK3332v8t33BztT95M0Ic" />
            <meta name="msvalidate.01" content="913751F24A1482E2603AE560D9749A01" />
            <meta property="og:title" content={`${title ? title : siteTitle}`} />
            <meta property="og:url" content={config.siteUrl} />
            <meta property="og:image" content={siteUrl + config.image} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={metaDescription} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={`${title ? title : siteTitle}`} />
            <meta name="twitter:url" content={config.siteUrl} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={siteUrl + config.image} />
            <link rel="shortcut icon" href="/favicon.png" />
            <link rel="preload" href="/fonts/Asap/Asap-VariableFont_wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" key="asapFont" />
        </Head>
    );
};

export default Seo;
