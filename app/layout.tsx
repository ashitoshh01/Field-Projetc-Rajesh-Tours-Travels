import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://rajeshtoursandtravels.com"), // Replace with actual domain if known, or use a placeholder
  title: {
    default: "Rajesh Tours & Travels | Premium Urbania & Innova Rentals in India",
    template: "%s | Rajesh Tours & Travels",
  },
  description:
    "Experience luxury road trips with Rajesh Tours & Travels. We offer premium Force Urbania and Innova Crysta rentals for family vacations, corporate trips, and weddings across India. Book your comfortable & safe journey today!",
  keywords: [
    "Rajesh Tours & Travels",
    "Luxury Car Rental India",
    "Force Urbania Rental",
    "Innova Crysta Rental",
    "Premium Road Trips",
    "Family Vacation Car Hire",
    "Corporate Travel Solutions",
    "Wedding Car Rental",
    "Tourist Vehicle India",
    "Comfortable Road Travel",
    "Urbania for Rent",
    "Innova Crysta Hire"
  ],
  authors: [{ name: "Rajesh Tours & Travels" }],
  creator: "Rajesh Tours & Travels",
  publisher: "Rajesh Tours & Travels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  openGraph: {
    title: "Rajesh Tours & Travels | Premium Urbania & Innova Rentals",
    description: "Plan your dream road trip with our luxury fleet including Force Urbania and Innova Crysta. Affordable rates, professional drivers, and unmatched comfort.",
    url: "https://rajeshtoursandtravels.com",
    siteName: "Rajesh Tours & Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists or is handled
        width: 1200,
        height: 630,
        alt: "Rajesh Tours & Travels Luxury Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Tours & Travels | Luxury Car Rentals",
    description: "Travel in style with Force Urbania & Innova Crysta. Best rates for outstation trips and local tours.",
    images: ["/twitter-image.jpg"], // Ensure this image exists or is handled
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
