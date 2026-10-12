import { Phone } from 'lucide-react'
import SocialIcon from '@/components/ui/SocialIcon'
import { site } from '@/content/site'
import { telUrl, whatsappUrl } from '@/lib/contact'

export default function FloatingButtons() {
  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed right-6 bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:flex"
      >
        <SocialIcon name="whatsapp" className="h-7 w-7" />
        <span className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-ink-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Chat with us
        </span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-line bg-white p-3 md:hidden">
        <a
          href={telUrl(site.phones[0])}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded bg-blue-700 px-4 text-sm font-bold text-white transition-colors hover:bg-blue-600"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded bg-[#25D366] px-4 text-sm font-bold text-ink-900 transition hover:brightness-95"
        >
          <SocialIcon name="whatsapp" className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </>
  )
}
