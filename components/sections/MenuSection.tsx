'use client'

import { motion } from 'framer-motion'
import { featuredDrinks, menuConfig } from '@/content/menu'
import Link from 'next/link'

const tagColors: Record<string, string> = {
  'Best Seller': 'bg-primary text-white',
  'Desi Classic': 'bg-primary/80 text-white',
  'Refresher': 'bg-orange-400 text-white',
  'New': 'bg-green-500 text-white',
}

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-4">
            Our Drinks
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            We rotate a menu of South Asian–inspired bubble teas and refreshers like Rose Lemonade,
            Mango Lassi, Gulab Jamun Milk Tea, and Falooda Milk Tea.
          </p>
        </motion.div>

        {/* Menu poster placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-8 lg:p-12 shadow-xl border border-primary/10">
              {/* Placeholder for menu poster image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🧋</div>
                  <p className="text-text/50 text-lg">
                    Menu poster will go here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured drinks grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredDrinks.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 1, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg border border-primary/10 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-text">{drink.name}</h3>
                {drink.tag && (
                  <span className={`text-xs px-2 py-1 rounded-full ${tagColors[drink.tag]}`}>
                    {drink.tag}
                  </span>
                )}
              </div>
              <p className="text-text/60 text-sm">{drink.description}</p>
            </motion.div>
          ))}
        </div>

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
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors group"
          >
            View Full Menu (PDF)
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
