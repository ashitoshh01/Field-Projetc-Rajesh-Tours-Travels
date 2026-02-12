import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://rajeshtoursandtravels.com" // Replace with actual domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        // Add other pages if they exist, e.g., /about, /contact, etc.
        // Since everything seems to be on a single page currently (scrolling sections), we just include the root.
    ]
}
