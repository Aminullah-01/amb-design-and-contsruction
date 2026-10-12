import { Eye, ShieldCheck, Users, Wallet, type LucideIcon } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const BENEFITS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'One team, start to finish',
    text: 'Design, build and supervision under one roof.',
    icon: Users,
  },
  {
    title: 'See before you build',
    text: 'Realistic 3D renders so there are no surprises.',
    icon: Eye,
  },
  {
    title: 'Quality you can trust',
    text: 'Proper materials, skilled workers, regular inspections.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable and transparent',
    text: 'Clear quotes and milestone-based payments.',
    icon: Wallet,
  },
]

export default function WhyChooseAmb() {
  return (
    <Section background="dark" id="why-choose-amb">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] text-blue-500 uppercase md:text-[13px]">
              Our Promise
            </p>
            <span className="mt-3 block h-1 w-12 rounded-full bg-red-600" aria-hidden="true" />
            <h2 className="mt-4 font-heading text-[28px] font-bold text-white md:text-[44px]">
              Why Choose AMB
            </h2>
            <p className="mt-4 text-base text-ink-400 md:text-lg">
              One accountable team for design, construction and supervision, with realistic 3D
              previews, trusted quality and transparent pricing.
            </p>
          </div>

          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink-800 text-blue-500">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}