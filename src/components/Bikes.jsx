import { motion } from 'framer-motion'
import { Zap, Settings, ShieldCheck } from 'lucide-react'

const BIKES = [
  {
    id: 1, tag: 'Bestseller', name: 'Trek Rail 9.8 GX',
    img: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=700&q=85',
    range: '140 km', gears: '12 brzina', type: 'Full Suspension', price: '3.500',
  },
  {
    id: 2, tag: 'Premium', name: 'Specialized Turbo Levo',
    img: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=700&q=85',
    range: '160 km', gears: 'SRAM Eagle', type: '700Wh baterija', price: '4.500',
  },
  {
    id: 3, tag: 'Porodični', name: 'Giant Trance X E+',
    img: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=700&q=85',
    range: '120 km', gears: 'Za početnike', type: 'Stabilan', price: '2.800',
  },
  {
    id: 4, tag: 'Ekspedicionalni', name: 'Cannondale Moterra Neo',
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=85',
    range: '180 km', gears: 'Bosch CX motor', type: 'Dugačke rute', price: '5.200',
  },
]

function BikeCard({ bike, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay }}
      className="group flex flex-col bg-cream rounded-3xl overflow-hidden border border-stone hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-stone">
        <img
          src={bike.img}
          alt={bike.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="absolute top-3 left-3 bg-forest text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
          {bike.tag}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-black text-lg tracking-tight leading-tight mb-4">{bike.name}</h3>

        <ul className="space-y-2 mb-5">
          <li className="flex items-center gap-2 text-sm text-gray-500">
            <Zap size={14} className="text-ember shrink-0" />
            {bike.range} domet
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-500">
            <Settings size={14} className="text-gray-400 shrink-0" />
            {bike.gears}
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck size={14} className="text-gray-400 shrink-0" />
            {bike.type}
          </li>
        </ul>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <span className="text-2xl font-black text-forest-accent">{bike.price}</span>
            <span className="text-xs text-gray-400 ml-1">RSD/dan</span>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-forest hover:bg-forest-accent text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Rezerviši
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Bikes() {
  return (
    <section id="bikes" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="flex items-center gap-2 text-ember text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-7 h-px bg-ember" />
            Naša flota
          </p>
          <h2 className="font-display font-black text-5xl tracking-tight leading-tight mb-4">
            Premium električni<br />bicikli
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Svi bicikli su redovno servisirani i opremljeni najnovijom Bosch ili Shimano baterijom.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BIKES.map((bike, i) => (
            <BikeCard key={bike.id} bike={bike} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
