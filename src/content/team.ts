import type { TeamMember } from '@/types/content'
import { isPlaceholder } from '@/lib/placeholder'

export const team: TeamMember[] = [
  {
    name: 'Musa Abdullahi Musa',
    role: 'CEO',
    bio: '[ADD BIO]',
  },
  {
    name: 'Aminu Gambo Abubakar',
    role: 'CTO',
    bio: '[ADD BIO]',
  },
]

export function hasRealTeam(): boolean {
  return team.some((member) => !isPlaceholder(member.name))
}

export function getVisibleTeam(): TeamMember[] {
  return hasRealTeam() ? team : []
}
