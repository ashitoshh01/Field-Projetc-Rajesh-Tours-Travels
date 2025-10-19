import Header from "@/components/header"
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
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Hero />
        <About />
        <TourPackages />
        <BookingForm />
        <CarCollection />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </div>
      <SocialIcons />
      <Footer />
    </main>
  )
}
