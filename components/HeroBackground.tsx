'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GOOGLE_FORM_URL } from '@/content/links'

export default function HeroBackground() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center relative overflow-hidden pt-20"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/cart_at_event_with_customers.jpeg"
          alt="Boba Wali cart at event"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg/95 via-bg/85 to-primary/60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text leading-tight mb-6">
            <span className="block">More Than Drinks.</span>
            <span className="text-shimmer block">It&apos;s an Experience.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-text/80 mb-8 max-w-3xl mx-auto"
          >
            South Asian fusion drinks for weddings, parties, and corporate gatherings across Houston. Non-alcoholic sips your guests won&apos;t forget.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/25 text-lg"
            >
              Book Your Event
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
