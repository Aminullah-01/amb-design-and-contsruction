import {
  ClipboardCheck,
  FileText,
  HardHat,
  KeyRound,
  MessageSquare,
  PencilRuler,
  type LucideIcon,
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  MessageSquare,
  PencilRuler,
  FileText,
  HardHat,
  ClipboardCheck,
  KeyRound,
}

export default function ProcessIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name]
  if (!Icon) return null
  return <Icon className={className} aria-hidden="true" />
}