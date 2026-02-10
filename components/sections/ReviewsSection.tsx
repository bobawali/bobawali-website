'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { reviews, reviewsConfig } from '@/content/reviews'
import Link from 'next/link'

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length)
  }, [])

  useEffect(() => {
    let timer = setInterval(next, reviewsConfig.rotateInterval)

    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(timer)
      } else {
        timer = setInterval(next, reviewsConfig.rotateInterval)
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [next])

  return (
    <section id="reviews" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <h2 className="text-2xl md:text-[32px] font-bold text-text mb-3">
            What Our Clients Say
          </h2>

          {/* Pill badge - clickable to Google Maps */}
          <Link
            href={reviewsConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Boba Wali on Google Maps - 5.0 stars"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.04] hover:bg-primary/[0.08] transition-colors"
          >
            <GoogleIcon className="w-[18px] h-[18px]" />
            <span className="text-lg font-bold text-primary">
              {reviewsConfig.rating.toFixed(1)}
            </span>
            <span className="text-lg text-yellow-400 tracking-wide" aria-hidden="true">
              ★★★★★
            </span>
          </Link>
        </motion.div>

        {/* Quote carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative min-h-[280px] md:min-h-[260px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[current].id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6 }}
              className="text-center px-4 md:px-8 pt-10"
            >
              {/* Opening quote mark */}
              <div
                className="font-serif text-7xl text-primary/10 leading-none mb-[-20px]"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-lg md:text-[21px] font-medium leading-relaxed md:leading-[1.55] text-text italic">
                {reviews[current].segments.map((segment, i) =>
                  segment.highlight ? (
                    <strong
                      key={i}
                      className="text-primary font-bold italic"
                    >
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={i}>{segment.text}</span>
                  )
                )}
              </p>

              {/* Author */}
              <p className="mt-5 text-sm font-medium text-text/50">
                — {reviews[current].author}
                {reviews[current].affiliation &&
                  `, ${reviews[current].affiliation}`}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
