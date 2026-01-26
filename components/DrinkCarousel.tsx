'use client'

import { useState } from 'react'
import Image from 'next/image'

interface DrinkCarouselProps {
  images: string[]
}

export default function DrinkCarousel({ images }: DrinkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Show 3 images at a time
  const visibleCount = 3
  const maxIndex = images.length - visibleCount

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const getVisibleImages = () => {
    return images.slice(currentIndex, currentIndex + visibleCount)
  }

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="overflow-hidden px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {getVisibleImages().map((image, localIndex) => (
            <div
              key={image}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src={image}
                alt="Boba Wali signature drink"
                fill
                className="object-cover"
                priority={localIndex === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
        aria-label="Previous drinks"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
        aria-label="Next drinks"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
