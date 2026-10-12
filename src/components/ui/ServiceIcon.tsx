import {
  ClipboardCheck,
  Cuboid,
  DraftingCompass,
  Hammer,
  HardHat,
  Lightbulb,
  Sofa,
  type LucideIcon,
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  DraftingCompass,
  Cuboid,
  HardHat,
  Hammer,
  ClipboardCheck,
  Sofa,
  Lightbulb,
}

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name]
  if (!Icon) return null
  return <Icon className={className} aria-hidden="true" />
}