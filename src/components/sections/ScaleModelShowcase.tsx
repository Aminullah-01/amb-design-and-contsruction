import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { buttonVariants } from '@/components/ui/buttonVariants'

export default function ScaleModelShowcase() {
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
            <div className="col-span-2 row-span-2 lg:col-span-1 lg:row-span-2">
              <Img
                src="/images/projects/scale-model-compound-01.webp"
                alt="Scale model of a building in a walled compound with a road and street lamps"
                sizes="(min-width: 1024px) 23vw, 100vw"
                className="h-full w-full rounded-lg object-cover shadow-sm"
              />
            </div>
            <div className="lg:col-span-1">
              <Img
                src="/images/projects/scale-model-compound-02.webp"
                alt="Scale model showing the compound layout with structures and landscaping"
                sizes="(min-width: 1024px) 23vw, 100vw"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
              />
            </div>
            <div className="lg:col-span-1">
              <Img
                src="/images/projects/scale-model-bungalow-estate-01.webp"
                alt="Scale model of a bungalow estate with roads and buildings"
                sizes="(min-width: 1024px) 23vw, 100vw"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}