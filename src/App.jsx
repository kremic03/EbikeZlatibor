import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

const RoutesList = lazy(() => import('./pages/RoutesList'))
const RoutePage  = lazy(() => import('./pages/RoutePage'))
const AdminQR    = lazy(() => import('./pages/AdminQR'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-stone border-t-ember rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"            element={<Landing />} />
          <Route path="/rute"        element={<RoutesList />} />
          <Route path="/ruta/:slug"  element={<RoutePage />} />
          <Route path="/admin/qr"    element={<AdminQR />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
