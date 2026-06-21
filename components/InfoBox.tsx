import type { InfoItem } from '@/lib/types'

export default function InfoBox({ item }: { item: InfoItem }) {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: 16,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--muted)',
          letterSpacing: 1,
          textTransform: 'uppercase',
          marginBottom: 6,
        }}
      >
        {item.label}
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{item.value}</div>
      <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{item.note}</div>
    </div>
  )
}
