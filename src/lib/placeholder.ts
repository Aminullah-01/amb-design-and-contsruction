const PLACEHOLDER_MARKERS = ['[ADD', '[CONFIRM', '[WRITE']

export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true
  const upper = value.toUpperCase()
  return PLACEHOLDER_MARKERS.some((marker) => upper.includes(marker))
}
