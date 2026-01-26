import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Boba Wali - South Asian Fusion Bubble Tea Cart'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
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
          backgroundColor: '#FFF7F0',
          padding: '80px',
        }}
      >
        {/* Background accent circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(234, 182, 201, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(121, 0, 0, 0.1)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo placeholder - using text since we can't easily load image in edge runtime */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              color: '#790000',
              marginBottom: '40px',
              letterSpacing: '-2px',
            }}
          >
            Boba Wali
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 48,
              color: '#001B2E',
              maxWidth: '900px',
              lineHeight: 1.3,
              fontWeight: 500,
            }}
          >
            Houston's First South Asian
          </div>
          <div
            style={{
              fontSize: 48,
              color: '#001B2E',
              maxWidth: '900px',
              lineHeight: 1.3,
              fontWeight: 500,
            }}
          >
            Fusion Bubble Tea Cart
          </div>

          {/* Accent bar */}
          <div
            style={{
              marginTop: '50px',
              width: '300px',
              height: '6px',
              background: 'linear-gradient(90deg, #790000 0%, #EAB6C9 100%)',
              borderRadius: '3px',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
