"use client"

import { MessageCircle, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info - Full width on mobile */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="RajeshTours & Travels Logo" width={80} height={80} className="h-16 md:h-10 w-auto" />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Premium road trips across India with comfort and style.
            </p>
          </div>

          {/* Quick Links and Contact - Side by side on mobile */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-accent transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-accent transition">
                    Book Trip
                  </a>
                </li>
                <li>
                  <a href="/cars/urbania" className="hover:text-accent transition">
                    Our Collection
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+91 90280 88631</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>raj.k6157@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Pune, India</span>
                </li>
              </ul>
            </div>
          </div>


        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © {currentYear} RajeshTours & Travels | Designed with ❤️ for great journeys
          </p>
        </div>
      </div>
    </footer>
  )
}
