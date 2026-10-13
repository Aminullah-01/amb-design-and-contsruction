// Scans the codebase and content for outstanding placeholder markers.
//
//   node scripts/check-placeholders.mjs            warn only (exit 0)
//   node scripts/check-placeholders.mjs --write    also (re)write docs/OUTSTANDING.md
//   PRODUCTION=1 node scripts/check-placeholders.mjs   fail (exit 1) if any remain
//
// The PRODUCTION flag is read from the environment (or --production). When it is
// on, a non-empty result blocks the build. Otherwise the build only warns.

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'

const ROOT = process.cwd()

const SCAN_PATHS = ['src', 'scripts', 'index.html', 'public']
const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  'dist-ssr',
  '.git',
  'docs',
  'images',
  'videos',
])
const SKIP_FILES = new Set(['scripts/check-placeholders.mjs', 'src/lib/placeholder.ts'])
const SCAN_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.html',
  '.css',
  '.json',
  '.txt',
  '.xml',
])

// One combined pattern so a marker is never counted twice.
// - [ADD ...] / [CONFIRM ...] / [WRITE ...]
// - any all-caps token such as [URL], [EMAIL]
// - the title-case [City] marker used by src/lib/seo.ts
const MARKER_PATTERN = /\[(?:ADD|CONFIRM|WRITE)\b[^\]]*\]|\[[A-Z][A-Z0-9 _/&-]{1,}\]|\[City\]/g
const HAS_MARKER_PATTERN = /\[(?:ADD|CONFIRM|WRITE)\b[^\]]*\]|\[[A-Z][A-Z0-9 _/&-]{1,}\]|\[City\]/
const TITLE_FLAG_PATTERN = /titleIsPlaceholder:\s*true/

const PRODUCTION = /^(1|true|yes|on)$/i.test(process.env.PRODUCTION ?? '')
const args = new Set(process.argv.slice(2))
const WRITE = args.has('--write') || args.has('-w')
const PRODUCTION_FLAG = PRODUCTION || args.has('--production')

const PAGE_MAP = {
  'src/content/site.ts': 'Site-wide',
  'src/lib/seo.ts': 'Site-wide',
  'src/components/sections/StatsBar.tsx': 'Home page',
  'src/components/sections/ScaleModelShowcase.tsx': 'Home page',
  'src/content/testimonials.ts': 'Home page',
  'src/pages/AboutPage.tsx': 'About page',
  'src/content/team.ts': 'About page',
  'src/content/projects.ts': 'Portfolio and project pages',
  'src/components/ui/QuoteRequestForm.tsx': 'Contact page',
}

const GROUP_ORDER = ['Site-wide', 'Home page', 'About page', 'Portfolio and project pages', 'Contact page']

const OWNER_ACTIONS = {
  'CONFIRM EMAIL':
    'Confirm the correct business email (the vest mock-up reads Ambdesignconsructionl@gmail.com, which may be misspelled).',
  'ADD ADDRESS': 'Supply the business/office address.',
  'ADD HOURS': 'Supply the working/opening hours.',
  'ADD MAP URL': 'Supply a Google Maps embed or share URL for the office location.',
  HOURS: 'Supply the working/opening hours.',
  URL: 'Supply the URL for this field (social profile or map link).',
  'ADD CAC NUMBER': 'Supply the CAC registration number (or confirm there is none).',
  'ADD URL': 'Supply the social profile URL.',
  ADD: 'Supply the real value. Never invent numbers or claims.',
  'ADD LOCATION': 'Supply the real project location (city/area).',
  'ADD STORY': 'Write 2 to 3 short paragraphs on how AMB started, why, and what drives the team.',
  'ADD NAME': 'Supply the real name.',
  'ADD ROLE': 'Supply the real role or job title.',
  'ADD BIO': 'Supply a short, real biography.',
  'ADD PROJECT TYPE': 'Supply the real project type.',
  'ADD CLIENT TESTIMONIAL': 'Supply a real client testimonial (with written permission to publish).',
  CITY: 'Supply the primary city/state to target (used in the home page title and copy).',
  CONFIRM: 'Owner must confirm this detail.',
  'TITLE PLACEHOLDER': 'Rename the project with its real title (the current title is a working placeholder).',
}

const FILE_OVERRIDES = {
  'src/components/ui/QuoteRequestForm.tsx:CONFIRM':
    'Confirm the indicative budget bands (Under ₦10m through Over ₦100m) with the owner.',
  'src/content/projects.ts:ADD': 'Supply the real project year.',
  'src/components/sections/ScaleModelShowcase.tsx:CONFIRM':
    'Confirm the "Build Models That Bring Designs to Life" heading and any service claim.',
  'src/components/sections/StatsBar.tsx:ADD':
    'Provide the real statistic and update src/content/site.ts (currently rendered as a dash).',
}

function normalizeMarker(text) {
  return text.replace(/^\[|\]$/g, '').replace(/\s+/g, ' ').trim().toUpperCase()
}

function ownerAction(marker, relFile) {
  const override = FILE_OVERRIDES[`${relFile}:${marker}`]
  return override ?? OWNER_ACTIONS[marker] ?? `Owner must supply: ${marker.toLowerCase()}.`
}

function listFiles(absPath, out) {
  const stats = statSync(absPath)
  if (stats.isDirectory()) {
    const name = absPath.split(sep).pop()
    if (SKIP_DIRS.has(name)) return
    for (const entry of readdirSync(absPath).sort()) {
      listFiles(join(absPath, entry), out)
    }
    return
  }
  if (SKIP_FILES.has(relative(ROOT, absPath))) return
  const dot = absPath.lastIndexOf('.')
  const ext = dot === -1 ? '' : absPath.slice(dot).toLowerCase()
  if (!SCAN_EXTENSIONS.has(ext)) return
  out.push(absPath)
}

function contextFor(lines, index) {
  for (let i = index; i >= 0 && i >= index - 30; i -= 1) {
    const match = lines[i].match(/(?:title|label|name):\s*'([^']+)'/)
    if (match && !HAS_MARKER_PATTERN.test(match[1])) {
      return match[1]
    }
  }
  return null
}

function scan() {
  const files = []
  for (const entry of SCAN_PATHS) {
    const abs = join(ROOT, entry)
    if (existsSync(abs)) listFiles(abs, files)
  }

  const findings = []
  for (const abs of files) {
    const relFile = relative(ROOT, abs).split(sep).join('/')
    const lines = readFileSync(abs, 'utf8').split('\n')
    lines.forEach((line, index) => {
      const lineNumber = index + 1
      const context = contextFor(lines, index)
      let match
      while ((match = MARKER_PATTERN.exec(line)) !== null) {
        const marker = match[0]
        findings.push({
          file: relFile,
          line: lineNumber,
          marker,
          token: normalizeMarker(marker),
          context,
          action: ownerAction(normalizeMarker(marker), relFile),
        })
      }
      if (TITLE_FLAG_PATTERN.test(line)) {
        findings.push({
          file: relFile,
          line: lineNumber,
          marker: 'titleIsPlaceholder: true',
          token: 'TITLE PLACEHOLDER',
          context,
          action: ownerAction('TITLE PLACEHOLDER', relFile),
        })
      }
    })
  }

  return findings
}

function groupOf(file) {
  return PAGE_MAP[file] ?? 'Other'
}

function buildDoc(findings) {
  const byGroup = new Map()
  for (const finding of findings) {
    const group = groupOf(finding.file)
    if (!byGroup.has(group)) byGroup.set(group, [])
    byGroup.get(group).push(finding)
  }

  const groups = [...byGroup.keys()].sort((a, b) => {
    const ai = GROUP_ORDER.indexOf(a)
    const bi = GROUP_ORDER.indexOf(b)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  const fileCount = new Set(findings.map((finding) => finding.file)).size
  const parts = [
    '# Outstanding items',
    '',
    '> Generated by `npm run outstanding` (`scripts/check-placeholders.mjs`). Do not edit by hand.',
    '',
    'Every item below must be supplied or confirmed by the owner before the site goes live.',
    'Until then each one renders as a placeholder, a dash, or is hidden. Nothing is invented by',
    'the build. Resolve all of them before running a production build (`PRODUCTION=1 npm run build`).',
    '',
    `**Total: ${findings.length} item(s) across ${fileCount} file(s).**`,
    '',
  ]

  for (const group of groups) {
    parts.push(`## ${group}`, '')
    parts.push('| Marker | File | Line | Owner must supply |')
    parts.push('| --- | --- | --- | --- |')
    for (const finding of byGroup.get(group)) {
      const marker = `\`${finding.marker}\`${finding.context ? ` (${finding.context})` : ''}`
      parts.push(`| ${marker} | \`${finding.file}\` | ${finding.line} | ${finding.action} |`)
    }
    parts.push('')
  }

  return `${parts.join('\n').trimEnd()}\n`
}

const findings = scan()

if (WRITE) {
  const outPath = join(ROOT, 'docs', 'OUTSTANDING.md')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, buildDoc(findings), 'utf8')
  console.log(`Wrote ${relative(ROOT, outPath)} (${findings.length} item(s)).`)
}

if (findings.length === 0) {
  console.log('Placeholder check: no outstanding placeholders found.')
  process.exit(0)
}

const fileCount = new Set(findings.map((finding) => finding.file)).size

if (PRODUCTION_FLAG) {
  console.error(
    `ERROR: placeholder check failed. ${findings.length} outstanding item(s) remain across ${fileCount} file(s).`,
  )
  console.error('Resolve every item in docs/OUTSTANDING.md before a production build.')
  process.exit(1)
}

console.log(
  `WARNING: ${findings.length} outstanding placeholder item(s) across ${fileCount} file(s).`,
)
console.log('See docs/OUTSTANDING.md for the full list grouped by page.')
