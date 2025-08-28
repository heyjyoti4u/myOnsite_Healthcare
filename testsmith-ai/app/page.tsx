import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TechnicalRequirements } from "@/components/technical-requirements"
import { EvaluationFramework } from "@/components/evaluation-framework"
import { Deliverables } from "@/components/deliverables"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechnicalRequirements />
        <EvaluationFramework />
        <Deliverables />
      </main>
      <Footer />
    </div>
  )
}
