import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, MapPin, Clock, TrendingUp, Mountain,
  AlertCircle, Navigation, Share2, Zap, Check,
} from 'lucide-react'
import RouteMap from '../components/route/RouteMap'
import ElevationChart from '../components/route/ElevationChart'
import { getRouteBySlug, formatDuration } from '../data/routes'

const POI_TYPE_COLORS = {
  Start:     'bg-forest text-white',
  Vidikovac: 'bg-ember text-white',
  Restoran:  'bg-ember-dark text-white',
  Kafić:     'bg-ember-dark text-white',
  Izvor:     'bg-forest-light text-white',
  Foto:      'bg-forest-accent text-white',
  Selo:      'bg-forest-mid text-white',
  Jezero:    'bg-blue-500 text-white',
}

export default function RoutePage() {
  const { slug } = useParams()
  const route = getRouteBySlug(slug)

  if (!route) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
        <AlertCircle size={48} className="text-ember mb-4" />
        <h1 className="font-display font-black text-3xl mb-2">Ruta nije pronađena</h1>
        <p className="text-gray-500 mb-6">Proverite QR kod ili izaberite rutu sa liste.</p>
        <Link to="/rute" className="bg-ember hover:bg-ember-dark text-white font-bold px-6 py-3 rounded-full transition-colors">
          Sve rute
        </Link>
      </div>
    )
  }

  function shareRoute() {
    if (navigator.share) {
      navigator.share({
        title: `ZlatiBike — ${route.name}`,
        text: route.tagline,
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard?.writeText(window.location.href)
    }
  }

  return (
    <div className="min-h-screen bg-cream pb-20">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 bg-forest/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-3">
          <Link to="/rute" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-bold hidden sm:inline">Sve rute</span>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ember rounded-lg flex items-center justify-center shadow-md">
              <Zap size={14} className="text-white fill-white" />
            </div>
            <span className="font-black text-white tracking-tight">
              Zlati<span className="text-ember">Bike</span>
            </span>
          </Link>
          <button
            onClick={shareRoute}
            className="flex items-center gap-2 bg-white/10 hover:bg-ember text-white px-3 py-1.5 rounded-full text-xs font-bold transition-colors"
          >
            <Share2 size={14} />
            <span className="hidden sm:inline">Podeli</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <img src={route.image} alt={route.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-forest/40 to-forest/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 max-w-6xl mx-auto">
          <span className={`inline-block ${route.difficultyColor} text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-3`}>
            {route.difficulty}
          </span>
          <h1 className="font-display font-black text-white text-4xl lg:text-5xl tracking-tight leading-tight mb-2">
            {route.name}
          </h1>
          <p className="text-white/85 text-base lg:text-lg max-w-2xl">{route.tagline}</p>
        </div>
      </section>

      {/* Stat strip */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-stone p-4 lg:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Stat Icon={MapPin}     label="Dužina"    value={`${route.distanceKm} km`} />
          <Stat Icon={Clock}      label="Trajanje"  value={formatDuration(route.durationMin)} />
          <Stat Icon={TrendingUp} label="Uspon"     value={`+${route.elevationGainM} m`} />
          <Stat Icon={Mountain}   label="Najviše"   value={`${route.elevationMaxM} m`} />
        </div>
      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-8">
        <div className="h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl border border-stone">
          <RouteMap route={route} />
        </div>
      </section>

      {/* Two-column body */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-10 grid lg:grid-cols-3 gap-8">

        {/* Left — description, tips, elevation */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-stone"
          >
            <h2 className="font-display font-black text-2xl mb-4">O ruti</h2>
            <p className="text-gray-600 leading-relaxed">{route.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-stone"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-black text-2xl">Profil visine</h2>
              <span className="text-xs text-gray-400 font-medium">
                {route.elevationMinM}m → {route.elevationMaxM}m
              </span>
            </div>
            <ElevationChart data={route.elevationProfile} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-forest text-white rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={20} className="text-ember" />
              <h2 className="font-display font-black text-2xl">Saveti pre starta</h2>
            </div>
            <ul className="space-y-2.5">
              {route.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-white/80 text-[15px] leading-relaxed">
                  <Check size={18} className="text-ember shrink-0 mt-0.5" strokeWidth={3} />
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right — POI list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-2xl p-6 border border-stone h-fit lg:sticky lg:top-24"
        >
          <h2 className="font-display font-black text-xl mb-5 flex items-center gap-2">
            <Navigation size={20} className="text-ember" />
            Tačke na ruti
          </h2>
          <ol className="space-y-4">
            {route.pois.map((poi, i) => (
              <li key={poi.id} className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-8 h-8 rounded-full ${POI_TYPE_COLORS[poi.type] || 'bg-ember text-white'} flex items-center justify-center font-black text-xs shadow-md`}>
                    {poi.id}
                  </div>
                  {i < route.pois.length - 1 && (
                    <div className="w-px flex-1 bg-stone mt-1 min-h-[20px]" />
                  )}
                </div>
                <div className="pb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-ember">{poi.type}</span>
                  <p className="font-bold text-sm text-forest leading-tight mt-0.5">{poi.name}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{poi.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </section>

      {/* Gallery */}
      {route.gallery?.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-10">
          <h2 className="font-display font-black text-2xl mb-5">Galerija</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {route.gallery.map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border border-stone">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-12">
        <div className="bg-gradient-to-br from-ember to-ember-dark rounded-3xl p-8 lg:p-12 text-center shadow-2xl shadow-ember/30">
          <h2 className="font-display font-black text-white text-3xl lg:text-4xl mb-3">
            Trebate vodiča za ovu rutu?
          </h2>
          <p className="text-white/90 mb-6 max-w-md mx-auto">
            Naši licencirani vodiči mogu vas pratiti i otkriti vam tajne mesta.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-white text-ember-dark font-black px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Kontaktiraj nas
          </Link>
        </div>
      </section>
    </div>
  )
}

function Stat({ Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-forest to-forest-accent flex items-center justify-center shadow-md">
        <Icon size={18} className="text-white" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{label}</p>
        <p className="font-black text-lg text-forest leading-tight">{value}</p>
      </div>
    </div>
  )
}
