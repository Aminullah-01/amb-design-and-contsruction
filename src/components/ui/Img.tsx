import type { ImgHTMLAttributes } from 'react'
import manifestData from '@/content/image-manifest.json'

const manifest = manifestData as {
  images: Record<string, { width: number; height: number }>
}

type ImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  priority?: boolean
}

export default function Img({
  src,
  alt,
  className,
  sizes,
  loading,
  priority = false,
  ...rest
}: ImgProps) {
  const base = src.replace(/\.webp$/, '')
  const full = `${base}.webp`
  const card = `${base}-card.webp`

  const fullMeta = manifest.images[full]
  const cardMeta = manifest.images[card]

  const cardCandidate = cardMeta && cardMeta.width !== fullMeta?.width ? `${card} ${cardMeta.width}w` : ''
  const fullCandidate = fullMeta ? `${full} ${fullMeta.width}w` : ''
  const srcset = [cardCandidate, fullCandidate].filter(Boolean).join(', ') || undefined

  const { width, height, ...htmlProps } = rest

  return (
    <img
      src={full}
      srcSet={srcset}
      sizes={sizes || undefined}
      alt={alt}
      width={width ?? fullMeta?.width}
      height={height ?? fullMeta?.height}
      loading={priority ? 'eager' : (loading ?? 'lazy')}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      {...htmlProps}
    />
  )
}