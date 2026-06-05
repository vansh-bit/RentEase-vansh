import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, MapPin, Bed, Bath, Maximize2, CheckCircle, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PropertyInquiryForm } from "@/components/property-inquiry-form"
import { PropertyFeatures } from "@/components/property-features"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch property data based on the ID
  const property = {
    id: params.id,
    title: "Luxury Apartment in City Center",
    description:
      "This beautiful apartment is located in the heart of the city, offering stunning views and modern amenities. Perfect for professionals or small families looking for a comfortable living space in a prime location.",
    location: "Downtown, Metro City",
    price: 25000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    furnished: "Semi-Furnished",
    availableFrom: "Immediate",
    propertyAge: "2 years",
    facing: "East",
    floor: "5th of 12 floors",
    totalFloors: 12,
    amenities: [
      "Swimming Pool",
      "Gym",
      "24/7 Security",
      "Power Backup",
      "Parking",
      "Lift",
      "Club House",
      "Children's Play Area",
      "Garden",
      "Indoor Games",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    owner: {
      name: "John Doe",
      phone: "+91 9876543210",
      responseRate: "95%",
      responseTime: "Usually responds within 1 hour",
      memberSince: "Jan 2022",
      verified: true,
    },
    isVerified: true,
  }

  return (
    <div className="min-h-screen bg-slate-50">
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
            <Link href="/commercial" className="text-sm font-medium hover:text-primary">
              Commercial
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

      <div className="container py-8">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Search
            </Link>
          </Button>
          <div className="h-4 w-px bg-slate-200 mx-2"></div>
          <div className="text-sm text-muted-foreground">
            Home / Rent / {property.location} / {property.title}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h1 className="text-2xl font-bold">{property.title}</h1>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">{property.location}</span>
                    {property.isVerified && (
                      <Badge variant="outline" className="ml-2 bg-green-50 text-green-600 border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" /> Verified
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-2xl font-bold text-primary mt-2">₹{property.price.toLocaleString()}/month</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={property.images[0] || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {property.images.slice(1, 5).map((image, index) => (
                  <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${property.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <Bed className="h-5 w-5 text-primary mb-2" />
                  <div className="text-lg font-semibold">{property.bedrooms}</div>
                  <div className="text-xs text-muted-foreground">Bedrooms</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <Bath className="h-5 w-5 text-primary mb-2" />
                  <div className="text-lg font-semibold">{property.bathrooms}</div>
                  <div className="text-xs text-muted-foreground">Bathrooms</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <Maximize2 className="h-5 w-5 text-primary mb-2" />
                  <div className="text-lg font-semibold">{property.area}</div>
                  <div className="text-xs text-muted-foreground">Sq. Ft.</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="mb-8">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                    <p className="text-muted-foreground mb-6">{property.description}</p>

                    <h3 className="text-lg font-semibold mb-4">Property Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Furnishing</div>
                        <div className="font-medium">{property.furnished}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Available From</div>
                        <div className="font-medium">{property.availableFrom}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Property Age</div>
                        <div className="font-medium">{property.propertyAge}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Facing</div>
                        <div className="font-medium">{property.facing}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Floor</div>
                        <div className="font-medium">{property.floor}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="amenities" className="mt-4">
                <PropertyFeatures amenities={property.amenities} />
              </TabsContent>
              <TabsContent value="location" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-muted-foreground opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-muted-foreground">Map view will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{property.owner.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Member since {property.owner.memberSince}
                    </div>
                  </div>
                </div>

                <PropertyInquiryForm propertyId={property.id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

