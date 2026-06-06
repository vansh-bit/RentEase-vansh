import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PackagesPage() {
  const packages = [
    {
      name: "Basic",
      price: "Free",
      description: "List property and get standard organic reach",
      features: [
        "Single Property Listing",
        "Standard Visibility",
        "Email Support",
        "Digital Agreement Template",
      ],
      isPopular: false,
    },
    {
      name: "Premium",
      price: "₹999/month",
      description: "Enhanced search ranking and tenant matches",
      features: [
        "Up to 3 Property Listings",
        "Featured Badge (Enhanced Reach)",
        "Priority Email & Chat Support",
        "Integrated E-Stamp Service",
        "Tenant Verification Reports",
      ],
      isPopular: true,
    },
    {
      name: "Elite",
      price: "₹2,499/month",
      description: "Dedicated account manager and unlimited listings",
      features: [
        "Unlimited Property Listings",
        "Top-of-search Placement",
        "Dedicated Relationship Manager",
        "Free E-Stamp & Digital Signatures",
        "Full Blockchain verification ledger",
        "Legal dispute support consultation",
      ],
      isPopular: false,
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
            <Link href="/commercial" className="text-sm font-medium hover:text-primary">
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
            <Link href="/packages" className="text-sm font-semibold text-primary">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Pricing & Packages</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Choose the right visibility plan to list your property and finalize rent agreements seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.name} className={`flex flex-col border shadow-sm relative ${pkg.isPopular ? "border-indigo-500 scale-105" : ""}`}>
              {pkg.isPopular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                <div className="text-3xl font-extrabold mt-2 text-primary">{pkg.price}</div>
                <CardDescription className="mt-2">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${pkg.isPopular ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm" : ""}`} variant={pkg.isPopular ? "default" : "outline"}>
                  Get Started
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
