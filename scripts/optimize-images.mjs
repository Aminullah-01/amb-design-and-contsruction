import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(scriptDir, '..')
const imagesRoot = path.join(root, 'public', 'images')

// Directories whose images are cleared for publication. Each source gets a
// full-size WebP and an 800px-wide "card" WebP. Images in needs-clearance are
// intentionally never touched.
const CLEARED_DIRS = ['projects', 'mockups']

// Assets that are recorded in the manifest but not re-encoded.
const RECORD_ONLY = ['brand/logo.png', 'brand/favicon.png', 'brand/og-image.png']

const FULL_WIDTH = 1600
const CARD_WIDTH = 800
const SOURCE_RE = /\.(jpe?g|png)$/i
const WEBP_OPTIONS = { quality: 78, effort: 4 }

function toPublicPath(absPath) {
  const rel = path.relative(path.join(root, 'public'), absPath)
  return '/' + rel.split(path.sep).join('/')
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`
}

async function encode(src, dest, width) {
  const info = await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp(WEBP_OPTIONS)
    .toFile(dest)
  return { width: info.width, height: info.height, size: info.size }
}

async function main() {
  const images = {}

  for (const dir of CLEARED_DIRS) {
    const absDir = path.join(imagesRoot, dir)
    let entries
    try {
      entries = await readdir(absDir)
    } catch {
      console.warn(`skip: ${dir}/ does not exist`)
      continue
    }

    const sources = entries.filter((file) => SOURCE_RE.test(file))
    for (const file of sources) {
      const base = path.basename(file, path.extname(file))
      const src = path.join(absDir, file)
      const full = path.join(absDir, `${base}.webp`)
      const card = path.join(absDir, `${base}-card.webp`)

      const fullInfo = await encode(src, full, FULL_WIDTH)
      const cardInfo = await encode(src, card, CARD_WIDTH)

      images[toPublicPath(full)] = { width: fullInfo.width, height: fullInfo.height }
      images[toPublicPath(card)] = { width: cardInfo.width, height: cardInfo.height }

      console.log(
        `${dir}/${base}: full ${fullInfo.width}x${fullInfo.height} (${formatKb(fullInfo.size)}) | ` +
          `card ${cardInfo.width}x${cardInfo.height} (${formatKb(cardInfo.size)})`
      )
    }
  }

  for (const rel of RECORD_ONLY) {
    const abs = path.join(imagesRoot, rel)
    try {
      const meta = await sharp(abs).metadata()
      images[toPublicPath(abs)] = { width: meta.width, height: meta.height }
      console.log(`${rel}: ${meta.width}x${meta.height}`)
    } catch {
      console.warn(`skip: ${rel} not found`)
    }
  }

  const manifest = { generatedAt: new Date().toISOString(), images }
  const manifestPath = path.join(root, 'src', 'content', 'image-manifest.json')
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8')

  console.log(`\nWrote ${Object.keys(images).length} entries to ${path.relative(root, manifestPath)}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
