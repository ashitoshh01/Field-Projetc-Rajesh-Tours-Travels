import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function InnovaCrystaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Innova Crysta</h1>
          <p className="text-lg text-foreground/70">Versatile Family & Group Travel</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden h-80">
              <Image
                src="/crysta-2.jpg"
                alt="Innova Crysta front view"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-80">
              <Image
                src="/crysta-3.jpg"
                alt="Innova Crysta in showroom"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-80">
              <Image
                src="/crysta-4.jpg"
                alt="Innova Crysta headlight detail"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
              <div className="rounded-lg overflow-hidden h-80">
              <Image
                src="/crysta-1.jpg"
                alt="Innova Crysta in scenic landscape"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
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
                <p className="text-2xl font-bold text-accent">13 Passengers</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground/70">Vehicle Type</p>
                <p className="text-2xl font-bold text-primary">Premium MPV</p>
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
                  <p className="font-semibold text-primary">Spacious Seating</p>
                  <p className="text-sm text-foreground/70">Comfortable seating for up to 13 passengers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Excellent Fuel Efficiency</p>
                  <p className="text-sm text-foreground/70">Cost-effective travel for long distances</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Smooth Ride Quality</p>
                  <p className="text-sm text-foreground/70">Advanced suspension for comfortable journey</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Large Cargo Area</p>
                  <p className="text-sm text-foreground/70">Ample space for luggage and belongings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Climate Control</p>
                  <p className="text-sm text-foreground/70">Dual-zone air conditioning for comfort</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Safety Features</p>
                  <p className="text-sm text-foreground/70">ABS, multiple airbags, and stability control</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-16 bg-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Innova Crysta?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-foreground/80">
              The Innova Crysta is the perfect choice for families and group travel. With seating for up to 13
              passengers, it's ideal for family vacations, corporate outings, and group tours. The spacious interior
              ensures everyone travels comfortably.
            </p>
            <p className="text-foreground/80">
              Known for its reliability and fuel efficiency, the Innova Crysta is perfect for long-distance journeys.
              Whether it's a weekend getaway or an extended tour, this vehicle delivers comfort, safety, and peace of
              mind.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/#booking">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8 rounded-lg transition-colors">
              Book Innova Crysta Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
