import { motion } from 'framer-motion'
import { Calendar, Bike, ChevronDown } from 'lucide-react'

const STATS = [
  { value: '500+', label: 'Zadovoljnih turista' },
  { value: '12+',  label: 'Bicikala u floti'   },
  { value: '4.9★', label: 'Prosečna ocena'      },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1800&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-forest/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
          Premium E-Bike Avanture · Zlatibor
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-white leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)', lineHeight: 1.05 }}
        >
          Istraži Zlatibor<br />
          na{' '}
          <em className="text-ember not-italic">električnom</em>
          <br />biciklu
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/65 text-lg lg:text-xl font-light leading-relaxed max-w-lg mb-10"
        >
          Premium e-bike avanture i organizovane ture kroz najlepše predele
          Zlatibora. Doživite planinu na potpuno nov način.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 bg-ember hover:bg-ember-dark text-white font-bold px-7 py-4 rounded-full text-base shadow-2xl shadow-ember/40 hover:shadow-ember/60 hover:-translate-y-1 transition-all duration-200"
          >
            <Calendar size={18} />
            Rezerviši turu
          </a>
          <a
            href="#bikes"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold px-7 py-4 rounded-full text-base hover:-translate-y-1 transition-all duration-200"
          >
            <Bike size={18} />
            Pogledaj bicikle
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-8 lg:gap-14 pt-8 border-t border-white/10"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-black text-white leading-none mb-1">{s.value}</p>
              <p className="text-xs text-white/45 uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#bikes"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
