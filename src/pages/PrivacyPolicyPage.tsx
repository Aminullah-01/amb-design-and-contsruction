import { Link } from 'react-router-dom'
import { Info, Mail, MapPin, Phone } from 'lucide-react'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import Section from '@/components/ui/Section'
import SocialIcon from '@/components/ui/SocialIcon'
import JsonLd from '@/components/seo/JsonLd'
import Seo from '@/components/seo/Seo'
import {
  privacyLastUpdated,
  privacyReviewNote,
  privacySections,
} from '@/content/privacy'
import { site } from '@/content/site'
import { mailtoUrl, telUrl, whatsappUrl } from '@/lib/contact'
import { getProjectBySlug } from '@/lib/projects'
import { PAGE_SEO } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export default function PrivacyPolicyPage() {
  const bannerProject = getProjectBySlug('villa-with-pool-and-gazebo')

  return (
    <>
      <Seo
        title={PAGE_SEO.privacy.title}
        description={PAGE_SEO.privacy.description}
        path="/privacy-policy"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ])}
      />

      <div className="relative h-[220px] w-full md:h-[300px] lg:h-[360px]">
        {bannerProject ? (
          <Img
            src={bannerProject.coverImage.src}
            alt={bannerProject.coverImage.alt}
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-ink-900/65" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <Link to="/" className="hover:text-white">
                Home
              </Link>{' '}
              / <span className="text-white">Privacy Policy</span>
            </nav>
            <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
          </Container>
        </div>
      </div>

      <Section background="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-ink-600 uppercase">
              Last updated: {privacyLastUpdated}
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-line bg-surface p-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-ink-600">{privacyReviewNote}</p>
            </div>

            <div className="mt-10 space-y-10">
              {privacySections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="font-heading text-xl font-bold text-ink-900 md:text-2xl">
                    {section.title}
                  </h2>

                  {section.blocks.map((block, index) =>
                    block.type === 'paragraph' ? (
                      <p key={index} className="mt-3 text-base leading-relaxed text-ink-600">
                        {block.text}
                      </p>
                    ) : (
                      <ul key={index} className="mt-3 list-disc space-y-2 pl-6 marker:text-blue-500">
                        {block.items.map((item) => (
                          <li key={item} className="text-base leading-relaxed text-ink-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ),
                  )}

                  {section.id === 'how-to-contact-us' ? (
                    <div className="mt-5 rounded-lg border border-line bg-surface p-5">
                      <ul className="space-y-3">
                        {site.phones.map((phone) => (
                          <li key={phone.tel}>
                            <a
                              href={telUrl(phone)}
                              className="inline-flex items-center gap-3 font-semibold text-ink-900 transition-colors hover:text-blue-700"
                            >
                              <Phone className="h-4 w-4 text-blue-700" aria-hidden="true" />
                              {phone.display}
                            </a>
                          </li>
                        ))}
                        <li>
                          <span className="inline-flex items-center gap-3 font-semibold text-ink-900">
                            <Mail className="h-4 w-4 text-blue-700" aria-hidden="true" />
                            <a
                              href={mailtoUrl(site.email, { subject: 'Privacy enquiry' })}
                              className="transition-colors hover:text-blue-700"
                            >
                              {site.email}
                            </a>
                          </span>
                        </li>
                        <li>
                          <a
                            href={whatsappUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 font-semibold text-ink-900 transition-colors hover:text-blue-700"
                          >
                            <SocialIcon name="whatsapp" className="h-4 w-4 text-blue-700" />
                            Chat on WhatsApp
                          </a>
                        </li>
                        <li className="inline-flex items-center gap-3 font-semibold text-ink-900">
                          <MapPin className="h-4 w-4 text-blue-700" aria-hidden="true" />
                          {site.address}
                        </li>
                      </ul>

                      <Link
                        to="/contact"
                        className="mt-4 inline-block font-semibold text-blue-700 transition-colors hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Go to the contact page
                      </Link>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}