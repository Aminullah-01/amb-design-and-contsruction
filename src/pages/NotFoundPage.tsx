import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/portfolio/ProjectCard'
import { buttonVariants } from '@/components/ui/buttonVariants'
import Seo from '@/components/seo/Seo'
import { site } from '@/content/site'
import { getFeaturedProjects } from '@/lib/projects'
import { LOGO_LIGHT } from '@/lib/brand'
import { PAGE_SEO } from '@/lib/seo'

export default function NotFoundPage() {
  const featured = getFeaturedProjects().slice(0, 3)

  return (
    <>
      <Seo
        title={PAGE_SEO.notFound.title}
        description={PAGE_SEO.notFound.description}
        path="/"
        noindex
      />

      <Section background="surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <img
              src={LOGO_LIGHT}
              alt={site.name}
              width={400}
              height={307}
              loading="eager"
              className="mx-auto h-14 w-auto"
            />
            <p className="mt-8 font-heading text-5xl font-bold text-blue-700 md:text-7xl">404</p>
            <h1 className="mt-4 font-heading text-2xl font-bold text-ink-900 md:text-4xl">
              We can&rsquo;t find that page
            </h1>
            <p className="mt-4 text-base text-ink-600 md:text-lg">
              The page you are looking for does not exist or has moved. Let&rsquo;s get you back on
              track.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
                Back to home
              </Link>
              <Link to="/portfolio" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
                View our work
              </Link>
              <Link to="/contact" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {featured.length > 0 ? (
        <Section background="white">
          <Container>
            <SectionHeading
              eyebrow="While you are here"
              title="Featured projects"
              align="center"
            />
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <li key={project.slug} className="h-full">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}
    </>
  )
}