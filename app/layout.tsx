import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rajeshtoursandtravels.com"),
  title: {
    default: "Rajesh Tours & Travels | Premium Urbania & Innova Rentals in Pune",
    template: "%s | Rajesh Tours & Travels",
  },
  description:
    "Rajesh Tours & Travels offers luxury Force Urbania and Innova Crysta rentals in Pune for outstation trips, family vacations, corporate events, and weddings. Book your safe & comfortable journey today!",
  keywords: [
    "Rajesh Tours & Travels",
    "Luxury Car Rental Pune",
    "Force Urbania Rental Pune",
    "Innova Crysta Rental Pune",
    "Urbania on Rent in Pune",
    "Innova Crysta Hire Pune",
    "Pune to Shirdi Cab",
    "Pune to Mahabaleshwar Taxi",
    "Mumbai to Pune Cab",
    "Wedding Car Rental Pune",
    "Corporate Car Rental Pune",
    "Outstation Cabs Pune",
    "Premium Road Trips India",
    "Family Vacation Car Hire",
    "Tourist Vehicle India",
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
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    title: "Rajesh Tours & Travels | Premium Urbania & Innova Rentals in Pune",
    description: "Plan your dream road trip with our luxury fleet including Force Urbania and Innova Crysta. Affordable rates, professional drivers, and unmatched comfort.",
    url: "https://rajeshtoursandtravels.com",
    siteName: "Rajesh Tours & Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/urbania-on-scenic-highway-mountain-road.jpg",
        width: 1200,
        height: 630,
        alt: "Rajesh Tours & Travels Luxury Fleet - Urbania on Scenic Highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Tours & Travels | Luxury Car Rentals in Pune",
    description: "Travel in style with Force Urbania & Innova Crysta. Best rates for outstation trips and local tours in Pune.",
    images: ["/urbania-on-scenic-highway-mountain-road.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Rajesh Tours & Travels",
    "image": "https://rajeshtoursandtravels.com/urbania-on-scenic-highway-mountain-road.jpg",
    "description": "Premium Force Urbania and Innova Crysta rentals in Pune for outstation trips, family vacations, and corporate travel.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pune",
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "url": "https://rajeshtoursandtravels.com",
    "telephone": "+919028088631",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "₹₹"
  }

  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
