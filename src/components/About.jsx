import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-forest relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ember/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="flex items-center gap-2 text-ember text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-7 h-px bg-ember" />
            O nama
          </p>
          <h2 className="font-display font-black text-5xl text-white tracking-tight leading-tight mb-6">
            Nastali smo iz<br />ljubavi prema<br />Zlatiboru
          </h2>
          <div className="space-y-4 text-white/55 text-lg leading-relaxed mb-10">
            <p>
              ZlatiBike je osnovan 2020. godine sa jednom jednostavnom idejom – da svima
              omogućimo da dožive čaroliju Zlatibora na potpuno autentičan i uzbudljiv način.
            </p>
            <p>
              Naš tim čine strastveni planinari, vodiči i ljubitelji prirode koji svaki dan
              prolaze ovim stazama i znaju tačno gde se kriju najlepše tajne ove planine.
            </p>
            <p>
              Svaka tura je za nas više od posla – to je prilika da podelimo ono što volimo
              sa novim prijateljima iz celog sveta.
            </p>
          </div>
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-accent to-forest-light flex items-center justify-center font-black text-white shadow-md">
              MP
            </div>
            <div>
              <p className="font-bold text-white text-sm">Marko Petrović</p>
              <p className="text-white/40 text-xs mt-0.5">Osnivač & Glavni vodič</p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            <img
              src="https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=800&q=85"
              alt="E-bike"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/25 to-transparent pointer-events-none" />
          </div>
          <div className="absolute -bottom-5 -left-5 w-32 h-24 rounded-xl overflow-hidden border-4 border-forest shadow-xl hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=85"
              alt="Detalj"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
