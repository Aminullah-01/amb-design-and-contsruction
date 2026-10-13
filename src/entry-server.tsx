import { renderToReadableStream } from 'react-dom/server'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import { StaticRouter } from 'react-router'
import App from '@/App'
import { services } from '@/content/services'
import { projects, watermarkedProjects } from '@/content/projects'

export function getPrerenderRoutes(): string[] {
  const cleared = [...projects, ...watermarkedProjects].filter((project) => project.cleared)

  return [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/process',
    '/contact',
    '/privacy-policy',
    ...services.map((service) => `/services/${service.slug}`),
    ...cleared.map((project) => `/portfolio/${project.slug}`),
  ]
}

export async function render(url: string): Promise<{ html: string; head: string }> {
  const helmetContext: { helmet?: HelmetServerState } = {}

  const stream = await renderToReadableStream(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
    {
      onError(error) {
        console.error(`SSR error while rendering ${url}:`, error)
      },
    },
  )

  await stream.allReady

  const reader = stream.getReader()
  const decoder = new TextDecoder()
  let html = ''
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    html += decoder.decode(value, { stream: true })
  }
  html += decoder.decode()

  const helmet = helmetContext.helmet
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].join('\n    ')
    : ''

  return { html, head }
}
