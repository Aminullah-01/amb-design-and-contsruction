import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Container from '@/components/ui/Container'
import SocialIcon from '@/components/ui/SocialIcon'
import { site } from '@/content/site'
import { mailtoUrl, telUrl } from '@/lib/contact'
import { isPlaceholder } from '@/lib/placeholder'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = site.socials.filter((social) => !isPlaceholder(social.url))
  const emailIsPlaceholder = isPlaceholder(site.email)

  return (
    <footer className="bg-ink-900 text-white">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <span className="inline-flex items-center rounded-lg bg-white p-2">
              <img
                src="/images/brand/logo.png"
                alt={site.name}
                width={1298}
                height={996}
                className="h-11 w-auto"
                loading="lazy"
              />
            </span>
            <p className="mt-5 text-sm leading-relaxed text-white/70">{site.about}</p>

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap items-center gap-3">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${social.name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                      <SocialIcon name={social.icon} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {site.footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors hover:text-blue-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {site.phones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={telUrl(phone)}
                    className="flex items-center gap-3 transition-colors hover:text-blue-500"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
                {emailIsPlaceholder ? (
                  <span>{site.email}</span>
                ) : (
                  <a
                    href={mailtoUrl()}
                    className="transition-colors hover:text-blue-500"
                  >
                    {site.email}
                  </a>
                )}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
                <span>{site.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <Link
            to="/privacy-policy"
            className="transition-colors hover:text-blue-500"
          >
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  )
}
