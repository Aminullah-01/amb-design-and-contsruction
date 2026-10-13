import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/portfolio/ProjectCard'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { getFeaturedProjects } from '@/lib/projects'

export default function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <Section background="white" id="featured-projects">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Featured Projects"
            intro="A selection of our designs, renders and scale models."
            align="center"
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal as="li" key={project.slug} className="h-full" delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 text-center" delay={120}>
          <Link to="/portfolio" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
            View all projects
          </Link>
        </Reveal>
      </Container>
    </Section>
  )
}