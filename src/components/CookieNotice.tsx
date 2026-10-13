import { useState } from 'react'
import Container from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { ANALYTICS_NOTICE_KEY } from '@/lib/analytics'

export default function CookieNotice() {
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === 'undefined') return false
    try {
      return window.localStorage.getItem(ANALYTICS_NOTICE_KEY) === '1'
    } catch {
      return false
    }
  })

  if (dismissed) return null

  const dismiss = () => {
    setDismissed(true)
    try {
      window.localStorage.setItem(ANALYTICS_NOTICE_KEY, '1')
    } catch {
      // Storage may be unavailable; the notice still closes for this session.
    }
  }

  return (
    <div
      role="region"
      aria-label="Analytics notice"
      className="fixed inset-x-0 bottom-20 z-50 md:bottom-4"
    >
      <Container>
        <div className="flex flex-col items-start gap-3 rounded-lg border border-line bg-white p-4 shadow-md sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm leading-relaxed text-ink-600">
            This site uses Google Analytics to understand how it is used so we can improve it. It
            only sets analytics cookies from this website.
          </p>
          <button
            type="button"
            onClick={dismiss}
            className={`${buttonVariants({ variant: 'secondary', size: 'sm' })} shrink-0`}
          >
            Got it
          </button>
        </div>
      </Container>
    </div>
  )
}
