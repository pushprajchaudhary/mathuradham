import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { places } from '@/lib/data'
import PlaceSection from '@/components/PlaceSection'
import FestivalCard from '@/components/FestivalCard'
import { festivals } from '@/lib/data'
import Link from 'next/link'

export async function generateStaticParams() {
  return places.map((p) => ({ place: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ place: string }>
}): Promise<Metadata> {
  const { place: placeId } = await params
  const place = places.find((p) => p.id === placeId)
  if (!place) return {}
  return {
    title: `${place.name} – Mandir Timing & Darshan Guide | MathuraDham`,
    description: place.intro.slice(0, 160),
    openGraph: {
      title: `${place.name} – Mandir Timing & Darshan Guide | MathuraDham`,
      description: place.intro.slice(0, 160),
      url: `https://mathuradham.com/${place.id}`,
      type: 'website',
    },
    alternates: { canonical: `https://mathuradham.com/${place.id}` },
  }
}

export default async function PlacePage({
  params,
}: {
  params: Promise<{ place: string }>
}) {
  const { place: placeId } = await params
  const place = places.find((p) => p.id === placeId)
  if (!place) notFound()

  const placeFestivals = festivals.filter((f) => f.location.toLowerCase().includes(place.id))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: place.name,
    description: place.intro,
    address: {
      '@type': 'PostalAddress',
      addressLocality: place.name,
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero banner */}
      <section
        style={{
          background: 'linear-gradient(160deg, #0D1B6E 0%, #1E3A8A 50%, #0D3D5C 100%)',
          padding: '60px 5% 48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '5%',
            top: 20,
            fontSize: 160,
            opacity: 0.06,
            lineHeight: 1,
            pointerEvents: 'none',
          }}
        >
          {place.icon}
        </div>
        <div
          style={{
            color: 'var(--saffron)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          <Link href="/" style={{ color: '#B0C4DE', textDecoration: 'none' }}>MathuraDham</Link>
          {' '}/{' '}
          {place.name}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-yatra), cursive',
            fontSize: 'clamp(32px, 5vw, 60px)',
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          {place.icon} {place.name}
        </h1>
        <p style={{ color: '#B0C4DE', fontSize: 18, maxWidth: 560, marginBottom: 24 }}>
          {place.nameEn}
        </p>
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)',
            color: 'white',
            padding: '6px 16px',
            borderRadius: 8,
            fontSize: 13,
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          📍 Mathura se {place.distanceFromMathura} &nbsp;|&nbsp; 🚗 {place.travelTime}
        </div>
      </section>

      <PlaceSection place={place} isAlt={false} />

      {placeFestivals.length > 0 && (
        <section style={{ padding: '48px 5%', background: 'var(--stone)' }}>
          <div
            style={{
              color: 'var(--saffron)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Yahan ke Tyohar
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: 16,
            }}
          >
            {placeFestivals.map((f) => (
              <FestivalCard key={f.name} festival={f} />
            ))}
          </div>
        </section>
      )}

      {/* Nearby places */}
      <section style={{ padding: '48px 5%' }}>
        <div
          style={{
            color: 'var(--saffron)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Aas-Paas Ke Sthan
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          {places
            .filter((p) => p.id !== place.id)
            .map((p) => (
              <Link key={p.id} href={`/${p.id}`} className="nearby-link">
                {p.icon} {p.name}
              </Link>
            ))}
        </div>
      </section>
    </>
  )
}
