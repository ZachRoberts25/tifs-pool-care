import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'
import { pageImporters } from './routes'

const lazyPages = Object.entries(pageImporters).map(
  ([path, importer]) => [path, lazy(importer)] as const,
)

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
            {lazyPages.map(([path, Page]) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
