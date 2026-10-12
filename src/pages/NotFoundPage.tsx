import { Link } from 'react-router-dom'
import PagePlaceholder from '@/components/ui/PagePlaceholder'

export default function NotFoundPage() {
  return (
    <PagePlaceholder
      title="Page not found"
      description="The page you are looking for does not exist or has moved."
    >
      <Link
        to="/"
        className="mt-8 inline-block rounded-[10px] bg-black px-6 py-3 font-semibold text-white"
      >
        Back to home
      </Link>
    </PagePlaceholder>
  )
}
