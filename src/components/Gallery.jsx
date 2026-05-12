import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const ITEMS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=85', label: 'E-MTB bicikl',       span: 'row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=85', label: 'Cestovni e-bike',    span: '' },
  { id: 3, src: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&q=85', label: 'Specialized Levo',  span: '' },
  { id: 4, src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=85', label: 'Bicikl na stazi',   span: 'row-span-2' },
  { id: 5, src: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&q=85', label: 'Giant Trance',      span: '' },
  { id: 6, src: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&q=85', label: 'MTB detalj',        span: '' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
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
            Galerija
            <span className="w-7 h-px bg-ember" />
          </p>
          <h2 className="font-display font-black text-5xl tracking-tight leading-tight">
            Naša flota kroz objektiv
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: '220px' }}>
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.span}`}
              onClick={() => setActive(item)}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-white text-sm font-bold">{item.label}</span>
                <ZoomIn size={18} className="text-white/80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-ember text-white flex items-center justify-center transition-colors"
              onClick={() => setActive(null)}
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              src={active.src.replace('w=600', 'w=1400')}
              alt={active.label}
              className="max-w-[92vw] max-h-[88vh] rounded-2xl shadow-2xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
