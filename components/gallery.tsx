"use client"

const trips = [
  {
    id: 1,
    title: "Pune to Manali Adventure",
    image: "/mountain-road-manali-scenic-landscape.jpg",
    description: "Experience the breathtaking journey through the Himalayas",
  },
  {
    id: 2,
    title: "Goa Beach Getaway",
    image: "/goa-beach-sunset-coastal-road.jpg",
    description: "Relax and unwind at India's most beautiful beaches",
  },
  {
    id: 3,
    title: "Corporate Tour to Mumbai",
    image: "/mumbai-city-skyline-business-district.jpg",
    description: "Professional travel for corporate groups and teams",
  },
  {
    id: 4,
    title: "Family Retreat in Lonavala",
    image: "/lonavala-hills-family-vacation-scenic.jpg",
    description: "Perfect getaway for families with kids",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Memorable Journeys So Far</h2>
          <p className="text-lg text-foreground/70">Explore some of our most popular trips</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={trip.image || "/placeholder.svg"}
                  alt={trip.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-primary mb-2">{trip.title}</h3>
                <p className="text-foreground/70 text-sm">{trip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
