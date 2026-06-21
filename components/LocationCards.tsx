import { places } from '@/lib/data'

export default function LocationCards() {
  return (
    <section style={{ padding: '72px 5%' }}>
      <div
        style={{
          color: 'var(--saffron)',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        Braj Mandal
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-yatra), cursive',
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: 'var(--blue)',
          marginBottom: 12,
        }}
      >
        Saat Divya Sthan
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 600, marginBottom: 48 }}>
        Bhagwan Shri Krishna ki leela bhoomi — har nagri ki apni alag kahani, apna alag aatmik
        rang.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {places.map((place) => (
          <a
            key={place.id}
            href={`#${place.id}`}
            className="loc-card-hover"
            style={{
              background: 'white',
              borderRadius: 12,
              border: '1px solid var(--border)',
              overflow: 'hidden',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
            }}
          >
            <div
              style={{
                height: 160,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 56,
                position: 'relative',
                background: place.bgGradient,
              }}
            >
              {place.icon}
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  background: 'var(--saffron)',
                  color: 'white',
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 20,
                }}
              >
                {place.badge}
              </div>
            </div>
            <div style={{ padding: '16px 20px 20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-yatra), cursive',
                  fontSize: 20,
                  color: 'var(--blue)',
                  marginBottom: 4,
                }}
              >
                {place.name}
              </div>
              <div style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 8 }}>
                📍{' '}
                {place.distanceFromMathura !== 'Braj ki Rajdhani'
                  ? `Mathura se ${place.distanceFromMathura}`
                  : 'UP ka aatmik kendra'}
              </div>
              <p style={{ color: '#4A3D2C', fontSize: 14, lineHeight: 1.5, marginBottom: 12 }}>
                {place.cardDesc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {place.cardTags.map((tag, i) => (
                  <span
                    key={tag}
                    style={{
                      background:
                        i === place.cardTags.length - 1
                          ? 'var(--saffron-light)'
                          : 'var(--blue-light)',
                      color:
                        i === place.cardTags.length - 1 ? 'var(--saffron-dark)' : 'var(--blue-mid)',
                      fontSize: 11,
                      fontWeight: 500,
                      padding: '3px 10px',
                      borderRadius: 20,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
