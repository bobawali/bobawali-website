'use client'

import { motion } from 'framer-motion'
import { newsFeatures } from '@/content/features'
import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedInSection() {
  return (
    <section className="py-8 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Compact banner with logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:hidden"
        >
          <p className="text-text/50 text-xs text-center mb-3">Featured In</p>
          <div className="flex items-center justify-center gap-6">
            {newsFeatures.map((feature) => (
              <Link
                key={feature.id}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 py-2 opacity-80 active:opacity-100 transition-opacity"
              >
                {feature.logoUrl && (
                  <Image
                    src={feature.logoUrl}
                    alt={feature.outlet}
                    width={180}
                    height={40}
                    className={`object-contain ${
                      feature.id === 'houston-chronicle' ? 'h-16 w-auto' : 'h-5 w-[130px]'
                    } ${feature.id === 'the-juggernaut' ? 'invert' : ''}`}
                  />
                )}
                <span className="inline-flex items-center gap-0.5 text-text/30 text-[10px] font-normal tracking-wide">
                  Read
                  <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Desktop: Full feature cards */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-text mb-2">
              Featured In
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {newsFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-gradient-to-br from-bg to-white rounded-xl p-6 border border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all h-full">
                    <div className="flex items-center gap-3 mb-3">
                      {feature.logoUrl ? (
                        <Image
                          src={feature.logoUrl}
                          alt={feature.outlet}
                          width={200}
                          height={50}
                          className={`object-contain ${
                            feature.id === 'houston-chronicle' ? 'h-20 w-auto' : 'h-7 w-[170px]'
                          } ${feature.id === 'the-juggernaut' ? 'invert' : ''}`}
                        />
                      ) : (
                        <p className="font-semibold text-text">{feature.outlet}</p>
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {feature.title}
                    </h3>
                    <p className="text-text/60 text-sm mb-3 line-clamp-2">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
