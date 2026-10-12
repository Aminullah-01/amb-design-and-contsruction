import { Helmet } from 'react-helmet-async'
import AboutPreview from '@/components/sections/AboutPreview'
import CTABand from '@/components/sections/CTABand'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Hero from '@/components/sections/Hero'
import ProcessPreview from '@/components/sections/ProcessPreview'
import ScaleModelShowcase from '@/components/sections/ScaleModelShowcase'
import ServicesOverview from '@/components/sections/ServicesOverview'
import Testimonials from '@/components/sections/Testimonials'
import VisualizationHighlight from '@/components/sections/VisualizationHighlight'
import WhyChooseAmb from '@/components/sections/WhyChooseAmb'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>AMB Design and Construction Limited</title>
      </Helmet>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseAmb />
      <ProcessPreview />
      <VisualizationHighlight />
      <ScaleModelShowcase />
      <Testimonials />
      <CTABand />
    </>
  )
}
