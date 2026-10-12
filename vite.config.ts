import { rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * Vite copies everything in public/ into dist/ verbatim. The watermarked images
 * in public/images/needs-clearance must never be published (Design Guide
 * Section 1.1 / Section 9), so this strips them from the production output.
 */
function stripNeedsClearance(): Plugin {
  let outDir = ''
  return {
    name: 'strip-needs-clearance',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      if (outDir) rmSync(join(outDir, 'images', 'needs-clearance'), { recursive: true, force: true })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), stripNeedsClearance()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
