// Sve koordinate u [longitude, latitude] formatu (GeoJSON konvencija).
// Elevation u metrima. Lako se zameni pravim GPX podacima kasnije.

export const ROUTES = [
  {
    slug: 'tornik-vidikovac',
    name: 'Tornik vidikovac',
    tagline: 'Najpopularnija ruta — vrh Zlatibora i 360° pogled',
    difficulty: 'Laka',
    difficultyColor: 'bg-green-500',
    distanceKm: 12.4,
    durationMin: 120,
    elevationGainM: 320,
    elevationMaxM: 1496,
    elevationMinM: 1180,
    image: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=1200&q=85',
    description:
      'Klasična ruta do najvišeg vrha Zlatibora (1496m). Krećete iz centra, pratite asfalt do podnožja Tornika, a zatim makadamskom stazom kroz borovu šumu do vidikovca. Sa vrha pogled puca na Zlatar, Zlatibor i, po vedrom danu, čak do Bosne. Idealna za prvu turu — uspon je postupan, e-bike čini sve lakim.',
    tips: [
      'Krenite ujutro pre 10h — mawe ljudi na vidikovcu',
      'Ponesite slojeve odeće, na vrhu je svežije za 5°C',
      'Žičara radi paralelno ako želite predah',
    ],
    coordinates: [
      [19.7028, 43.7284], [19.6995, 43.7261], [19.6953, 43.7230],
      [19.6890, 43.7185], [19.6820, 43.7140], [19.6750, 43.7090],
      [19.6680, 43.7045], [19.6610, 43.7010], [19.6540, 43.6975],
      [19.6470, 43.6950], [19.6400, 43.6935], [19.6350, 43.6920],
      [19.6328, 43.6915],
    ],
    elevationProfile: [
      { km: 0,    m: 1180 }, { km: 1,    m: 1210 }, { km: 2,    m: 1245 },
      { km: 3,    m: 1280 }, { km: 4,    m: 1305 }, { km: 5,    m: 1340 },
      { km: 6,    m: 1380 }, { km: 7,    m: 1410 }, { km: 8,    m: 1430 },
      { km: 9,    m: 1455 }, { km: 10,   m: 1475 }, { km: 11,   m: 1490 },
      { km: 12.4, m: 1496 },
    ],
    pois: [
      { id: 1, type: 'Start',      name: 'Centar Zlatibora',  coord: [19.7028, 43.7284], note: 'Polazna tačka, parking' },
      { id: 2, type: 'Restoran',   name: 'Restoran Vodice',   coord: [19.6820, 43.7140], note: 'Lokalna kuhnja, 5km od starta' },
      { id: 3, type: 'Izvor',      name: 'Izvor pitke vode',  coord: [19.6610, 43.7010], note: 'Napunite flaše' },
      { id: 4, type: 'Foto',       name: 'Borova šuma',       coord: [19.6470, 43.6950], note: 'Najlepši deo trase za fotografije' },
      { id: 5, type: 'Vidikovac',  name: 'Vrh Tornika',       coord: [19.6328, 43.6915], note: '1496m — 360° panorama' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=800&q=85',
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=85',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=85',
    ],
  },
  {
    slug: 'ribnicko-jezero',
    name: 'Ribničko jezero',
    tagline: 'Avantura srednje težine — divlja priroda i jezero',
    difficulty: 'Srednja',
    difficultyColor: 'bg-amber-500',
    distanceKm: 24.8,
    durationMin: 240,
    elevationGainM: 540,
    elevationMaxM: 1280,
    elevationMinM: 950,
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=85',
    description:
      'Celodnevna ruta kroz manje poznate delove Zlatibora. Vodi vas pored Ribničkog jezera — skrivenog dragulja okruženog šumom — i kroz nekoliko etno-sela. Tehnički zahtevniji deo je makadam između 8. i 14. kilometra, ali e-bike to čini prijatnim. Obavezno se zaustavite na jezeru za predah i fotografije.',
    tips: [
      'Ponesite vode i užinu — između 8. i 18. kilometra nema kafane',
      'Proverite baterije pre starta, dugačka ruta',
      'Posle kiše makadam je klizav — oprez',
    ],
    coordinates: [
      [19.7028, 43.7284], [19.7095, 43.7320], [19.7180, 43.7355],
      [19.7265, 43.7375], [19.7350, 43.7390], [19.7430, 43.7385],
      [19.7510, 43.7370], [19.7585, 43.7340], [19.7640, 43.7300],
      [19.7680, 43.7250], [19.7700, 43.7200], [19.7705, 43.7150],
      [19.7690, 43.7100], [19.7660, 43.7060], [19.7610, 43.7035],
      [19.7540, 43.7025], [19.7460, 43.7035], [19.7380, 43.7065],
      [19.7300, 43.7110], [19.7230, 43.7160], [19.7170, 43.7210],
      [19.7115, 43.7245], [19.7065, 43.7270], [19.7028, 43.7284],
    ],
    elevationProfile: [
      { km: 0,    m: 1180 }, { km: 2,    m: 1140 }, { km: 4,    m: 1095 },
      { km: 6,    m: 1050 }, { km: 8,    m: 990  }, { km: 10,   m: 950  },
      { km: 12,   m: 970  }, { km: 14,   m: 1020 }, { km: 16,   m: 1080 },
      { km: 18,   m: 1150 }, { km: 20,   m: 1210 }, { km: 22,   m: 1250 },
      { km: 24.8, m: 1280 },
    ],
    pois: [
      { id: 1, type: 'Start',     name: 'Centar Zlatibora',     coord: [19.7028, 43.7284], note: 'Polazna i ciljna tačka' },
      { id: 2, type: 'Selo',      name: 'Etno-selo Sirogojno',  coord: [19.7350, 43.7390], note: 'Tradicionalna arhitektura' },
      { id: 3, type: 'Vidikovac', name: 'Pogled na kanjon',     coord: [19.7700, 43.7200], note: 'Najlepša fotografska tačka' },
      { id: 4, type: 'Jezero',    name: 'Ribničko jezero',      coord: [19.7540, 43.7025], note: 'Predah i kupanje leti' },
      { id: 5, type: 'Restoran',  name: 'Etno-konak',           coord: [19.7300, 43.7110], note: 'Domaća kuhinja, povratak' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=85',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=85',
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&q=85',
    ],
  },
  {
    slug: 'cigota-panorama',
    name: 'Čigota panorama',
    tagline: 'Kratka popodnevna ruta sa panoramskim pogledom',
    difficulty: 'Laka',
    difficultyColor: 'bg-green-500',
    distanceKm: 8.2,
    durationMin: 90,
    elevationGainM: 180,
    elevationMaxM: 1422,
    elevationMinM: 1170,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=85',
    description:
      'Najkraća od naših ruta — savršena za popodnevni izlet ili one koji prvi put isprobavaju e-bike. Vodi do vrha Čigote (1422m), poznatog kao "balkon Zlatibora". Sa vidikovca puca pogled na ceo Zlatiborski plato. Ruta je u potpunosti obeležena, sa dva kafića duž puta.',
    tips: [
      'Idealno za zalazak sunca — krenite 2h pre',
      'Pogodno za decu od 12+ godina',
      'Asfalt do 6km, makadam poslednja 2km',
    ],
    coordinates: [
      [19.7028, 43.7284], [19.7065, 43.7310], [19.7095, 43.7340],
      [19.7115, 43.7370], [19.7130, 43.7395], [19.7145, 43.7415],
      [19.7150, 43.7395], [19.7148, 43.7398],
    ],
    elevationProfile: [
      { km: 0,   m: 1170 }, { km: 1,   m: 1210 }, { km: 2,   m: 1255 },
      { km: 3,   m: 1295 }, { km: 4,   m: 1335 }, { km: 5,   m: 1370 },
      { km: 6,   m: 1395 }, { km: 7,   m: 1410 }, { km: 8.2, m: 1422 },
    ],
    pois: [
      { id: 1, type: 'Start',     name: 'Centar Zlatibora',  coord: [19.7028, 43.7284], note: 'Polazna tačka' },
      { id: 2, type: 'Kafić',     name: 'Caffe Panorama',    coord: [19.7095, 43.7340], note: 'Espresso predah' },
      { id: 3, type: 'Foto',      name: 'Šumski tunel',      coord: [19.7130, 43.7395], note: 'Najfotografisaniji deo' },
      { id: 4, type: 'Vidikovac', name: 'Vrh Čigote',        coord: [19.7148, 43.7398], note: '1422m — balkon Zlatibora' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=85',
      'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=800&q=85',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=85',
    ],
  },
]

export function getRouteBySlug(slug) {
  return ROUTES.find(r => r.slug === slug)
}

export function formatDuration(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m} min`
  if (m === 0) return `${h}h`
  return `${h}h ${m}min`
}
