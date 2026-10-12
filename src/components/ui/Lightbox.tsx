import { useCallback, useEffect, useRef, type TouchEvent as ReactTouchEvent } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useFocusTrap } from '@/lib/useFocusTrap'

export type LightboxImage = {
  src: string
  alt: string
  caption?: string
}

type LightboxProps = {
  images: LightboxImage[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const open = index !== null && index >= 0 && index < images.length

  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })
  const stableClose = useCallback(() => onCloseRef.current(), [])

  useFocusTrap(dialogRef, open, stableClose)

  useEffect(() => {
    if (!open || index === null) return

    const go = (offset: number) => {
      onNavigate((index + offset + images.length) % images.length)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        go(-1)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        go(1)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, index, images.length, onNavigate])

  useEffect(() => {
    if (!open || index === null) return

    const preload = (position: number) => {
      const image = images[(position + images.length) % images.length]
      if (!image) return
      const preloader = new Image()
      preloader.src = image.src
    }

    preload(index + 1)
    preload(index - 1)
  }, [open, index, images])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const touchStartX = useRef<number | null>(null)

  if (!open || index === null) return null

  const current = images[index]
  const many = images.length > 1

  const goTo = (offset: number) => onNavigate((index + offset + images.length) % images.length)

  const handleTouchStart = (event: ReactTouchEvent) => {
    touchStartX.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event: ReactTouchEvent) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 50) return
    goTo(delta > 0 ? -1 : 1)
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/95 p-4 md:p-8"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>

      {many ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            goTo(-1)
          }}
          aria-label="Previous image"
          className="absolute left-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-6"
        >
          <ChevronLeft className="h-7 w-7" aria-hidden="true" />
        </button>
      ) : null}

      <figure
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="mx-auto max-h-[75vh] w-auto rounded-lg object-contain"
        />
        <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/90">
          {current.caption ?? current.alt}
          <span className="mt-1 block text-white/60">
            {index + 1} of {images.length}
          </span>
        </figcaption>
      </figure>

      {many ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            goTo(1)
          }}
          aria-label="Next image"
          className="absolute right-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-6"
        >
          <ChevronRight className="h-7 w-7" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  )
}