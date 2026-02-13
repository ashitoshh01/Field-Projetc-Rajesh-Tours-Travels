"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Star } from "lucide-react"

const WHATSAPP_NUMBER = "919028088631"

const packages = [
  {
    id: 0,
    destination: "Panch Teerth Darshan Yatra",
    duration: "5 Days / 4 Nights",
    description: "Pune → Ujjain – Khatu Shyam – Salasar Balaji – Pushkar – Sawariya Seth",
    image: "/divine-india-pilgrimage.jpg",
    details:
      "Embark on a soul-cleansing 5-day spiritual odyssey starting from Pune. This comprehensive pilgrimage covers the sacred Mahakal in Ujjain, the divine Khatu Shyam Ji, Salasar Balaji, the holy Pushkar Brahma Temple, and Sanwariya Seth. The package includes comfortable travel, 4 nights of hotel accommodation, daily morning breakfast, and guided Darshan assistance for a hassle-free experience.",
    highlight: true,
  },
  {
    id: 1,
    destination: "Pune to Ujjain",
    duration: "3 Days / 2 Nights",
    description: "Pune → Maheshwar – Omkareshwar – Kal Bhairav Temple – Ujjain",
    image: "/ujjain-mahakal.jpg",
    details:
      "Experience divine blessings with our Pune to Ujjain pilgrimage package. Visit the sacred Mahakaleshwar Jyotirlinga, one of the twelve Jyotirlingas in India. Witness the famous Bhasma Aarti at dawn, explore the ancient Kshipra River ghats, and seek blessings at Ram Ghat. The package includes comfortable AC travel, hotel accommodation, breakfast, and guided temple visits for a spiritually enriching experience.",
    highlight: true,
  },
  {
    id: 2,
    destination: "Pune to Kolhapur - Admapur Tour",
    duration: "1 Day",
    description: "Spiritual journey to Shri Sant Balumama and Mahalaxmi",
    image: "/ashtavinayak.jpg",
    details:
      "Join our dedicated one-day spiritual excursion from Pune to Kolhapur. We offer convenient night departures with multiple pickups across Pune (Yerawada, Deccan, etc.). Seek blessings at Shri Kshetra Balumama in Admapur, visit the Metage holy site, Lord Jyotiba, and conclude with the divine Mahalaxmi Temple in Kolhapur.",
  },
  {
    id: 3,
    destination: "5 Jyotirlinga All-Inclusive Package",
    duration: "4 Days",
    description: "Complete pilgrimage covering all five sacred Jyotirlinga temples",
    image: "/dham-yatra.jpg",
    details:
      "A complete 5-Jyotirlinga pilgrimage in 4 days. Reverently visit Bhimashankar, Trimbakeshwar, Ghrushneshwar, Parali Vaijanath, and Aunda Nagnath. We ensure a premium experience with Force Urbania travel, all-inclusive meals, and comfortable lodging, allowing you to focus entirely on your prayers.",
  },
  {
    id: 4,
    destination: "Gujarat Heritage Tour",
    duration: "3 Days",
    description: "Explore ancient forts and palaces of Gujarat",
    image: "/gujarat.jpg",
    details:
      "Step back in time with our Gujarat Heritage Tour. Wander through centuries-old forts, majestic palaces, and vibrant cultural landmarks. This 3-day journey offers a deep dive into Gujarat's royal history and architectural splendor, accompanied by expert guides who bring the stories of the past to life.",
  },
  {
    id: 5,
    destination: "Kerala Backwaters Cruise",
    duration: "4 Days",
    description: "Serene backwater experience with tropical beauty",
    image: "/kerala.jpg",
    details:
      "Drift through the tranquil emerald waters of 'God's Own Country'. Our Kerala package features a traditional houseboat cruise along palm-lined canals, serving authentic Keralan cuisine. It's the ultimate 4-day escape for nature lovers seeking peace, greenery, and the soothing rhythm of the backwaters.",
  },
  {
    id: 6,
    destination: "Tirupati Balaji Pilgrimage",
    duration: "2 Days",
    description: "Visit the sacred Tirupati Balaji Temple",
    image: "/tirupati-balaji.jpg",
    details:
      "Fulfil your vow with a visit to the sacred Tirumala hills. Our 2-day Tirupati Balaji package ensures a smooth spiritual experience with arranged accommodation and meals. Witness the grandeur of Lord Venkateswara and soak in the divine atmosphere of one of the world's richest and most holy shrines.",
  },
  {
    id: 7,
    destination: "Shimla & Manali Hill Stations",
    duration: "5 Days",
    description: "Experience snow-capped mountains and scenic beauty",
    image: "/shimla-manali.jpg",
    details:
      "Escape to the majestic Himalayas with our Shimla & Manali tour. Witness snow-capped peaks, rushing rivers, and colonial-era charm. This 5-day adventure includes sightseeing in Mall Road, Solang Valley, and Rohtang Pass, paired with cozy hill-station stays and opportunities for thrilling mountain activities.",
  },
  {
    id: 8,
    destination: "Ratnagiri & Ganpatipule",
    duration: "2 Days",
    description: "Coastal temple pilgrimage and beach retreat",
    image: "/ratnagiri-ganpatipule.jpg",
    details:
      "Experience the best of Konkan with our Ratnagiri & Ganpatipule tour. Pay homage at the ancient Swayambhu Ganpati Temple on the beach, relax on pristine white sands, and savor authentic Konkani seafood. A perfect 2-day blend of spirituality and coastal serenity.",
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
                ? `border-yellow-500 shadow-[0_0_40px_-5px_rgba(234,179,8,0.6)] z-10 md:col-span-2 lg:col-span-1 ring-4 ring-yellow-500/20 ${pkg.id === 0 ? 'animate-heartbeat-1' : 'animate-heartbeat-2'}`
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
