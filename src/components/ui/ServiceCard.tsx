import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import IconCircle from '@/components/ui/IconCircle'
import ServiceIcon from '@/components/ui/ServiceIcon'
import type { Service } from '@/types/content'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <IconCircle size="md">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </IconCircle>
      <h3 className="mt-5 font-heading text-lg font-bold text-ink-900 md:text-xl">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}