import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Award, Briefcase, Eye, Lightbulb, Target, UserRound, Wallet, type LucideIcon } from 'lucide-react'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import IconCircle from '@/components/ui/IconCircle'
import Img from '@/components/ui/Img'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABand from '@/components/sections/CTABand'
import { site } from '@/content/site'
import { getVisibleTeam } from '@/content/team'
import { isPlaceholder } from '@/lib/placeholder'
import { getProjectBySlug } from '@/lib/projects'

const SHOW_BRAND_IN_THE_FIELD = true

const VALUES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Quality',
    text: 'Proper materials, skilled workmanship and regular inspections.',
    icon: Award,
  },
  {
    title: 'Affordability',
    text: 'Clear quotes, honest pricing and milestone-based payments.',
    icon: Wallet,
  },
  {
    title: 'Creativity',
    text: 'Modern, thoughtful design shaped around your site and budget.',
    icon: Lightbulb,
  },
  {
    title: 'Professionalism',
    text: 'One accountable team, clear communication and dependable delivery.',
    icon: Briefcase,
  },
]

const BRAND_SHOTS = [
  { src: '/images/mockups/helmet-mockup.webp', alt: 'Safety helmet with the AMB logo', label: 'Safety helmet' },
  { src: '/images/mockups/cap-mockup.webp', alt: 'Cap with the AMB logo', label: 'Branded cap' },
  { src: '/images/mockups/vest-mockup.webp', alt: 'Hi-vis vest with the AMB logo and contact details', label: 'Hi-vis vest' },
]

export default function AboutPage() {
  const bannerProject = getProjectBySlug('villa-with-pool-and-gazebo')
  const team = getVisibleTeam()
  const memberships = site.credentials.memberships.filter((item) => !isPlaceholder(item))
  const hasCac = !isPlaceholder(site.credentials.cacNumber)
  const showCredentials = hasCac || memberships.length > 0

  return (
    <>
      <Helmet>
        <title>About Us | AMB Design and Construction Limited</title>
        <meta
          name="description"
          content="Meet the team behind AMB: quality, affordable and innovative design and construction across Nigeria."
        />
        <meta property="og:title" content="About Us | AMB Design and Construction Limited" />
        <meta
          property="og:description"
          content="Meet the team behind AMB: quality, affordable and innovative design and construction across Nigeria."
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
              / <span className="text-white">About</span>
            </nav>
            <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              About AMB Design and Construction
            </h1>
          </Container>
        </div>
      </div>

      <Section background="white">
        <Container>
          <SectionHeading eyebrow="Our Story" title="Who we are" align="center" />
          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-dashed border-line bg-surface p-6 md:p-8">
            <p className="text-base leading-relaxed text-ink-600 md:text-lg">[ADD STORY]</p>
            <p className="mt-3 text-sm text-ink-400">
              Placeholder. Add two to three short paragraphs about how AMB started, why, and what
              drives the team.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="What Drives Us" title="Mission and vision" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-6 shadow-sm md:p-8">
              <IconCircle size="lg">
                <Target className="h-7 w-7" aria-hidden="true" />
              </IconCircle>
              <h3 className="mt-5 font-heading text-xl font-bold text-ink-900 md:text-2xl">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">{site.mission}</p>
            </div>
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-6 shadow-sm md:p-8">
              <IconCircle size="lg">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </IconCircle>
              <h3 className="mt-5 font-heading text-xl font-bold text-ink-900 md:text-2xl">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">{site.vision}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What we stand for" align="center" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <li key={value.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <IconCircle>
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </IconCircle>
                <h3 className="mt-4 font-heading text-lg font-bold text-ink-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{value.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {team.length > 0 ? (
        <Section background="surface">
          <Container>
            <SectionHeading eyebrow="Our Team" title="The people behind AMB" align="center" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name}>
                  {member.photo ? (
                    <Img
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-blue-50 text-blue-700">
                      <UserRound className="h-12 w-12" aria-hidden="true" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-ink-900">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-blue-700">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {SHOW_BRAND_IN_THE_FIELD ? (
        <Section background="white">
          <Container>
            <SectionHeading
              eyebrow="Our Brand"
              title="Our brand in the field"
              intro="Safety helmet, cap and hi-vis vest mock-ups."
              align="center"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {BRAND_SHOTS.map((shot) => (
                <figure key={shot.src}>
                  <Img
                    src={shot.src}
                    alt={shot.alt}
                    sizes="(min-width: 640px) 31vw, 100vw"
                    className="aspect-[4/5] w-full rounded-lg border border-line object-cover shadow-sm"
                  />
                  <figcaption className="mt-3 text-center text-sm font-semibold text-ink-600">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            {/* [CONFIRM EMAIL] The vest mock-up shows an unconfirmed email address. */}
          </Container>
        </Section>
      ) : null}

      {showCredentials ? (
        <Section background="surface">
          <Container>
            <SectionHeading
              eyebrow="Credentials"
              title="Certifications and registrations"
              align="center"
            />
            <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-line bg-white p-6 md:p-8">
              <dl className="divide-y divide-line">
                {hasCac ? (
                  <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                    <dt className="text-sm font-semibold text-ink-600">CAC registration number</dt>
                    <dd className="text-sm text-ink-900">{site.credentials.cacNumber}</dd>
                  </div>
                ) : null}
                {memberships.length > 0 ? (
                  <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                    <dt className="text-sm font-semibold text-ink-600">Professional memberships</dt>
                    <dd className="text-sm text-ink-900">{memberships.join(', ')}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </Container>
        </Section>
      ) : null}

      <CTABand />
    </>
  )
}