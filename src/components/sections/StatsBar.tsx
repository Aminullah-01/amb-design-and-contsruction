import { clsx } from 'clsx'
import { useEffect, useMemo, useRef, useState } from 'react'
import { site } from '@/content/site'
import { isPlaceholder } from '@/lib/placeholder'

// TODO: replace these placeholder stats with real numbers from the owner:
// - Projects Completed [ADD]
// - Years of Experience [ADD]
// - Client Satisfaction [ADD]
// They currently render as "—" so no fake number is ever shown.

type StatsBarProps = {
  tone?: 'frosted' | 'light'
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function parseStatValue(value: string): { target: number; prefix: string; suffix: string } | null {
  const match = value.match(/^(\D*)(\d[\d,]*)(\D*)$/)
  if (!match) return null
  const target = Number(match[2].replace(/,/g, ''))
  if (!Number.isFinite(target)) return null
  return { target, prefix: match[1], suffix: match[3] }
}

function CountUp({ value }: { value: string }) {
  const parsed = useMemo(() => parseStatValue(value), [value])
  const ref = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState(() =>
    parsed && prefersReducedMotion() ? parsed.target : 0,
  )

  useEffect(() => {
    if (!parsed || prefersReducedMotion()) return
    const node = ref.current
    if (!node) return

    let frame = 0
    const duration = 1400

    const run = () => {
      const startTime = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(parsed.target * eased)
        if (progress < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [parsed])

  if (!parsed) return <>{value}</>

  return (
    <span ref={ref}>
      {parsed.prefix}
      {Math.round(current).toLocaleString('en-US')}
      {parsed.suffix}
    </span>
  )
}

export default function StatsBar({ tone = 'light' }: StatsBarProps) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
      {site.stats.map((stat) => (
        <li key={stat.label}>
          <span
            className={clsx(
              'block font-heading text-2xl font-extrabold md:text-3xl',
              tone === 'frosted' ? 'text-white' : 'text-ink-900',
            )}
          >
            {isPlaceholder(stat.value) ? '—' : <CountUp value={stat.value} />}
          </span>
          <span
            className={clsx(
              'mt-1 block text-xs font-medium tracking-wide uppercase',
              tone === 'frosted' ? 'text-white/70' : 'text-ink-600',
            )}
          >
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  )
}
