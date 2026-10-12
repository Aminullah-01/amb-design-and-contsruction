import { clsx } from 'clsx'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/buttonVariants'
import Container from '@/components/ui/Container'
import { site } from '@/content/site'
import { telUrl, whatsappUrl } from '@/lib/contact'
import { useFocusTrap } from '@/lib/useFocusTrap'

const LOGO_SRC = '/images/brand/logo.png'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const transparent = isHome && !scrolled
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  useFocusTrap(panelRef, open, close)

  const navLinkClass = (isActive: boolean) =>
    clsx(
      'relative py-2 text-sm font-medium transition-colors',
      'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:transition-transform',
      isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
      transparent
        ? isActive
          ? 'text-white after:bg-white'
          : 'text-white/80 after:bg-white/70 hover:text-white'
        : isActive
          ? 'text-blue-700 after:bg-blue-700'
          : 'text-ink-600 after:bg-blue-600 hover:text-blue-700',
    )

  const drawerLinkClass = (isActive: boolean) =>
    clsx(
      'block rounded px-2 py-3 font-heading text-xl font-bold',
      isActive ? 'text-blue-700' : 'text-ink-900 hover:text-blue-700',
    )

  return (
    <>
      {!isHome ? <div className="h-20" aria-hidden="true" /> : null}

      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          transparent ? 'bg-transparent' : 'bg-white shadow-sm',
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center"
            aria-label={`${site.name} home`}
          >
            <span
              className={clsx(
                'flex items-center rounded-lg',
                transparent && 'bg-white p-1.5 shadow-sm',
              )}
            >
              <img
                src={LOGO_SRC}
                alt={site.name}
                width={1298}
                height={996}
                className="h-10 w-auto md:h-11"
              />
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:flex lg:items-center lg:gap-8">
            {site.mainNav.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => navLinkClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to={site.cta.to}
              className={clsx(buttonVariants({ variant: 'primary' }), 'hidden lg:inline-flex')}
            >
              {site.cta.label}
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={clsx(
                'inline-flex h-11 w-11 items-center justify-center rounded lg:hidden',
                transparent ? 'text-white hover:bg-white/10' : 'text-ink-900 hover:bg-surface',
              )}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink-900/60"
            onClick={close}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute top-0 right-0 flex h-full w-80 max-w-[85%] flex-col bg-white shadow-md"
          >
            <div className="flex items-center justify-between border-b border-line p-5">
              <img
                src={LOGO_SRC}
                alt={site.name}
                width={1298}
                height={996}
                className="h-10 w-auto"
              />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded text-ink-900 hover:bg-surface"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-1">
                {site.mainNav.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={close}
                      className={({ isActive }) => drawerLinkClass(isActive)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link
                to={site.cta.to}
                onClick={close}
                className={clsx(buttonVariants({ variant: 'primary' }), 'mt-4 w-full')}
              >
                {site.cta.label}
              </Link>
            </nav>

            <div className="space-y-3 border-t border-line p-5">
              {site.phones.map((phone) => (
                <a
                  key={phone.display}
                  href={telUrl(phone)}
                  className="flex items-center gap-3 rounded border border-line px-4 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-blue-700 hover:text-blue-700"
                >
                  <Phone className="h-4 w-4 text-blue-700" aria-hidden="true" />
                  {phone.display}
                </a>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded bg-[#25D366] px-4 py-3 text-sm font-bold text-ink-900 transition hover:brightness-95"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
