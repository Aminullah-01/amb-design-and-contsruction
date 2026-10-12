import type { Service } from '@/types/content'
import { services } from '@/content/services'

export function getAllServices(): Service[] {
  return services
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}

export function getServiceTitles(): string[] {
  return services.map((service) => service.title)
}
