import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export type SectionHeadingTone = 'light' | 'dark'

const tones: Record<SectionHeadingTone, { eyebrow: string; bar: string; title: string; intro: string }> = {
  light: {
    eyebrow: 'text-blue-700',
    bar: 'bg-blue-500',
    title: 'text-ink-900',
    intro: 'text-ink-600',
  },
  dark: {
    eyebrow: 'text-blue-500',
    bar: 'bg-blue-500',
    title: 'text-white',
    intro: 'text-ink-400',
  },
}

type SectionHeadingProps = {
  eyebrow?: string
  title?: ReactNode
  intro?: ReactNode
  tone?: SectionHeadingTone
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'light',
  align = 'left',
  className,
  children,
}: SectionHeadingProps) {
  const t = tones[tone]
  const centered = align === 'center'

  return (
    <div className={clsx('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p
          className={clsx(
            'text-xs font-semibold tracking-[0.12em] uppercase md:text-[13px]',
            t.eyebrow,
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      {eyebrow ? (
        <span
          className={clsx('mt-3 block h-1 w-12 rounded-full', t.bar, centered && 'mx-auto')}
          aria-hidden="true"
        />
      ) : null}
      {title ? (
        <h2 className={clsx('mt-4 font-heading text-[28px] font-bold md:text-[44px]', t.title)}>
          {title}
        </h2>
      ) : null}
      {intro ? <p className={clsx('mt-4 text-base md:text-lg', t.intro)}>{intro}</p> : null}
      {children}
    </div>
  )
}
