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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-white/95 backdrop-blur-md backdrop-saturate-150 border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-full transition-all duration-300">
          <div className="px-3 sm:px-5 lg:px-6">
            <div className="flex justify-between items-center h-14">
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
              </nav>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection("packages")}
                className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
              >
                Book Now
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[70] md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Image src="/logo.png" alt="RajeshTours & Travels" width={40} height={40} className="h-10 w-auto" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col gap-2 px-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary hover:bg-gray-50 transition py-3 px-4 rounded-lg font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary hover:bg-gray-50 transition py-3 px-4 rounded-lg font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("cars")}
                className="text-left text-foreground hover:text-primary hover:bg-gray-50 transition py-3 px-4 rounded-lg font-medium"
              >
                Our Collection
              </button>
              <button
                onClick={() => scrollToSection("packages")}
                className="text-left text-foreground hover:text-primary hover:bg-gray-50 transition py-3 px-4 rounded-lg font-medium"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-foreground hover:text-primary hover:bg-gray-50 transition py-3 px-4 rounded-lg font-medium"
              >
                Gallery
              </button>
            </div>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <Button
              onClick={() => scrollToSection("packages")}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-base font-semibold"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
