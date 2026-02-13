import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Force Urbania Rental Pune | 17 Seater Luxury Van",
  description: "Book Force Urbania 17 seater luxury van in Pune. Best rates, premium comfort, and professional drivers for outstation trips, corporate events, and weddings.",
  keywords: ["Force Urbania Rental Pune", "17 Seater Van Hire", "Luxury Bus Rental Pune", "Urbania on Rent", "Wedding Car Rental Pune"],
}

export default function UrbaniaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Urbania</h1>
          <p className="text-lg text-foreground/70">Premium Luxury Travel Experience</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden h-80">
              <Image
                src="/urbania-1.jpg"
                alt="Urbania Van - Front View"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-80">
              <Image
                src="/urbania-2.jpg"
                alt="Urbania Van - Side View"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-80">
              <Image
                src="/urbania-3.jpg"
                alt="Urbania Van - Doors Open"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-80">
              <Image
                src="/urbania-5.jpg"
                alt="Urbania Van - Parked View"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Specifications */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Specifications</h2>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground/70">Passenger Capacity</p>
                <p className="text-2xl font-bold text-accent">17 Passenger</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground/70">Vehicle Type</p>
                <p className="text-2xl font-bold text-primary">Premium Luxury SUV</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground/70">Transmission</p>
                <p className="text-2xl font-bold text-primary">Automatic</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground/70">Fuel Type</p>
                <p className="text-2xl font-bold text-primary">Diesel</p>
              </div>
            </div>
          </div>

          {/* Features & Luxuries */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Features & Luxuries</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Premium Leather Seating</p>
                  <p className="text-sm text-foreground/70">Luxurious and comfortable seating arrangement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Advanced Climate Control</p>
                  <p className="text-sm text-foreground/70">Individual temperature settings for comfort</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Entertainment System</p>
                  <p className="text-sm text-foreground/70">Premium audio and multimedia experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Advanced Safety Features</p>
                  <p className="text-sm text-foreground/70">Multiple airbags and stability control</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Panoramic Sunroof</p>
                  <p className="text-sm text-foreground/70">Enjoy scenic views during your journey</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">GPS Navigation</p>
                  <p className="text-sm text-foreground/70">Advanced navigation system for smooth travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-16 bg-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Urbania?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-foreground/80">
              The Urbania is the epitome of luxury travel. Perfect for executives, VIPs, and those seeking the ultimate
              comfort experience. With its spacious interior and premium amenities, every journey becomes a memorable
              experience.
            </p>
            <p className="text-foreground/80">
              Whether you're traveling for business or leisure, the Urbania ensures you arrive refreshed and relaxed.
              Our professional drivers and well-maintained vehicles guarantee a safe and smooth journey every time.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/#booking">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8 rounded-lg transition-colors">
              Book Urbania Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
