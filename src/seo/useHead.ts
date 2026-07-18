import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { metaByPath, SITE } from './meta'

function set(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

// Keeps title/description/canonical/OG tags in sync on client-side navigation.
// Initial page load is already correct via build-time prerendering.
export function useHead() {
  const { pathname } = useLocation()
  useEffect(() => {
    const normalized = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/'
    const meta = metaByPath.get(normalized)
    document.title = meta ? meta.title : "Page Not Found | Tif's Pool Care"

    let robots = document.head.querySelector('meta[name="robots"]')
    if (!meta) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex')
      return
    }
    robots?.remove()

    const url = meta.path === '/' ? `${SITE}/` : `${SITE}${meta.path}`
    set('meta[name="description"]', 'content', meta.description)
    set('link[rel="canonical"]', 'href', url)
    set('meta[property="og:title"]', 'content', meta.title)
    set('meta[property="og:description"]', 'content', meta.description)
    set('meta[property="og:url"]', 'content', url)
    set('meta[name="twitter:title"]', 'content', meta.title)
    set('meta[name="twitter:description"]', 'content', meta.description)
  }, [pathname])
}
