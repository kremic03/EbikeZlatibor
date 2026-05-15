import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IZMENA: dodato `server.host: true` da dev server sluša na 0.0.0.0,
// kako bi telefon u istoj LAN mreži mogao da otvori sajt preko IP adrese
// (i tako testira QR kodove). Takođe omogućava ngrok tunelu da forward-uje saobraćaj.
//
// IZMENA #2: dodato `server.allowedHosts` sa ngrok domenima — Vite po default-u
// blokira nepoznate Host headere (DNS rebinding zaštita), a bez ovoga ngrok
// tunel vraća "Blocked request" stranicu umesto našeg sajta.

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io', '.ngrok.app'],
  },
})
