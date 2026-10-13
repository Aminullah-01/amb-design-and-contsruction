import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

try {
  process.loadEnvFile(resolve(root, '.env'))
} catch {
  // .env is optional; fall back to the default below.
}

const SITE_URL = (process.env.VITE_SITE_URL || 'https://ambdesignconstruction.com').replace(
  /\/+$/,
  '',
)

const { services } = await import(resolve(root, 'src/content/services.ts'))
const { projects, watermarkedProjects } = await import(resolve(root, 'src/content/projects.ts'))

const staticPaths = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/process',
  '/contact',
  '/privacy-policy',
]
const servicePaths = services.map((service) => `/services/${service.slug}`)
const projectPaths = [...projects, ...watermarkedProjects]
  .filter((project) => project.cleared)
  .map((project) => `/portfolio/${project.slug}`)

const allPaths = [...staticPaths, ...servicePaths, ...projectPaths]

const priorityOverrides = {
  '/': '1.0',
  '/services': '0.9',
  '/portfolio': '0.9',
  '/contact': '0.9',
}

const lastmod = new Date().toISOString().slice(0, 10)

const urls = allPaths
  .map((path) => {
    const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
    const isDetail = path.startsWith('/services/') || path.startsWith('/portfolio/')
    const priority = priorityOverrides[path] ?? (isDetail ? '0.7' : '0.8')
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n')
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

const robots = `User-agent: *\nAllow: /\nDisallow: /style-guide\n\nSitemap: ${SITE_URL}/sitemap.xml\n`

writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap, 'utf8')
writeFileSync(resolve(root, 'public/robots.txt'), robots, 'utf8')

console.log(`Wrote sitemap.xml (${allPaths.length} URLs) and robots.txt for ${SITE_URL}`)
