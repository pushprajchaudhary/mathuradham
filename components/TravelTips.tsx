const tips = [
  { icon: '🕐', text: 'Mandiron mein subah 7-9 AM aur sham 5-7 PM peak crowd hoti hai — thodi der pehle ya baad mein jayen.' },
  { icon: '👗', text: 'Shalini kapde pahnein — shorts ya tank tops mein mandir mein entry nahi milti.' },
  { icon: '👟', text: 'Joote baar baar utaarney padte hain — slip-ons ya sandals sab se convenient hain.' },
  { icon: '🌡️', text: 'Oct–March mein aana best hai — sardi mein tyohar bhi hote hain aur mausam bhi achha rehta hai.' },
  { icon: '💧', text: 'Apni paani ki bottle saath rakhein — dhoop mein dehydration ho sakti hai.' },
  { icon: '📸', text: 'Kaafi mandiron mein sanctum mein photography allowed nahi — pehle poochhein.' },
  { icon: '🧳', text: 'Janmashtami ya Holi mein aana hai toh 2-3 mahine pehle hotel book karein — sab full ho jaata hai.' },
  { icon: '💰', text: 'Mandiron mein cash chhuta dena aam baat hai — chhutte paisa rakhein. ATM bhi milte hain shehar mein.' },
  { icon: '🙏', text: 'Mandir mein mobile silent mode par rakhein — aatmik mahaul bana rahey.' },
  { icon: '🍽️', text: 'Mathura ka Peda, Rabri, Kachori zaroor khayen. Satvik bhojan hi milta hai — pyaaz-lahsun nahi.' },
  { icon: '🌙', text: 'Nidhivan mein sham 8 baje ke baad mat rukein — local tradition iska palan karta hai.' },
  { icon: '🗓️', text: 'Goverdhan Parikrama ke liye jootey mat layen — nange paon ya moje mein hi karein. Cycle rickshaw se bhi hoti hai.' },
]

export default function TravelTips() {
  return (
    <section style={{ padding: '72px 5%' }}>
      <div style={{ color: 'var(--saffron)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
        Travel Tips
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-yatra), cursive',
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: 'var(--blue)',
          marginBottom: 12,
        }}
      >
        Zaruri Baatein
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 600, marginBottom: 48 }}>
        Apna Braj darshan planning karte waqt yeh tips dhyan mein rakhein.
      </p>

      <ul
        style={{
          listStyle: 'none',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 12,
          padding: 0,
          margin: 0,
        }}
      >
        {tips.map((tip) => (
          <li
            key={tip.icon}
            style={{
              background: 'white',
              borderRadius: 10,
              border: '1px solid var(--border)',
              padding: '16px 20px',
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              fontSize: 14,
              color: 'var(--text)',
            }}
          >
            <span style={{ fontSize: 18, flexShrink: 0 }}>{tip.icon}</span>
            {tip.text}
          </li>
        ))}
      </ul>
    </section>
  )
}
