import { format, addMonths } from "date-fns"
import type { AgreementData } from "./page"

interface AgreementPreviewProps {
  data: AgreementData
}

export default function AgreementPreview({ data }: AgreementPreviewProps) {
  // Calculate end date based on start date and tenancy period
  const endDate = data.tenancyStartDate
    ? format(addMonths(new Date(data.tenancyStartDate), data.tenancyPeriod), "PPP")
    : "___________"

  // Format currency
  const formatCurrency = (amount: number) => {
    return amount ? `₹${amount.toLocaleString()}` : "(___________)"
  }

  // Format date
  const formatDate = (date: string) => {
    return date ? format(new Date(date), "PPP") : "___________"
  }

  // Bold placeholder or value
  const Value = ({
    value,
    placeholder = "___________",
  }: { value: string | number | null | undefined; placeholder?: string }) => {
    return <strong className="text-primary">{value || placeholder}</strong>
  }

  return (
    <div className="prose prose-sm max-w-none">
      <h2 className="text-center mb-6">RENT AGREEMENT</h2>

      <p>
        This rent agreement ("Agreement") is made on{" "}
        <Value value={data.agreementDate ? formatDate(data.agreementDate) : null} /> at{" "}
        <Value value={data.agreementCity} />, <Value value={data.agreementState} />
      </p>

      <p className="font-bold mt-4">BETWEEN</p>

      <p>
        <Value value={data.landlordName} /> (hereinafter referred to as the "LANDLORD") which expression shall, unless
        repugnant to the context, mean and include his heirs, executors, and permitted assigns
      </p>

      <p className="font-bold mt-4">AND</p>

      <p>
        <Value value={data.tenantName} /> (hereinafter referred to as the "TENANT") which expression shall, unless
        repugnant to the context, mean and include his heirs, executors, and permitted assigns
      </p>

      <p className="font-bold mt-4">WHEREAS</p>

      <p>
        The said LANDLORD(s) is the absolute (Landlord/Landlady) of the Property: <Value value={data.propertyAddress} />{" "}
        (hereinafter referred as "PROPERTY"), and the above said TENANT(s) has contacted the LANDLORD(s) to take the
        property on rent and the LANDLORD(s) has agreed to let out the Property to the TENANT(s) on the below-given
        terms and conditions.
      </p>

      <p className="font-bold mt-4">
        NOW, THIS DEED FURTHER WITNESSETH AND AGREED BY AND BETWEEN THE SAID PARTIES AS FOLLOWS:
      </p>

      <ol className="pl-4">
        <li>
          <strong>Term of Tenancy:</strong> The term of this agreement shall be for <Value value={data.tenancyPeriod} />{" "}
          months commencing from <Value value={data.tenancyStartDate ? formatDate(data.tenancyStartDate) : null} /> and
          ending on <Value value={endDate} />
        </li>

        <li>
          <strong>Rent and Security Deposit:</strong>
          <ol type="a" className="pl-4">
            <li>
              The monthly rent for the property is{" "}
              <Value value={data.monthlyRent ? formatCurrency(data.monthlyRent) : null} /> per month
            </li>
            <li>
              The tenant agrees to pay the monthly rent on or before <Value value={data.monthlyRentDay} /> day of each
              month
            </li>
            <li>
              A security deposit of <Value value={data.securityDeposit ? formatCurrency(data.securityDeposit) : null} />{" "}
              has been paid by the tenant to the landlord and this amount will carry no interest. The security deposit
              shall be refunded at the end of the tenancy period, subject to deductions for any damages or outstanding
              dues
            </li>
          </ol>
        </li>

        <li>
          <strong>Utilities and Maintenance:</strong>
          <ol type="a" className="pl-4">
            <li>
              The tenant will be responsible for paying utility bills including electricity, water, gas, and any other
              applicable charges
            </li>
            <li>Society Maintenance charges if any, are included in the monthly rent paid by the Tenant</li>
            <li>
              The tenant shall maintain the property in good condition and shall be responsible for any damages caused
              beyond normal wear and tear
            </li>
            <li>
              The landlord shall be responsible for regular maintenance and repairs, including plumbing, electrical, and
              structural maintenance
            </li>
          </ol>
        </li>

        <li>
          <strong>Use of Property:</strong>
          <ol type="a" className="pl-4">
            <li>The property shall be used solely for residential purposes by the tenant</li>
            <li>
              Subletting, assigning, or transferring the property to any third party, in whole or in part, without the
              prior written consent of the landlord is strictly prohibited. Any subletting or assignment requires the
              landlord's explicit written approval
            </li>
          </ol>
        </li>

        <li>
          <strong>Termination and Notice:</strong>
          <ol type="a" className="pl-4">
            <li>
              Either party may terminate this agreement by providing <Value value={data.noticePeriod} /> days written
              notice to the other party through any suitable channel
            </li>
            <li>
              Upon termination, the tenant shall return the property in the same condition as at the beginning of the
              tenancy, minus normal wear and tear
            </li>
          </ol>
        </li>

        <li>
          <strong>Repairs and Alterations:</strong>
          <ol type="a" className="pl-4">
            <li>The tenant shall promptly inform the landlord of any necessary repairs or maintenance issues</li>
            <li>
              The tenant shall not make any structural alterations or modifications to the property without the written
              consent of the landlord
            </li>
          </ol>
        </li>

        <li>
          <strong>Entry and Inspection:</strong>
          <ol type="a" className="pl-4">
            <li>
              The landlord has the right to enter the property with prior notice to inspect its condition or make
              repairs
            </li>
            <li>The landlord shall provide reasonable notice, except in cases of emergencies</li>
          </ol>
        </li>

        <li>
          <strong>Default and Eviction:</strong>
          <ol type="a" className="pl-4">
            <li>Failure to make regular rent payments or violation of terms can result in eviction</li>
            <li>
              The landlord will be within their right to evict the Tenant without the issuance of any legal notice
            </li>
          </ol>
        </li>

        <li>
          <strong>Use of Premises:</strong>
          <ol type="a" className="pl-4">
            <li>The tenant shall not use the premises for any illegal, immoral, or commercial purposes</li>
            <li>The tenant shall not engage in any activity that might cause a nuisance or disturbance to neighbors</li>
          </ol>
        </li>

        <li>
          <strong>Furnishings and Appliances:</strong> The tenant shall be responsible for the reasonable care and
          maintenance of provided furnishings and appliances
          {data.furnishedProperty && (
            <p className="mt-2">
              The property is provided with the following furnishings: <Value value={data.furnishingDetails} />
            </p>
          )}
        </li>

        <li>
          <strong>Renewal of Agreement:</strong>
          <ol type="a" className="pl-4">
            <li>
              If both parties agree, this agreement may be renewed for another term subject to updated terms and
              conditions
            </li>
            <li>
              Renewal terms and any rent adjustments should be discussed and agreed upon in writing prior to the renewal
              date
            </li>
          </ol>
        </li>

        <li>
          <strong>Maintenance Charges:</strong> The tenant shall be responsible for any increases in maintenance charges
          applicable during the tenancy period
        </li>

        <li>
          <strong>Notice of Absence:</strong> The tenant shall provide the landlord with written notice if they plan to
          be away from the premises for an extended period
        </li>

        <li>
          <strong>Dispute Resolution:</strong> In case of any disputes or disagreements, both parties shall first
          attempt to resolve the matter amicably through negotiation. If unresolved, mediation or arbitration can be
          pursued before pursuing legal action
        </li>

        <li>
          <strong>Force Majeure:</strong> In the event that either party is unable to fulfill its obligations due to
          circumstances beyond their control (such as acts of God, natural disasters, government actions), the affected
          party shall be excused from such obligations during the period of disruption
        </li>

        <li>
          <strong>Indemnity:</strong> The tenant shall indemnify and hold the landlord harmless from any claims,
          damages, or liabilities arising from the tenant's use of the premises
        </li>

        <li>
          <strong>Notices:</strong> All notices and communications shall be in writing and shall be deemed properly
          delivered if sent via registered post or other medium as per the convenience of both parties
        </li>
      </ol>

      <p className="mt-6">
        <strong>In Witness Whereof,</strong> the Parties hereto have set their hands and signatures on the date and year
        first above mentioned.
      </p>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div>
          <p>
            <strong>LANDLORD</strong>
          </p>
          <p className="mt-8 border-t border-black pt-1">
            Signature: <Value value={data.landlordSignature} />
          </p>
          <p>
            Name: <Value value={data.landlordName} />
          </p>
        </div>
        <div>
          <p>
            <strong>TENANT</strong>
          </p>
          <p className="mt-8 border-t border-black pt-1">
            Signature: <Value value={data.tenantSignature} />
          </p>
          <p>
            Name: <Value value={data.tenantName} />
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p>
          <strong>WITNESS</strong>
        </p>
        <p className="mt-8 border-t border-black pt-1">
          Signature: <Value value={data.witnessSignature} />
        </p>
        <p>
          Name: <Value value={data.witnessName} />
        </p>
      </div>
    </div>
  )
}

