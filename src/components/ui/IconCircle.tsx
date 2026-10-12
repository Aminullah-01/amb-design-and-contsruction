import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export type IconCircleSize = 'sm' | 'md' | 'lg'

const sizes: Record<IconCircleSize, string> = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-14 w-14',
}

type IconCircleProps = {
  size?: IconCircleSize
  className?: string
  children: ReactNode
}

export default function IconCircle({ size = 'md', className, children }: IconCircleProps) {
  return (
    <span
      className={clsx(
        'inline-flex shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700',
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  )
}
