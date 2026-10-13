import { useId, useState } from 'react'
import { clsx } from 'clsx'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section, { type SectionBackground } from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import JsonLd from '@/components/seo/JsonLd'
import { faqSchema } from '@/lib/structured-data'
import type { Faq } from '@/types/content'

type FaqAccordionProps = {
  faqs: Faq[]
  eyebrow?: string
  title?: string
  intro?: string
  background?: SectionBackground
  id?: string
  className?: string
}

export default function FaqAccordion({
  faqs,
  eyebrow = 'FAQ',
  title = 'Frequently Asked Questions',
  intro,
  background = 'white',
  id = 'faq',
  className,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  if (faqs.length === 0) return null

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <Section background={background} id={id} className={className}>
        <Container>
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} align="center" />

          <div className="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-lg border border-line bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const buttonId = `${baseId}-button-${index}`
              const panelId = `${baseId}-panel-${index}`

              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="font-semibold text-ink-900">{faq.question}</span>
                      <ChevronDown
                        className={clsx(
                          'h-5 w-5 shrink-0 text-blue-700 transition-transform duration-300 motion-reduce:transition-none',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={clsx(
                      'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-base text-ink-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}