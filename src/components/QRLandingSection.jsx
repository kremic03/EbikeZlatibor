// QRLandingSection.jsx
// IZMENA: BASE_URL se sada čita iz VITE_PUBLIC_URL env varijable sa fallback-om
// na window.location.origin. Ovo je potrebno jer kada gost skenira QR sa telefona,
// URL ne sme da bude localhost (telefon to ne može da otvori). Postavi VITE_PUBLIC_URL
// na javni URL (npr. ngrok tunel za testiranje, ili pravi domen u produkciji).
// Sve ostalo (dizajn, layout, QR biblioteka) je nepromenjeno.

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { QRCodeCanvas } from 'qrcode.react'
import { Download, ArrowRight, MapPin, TrendingUp, Clock } from 'lucide-react'
import { ROUTES, formatDuration } from '../data/routes'

const BASE_URL = import.meta.env.VITE_PUBLIC_URL || window.location.origin

function QRRouteCard({ route, delay }) {
  const wrapRef = useRef(null)
  const url = `${BASE_URL}/ruta/${route.slug}`

  function downloadPng() {
    const canvas = wrapRef.current?.querySelector('canvas')
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `zlatibike-qr-${route.slug}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay }}
      className="flex flex-col bg-white rounded-3xl border border-stone overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display font-black text-xl text-forest tracking-tight leading-tight">
            {route.name}
          </h3>
          <span className={`shrink-0 ${route.difficultyColor} text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full`}>
            {route.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin size={12} className="text-ember" />
            {route.distanceKm} km
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-ember" />
            {formatDuration(route.durationMin)}
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp size={12} className="text-ember" />
            +{route.elevationGainM} m
          </span>
        </div>
      </div>

      {/* QR */}
      <div className="px-6">
        <div
          ref={wrapRef}
          className="bg-white border-2 border-stone rounded-2xl p-4 flex items-center justify-center"
        >
          <QRCodeCanvas
            value={url}
            size={200}
            level="H"
            includeMargin={false}
            fgColor="#0d2b1f"
            bgColor="#ffffff"
          />
        </div>
        <p className="text-[10px] text-gray-400 font-mono break-all text-center mt-3 px-2">
          {url}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 p-6 pt-4 mt-auto">
        <Link
          to={`/ruta/${route.slug}`}
          className="flex items-center justify-center gap-2 bg-ember hover:bg-ember-dark text-white font-bold text-sm py-3 rounded-xl transition-colors shadow-md shadow-ember/30"
        >
          Otvori rutu
          <ArrowRight size={14} />
        </Link>
        <button
          onClick={downloadPng}
          className="flex items-center justify-center gap-2 bg-stone hover:bg-forest hover:text-white text-forest font-bold text-sm py-3 rounded-xl transition-colors"
        >
          <Download size={14} />
          Preuzmi PNG
        </button>
      </div>
    </motion.article>
  )
}

export default function QRLandingSection() {
  return (
    <section id="qr" className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="flex items-center justify-center gap-2 text-ember text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-7 h-px bg-ember" />
            QR rute
            <span className="w-7 h-px bg-ember" />
          </p>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            📲 Skeniraj QR i otvori<br />rutu na telefonu
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Uperi kameru telefona u QR kod ispod — mapa rute, GPS i sve tačke interesovanja otvaraju se za par sekundi.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROUTES.map((route, i) => (
            <QRRouteCard
              key={route.slug}
              route={route}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
