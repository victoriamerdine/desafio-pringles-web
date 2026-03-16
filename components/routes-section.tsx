"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const routes = [
  { 
    distance: "1.5 km", 
    color: "bg-secondary",
    iframeSrc: "https://connect.garmin.com/modern/course/436187580"
  },
  { 
    distance: "3 km", 
    color: "bg-primary",
    iframeSrc: "https://connect.garmin.com/modern/course/436186189"
  },
  { 
    distance: "5 km", 
    color: "bg-accent",
    iframeSrc: "https://connect.garmin.com/modern/course/429241293"
  },
  { 
    distance: "10 km", 
    color: "bg-destructive",
    iframeSrc: "https://connect.garmin.com/app/course/embed/439569406"
  },
]

export function RoutesSection() {
  const [activeRoute, setActiveRoute] = useState("5 km")

  const currentRoute = routes.find(r => r.distance === activeRoute)

  return (
    <section id="recorridos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Recorridos
          </h2>
          <p className="text-lg text-muted-foreground">
            Explora los circuitos de cada distancia
          </p>
        </div>

        {/* Route Selector */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {routes.map((route) => (
            <Button
              key={route.distance}
              variant={activeRoute === route.distance ? "default" : "outline"}
              onClick={() => setActiveRoute(route.distance)}
              className="gap-2"
            >
              <span className={`h-3 w-3 rounded-full ${route.color}`} />
              {route.distance}
            </Button>
          ))}
        </div>

        {/* Garmin Embed */}
        <Card className="mx-auto max-w-4xl overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            <div className="relative aspect-[4/3] w-full bg-muted sm:aspect-video">
              {currentRoute && (
                <iframe
                  key={currentRoute.distance}
                  src={currentRoute.iframeSrc}
                  width="100%"
                  height="100%"
                  title={`Recorrido ${currentRoute.distance}`}
                  frameBorder="0"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-secondary" />
            <span>1.5 km - Recreativo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary" />
            <span>3 km - Participativo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent" />
            <span>5 km - Competitivo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span>10 km - Competitivo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
