import Image from "next/image"
import Link from "next/link"
import { Heart, MapPin, Maximize2, Bed, Bath } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  imageUrl: string
  isVerified?: boolean
  isFeatured?: boolean
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  isVerified = false,
  isFeatured = false,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <Link href={`/property/${id}`}>
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 text-rose-500 hover:bg-white hover:text-rose-600"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to favorites</span>
        </Button>
        {isFeatured && <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>}
        {isVerified && (
          <Badge variant="outline" className="absolute bottom-2 left-2 bg-white">
            Verified
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
        </div>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="mr-1 h-3 w-3" />
          <span className="text-xs">{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">₹{price.toLocaleString()}</div>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Bed className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize2 className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{area} sq.ft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

