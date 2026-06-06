import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Bed, Bath, Maximize2 } from "lucide-react"
import { RENT_AGREEMENT_URL } from "@/lib/config"

export default function RentPage() {
  const rentProperties = [
    {
      id: "rent1",
      title: "Cozy Urban Studio",
      location: "Downtown Lane, Metro City",
      price: "₹18,000/month",
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
      isVerified: true,
    },
    {
      id: "rent2",
      title: "Elegant 2BHK Apartment",
      location: "Park Avenue, Metro City",
      price: "₹28,000/month",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
      isVerified: true,
    },
    {
      id: "rent3",
      title: "Spacious 3BHK Family Flat",
      location: "Green Meadows, Greenville",
      price: "₹35,000/month",
      bedrooms: 3,
      bathrooms: 2.5,
      area: 1800,
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
      isVerified: false,
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-foreground"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-bold text-xl">PropertyFinder</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/buy" className="text-sm font-medium hover:text-primary">
              Buy
            </Link>
            <Link href="/rent" className="text-sm font-semibold text-primary">
              Rent
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:text-primary">
              Sell
            </Link>
            <Link href="/commercial" className="text-sm font-medium hover:text-primary">
              Commercial
            </Link>
            <Link href={RENT_AGREEMENT_URL} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              Rent Agreement <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-bold">NEW</span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/saved" className="text-sm font-medium hover:text-primary hidden md:block">
              Saved
            </Link>
            <Link href="/packages" className="text-sm font-medium hover:text-primary hidden md:block">
              Packages
            </Link>
            <Link href="/post-property">
              <Button size="sm" variant="outline" className="hidden md:flex">
                Post Property <span className="ml-1 text-xs bg-primary text-primary-foreground px-1 rounded">FREE</span>
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Properties for Rent</h1>
            <p className="text-muted-foreground mt-2">Explore modern and cozy rental apartments.</p>
          </div>
          <Link href={RENT_AGREEMENT_URL}>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm">
              Need a Rent Agreement? Create Now
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden transition-all hover:shadow-md">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 text-rose-500 hover:bg-white hover:text-rose-600"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                {property.isVerified && (
                  <Badge variant="outline" className="absolute bottom-2 left-2 bg-white">
                    Verified
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg truncate mb-1">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="mr-1 h-3 w-3" />
                  <span className="text-xs">{property.location}</span>
                </div>
                <div className="text-xl font-bold text-primary mb-4">{property.price}</div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="mr-1 h-4 w-4" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="mr-1 h-4 w-4" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize2 className="mr-1 h-4 w-4" />
                    <span>{property.area} sq.ft</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" className="w-full">
                  View Property Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="container text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} PropertyFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
