import { useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode } from 'react'
import { clsx } from 'clsx'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

type RevealState = 'static' | 'pending' | 'visible'

export default function Reveal({ children, className, delay = 0, as }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  const [state, setState] = useState<RevealState>('static')

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Leave content that is already on screen visible so the LCP is never delayed.
    if (node.getBoundingClientRect().top <= window.innerHeight * 0.9) return

    setState('pending')

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState('visible')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={clsx('reveal', state === 'pending' && 'reveal-pending', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
