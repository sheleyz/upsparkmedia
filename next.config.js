/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        silenceDeprecations: ["legacy-js-api", "color-functions", "global-builtin", "import", "if-function"],
        quietDeps: true
    }
};

module.exports = nextConfig;
