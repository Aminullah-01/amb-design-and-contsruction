declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const GA_ID = import.meta.env.VITE_GA_ID as string | undefined

export const ANALYTICS_ENABLED = Boolean(GA_ID && GA_ID.trim() !== '')

export const ANALYTICS_NOTICE_KEY = 'amb-analytics-notice-dismissed'

let scriptAdded = false

if (ANALYTICS_ENABLED && typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer ?? []
  if (typeof window.gtag !== 'function') {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }
  }
}

export function track(event: string, params: Record<string, unknown> = {}): void {
  if (!ANALYTICS_ENABLED || typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', event, params)
}

export function initAnalytics(): void {
  if (!ANALYTICS_ENABLED || !GA_ID || typeof window === 'undefined' || scriptAdded) return

  const start = () => {
    if (scriptAdded) return
    scriptAdded = true

    if (typeof window.gtag === 'function') {
      window.gtag('js', new Date())
      window.gtag('config', GA_ID, { anonymize_ip: true })
    }

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
    document.head.appendChild(script)
  }

  if (document.readyState === 'complete') start()
  else window.addEventListener('load', start, { once: true })
}

export function initLinkTracking(): () => void {
  if (!ANALYTICS_ENABLED || typeof document === 'undefined') return () => {}

  const handler = (event: MouseEvent) => {
    const target = event.target as Element | null
    const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null
    if (!anchor) return

    const href = anchor.getAttribute('href') ?? ''
    const linkText = anchor.textContent?.trim().slice(0, 100) ?? undefined

    if (href.startsWith('tel:')) {
      track('phone_click', { phone: href.replace(/^tel:/, ''), link_text: linkText })
    } else if (/wa\.me|whatsapp/i.test(href)) {
      track('whatsapp_click', { link_url: href, link_text: linkText })
    }
  }

  document.addEventListener('click', handler, true)
  return () => document.removeEventListener('click', handler, true)
}
