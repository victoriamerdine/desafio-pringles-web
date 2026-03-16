import { Activity, Users, Heart, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Activity,
    title: "Actividad Física",
    description: "Promovemos el deporte y la vida saludable para todas las edades",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Un evento que une a toda la comunidad de Sinsacate",
  },
  {
    icon: Heart,
    title: "Familias",
    description: "Distancias pensadas para que participen niños, jóvenes y adultos",
  },
  {
    icon: Leaf,
    title: "Cuidado del Planeta",
    description: "Celebramos el Día de la Tierra con conciencia ambiental",
  },
]

export function InfoSection() {
  return (
    <section id="informacion" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Sobre el Evento
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            La Maratón Familiar Pachamama es un evento deportivo comunitario organizado por el{" "}
            <strong className="text-foreground">Centro Educativo Coronel Pringles</strong>. 
            Celebramos el Día de la Tierra corriendo juntos en familia, promoviendo 
            la actividad física y el cuidado del medio ambiente.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none bg-card shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
