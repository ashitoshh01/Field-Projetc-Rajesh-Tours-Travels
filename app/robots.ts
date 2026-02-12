import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://rajeshtoursandtravels.com" // Replace with actual domain

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/", // Example of disallowed path
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
