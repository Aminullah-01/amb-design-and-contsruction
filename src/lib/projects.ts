import type { Project, ProjectCategory } from '@/types/content'
import { projects, watermarkedProjects } from '@/content/projects'

const allProjects: Project[] = [...projects, ...watermarkedProjects]

function clearedProjects(): Project[] {
  return allProjects.filter((project) => project.cleared)
}

export function getAllProjects(): Project[] {
  return clearedProjects()
}

export function getProjectSlugs(): string[] {
  return clearedProjects().map((project) => project.slug)
}

export function getFeaturedProjects(): Project[] {
  return clearedProjects().filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return clearedProjects().find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: ProjectCategory | 'All'): Project[] {
  const cleared = clearedProjects()
  if (category === 'All') return cleared
  return cleared.filter((project) => project.categories.includes(category))
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug)
  if (!current) return []

  const others = clearedProjects().filter((project) => project.slug !== slug)
  const shared = others.filter((project) =>
    project.categories.some((category) => current.categories.includes(category)),
  )

  return (shared.length > 0 ? shared : others).slice(0, limit)
}
