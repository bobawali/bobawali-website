'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { InstagramIcon } from '@/components/icons'
import { GOOGLE_FORM_URL } from '@/content/links'
const INSTAGRAM_URL = 'https://www.instagram.com/bobawali.htx/'

export default function InquirySection() {
  return (
    <section id="inquiry" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4"
        >
          Book <span className="text-primary">Boba Wali</span> for Your Event
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-text/60 mb-10 max-w-xl mx-auto"
        >
          Tell us about your event and we&apos;ll be in touch within 24–48
          hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-lg shadow-primary/25"
          >
            Fill out this form
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-text/50"
        >
          Prefer to reach out directly?{' '}
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            DM us on Instagram
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
