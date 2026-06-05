"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Share2, ArrowUpRight, Bell, BarChart3 } from "lucide-react"
import type { AgreementData } from "./page"

interface SuccessPageProps {
  data: AgreementData
  listingId: string
}

export default function SuccessPage({ data, listingId }: SuccessPageProps) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleViewDashboard = () => {
    router.push("/rent-agreement/dashboard")
  }

  const handleViewMarketInsights = () => {
    router.push("/rent-agreement/market-insights")
  }

  return (
    <div className="space-y-6">
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Agreement Successfully Created!</CardTitle>
          <CardDescription>
            Your rent agreement has been created and notifications have been sent to all parties.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Agreement ID:</span>
              <span className="font-bold">{listingId}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Property:</span>
              <span>{data.propertyAddress}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Status:</span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Active
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Agreement Processing</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Tabs defaultValue="landlord" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="landlord">Landlord Notification</TabsTrigger>
              <TabsTrigger value="tenant">Tenant Notification</TabsTrigger>
            </TabsList>

            <TabsContent value="landlord" className="space-y-4">
              <div className="rounded-lg border p-4 mt-4">
                <h3 className="font-medium mb-2">Email Notification Sent</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  An email has been sent to {data.landlordEmail || "the landlord"} with the following details:
                </p>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>Subject: Your Property Has Been Listed Successfully</p>
                  <p className="mt-2">Dear {data.landlordName},</p>
                  <p className="mt-2">
                    Your property at {data.propertyAddress} has been successfully listed with agreement ID {listingId}.
                    You can track inquiries and manage your listing from your dashboard.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tenant" className="space-y-4">
              <div className="rounded-lg border p-4 mt-4">
                <h3 className="font-medium mb-2">Email Notification Sent</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  An email has been sent to {data.tenantEmail || "the tenant"} with the following details:
                </p>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>Subject: Rent Agreement Created Successfully</p>
                  <p className="mt-2">Dear {data.tenantName},</p>
                  <p className="mt-2">
                    A rent agreement for the property at {data.propertyAddress} has been created with agreement ID{" "}
                    {listingId}. You can view the complete agreement details and manage your rental from your dashboard.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex flex-col space-y-3">
          <div className="grid grid-cols-2 gap-3 w-full">
            <Button onClick={handleViewDashboard} className="w-full">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Dashboard
            </Button>
            <Button variant="outline" onClick={handleViewMarketInsights} className="w-full">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Market Insights
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <Button variant="outline" className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share Agreement
            </Button>
            <Button variant="outline" className="w-full">
              <Bell className="mr-2 h-4 w-4" />
              Set Reminders
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

