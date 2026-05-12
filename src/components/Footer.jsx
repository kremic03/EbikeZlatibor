const LINKS = {
  'Ture': ['Jutarnja tura', 'Celodnevna tura', 'Večernja tura', 'Privatna tura'],
  'Informacije': ['O nama', 'Galerija', 'Utisci gostiju', 'Zašto ZlatiBike?'],
  'Kontakt': ['+381 64 123 4567', 'info@zlatibike.rs', 'Zlatibor, Srbija', '07:00 – 20:00'],
}

export default function Footer() {
  return (
    <footer className="bg-forest border-t border-white/10 px-6 lg:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-ember flex items-center justify-center font-black text-white text-sm shadow-lg shadow-ember/30">Z</div>
              <span className="font-display font-black text-white text-lg tracking-tight">ZlatiBike</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium e-bike iskustvo na Zlatiboru. Otkrijte najlepše staze uz naše stručne vodiče.
            </p>
          </div>

          {Object.entries(LINKS).map(([col, items]) => (
            <div key={col}>
              <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-4">{col}</p>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#contact" className="text-white/40 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© 2024 ZlatiBike. Sva prava zadržana.</p>
          <p className="text-white/20 text-xs">Made with ♥ for Zlatibor</p>
        </div>
      </div>
    </footer>
  )
}
