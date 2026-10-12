import { clsx } from 'clsx'
import type { ReactNode } from 'react'

type CardProps = {
  className?: string
  children: ReactNode
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-lg border border-line bg-white shadow-sm transition duration-200 hover:shadow-md',
        className,
      )}
    >
      {children}
    </div>
  )
}
