import HeroBackground from '@/components/HeroBackground'

import Footer from '@/components/Footer'
import {
  InquirySection,
  LogoCarousel,
  FeaturedInSection,
  MenuSection,
  ReviewsSection,
  ExperienceSection,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBackground />

      {/* Social Proof - Logo Carousel */}
      <LogoCarousel />

      {/* Menu - Signature Drinks */}
      <MenuSection />

      {/* The Experience - How it works */}
      <ExperienceSection />

      {/* Reviews - Google Reviews carousel */}
      <ReviewsSection />

      {/* Featured In - Press mentions */}
      <FeaturedInSection />

      {/* Inquiry Section */}
      <InquirySection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
