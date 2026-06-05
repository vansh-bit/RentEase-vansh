import { PropertyCard } from "@/components/property-card"

export function FeaturedProperties() {
  // Mock data for featured properties
  const properties = [
    {
      id: "prop1",
      title: "Luxury Apartment in City Center",
      location: "Downtown, Metro City",
      price: 25000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1500,
      imageUrl: "/placeholder.svg?height=300&width=500",
      isVerified: true,
      isFeatured: true,
    },
    {
      id: "prop2",
      title: "Modern Villa with Garden",
      location: "Greenville, Metro City",
      price: 45000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      imageUrl: "/placeholder.svg?height=300&width=500",
      isVerified: true,
    },
    {
      id: "prop3",
      title: "Cozy Studio Apartment",
      location: "University Area, Metro City",
      price: 12000,
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      imageUrl: "/placeholder.svg?height=300&width=500",
      isVerified: true,
      isFeatured: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  )
}

