import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(root, 'dist')

const { render, getPrerenderRoutes } = await import(
  pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href
)

const template = await readFile(join(distDir, 'index.html'), 'utf8')

// Map each prerendered route to the page module, so we can emit a
// modulepreload for that route's code-split chunk. The chunk then downloads in
// parallel with the main bundle instead of after mount.
const ROUTE_ENTRY = {
  '/': 'src/pages/HomePage.tsx',
  '/about': 'src/pages/AboutPage.tsx',
  '/services': 'src/pages/ServicesPage.tsx',
  '/portfolio': 'src/pages/PortfolioPage.tsx',
  '/process': 'src/pages/ProcessPage.tsx',
  '/contact': 'src/pages/ContactPage.tsx',
  '/privacy-policy': 'src/pages/PrivacyPolicyPage.tsx',
  '/style-guide': 'src/pages/StyleGuidePage.tsx',
  '/__not_found__': 'src/pages/NotFoundPage.tsx',
}

let manifest = {}
try {
  manifest = JSON.parse(await readFile(join(distDir, '.vite', 'manifest.json'), 'utf8'))
} catch {
  console.warn('No build manifest found; skipping route chunk preloads.')
}

function entrySourceFor(route) {
  if (ROUTE_ENTRY[route]) return ROUTE_ENTRY[route]
  if (route.startsWith('/services/')) return 'src/pages/ServiceDetailPage.tsx'
  if (route.startsWith('/portfolio/')) return 'src/pages/ProjectDetailPage.tsx'
  return null
}

function preloadTags(route) {
  const source = entrySourceFor(route)
  const entry = source ? manifest[source] : null
  if (!entry) return ''
  const tags = [`<link rel="modulepreload" crossorigin href="/${entry.file}"/>`]
  for (const css of entry.css ?? []) {
    tags.push(`<link rel="stylesheet" href="/${css}"/>`)
  }
  return tags.join('')
}

function extractMetaFromHtml(html) {
  let headExtra = ''
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  if (titleMatch) {
    headExtra += titleMatch[0]
  }
  const descMatch = html.match(/<meta[^>]+name="description"[^>]*content="[^"]+"[^>]*>/i) || html.match(/<meta[^>]+content="[^"]+"[^>]*name="description"[^>]*>/i)
  if (descMatch) headExtra += '\n    ' + descMatch[0]
  const ogMatches = html.match(/<meta[^>]+property="og:[^"]+"[^>]*content="[^"]+"[^>]*>/gi) || []
  for (const m of ogMatches) {
    headExtra += '\n    ' + m
  }
  const twMatches = html.match(/<meta[^>]+name="twitter:[^"]+"[^>]*content="[^"]+"[^>]*>/gi) || []
  for (const m of twMatches) {
    headExtra += '\n    ' + m
  }
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]*>/i)
  if (canonical) headExtra += '\n    ' + canonical[0]
  return headExtra
}

function buildPage(head, html, preloads = '') {
  let headContent = (head && head.trim()) ? head : ''
  if (!headContent || !/<title/i.test(headContent)) {
    headContent = extractMetaFromHtml(html)
  }
  return template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace('<!--app-head-->', headContent)
    .replace('<!--app-html-->', html)
    .replace('</head>', `${preloads}</head>`)
}

const routes = getPrerenderRoutes()

for (const route of routes) {
  const { html, head } = await render(route)
  const page = buildPage(head, html, preloadTags(route))
  const outPath =
    route === '/'
      ? join(distDir, 'index.html')
      : join(distDir, route.replace(/^\//, ''), 'index.html')
  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, page, 'utf8')
}

const notFound = await render('/__not_found__')
await writeFile(
  join(distDir, '404.html'),
  buildPage(notFound.head, notFound.html, preloadTags('/__not_found__')),
  'utf8',
)

console.log(`Prerendered ${routes.length} routes plus 404.html`)
