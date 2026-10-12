import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { Check, MessageCircle, Phone } from 'lucide-react'
import CTABand from '@/components/sections/CTABand'
import FaqAccordion from '@/components/sections/FaqAccordion'
import Img from '@/components/ui/Img'
import ProjectCard from '@/components/portfolio/ProjectCard'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { getServiceBySlug } from '@/lib/services'
import { getRelatedProjects } from '@/lib/projects'
import { site } from '@/content/site'
import { telUrl, whatsappUrl } from '@/lib/contact'
import NotFoundPage from './NotFoundPage'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <NotFoundPage />
  }

  const phone = site.phones?.[0]
  const quoteMessage = `Hello AMB Design and Construction, I would like a free quote for ${service.title}.`
  const whatsappLink = whatsappUrl(quoteMessage)
  const callToRaw = (phone?.international ?? phone?.tel ?? '') as string;

  const related = getRelatedProjects(slug, 3)

  const bannerImage = '/images/projects/villa-aerial-gazebo-01.webp'
  const bannerAlt = 'AMB design and construction project'

  return (
    <>
      <Helmet>
        <title>{`${service.title} | AMB Design and Construction Limited`}</title>
        <meta name="description" content={service.shortDescription} />
        <meta property="og:title" content={`${service.title} | AMB Design and Construction Limited`} />
        <meta property="og:description" content={service.shortDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/brand/og-image.png" />
      </Helmet>

      <div className="relative">
        <div className="relative h-[240px] w-full md:h-[320px] lg:h-[380px]">
          <Img
            src={bannerImage}
            alt={bannerAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/65" />
          <div className="absolute inset-0 flex flex-col justify-center">
            <Container>
              <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
                <Link to="/" className="hover:text-white">Home</Link> /{' '}
                <Link to="/services" className="hover:text-white">Services</Link> /{' '}
                <span className="text-white">{service.title}</span>
              </nav>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
                {service.shortDescription}
              </p>
            </Container>
          </div>
        </div>

        <Section background="white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div>
                <SectionHeading eyebrow="What We Do" title="From concept to delivery" className="max-w-none" />
                <p className="mt-5 text-base leading-relaxed text-ink-600 md:text-lg">
                  {service.longDescription}
                </p>

                <h3 className="mt-8 font-heading text-xl font-bold text-ink-900 md:text-2xl">
                  Deliverables
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-base text-ink-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 font-heading text-xl font-bold text-ink-900 md:text-2xl">
                  Who it is for
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600 md:text-lg">
                  {service.whoItsFor}
                </p>
              </div>

              <aside className="lg:sticky lg:top-24">
                <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-ink-900">Get Started</h3>
                  <p className="mt-2 text-sm text-ink-600">
                    Tell us about your project and we’ll respond promptly.
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      to={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${buttonVariants({ variant: 'primary', size: 'md' })} w-full`}
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      Request a Free Quote
                    </Link>
                    {callToRaw && (
                      <Link
                        to={telUrl(callToRaw) as any}
                        className={`${buttonVariants({ variant: 'secondary', size: 'md' })} w-full`}
                      >
                        <Phone className="h-5 w-5" aria-hidden="true" />
                        Call Us
                      </Link>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </Section>

        <Section background="surface">
          <Container>
            <SectionHeading
              eyebrow="Service Process"
              title="How this service works"
              intro="A clear path from start to finish."
              align="center"
            />
            <ol className="mx-auto mt-10 max-w-3xl space-y-6">
              {service.processSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-lg border border-line bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-1.5 text-base text-ink-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        {related.length > 0 ? (
          <Section background="white">
            <Container>
              <SectionHeading
                eyebrow="Related Projects"
                title="See examples of this work"
                align="center"
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {service.faqs.length > 0 ? <FaqAccordion faqs={service.faqs} /> : null}

        <CTABand />
      </div>
    </>
  )
}