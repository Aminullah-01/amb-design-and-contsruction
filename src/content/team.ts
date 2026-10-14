import type { TeamMember } from '@/types/content'
import { isPlaceholder } from '@/lib/placeholder'

export const team: TeamMember[] = [
  {
    name: 'Musa Abdullahi Musa',
    role: 'CEO',
    bio: 'Musa Abdullahi Musa is the Chief Executive Officer of AMB Design and Construction Limited, committed to delivering innovative architectural designs, quality building construction and professional design solutions. He is passionate about transforming ideas into functional, beautiful and sustainable spaces through careful planning, attention to detail and a commitment to excellence.',
    photo: '/images/team/ceo-profile.webp',
  },
  {
    name: 'Aminu Gambo Abubakar',
    role: 'CTO',
    bio: 'Aminu Gambo Abubakar is the Chief Technology Officer (CTO) of AMB Design and Construction, responsible for driving the company’s technology strategy, digital innovation and technological development. With expertise in software engineering, web development and digital solutions, he leverages technology to improve operational efficiency, strengthen the digital presence and enhance client experiences. He is passionate about integrating modern technology to support business growth and ensure adaptability in a digital world.',
    photo: '/images/team/cto-profile.webp',
  },
]

export function hasRealTeam(): boolean {
  return team.some((member) => !isPlaceholder(member.name))
}

export function getVisibleTeam(): TeamMember[] {
  return hasRealTeam() ? team : []
}
