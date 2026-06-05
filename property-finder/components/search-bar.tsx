"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  const [location, setLocation] = useState("")

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <div className="relative flex-1 w-full">
        <div className="flex items-center border-r border-gray-200 px-4 py-2">
          <span className="text-sm font-medium text-gray-500 mr-2">Select City</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by locality, landmark, project, or builder"
          className="w-full py-2 px-4 text-gray-700 focus:outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <Button className="w-full sm:w-auto px-8 rounded-r-md">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </div>
  )
}

