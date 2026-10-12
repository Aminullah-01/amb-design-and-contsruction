import { Outlet } from 'react-router-dom'
import FloatingButtons from '@/components/layout/FloatingButtons'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col pb-20 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
