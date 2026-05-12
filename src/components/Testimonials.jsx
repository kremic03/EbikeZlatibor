import { motion } from 'framer-motion'

const REVIEWS = [
  {
    id: 1, initials: 'AJ', name: 'Ana Jovanović', location: 'Beograd', tour: 'Jutarnja tura',
    text: 'Neverovatno iskustvo! Tura do Tornika je bila bajkovita – vidikovac pri zalasku sunca ostavio me je bez reči. Bicikli su odlični, vodič izuzetno stručan. Definitivno se vraćam!',
  },
  {
    id: 2, initials: 'SN', name: 'Stefan Nikolić', location: 'Novi Sad', tour: 'Porodična tura',
    text: 'Došli smo kao porodica sa dvoje dece – brinuli smo da li će biti teško, ali ZlatiBike je sve organizovao savršeno. Deca su obožavale, a mi smo se osećali kao pravi avanturisti!',
  },
  {
    id: 3, initials: 'IM', name: 'Ivana Milošević', location: 'Ljubljana', tour: 'Privatna tura',
    text: 'Privatna tura je bila magična! Marko nas je odveo na mesta kojih nema ni na jednoj mapi. Kombinacija divlje prirode i modernih e-bikea je savršena. Topla preporuka!',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
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
            Utisci gostiju
            <span className="w-7 h-px bg-ember" />
          </p>
          <h2 className="font-display font-black text-5xl tracking-tight leading-tight">
            Šta kažu naši gosti
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col bg-white rounded-3xl p-8 border border-stone hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="font-display text-5xl text-ember font-black leading-none mb-4">"</p>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-ember text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed flex-1 mb-6">{r.text}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-stone">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-forest to-forest-accent flex items-center justify-center font-black text-white text-sm shadow-md shrink-0">
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
                <span className="text-xs text-gray-300 font-medium text-right shrink-0">{r.tour}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
