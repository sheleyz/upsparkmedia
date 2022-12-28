/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
    siteMetadata: {
        title: `UpSpark Media - YouTube SEO + Web Design`,
        siteUrl: `https://upsparkmedia.com/`,
        description: `We optimize your website or YouTube channel to increase your visibility and potential for growth online.`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "UpSpark Media - YouTube SEO + Web Design",
                short_name: "UpSpark Media",
                start_url: "/",
                background_color: "#003b60",
                theme_color: "#003b60",
                icon: "src/images/favicon.png"
            }
        }
    ]
};
