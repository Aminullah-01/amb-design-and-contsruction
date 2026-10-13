const PLACEHOLDER_MARKERS = ['[ADD', '[CONFIRM', '[WRITE']
const BRACKET_TOKEN = /\[[^\]]+\]/

export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true
  if (BRACKET_TOKEN.test(value)) return true
  const upper = value.toUpperCase()
  return PLACEHOLDER_MARKERS.some((marker) => upper.includes(marker))
}
