import type { Place } from '@/lib/types'
import TempleCard from './TempleCard'
import InfoBox from './InfoBox'

interface PlaceSectionProps {
  place: Place
  isAlt?: boolean
}

export default function PlaceSection({ place, isAlt }: PlaceSectionProps) {
  return (
    <>
      <div
        id={place.id}
        style={{
          position: 'sticky',
          top: 64,
          zIndex: 90,
          background: 'var(--blue)',
          color: 'white',
          padding: '10px 5%',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-yatra), cursive',
              fontSize: 18,
            }}
          >
            {place.icon} {place.name}
          </div>
          <div style={{ fontSize: 12, color: '#B0C4DE' }}>{place.heroTagline}</div>
        </div>
      </div>

      <section
        style={{
          padding: '64px 5%',
          borderBottom: '1px solid var(--border)',
          background: isAlt ? 'var(--stone)' : 'var(--ivory)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 24,
            marginBottom: 36,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{place.icon}</div>
            <h2
              style={{
                fontFamily: 'var(--font-yatra), cursive',
                fontSize: 'clamp(30px, 4vw, 48px)',
                color: 'var(--blue)',
                marginBottom: 4,
              }}
            >
              {place.name}
            </h2>
            <div
              style={{
                color: 'var(--muted)',
                fontSize: 16,
                marginBottom: 12,
                fontStyle: 'italic',
              }}
            >
              {place.nameEn}
            </div>
            <p
              style={{
                color: '#3D2F1A',
                fontSize: 16,
                maxWidth: 680,
                lineHeight: 1.7,
              }}
            >
              {place.intro}
            </p>
          </div>
          <div
            style={{
              background: 'var(--blue)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              whiteSpace: 'nowrap',
              alignSelf: 'flex-start',
            }}
          >
            📍 Mathura se {place.distanceFromMathura}
            <br />🚗 {place.travelTime}
          </div>
        </div>

        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: 'var(--saffron-dark)',
            letterSpacing: 1,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          ⏰ Mukhya Mandir Timing
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 16,
            marginTop: 8,
          }}
        >
          {place.temples.map((temple) => (
            <TempleCard key={temple.name} temple={temple} />
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12,
            margin: '24px 0',
          }}
        >
          {place.infoItems.map((item) => (
            <InfoBox key={item.label} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
