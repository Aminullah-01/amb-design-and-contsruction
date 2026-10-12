import type { TeamMember } from '@/types/content'
import { isPlaceholder } from '@/lib/placeholder'

export const team: TeamMember[] = [
  {
    name: '[ADD NAME]',
    role: '[ADD ROLE]',
    bio: '[ADD BIO]',
  },
  {
    name: '[ADD NAME]',
    role: '[ADD ROLE]',
    bio: '[ADD BIO]',
  },
  {
    name: '[ADD NAME]',
    role: '[ADD ROLE]',
    bio: '[ADD BIO]',
  },
]

export function hasRealTeam(): boolean {
  return team.some((member) => !isPlaceholder(member.name))
}

export function getVisibleTeam(): TeamMember[] {
  return hasRealTeam() ? team : []
}
