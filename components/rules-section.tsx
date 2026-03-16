import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const rules = [
  "Las distancias participativas (1.5 km y 3 km) no incluyen chip de medición de tiempo",
  "Las carreras competitivas (5 km y 10 km) incluyen chip de medición de tiempo oficial",
  "Todos los participantes reciben medalla de finalista (finisher)",
  "Premios para el podio: 1°, 2° y 3° lugar en cada categoría competitiva",
  "Es obligatorio el uso del número de corredor visible durante toda la carrera",
  "Los menores de edad deben contar con autorización de un adulto responsable",
  "El horario de acreditación finaliza 30 minutos antes de cada largada",
  "La organización no se responsabiliza por objetos perdidos o extraviados",
]

export function RulesSection() {
  return (
    <section id="reglamento" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Reglamento
          </h2>
          <p className="text-lg text-muted-foreground">
            Información importante para los participantes
          </p>
        </div>

        <Card className="mx-auto max-w-3xl border-none bg-card shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <ul className="space-y-4">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-card-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
