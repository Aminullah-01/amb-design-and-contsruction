import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export type BadgeVariant = 'brick' | 'blue' | 'red' | 'neutral'

const variants: Record<BadgeVariant, string> = {
  brick: 'bg-brick-500/[0.08] text-brick-500',
  blue: 'bg-blue-50 text-blue-700',
  red: 'bg-red-500/10 text-red-600',
  neutral: 'bg-surface text-ink-600',
}

type BadgeProps = {
  variant?: BadgeVariant
  className?: string
  children: ReactNode
}

export default function Badge({ variant = 'brick', className, children }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
