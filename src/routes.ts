import type { ComponentType } from 'react'

// Single source of truth for route -> page module, used by both the client
// router (lazy) and the build-time prerenderer (resolved statically).
export const pageImporters: Record<string, () => Promise<{ default: ComponentType }>> = {
  '/': () => import('./pages/Home'),
  '/about': () => import('./pages/About'),
  '/contact': () => import('./pages/Contact'),

  '/services/weekly-pool-maintenance': () => import('./pages/services/WeeklyMaintenance'),
  '/services/seasonal-care': () => import('./pages/services/SeasonalCare'),
  '/services/pool-repair': () => import('./pages/services/PoolRepair'),
  '/services/pool-resurfacing': () => import('./pages/services/PoolResurfacing'),
  '/services/emergency-service': () => import('./pages/services/EmergencyService'),
  '/services/commercial-pools': () => import('./pages/services/CommercialPools'),

  '/areas/arcadia': () => import('./pages/areas/Arcadia'),
  '/areas/wauchula': () => import('./pages/areas/Wauchula'),
  '/areas/punta-gorda': () => import('./pages/areas/PuntaGorda'),
  '/areas/port-charlotte': () => import('./pages/areas/PortCharlotte'),
  '/areas/boca-grande': () => import('./pages/areas/BocaGrande'),
  '/areas/rotunda': () => import('./pages/areas/Rotunda'),
  '/areas/englewood': () => import('./pages/areas/Englewood'),
}
