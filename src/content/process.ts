import type { ProcessStage } from '@/types/content'

export const processStages: ProcessStage[] = [
  {
    title: 'Consultation',
    short: 'We listen to your needs, budget and plot details.',
    icon: 'MessageSquare',
    outputs: ['Needs, budget and plot details understood', 'A timeline agreed with you'],
  },
  {
    title: 'Design',
    short: 'Concept, revisions, drawings and 3D visuals.',
    icon: 'PencilRuler',
    outputs: ['Concept design', 'Revised plans', 'Working drawings', '3D visuals'],
  },
  {
    title: 'Costing and Agreement',
    short: 'Itemized cost estimate, schedule, written contract.',
    icon: 'FileText',
    outputs: ['Itemized cost estimate', 'Project schedule', 'Written contract'],
  },
  {
    title: 'Construction',
    short: 'Procurement, site team, regular progress updates.',
    icon: 'HardHat',
    outputs: ['Materials procurement', 'Skilled site team', 'Regular progress updates'],
  },
  {
    title: 'Quality Control',
    short: 'Inspections at every stage, checked against the drawings.',
    icon: 'ClipboardCheck',
    outputs: ['Inspections at every stage', 'Checks against the drawings'],
  },
  {
    title: 'Handover',
    short: 'Final inspection, snag fixing and project documentation.',
    icon: 'KeyRound',
    outputs: ['Final inspection', 'Snag fixing', 'Project documentation'],
  },
]