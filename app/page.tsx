import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CountdownSection } from "@/components/countdown-section"
import { InfoSection } from "@/components/info-section"
import { DistancesSection } from "@/components/distances-section"
import { RegistrationSection } from "@/components/registration-section"
import { ScheduleSection } from "@/components/schedule-section"
import { RoutesSection } from "@/components/routes-section"
import { RulesSection } from "@/components/rules-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CountdownSection />
        <InfoSection />
        <DistancesSection />
        <RegistrationSection />
        <ScheduleSection />
        <RoutesSection />
        <RulesSection />
      </main>
      <Footer />
    </div>
  )
}
