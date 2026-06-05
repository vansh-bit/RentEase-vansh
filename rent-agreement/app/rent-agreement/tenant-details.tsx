"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import type { AgreementData } from "./page"

interface TenantDetailsProps {
  data: AgreementData
  updateData: (data: Partial<AgreementData>) => void
}

export default function TenantDetails({ data, updateData }: TenantDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tenant Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="tenantName">Tenant Name*</Label>
          <Input
            id="tenantName"
            value={data.tenantName}
            onChange={(e) => updateData({ tenantName: e.target.value })}
            placeholder="Enter tenant's full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenantAddress">Tenant Address*</Label>
          <Textarea
            id="tenantAddress"
            value={data.tenantAddress}
            onChange={(e) => updateData({ tenantAddress: e.target.value })}
            placeholder="Enter tenant's complete address"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenantPhone">Tenant Phone Number</Label>
          <Input
            id="tenantPhone"
            value={data.tenantPhone}
            onChange={(e) => updateData({ tenantPhone: e.target.value })}
            placeholder="Enter tenant's phone number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenantEmail">Tenant Email</Label>
          <Input
            id="tenantEmail"
            type="email"
            value={data.tenantEmail}
            onChange={(e) => updateData({ tenantEmail: e.target.value })}
            placeholder="Enter tenant's email address"
          />
        </div>
      </CardContent>
    </Card>
  )
}

