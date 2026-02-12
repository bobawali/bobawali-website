'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import Image from 'next/image'
import type { DrinkImage } from '@/content/menu'

interface DrinkCarouselProps {
  images: DrinkImage[]
  autoPlayInterval?: number
}

export default function DrinkCarousel({ images, autoPlayInterval = 2000 }: DrinkCarouselProps) {
  const [isMobile, setIsMobile] = useState(false)
  const visibleCount = isMobile ? 1 : 3
  // Extra clones beyond visibleCount to cover peek images on edges
  const cloneCount = visibleCount + 2

  // Clone images for infinite loop: [last N] + [all] + [first N]
  const extendedImages = useMemo(() => [
    ...images.slice(-cloneCount),
    ...images,
    ...images.slice(0, cloneCount),
  ], [images, cloneCount])

  // Start at the first real image (offset by cloned prefix)
  const [currentIndex, setCurrentIndex] = useState(cloneCount)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const isAnimatingRef = useRef(false)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Responsive breakpoint
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches)
    }
    handleChange(mql)
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  // Reset index when visibleCount changes (mobile <-> desktop)
  useEffect(() => {
    setIsTransitioning(false)
    setCurrentIndex(cloneCount)
  }, [visibleCount, cloneCount])

  // Re-enable transition after a snap reset
  useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
      return () => cancelAnimationFrame(id)
    }
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    setCurrentIndex((prev) => prev + 1)
  }, [])

  const prevSlide = useCallback(() => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    setCurrentIndex((prev) => prev - 1)
  }, [])

  // Infinite loop snap on transition end
  const handleTransitionEnd = useCallback(() => {
    isAnimatingRef.current = false
    // If we've scrolled into the appended clones (past the last real image)
    if (currentIndex >= images.length + cloneCount) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex - images.length)
    }
    // If we've scrolled into the prepended clones (before the first real image)
    if (currentIndex < cloneCount) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex + images.length)
    }
  }, [currentIndex, images.length, cloneCount])

  // Auto-scroll
  useEffect(() => {
    if (isHovered || isPaused || autoPlayInterval <= 0) {
      return
    }
    autoPlayRef.current = setInterval(nextSlide, autoPlayInterval)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isHovered, isPaused, autoPlayInterval, nextSlide])

  const pauseAndResume = useCallback(() => {
    setIsPaused(true)
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 5000)
  }, [])

  // Cleanup resume timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }
  }, [])

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current

    // Only swipe if horizontal movement exceeds vertical (avoid hijacking scroll)
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      pauseAndResume()
    }
  }

  // Calculate slide position
  // Mobile: 80% width with 10% peek on each side
  // Desktop: 3 items filling the container with gaps
  const getTranslateX = () => {
    if (isMobile) {
      // Each item is 80% wide, centered with 10% peek on each side
      // Account for the flex gap (gap-2 = 0.5rem) per slide
      return `calc(10% - ${currentIndex * 80}% - ${currentIndex * 0.5}rem)`
    }
    // Desktop: each item is 27% wide, 3 centered with peek on sides
    // Peek offset = (100% - 3*27%) / 2 - (2 gaps * 1.5rem) / 2 = 9.5% - 1.5rem
    // Per-slide shift = 27% + 1.5rem (item width + one gap)
    return `calc(9.5% - 1.5rem - ${currentIndex * 27}% - ${currentIndex * 1.5}rem)`
  }

  return (
    <div
      className="relative flex items-center gap-2 md:gap-4 -mx-4 px-0 md:mx-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left arrow - desktop only */}
      <button
        onClick={() => { prevSlide(); pauseAndResume() }}
        className="hidden md:flex flex-shrink-0 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
        aria-label="Previous drinks"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Carousel container */}
      <div className="relative flex-1">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFF7F0 0%, rgba(255,247,240,0.4) 40%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FFF7F0 0%, rgba(255,247,240,0.4) 40%, transparent 100%)' }} />

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex gap-2 md:gap-6 ${isTransitioning ? 'transition-transform duration-700 ease-in-out motion-reduce:transition-none' : ''}`}
            style={{ transform: `translateX(${getTranslateX()})` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedImages.map((image, index) => (
              <div
                key={`drink-${index}`}
                className="flex-shrink-0"
                style={{ width: isMobile ? '80%' : '27%' }}
              >
                <div className="relative aspect-[3/4] rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right arrow - desktop only */}
      <button
        onClick={() => { nextSlide(); pauseAndResume() }}
        className="hidden md:flex flex-shrink-0 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
        aria-label="Next drinks"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
