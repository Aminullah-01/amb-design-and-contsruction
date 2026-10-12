export type NavLink = {
  label: string
  to: string
}

export type PhoneNumber = {
  display: string
  tel: string
  international: string
  internationalTel: string
}

export type SocialLink = {
  name: string
  icon: string
  url: string
}

export type Stat = {
  label: string
  value: string
}

export type FooterLinkGroup = {
  title: string
  links: NavLink[]
}

export type SiteInfo = {
  name: string
  shortName: string
  tagline: string
  about: string
  mission: string
  vision: string
  phones: PhoneNumber[]
  whatsapp: {
    number: string
    link: string
    defaultMessage: string
  }
  email: string
  address: string
  workingHours: string
  cta: {
    label: string
    to: string
  }
  socials: SocialLink[]
  mainNav: NavLink[]
  footerLinkGroups: FooterLinkGroup[]
  stats: Stat[]
}

export type ProcessStep = {
  title: string
  description: string
}

export type ProcessStage = {
  title: string
  short: string
  icon: string
  outputs: string[]
}

export type Faq = {
  question: string
  answer: string
}

export type Service = {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  icon: string
  deliverables: string[]
  whoItsFor: string
  processSteps: ProcessStep[]
  faqs: Faq[]
}

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Interiors'
  | '3D Render'
  | 'Scale Model'

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Concept'

export type ProjectImage = {
  src: string
  alt: string
  caption?: string
}

export type Project = {
  slug: string
  title: string
  titleIsPlaceholder: boolean
  category: ProjectCategory
  categories: ProjectCategory[]
  location: string
  year: string
  status: ProjectStatus
  servicesProvided: string[]
  overview: string
  coverImage: ProjectImage
  gallery: ProjectImage[]
  featured: boolean
  cleared: boolean
}

export type Testimonial = {
  id: string
  name: string
  projectType: string
  location: string
  quote: string
  photo?: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
  photo?: string
}
