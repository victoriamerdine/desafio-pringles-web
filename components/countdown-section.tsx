"use client"

import { useEffect, useState } from "react"

const TARGET_DATE = new Date("2026-04-18T16:00:00-03:00").getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date().getTime()
  const difference = TARGET_DATE - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  }
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-card shadow-lg sm:h-24 sm:w-24">
        <span className="text-3xl font-bold text-primary sm:text-4xl">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  )
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Faltan para la largada
          </h2>
          <div className="flex justify-center gap-4 sm:gap-6">
            <CountdownBox value={0} label="Días" />
            <CountdownBox value={0} label="Horas" />
            <CountdownBox value={0} label="Minutos" />
            <CountdownBox value={0} label="Segundos" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-2xl font-bold text-foreground">
          Faltan para la largada
        </h2>
        <div className="flex justify-center gap-4 sm:gap-6">
          <CountdownBox value={timeLeft.days} label="Días" />
          <CountdownBox value={timeLeft.hours} label="Horas" />
          <CountdownBox value={timeLeft.minutes} label="Minutos" />
          <CountdownBox value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  )
}
