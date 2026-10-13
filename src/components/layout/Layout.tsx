import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Analytics from '@/components/Analytics'
import FloatingButtons from '@/components/layout/FloatingButtons'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLd from '@/components/seo/JsonLd'
import { localBusinessSchema } from '@/lib/structured-data'

// Reserves roughly the hero's height so swapping to a lazy route never pushes
// the header/footer or shifts the viewport (CLS).
function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[85svh] items-center justify-center"
    >
      <span className="sr-only">Loading page</span>
    </div>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col pb-20 md:pb-0">
      <Analytics />
      <JsonLd data={localBusinessSchema()} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
