import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PhotoboothSection } from "@/components/photobooth-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ContactBannerSection } from "@/components/contact-banner-section"
import { ContactSection } from "@/components/contact-section"
import { PhotoboothResultsSection } from "@/components/photobooth-results-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <PhotoboothResultsSection />
      <ServicesSection />
      <PhotoboothSection />
      <ContactBannerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
