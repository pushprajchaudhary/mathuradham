export default function TimingCard({
  season,
  time,
  sub,
}: {
  season: string
  time: string
  sub?: string
}) {
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
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--muted)',
          marginBottom: 6,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        }}
      >
        {season}
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--blue)' }}>{time}</div>
      {sub && <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{sub}</div>}
    </div>
  )
}
