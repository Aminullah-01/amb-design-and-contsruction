import type { PrivacySection } from '@/types/content'

export const privacyLastUpdated = '12 October 2026'

export const privacyReviewNote =
  'This is a plain-language draft. It should be reviewed by a legal professional before launch.'

export const privacySections: PrivacySection[] = [
  {
    id: 'about-this-policy',
    title: 'About this policy',
    blocks: [
      { type: 'paragraph', text: 'This policy explains, in plain language, how this website handles your personal information. It applies only to this website.' },
      { type: 'paragraph', text: 'AMB Design and Construction Limited ("AMB", "we", "us") is the company responsible for this website.' },
    ],
  },
  {
    id: 'what-the-website-collects',
    title: 'What the website collects',
    blocks: [
      { type: 'paragraph', text: 'The website itself does not store your personal information. There is no database or server that keeps what you type or send.' },
      {
        type: 'list',
        items: [
          'Quote form: the form prepares a message and opens WhatsApp on your own device. You decide whether to send it. Nothing is sent to or stored by the website.',
          'Phone links: tapping a phone number opens your phone app. The call is handled by your own phone and network, not by the website.',
          'Email links: tapping an email address opens your email app. The message is handled by your own email provider, not by the website.',
          'Analytics (only if enabled): we may collect anonymous usage information such as the pages you view, your device type and your approximate location at country or city level.',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and similar technologies',
    blocks: [
      { type: 'paragraph', text: 'This website does not set advertising or tracking cookies of its own.' },
      {
        type: 'list',
        items: [
          'If Google Analytics is enabled, it may set cookies so we can understand how the site is used.',
          'WhatsApp and Google Maps may set their own cookies when you interact with them.',
          'You can block or delete cookies at any time in your browser settings.',
        ],
      },
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-party services',
    blocks: [
      { type: 'paragraph', text: 'Some features send you to services we do not control. Their own privacy policies apply.' },
      {
        type: 'list',
        items: [
          'WhatsApp (Meta): used for the WhatsApp buttons and the quote form. Messages you choose to send are handled by WhatsApp.',
          'Google Maps: if a map or "Get directions" link is shown, Google may process data when you use it.',
          'Analytics: if enabled, a service such as Google Analytics may process usage data on our behalf.',
        ],
      },
    ],
  },
  {
    id: 'how-long-we-keep-information',
    title: 'How long we keep information',
    blocks: [
      { type: 'paragraph', text: 'Because the website does not store the quote form or your details, there is nothing for us to keep from the website itself.' },
      { type: 'paragraph', text: 'If you contact us by WhatsApp, phone or email, we keep that conversation only for as long as we need it to answer you and manage any project. You can ask us to delete it at any time.' },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights under the Nigeria Data Protection Act',
    blocks: [
      { type: 'paragraph', text: 'The Nigeria Data Protection Act gives you rights over your personal information. These include:' },
      {
        type: 'list',
        items: [
          'The right to be informed about how your information is used.',
          'The right to access the personal information we hold about you.',
          'The right to ask us to correct information that is wrong or incomplete.',
          'The right to ask us to delete your information.',
          'The right to restrict or object to how your information is used.',
          'The right to receive your information in a portable format.',
          'The right to lodge a complaint with the Nigeria Data Protection Commission (NDPC).',
        ],
      },
      { type: 'paragraph', text: 'To use any of these rights, contact us using the details below.' },
    ],
  },
  {
    id: 'changes-to-this-policy',
    title: 'Changes to this policy',
    blocks: [
      { type: 'paragraph', text: 'We may update this policy from time to time. The "Last updated" date at the top of this page shows when it last changed.' },
    ],
  },
  {
    id: 'how-to-contact-us',
    title: 'How to contact us',
    blocks: [
      { type: 'paragraph', text: 'If you have a question about this policy or about your personal information, contact us using the details below or through our contact page.' },
    ],
  },
]
