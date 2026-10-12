import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import Lightbox, { type LightboxImage } from '@/components/ui/Lightbox'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABand from '@/components/sections/CTABand'
import ProjectCard from '@/components/portfolio/ProjectCard'
import { getAllProjects, getProjectBySlug, getRelatedProjects } from '@/lib/projects'
import { isPlaceholder } from '@/lib/placeholder'
import NotFoundPage from './NotFoundPage'

type Fact = { label: string; value: string }

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project || !slug) {
    return <NotFoundPage />
  }

  const rawFacts: Fact[] = [
    { label: 'Category', value: project.category },
    { label: 'Location', value: project.location },
    { label: 'Year', value: project.year },
    { label: 'Services provided', value: project.servicesProvided.join(', ') },
    { label: 'Status', value: project.status },
  ]

  const facts = rawFacts.flatMap((fact): Fact[] => {
    const placeholder = isPlaceholder(fact.value)
    if (placeholder && !import.meta.env.DEV) return []
    return [{ label: fact.label, value: placeholder ? 'To be added' : fact.value }]
  })

  const all = getAllProjects()
  const index = all.findIndex((item) => item.slug === project.slug)
  const previous = all.length > 1 ? all[(index - 1 + all.length) % all.length] : undefined
  const next = all.length > 1 ? all[(index + 1) % all.length] : undefined

  const related = getRelatedProjects(project.slug, 3)

  const galleryImages: LightboxImage[] = [project.coverImage, ...project.gallery].map((image) => ({
    src: image.src,
    alt: image.alt,
    caption: image.caption,
  }))

  const ctaMessage = `Hello AMB Design and Construction, I saw the "${project.title}" project and would like something similar.`

  return (
    <>
      <Helmet>
        <title>{`${project.title} | AMB Design and Construction Limited`}</title>
        <meta name="description" content={project.overview} />
        <meta property="og:title" content={`${project.title} | AMB Design and Construction Limited`} />
        <meta property="og:description" content={project.overview} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={project.coverImage.src} />
      </Helmet>

      <div className="relative">
        <div className="relative h-[320px] w-full md:h-[460px] lg:h-[560px]">
          <Img
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/40 to-ink-900/20" />
          <div className="absolute inset-0 flex flex-col justify-end pb-8 md:pb-12">
            <Container>
              <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
                <Link to="/" className="hover:text-white">Home</Link> /{' '}
                <Link to="/portfolio" className="hover:text-white">Our Work</Link> /{' '}
                <span className="text-white">{project.title}</span>
              </nav>
              <span className="inline-block rounded-md bg-brick-500 px-3 py-1 text-xs font-semibold text-white">
                {project.category}
              </span>
              <h1 className="mt-3 font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
            </Container>
          </div>
        </div>

        <Section background="white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div>
                <SectionHeading eyebrow="Overview" title="About this project" className="max-w-none" />
                <p className="mt-5 text-base leading-relaxed text-ink-600 md:text-lg">
                  {project.overview}
                </p>

                {project.challenge ? (
                  <div className="mt-8">
                    <h3 className="font-heading text-xl font-bold text-ink-900 md:text-2xl">
                      The Challenge
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-600 md:text-lg">
                      {project.challenge}
                    </p>
                  </div>
                ) : null}

                {project.solution ? (
                  <div className="mt-8">
                    <h3 className="font-heading text-xl font-bold text-ink-900 md:text-2xl">
                      Our Solution
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-600 md:text-lg">
                      {project.solution}
                    </p>
                  </div>
                ) : null}
              </div>

              <aside className="lg:sticky lg:top-24">
                <div className="rounded-lg border border-line bg-surface p-6">
                  <h2 className="font-heading text-lg font-bold text-ink-900">Project Details</h2>
                  <dl className="mt-4 divide-y divide-line">
                    {facts.map((fact) => (
                      <div key={fact.label} className="flex justify-between gap-4 py-3">
                        <dt className="text-sm font-semibold text-ink-600">{fact.label}</dt>
                        <dd className="text-right text-sm text-ink-900">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>
            </div>
          </Container>
        </Section>

        {project.beforeAfter ? (
          <Section background="surface">
            <Container>
              <SectionHeading eyebrow="Before & After" title="See the transformation" align="center" />
              <div className="mx-auto mt-10 max-w-4xl">
                <BeforeAfterSlider
                  before={project.beforeAfter.before}
                  after={project.beforeAfter.after}
                  beforeLabel={project.beforeAfter.beforeLabel}
                  afterLabel={project.beforeAfter.afterLabel}
                  caption={project.beforeAfter.caption}
                />
              </div>
            </Container>
          </Section>
        ) : null}

        {project.gallery.length > 0 ? (
          <Section background="surface">
            <Container>
              <SectionHeading eyebrow="Gallery" title="Project gallery" align="center" />
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((image, imageIndex) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setLightboxIndex(imageIndex + 1)}
                    aria-label={`View image: ${image.alt}`}
                    className="group block overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <Img
                      src={image.src}
                      alt={image.alt}
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                      className="aspect-[4/3] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {previous && next && previous.slug !== next.slug ? (
          <Section background="white">
            <Container>
              <div className="flex flex-col gap-4 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  to={`/portfolio/${previous.slug}`}
                  className="group flex items-center gap-3 text-ink-600 transition hover:text-blue-700"
                >
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      Previous
                    </span>
                    <span className="font-semibold text-ink-900 group-hover:text-blue-700">
                      {previous.title}
                    </span>
                  </span>
                </Link>
                <Link
                  to={`/portfolio/${next.slug}`}
                  className="group flex items-center gap-3 text-right text-ink-600 transition hover:text-blue-700 sm:justify-end"
                >
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      Next
                    </span>
                    <span className="font-semibold text-ink-900 group-hover:text-blue-700">
                      {next.title}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </Container>
          </Section>
        ) : null}

        {related.length > 0 ? (
          <Section background="surface">
            <Container>
              <SectionHeading eyebrow="Related" title="More projects" align="center" />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <ProjectCard key={item.slug} project={item} />
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        <CTABand title="Want something similar? Let’s talk" whatsappMessage={ctaMessage} quoteMessage={ctaMessage} />

        {project.gallery.length > 0 ? (
          <Lightbox
            images={galleryImages}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        ) : null}
      </div>
    </>
  )
}