import { Timer, Users, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const distances = [
  {
    distance: "1.5 km",
    type: "Participativo",
    description: "Ideal para niños y caminantes. Sin medición de tiempo.",
    icon: Users,
    color: "bg-primary/10 text-primary",
    badge: "Gratis",
  },
  {
    distance: "3 km",
    type: "Participativo",
    description: "Perfecto para familias y corredores recreativos.",
    icon: Users,
    color: "bg-primary/10 text-primary",
    badge: "Familiar",
  },
  {
    distance: "5 km",
    type: "Competitivo",
    description: "Carrera con chip de medición de tiempo oficial.",
    icon: Timer,
    color: "bg-accent/10 text-accent",
    badge: "Chip timing",
  },
  {
    distance: "10 km",
    type: "Competitivo",
    description: "El desafío principal con chip de medición de tiempo.",
    icon: Zap,
    color: "bg-accent/10 text-accent",
    badge: "Chip timing",
  },
]

export function DistancesSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Distancias
          </h2>
          <p className="text-lg text-muted-foreground">
            Elige la distancia que mejor se adapte a ti y tu familia
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {distances.map((item) => (
            <Card key={item.distance} className="relative overflow-hidden border-none bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute right-4 top-4">
                <Badge variant="secondary" className="text-xs">
                  {item.badge}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground">
                  {item.distance}
                </CardTitle>
                <p className="text-sm font-medium text-primary">{item.type}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
