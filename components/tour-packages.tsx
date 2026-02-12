"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Star } from "lucide-react"

const WHATSAPP_NUMBER = "919028088631"

const packages = [
  {
    id: 0,
    destination: "Divine India Pilgrimage (New)",
    duration: "5 Days / 4 Nights",
    description: "Pune → Ujjain – Khatu Shyam – Salasar Balaji – Pushkar – Sanwariya Seth",
    image: "/divine-india-pilgrimage.jpg",
    details:
      "Start the new year with a divine spiritual journey covering some of the most sacred temples in India. This 5-day pilgrimage departs from Pune and includes travel by comfortable vehicle, morning breakfast, 4 nights hotel stay, and Darshan assistance. Visit Ujjain (Mahakal), Khatu Shyam Ji, Salasar Balaji, Pushkar Brahma Temple, and Sanwariya Seth.",
    highlight: true,
  },
  {
    id: 1,
    destination: "Three Jyotirlinga Darshan",
    duration: "3 Days",
    description: "Sacred pilgrimage to three holy Jyotirlinga temples",
    image: "/ujjain-omkareshwar.jpg",
    details:
      "Experience the spiritual journey to three of India's most sacred Jyotirlinga temples. Visit Omkareshwar, Mahakal in Ujjain, and Ghrushneshwar. Includes accommodation, breakfast (Misal, Poha, Dosa), and guided tours to Ramghat Kshipra Aarti.",
  },
  {
    id: 2,
    destination: "Pune to Kolhapur - Admapur Tour",
    duration: "1 Day",
    description: "Spiritual journey to Shri Sant Balumama and Mahalaxmi",
    image: "/ashtavinayak.jpg",
    details:
      "A one-day spiritual tour departing August 22, 2025 at 10:00 PM from multiple pickup points including Yerawada, Deccan Corner, Paud Phata, Karve Nagar, and Warje Bridge. Visit Shri Kshetra Balumama, Metage, Jyotiba, and Mahalaxmi Temple in Kolhapur.",
  },
  {
    id: 3,
    destination: "5 Jyotirlinga All-Inclusive Package",
    duration: "4 Days",
    description: "Complete pilgrimage covering all five sacred Jyotirlinga temples",
    image: "/dham-yatra.jpg",
    details:
      "An all-inclusive 4-day pilgrimage package covering Bhimashankar, Trimbakeshwar, Ghrushneshwar, Parali Vaijanath, and Aunda Nagnath. Includes accommodation, meals, and vehicle rental with Force Urbania for a comfortable journey.",
  },
  {
    id: 4,
    destination: "Gujarat Heritage Tour",
    duration: "3 Days",
    description: "Explore ancient forts and palaces of Gujarat",
    image: "/gujarat.jpg",
    details:
      "Discover the architectural marvels of Gujarat including ancient fort structures, historical palaces, and cultural heritage sites. Experience the rich history and traditions of the region with guided tours and local insights.",
  },
  {
    id: 5,
    destination: "Kerala Backwaters Cruise",
    duration: "4 Days",
    description: "Serene backwater experience with tropical beauty",
    image: "/kerala.jpg",
    details:
      "Enjoy a peaceful journey through Kerala's scenic backwaters. Experience traditional houseboat cruises, palm-fringed waterways, and authentic Kerala cuisine. Perfect for relaxation and nature lovers seeking tranquility.",
  },
  {
    id: 6,
    destination: "Tirupati Balaji Pilgrimage",
    duration: "2 Days",
    description: "Visit the sacred Tirupati Balaji Temple",
    image: "/tirupati-balaji.jpg",
    details:
      "A spiritual journey to one of India's most visited temples. Experience the divine atmosphere, participate in rituals, and receive blessings at the magnificent Tirupati Balaji Temple with comfortable accommodation and meals.",
  },
  {
    id: 7,
    destination: "Shimla & Manali Hill Stations",
    duration: "5 Days",
    description: "Experience snow-capped mountains and scenic beauty",
    image: "/shimla-manali.jpg",
    details:
      "Explore the breathtaking Himalayan landscapes of Shimla and Manali. Visit snow-covered peaks, pristine rivers, and charming hill towns. Includes adventure activities, local sightseeing, and comfortable stays in hill stations.",
  },
  {
    id: 8,
    destination: "Goa Beach Paradise",
    duration: "3 Days",
    description: "Tropical beaches and coastal relaxation",
    image: "/goa.jpg",
    details:
      "Unwind on Goa's beautiful beaches with turquoise waters and palm trees. Enjoy water sports, beach parties, local cuisine, and cultural experiences. Perfect for beach lovers and those seeking a tropical getaway.",
  },
  {
    id: 9,
    destination: "Ratnagiri & Ganpatipule",
    duration: "2 Days",
    description: "Coastal temple pilgrimage and beach retreat",
    image: "/ratnagiri-ganpatipule.jpg",
    details:
      "Visit the sacred Ganpatipule Temple on the Konkan coast. Combine spiritual pilgrimage with beach relaxation. Explore the coastal beauty, enjoy fresh seafood, and experience the peaceful atmosphere of this hidden gem.",
  },
]

export default function TourPackages() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const handleBookNow = (pkg: (typeof packages)[0]) => {
    const message = `Hi! I'm interested in the ${pkg.destination} tour package (${pkg.duration}). Please provide more details.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="packages" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tour Packages</h2>
          <p className="text-lg text-foreground/70">Explore our curated spiritual and adventure tours</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`bg-card rounded-lg overflow-hidden border transition-all duration-300 relative flex flex-col ${pkg.highlight
                ? "border-yellow-500 shadow-[0_0_40px_-5px_rgba(234,179,8,0.6)] z-10 md:col-span-2 lg:col-span-1 ring-4 ring-yellow-500/20 animate-heartbeat"
                : "border-border shadow-lg hover:shadow-xl"
                }`}
            >
              {pkg.highlight && (
                <>
                  <div className="absolute top-4 right-4 z-20 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse flex items-center gap-1 shadow-lg shadow-yellow-500/50">
                    <Star size={12} fill="currentColor" /> NEW
                  </div>
                  {/* Subtle shine animation */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-tr from-yellow-500/10 via-white/5 to-amber-500/10 pointer-events-none" />
                </>
              )}
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.destination}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {pkg.highlight && <div className="absolute inset-0 bg-yellow-500/10 pointer-events-none mix-blend-overlay" />}
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 flex flex-col flex-1">
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-2 ${pkg.highlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600"
                      : "text-primary"
                      }`}
                  >
                    {pkg.destination}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3 font-medium">{pkg.duration}</p>
                  <p className="text-foreground/70 mb-4 line-clamp-3">{pkg.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedId(expandedId === pkg.id ? null : pkg.id)}
                      className={`flex items-center gap-2 font-semibold transition ${pkg.highlight ? "text-yellow-600 hover:text-yellow-700" : "text-accent hover:text-accent/80"
                        }`}
                    >
                      Read More
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${expandedId === pkg.id ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${expandedId === pkg.id ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`p-3 rounded-lg border ${pkg.highlight ? "bg-yellow-50/50 border-yellow-200" : "bg-accent/10 border-accent/20"
                            }`}
                        >
                          <p className="text-sm text-foreground/80">{pkg.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <Button
                    onClick={() => handleBookNow(pkg)}
                    className={`w-full rounded-full font-bold py-6 transition-all duration-300 ${pkg.highlight
                      ? "bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 border-none"
                      : "bg-accent hover:bg-accent/90 text-accent-foreground"
                      }`}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
