"use client"

import { useState, useEffect } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Family Trip",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "Amazing experience! The Urbania was so comfortable and the driver was very professional. Highly recommended for family trips!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Corporate Tour",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "Perfect for our corporate team outing. The service was impeccable and the vehicles were well-maintained. Will definitely book again!",
      rating: 5,
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Adventure Trip",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "The journey to Manali was unforgettable. Great hospitality and safe driving. RajeshTours made our trip truly special!",
      rating: 5,
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Wedding Tour",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "Exceptional service for our wedding tour! The Innova Crysta was spacious and luxurious. The entire team was courteous and helpful throughout.",
      rating: 5,
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Honeymoon Trip",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf0?w=400&h=400&fit=crop",
      text: "Our honeymoon was made special by RajeshTours. The Swift was perfect for exploring scenic routes. Highly professional and punctual!",
      rating: 5,
    },
    {
      id: 6,
      name: "Arjun Desai",
      role: "Business Travel",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      text: "Reliable and comfortable transportation for all my business trips. The drivers are experienced and the vehicles are always clean and well-maintained.",
      rating: 5,
    },
    {
      id: 7,
      name: "Meera Iyer",
      role: "Group Tour",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop",
      text: "Organized a group tour with 15 people and everything was perfect! The Urbania accommodated everyone comfortably. Excellent value for money!",
      rating: 5,
    },
    {
      id: 8,
      name: "Sanjay Verma",
      role: "Solo Adventure",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "Traveled solo across Rajasthan with RajeshTours. The driver was knowledgeable about local attractions and made the journey memorable.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 2500)
    }, 5500) // 2.5s transition + 3s pause

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-foreground/70">Real experiences from our happy customers</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes slideInFromLeft {
              from {
                opacity: 0;
                transform: translateX(-100%);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes slideOutToRight {
              from {
                opacity: 1;
                transform: translateX(0);
              }
              to {
                opacity: 0;
                transform: translateX(100%);
              }
            }

            .testimonial-enter {
              animation: slideInFromLeft 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }

            .testimonial-exit {
              animation: slideOutToRight 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
          `}</style>

          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length

              return (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-0 ${
                    isActive ? "testimonial-enter" : isPrev && isTransitioning ? "testimonial-exit" : "opacity-0"
                  }`}
                >
                  <div className="bg-card rounded-lg p-8 shadow-lg border border-border h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-primary">{testimonial.name}</h3>
                          <p className="text-sm text-foreground/70">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-accent text-lg">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
