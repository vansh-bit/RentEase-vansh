import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RENT_AGREEMENT_URL } from "@/lib/config"

export default function PostPropertyPage() {
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
              <Button size="sm" variant="default" className="hidden md:flex bg-primary text-primary-foreground">
                Post Property <span className="ml-1 text-xs bg-primary-foreground text-primary px-1 rounded font-bold">FREE</span>
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container py-12 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Post Your Property Listing</CardTitle>
            <CardDescription>
              Create a free listing to rent or sell your residential or commercial property.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="listing-type">Listing Type*</Label>
                <Select defaultValue="rent">
                  <SelectTrigger id="listing-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">For Rent</SelectItem>
                    <SelectItem value="sale">For Sale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="prop-type">Property Type*</Label>
                <Select defaultValue="residential">
                  <SelectTrigger id="prop-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title*</Label>
              <Input id="title" placeholder="e.g. Modern Studio Apartment" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (INR)*</Label>
                <Input id="price" type="number" placeholder="e.g. 15000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Builtup Area (Sq.Ft)*</Label>
                <Input id="area" type="number" placeholder="e.g. 800" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address*</Label>
              <Textarea id="address" placeholder="Enter complete address" rows={3} />
            </div>

            <Button className="w-full mt-4">
              Post Listing
            </Button>
          </CardContent>
        </Card>
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
