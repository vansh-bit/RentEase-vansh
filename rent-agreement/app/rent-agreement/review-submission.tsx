"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { format } from "date-fns"
import type { AgreementData } from "./page"

interface ReviewSubmissionProps {
  data: AgreementData
  onBack: () => void
  onSubmit: () => void
}

export default function ReviewSubmission({ data, onBack, onSubmit }: ReviewSubmissionProps) {
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const validateForm = () => {
    const requiredFields = [
      { field: data.agreementDate, name: "Agreement Date" },
      { field: data.agreementCity, name: "Agreement City" },
      { field: data.agreementState, name: "Agreement State" },
      { field: data.propertyAddress, name: "Property Address" },
      { field: data.tenancyStartDate, name: "Tenancy Start Date" },
      { field: data.monthlyRent, name: "Monthly Rent" },
      { field: data.securityDeposit, name: "Security Deposit" },
      { field: data.landlordName, name: "Landlord Name" },
      { field: data.landlordAddress, name: "Landlord Address" },
      { field: data.tenantName, name: "Tenant Name" },
      { field: data.tenantAddress, name: "Tenant Address" },
    ]

    const errors = requiredFields.filter((item) => !item.field).map((item) => item.name)

    setValidationErrors(errors)
    return errors.length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit()
    }
  }

  // Format date
  const formatDate = (date: string) => {
    return date ? format(new Date(date), "PPP") : "Not specified"
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return amount ? `₹${amount.toLocaleString()}` : "Not specified"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Review Agreement Details</CardTitle>
        <CardDescription>
          Please review all details before final submission. You can go back to edit any information if needed.
        </CardDescription>
      </CardHeader>

      {validationErrors.length > 0 && (
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              <p>The following required fields are missing:</p>
              <ul className="list-disc pl-5 mt-2">
                {validationErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      )}

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Agreement Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">
                  {data.agreementDate ? formatDate(data.agreementDate) : "Not specified"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium">
                  {data.agreementCity}, {data.agreementState}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Property Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Address:</span>
                <span className="font-medium">{data.propertyAddress || "Not specified"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="font-medium">{data.propertyType}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Tenancy Terms</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Period:</span>
                <span className="font-medium">{data.tenancyPeriod} months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Start Date:</span>
                <span className="font-medium">
                  {data.tenancyStartDate ? formatDate(data.tenancyStartDate) : "Not specified"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">End Date:</span>
                <span className="font-medium">
                  {data.tenancyEndDate ? formatDate(data.tenancyEndDate) : "Not specified"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Rent:</span>
                <span className="font-medium">{formatCurrency(data.monthlyRent)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Security Deposit:</span>
                <span className="font-medium">{formatCurrency(data.securityDeposit)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Parties</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Landlord:</span>
                <span className="font-medium">{data.landlordName || "Not specified"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tenant:</span>
                <span className="font-medium">{data.tenantName || "Not specified"}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back to Edit
        </Button>
        <Button onClick={handleSubmit}>Submit Agreement</Button>
      </CardFooter>
    </Card>
  )
}

