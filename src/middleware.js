import { NextResponse } from "next/server";

// The country to block from accessing the secret page
const BLOCKED_COUNTRIES = ["CN", "RU", "IN", "TR", "TW", "HK", "MO", "BR", "MY", "ID", "UA"];

// Trigger this middleware to run on the home route
export const config = {
    matcher: "/"
};

export function middleware(request) {
    // Extract country. Default to US if not found.
    const country = (request.geo && request.geo.country) || "US";

    console.log(`Visitor from ${country}`);

    // Specify the correct route based on the requests location
    if (BLOCKED_COUNTRIES.includes(country)) {
        request.nextUrl.pathname = "/blocked";
    } else {
        request.nextUrl.pathname = "/";
    }

    // Rewrite to URL
    return NextResponse.rewrite(request.nextUrl);
}
