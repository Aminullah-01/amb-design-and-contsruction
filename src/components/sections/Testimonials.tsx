import { useEffect, useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { clsx } from 'clsx'
import { testimonials, showTestimonials } from '@/content/testimonials'

const AUTOPLAY_MS = 7000

export default function Testimonials() {
  const items = testimonials
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStartX, setTouchStartX] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!showTestimonials || items.length <= 1) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const start = () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = window.setInterval(() => {
        setActive((prev) => (prev + 1) % items.length)
      }, AUTOPLAY_MS)
    }

    start()

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [items.length])

  useEffect(() => {
    if (!showTestimonials || items.length <= 1) return
    if (isPaused) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
      return
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, AUTOPLAY_MS)
  }, [isPaused, items.length])

  if (!showTestimonials) {
    return null
  }

  const goTo = (index: number) => {
    setActive(index)
  }

  const next = () => {
    setActive((prev) => (prev + 1) % items.length)
  }

  const prev = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <Section background="surface" id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          intro="Trusted by clients across Nigeria."
          align="center"
        />

        <div
          className="mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className="relative mx-auto max-w-3xl"
            onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].clientX - touchStartX
              if (Math.abs(delta) > 50) {
                if (delta > 0) prev()
                else next()
              }
            }}
          >
            <Quote className="absolute top-0 left-0 h-10 w-10 -translate-x-3 -translate-y-3 text-blue-500/20" aria-hidden="true" />

            {items.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className={clsx(
                  'rounded-lg bg-white p-8 shadow-sm transition-opacity',
                  active === index ? 'opacity-100' : 'absolute inset-0 opacity-0',
                )}
                aria-hidden={active !== index}
              >
                <p className="text-lg leading-relaxed text-ink-800">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold text-ink-900">{testimonial.name}</p>
                  <p className="text-sm text-ink-600">
                    {[testimonial.projectType, testimonial.location].filter(Boolean).join(' • ')}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {items.length > 1 ? (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-700 transition hover:bg-surface"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex items-center gap-2">
                {items.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    className={clsx(
                      'h-2 w-2 rounded-full transition',
                      active === index ? 'bg-blue-700' : 'bg-ink-400/50',
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={active === index ? 'true' : undefined}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-700 transition hover:bg-surface"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  )
}