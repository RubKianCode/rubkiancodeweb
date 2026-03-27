import { Navbar } from 
import { HeroSection } from 
import { ServicesSection } from 
import { PhotoboothSection } from 
import { ShowcaseSection } from 
import { ContactSection } from 
import { Footer } from 

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <PhotoboothSection />
      <ContactSection />
      <Footer />
    </main>
  )
}