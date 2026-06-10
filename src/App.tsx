import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

// Service pages
const WeeklyMaintenance = lazy(() => import('./pages/services/WeeklyMaintenance'))
const SeasonalCare = lazy(() => import('./pages/services/SeasonalCare'))
const PoolRepair = lazy(() => import('./pages/services/PoolRepair'))
const PoolResurfacing = lazy(() => import('./pages/services/PoolResurfacing'))
const EmergencyService = lazy(() => import('./pages/services/EmergencyService'))
const CommercialPools = lazy(() => import('./pages/services/CommercialPools'))

// Area pages
const Arcadia = lazy(() => import('./pages/areas/Arcadia'))
const Wauchula = lazy(() => import('./pages/areas/Wauchula'))
const PuntaGorda = lazy(() => import('./pages/areas/PuntaGorda'))
const PortCharlotte = lazy(() => import('./pages/areas/PortCharlotte'))
const BocaGrande = lazy(() => import('./pages/areas/BocaGrande'))
const Rotunda = lazy(() => import('./pages/areas/Rotunda'))
const Englewood = lazy(() => import('./pages/areas/Englewood'))

function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#dfe24b] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services */}
            <Route path="/services/weekly-pool-maintenance" element={<WeeklyMaintenance />} />
            <Route path="/services/seasonal-care" element={<SeasonalCare />} />
            <Route path="/services/pool-repair" element={<PoolRepair />} />
            <Route path="/services/pool-resurfacing" element={<PoolResurfacing />} />
            <Route path="/services/emergency-service" element={<EmergencyService />} />
            <Route path="/services/commercial-pools" element={<CommercialPools />} />

            {/* Areas */}
            <Route path="/areas/arcadia" element={<Arcadia />} />
            <Route path="/areas/wauchula" element={<Wauchula />} />
            <Route path="/areas/punta-gorda" element={<PuntaGorda />} />
            <Route path="/areas/port-charlotte" element={<PortCharlotte />} />
            <Route path="/areas/boca-grande" element={<BocaGrande />} />
            <Route path="/areas/rotunda" element={<Rotunda />} />
            <Route path="/areas/englewood" element={<Englewood />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
