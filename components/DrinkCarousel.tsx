'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface DrinkCarouselProps {
  images: string[]
  autoPlayInterval?: number
}

export default function DrinkCarousel({ images, autoPlayInterval = 3000 }: DrinkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Show 3 images at a time
  const visibleCount = 3
  const maxIndex = images.length - visibleCount

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered && autoPlayInterval > 0) {
      const interval = setInterval(nextSlide, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [isHovered, autoPlayInterval, nextSlide])

  // Calculate transform based on current index
  const itemWidth = 100 / visibleCount // Each item is 33.33% of container
  const translateX = -(currentIndex * itemWidth)

  return (
    <div
      className="relative flex items-center gap-2 md:gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="flex-shrink-0 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
        aria-label="Previous drinks"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Carousel container */}
      <div className="overflow-hidden flex-1">
        <div
          className="flex gap-2 md:gap-6 lg:gap-8 transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={`drink-${index}`}
              className="relative aspect-[3/4] rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex-shrink-0"
              style={{ width: `${itemWidth}%` }}
            >
              <Image
                src={image}
                alt="Boba Wali signature drink"
                fill
                className="object-cover"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="flex-shrink-0 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
        aria-label="Next drinks"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
