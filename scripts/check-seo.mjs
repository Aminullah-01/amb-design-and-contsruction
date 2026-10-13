import { readdir, readFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(root, 'dist')

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

const failures = []
let checked = 0

for await (const file of walk(distDir)) {
  const name = file.split('/').pop()
  if (name !== 'index.html' && name !== '404.html') continue

  const html = await readFile(file, 'utf8')
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim()
  const description =
    html.match(/<meta[^>]+name="description"[^>]*content="([^"]+)"/i)?.[1]?.trim() ??
    html.match(/<meta[^>]+content="([^"]+)"[^>]*name="description"/i)?.[1]?.trim()

  checked += 1

  const missing = []
  if (!title) missing.push('title')
  if (!description) missing.push('description')
  if (missing.length > 0) {
    failures.push(`${file.replace(`${root}/`, '')} (missing ${missing.join(' and ')})`)
  }
}

if (failures.length > 0) {
  console.error('SEO check failed. These prerendered pages lack metadata:')
  for (const failure of failures) console.error(`  - ${failure}`)
  process.exit(1)
}

console.log(`SEO check passed: ${checked} prerendered pages have a title and description.`)
