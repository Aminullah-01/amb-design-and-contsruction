import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import { buttonVariants, type ButtonSize, type ButtonVariant } from './buttonVariants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return <button type={type} className={clsx(buttonVariants({ variant, size }), className)} {...props} />
}
