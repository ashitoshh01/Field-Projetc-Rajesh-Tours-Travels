import Header from "@/components/header"
import Script from "next/script"
import Hero from "@/components/hero"
import About from "@/components/about"
import TourPackages from "@/components/tour-packages"
import BookingForm from "@/components/booking-form"
import CarCollection from "@/components/car-collection"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import SocialIcons from "@/components/social-icons"
import Footer from "@/components/footer"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Rajesh Tours & Travels",
    image: "https://rajeshtoursandtravels.com/og-image.jpg",
    "@id": "https://rajeshtoursandtravels.com",
    url: "https://rajeshtoursandtravels.com",
    telephone: "+919876543210", // Replace with real number
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road", // Replace with real address
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "123456",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.5937, // Replace with real coordinates
      longitude: 78.9629,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/rajeshtours", // Replace with real social links
      "https://www.instagram.com/rajeshtours",
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <div className="pt-20">
        <Hero />
        <About />
        <TourPackages />
        <BookingForm />
        <CarCollection />
        <Gallery />
        <Testimonials />
      </div>
      <SocialIcons />
      <Footer />
    </main>
  )
}
