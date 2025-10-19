"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Car {
  id: string
  name: string
  description: string
  passengers: number
  highlights: string[]
  image: string
  preference: number
}

const cars: Car[] = [
  {
    id: "urbania",
    name: "Urbania",
    description: "Premium luxury vehicle for ultimate comfort and style",
    passengers: 17,
    highlights: [
      "Spacious luxury interior",
      "Premium seating arrangement",
      "Advanced climate control",
      "Entertainment system",
    ],
    image: "/urbania-4.jpg",
    preference: 1,
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    description: "Versatile and reliable for family and group travel",
    passengers: 7,
    highlights: [
      "Seats up to 7 passengers",
      "Excellent fuel efficiency",
      "Smooth ride quality",
      "Spacious cargo area",
    ],
    image: "/crysta.jpg",
    preference: 2,
  },
  {
    id: "suzuki-swift",
    name: "Suzuki Swift",
    description: "Compact and efficient for city tours and short trips",
    passengers: 4,
    highlights: ["Agile city handling", "Fuel-efficient performance", "Modern interior design", "Easy parking"],
    image: "/swift-4.jpg",
    preference: 3,
  },
]

export default function CarCollection() {
  const sortedCars = [...cars].sort((a, b) => a.preference - b.preference)

  return (
    <section id="cars" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Car Collection</h2>
          <p className="text-lg text-foreground/70">Premium vehicles for your perfect journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sortedCars.map((car) => (
            <Link key={car.id} href={`/cars/${car.id}`}>
              <div className="group h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-card hover:scale-105 transform">
                {/* Car Image */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {car.preference === 1 && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Premium Choice
                    </div>
                  )}
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{car.name}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{car.description}</p>

                  {/* Quick Stats */}
                  <div className="mb-4 pb-4 border-b border-border">
                    <p className="text-sm font-semibold text-primary">
                      Capacity: <span className="text-accent">{car.passengers} Passengers</span>
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {car.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-bold text-lg">•</span>
                        <p className="text-foreground/80 text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
