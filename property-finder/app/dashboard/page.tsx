import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { PropertyListingTable } from "@/components/property-listing-table"
import { DashboardStats } from "@/components/dashboard-stats"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your properties and track performance</p>
          </div>
          <Button>Add New Property</Button>
        </div>

        <DashboardStats />

        <Tabs defaultValue="listings" className="mt-8">
          <TabsList>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="listings" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Property Listings</CardTitle>
                <CardDescription>Manage all your property listings in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <PropertyListingTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>Inquiries</CardTitle>
                <CardDescription>View and respond to inquiries from potential tenants</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Inquiry content will go here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Track performance of your property listings</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Analytics content will go here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

