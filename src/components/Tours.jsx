import { motion } from 'framer-motion'
import { Clock, MapPin, Users } from 'lucide-react'

const TOURS = [
  {
    id: 1, type: 'Poludnevna', difficulty: 'Lagana', diffClass: 'bg-green-500',
    name: 'Jutarnja tura – Vidikovac Tornik',
    img: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=700&q=85',
    desc: 'Krenite u osvit kroz borove šume do vrha Tornika. Neverovatni pogledi koji oduzimaju dah čekaju vas.',
    duration: '3–4 sata', distance: '22 km', group: 'Maks. 8 osoba', price: '2.400',
  },
  {
    id: 2, type: 'Celodnevna', difficulty: 'Srednja', diffClass: 'bg-amber-500',
    name: 'Divlje šume Zlatibora',
    img: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=700&q=85',
    desc: 'Celodnevna avantura kroz netaknutu prirodu – od Ribničkog jezera do skrivenih šumskih staza.',
    duration: '7–8 sati', distance: '48 km', group: 'Uključen ručak', price: '4.800',
  },
  {
    id: 3, type: 'Večernja', difficulty: 'Lagana', diffClass: 'bg-green-500',
    name: 'Zalazak sunca – Panoramska',
    img: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=700&q=85',
    desc: 'Magični zalazak sunca sa platoa Zlatibora. Fotografska tura sa degustacijom lokalnih proizvoda.',
    duration: '2–3 sata', distance: '14 km', group: 'Foto-pauze', price: '1.900',
  },
  {
    id: 4, type: 'Privatna', difficulty: 'Po želji', diffClass: 'bg-ember',
    name: 'Privatna tura po meri',
    img: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=700&q=85',
    desc: 'Kompletno personalizovana tura kreirana isključivo za vas. Vaše tempo, vaša ruta, vaše uspomene.',
    duration: 'Po dogovoru', distance: 'Ruta po želji', group: 'VIP usluga', price: 'Na upit',
  },
]

function TourCard({ tour, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay }}
      className="group flex flex-col bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ember/50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.img}
          alt={tour.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute top-3 right-3 bg-ember text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
          {tour.type}
        </span>
        <span className={`absolute top-3 left-3 ${tour.diffClass} text-white text-[10px] font-bold px-3 py-1.5 rounded-full`}>
          {tour.difficulty}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-black text-base text-white leading-tight mb-2">{tour.name}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{tour.desc}</p>

        <ul className="space-y-1.5 mb-4">
          <li className="flex items-center gap-2 text-xs text-white/55">
            <Clock size={11} className="text-white/30 shrink-0" />{tour.duration}
          </li>
          <li className="flex items-center gap-2 text-xs text-white/55">
            <MapPin size={11} className="text-white/30 shrink-0" />{tour.distance}
          </li>
          <li className="flex items-center gap-2 text-xs text-white/55">
            <Users size={11} className="text-white/30 shrink-0" />{tour.group}
          </li>
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <span className="text-xl font-black text-ember">{tour.price}</span>
            {tour.price !== 'Na upit' && (
              <span className="text-xs text-white/30 ml-1">RSD/os.</span>
            )}
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/20 hover:bg-ember hover:border-ember text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200"
          >
            Prijavi se
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Tours() {
  return (
    <section id="tours" className="py-24 lg:py-32 px-6 lg:px-12 bg-forest">
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
            Organizovane ture
          </p>
          <h2 className="font-display font-black text-5xl text-white tracking-tight leading-tight mb-4">
            Otkrij Zlatibor<br />sa vodičem
          </h2>
          <p className="text-white/45 text-lg leading-relaxed max-w-xl">
            Svaka tura je pažljivo osmišljena kako biste doživeli najlepše pejzaže, vidikovce i tajne staze.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOURS.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
