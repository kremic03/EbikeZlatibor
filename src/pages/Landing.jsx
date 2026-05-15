// Landing.jsx
// IZMENA: Dodata nova sekcija <QRLandingSection /> između Testimonials i Contact.
// Sekcija se učitava lazy (React.lazy + Suspense) da qrcode.react biblioteka
// ne uđe u inicijalni bundle landing-a — učitava se tek kad korisnik
// skroluje do nje. Sve ostalo (postojeći scroll-to-hash) je nepromenjeno.

import { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Bikes from '../components/Bikes'
import Tours from '../components/Tours'
import WhyUs from '../components/WhyUs'
import Gallery from '../components/Gallery'
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
      <WhyUs />
      <Gallery />
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
