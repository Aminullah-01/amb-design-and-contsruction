import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import Section from '@/components/ui/Section'
import SocialIcon from '@/components/ui/SocialIcon'
import { buttonVariants } from '@/components/ui/buttonVariants'
import FaqAccordion from '@/components/sections/FaqAccordion'
import QuoteRequestForm from '@/components/ui/QuoteRequestForm'
import { faqs } from '@/content/faqs'
import { site } from '@/content/site'
import { mailtoUrl, telUrl, whatsappUrl } from '@/lib/contact'
import { isPlaceholder } from '@/lib/placeholder'
import { getProjectBySlug } from '@/lib/projects'

const ICON_CLASS = 'mt-0.5 h-5 w-5 shrink-0 text-blue-700'

export default function ContactPage() {
  const bannerProject = getProjectBySlug('modern-duplex-with-glass-corner')
  const emailIsPlaceholder = isPlaceholder(site.email)
  const socials = site.socials.filter((social) => !isPlaceholder(social.url))
  const mapsUrl = !isPlaceholder(site.mapUrl)
    ? site.mapUrl
    : !isPlaceholder(site.address)
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`
      : undefined

  return (
    <>
      <Helmet>
        <title>Contact Us | AMB Design and Construction Limited</title>
        <meta
          name="description"
          content="Call, WhatsApp or email AMB Design and Construction. Request a free quote for design, construction or supervision anywhere in Nigeria."
        />
        <meta property="og:title" content="Contact Us | AMB Design and Construction Limited" />
        <meta
          property="og:description"
          content="Call, WhatsApp or email AMB Design and Construction. Request a free quote for design, construction or supervision anywhere in Nigeria."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/brand/og-image.png" />
      </Helmet>

      <div className="relative h-[260px] w-full md:h-[360px] lg:h-[420px]">
        {bannerProject ? (
          <Img
            src={bannerProject.coverImage.src}
            alt={bannerProject.coverImage.alt}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-ink-900/60" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <Link to="/" className="hover:text-white">
                Home
              </Link>{' '}
              / <span className="text-white">Contact</span>
            </nav>
            <h1 className="max-w-3xl font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              Let&rsquo;s Build Something Great Together
            </h1>
          </Container>
        </div>
      </div>

      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold text-ink-900 md:text-2xl">
                Contact details
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Call, WhatsApp or email us. We are happy to advise before you commit to anything.
              </p>

              <ul className="mt-8 space-y-5">
                {site.phones.map((phone) => (
                  <li key={phone.tel} className="flex items-start gap-4">
                    <Phone className={ICON_CLASS} aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                        Call us
                      </p>
                      <a
                        href={telUrl(phone)}
                        className="text-base font-semibold text-ink-900 transition-colors hover:text-blue-700"
                      >
                        {phone.display}
                      </a>
                    </div>
                  </li>
                ))}

                <li className="flex items-start gap-4">
                  <Mail className={ICON_CLASS} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      Email
                    </p>
                    {emailIsPlaceholder ? (
                      <span className="text-base font-semibold text-ink-900">{site.email}</span>
                    ) : (
                      <a
                        href={mailtoUrl(site.email, { subject: 'Project enquiry' })}
                        className="text-base font-semibold text-ink-900 transition-colors hover:text-blue-700"
                      >
                        {site.email}
                      </a>
                    )}
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <MapPin className={ICON_CLASS} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      Address
                    </p>
                    <p className="text-base font-semibold text-ink-900">{site.address}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Clock className={ICON_CLASS} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      Working hours
                    </p>
                    <p className="text-base font-semibold text-ink-900">{site.workingHours}</p>
                  </div>
                </li>
              </ul>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants({ variant: 'primary', size: 'lg' })} mt-8 w-full`}
              >
                <SocialIcon name="whatsapp" className="h-5 w-5" />
                Chat on WhatsApp
              </a>

              {mapsUrl ? (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get directions
                </a>
              ) : null}

              {socials.length > 0 ? (
                <div className="mt-8 border-t border-line pt-6">
                  <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                    Follow us
                  </p>
                  <ul className="mt-3 flex flex-wrap items-center gap-3">
                    {socials.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${site.name} on ${social.name}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          <SocialIcon name={social.icon} className="h-5 w-5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <QuoteRequestForm />
          </div>
        </Container>
      </Section>

      <FaqAccordion
        faqs={faqs}
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        intro="Quick answers before you get in touch."
        background="surface"
      />
    </>
  )
}