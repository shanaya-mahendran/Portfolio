import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #271334 0%, #0E0713 100%)',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 160,
            height: 160,
            borderRadius: '40px',
            background: 'rgba(39, 19, 52, 0.6)',
            border: '2px solid rgba(181, 136, 211, 0.4)',
            marginBottom: '40px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#F3ECF8',
              fontFamily: 'sans-serif',
              letterSpacing: '-3px',
              textShadow: '0 0 30px rgba(181, 136, 211, 0.8)',
            }}
          >
            DM
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#F3ECF8',
            fontFamily: 'sans-serif',
            letterSpacing: '-1.5px',
            marginBottom: '20px',
          }}
        >
          Shanaya Mahendran
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: '#B588D3',
            fontFamily: 'monospace',
            letterSpacing: '1px',
          }}
        >
          FULL-STACK DEVELOPER &bull; TECH ENTHUSIAST
        </div>
      </div>
    ),
    { ...size }
  )
}
