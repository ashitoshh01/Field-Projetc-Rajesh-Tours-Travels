"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    image: "/konkan-malvan.jpg",
    title: "Relax on Coastal Beaches",
  },
  {
    image: "/ashtavinayak.jpg",
    title: "Experience Sacred Temples",
  },
  {
    image: "/sikkim.jpg",
    title: "Explore Mountain Wonders",
  },
  {
    image: "/rajasthan.jpg",
    title: "Discover Rajasthan's Royal Heritage",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToBooking = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="h-[85vh] pt-0 pb-4 px-2 md:px-6 lg:px-8 w-full max-w-[1400px] mx-auto flex flex-col justify-end">
      <div className="relative flex-1 w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
        {/* Carousel */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance drop-shadow-md">
            Experience Premium Road Trips <br className="hidden md:block" /> with RajeshTours & Travels
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-balance drop-shadow-sm font-light">
            Discover India's most scenic routes in ultimate comfort and style
          </p>
          <Button
            onClick={scrollToBooking}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl border-none"
          >
            Book Your Ride Now
          </Button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-3 md:p-4 rounded-full transition backdrop-blur-sm"
        >
          <ChevronLeft size={24} className="md:w-8 md:h-8" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-3 md:p-4 rounded-full transition backdrop-blur-sm"
        >
          <ChevronRight size={24} className="md:w-8 md:h-8" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
