import { clsx } from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'outline-light' | 'highlight'
export type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-blue-700 text-white hover:bg-blue-600 focus-visible:outline-blue-600',
  secondary:
    'border border-blue-700 text-blue-700 hover:bg-blue-50 focus-visible:outline-blue-600',
  'outline-light':
    'border border-white text-white hover:bg-white/10 focus-visible:outline-white',
  highlight: 'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base',
}

export function buttonVariants({
  variant = 'primary',
  size = 'md',
}: { variant?: ButtonVariant; size?: ButtonSize } = {}) {
  return clsx(base, variants[variant], sizes[size])
}
