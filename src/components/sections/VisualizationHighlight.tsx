import { Check, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { getServiceBySlug } from '@/lib/services'
import { whatsappUrl } from '@/lib/contact'
import { getProjectBySlug } from '@/lib/projects'

export default function VisualizationHighlight() {
  const service = getServiceBySlug('3d-architectural-visualization')
  const project = getProjectBySlug('villa-with-pool-and-gazebo')

  const eyebrow = service?.title ?? '3D Visualization'
  const intro = service?.longDescription ?? ''
  const bullets = service?.deliverables ?? []
  const message = `Hello AMB Design and Construction, I would like to request ${service?.title ?? 'a 3D design'} for my project.`

  return (
    <Section background="surface" id="visualization-highlight">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative rounded-lg border border-line bg-white p-2 shadow-sm">
            {project ? (
              <Img
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
            ) : null}
            <span className="absolute top-4 left-4 rounded-md bg-brick-500 px-2.5 py-1 text-xs font-semibold text-white">
              3D Render
            </span>
          </div>

          <SectionHeading eyebrow={eyebrow} title="See Your Building Before It Is Built" className="max-w-none">
            {intro ? <p className="mt-5 text-base text-ink-600 md:text-lg">{intro}</p> : null}

            {bullets.length > 0 ? (
              <ul className="mt-6 space-y-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="font-medium text-ink-600">{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <Link
              to={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: 'primary', size: 'lg' })} mt-8`}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Request a 3D Design
            </Link>
          </SectionHeading>
        </div>
      </Container>
    </Section>
  )
}