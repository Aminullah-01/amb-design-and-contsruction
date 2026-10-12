import { Helmet } from 'react-helmet-async'
import { Building2, Hammer, PaintRoller, Ruler } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import IconCircle from '@/components/ui/IconCircle'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

type Swatch = { token: string; hex: string; note: string }

const palette: Swatch[] = [
  { token: 'blue-50', hex: '#EAF6FF', note: 'Light section tint, hover backgrounds' },
  { token: 'blue-100', hex: '#CFEAFE', note: 'Borders on tinted areas' },
  { token: 'blue-500', hex: '#34A9FA', note: 'Brand accents, icons, highlights on dark' },
  { token: 'blue-600', hex: '#1B8CE0', note: 'Hover states, links on dark' },
  { token: 'blue-700', hex: '#0B6FB8', note: 'Primary button, text links on white' },
  { token: 'red-500', hex: '#E91C24', note: 'Large accent text, icons, badges' },
  { token: 'red-600', hex: '#D3151C', note: 'Secondary / urgent CTA background' },
  { token: 'brick-500', hex: '#C73E1D', note: 'Small accents: stats, tags, dividers' },
  { token: 'ink-900', hex: '#0B0B0B', note: 'Headings, dark sections, footer' },
  { token: 'ink-800', hex: '#151515', note: 'Dark card surfaces' },
  { token: 'ink-600', hex: '#4B5563', note: 'Body text on white' },
  { token: 'ink-400', hex: '#9CA3AF', note: 'Muted text on dark' },
  { token: 'line', hex: '#E5E7EB', note: 'Borders and dividers' },
  { token: 'surface', hex: '#F5F7FA', note: 'Alternate section background' },
  { token: 'white', hex: '#FFFFFF', note: 'Page background and text on dark' },
]

const typeScale: { label: string; className: string; sample: string }[] = [
  { label: 'Hero H1 — 38 / 68px', className: 'font-heading text-[38px] font-extrabold md:text-[68px]', sample: 'We Design.' },
  { label: 'H2 — 28 / 44px', className: 'font-heading text-[28px] font-bold md:text-[44px]', sample: 'Our Services' },
  { label: 'H3 — 21 / 26px', className: 'font-heading text-[21px] font-bold md:text-[26px]', sample: 'Architectural Design' },
  { label: 'Body — 16 / 18px', className: 'text-base md:text-lg', sample: 'Quality, affordable and innovative design and construction.' },
  { label: 'Eyebrow — 12 / 13px', className: 'text-xs font-semibold tracking-[0.12em] uppercase md:text-[13px]', sample: 'Architecture, Design and Construction' },
  { label: 'Script accent (rare) — Lobster Two', className: 'font-accent text-2xl text-red-500 md:text-3xl', sample: 'Design & Construction' },
]

export default function StyleGuidePage() {
  return (
    <>
      <Helmet>
        <title>Style guide | AMB Design and Construction Limited</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Section background="white">
        <Container>
          <SectionHeading
            eyebrow="Internal"
            title="Design system style guide"
            intro="Tokens, typography, buttons and components for AMB Design and Construction Limited. Hidden page for review only."
          />
        </Container>
      </Section>

      {/* Colours */}
      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="Section 3" title="Colour tokens" intro="Logo-derived palette only. Hex values are shown for approval." />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {palette.map((swatch) => (
              <li key={swatch.token} className="overflow-hidden rounded-lg border border-line bg-white">
                <div className="h-20 w-full" style={{ backgroundColor: swatch.hex }} />
                <div className="p-3">
                  <p className="font-heading text-sm font-bold text-ink-900">{swatch.token}</p>
                  <p className="text-xs font-medium text-ink-600">{swatch.hex}</p>
                  <p className="mt-1 text-[11px] leading-snug text-ink-400">{swatch.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Typography */}
      <Section background="white">
        <Container>
          <SectionHeading eyebrow="Section 4" title="Type scale" intro="Montserrat for headings, Inter for body, Lobster Two as a rare accent." />
          <div className="mt-10 divide-y divide-line border-t border-line">
            {typeScale.map((item) => (
              <div key={item.label} className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:items-baseline md:gap-8">
                <p className="text-xs font-semibold tracking-[0.08em] text-ink-400 uppercase">{item.label}</p>
                <p className={item.className}>{item.sample}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="Section 10" title="Buttons" intro="Height 48px, 10px radius, bold text. Highlight (red) used sparingly." />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="highlight">Highlight</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Container>
      </Section>

      {/* Buttons on dark + outline-light */}
      <Section background="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="On dark"
            title="Outline-light buttons"
            intro="Used on the ink-900 and blue hero/CTA bands."
          />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary">Get a Free Quote</Button>
            <Button variant="outline-light">View Our Projects</Button>
          </div>
        </Container>
      </Section>

      {/* Badges + icon circles */}
      <Section background="white">
        <Container>
          <SectionHeading eyebrow="Atoms" title="Badges and icon circles" intro="Category tags and blue icon chips." />
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Badge>Residential</Badge>
            <Badge variant="blue">3D Render</Badge>
            <Badge variant="red">New</Badge>
            <Badge variant="neutral">Scale Models</Badge>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <IconCircle size="sm">
              <Ruler className="h-5 w-5" aria-hidden="true" />
            </IconCircle>
            <IconCircle size="md">
              <Hammer className="h-6 w-6" aria-hidden="true" />
            </IconCircle>
            <IconCircle size="lg">
              <PaintRoller className="h-7 w-7" aria-hidden="true" />
            </IconCircle>
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="Components" title="Cards" intro="White, 1px border, 16px radius, image zoom on hover." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <div className="group overflow-hidden">
                <img
                  src="/images/projects/scale-model-compound-01-card.webp"
                  alt="Physical scale model of a building in a walled compound"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge>Scale Models</Badge>
                <h3 className="mt-3 font-heading text-[21px] font-bold text-ink-900">
                  Walled Compound Scale Model
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  Physical scale models built to help clients visualise the project.
                </p>
                <Button variant="secondary" size="sm" className="mt-5">
                  View details
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col justify-center p-8">
              <IconCircle>
                <Building2 className="h-6 w-6" aria-hidden="true" />
              </IconCircle>
              <h3 className="mt-4 font-heading text-[21px] font-bold text-ink-900">Simple content card</h3>
              <p className="mt-2 text-sm text-ink-600">
                Card surface, border and shadow shown without media. Hover to see the shadow step up.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Section headings */}
      <Section background="white">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow="Example"
            title="Section heading, light tone"
            intro="Eyebrow (blue-700), 48px underline bar, H2 and intro paragraph."
          />
          <div className="rounded-lg bg-ink-900 p-8">
            <SectionHeading
              tone="dark"
              eyebrow="Example"
              title="Section heading, dark tone"
              intro="Same component on an ink-900 band: blue-500 eyebrow, white title, ink-400 intro."
            />
          </div>
          <SectionHeading
            align="center"
            eyebrow="Centred variant"
            title="Centred section heading"
            intro="Alignment can be centred for feature bands."
          />
        </Container>
      </Section>
    </>
  )
}
