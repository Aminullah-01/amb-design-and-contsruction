import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export type SectionBackground = 'white' | 'surface' | 'dark' | 'blue'

const backgrounds: Record<SectionBackground, string> = {
  white: 'bg-white text-ink-600',
  surface: 'bg-surface text-ink-600',
  dark: 'bg-ink-900 text-white',
  blue: 'bg-blue-700 text-white',
}

type SectionProps = {
  background?: SectionBackground
  id?: string
  className?: string
  children: ReactNode
}

export default function Section({ background = 'white', id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx('py-[72px] md:py-[120px]', backgrounds[background], className)}
    >
      {children}
    </section>
  )
}
