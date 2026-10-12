import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import type { Faq } from '@/types/content'

export default function FaqAccordion({ faqs, className }: { faqs: Faq[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section background="white" className={className} id="faq">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          intro="Answers to common questions about this service."
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-lg border border-line bg-white">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="font-semibold text-ink-900">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                  )}
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={isOpen ? 'px-5 pb-5' : 'hidden'}
                  aria-hidden={!isOpen}
                >
                  <p className="text-base text-ink-600">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}