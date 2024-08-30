export default function robots() {
    return {
        rules: [
            {
                userAgent: ["Google-Extended", "Applebot-Extended", "ChatGPT-User", "GPTBot", "CCBot", "PerplexityBot", "anthropic-ai", "Claude-Web", "ClaudeBot"],
                disallow: "/"
            },
            {
                userAgent: "*",
                allow: "/",
                disallow: "/blocked/"
            }
        ],
        sitemap: "https://upsparkmedia.com/sitemap.xml"
    };
}
