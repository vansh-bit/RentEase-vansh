import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin } from "lucide-react"
import { RENT_AGREEMENT_URL } from "@/lib/config"

export default function SavedPage() {
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
            <Link href="/saved" className="text-sm font-semibold text-primary">
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
          <h1 className="text-3xl font-bold">Saved Properties</h1>
          <p className="text-muted-foreground mt-2">Manage your favorite property listings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Card className="overflow-hidden flex flex-row items-center border shadow-sm">
            <div className="w-1/3 aspect-video relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80"
                alt="Penthouse"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-4 flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg truncate">Premium 3BHK Penthouse</h3>
                  <div className="flex items-center text-muted-foreground mt-1 mb-2">
                    <MapPin className="mr-1 h-3 w-3" />
                    <span className="text-xs">Skyline Heights, Metro City</span>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="text-rose-500 hover:text-rose-600">
                  <Heart className="h-5 w-5 fill-rose-500" />
                </Button>
              </div>
              <div className="text-lg font-bold text-primary">₹1,85,00,000</div>
            </CardContent>
          </Card>
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
