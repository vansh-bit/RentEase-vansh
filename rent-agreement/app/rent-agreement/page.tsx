"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileDown, Printer } from "lucide-react"
import { generateId } from "@/lib/utils"
import AgreementDetails from "./agreement-details"
import PropertyDetails from "./property-details"
import TermsOfAgreement from "./terms-of-agreement"
import LandlordDetails from "./landlord-details"
import TenantDetails from "./tenant-details"
import AdditionalTerms from "./additional-terms"
import SignatureSection from "./signature-section"
import AgreementPreview from "./agreement-preview"
import ReviewSubmission from "./review-submission"
import SuccessPage from "./success-page"

export type AgreementData = {
  agreementDate: string
  agreementCity: string
  agreementState: string

  propertyAddress: string
  propertyType: string

  tenancyStartDate: string
  tenancyEndDate: string
  tenancyPeriod: number
  monthlyRent: number
  monthlyRentDay: number
  securityDeposit: number

  landlordName: string
  landlordAddress: string
  landlordPhone: string
  landlordEmail: string

  tenantName: string
  tenantAddress: string
  tenantPhone: string
  tenantEmail: string

  furnishedProperty: boolean
  furnishingDetails: string
  maintenanceResponsibility: string
  noticePeriod: number

  landlordSignature: string
  tenantSignature: string
  witnessName: string
  witnessSignature: string
}

type FormStage = "form" | "review" | "success"

export default function RentAgreement() {
  const [activeTab, setActiveTab] = useState("agreement")
  const [formStage, setFormStage] = useState<FormStage>("form")
  const [listingId, setListingId] = useState("")
  const [agreementData, setAgreementData] = useState<AgreementData>({
    agreementDate: "",
    agreementCity: "",
    agreementState: "",
    propertyAddress: "",
    propertyType: "Residential",
    tenancyStartDate: "",
    tenancyEndDate: "",
    tenancyPeriod: 12,
    monthlyRent: 0,
    monthlyRentDay: 5,
    securityDeposit: 0,
    landlordName: "",
    landlordAddress: "",
    landlordPhone: "",
    landlordEmail: "",
    tenantName: "",
    tenantAddress: "",
    tenantPhone: "",
    tenantEmail: "",
    furnishedProperty: false,
    furnishingDetails: "",
    maintenanceResponsibility: "Tenant",
    noticePeriod: 30,
    landlordSignature: "",
    tenantSignature: "",
    witnessName: "",
    witnessSignature: "",
  })

  const updateAgreementData = (data: Partial<AgreementData>) => {
    setAgreementData((prev) => ({ ...prev, ...data }))
  }

  const handlePrint = () => {
    window.print()
  }

  const handleNext = () => {
    const tabs = ["agreement", "property", "terms", "landlord", "tenant", "additional", "signature"]
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1])
    } else {
      // If we're on the last tab, move to review stage
      setFormStage("review")
    }
  }

  const handlePrevious = () => {
    const tabs = ["agreement", "property", "terms", "landlord", "tenant", "additional", "signature"]
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1])
    }
  }

  const handleSubmitForm = () => {
    // Generate a unique listing ID
    const newListingId = `RA-${generateId(8).toUpperCase()}`
    setListingId(newListingId)
    setFormStage("success")
  }

  const handleBackToEdit = () => {
    setFormStage("form")
    setActiveTab("signature")
  }

  if (formStage === "success") {
    return (
      <div className="container mx-auto py-6">
        <SuccessPage data={agreementData} listingId={listingId} />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Residential Rent Agreement</h1>
        {formStage === "form" && (
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {formStage === "form" ? (
            <>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-7 w-full">
                  <TabsTrigger value="agreement">Agreement</TabsTrigger>
                  <TabsTrigger value="property">Property</TabsTrigger>
                  <TabsTrigger value="terms">Terms</TabsTrigger>
                  <TabsTrigger value="landlord">Landlord</TabsTrigger>
                  <TabsTrigger value="tenant">Tenant</TabsTrigger>
                  <TabsTrigger value="additional">Additional</TabsTrigger>
                  <TabsTrigger value="signature">Signature</TabsTrigger>
                </TabsList>
                <TabsContent value="agreement">
                  <AgreementDetails data={agreementData} updateData={updateAgreementData} />
                </TabsContent>
                <TabsContent value="property">
                  <PropertyDetails data={agreementData} updateData={updateAgreementData} />
                </TabsContent>
                <TabsContent value="terms">
                  <TermsOfAgreement data={agreementData} updateData={updateAgreementData} />
                </TabsContent>
                <TabsContent value="landlord">
                  <LandlordDetails data={agreementData} updateData={updateAgreementData} />
                </TabsContent>
                <TabsContent value="tenant">
                  <TenantDetails data={agreementData} updateData={updateAgreementData} />
                </TabsContent>
                <TabsContent value="additional">
                  <AdditionalTerms data={agreementData} updateData={updateAgreementData} />
                </TabsContent>
                <TabsContent value="signature">
                  <SignatureSection data={agreementData} updateData={updateAgreementData} />
                </TabsContent>
              </Tabs>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={activeTab === "agreement"}>
                  Previous
                </Button>
                {activeTab === "signature" ? (
                  <Button onClick={() => setFormStage("review")}>Review & Submit</Button>
                ) : (
                  <Button onClick={handleNext}>Next</Button>
                )}
              </div>
            </>
          ) : (
            <ReviewSubmission data={agreementData} onBack={handleBackToEdit} onSubmit={handleSubmitForm} />
          )}
        </div>

        <div className="print:w-full">
          <Card className="p-6 max-h-[800px] overflow-y-auto">
            <AgreementPreview data={agreementData} />
          </Card>
        </div>
      </div>
    </div>
  )
}

