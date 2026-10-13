import { ChevronDown, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import StatsBar from '@/components/sections/StatsBar'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { site } from '@/content/site'
import { track } from '@/lib/analytics'

const POSTER_SRC = '/images/hero-poster.webp'

type NetworkInformation = {
  saveData?: boolean
  effectiveType?: string
}

function canAutoplayVideo(): boolean {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
  if (connection?.saveData) return false
  if (connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g') return false
  return true
}

function isSmallScreen(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 479.98px)').matches
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [allowVideo] = useState(canAutoplayVideo)
  const [smallScreen] = useState(isSmallScreen)
  const [showVideo, setShowVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Mount the video only after the page has loaded so its download never
  // competes with the poster (LCP) during first paint.
  useEffect(() => {
    if (!allowVideo) return
    const start = () => setShowVideo(true)
    if (document.readyState === 'complete') {
      start()
      return
    }
    window.addEventListener('load', start, { once: true })
    return () => window.removeEventListener('load', start)
  }, [allowVideo])

  useEffect(() => {
    if (!allowVideo || !showVideo) return
    const video = videoRef.current
    if (!video) return
    const start = () => {
      video.play().catch(() => setIsPlaying(false))
    }
    if (video.readyState >= 2) {
      start()
    } else {
      video.addEventListener('loadeddata', start, { once: true })
      return () => video.removeEventListener('loadeddata', start)
    }
  }, [allowVideo, showVideo, smallScreen])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => setIsPlaying(false))
    } else {
      video.pause()
    }
  }

  const handleScrollDown = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <>
      <section
        id="hero"
        className="relative isolate flex min-h-[85svh] flex-col overflow-hidden bg-ink-900 text-white md:h-[100svh] md:min-h-[640px]"
      >
        <div className="absolute inset-0">
          <img
            src={POSTER_SRC}
            alt=""
            width={640}
            height={360}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {allowVideo && showVideo ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={POSTER_SRC}
              aria-hidden="true"
              tabIndex={-1}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0 h-full w-full object-cover"
            >
              {smallScreen ? (
                <source src="/videos/hero-mobile.mp4" type="video/mp4" />
              ) : null}
              <source src="/videos/hero.webm" type="video/webm" />
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          ) : null}

          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-ink-900/55 to-ink-900/35" />
        </div>

        <Container className="relative flex flex-1 items-center pt-28 pb-32 md:pt-24 md:pb-40">
          <div className="hero-fade max-w-[760px]">
            <p className="text-sm font-semibold tracking-[0.14em] text-blue-500 uppercase">
              Architecture, Design and Construction
            </p>
            <h1 className="mt-4 font-heading text-[38px] leading-[1.05] font-extrabold tracking-tight md:text-[68px]">
              We Design. We Build. We Deliver.
            </h1>
            <p className="mt-5 max-w-[620px] text-base text-white/90 md:text-lg">
              Quality, affordable and innovative design and construction for homes and businesses
              across Nigeria.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to={site.cta.to}
                onClick={() => track('cta_click', { location: 'hero' })}
                className={buttonVariants({ variant: 'primary', size: 'lg' })}
              >
                {site.cta.label}
              </Link>
              <Link
                to="/portfolio"
                className={buttonVariants({ variant: 'outline-light', size: 'lg' })}
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-ink-900/50 backdrop-blur md:block">
          <Container className="py-4">
            <StatsBar tone="frosted" />
          </Container>
        </div>

        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="absolute bottom-24 left-1/2 inline-flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/30 bg-ink-900/40 text-white backdrop-blur transition-colors hover:bg-ink-900/70"
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </button>

        {allowVideo && showVideo ? (
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            aria-pressed={!isPlaying}
            className="absolute right-5 bottom-24 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-ink-900/40 text-white backdrop-blur transition-colors hover:bg-ink-900/70 md:right-6"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Play className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        ) : null}
      </section>

      <div className="bg-surface md:hidden">
        <Container className="py-8">
          <StatsBar tone="light" />
        </Container>
      </div>
    </>
  )
}
