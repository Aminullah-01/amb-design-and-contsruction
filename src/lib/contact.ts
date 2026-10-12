import { site } from '@/content/site'
import type { PhoneNumber } from '@/types/content'

export function whatsappUrl(message: string = site.whatsapp.defaultMessage): string {
  return `${site.whatsapp.link}?text=${encodeURIComponent(message)}`
}

export function telUrl(phone: string | PhoneNumber): string {
  const raw = typeof phone === 'string' ? phone : phone.international
  return `tel:${raw.replace(/[^\d+]/g, '')}`
}

export function mailtoUrl(
  email: string = site.email,
  options: { subject?: string; body?: string } = {},
): string {
  const params = new URLSearchParams()
  if (options.subject) params.set('subject', options.subject)
  if (options.body) params.set('body', options.body)
  const query = params.toString()
  return `mailto:${email}${query ? `?${query}` : ''}`
}
