"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface PropertyInquiryFormProps {
  propertyId: string
}

export function PropertyInquiryForm({ propertyId }: PropertyInquiryFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("I'm interested in this property. Please contact me with more information.")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log({ propertyId, name, email, phone, message })
    alert("Inquiry submitted successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your phone number"
          required
        />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} required />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>

      <div className="flex justify-center gap-4 mt-4">
        <Button variant="outline" className="flex-1">
          <Phone className="h-4 w-4 mr-2" />
          Call
        </Button>
        <Button variant="outline" className="flex-1">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Visit
        </Button>
      </div>
    </form>
  )
}

