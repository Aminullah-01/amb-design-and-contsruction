import type { SiteInfo } from '@/types/content'
import { services } from './services'

export const site: SiteInfo = {
  name: 'AMB Design and Construction Limited',
  shortName: 'AMB',
  tagline: 'We Design. We Build. We Deliver.',
  about:
    'AMB Design and Construction Limited is a Nigerian architecture and construction company that takes your project from the first sketch to the final handover. We combine creative design, honest pricing and solid workmanship so you deal with one accountable team from start to finish.',
  mission:
    "To provide quality, affordable and innovative architectural design and construction services while meeting clients' needs and delivering durable projects.",
  vision:
    'To become a trusted and recognized design and construction company in Nigeria, known for creativity, quality workmanship and professionalism.',
  phones: [
    {
      display: '09030755246',
      tel: 'tel:09030755246',
      international: '2349030755246',
      internationalTel: '+2349030755246',
    },
    {
      display: '08134343537',
      tel: 'tel:08134343537',
      international: '2348134343537',
      internationalTel: '+2348134343537',
    },
    {
      display: '07041771807',
      tel: 'tel:07041771807',
      international: '2347041771807',
      internationalTel: '+2347041771807',
    },
  ],
  whatsapp: {
    number: '2349030755246',
    link: 'https://wa.me/2349030755246',
    defaultMessage: 'Hello AMB Design and Construction, I would like to enquire about...',
  },
  email: 'AmbdesignconstructionI@gmail.com',
  address: 'Pantami Gombe State, Nigeria',
  workingHours: '[HOURS]',
  mapUrl: '[URL]',
  credentials: {
    cacNumber: '[ADD CAC NUMBER]',
    memberships: [],
  },
  cta: {
    label: 'Get a Free Quote',
    to: '/contact',
  },
  socials: [
    { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/2349030755246' },
    { name: 'TikTok', icon: 'tiktok', url: '[ADD URL]' },
    { name: 'Instagram', icon: 'instagram', url: '[ADD URL]' },
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61593000240024' },
    { name: 'Pinterest', icon: 'pinterest', url: '[ADD URL]' },
  ],
  mainNav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Process', to: '/process' },
    { label: 'Contact', to: '/contact' },
  ],
  footerLinkGroups: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Portfolio', to: '/portfolio' },
        { label: 'Process', to: '/process' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: services.map((service) => ({
        label: service.title,
        to: `/services/${service.slug}`,
      })),
    },
  ],
  stats: [
    { label: 'Projects Completed', value: '[ADD]' },
    { label: 'Years of Experience', value: '[ADD]' },
    { label: 'Services Offered', value: '7' },
    { label: 'Client Satisfaction', value: '[ADD]' },
  ],
}
