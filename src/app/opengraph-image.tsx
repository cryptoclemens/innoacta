import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'innovation.today – Innovatives Gründer-Denken für Unternehmen mit Tradition.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Social-Preview auf weißer Fläche mit der Wortmarke, Breite ca. 60 %.
 * Die PNG-Fassung wird zur Bauzeit als Data-URI eingebettet — next/og kann
 * keine relativen Pfade auflösen.
 */
export default async function Image() {
  const wordmark = await readFile(
    join(process.cwd(), 'public/brand/png/wordmark_light_bg.png'),
  )
  const wordmarkSrc = `data:image/png;base64,${wordmark.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Akzentbalken in Marken-Teal */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#0F766E',
          }}
        />

        {/* Wortmarke, ca. 60 % der Breite */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={wordmarkSrc}
          alt="innovation.today"
          width={720}
          height={173}
          style={{ marginBottom: '56px' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: '52px',
              fontWeight: 800,
              color: '#14304A',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              maxWidth: '900px',
            }}
          >
            Innovatives Gründer-Denken
          </span>
          <span
            style={{
              fontSize: '52px',
              fontWeight: 800,
              color: '#0F766E',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              maxWidth: '900px',
            }}
          >
            für Unternehmen mit Tradition.
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '22px',
            color: '#1E293B',
            maxWidth: '760px',
            lineHeight: 1.6,
            marginTop: '28px',
          }}
        >
          Neue Geschäftsfelder entwickeln, validieren und launchen – mit Startup-Methodik.
        </div>
      </div>
    ),
    { ...size },
  )
}
