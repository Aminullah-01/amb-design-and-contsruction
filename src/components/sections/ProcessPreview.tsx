import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import ProcessTimeline from '@/components/sections/ProcessTimeline'

export default function ProcessPreview() {
  return (
    <Section background="white" id="process-preview">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="From consultation to handover"
          intro="A clear, six-step process, so you always know what happens next."
          align="center"
        />
        <ProcessTimeline variant="compact" className="mt-12" />
      </Container>
    </Section>
  )
}