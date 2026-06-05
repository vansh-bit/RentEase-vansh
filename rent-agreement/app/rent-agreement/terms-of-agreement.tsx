"use client"

import { Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { format, addMonths } from "date-fns"
import { cn } from "@/lib/utils"
import type { AgreementData } from "./page"

interface TermsOfAgreementProps {
  data: AgreementData
  updateData: (data: Partial<AgreementData>) => void
}

export default function TermsOfAgreement({ data, updateData }: TermsOfAgreementProps) {
  const handleStartDateChange = (date: Date | undefined) => {
    if (date) {
      updateData({
        tenancyStartDate: date.toISOString(),
        tenancyEndDate: addMonths(date, data.tenancyPeriod).toISOString(),
      })
    } else {
      updateData({ tenancyStartDate: "", tenancyEndDate: "" })
    }
  }

  const handlePeriodChange = (value: string) => {
    const period = Number.parseInt(value)
    updateData({ tenancyPeriod: period })

    if (data.tenancyStartDate) {
      updateData({
        tenancyEndDate: addMonths(new Date(data.tenancyStartDate), period).toISOString(),
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Terms of Agreement</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="tenancyStartDate">Tenancy Start Date*</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !data.tenancyStartDate && "text-muted-foreground",
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {data.tenancyStartDate ? format(new Date(data.tenancyStartDate), "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={data.tenancyStartDate ? new Date(data.tenancyStartDate) : undefined}
                onSelect={handleStartDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenancyPeriod">Tenancy Period (in months)*</Label>
          <Select value={data.tenancyPeriod.toString()} onValueChange={handlePeriodChange}>
            <SelectTrigger id="tenancyPeriod">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              {[3, 6, 9, 11, 12, 18, 24, 36].map((months) => (
                <SelectItem key={months} value={months.toString()}>
                  {months} months
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenancyEndDate">Tenancy End Date</Label>
          <Input
            id="tenancyEndDate"
            value={data.tenancyEndDate ? format(new Date(data.tenancyEndDate), "PPP") : ""}
            readOnly
            disabled
            className="bg-muted"
          />
          <p className="text-xs text-muted-foreground">Automatically calculated based on start date and period</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthlyRent">Monthly Rent Amount (₹)*</Label>
          <Input
            id="monthlyRent"
            type="number"
            value={data.monthlyRent || ""}
            onChange={(e) => updateData({ monthlyRent: Number.parseInt(e.target.value) || 0 })}
            placeholder="Enter monthly rent amount"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthlyRentDay">Rent Payment Day*</Label>
          <Select
            value={data.monthlyRentDay.toString()}
            onValueChange={(value) => updateData({ monthlyRentDay: Number.parseInt(value) })}
          >
            <SelectTrigger id="monthlyRentDay">
              <SelectValue placeholder="Select day" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                <SelectItem key={day} value={day.toString()}>
                  {day}th day of each month
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="securityDeposit">Security Deposit Amount (₹)*</Label>
          <Input
            id="securityDeposit"
            type="number"
            value={data.securityDeposit || ""}
            onChange={(e) => updateData({ securityDeposit: Number.parseInt(e.target.value) || 0 })}
            placeholder="Enter security deposit amount"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="noticePeriod">Notice Period (days)*</Label>
          <Select
            value={data.noticePeriod.toString()}
            onValueChange={(value) => updateData({ noticePeriod: Number.parseInt(value) })}
          >
            <SelectTrigger id="noticePeriod">
              <SelectValue placeholder="Select notice period" />
            </SelectTrigger>
            <SelectContent>
              {[15, 30, 45, 60, 90].map((days) => (
                <SelectItem key={days} value={days.toString()}>
                  {days} days
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

