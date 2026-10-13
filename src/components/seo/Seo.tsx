import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { site } from '@/content/site'
import { absoluteUrl, canonicalUrl, OG_IMAGE } from '@/lib/seo'

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  children?: ReactNode
}

export default function Seo({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = 'website',
  noindex = false,
  children,
}: SeoProps) {
  const url = canonicalUrl(path)
  const imageUrl = absoluteUrl(image)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {children}
    </Helmet>
  )
}
