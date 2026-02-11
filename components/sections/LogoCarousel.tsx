'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { clients } from '@/content/clients'

export default function LogoCarousel() {
  // Double the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="py-12 bg-white overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-text/50 text-sm font-medium mb-8 uppercase tracking-wider px-4"
      >
        Trusted by amazing brands & organizations
      </motion.p>

      {/* Carousel container with gradient edges */}
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <motion.div
        className="flex gap-6 items-center"
        animate={{
          x: [0, -(100 + 24) * clients.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {duplicatedClients.map((client, index) => {
          const isLarge = client.id === 'texas-halal-fest' || client.id === 'cars-n-chai'
          const needsPadding = client.id === 'google'
          return (
            <div
              key={`${client.id}-${index}`}
              className={`flex-shrink-0 flex items-center justify-center ${
                isLarge ? 'w-[160px] h-16' : 'w-[100px] h-12'
              } ${needsPadding ? 'px-3' : ''}`}
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={isLarge ? 160 : 100}
                  height={isLarge ? 64 : 48}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-text/40 font-medium text-sm whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          )
        })}
        </motion.div>
      </div>

    </section>
  )
}
