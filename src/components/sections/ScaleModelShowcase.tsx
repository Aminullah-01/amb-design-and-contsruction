import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import Lightbox, { type LightboxImage } from '@/components/ui/Lightbox'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { buttonVariants } from '@/components/ui/buttonVariants'

const IMAGES: LightboxImage[] = [
  {
    src: '/images/projects/scale-model-compound-01.webp',
    alt: 'Scale model of a building in a walled compound with a road and street lamps',
  },
  {
    src: '/images/projects/scale-model-compound-02.webp',
    alt: 'Scale model showing the compound layout with structures and landscaping',
  },
  {
    src: '/images/projects/scale-model-bungalow-estate-01.webp',
    alt: 'Scale model of a bungalow estate with roads and buildings',
  },
]

const thumbnailClass =
  'group block overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'

export default function ScaleModelShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // [CONFIRM] H2 wording and service claim pending owner confirmation per Build Pack T17.
  return (
    <Section background="white" id="scale-model-showcase">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Scale Models"
            title="Build Models That Bring Designs to Life"
            className="max-w-none"
          >
            <p className="mt-5 text-base text-ink-600 md:text-lg">
              Physical scale models of building layouts and compounds, shown as built.
            </p>

            <Link
              to="/portfolio?category=Scale%20Models"
              className={`${buttonVariants({ variant: 'primary', size: 'lg' })} mt-8`}
            >
              View Scale Models
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </SectionHeading>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <button
              type="button"
              onClick={() => setOpenIndex(0)}
              aria-label={`View image: ${IMAGES[0].alt}`}
              className={`${thumbnailClass} col-span-2 row-span-2 lg:col-span-1 lg:row-span-2`}
            >
              <Img
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                sizes="(min-width: 1024px) 23vw, 100vw"
                className="h-full w-full rounded-lg object-cover shadow-sm transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            <button
              type="button"
              onClick={() => setOpenIndex(1)}
              aria-label={`View image: ${IMAGES[1].alt}`}
              className={`${thumbnailClass} lg:col-span-1`}
            >
              <Img
                src={IMAGES[1].src}
                alt={IMAGES[1].alt}
                sizes="(min-width: 1024px) 23vw, 100vw"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            <button
              type="button"
              onClick={() => setOpenIndex(2)}
              aria-label={`View image: ${IMAGES[2].alt}`}
              className={`${thumbnailClass} lg:col-span-1`}
            >
              <Img
                src={IMAGES[2].src}
                alt={IMAGES[2].alt}
                sizes="(min-width: 1024px) 23vw, 100vw"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </div>
        </div>
      </Container>

      <Lightbox
        images={IMAGES}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </Section>
  )
}