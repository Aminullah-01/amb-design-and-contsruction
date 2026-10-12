import { clsx } from 'clsx'
import type { ReactNode } from 'react'

type ContainerProps = {
  className?: string
  children: ReactNode
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={clsx('mx-auto w-full max-w-container px-5 md:px-8', className)}>{children}</div>
}
