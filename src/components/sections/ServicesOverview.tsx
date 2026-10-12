import { services } from '@/content/services'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesOverview() {
  return (
    <Section background="surface" id="services-overview">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="What We Do"
          intro="Everything you need for your project, under one roof."
          align="center"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}