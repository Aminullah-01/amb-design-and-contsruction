import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { ChevronsLeftRight } from 'lucide-react'
import Img from '@/components/ui/Img'
import type { ProjectImage } from '@/types/content'

type BeforeAfterSliderProps = {
  before: ProjectImage
  after: ProjectImage
  beforeLabel?: string
  afterLabel?: string
  caption?: string
  className?: string
}

const clamp = (value: number) => Math.min(100, Math.max(0, value))

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  caption,
  className = '',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const [position, setPosition] = useState(50)

  const setFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || rect.width === 0) return
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100))
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    setFromClientX(event.clientX)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    setFromClientX(event.clientX)
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = event.shiftKey ? 10 : 2
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault()
        setPosition((value) => clamp(value - step))
        break
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault()
        setPosition((value) => clamp(value + step))
        break
      case 'Home':
        event.preventDefault()
        setPosition(0)
        break
      case 'End':
        event.preventDefault()
        setPosition(100)
        break
      default:
        break
    }
  }

  const labelClass =
    'pointer-events-none absolute top-4 rounded-md bg-ink-900/70 px-2.5 py-1 text-xs font-semibold tracking-[0.12em] text-white uppercase'

  return (
    <div className={className}>
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-lg select-none sm:aspect-[16/10]"
      >
        <Img
          src={after.src}
          alt={after.alt}
          loading="eager"
          draggable={false}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Img
          src={before.src}
          alt={before.alt}
          loading="eager"
          draggable={false}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <span className={`${labelClass} left-4`}>{beforeLabel}</span>
        <span className={`${labelClass} right-4`}>{afterLabel}</span>

        <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90 shadow-sm" />
          <button
            type="button"
            role="slider"
            aria-label="Drag to compare before and after"
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            aria-valuetext={`${Math.round(position)}%`}
            onKeyDown={handleKeyDown}
            className="pointer-events-auto absolute top-1/2 left-0 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white text-ink-900 shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <ChevronsLeftRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {caption ? <p className="mt-3 text-center text-sm text-ink-600">{caption}</p> : null}
    </div>
  )
}