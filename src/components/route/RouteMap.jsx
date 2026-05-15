import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Locate } from 'lucide-react'

const POI_COLORS = {
  Start:     '#0d2b1f',
  Vidikovac: '#f4801a',
  Restoran:  '#d96b10',
  Kafić:     '#d96b10',
  Izvor:     '#52b788',
  Foto:      '#2d6a4f',
  Selo:      '#1a4733',
  Jezero:    '#3b82f6',
}

export default function RouteMap({ route }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const userMarkerRef = useRef(null)
  const [locating, setLocating] = useState(false)
  const [locError, setLocError] = useState(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
        sources: {
          'osm-tiles': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors',
            maxzoom: 19,
          },
        },
        layers: [{ id: 'osm', type: 'raster', source: 'osm-tiles' }],
      },
      center: route.coordinates[0],
      zoom: 13,
    })

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')

    map.on('load', () => {
      // Route line
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: { type: 'LineString', coordinates: route.coordinates },
        },
      })
      map.addLayer({
        id: 'route-casing',
        type: 'line',
        source: 'route',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#0d2b1f', 'line-width': 7 },
      })
      map.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#f4801a', 'line-width': 4 },
      })

      // POI markers
      route.pois.forEach((poi) => {
        const el = document.createElement('div')
        el.style.cssText = `
          width: 28px; height: 28px; border-radius: 50%;
          background: ${POI_COLORS[poi.type] || '#f4801a'};
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          color: white; font-weight: 900; font-size: 11px;
          cursor: pointer;
        `
        el.textContent = poi.id

        const popup = new maplibregl.Popup({ offset: 18, closeButton: false }).setHTML(`
          <div style="font-family: Inter, sans-serif; min-width: 160px;">
            <div style="color: #f4801a; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">${poi.type}</div>
            <div style="font-weight: 800; font-size: 14px; color: #0d2b1f; margin-bottom: 4px;">${poi.name}</div>
            <div style="font-size: 12px; color: #6b7280;">${poi.note}</div>
          </div>
        `)

        new maplibregl.Marker({ element: el })
          .setLngLat(poi.coord)
          .setPopup(popup)
          .addTo(map)
      })

      // Fit bounds to route
      const bounds = route.coordinates.reduce(
        (b, c) => b.extend(c),
        new maplibregl.LngLatBounds(route.coordinates[0], route.coordinates[0])
      )
      map.fitBounds(bounds, { padding: 60, duration: 0 })
    })

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [route])

  function locateMe() {
    if (!navigator.geolocation) {
      setLocError('Vaš pretraživač ne podržava geolokaciju')
      return
    }
    setLocating(true)
    setLocError(null)

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coord = [pos.coords.longitude, pos.coords.latitude]
        const map = mapRef.current
        if (!map) return

        if (userMarkerRef.current) {
          userMarkerRef.current.setLngLat(coord)
        } else {
          const el = document.createElement('div')
          el.style.cssText = `
            width: 20px; height: 20px; border-radius: 50%;
            background: #3b82f6; border: 4px solid white;
            box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.25), 0 2px 6px rgba(0,0,0,0.3);
          `
          userMarkerRef.current = new maplibregl.Marker({ element: el })
            .setLngLat(coord)
            .addTo(map)
        }

        map.flyTo({ center: coord, zoom: 15, duration: 1200 })
        setLocating(false)
      },
      (err) => {
        setLocError(
          err.code === 1
            ? 'Niste dozvolili pristup lokaciji'
            : 'Ne mogu da pročitam lokaciju'
        )
        setLocating(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full rounded-2xl overflow-hidden" />
      <button
        onClick={locateMe}
        disabled={locating}
        className="absolute bottom-4 right-4 bg-white hover:bg-ember hover:text-white text-forest font-bold text-sm px-4 py-3 rounded-full shadow-xl flex items-center gap-2 transition-colors disabled:opacity-60"
      >
        <Locate size={16} className={locating ? 'animate-pulse' : ''} />
        {locating ? 'Tražim...' : 'Moja lokacija'}
      </button>
      {locError && (
        <div className="absolute top-4 left-4 right-4 bg-red-500/95 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-lg">
          {locError}
        </div>
      )}
    </div>
  )
}
