import { site } from '@/content/site'
import { isPlaceholder } from '@/lib/placeholder'
import { absoluteUrl, canonicalUrl, LOGO_IMAGE, OG_IMAGE, SITE_URL } from '@/lib/seo'
import type { Faq } from '@/types/content'

export function localBusinessSchema(): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'ProfessionalService'],
    '@id': `${SITE_URL}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description: site.about,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(LOGO_IMAGE),
    image: absoluteUrl(OG_IMAGE),
    telephone: site.phones.map((phone) => phone.internationalTel),
    areaServed: { '@type': 'Country', name: 'Nigeria' },
    knowsAbout: [
      'Architectural design',
      '3D visualization',
      'Building construction',
      'Renovation',
      'Project supervision',
      'Interior design',
    ],
  }

  const sameAs = site.socials.map((social) => social.url).filter((url) => !isPlaceholder(url))
  if (sameAs.length > 0) schema.sameAs = sameAs

  if (!isPlaceholder(site.address)) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressCountry: 'NG',
    }
  }

  if (!isPlaceholder(site.workingHours)) schema.openingHours = site.workingHours
  schema.email = site.email

  return schema
}

export type Crumb = { name: string; path: string }

export function breadcrumbSchema(items: Crumb[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  }
}

export function faqSchema(faqs: Faq[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
