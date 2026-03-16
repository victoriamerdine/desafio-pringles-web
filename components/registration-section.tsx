import Link from "next/link"
import { CreditCard, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const prices = [
  { distance: "1.5 km", price: "Gratis", highlight: false },
  { distance: "3 km", price: "$15.000", highlight: false },
  { distance: "5 km", price: "$20.000", highlight: true },
  { distance: "10 km", price: "$25.000", highlight: true },
]

export function RegistrationSection() {
  return (
    <section id="inscripcion" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Inscripciones
          </h2>
          <p className="text-lg text-muted-foreground">
            Asegura tu lugar en la carrera
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Price Cards */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {prices.map((item) => (
              <Card 
                key={item.distance} 
                className={`border-none text-center shadow-md ${
                  item.highlight 
                    ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground" 
                    : "bg-card"
                }`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className={`text-lg font-medium ${item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {item.distance}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold ${item.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {item.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Registration Button */}
          <div className="mb-10 text-center">
            <Button asChild size="lg" className="bg-accent px-8 text-accent-foreground hover:bg-accent/90">
              <Link 
                href="https://forms.gle/BKBhmsF74pG7Gkbs9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Inscribirse Online
              </Link>
            </Button>
          </div>

          {/* Payment Info */}
          <Card className="border-none bg-muted/50 shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <CreditCard className="h-5 w-5 text-primary" />
                Datos para el pago
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm">
                  <Building2 className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Alias</p>
                    <p className="font-mono font-semibold text-foreground">coopepringles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm">
                  <Building2 className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Banco</p>
                    <p className="font-semibold text-foreground">Banco de la Provincia de Córdoba</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
