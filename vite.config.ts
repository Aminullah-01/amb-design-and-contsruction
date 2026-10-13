import { readdirSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

function removeByExtension(dir: string, extensions: string[]) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      removeByExtension(full, extensions)
    } else if (extensions.some((ext) => entry.name.toLowerCase().endsWith(ext))) {
      rmSync(full, { force: true })
    }
  }
}

/**
 * Vite copies everything in public/ into dist/ verbatim. Two things must not
 * reach production: the watermarked images in public/images/needs-clearance
 * (Design Guide Section 1.1 / Section 9), and the source .jpg originals that
 * are only inputs to scripts/optimize-images.mjs (runtime uses the generated
 * .webp). Stripping them keeps the published output free of dead weight.
 */
function stripNonRuntimeAssets(): Plugin {
  let outDir = ''
  return {
    name: 'strip-non-runtime-assets',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      if (!outDir) return
      rmSync(join(outDir, 'images', 'needs-clearance'), { recursive: true, force: true })
      removeByExtension(join(outDir, 'images'), ['.jpg', '.jpeg'])
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), stripNonRuntimeAssets()],
  build: {
    // Emit dist/.vite/manifest.json so the prerender step can preload the
    // route-level chunk for each page (avoids a Suspense flash over the
    // prerendered HTML, which protects LCP and CLS).
    manifest: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
