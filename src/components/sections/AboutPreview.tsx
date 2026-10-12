import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { getProjectBySlug } from '@/lib/projects'

const HIGHLIGHTS = [
  'Design to handover under one roof',
  'See it in 3D before it is built',
  'Quality, affordable and on time',
]

const PARAGRAPHS = [
  'AMB Design and Construction Limited is a Nigerian architecture and construction company that takes your project from the first sketch to the final handover.',
  'We combine creative design, honest pricing and solid workmanship so you deal with one accountable team from start to finish.',
  'To provide quality, affordable and innovative architectural design and construction services while meeting clients\u2019 needs and delivering durable projects.',
]

export default function AboutPreview() {
  const primary = getProjectBySlug('modern-duplex-with-glass-corner')
  const secondary = getProjectBySlug('two-storey-villa-with-pool')

  return (
    <Section background="white" id="about-preview">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            {primary ? (
              <img
                src={primary.coverImage.src}
                alt={primary.coverImage.alt}
                width={735}
                height={580}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-md"
              />
            ) : null}
            {secondary ? (
              <img
                src={secondary.coverImage.src}
                alt={secondary.coverImage.alt}
                width={736}
                height={736}
                loading="lazy"
                className="absolute -right-4 -bottom-6 w-36 rounded-lg border-4 border-white shadow-md sm:w-52"
              />
            ) : null}
          </div>

          <SectionHeading
            eyebrow="About AMB"
            title="One team, from design to handover"
            className="max-w-none"
          >
            <div className="mt-5 space-y-4 text-base text-ink-600 md:text-lg">
              {PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-ink-600">{highlight}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </SectionHeading>
        </div>
      </Container>
    </Section>
  )
}
