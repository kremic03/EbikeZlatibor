import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin, Clock, TrendingUp, Zap } from 'lucide-react'
import { ROUTES, formatDuration } from '../data/routes'

export default function RoutesList() {
  return (
    <div className="min-h-screen bg-cream pb-20">

      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-forest/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-bold">Početna</span>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ember rounded-lg flex items-center justify-center shadow-md">
              <Zap size={14} className="text-white fill-white" />
            </div>
            <span className="font-black text-white tracking-tight">
              Zlati<span className="text-ember">Bike</span>
            </span>
          </Link>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero */}
      <section className="bg-forest text-white px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="flex items-center gap-2 text-ember text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-7 h-px bg-ember" />
            Self-guided rute
          </p>
          <h1 className="font-display font-black text-4xl lg:text-6xl tracking-tight leading-tight mb-4">
            Otkrij Zlatibor<br />sopstvenim tempom
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            Skeniraj QR kod na svom biciklu ili izaberi rutu sa liste. Mapa sa GPS-om, profil visine i tačke interesovanja — sve u tvom telefonu.
          </p>
        </div>
      </section>

      {/* Routes grid */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 -mt-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROUTES.map((route, i) => (
            <motion.div
              key={route.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/ruta/${route.slug}`}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-stone hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-3 left-3 ${route.difficultyColor} text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                    {route.difficulty}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-black text-lg leading-tight mb-2">{route.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{route.tagline}</p>

                  <div className="flex items-center gap-4 mb-5 text-xs text-gray-500">
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
                      +{route.elevationGainM}m
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone">
                    <span className="text-xs text-gray-400 font-medium">{route.pois.length} tačaka</span>
                    <span className="flex items-center gap-1.5 text-ember font-black text-sm group-hover:gap-2.5 transition-all">
                      Otvori rutu
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
