"use client"

import type React from "react"

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

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-foreground/70">Real experiences from our happy customers</p>
        </div>

        <div className="relative w-full mask-linear-fade">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
              width: max-content;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            .mask-linear-fade {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            .testimonial-card:hover { 
              transform: translateY(-5px);
              box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            }
          `}</style>

          <div className="flex gap-6 animate-scroll py-4">
            {/* First set of cards */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`original-${testimonial.id}`} testimonial={testimonial} />
            ))}
            {/* Duplicate set for infinite scroll effect */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`duplicate1-${testimonial.id}`} testimonial={testimonial} />
            ))}
            {/* Triplicate set for wider screens/seamless looping logic safety */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`duplicate2-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="testimonial-card w-[350px] md:w-[400px] flex-shrink-0 bg-card p-6 rounded-lg shadow-md border border-border transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary/10"
        />
        <div>
          <h3 className="font-bold text-lg text-primary">{testimonial.name}</h3>
          <p className="text-sm text-foreground/70">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-accent text-sm">
            ★
          </span>
        ))}
      </div>
      <p className="text-foreground/80 text-sm leading-relaxed line-clamp-4">{testimonial.text}</p>
    </div>
  )
}
