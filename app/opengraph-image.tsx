import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Boba Wali - More Than Drinks. It\'s an Experience.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Read the hero background image from disk
  const imageData = await readFile(
    join(process.cwd(), 'public/photos/cart_at_event_with_customers.jpeg')
  )

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background image */}
        <img
          src={`data:image/jpeg;base64,${imageData.toString('base64')}`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Overlay gradient matching the website */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom right, rgba(255, 247, 240, 0.95), rgba(255, 247, 240, 0.85), rgba(121, 0, 0, 0.6))',
          }}
        />

        {/* Content - matching the hero section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: 80,
              fontWeight: 700,
              color: '#001B2E',
              lineHeight: 1.1,
              marginBottom: '30px',
              maxWidth: '1000px',
            }}
          >
            <div style={{ display: 'flex' }}>More Than Drinks.</div>
            <div
              style={{
                display: 'flex',
                background: 'linear-gradient(90deg, #790000 0%, #a83232 25%, #C27013 50%, #a83232 75%, #790000 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              It&apos;s an Experience.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              fontWeight: 500,
              fontSize: 32,
              color: 'rgba(0, 27, 46, 0.8)',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            South Asian fusion drinks for weddings, parties, and corporate gatherings across Houston. Non-alcoholic sips your guests won&apos;t forget.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
