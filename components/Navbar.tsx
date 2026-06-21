'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/#mathura', label: 'Mathura' },
  { href: '/#vrindavan', label: 'Vrindavan' },
  { href: '/#barsana', label: 'Barsana' },
  { href: '/#nandgaon', label: 'Nandgaon' },
  { href: '/#goverdhan', label: 'Goverdhan' },
  { href: '/#gokul', label: 'Gokul' },
  { href: '/#howtoreach', label: 'Kaise Pahuchen' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,253,247,0.97)' : 'rgba(255,253,247,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        height: '64px',
        transition: 'background 0.2s',
      }}
    >
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            background: 'var(--saffron)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontSize: 18 }}>🕉</span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-yatra), cursive',
            fontSize: 20,
            color: 'var(--blue)',
          }}
        >
          MathuraDham
        </span>
      </Link>

      <div className="hidden md:flex" style={{ gap: 8, display: 'flex' }}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">
            {l.label}
          </a>
        ))}
      </div>

      <a href="/#festivals" className="nav-cta">
        Utsav Guide
      </a>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-wrap { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
