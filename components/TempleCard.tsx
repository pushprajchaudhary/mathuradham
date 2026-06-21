import type { Temple } from '@/lib/types'

export default function TempleCard({ temple }: { temple: Temple }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: 10,
        border: '1px solid var(--border)',
        padding: 20,
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ fontSize: 28, flexShrink: 0 }}>{temple.icon}</div>
      <div>
        <div style={{ fontWeight: 600, color: 'var(--blue)', fontSize: 15, marginBottom: 4 }}>
          {temple.name}
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
          {temple.description}
        </div>
        <div style={{ marginTop: 8 }}>
          {temple.winterTiming ? (
            <>
              <span
                style={{
                  display: 'inline-block',
                  background: 'var(--saffron-light)',
                  color: 'var(--saffron-dark)',
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 20,
                  marginRight: 4,
                }}
              >
                🌞 {temple.summerTiming}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: 4,
                  background: 'var(--saffron-light)',
                  color: 'var(--saffron-dark)',
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 20,
                }}
              >
                ❄️ {temple.winterTiming}
              </span>
            </>
          ) : (
            <span
              style={{
                display: 'inline-block',
                background: 'var(--saffron-light)',
                color: 'var(--saffron-dark)',
                fontSize: 12,
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: 20,
              }}
            >
              {temple.summerTiming}
            </span>
          )}
          <span
            style={{
              display: 'inline-block',
              marginTop: 4,
              marginLeft: 4,
              background: 'var(--green-light)',
              color: 'var(--green)',
              fontSize: 12,
              fontWeight: 600,
              padding: '3px 10px',
              borderRadius: 20,
            }}
          >
            {temple.entryFee}
          </span>
        </div>
      </div>
    </div>
  )
}
