export default function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #0D1B6E 0%, #1E3A8A 50%, #0D3D5C 100%)',
        padding: '80px 5% 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          content: '',
          position: 'absolute',
          right: '5%',
          top: 30,
          fontSize: 200,
          opacity: 0.05,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        🕉
      </div>

      <div style={{ color: 'var(--saffron)', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
        🕉 Jai Shri Krishna — Braj Bhoomi ki Jai
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-yatra), cursive',
          fontSize: 'clamp(36px, 6vw, 72px)',
          color: 'white',
          lineHeight: 1.1,
          marginBottom: 12,
        }}
      >
        Mathura से Vrindavan,<br />
        <span style={{ color: '#FFD54F' }}>हर कदम परमात्मा से मिलन</span>
      </h1>

      <p style={{ color: '#B0C4DE', fontSize: 18, maxWidth: 560, marginBottom: 36 }}>
        Braj Mandal ke saat pavitra sthanon ki poori jaankari — mandir timing, darshan guide, festivals aur travel tips ek jagah par.
      </p>

      <div style={{ display: 'flex', gap: 40, marginBottom: 48, flexWrap: 'wrap' }}>
        {[
          { num: '7+', lbl: 'Pavitra Nagriyan' },
          { num: '500+', lbl: 'Mandir & Ghat' },
          { num: '5000+', lbl: 'Saal Purana Itihaas' },
        ].map((s) => (
          <div key={s.lbl}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#FFD54F',
                fontFamily: 'var(--font-yatra), cursive',
              }}
            >
              {s.num}
            </div>
            <div style={{ color: '#B0C4DE', fontSize: 13 }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a
          href="#mathura"
          style={{
            background: 'var(--saffron)',
            color: 'white',
            padding: '14px 28px',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          Darshan Shuru Karen →
        </a>
        <a
          href="#howtoreach"
          style={{
            background: 'rgba(255,255,255,0.12)',
            color: 'white',
            padding: '14px 28px',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: 15,
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          Kaise Pahuchen
        </a>
      </div>
    </section>
  )
}
