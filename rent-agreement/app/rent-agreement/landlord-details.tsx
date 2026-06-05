"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import type { AgreementData } from "./page"

interface LandlordDetailsProps {
  data: AgreementData
  updateData: (data: Partial<AgreementData>) => void
}

export default function LandlordDetails({ data, updateData }: LandlordDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Landlord Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="landlordName">Landlord Name*</Label>
          <Input
            id="landlordName"
            value={data.landlordName}
            onChange={(e) => updateData({ landlordName: e.target.value })}
            placeholder="Enter landlord's full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="landlordAddress">Landlord Address*</Label>
          <Textarea
            id="landlordAddress"
            value={data.landlordAddress}
            onChange={(e) => updateData({ landlordAddress: e.target.value })}
            placeholder="Enter landlord's complete address"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="landlordPhone">Landlord Phone Number</Label>
          <Input
            id="landlordPhone"
            value={data.landlordPhone}
            onChange={(e) => updateData({ landlordPhone: e.target.value })}
            placeholder="Enter landlord's phone number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="landlordEmail">Landlord Email</Label>
          <Input
            id="landlordEmail"
            type="email"
            value={data.landlordEmail}
            onChange={(e) => updateData({ landlordEmail: e.target.value })}
            placeholder="Enter landlord's email address"
          />
        </div>
      </CardContent>
    </Card>
  )
}

