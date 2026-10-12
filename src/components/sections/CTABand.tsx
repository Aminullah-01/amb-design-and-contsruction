import { MessageCircle, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { whatsappUrl } from '@/lib/contact'

export default function CTABand() {
  const quoteMessage = 'Hello AMB Design and Construction, I would like a free quote for my project.'
  const whatsappMessage = 'Hello AMB Design and Construction, I have a project to discuss.'

  return (
    <Section background="blue" className="py-12 md:py-16" id="cta">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to build your dream project?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={whatsappUrl(quoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: 'primary', size: 'lg' })} group bg-white text-blue-700 hover:bg-blue-50 focus-visible:outline-white`}
            >
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              Request a Free Quote
            </Link>
            <Link
              to={whatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: 'outline-light', size: 'lg' })}`}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}