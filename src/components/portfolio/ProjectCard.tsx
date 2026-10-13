import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Img from '@/components/ui/Img'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { isPlaceholder } from '@/lib/placeholder'
import type { Project } from '@/types/content'

export default function ProjectCard({ project }: { project: Project }) {
  const facts = [
    { label: 'Status', value: project.status },
    { label: 'Type', value: project.categories.filter((category) => category !== project.category).join(', ') },
    { label: 'Location', value: project.location },
    { label: 'Year', value: project.year },
  ].filter(
    (fact) => !isPlaceholder(fact.value) && fact.value.trim() !== '',
  )

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm transition duration-200 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Img
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          sizes="(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-md bg-brick-500 px-2.5 py-1 text-xs font-semibold text-white">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-ink-900">{project.title}</h3>

        {facts.length > 0 ? (
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-600">
            {facts.map((fact, index) => (
              <Fragment key={fact.label}>
                {index > 0 ? (
                  <span className="text-ink-600" aria-hidden="true">
                    &middot;
                  </span>
                ) : null}
                <span>
                  {fact.label}: {fact.value}
                </span>
              </Fragment>
            ))}
          </div>
        ) : null}

        <div className="mt-5 md:mt-auto md:pt-5">
          <Link
            to={`/portfolio/${project.slug}`}
            className={buttonVariants({ variant: 'secondary', size: 'sm' })}
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}