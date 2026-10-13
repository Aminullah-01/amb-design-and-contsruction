import type { Testimonial } from '@/types/content'

export const showTestimonials = true

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Musa Abdullahi Musa',
    projectType: '[ADD PROJECT TYPE]',
    location: '[ADD LOCATION]',
    quote: '[ADD CLIENT TESTIMONIAL]',
  },
  {
    id: 'testimonial-2',
    name: 'Aminu Gambo Abubakar',
    projectType: '[ADD PROJECT TYPE]',
    location: '[ADD LOCATION]',
    quote: '[ADD CLIENT TESTIMONIAL]',
  },
]

export function getVisibleTestimonials(): Testimonial[] {
  return showTestimonials ? testimonials : []
}
