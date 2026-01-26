// import Hero from '@/components/Hero' // Original hero (no image)
// import HeroSideBySide from '@/components/HeroSideBySide' // Option 1: Side-by-side layout
import HeroBackground from '@/components/HeroBackground' // Option 2: Background image

import Footer from '@/components/Footer'
import {
  InquirySection,
  LogoCarousel,
  FeaturedInSection,
  MenuSection,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Toggle between options by commenting/uncommenting */}
      <HeroBackground />

      {/* Social Proof - Logo Carousel */}
      <LogoCarousel />

      {/* Menu - Signature Drinks */}
      <MenuSection />

      {/* Featured In - Press mentions */}
      <FeaturedInSection />

      {/* Inquiry Section */}
      <InquirySection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
