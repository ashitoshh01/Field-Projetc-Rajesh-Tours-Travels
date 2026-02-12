"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, MapPin, Calendar, Car, Users, MessageSquare, Send } from "lucide-react"

const WHATSAPP_NUMBER = "+919028088631"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    pickupLocation: "",
    destination: "",
    date: "",
    carPreference: "Urbania",
    passengers: "",
    notes: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required"
    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = "Pickup location is required"
    if (!formData.destination.trim()) newErrors.destination = "Destination is required"
    if (!formData.date) newErrors.date = "Date is required"
    if (formData.carPreference === "Urbania" && !formData.passengers) {
      newErrors.passengers = "Number of passengers is required for Urbania"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const message = `RajeshTours & Travels - New Booking Inquiry 🚗

Name: ${formData.fullName}
Trip: ${formData.pickupLocation} ➝ ${formData.destination}
Date: ${formData.date}
Car: ${formData.carPreference}
${formData.carPreference === "Urbania" ? `Passengers: ${formData.passengers}` : ""}
Notes: ${formData.notes || "None"}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      fullName: "",
      pickupLocation: "",
      destination: "",
      date: "",
      carPreference: "Urbania",
      passengers: "",
      notes: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Plan Your Next Trip</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready for an adventure? Fill in your details below and we'll get back to you instantly via WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-border/50 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-background/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="e.g., Akash Pawar"
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
            </div>

            {/* Pickup Location */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                Pickup Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-background/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="e.g., Alandi, Dhanori, etc."
                />
              </div>
              {errors.pickupLocation && <p className="text-red-500 text-xs mt-1 font-medium">{errors.pickupLocation}</p>}
            </div>

            {/* Destination */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                Destination <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-background/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="e.g., Mahabaleshwar"
                />
              </div>
              {errors.destination && <p className="text-red-500 text-xs mt-1 font-medium">{errors.destination}</p>}
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                Date of Travel <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-background/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                />
              </div>
              {errors.date && <p className="text-red-500 text-xs mt-1 font-medium">{errors.date}</p>}
            </div>

            {/* Car Preference */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                Car Preference <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <select
                  name="carPreference"
                  value={formData.carPreference}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-background/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 appearance-none"
                >
                  <option value="Urbania">Force Urbania (Premium)</option>
                  <option value="Innova Crysta">Innova Crysta (Luxury)</option>
                  <option value="Maruti Swift">Maruti Swift (Compact)</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Passengers */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                Passengers <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-background/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 appearance-none"
                >
                  <option value="">Select count</option>
                  {formData.carPreference === "Urbania" &&
                    [...Array(17)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  {formData.carPreference === "Innova Crysta" &&
                    [...Array(7)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  {formData.carPreference === "Maruti Swift" &&
                    [...Array(4)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.passengers && <p className="text-red-500 text-xs mt-1 font-medium">{errors.passengers}</p>}
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mb-8 space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">Additional Notes</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-muted-foreground h-5 w-5" />
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-background/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 min-h-[120px]"
                placeholder="Any special requests like baby seat, extra luggage, or specific route..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg font-bold rounded-xl shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            Send Inquiry
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-4">
            We typically reply within 15 minutes during business hours.
          </p>
        </form>
      </div>
    </section>
  )
}
