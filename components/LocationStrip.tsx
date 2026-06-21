'use client'

import { useEffect, useRef, useState } from 'react'

const tabs = [
  { href: '#mathura', label: '🏙️ Mathura Nagri', id: 'mathura' },
  { href: '#vrindavan', label: '🌿 Vrindavan Dham', id: 'vrindavan' },
  { href: '#barsana', label: '🌸 Barsana', id: 'barsana' },
  { href: '#nandgaon', label: '🥛 Nandgaon', id: 'nandgaon' },
  { href: '#goverdhan', label: '⛰️ Goverdhan', id: 'goverdhan' },
  { href: '#gokul', label: '🪷 Gokul', id: 'gokul' },
  { href: '#festivals', label: '🎨 Utsav & Tyohar', id: 'festivals' },
]

export default function LocationStrip() {
  const [active, setActive] = useState('mathura')

  useEffect(() => {
    const sections = ['mathura', 'vrindavan', 'barsana', 'nandgaon', 'goverdhan', 'gokul', 'festivals']
    const onScroll = () => {
      let current = ''
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        background: 'var(--stone)',
        borderBottom: '1px solid var(--border)',
        padding: '0 5%',
      }}
    >
      <div
        className="no-scrollbar"
        style={{ display: 'flex', gap: 0, overflowX: 'auto' }}
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <a
              key={tab.id}
              href={tab.href}
              style={{
                padding: '16px 24px',
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--saffron-dark)' : 'var(--muted)',
                borderBottom: isActive ? '3px solid var(--saffron)' : '3px solid transparent',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              {tab.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
