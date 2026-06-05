"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { AgreementData } from "./page"

interface SignatureSectionProps {
  data: AgreementData
  updateData: (data: Partial<AgreementData>) => void
}

export default function SignatureSection({ data, updateData }: SignatureSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Signatures</CardTitle>
        <CardDescription>Enter the names as they should appear on the signature lines</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Landlord Signature</h3>
          <div className="space-y-2">
            <Label htmlFor="landlordSignature">Signature Text</Label>
            <Input
              id="landlordSignature"
              placeholder="Type landlord's name as signature"
              value={data.landlordSignature}
              onChange={(e) => updateData({ landlordSignature: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Tenant Signature</h3>
          <div className="space-y-2">
            <Label htmlFor="tenantSignature">Signature Text</Label>
            <Input
              id="tenantSignature"
              placeholder="Type tenant's name as signature"
              value={data.tenantSignature}
              onChange={(e) => updateData({ tenantSignature: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Witness</h3>
          <div className="space-y-2">
            <Label htmlFor="witnessName">Witness Name</Label>
            <Input
              id="witnessName"
              placeholder="Enter witness name"
              value={data.witnessName}
              onChange={(e) => updateData({ witnessName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="witnessSignature">Witness Signature</Label>
            <Input
              id="witnessSignature"
              placeholder="Type witness's name as signature"
              value={data.witnessSignature}
              onChange={(e) => updateData({ witnessSignature: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

