import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PropertyTypeSelector } from "@/components/property-type-selector"
import { SearchBar } from "@/components/search-bar"
import { FeaturedProperties } from "@/components/featured-properties"
import { ServiceCards } from "@/components/service-cards"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-purple-900 to-indigo-800 py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Trusted place to find a home
          </h1>
          <p className="mt-4 text-xl text-white/90">6K+ listings added daily and 65K+ total verified</p>

          <div className="mt-10 max-w-3xl mx-auto">
            <PropertyTypeSelector />
            <div className="mt-4 bg-white rounded-lg shadow-lg p-2">
              <SearchBar />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-white/80 text-sm">
              Are you a Property Owner?{" "}
              <Link href="/post-property" className="text-white underline">
                Sell / Rent for FREE
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Property Finder Edge</h2>
              <p className="text-muted-foreground">Explore property related services</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              Explore Services
            </Button>
          </div>

          <ServiceCards />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Top Picks</h2>
              <p className="text-muted-foreground">Explore top living options with us</p>
            </div>
          </div>

          <FeaturedProperties />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">PropertyFinder</h3>
              <p className="text-slate-300 text-sm">
                Your trusted partner for finding the perfect home. We connect property owners with potential tenants and
                buyers.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Tenants</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/rent" className="hover:text-white">
                    Rent a Home
                  </Link>
                </li>
                <li>
                  <Link href="/buy" className="hover:text-white">
                    Buy a Home
                  </Link>
                </li>
                <li>
                  <Link href="/saved" className="hover:text-white">
                    Saved Properties
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="hover:text-white">
                    Compare Properties
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Owners</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/post-property" className="hover:text-white">
                    List Your Property
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white">
                    Owner Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link href="/owner-guide" className="hover:text-white">
                    Owner's Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>support@propertyfinder.com</li>
                <li>+1 (555) 123-4567</li>
                <li>
                  <div className="flex space-x-4 mt-4">
                    <Link href="#" className="hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                    <Link href="#" className="hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </Link>
                    <Link href="#" className="hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} PropertyFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

