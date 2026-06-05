"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, TrendingUp, MapPin, Home, Scale, Info } from "lucide-react"

export default function MarketInsights() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/rent-agreement")
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={handleBack} className="mr-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Market Insights & Rent Trends</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
              Average Rent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹18,500</div>
            <p className="text-sm text-muted-foreground">For similar properties in this area</p>
            <div className="mt-2 text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>5.2% higher than last quarter</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-red-500" />
              Demand Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">High</div>
            <p className="text-sm text-muted-foreground">Current rental demand in this area</p>
            <div className="mt-2 text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>30% more inquiries than last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Home className="h-5 w-5 mr-2 text-purple-500" />
              Suggested Rent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹17,000 - ₹20,000</div>
            <p className="text-sm text-muted-foreground">Optimal price range for faster rentals</p>
            <div className="mt-2 text-sm text-blue-600 flex items-center">
              <Info className="h-4 w-4 mr-1" />
              <span>Based on 24 similar properties</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trends" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trends">Price Trends</TabsTrigger>
          <TabsTrigger value="heatmap">Demand Heatmap</TabsTrigger>
          <TabsTrigger value="recent">Recent Rentals</TabsTrigger>
          <TabsTrigger value="legal">Legal Updates</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rent Price Trends</CardTitle>
              <CardDescription>
                Historical rent prices for similar properties in this area over the past 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="w-full h-full bg-muted rounded-md flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">Price trend chart visualization</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Data sourced from recent rental agreements and market listings
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="heatmap" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rental Demand Heatmap</CardTitle>
              <CardDescription>Visual representation of rental demand across different areas</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="w-full h-full bg-muted rounded-md flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">Demand heatmap visualization</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Areas with higher demand typically command premium rental prices
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recently Rented Properties</CardTitle>
              <CardDescription>Similar properties that were recently rented in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-4 border-b pb-4">
                    <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">2BHK Apartment, Sector {i + 10}</h4>
                      <p className="text-sm text-muted-foreground">Rented 2 weeks ago</p>
                      <div className="mt-1 flex items-center">
                        <span className="text-sm font-medium">₹{16000 + i * 1000}/month</span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">1100 sq.ft</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View More Similar Properties
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="legal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Legal & Policy Updates</CardTitle>
              <CardDescription>
                Recent changes in rental laws and regulations that may affect your agreement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start">
                    <Scale className="h-5 w-5 mr-2 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">New Rent Control Act Amendment</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        The government has introduced new amendments to the Rent Control Act that affect security
                        deposit limits and eviction procedures.
                      </p>
                      <Button variant="link" className="p-0 h-auto mt-1 text-sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-start">
                    <Scale className="h-5 w-5 mr-2 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Digital Rental Agreements Now Valid</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Digital rental agreements with e-signatures are now legally valid and enforceable in courts.
                      </p>
                      <Button variant="link" className="p-0 h-auto mt-1 text-sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-start">
                    <Scale className="h-5 w-5 mr-2 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Tenant Rights Expansion</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        New regulations expand tenant rights regarding maintenance requests and privacy protections.
                      </p>
                      <Button variant="link" className="p-0 h-auto mt-1 text-sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

