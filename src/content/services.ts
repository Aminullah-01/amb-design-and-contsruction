import type { Service } from '@/types/content'

const process = {
  consultation: {
    title: 'Consultation',
    description: 'We listen to your needs, budget and plot details.',
  },
  design: {
    title: 'Design',
    description: 'Concept, revisions, drawings and 3D visuals.',
  },
  costing: {
    title: 'Costing and Agreement',
    description: 'Itemized cost estimate, schedule, written contract.',
  },
  construction: {
    title: 'Construction',
    description: 'Procurement, site team, regular progress updates.',
  },
  quality: {
    title: 'Quality Control',
    description: 'Inspections at every stage, checked against the drawings.',
  },
  handover: {
    title: 'Handover',
    description: 'Final inspection, snag fixing and project documentation.',
  },
}

const faq = {
  designTime: {
    question: 'How long does a design take?',
    answer:
      'It depends on the size and complexity. We give you a timeline during the first consultation.',
  },
  existingDrawings: {
    question: 'Can you build from my existing drawings?',
    answer: 'Yes. We will review them and advise before quoting.',
  },
  remoteSupervision: {
    question: 'Can you supervise remotely for me abroad?',
    answer:
      'Yes. We send regular photo and video reports and hold video calls.',
  },
  payments: {
    question: 'How are payments structured?',
    answer:
      'Payments are tied to agreed project milestones, as set out in the contract.',
  },
}

export const services: Service[] = [
  {
    slug: 'architectural-design',
    title: 'Architectural Design',
    shortDescription: 'Building plans, floor plans, elevations and detailed drawings.',
    longDescription:
      'We prepare building plans, floor plans, elevations, sections and detailed drawings for homes, offices, shops and mixed-use buildings. Our designs suit Nigerian climate, plot sizes and budgets, and are prepared to support your approval process and guide the builder clearly.',
    icon: 'DraftingCompass',
    deliverables: [
      'Concept sketches',
      'Floor plans',
      'Elevations',
      'Sections',
      'Working drawings',
      'Approval drawings',
    ],
    whoItsFor:
      'First-time home builders, property developers and landlords, and business owners who need plans for a new home, office, shop or mixed-use building.',
    processSteps: [process.consultation, process.design, process.costing],
    faqs: [faq.designTime, faq.existingDrawings, faq.payments],
  },
  {
    slug: '3d-architectural-visualization',
    title: '3D Architectural Visualization',
    shortDescription: 'See your building in realistic 3D before construction begins.',
    longDescription:
      'See exactly how your building will look before construction. Our realistic 3D models and renders help you make confident decisions, avoid costly changes and present your project to partners or investors.',
    icon: 'Cuboid',
    deliverables: [
      'Exterior renders',
      'Interior renders',
      '3D walkthrough views',
      'Day and night views',
    ],
    whoItsFor:
      'Homeowners, developers and diaspora clients who want to see and adjust the design before construction, and present it to partners or investors.',
    processSteps: [process.consultation, process.design, process.costing],
    faqs: [faq.designTime, faq.payments, faq.existingDrawings],
  },
  {
    slug: 'building-construction',
    title: 'Building Construction',
    shortDescription: 'Residential and commercial buildings built to last.',
    longDescription:
      'We construct residential and commercial buildings with proper materials, skilled workers and careful supervision, from foundation to finishing.',
    icon: 'HardHat',
    deliverables: [
      'New homes',
      'Duplexes',
      'Apartment blocks',
      'Shops',
      'Offices',
      'Small commercial buildings',
    ],
    whoItsFor:
      'Homeowners, property developers and landlords, and business owners building residential or commercial properties.',
    processSteps: [
      process.design,
      process.costing,
      process.construction,
      process.quality,
      process.handover,
    ],
    faqs: [faq.existingDrawings, faq.remoteSupervision, faq.payments],
  },
  {
    slug: 'renovation-and-remodeling',
    title: 'Renovation and Remodeling',
    shortDescription: 'Modernize and improve your existing building.',
    longDescription:
      'We improve and modernize existing buildings: layout changes, extensions, new finishes, roofing, facade upgrades and repairs, with minimal disruption.',
    icon: 'Hammer',
    deliverables: ['Inspection', 'Redesign', 'Quotation', 'Execution', 'Handover'],
    whoItsFor:
      'Existing property owners and landlords who want to modernise, extend or improve an existing building.',
    processSteps: [
      process.consultation,
      process.design,
      process.costing,
      process.construction,
      process.handover,
    ],
    faqs: [faq.existingDrawings, faq.designTime, faq.payments],
  },
  {
    slug: 'project-supervision',
    title: 'Project Supervision',
    shortDescription: 'Independent monitoring for quality and proper execution.',
    longDescription:
      'Building with another contractor, or from abroad? We monitor construction on your behalf to ensure the work is done properly and to the approved design.',
    icon: 'ClipboardCheck',
    deliverables: [
      'Scheduled site visits',
      'Quality checks',
      'Material verification',
      'Photo and video progress reports',
    ],
    whoItsFor:
      'Owners building with another contractor, and diaspora Nigerians who need construction monitored on their behalf.',
    processSteps: [process.consultation, process.quality, process.handover],
    faqs: [faq.remoteSupervision, faq.payments, faq.existingDrawings],
  },
  {
    slug: 'interior-and-exterior-design',
    title: 'Interior and Exterior Design',
    shortDescription: 'Functional, attractive spaces for homes and businesses.',
    longDescription:
      'We create functional and attractive spaces for living and business: space planning, finishes, lighting, ceilings, landscaping, fencing and facade treatment.',
    icon: 'Sofa',
    deliverables: [
      'Space planning',
      'Finishes',
      'Lighting',
      'Ceilings',
      'Landscaping',
      'Fencing',
      'Facade treatment',
    ],
    whoItsFor:
      'Homeowners and business owners who want functional and attractive interior and exterior spaces.',
    processSteps: [
      process.consultation,
      process.design,
      process.costing,
      process.construction,
      process.handover,
    ],
    faqs: [faq.designTime, faq.payments, faq.existingDrawings],
  },
  {
    slug: 'building-consultation',
    title: 'Building Consultation',
    shortDescription: 'Professional guidance from design through construction.',
    longDescription:
      'Get professional guidance before you spend. We advise on feasibility, budgeting, materials, approvals and contractor selection, from design through construction.',
    icon: 'Lightbulb',
    deliverables: [
      'Feasibility',
      'Budgeting',
      'Materials',
      'Approvals',
      'Contractor selection',
    ],
    whoItsFor:
      'First-time home builders, developers and owners who want professional guidance before they spend, from design through construction.',
    processSteps: [process.consultation, process.design, process.costing],
    faqs: [faq.designTime, faq.remoteSupervision, faq.payments],
  },
]
