"use client"

import { MessageCircle, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="RajeshTours & Travels Logo" width={40} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Premium road trips across India with comfort and style.
            </p>
          </div>

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

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919028088631"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.instagram.com/rajesh_tours_and_travels_9360?igsh=MXg3a3FkZXFqYndoeQ=="
                className="hover:text-accent transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@urbania9360onrentinpune?si=F2sLGmkYsr6xuXA6"
                className="hover:text-accent transition"
              >
                <Youtube size={20} />
              </a>
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
