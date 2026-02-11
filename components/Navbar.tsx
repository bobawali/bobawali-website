'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/bobawalilogo.png"
              alt="Boba Wali"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <span className="font-display text-xl md:text-2xl text-primary">
              Boba Wali
            </span>
          </button>

          <button
            onClick={() => scrollToSection('#inquiry')}
            className="bg-primary hover:bg-primary/80 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            Book Us
          </button>

        </div>
      </div>
    </nav>
  )
}
