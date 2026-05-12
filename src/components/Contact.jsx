import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const INFO = [
  { Icon: Phone,  label: 'Telefon',        value: '+381 64 123 4567' },
  { Icon: Mail,   label: 'Email',           value: 'info@zlatibike.rs' },
  { Icon: MapPin, label: 'Lokacija',        value: 'Zlatibor, Srbija' },
  { Icon: Clock,  label: 'Radno vreme',     value: '07:00 – 20:00' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', tour: '', date: '', message: '' })

  function handle(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })) }

  function submit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-forest">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="flex items-center gap-2 text-ember text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-7 h-px bg-ember" />
            Kontakt & Rezervacija
          </p>
          <h2 className="font-display font-black text-5xl text-white tracking-tight leading-tight mb-4">
            Rezerviši svoju<br />avanturu danas
          </h2>
          <p className="text-white/45 text-lg max-w-xl leading-relaxed">
            Popuni formular i javićemo ti se u roku od 2 sata sa svim detaljima.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[360px] bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-ember flex items-center justify-center mb-5 shadow-lg shadow-ember/30">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="font-display font-black text-2xl text-white mb-2">Poruka poslata!</h3>
                <p className="text-white/50 text-sm">Javićemo ti se uskoro. Vidimo se na stazi! 🚴</p>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">Ime i prezime *</label>
                    <input required name="name" value={form.name} onChange={handle}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-ember transition-colors"
                      placeholder="Marko Petrović" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handle}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-ember transition-colors"
                      placeholder="marko@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">Telefon</label>
                    <input name="phone" value={form.phone} onChange={handle}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-ember transition-colors"
                      placeholder="+381 64 ..." />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">Tura</label>
                    <select name="tour" value={form.tour} onChange={handle}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-ember transition-colors appearance-none">
                      <option value="" className="bg-forest">Izaberi turu</option>
                      <option value="jutarnja" className="bg-forest">Jutarnja tura – Tornik</option>
                      <option value="celodnevna" className="bg-forest">Divlje šume Zlatibora</option>
                      <option value="vecernja" className="bg-forest">Zalazak sunca – Panoramska</option>
                      <option value="privatna" className="bg-forest">Privatna tura po meri</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">Željeni datum</label>
                  <input type="date" name="date" value={form.date} onChange={handle}
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-ember transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">Poruka</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={4}
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-ember transition-colors resize-none"
                    placeholder="Broj osoba, posebni zahtevi..." />
                </div>
                <button type="submit"
                  className="w-full bg-ember hover:bg-ember-dark text-white font-black py-4 rounded-2xl text-sm tracking-wide transition-colors shadow-lg shadow-ember/25">
                  Pošalji rezervaciju →
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {INFO.map(({ Icon, label, value }, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-ember to-ember-dark flex items-center justify-center shadow-md">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-wider">{label}</p>
                  <p className="text-white font-bold text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-white/10 flex-1 min-h-[200px]">
              <iframe
                title="Zlatibor"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46225.8!2d19.6959!3d43.7284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757d59f2b0e6b57%3A0x1!2sZlatibor!5e0!3m2!1ssr!2srs!4v1"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '200px' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
