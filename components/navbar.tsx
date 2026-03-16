"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#informacion", label: "Información" },
  { href: "#inscripcion", label: "Inscripción" },
  { href: "#cronograma", label: "Cronograma" },
  { href: "#recorridos", label: "Recorridos" },
  { href: "#reglamento", label: "Reglamento" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Desafío Pringles Sinsacate"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="hidden font-bold text-foreground sm:inline-block">
            Desafío Pringles
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#inscripcion">Inscribirse</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#inscripcion" onClick={() => setIsOpen(false)}>
                Inscribirse
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
