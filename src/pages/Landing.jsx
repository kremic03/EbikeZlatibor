// Landing.jsx
// IZMENA: Privremeno uklonjene <WhyUs /> i <Gallery /> sekcije —
// vraćaju se kasnije. Komponentni fajlovi su sačuvani u src/components/.
// QRLandingSection se i dalje učitava lazy.

import { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Bikes from '../components/Bikes'
import Tours from '../components/Tours'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const QRLandingSection = lazy(() => import('../components/QRLandingSection'))

export default function Landing() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
  }, [hash])

  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Bikes />
      <Tours />
      <About />
      <Testimonials />
      <Suspense fallback={<div className="py-24 bg-cream" aria-hidden />}>
        <QRLandingSection />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  )
}
