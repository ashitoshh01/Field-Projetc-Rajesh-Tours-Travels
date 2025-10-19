import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function SuzukiSwiftPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Suzuki Swift</h1>
          <p className="text-lg text-foreground/70">Compact & Efficient City Travel</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/swift-1.jpg" alt="Suzuki Swift - Rural setting" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/swift-2.jpg" alt="Suzuki Swift - Temple backdrop" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/swift-3.jpg" alt="Suzuki Swift - Waterfront" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/swift-4.jpg" alt="Suzuki Swift - Front angle view" fill className="object-cover" />
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
                <p className="text-2xl font-bold text-accent">5 Passengers</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground/70">Vehicle Type</p>
                <p className="text-2xl font-bold text-primary">Compact Hatchback</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground/70">Transmission</p>
                <p className="text-2xl font-bold text-primary">Manual/Automatic</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground/70">Fuel Type</p>
                <p className="text-2xl font-bold text-primary">Petrol</p>
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
                  <p className="font-semibold text-primary">Agile Handling</p>
                  <p className="text-sm text-foreground/70">Perfect for navigating city traffic</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Fuel Efficient</p>
                  <p className="text-sm text-foreground/70">Excellent mileage for budget-conscious travelers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Modern Interior</p>
                  <p className="text-sm text-foreground/70">Contemporary design with comfort features</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Easy Parking</p>
                  <p className="text-sm text-foreground/70">Compact size for convenient parking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Air Conditioning</p>
                  <p className="text-sm text-foreground/70">Comfortable climate control system</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold text-primary">Safety Features</p>
                  <p className="text-sm text-foreground/70">ABS and multiple airbags for protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-16 bg-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Suzuki Swift?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-foreground/80">
              The Suzuki Swift is the ideal choice for city tours and short trips. Its compact size makes it perfect for
              navigating busy streets and finding parking easily. Despite its size, it offers surprising comfort and
              modern amenities.
            </p>
            <p className="text-foreground/80">
              With excellent fuel efficiency and low maintenance costs, the Swift is perfect for budget-conscious
              travelers. Whether you're exploring a new city or planning a quick getaway, the Swift delivers reliability
              and comfort.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/#booking">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8 rounded-lg transition-colors">
              Book Suzuki Swift Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
