export const SITE = 'https://www.tifspoolcare.com'

const PROVIDER = {
  '@type': 'HomeAndConstructionBusiness',
  name: "Tif's Pool Care",
  telephone: '+19412683747',
  url: SITE,
}

const city = (name: string) => ({ '@type': 'City', name, addressRegion: 'FL' })

const ALL_CITIES = [
  city('Arcadia'),
  city('Wauchula'),
  city('Punta Gorda'),
  city('Port Charlotte'),
  city('Boca Grande'),
  city('Rotonda West'),
  city('Englewood'),
]

const breadcrumb = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name, item: `${SITE}${path}` },
  ],
})

const service = (name: string, description: string, path: string, areaServed: object | object[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${SITE}${path}`,
  provider: PROVIDER,
  areaServed,
})

export interface PageMeta {
  path: string
  title: string
  description: string
  schema?: object[]
}

const servicePage = (
  path: string,
  title: string,
  description: string,
  serviceName: string,
  areaServed: object | object[] = ALL_CITIES,
): PageMeta => ({
  path,
  title,
  description,
  schema: [service(serviceName, description, path, areaServed), breadcrumb(serviceName, path)],
})

const areaPage = (slug: string, cityName: string, title: string, description: string): PageMeta => {
  const path = `/areas/${slug}`
  return {
    path,
    title,
    description,
    schema: [
      service(`Pool Service in ${cityName}, FL`, description, path, city(cityName)),
      breadcrumb(`Pool Service in ${cityName}, FL`, path),
    ],
  }
}

export const pageMeta: PageMeta[] = [
  {
    path: '/',
    title: "Tif's Pool Care | Pool Service in Arcadia & Southwest Florida",
    description:
      "Licensed & insured pool maintenance, repair, and resurfacing in Arcadia, Port Charlotte, Punta Gorda & Southwest Florida. 20+ years experience. CPO Certified. Woman owned. Call (941) 268-3747.",
  },
  {
    path: '/about',
    title: "About Tiffany — CPO Certified Pool Pro | Tif's Pool Care",
    description:
      "Meet Tiffany, the CPO certified, woman-owned pool professional behind Tif's Pool Care. 20+ years keeping Southwest Florida pools clean, safe, and swim-ready.",
    schema: [breadcrumb("About Tif's Pool Care", '/about')],
  },
  {
    path: '/contact',
    title: "Contact Tif's Pool Care | Free Pool Service Quotes",
    description:
      "Get a free pool service quote in Arcadia, Port Charlotte & Southwest Florida. Call or text (941) 268-3747 or send a message — Tiffany responds fast.",
    schema: [breadcrumb("Contact Tif's Pool Care", '/contact')],
  },
  servicePage(
    '/services/weekly-pool-maintenance',
    "Weekly Pool Maintenance in Southwest Florida | Tif's Pool Care",
    "Weekly pool cleaning with chemicals, brushing, netting, vacuuming, filter care & equipment checks in Arcadia, Port Charlotte & Punta Gorda. Call (941) 268-3747.",
    'Weekly Pool Maintenance',
  ),
  servicePage(
    '/services/seasonal-care',
    "Seasonal & Snowbird Pool Care in SW Florida | Tif's Pool Care",
    "Year-round and snowbird pool care programs for Southwest Florida — monthly photo updates while you're away. Serving Port Charlotte, Punta Gorda & Arcadia.",
    'Seasonal Pool Care',
  ),
  servicePage(
    '/services/pool-repair',
    "Pool Repair in Port Charlotte & SW Florida | Tif's Pool Care",
    "Pool pump, filter, heater & leak repairs — diagnosed fast and fixed right. Serving Port Charlotte, Punta Gorda, Arcadia & nearby. Call (941) 268-3747.",
    'Pool Repair',
  ),
  servicePage(
    '/services/pool-resurfacing',
    "Pool Resurfacing in Port Charlotte, FL | Tif's Pool Care",
    "Pool resurfacing for Southwest Florida homes: finish options, how long each surface lasts, and how to know it's time. Free estimates — (941) 268-3747.",
    'Pool Resurfacing',
  ),
  servicePage(
    '/services/emergency-service',
    "Emergency Pool Service — Same-Day Response | Tif's Pool Care",
    "Green pool? Pump down? Storm mess? Same-day emergency pool help across Arcadia, Port Charlotte & Southwest Florida. Call (941) 268-3747 now.",
    'Emergency Pool Service',
  ),
  servicePage(
    '/services/commercial-pools',
    "Commercial Pool Service for HOAs & Hotels | Tif's Pool Care",
    "CPO certified commercial pool maintenance for HOAs, hotels, and apartment communities in Southwest Florida — clean, safe, and code-compliant.",
    'Commercial Pool Service',
  ),
  areaPage(
    'arcadia',
    'Arcadia',
    "Pool Service in Arcadia, FL | Tif's Pool Care",
    "Local pool cleaning, maintenance & repair in Arcadia and DeSoto County. Woman-owned, CPO certified, 20+ years of experience. Call (941) 268-3747.",
  ),
  areaPage(
    'wauchula',
    'Wauchula',
    "Pool Service in Wauchula, FL | Tif's Pool Care",
    "Reliable pool cleaning and maintenance in Wauchula and Hardee County — chemicals, brushing, equipment checks and repairs. Call (941) 268-3747.",
  ),
  areaPage(
    'punta-gorda',
    'Punta Gorda',
    "Pool Service in Punta Gorda, FL | Tif's Pool Care",
    "Pool cleaning, maintenance & repair in Punta Gorda — canal homes, salt systems and snowbird care handled by a CPO certified pro. (941) 268-3747.",
  ),
  areaPage(
    'port-charlotte',
    'Port Charlotte',
    "Pool Service in Port Charlotte, FL | Tif's Pool Care",
    "Weekly pool cleaning, repairs & snowbird care in Port Charlotte — canal-front or inland. CPO certified, woman-owned, 20+ years. Call (941) 268-3747.",
  ),
  areaPage(
    'boca-grande',
    'Boca Grande',
    "Pool Service in Boca Grande, FL | Tif's Pool Care",
    "Pool cleaning and maintenance on Boca Grande — salt-air equipment protection and meticulous care for island homes. Call (941) 268-3747.",
  ),
  areaPage(
    'rotunda',
    'Rotonda West',
    "Pool Service in Rotonda West, FL | Tif's Pool Care",
    "Pool cleaning, maintenance and repair in Rotonda West and Rotonda Lakes — dependable weekly service from a CPO certified pro. (941) 268-3747.",
  ),
  areaPage(
    'englewood',
    'Englewood',
    "Pool Service in Englewood, FL | Tif's Pool Care",
    "Pool cleaning, maintenance and repair in Englewood, FL — coastal salt-air care from a CPO certified, woman-owned local business. (941) 268-3747.",
  ),
]

export const metaByPath = new Map(pageMeta.map((m) => [m.path, m]))
