"use client"

import { useState } from "react"
import { Eye, MoreHorizontal, EditIcon, TrashIcon } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Property {
  id: string
  title: string
  type: string
  location: string
  price: number
  status: "active" | "pending" | "inactive"
  views: number
  inquiries: number
  lastUpdated: string
}

export function PropertyListingTable() {
  // Mock data for property listings
  const [properties, setProperties] = useState<Property[]>([
    {
      id: "prop1",
      title: "Luxury Apartment in City Center",
      type: "Apartment",
      location: "Downtown, Metro City",
      price: 25000,
      status: "active",
      views: 245,
      inquiries: 12,
      lastUpdated: "2023-10-15",
    },
    {
      id: "prop2",
      title: "Modern Villa with Garden",
      type: "Villa",
      location: "Greenville, Metro City",
      price: 45000,
      status: "active",
      views: 189,
      inquiries: 8,
      lastUpdated: "2023-10-10",
    },
    {
      id: "prop3",
      title: "Cozy Studio Apartment",
      type: "Studio",
      location: "University Area, Metro City",
      price: 12000,
      status: "pending",
      views: 120,
      inquiries: 4,
      lastUpdated: "2023-10-05",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Pending
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="text-slate-500">
            Inactive
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Property</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Views</TableHead>
          <TableHead className="text-right">Inquiries</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property) => (
          <TableRow key={property.id}>
            <TableCell className="font-medium">
              <div>
                <div className="font-medium">{property.title}</div>
                <div className="text-xs text-muted-foreground">{property.location}</div>
              </div>
            </TableCell>
            <TableCell>{property.type}</TableCell>
            <TableCell>₹{property.price.toLocaleString()}</TableCell>
            <TableCell>{getStatusBadge(property.status)}</TableCell>
            <TableCell className="text-right">{property.views}</TableCell>
            <TableCell className="text-right">{property.inquiries}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    <span>View</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <EditIcon className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrashIcon className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

