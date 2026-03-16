import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Event Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src="/images/logo.jpeg"
              alt="Desafío Pringles Sinsacate"
              width={80}
              height={80}
              className="mb-4 rounded-full"
            />
            <h3 className="mb-1 text-lg font-bold text-foreground">
              Maratón Familiar Pachamama 2026
            </h3>
            <p className="text-sm text-muted-foreground">
              4ta Edición - Desafío Pringles
            </p>
          </div>

          {/* Organizer */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="mb-4 font-semibold text-foreground">Organiza</h4>
            <p className="mb-2 font-medium text-foreground">
              Centro Educativo Coronel Pringles
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Sinsacate, Córdoba, Argentina</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="mb-4 font-semibold text-foreground">Contacto</h4>
            <div className="flex flex-col gap-3">
              <Link 
                href="mailto:contacto@desafiopringles.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>contacto@desafiopringles.com</span>
              </Link>
              <Link 
                href="https://instagram.com/desafiopringles" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                <span>@desafiopringles</span>
              </Link>
              <Link 
                href="https://wa.me/5493517123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="mb-2 text-sm font-medium text-primary">
            Evento deportivo comunitario por el Día de la Tierra
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 Desafío Pringles Sinsacate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
