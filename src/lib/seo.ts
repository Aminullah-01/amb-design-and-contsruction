import { LOGO_LIGHT } from '@/lib/brand'

export const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://ambdesignconstruction.com'
).replace(/\/+$/, '')

export const CITY = '[City]'

export const OG_IMAGE = '/images/brand/og-image.png'
export const LOGO_IMAGE = LOGO_LIGHT

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function canonicalUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}`
}

export type PageSeo = { title: string; description: string }

export const PAGE_SEO = {
  home: {
    title: `AMB Design and Construction | Architects and Builders in ${CITY}, Nigeria`,
    description:
      'Architectural design, 3D visualization and building construction in Nigeria. We Design. We Build. We Deliver. Get a free quote.',
  },
  about: {
    title: 'About Us | AMB Design and Construction Limited',
    description:
      'Meet the team behind AMB: quality, affordable and innovative design and construction across Nigeria.',
  },
  services: {
    title: 'Architectural Design and Building Services | AMB',
    description:
      'Architectural design, 3D visualization, construction, renovation, supervision, interior design and consultation.',
  },
  portfolio: {
    title: 'Our Projects | AMB Design and Construction',
    description:
      'Browse completed homes, commercial buildings, renovations and 3D designs by AMB in Nigeria.',
  },
  process: {
    title: 'How We Work | AMB Design and Construction',
    description:
      'From consultation to handover: see our clear, step-by-step design and build process.',
  },
  contact: {
    title: 'Contact and Free Quote | AMB Design and Construction',
    description: 'Call, WhatsApp or send us your project details. We respond within 24 hours.',
  },
  privacy: {
    title: 'Privacy Policy | AMB Design and Construction Limited',
    description:
      'How AMB Design and Construction Limited handles personal information on this website, in plain language.',
  },
  notFound: {
    title: 'Page not found | AMB Design and Construction Limited',
    description:
      'The page you are looking for does not exist or has moved. Explore our services, projects and contact details.',
  },
} satisfies Record<string, PageSeo>
