import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

type PagePlaceholderProps = {
  title: string
  description?: string
  children?: ReactNode
}

export default function PagePlaceholder({ title, description, children }: PagePlaceholderProps) {
  return (
    <>
      <Helmet>
        <title>{`${title} | AMB Design and Construction Limited`}</title>
      </Helmet>
      <section className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-2xl text-base md:text-lg">{description}</p> : null}
        {children}
      </section>
    </>
  )
}
