export default function Footer() {
  return (
    <footer style={{ background: 'var(--blue)', color: '#B0C4DE', padding: '48px 5% 32px' }}>
      <div
        className="footer-top"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 48,
          marginBottom: 40,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-yatra), cursive',
              fontSize: 24,
              color: 'white',
              marginBottom: 12,
            }}
          >
            🕉 MathuraDham
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7 }}>
            Braj Mandal ke saat pavitra sthanon ki sampurna guide — mandir timing, darshan guide,
            festivals aur travel tips. Har yatri ke liye, har baar.
          </p>
        </div>

        <div>
          <h4 style={{ color: 'white', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>
            Mukhya Sthan
          </h4>
          {[
            { href: '/#mathura', label: 'Mathura Nagri' },
            { href: '/#vrindavan', label: 'Vrindavan Dham' },
            { href: '/#barsana', label: 'Barsana' },
            { href: '/#nandgaon', label: 'Nandgaon' },
            { href: '/#goverdhan', label: 'Goverdhan' },
            { href: '/#gokul', label: 'Gokul' },
          ].map((l) => (
            <a key={l.href} href={l.href} className="footer-link">
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <h4 style={{ color: 'white', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>
            Upyogi Links
          </h4>
          {[
            { href: '/#festivals', label: 'Utsav Guide' },
            { href: '/#howtoreach', label: 'Kaise Pahuchen' },
            { href: '/#mathura', label: 'Darshan Timing' },
            { href: '/#festivals', label: 'Festival Calendar' },
          ].map((l) => (
            <a key={l.label} href={l.href} className="footer-link">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          fontSize: 13,
          textAlign: 'center',
        }}
      >
        <p>© 2025 MathuraDham.com — Braj Bhoomi Ka Divya Darshan | Jai Shri Radhe Krishna 🙏</p>
        <p style={{ marginTop: 6, fontSize: 12, opacity: 0.6 }}>
          Timings may vary during festivals — please verify locally before visiting.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
