import { useParams } from 'react-router-dom'
import PagePlaceholder from '@/components/ui/PagePlaceholder'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <PagePlaceholder
      title={`Project: ${slug ?? ''}`}
      description="Project detail page with gallery and lightbox. Built in task T24."
    />
  )
}
