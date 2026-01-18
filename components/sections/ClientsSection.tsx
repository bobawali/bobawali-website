'use client'

import { motion } from 'framer-motion'
import { clients } from '@/content/clients'

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            From local favorites to global brands, here are a few of the clients we've poured for.
          </p>
        </motion.div>

        {/* Client logos/badges */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-gradient-to-br from-bg to-white px-8 py-6 lg:px-12 lg:py-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                {/* If logo is available, show it. Otherwise, show text */}
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 lg:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="text-center">
                    <p className="text-xl lg:text-2xl font-bold text-text group-hover:text-primary transition-colors">
                      {client.name}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-4 text-text/30">
            <div className="w-12 h-px bg-primary/20" />
            <span className="text-2xl">🧋</span>
            <div className="w-12 h-px bg-primary/20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
