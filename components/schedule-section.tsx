import { Clock, Award, Users, Mic, Flag } from "lucide-react"

const schedule = [
  {
    time: "14:30",
    title: "Acreditación",
    description: "Retiro de kit y número de corredor",
    icon: Users,
  },
  {
    time: "15:30",
    title: "Charla técnica + Entrada en calor",
    description: "Para distancias 1.5 km y 3 km",
    icon: Mic,
  },
  {
    time: "16:00",
    title: "Largada 1.5 km y 3 km",
    description: "Inicio de las carreras participativas",
    icon: Flag,
  },
  {
    time: "16:30",
    title: "Charla técnica + Entrada en calor",
    description: "Para distancias 5 km y 10 km",
    icon: Mic,
  },
  {
    time: "17:00",
    title: "Largada 5 km y 10 km",
    description: "Inicio de las carreras competitivas",
    icon: Flag,
  },
  {
    time: "18:30",
    title: "Premiación",
    description: "Entrega de medallas y premios al podio",
    icon: Award,
  },
]

export function ScheduleSection() {
  return (
    <section id="cronograma" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Cronograma del Evento
          </h2>
          <p className="text-lg text-muted-foreground">
            Horarios del día de la carrera
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-border sm:left-1/2 sm:-translate-x-0.5" />

            {schedule.map((item, index) => (
              <div key={item.time} className="relative mb-8 last:mb-0">
                <div className={`flex items-start gap-4 sm:gap-0 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Time badge */}
                  <div className={`hidden w-1/2 sm:block ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                      <Clock className="h-4 w-4" />
                      {item.time}
                    </span>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary sm:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 flex-1 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pl-8" : "sm:pr-8"}`}>
                    <div className="rounded-xl bg-card p-4 shadow-md">
                      <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground sm:hidden">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </span>
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
