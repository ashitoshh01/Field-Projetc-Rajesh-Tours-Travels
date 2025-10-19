"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="RajeshTours & Travels" width={40} height={40} className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition">
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition"
              >
                About
              </button>

              <button onClick={() => scrollToSection("cars")} className="text-foreground hover:text-primary transition">
                Our Collection
              </button>

              <button
                onClick={() => scrollToSection("packages")}
                className="text-foreground hover:text-primary transition"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-foreground hover:text-primary transition"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition"
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("packages")}
              className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg mx-2 mb-4 p-6 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-3 items-center">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground hover:text-primary transition py-2 w-full text-center"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground hover:text-primary transition py-2 w-full text-center"
                >
                  About
                </button>

                <button
                  onClick={() => scrollToSection("cars")}
                  className="text-foreground hover:text-primary transition py-2 w-full text-center"
                >
                  Our Collection
                </button>

                <button
                  onClick={() => scrollToSection("packages")}
                  className="text-foreground hover:text-primary transition py-2 w-full text-center"
                >
                  Packages
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-foreground hover:text-primary transition py-2 w-full text-center"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-primary transition py-2 w-full text-center"
                >
                  Contact
                </button>
                <div className="w-full pt-2 border-t border-white/20">
                  <Button
                    onClick={() => scrollToSection("packages")}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full mt-3"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
