import type { Metadata } from 'next'
import { Inter, Yatra_One } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const yatraOne = Yatra_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-yatra',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MathuraDham – Braj Bhoomi Ka Divya Darshan',
  description:
    'Mathura, Vrindavan, Barsana, Nandgaon, Goverdhan, Gokul ke sabhi mandiron ki timing, jaankari aur travel guide.',
  openGraph: {
    title: 'MathuraDham – Braj Bhoomi Ka Divya Darshan',
    description:
      'Mathura, Vrindavan, Barsana, Nandgaon, Goverdhan, Gokul ke sabhi mandiron ki timing, jaankari aur travel guide.',
    url: 'https://mathuradham.com',
    siteName: 'MathuraDham',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  metadataBase: new URL('https://mathuradham.com'),
  alternates: { canonical: 'https://mathuradham.com' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className={`${inter.variable} ${yatraOne.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
