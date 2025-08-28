/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        silenceDeprecations: ["legacy-js-api", "mixed-decls", "color-functions", "global-builtin", "import"],
        quietDeps: true
    }
};

module.exports = nextConfig;
