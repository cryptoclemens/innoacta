import { ImageResponse } from 'next/og'

export const alt = 'Vencly – Innovatives Gründer-Denken für Unternehmen mit Tradition.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0b1a17',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div style={{ display: 'flex', position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#0f766e' }} />

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', width: '28px', height: '1px', background: '#0f766e' }} />
          <span style={{ display: 'flex', fontSize: '13px', color: '#0f766e', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            Strategische Geschäftsfeldentwicklung
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '28px' }}>
          <span style={{ fontSize: '56px', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, maxWidth: '820px' }}>
            Innovatives Gründer-Denken für
          </span>
          <span style={{ fontSize: '56px', fontWeight: 700, color: '#0f9d8e', lineHeight: 1.15, maxWidth: '820px' }}>
            Unternehmen mit Tradition.
          </span>
        </div>

        {/* Subline */}
        <div style={{ display: 'flex', fontSize: '22px', color: '#94a3b8', maxWidth: '680px', lineHeight: 1.5, marginBottom: '48px' }}>
          Neue Geschäftsfelder entwickeln, validieren und launchen – mit Startup-Methodik.
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[
            { value: '40+', label: 'Projekte' },
            { value: '5–6 Wo.', label: 'Ø Laufzeit' },
            { value: '7', label: 'Fokus-Branchen' },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#0f9d8e' }}>{value}</span>
              <span style={{ fontSize: '12px', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Logo wordmark */}
        <div style={{ display: 'flex', position: 'absolute', bottom: '48px', right: '80px', fontSize: '24px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>
          vencly
        </div>
      </div>
    ),
    { ...size },
  )
}
