import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'
import { ArrowLeft, Download, Printer, Zap, Link as LinkIcon } from 'lucide-react'
import { ROUTES } from '../data/routes'

export default function AdminQR() {
  const [baseUrl, setBaseUrl] = useState(
    typeof window !== 'undefined' ? window.location.origin : 'https://zlatibike.rs'
  )

  return (
    <div className="min-h-screen bg-cream pb-20">

      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-forest/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-bold">Početna</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ember rounded-lg flex items-center justify-center shadow-md">
              <Zap size={14} className="text-white fill-white" />
            </div>
            <span className="font-black text-white tracking-tight">
              Zlati<span className="text-ember">Bike</span> · Admin
            </span>
          </div>
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-2 bg-ember hover:bg-ember-dark text-white px-3 py-1.5 rounded-full text-xs font-bold transition-colors print:hidden"
          >
            <Printer size={14} />
            Štampaj sve
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-forest text-white px-6 lg:px-8 py-12 lg:py-16 print:hidden">
        <div className="max-w-6xl mx-auto">
          <p className="flex items-center gap-2 text-ember text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-7 h-px bg-ember" />
            QR kodovi za bicikle
          </p>
          <h1 className="font-display font-black text-4xl lg:text-5xl tracking-tight leading-tight mb-3">
            QR generator
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed mb-8">
            Preuzmi QR kod za svaku rutu i nalepi ga na bicikl. Kada gost skenira, otvara se mapa rute u njegovom telefonu.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-5">
            <label className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
              <LinkIcon size={12} />
              Bazni URL sajta
            </label>
            <input
              type="text"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value.replace(/\/$/, ''))}
              className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-ember transition-colors"
              placeholder="https://zlatibike.rs"
            />
            <p className="text-white/40 text-xs mt-2">
              Promenite ovde kada deploy-ujete sajt na pravu adresu — QR kodovi će automatski biti ažurirani.
            </p>
          </div>
        </div>
      </section>

      {/* QR cards */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-10 print:mt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-2 print:gap-4">
          {ROUTES.map((route) => (
            <QRCard key={route.slug} route={route} baseUrl={baseUrl} />
          ))}
        </div>
      </section>

      <style>{`
        @media print {
          @page { margin: 1.5cm; }
          body { background: white !important; }
          header { display: none !important; }
        }
      `}</style>
    </div>
  )
}

function QRCard({ route, baseUrl }) {
  const canvasWrapRef = useRef(null)
  const url = `${baseUrl}/ruta/${route.slug}`

  function downloadPng() {
    const canvas = canvasWrapRef.current?.querySelector('canvas')
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `zlatibike-qr-${route.slug}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="bg-white rounded-3xl border border-stone p-6 flex flex-col items-center text-center print:break-inside-avoid print:shadow-none print:border-2">

      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 bg-ember rounded-lg flex items-center justify-center">
          <Zap size={12} className="text-white fill-white" />
        </div>
        <span className="font-black text-sm tracking-tight">
          Zlati<span className="text-ember">Bike</span>
        </span>
      </div>

      <h3 className="font-display font-black text-xl text-forest leading-tight mb-1">
        {route.name}
      </h3>
      <p className="text-xs text-gray-400 font-medium mb-1">
        {route.distanceKm} km · {route.difficulty}
      </p>

      <div ref={canvasWrapRef} className="my-5 p-3 bg-white rounded-2xl border border-stone">
        <QRCodeCanvas
          value={url}
          size={200}
          level="H"
          includeMargin={false}
          fgColor="#0d2b1f"
          bgColor="#ffffff"
        />
      </div>

      <p className="text-[10px] text-gray-400 font-mono break-all mb-4 px-2">
        {url}
      </p>

      <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-5">
        Skenirajte za mapu rute
      </p>

      <button
        onClick={downloadPng}
        className="w-full flex items-center justify-center gap-2 bg-forest hover:bg-forest-accent text-white font-bold text-sm py-3 rounded-xl transition-colors print:hidden"
      >
        <Download size={14} />
        Preuzmi PNG
      </button>
    </div>
  )
}
