import type { Festival } from '@/lib/types'

export default function FestivalCard({ festival }: { festival: Festival }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: 10,
        border: '1px solid var(--border)',
        padding: 20,
        borderLeft: '4px solid var(--saffron)',
      }}
    >
      <div style={{ fontWeight: 700, color: 'var(--blue)', fontSize: 15, marginBottom: 6 }}>
        {festival.icon} {festival.name}
      </div>
      <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
        {festival.description}
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--saffron-dark)', marginTop: 8 }}>
        📅 {festival.month}
      </div>
    </div>
  )
}
