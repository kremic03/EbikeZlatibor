import { motion } from 'framer-motion'
import { Battery, Compass, ShieldCheck, Navigation } from 'lucide-react'

const FEATURES = [
  { Icon: Battery,     title: 'Najnoviji e-bike modeli',  text: 'Flota premium bicikala – domet do 180 km na jednom punjenju.' },
  { Icon: Compass,     title: 'Licencirani vodiči',        text: 'Sertifikovani planinarski vodiči koji poznaju svaku stazu.' },
  { Icon: ShieldCheck, title: 'Oprema & Osiguranje',       text: 'Kaciga, rukavice i osnovno osiguranje uključeni u svaku turu.' },
  { Icon: Navigation,  title: 'GPS praćenje i mape',       text: 'Digitalne mape i GPS uređaj na svakom biciklu.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15"
        >
          <img
            src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900&q=85"
            alt="Premium e-bike"
            className="w-full h-[480px] lg:h-[560px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent pointer-events-none" />

          {/* Floating badges */}
          <div className="absolute bottom-7 left-7 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">
            <p className="text-3xl font-black text-forest leading-none">100%</p>
            <p className="text-sm text-gray-500 font-medium mt-1">Ekološki čisto</p>
          </div>
          <div className="absolute top-7 right-7 bg-ember text-white rounded-2xl px-5 py-4 text-center shadow-xl shadow-ember/30">
            <p className="text-2xl font-black leading-none">4.9</p>
            <p className="text-xs font-bold mt-0.5">★ Ocena</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="flex items-center gap-2 text-ember text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-7 h-px bg-ember" />
            Zašto ZlatiBike?
          </p>
          <h2 className="font-display font-black text-5xl tracking-tight leading-tight mb-4">
            Iskustvo koje se<br />ne zaboravlja
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            Spajamo ljubav prema prirodi, modernu tehnologiju i profesionalni pristup kako bi svaka tura bila savršena.
          </p>

          <div className="space-y-3">
            {FEATURES.map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-stone hover:shadow-lg hover:translate-x-1 transition-all duration-200"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-forest to-forest-accent flex items-center justify-center shadow-md">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-base mb-1">{title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
