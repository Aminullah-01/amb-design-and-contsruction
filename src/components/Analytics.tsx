import { useEffect } from 'react'
import CookieNotice from '@/components/CookieNotice'
import { ANALYTICS_ENABLED, initAnalytics, initLinkTracking } from '@/lib/analytics'

export default function Analytics() {
  useEffect(() => {
    if (!ANALYTICS_ENABLED) return
    initAnalytics()
    return initLinkTracking()
  }, [])

  if (!ANALYTICS_ENABLED) return null

  return <CookieNotice />
}
