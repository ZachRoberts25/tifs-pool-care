import { StrictMode, Suspense, type ComponentType } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import { pageImporters } from './routes'

export { pageMeta, SITE } from './seo/meta'

let pagesPromise: Promise<[string, ComponentType][]> | null = null

function loadPages() {
  pagesPromise ??= Promise.all(
    Object.entries(pageImporters).map(
      async ([path, importer]) => [path, (await importer()).default] as [string, ComponentType],
    ),
  )
  return pagesPromise
}

export async function render(url: string): Promise<string> {
  const pages = await loadPages()
  return renderToString(
    <StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<Layout />}>
              {pages.map(([path, Page]) => (
                <Route key={path} path={path} element={<Page />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </MemoryRouter>
    </StrictMode>,
  )
}
