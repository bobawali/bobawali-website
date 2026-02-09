import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Preloader from '@/components/Preloader'
import MobileCTA from '@/components/MobileCTA'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Boba Wali – South Asian Fusion Bubble Tea Cart & Catering in Houston',
  description: 'Houston\'s first South Asian fusion bubble tea & refreshers cart. Book Boba Wali for weddings, corporate events, birthdays, and more. Halal-friendly, non-alcoholic drinks featuring mango lassi boba, Rooh Afza lemonade, and falooda milk tea.',
  openGraph: {
    title: 'Boba Wali – South Asian Fusion Bubble Tea Cart & Catering in Houston',
    description: 'Houston\'s first South Asian fusion bubble tea & refreshers cart. Book us for weddings, corporate events, birthdays, and more.',
    url: 'https://bobawali.com',
    siteName: 'Boba Wali',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Boba Wali - More Than Drinks. It\'s an Experience.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boba Wali – South Asian Fusion Bubble Tea Cart',
    description: 'Houston\'s first South Asian fusion bubble tea & refreshers cart.',
    images: ['/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Boba Wali',
  description: 'South Asian fusion bubble tea cart and catering service in Houston, TX',
  url: 'https://bobawali.com',
  telephone: '',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.7604,
    longitude: -95.3698,
  },
  areaServed: {
    '@type': 'City',
    name: 'Houston',
  },
  serviceType: ['Bubble Tea Catering', 'Event Catering', 'Mobile Beverage Cart'],
  sameAs: [
    'https://www.instagram.com/bobawali.htx/',
    'https://www.tiktok.com/@bobawali.htx',
    'https://www.facebook.com/bobawali.htx',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <Navbar />
        {children}
        <MobileCTA />
      </body>
    </html>
  )
}
