import { Helmet } from 'react-helmet-async'
import Container from '@/components/ui/Container'
import CTABand from '@/components/sections/CTABand'
import Img from '@/components/ui/Img'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/content/services'
import { getProjectBySlug } from '@/lib/projects'

export default function ServicesPage() {
  const bannerProject = getProjectBySlug('modern-duplex-with-glass-corner')

  return (
    <>
      <Helmet>
        <title>Our Services | AMB Design and Construction Limited</title>
        <meta name="description" content="From architectural design and 3D visualization to construction, renovation and supervision — one team from design to handover." />
        <meta property="og:title" content="Our Services | AMB Design and Construction Limited" />
        <meta property="og:description" content="From architectural design and 3D visualization to construction, renovation and supervision — one team from design to handover." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/brand/og-image.png" />
      </Helmet>

      <div className="relative">
        <div className="relative h-[260px] w-full md:h-[360px] lg:h-[420px]">
          {bannerProject ? (
            <Img
              src={bannerProject.coverImage.src}
              alt={bannerProject.coverImage.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-ink-900/60" />
          <div className="absolute inset-0 flex flex-col justify-center">
            <Container>
              <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
                <a href="/" className="hover:text-white">Home</a> / <span className="text-white">Services</span>
              </nav>
              <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">Our Services</h1>
            </Container>
          </div>
        </div>

        <Section background="white">
          <Container>
            <SectionHeading eyebrow="What We Offer" title="End-to-end design and construction" align="center" />
            <p className="mx-auto mt-5 max-w-3xl text-center text-base text-ink-600 md:text-lg">
              From the first sketch to the final handover, we handle the full process under one roof. Every service is built around clear deliverables, honest timelines and quality workmanship.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Container>
        </Section>

        <Section background="surface">
          <Container>
            <SectionHeading
              eyebrow="How We Work"
              title="From consultation to handover"
              intro="A clear, six-step process, so you always know what happens next."
              align="center"
            />
            <ProcessTimeline variant="compact" className="mt-12" />
          </Container>
        </Section>

        <CTABand />
      </div>
    </>
  )
}