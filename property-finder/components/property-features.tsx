import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface PropertyFeaturesProps {
  amenities: string[]
}

export function PropertyFeatures({ amenities }: PropertyFeaturesProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Amenities & Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">{amenity}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

