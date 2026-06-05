"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PropertyTypeSelector() {
  const [selectedType, setSelectedType] = useState("rent")

  return (
    <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-lg p-1">
      {[
        { id: "buy", label: "BUY" },
        { id: "rent", label: "RENT" },
        { id: "commercial", label: "COMMERCIAL" },
        { id: "pg", label: "PG/CO-LIVING" },
        { id: "plots", label: "PLOTS" },
      ].map((type) => (
        <Button
          key={type.id}
          variant={selectedType === type.id ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedType(type.id)}
          className={`rounded-md ${
            selectedType === type.id ? "bg-white text-primary hover:bg-white/90" : "text-white hover:bg-white/20"
          }`}
        >
          {type.label}
        </Button>
      ))}
    </div>
  )
}

