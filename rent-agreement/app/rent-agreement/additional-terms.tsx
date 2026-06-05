"use client"

import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { AgreementData } from "./page"

interface AdditionalTermsProps {
  data: AgreementData
  updateData: (data: Partial<AgreementData>) => void
}

export default function AdditionalTerms({ data, updateData }: AdditionalTermsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Additional Terms</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="furnishedProperty" className="flex-1">
            Is the property furnished?
          </Label>
          <Switch
            id="furnishedProperty"
            checked={data.furnishedProperty}
            onCheckedChange={(checked) => updateData({ furnishedProperty: checked })}
          />
        </div>

        {data.furnishedProperty && (
          <div className="space-y-2">
            <Label htmlFor="furnishingDetails">Furnishing Details</Label>
            <Textarea
              id="furnishingDetails"
              placeholder="List all furniture and appliances provided with the property"
              value={data.furnishingDetails}
              onChange={(e) => updateData({ furnishingDetails: e.target.value })}
              rows={4}
            />
          </div>
        )}

        <div className="space-y-3">
          <Label>Maintenance Responsibility</Label>
          <RadioGroup
            value={data.maintenanceResponsibility}
            onValueChange={(value) => updateData({ maintenanceResponsibility: value })}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Tenant" id="tenant-maintenance" />
              <Label htmlFor="tenant-maintenance">Tenant is responsible for minor maintenance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Landlord" id="landlord-maintenance" />
              <Label htmlFor="landlord-maintenance">Landlord is responsible for all maintenance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Shared" id="shared-maintenance" />
              <Label htmlFor="shared-maintenance">Shared responsibility (as per agreement)</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

