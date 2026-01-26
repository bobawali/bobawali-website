'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const topDrinks = [
  { name: 'Mango Lassi', color: 'bg-yellow-400' },
  { name: 'Gulab Jamun Milk Tea', color: 'bg-amber-600' },
  { name: 'Falooda Milk Tea', color: 'bg-pink-300' },
]

export default function HeroSideBySide() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-white to-secondary/20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Your Event Deserves{' '}
              <span className="text-shimmer">Better Boba</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl text-text/70 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We bring South Asian fusion drinks to Houston weddings, parties & corporate events. Non-alcoholic. Unforgettable.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mb-8"
            >
              <button
                onClick={() => scrollToSection('#inquiry')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/25 text-lg"
              >
                Book Your Event
              </button>
            </motion.div>

            {/* Top drinks preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <span className="text-text/50 text-sm">Fan favorites:</span>
              {topDrinks.map((drink, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-sm text-text/70"
                >
                  <span className={`w-2 h-2 rounded-full ${drink.color}`} />
                  {drink.name}
                  {i < topDrinks.length - 1 && <span className="text-text/30 ml-1">·</span>}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/photos/cart_at_event_with_customers.jpeg"
                alt="Boba Wali cart at event with customers"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
