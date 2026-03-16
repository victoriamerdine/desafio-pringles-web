import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center gap-8 px-4 py-16 lg:flex-row lg:gap-12">
        {/* Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            4ta Edición
          </span>
          
          <h1 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Maratón Familiar{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pachamama 2026
            </span>
          </h1>
          
          <p className="mb-8 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
            &ldquo;Corramos juntos por nuestra Tierra&rdquo;
          </p>

          <div className="mb-8 flex flex-col gap-3 text-muted-foreground sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Sinsacate, Córdoba</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>18 de abril de 2026</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#inscripcion">Inscribirme ahora</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#recorridos">Ver recorridos</Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/flyer.jpeg"
              alt="Flyer Desafío Pringles 2026"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-primary/20 blur-xl" />
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-accent/20 blur-xl" />
        </div>
      </div>
    </section>
  )
}
