"use client"

import { Instagram, Youtube, MessageCircle } from "lucide-react"

export default function SocialIcons() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/rajesh_tours_and_travels_9360?igsh=MXg3a3FkZXFqYndoeQ%3D%3D",
      label: "Instagram",
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@urbania9360onrentinpune",
      label: "YouTube",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919028088631",
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
    },
  ]

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-40">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`w-14 h-14 rounded-full ${social.color} flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95`}
            title={social.label}
          >
            <Icon size={24} />
          </a>
        )
      })}
    </div>
  )
}
