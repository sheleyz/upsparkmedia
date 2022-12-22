/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
    siteMetadata: {
        title: `UpSpark Media`,
        siteUrl: `https://upsparkmedia.com/`
    },
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        }
    ]
};
