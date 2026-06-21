const transport = [
  {
    icon: '🚂',
    mode: 'Train se',
    info: 'Mathura Junction ek important junction hai. Delhi (2-2.5 hr), Agra (30 min), Mumbai, Jaipur se seedhi trains milti hain. Station se shehar tak auto ₹30-50.',
  },
  {
    icon: '🚗',
    mode: 'Road se',
    info: 'Delhi se Yamuna Expressway ya NH 19 se 2-2.5 ghante. Agra se 55 km (1 hr). Jaipur se ~4-5 ghante. Khud ka gaadi lena sabse convenient hai.',
  },
  {
    icon: '🚌',
    mode: 'Bus se',
    info: 'Delhi (Sarai Kale Khan, Kashmiri Gate) se UPSRTC aur private buses available hain. ₹200-400 ticket. Agra se bhi buses milti hain.',
  },
  {
    icon: '✈️',
    mode: 'Flight se',
    info: 'Nearest airport Agra (Pandit Deen Dayal Upadhyay Airport) — 55 km. Ya Delhi IGI Airport — 145 km. Airport se taxi le lein.',
  },
]

const local = [
  { icon: '🛺', mode: 'E-Rickshaw', info: 'Shehar mein ghoomne ka sabse sasta aur popular tarika. ₹10-50 per savar. Negotiation zaroor karein!' },
  { icon: '🚕', mode: 'Taxi/Cab', info: 'Pure Braj darshan ke liye ek cab hire karein — ₹1,500-2,500 mein Mathura, Vrindavan, Goverdhan ek din mein.' },
  { icon: '🚲', mode: 'Cycle Rickshaw', info: 'Vrindavan ke galiyon mein cycle rickshaw perfect hai — galiyan itni tung hain ki car nahi jaati. ₹20-50 per trip.' },
  { icon: '🛥️', mode: 'Naav (Boat)', info: 'Vishram Ghat aur Keshi Ghat se naav ride lein. ₹30-200. Sham ki Yamuna Aarti naav par baith ke dekhna ek unique experience hai.' },
]

function ReachCard({ icon, mode, info }: { icon: string; mode: string; info: string }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: 10,
        border: '1px solid var(--border)',
        padding: 20,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontWeight: 600, color: 'var(--blue)', marginBottom: 6 }}>{mode}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{info}</div>
    </div>
  )
}

export default function HowToReach() {
  return (
    <section
      id="howtoreach"
      style={{ padding: '72px 5%', background: 'var(--stone)' }}
    >
      <div style={{ color: 'var(--saffron)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
        Travel Guide
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-yatra), cursive',
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: 'var(--blue)',
          marginBottom: 12,
        }}
      >
        Mathura Kaise Pahuchen?
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 600, marginBottom: 48 }}>
        Mathura har taraf se achhi tarah connected hai — train, road ya bus se aana aasaan hai.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {transport.map((t) => <ReachCard key={t.mode} {...t} />)}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          margin: '48px 0 36px',
        }}
      >
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span
          style={{
            fontFamily: 'var(--font-yatra), cursive',
            fontSize: 20,
            color: 'var(--saffron)',
            whiteSpace: 'nowrap',
          }}
        >
          Mathura ke andar kaise ghoomein
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {local.map((t) => <ReachCard key={t.mode} {...t} />)}
      </div>
    </section>
  )
}
