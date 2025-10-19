"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

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
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Plan Your Next Trip</h2>
          <p className="text-lg text-foreground/70">Fill in your details and we'll get back to you via WhatsApp</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Pickup Location *</label>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., Pune"
              />
              {errors.pickupLocation && <p className="text-red-500 text-sm mt-1">{errors.pickupLocation}</p>}
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Destination *</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., Manali"
              />
              {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Date of Travel *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>

            {/* Car Preference */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Car Preference *</label>
              <select
                name="carPreference"
                value={formData.carPreference}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Urbania">Urbania</option>
                <option value="Innova Crysta">Innova Crysta</option>
                <option value="Maruti Swift">Maruti Swift</option>
              </select>
            </div>

            {formData.carPreference === "Urbania" && (
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Number of Passengers *</label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select passengers</option>
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5 </option>
                  <option value="6">6 </option>
                  <option value="7">7 </option>
                  <option value="8">8 </option>
                  <option value="9">9 </option>
                  <option value="10">10 </option>
                  <option value="11">11 </option>
                  <option value="12">12 </option>
                  <option value="13">13 </option>
                  <option value="14">14 </option>
                  <option value="15">15 </option>
                  <option value="16">16 </option>
                  <option value="17">17</option>
                </select>
                {errors.passengers && <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>}
              </div>
            )}

            {formData.carPreference === "Innova Crysta" && (
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Number of Passengers *</label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select passengers</option>
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5 </option>
                  <option value="6">6 </option>
                  <option value="7">7 </option>
                </select>
                {errors.passengers && <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>}
              </div>
            )}

            {formData.carPreference === "Maruti Swift" && (
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Number of Passengers *</label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select passengers</option>
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                </select>
                {errors.passengers && <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>}
              </div>
            )}
          </div>

          {/* Additional Notes */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Any special requests or requirements..."
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg font-semibold rounded-lg"
          >
            Send via WhatsApp
          </Button>
        </form>
      </div>
    </section>
  )
}
