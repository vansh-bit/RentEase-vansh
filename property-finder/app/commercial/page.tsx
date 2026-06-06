import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Building, Maximize2 } from "lucide-react"

export default function CommercialPage() {
  const commercialProperties = [
    {
      id: "comm1",
      title: "Co-working Space / Office Hub",
      location: "Business District, Metro City",
      price: "₹1,20,000/month",
      type: "Office Space",
      area: 3200,
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      isVerified: true,
    },
    {
      id: "comm2",
      title: "Prime Retail Shop / Showroom",
      location: "Main Market Road, Metro City",
      price: "₹2,50,00,000",
      type: "Retail Shop",
      area: 950,
      imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80",
      isVerified: true,
    },
    {
      id: "comm3",
      title: "Logistics Warehouse / Godown",
      location: "Industrial Zone, Greenville",
      price: "₹85,000/month",
      type: "Warehouse",
      area: 7500,
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
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
            <Link href="/rent" className="text-sm font-medium hover:text-primary">
              Rent
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:text-primary">
              Sell
            </Link>
            <Link href="/commercial" className="text-sm font-semibold text-primary">
              Commercial
            </Link>
            <Link href="http://localhost:3001/rent-agreement" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Commercial Properties</h1>
          <p className="text-muted-foreground mt-2">Find the perfect commercial space for your business ventures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercialProperties.map((property) => (
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
                    <Building className="mr-1 h-4 w-4" />
                    <span>{property.type}</span>
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
