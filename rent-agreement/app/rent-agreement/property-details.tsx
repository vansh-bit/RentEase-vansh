"use client"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { AgreementData } from "./page"

interface PropertyDetailsProps {
  data: AgreementData
  updateData: (data: Partial<AgreementData>) => void
}

export default function PropertyDetails({ data, updateData }: PropertyDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="propertyAddress">Property Address*</Label>
          <Textarea
            id="propertyAddress"
            value={data.propertyAddress}
            onChange={(e) => updateData({ propertyAddress: e.target.value })}
            placeholder="Enter complete property address"
            rows={4}
          />
        </div>

        <div className="space-y-3">
          <Label>Property Type</Label>
          <RadioGroup
            value={data.propertyType}
            onValueChange={(value) => updateData({ propertyType: value })}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Residential" id="residential" />
              <Label htmlFor="residential">Residential</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Commercial" id="commercial" />
              <Label htmlFor="commercial">Commercial</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Industrial" id="industrial" />
              <Label htmlFor="industrial">Industrial</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

