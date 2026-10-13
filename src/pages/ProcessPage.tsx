import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import FaqAccordion from '@/components/sections/FaqAccordion'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import CTABand from '@/components/sections/CTABand'
import JsonLd from '@/components/seo/JsonLd'
import Seo from '@/components/seo/Seo'
import { preparationChecklist } from '@/content/process'
import { faqs } from '@/content/faqs'
import { getProjectBySlug } from '@/lib/projects'
import { PAGE_SEO } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export default function ProcessPage() {
  const bannerProject = getProjectBySlug('two-storey-villa-with-pool')

  return (
    <>
      <Seo title={PAGE_SEO.process.title} description={PAGE_SEO.process.description} path="/process" />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Process', path: '/process' },
        ])}
      />

      <div className="relative h-[260px] w-full md:h-[360px] lg:h-[420px]">
        {bannerProject ? (
          <Img
            src={bannerProject.coverImage.src}
            alt={bannerProject.coverImage.alt}
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-ink-900/60" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <Link to="/" className="hover:text-white">
                Home
              </Link>{' '}
              / <span className="text-white">Process</span>
            </nav>
            <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Process
            </h1>
          </Container>
        </div>
      </div>

      <Section background="white">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="Six steps from consultation to handover"
            intro="A clear process, so you always know what happens next, what you need to do and what you will receive."
            align="center"
          />
          <ProcessTimeline variant="full" className="mt-14" />
        </Container>
      </Section>

      <Section background="surface">
        <Container>
          <SectionHeading
            eyebrow="Before You Start"
            title="What to prepare before your first meeting"
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {preparationChecklist.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-lg border border-line bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FaqAccordion
        faqs={faqs}
        eyebrow="Process FAQ"
        title="Questions about the process"
        intro="Common questions about timelines, drawings, remote supervision and payments."
        background="white"
      />

      <CTABand />
    </>
  )
}