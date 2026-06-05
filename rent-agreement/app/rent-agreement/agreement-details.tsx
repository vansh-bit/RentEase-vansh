"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import type { AgreementData } from "./page"

interface AgreementDetailsProps {
  data: AgreementData
  updateData: (data: Partial<AgreementData>) => void
}

export default function AgreementDetails({ data, updateData }: AgreementDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agreement Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="agreementDate">Agreement Date*</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !data.agreementDate && "text-muted-foreground",
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {data.agreementDate ? format(new Date(data.agreementDate), "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={data.agreementDate ? new Date(data.agreementDate) : undefined}
                onSelect={(date) => updateData({ agreementDate: date?.toISOString() || "" })}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="agreementCity">Agreement City*</Label>
          <Input
            id="agreementCity"
            value={data.agreementCity}
            onChange={(e) => updateData({ agreementCity: e.target.value })}
            placeholder="Enter city name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="agreementState">Agreement State*</Label>
          <Input
            id="agreementState"
            value={data.agreementState}
            onChange={(e) => updateData({ agreementState: e.target.value })}
            placeholder="Enter state name"
          />
        </div>
      </CardContent>
    </Card>
  )
}

