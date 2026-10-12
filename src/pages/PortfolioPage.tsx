import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import Section from '@/components/ui/Section'
import ProjectCard from '@/components/portfolio/ProjectCard'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { getAllProjects, getPortfolioCategories, getProjectsByLabel, PORTFOLIO_CATEGORIES } from '@/lib/projects'

const ALL = 'All'

export default function PortfolioPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const prefersReducedMotion = useReducedMotion()

  const categories = getPortfolioCategories()
  const labels = [ALL, ...categories.map((category) => category.label)]
  const knownLabels = [ALL, ...PORTFOLIO_CATEGORIES.map((category) => category.label)]

  const param = searchParams.get('category')
  const active = param && knownLabels.includes(param) ? param : ALL

  const projects = active === ALL ? getAllProjects() : getProjectsByLabel(active)

  const select = (label: string) => {
    if (label === ALL) setSearchParams({})
    else setSearchParams({ category: label })
  }

  return (
    <>
      <Helmet>
        <title>Our Work | AMB Design and Construction Limited</title>
        <meta
          name="description"
          content="Selected projects, 3D renders and scale models by AMB Design and Construction Limited."
        />
        <meta property="og:title" content="Our Work | AMB Design and Construction Limited" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/brand/og-image.png" />
      </Helmet>

      <div className="relative">
        <div className="relative h-[260px] w-full md:h-[360px] lg:h-[420px]">
          <Img
            src="/images/projects/duplex-glass-corner-01.webp"
            alt="Modern duplex with a tall glass corner, timber fins, stone cladding and a paved drive"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/60" />
          <div className="absolute inset-0 flex flex-col justify-center">
            <Container>
              <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
                <Link to="/" className="hover:text-white">
                  Home
                </Link>{' '}
                / <span className="text-white">Our Work</span>
              </nav>
              <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                Our Work
              </h1>
            </Container>
          </div>
        </div>

        <Section background="white">
          <Container>
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex flex-wrap gap-3"
            >
              {labels.map((label) => {
                const isActive = active === label
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => select(label)}
                    aria-pressed={isActive}
                    className={clsx(
                      'rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
                      isActive
                        ? 'border-blue-700 bg-blue-700 text-white'
                        : 'border-line bg-white text-ink-600 hover:border-blue-700 hover:text-blue-700',
                    )}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {projects.length > 0 ? (
              <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {projects.map((project) => (
                    <motion.div
                      key={project.slug}
                      layout
                      className="h-full"
                      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="mt-10 rounded-lg border border-line bg-surface p-10 text-center">
                <p className="font-heading text-lg font-bold text-ink-900">
                  No projects in this category yet.
                </p>
                <p className="mt-2 text-ink-600">
                  New work is added regularly. Explore everything we have delivered so far.
                </p>
                <button
                  type="button"
                  onClick={() => select(ALL)}
                  className={`${buttonVariants({ variant: 'secondary', size: 'md' })} mt-6`}
                >
                  Show all projects
                </button>
              </div>
            )}
          </Container>
        </Section>
      </div>
    </>
  )
}