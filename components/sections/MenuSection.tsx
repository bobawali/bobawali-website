'use client'

import { motion } from 'framer-motion'
import { drinkImages, menuConfig } from '@/content/menu'
import Link from 'next/link'
import DrinkCarousel from '@/components/DrinkCarousel'

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-white to-bg -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
            Our Signature Creations
          </h2>
          <p className="text-lg md:text-xl text-text/70 max-w-3xl mx-auto mb-4">
            From classic Mango Lassi to Gulab Jamun Milk Tea, Falooda, Rooh Afza Lemonade, and beyond!
          </p>
        </motion.div>

        {/* Drink carousel - shows 3 at a time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <DrinkCarousel images={drinkImages} />
        </motion.div>

        {/* View full menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href={menuConfig.fullMenuPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all hover:scale-105 hover:shadow-xl shadow-lg"
          >
            View Full Menu
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
