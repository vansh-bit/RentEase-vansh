"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Home, Users, Eye, MessageSquare, Calendar, TrendingUp, Bell, Settings, Plus } from "lucide-react"

export default function Dashboard() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/rent-agreement")
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button variant="ghost" onClick={handleBack} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">Rental Dashboard</h1>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Agreement
        </Button>
      </div>

      <Tabs defaultValue="landlord" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="landlord">Landlord View</TabsTrigger>
          <TabsTrigger value="tenant">Tenant View</TabsTrigger>
        </TabsList>

        <TabsContent value="landlord" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2h</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>My Properties</CardTitle>
                <CardDescription>Manage your rental properties and agreements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">2BHK Apartment</h3>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Active
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">123 Main Street, Apartment 4B</p>
                      <div className="mt-2 flex items-center text-sm">
                        <span className="font-medium">₹18,000/month</span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">Tenant: John Doe</span>
                      </div>
                      <div className="mt-3 flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3.5 w-3.5 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-3.5 w-3.5 mr-1" />
                          Messages
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-3.5 w-3.5 mr-1" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Property
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tenant Inquiries</CardTitle>
                <CardDescription>Recent inquiries about your properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-3 border-b pb-3 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-muted"></div>
                      <div>
                        <h4 className="text-sm font-medium">Jane Smith</h4>
                        <p className="text-xs text-muted-foreground">Interested in viewing the property</p>
                        <div className="mt-1 flex items-center">
                          <Button variant="link" className="h-auto p-0 text-xs">
                            Reply
                          </Button>
                          <span className="mx-2 text-muted-foreground text-xs">•</span>
                          <span className="text-xs text-muted-foreground">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Inquiries
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Track rent payments and due dates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h4 className="font-medium">Monthly Rent</h4>
                      <p className="text-sm text-muted-foreground">Due on 5th May, 2023</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">₹18,000</div>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        Upcoming
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Maintenance Fee</h4>
                      <p className="text-sm text-muted-foreground">Due on 10th May, 2023</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">₹2,500</div>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Bell className="h-4 w-4 mr-2" />
                  Set Payment Reminders
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Tools</CardTitle>
                <CardDescription>Tools to enhance your rental listing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                      Boost My Listing
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Increase visibility in search results and get more inquiries
                    </p>
                    <Button size="sm" className="mt-2">
                      Boost Now
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-green-500" />
                      Auto-Reply to Inquiries
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Set up automated responses to common questions</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Configure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tenant" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Saved Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Maintenance Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>My Rentals</CardTitle>
                <CardDescription>Manage your current rental agreements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">2BHK Apartment</h3>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Active
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">123 Main Street, Apartment 4B</p>
                      <div className="mt-2 flex items-center text-sm">
                        <span className="font-medium">₹18,000/month</span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">Landlord: Jane Doe</span>
                      </div>
                      <div className="mt-3 flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3.5 w-3.5 mr-1" />
                          View Agreement
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-3.5 w-3.5 mr-1" />
                          Contact Landlord
                        </Button>
                        <Button variant="outline" size="sm">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          Payments
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Track your rent payments and due dates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h4 className="font-medium">Monthly Rent</h4>
                      <p className="text-sm text-muted-foreground">Due on 5th May, 2023</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">₹18,000</div>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        Due in 5 days
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Electricity Bill</h4>
                      <p className="text-sm text-muted-foreground">Due on 15th May, 2023</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">₹1,200</div>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Bell className="h-4 w-4 mr-2" />
                  Set Payment Reminders
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>Track and submit maintenance requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 border-b pb-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="text-yellow-600 text-xs">!</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Leaking Faucet in Kitchen</h4>
                      <p className="text-xs text-muted-foreground">Submitted on April 28, 2023</p>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800 mt-1">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  New Maintenance Request
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Tools</CardTitle>
                <CardDescription>Tools to enhance your rental experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium flex items-center">
                      <Home className="h-4 w-4 mr-2 text-blue-500" />
                      Saved Properties
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">View and compare properties you've saved</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      View Saved
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-500" />
                      Roommate Finder
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Find compatible roommates to share your rental</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Find Roommates
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

