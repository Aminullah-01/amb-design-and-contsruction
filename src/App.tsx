import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ScrollToTop from '@/components/layout/ScrollToTop'

const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'))
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'))
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
const ProcessPage = lazy(() => import('@/pages/ProcessPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const StyleGuidePage = lazy(() => import('@/pages/StyleGuidePage'))

function RouteFallback() {
  return (
    <div role="status" aria-live="polite" className="px-5 py-24 text-center">
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/style-guide" element={<StyleGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
