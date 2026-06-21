import Hero from '@/components/Hero'
import LocationStrip from '@/components/LocationStrip'
import LocationCards from '@/components/LocationCards'
import PlaceSection from '@/components/PlaceSection'
import FestivalCard from '@/components/FestivalCard'
import HowToReach from '@/components/HowToReach'
import TravelTips from '@/components/TravelTips'
import { places, festivals } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocationStrip />
      <LocationCards />

      {places.map((place, i) => (
        <PlaceSection key={place.id} place={place} isAlt={i % 2 !== 0} />
      ))}

      <section id="festivals" style={{ padding: '72px 5%' }}>
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
          Braj Ke Tyohar
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-yatra), cursive',
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: 'var(--blue)',
            marginBottom: 12,
          }}
        >
          Utsav aur Festivals
        </h2>
        <p
          style={{
            color: 'var(--muted)',
            fontSize: 16,
            maxWidth: 600,
            marginBottom: 48,
          }}
        >
          Mathura-Vrindavan mein saal bhar tyoharon ka silsila chalta rehta hai. Har utsav ek divya
          anubhav hai.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 16,
          }}
        >
          {festivals.map((f) => (
            <FestivalCard key={f.name} festival={f} />
          ))}
        </div>
      </section>

      <HowToReach />
      <TravelTips />
    </>
  )
}
