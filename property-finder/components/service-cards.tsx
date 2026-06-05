import { CreditCard, Diamond, Home, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServiceCards() {
  const services = [
    {
      title: "Pay on Credit",
      description: "Pay your rent using Credit Card",
      icon: CreditCard,
    },
    {
      title: "Property Premium",
      description: "Instant access to zero brokerage properties",
      icon: Diamond,
    },
    {
      title: "Home Loans",
      description: "Lowest interest rate offers",
      icon: Home,
    },
    {
      title: "Property Protect",
      description: "Protection against cyber frauds",
      icon: Shield,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <service.icon className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

