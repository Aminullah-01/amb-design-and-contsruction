import type { PreparationItem, ProcessStage } from '@/types/content'

// Step copy follows Build Pack Section 2.7. "youDo", "weDo" and "outputs"
// map to What you do / What we do / What you receive on the Process page.
export const processStages: ProcessStage[] = [
  {
    title: 'Consultation',
    short: 'We listen to your needs, budget and plot details.',
    icon: 'MessageSquare',
    youDo: ['Share your needs, budget and plot details'],
    weDo: ['Listen, ask questions and advise on what is possible'],
    outputs: ['Needs, budget and plot details understood', 'A timeline agreed with you'],
  },
  {
    title: 'Design',
    short: 'Concept, revisions, drawings and 3D visuals.',
    icon: 'PencilRuler',
    youDo: ['Share your ideas and reference photos', 'Review drafts and give feedback'],
    weDo: ['Prepare the concept design and revisions', 'Produce drawings and 3D visuals'],
    outputs: ['Concept design', 'Revised plans', 'Working drawings', '3D visuals'],
  },
  {
    title: 'Costing and Agreement',
    short: 'Itemized cost estimate, schedule, written contract.',
    icon: 'FileText',
    youDo: ['Review the estimate and schedule', 'Sign the written contract'],
    weDo: ['Prepare an itemized cost estimate', 'Agree a schedule and written contract'],
    outputs: ['Itemized cost estimate', 'Project schedule', 'Written contract'],
  },
  {
    title: 'Construction',
    short: 'Procurement, site team, regular progress updates.',
    icon: 'HardHat',
    youDo: ['Follow the progress updates and raise questions'],
    weDo: ['Handle procurement and run the site team', 'Send regular progress updates'],
    outputs: ['Materials procurement', 'Skilled site team', 'Regular progress updates'],
  },
  {
    title: 'Quality Control',
    short: 'Inspections at every stage, checked against the drawings.',
    icon: 'ClipboardCheck',
    youDo: ['Review the inspection reports and approve completed work'],
    weDo: ['Inspect at every stage against the drawings'],
    outputs: ['Inspections at every stage', 'Checks against the drawings'],
  },
  {
    title: 'Handover',
    short: 'Final inspection, snag fixing and project documentation.',
    icon: 'KeyRound',
    youDo: ['Attend the final inspection', 'Take over the completed project'],
    weDo: ['Run the final inspection and fix snags', 'Compile the project documentation'],
    outputs: ['Final inspection', 'Snag fixing', 'Project documentation'],
  },
]

export const preparationChecklist: PreparationItem[] = [
  {
    title: 'Plot documents',
    text: 'Survey plan, title documents or any drawings you already have.',
  },
  {
    title: 'Budget range',
    text: 'A realistic range, so we can advise on what is achievable.',
  },
  {
    title: 'Ideas and reference photos',
    text: 'Inspiration images of the styles and features you like.',
  },
  {
    title: 'Location',
    text: 'The site location or address, and how to reach it.',
  },
]
