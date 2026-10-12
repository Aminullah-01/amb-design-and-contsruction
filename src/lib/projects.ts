import type { Project, ProjectCategory, Service } from '@/types/content'
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

export const PORTFOLIO_CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: 'Residential', label: 'Residential' },
  { value: 'Commercial', label: 'Commercial' },
  { value: '3D Render', label: '3D Renders' },
  { value: 'Scale Model', label: 'Scale Models' },
  { value: 'Interiors', label: 'Interiors' },
]

export function getPortfolioCategories(): { value: ProjectCategory; label: string }[] {
  const present = new Set(clearedProjects().flatMap((project) => project.categories))
  return PORTFOLIO_CATEGORIES.filter((category) => present.has(category.value))
}

export function getProjectsByLabel(label: string): Project[] {
  const match = PORTFOLIO_CATEGORIES.find((category) => category.label === label)
  if (!match) return []
  return clearedProjects().filter((project) => project.categories.includes(match.value))
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

const SERVICE_CATEGORIES: Record<string, ProjectCategory[]> = {
  '3d-architectural-visualization': ['3D Render'],
  'interior-and-exterior-design': ['Interiors'],
  'architectural-design': ['Residential', 'Commercial'],
  'building-construction': ['Residential', 'Commercial'],
  'renovation-and-remodeling': ['Residential', 'Interiors'],
  'project-supervision': ['Residential', 'Commercial'],
  'building-consultation': ['Residential', 'Commercial'],
}

export function getProjectsForService(service: Service, limit = 3): Project[] {
  const cleared = clearedProjects()

  const byService = cleared.filter((project) =>
    project.servicesProvided.includes(service.title),
  )

  const categories = SERVICE_CATEGORIES[service.slug] ?? []
  const byCategory = cleared.filter(
    (project) =>
      !byService.includes(project) &&
      project.categories.some((category) => categories.includes(category)),
  )

  const chosen = [...byService, ...byCategory]
  const rest = cleared.filter((project) => !chosen.includes(project))
  const fill = [
    ...rest.filter((project) => project.featured),
    ...rest.filter((project) => !project.featured),
  ]

  return [...chosen, ...fill].slice(0, limit)
}
