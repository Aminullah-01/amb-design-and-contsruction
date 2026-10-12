import type { Testimonial } from '@/types/content'

export const showTestimonials = false

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: '[ADD NAME]',
    projectType: '[ADD PROJECT TYPE]',
    location: '[ADD LOCATION]',
    quote: '[ADD CLIENT TESTIMONIAL]',
  },
  {
    id: 'testimonial-2',
    name: '[ADD NAME]',
    projectType: '[ADD PROJECT TYPE]',
    location: '[ADD LOCATION]',
    quote: '[ADD CLIENT TESTIMONIAL]',
  },
  {
    id: 'testimonial-3',
    name: '[ADD NAME]',
    projectType: '[ADD PROJECT TYPE]',
    location: '[ADD LOCATION]',
    quote: '[ADD CLIENT TESTIMONIAL]',
  },
]

export function getVisibleTestimonials(): Testimonial[] {
  return showTestimonials ? testimonials : []
}
