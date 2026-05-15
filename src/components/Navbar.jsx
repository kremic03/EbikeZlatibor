import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap, Map } from 'lucide-react'

const NAV_LINKS = [
  { href: '#bikes',        label: 'Bicikli' },
  { href: '#tours',        label: 'Ture' },
  { href: '#about',        label: 'O nama' },
  { href: '#testimonials', label: 'Utisci' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-forest/95 backdrop-blur-lg shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-ember rounded-xl flex items-center justify-center shadow-lg">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <span className="font-black text-xl text-white tracking-tight">
              Zlati<span className="text-ember">Bike</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {label}
              </a>
            ))}
            <Link
              to="/rute"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              <Map size={14} />
              Rute
            </Link>
            <a
              href="#contact"
              className="bg-ember hover:bg-ember-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-ember/30"
            >
              Rezerviši
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Otvori meni"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-forest flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
          onClick={() => setMobileOpen(false)}
        >
          <X size={20} />
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="text-3xl font-black text-white hover:text-ember transition-colors"
          >
            {label}
          </a>
        ))}
        <Link
          to="/rute"
          onClick={() => setMobileOpen(false)}
          className="text-3xl font-black text-white hover:text-ember transition-colors flex items-center gap-2"
        >
          <Map size={26} />
          Rute
        </Link>
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="text-3xl font-black text-white hover:text-ember transition-colors"
        >
          Rezerviši
        </a>
      </div>
    </>
  )
}
