import { useState, type ChangeEvent, type FormEvent } from 'react'
import { clsx } from 'clsx'
import { CheckCircle2, Copy, Send } from 'lucide-react'
import SocialIcon from '@/components/ui/SocialIcon'
import { services } from '@/content/services'
import { whatsappUrl } from '@/lib/contact'
import { track } from '@/lib/analytics'

type PreferredContact = 'Call' | 'WhatsApp' | 'Email'

type FormValues = {
  name: string
  phone: string
  service: string
  location: string
  budget: string
  details: string
  preferredContact: PreferredContact
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const EMPTY_VALUES: FormValues = {
  name: '',
  phone: '',
  service: '',
  location: '',
  budget: '',
  details: '',
  preferredContact: 'WhatsApp',
}

const PREFERRED_OPTIONS: PreferredContact[] = ['Call', 'WhatsApp', 'Email']

// [CONFIRM] Budget bands are indicative and should be confirmed with the owner.
const BUDGET_OPTIONS = [
  'Not sure yet',
  'Under ₦10 million',
  '₦10 – ₦25 million',
  '₦25 – ₦50 million',
  '₦50 – ₦100 million',
  'Over ₦100 million',
]

const fieldClass = (invalid: boolean) =>
  clsx(
    'w-full rounded border bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-600 focus:outline-none focus:ring-2',
    invalid
      ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
      : 'border-line focus:border-blue-600 focus:ring-blue-600',
  )

function buildMessage(values: FormValues): string {
  const lines = [
    'Hello AMB Design and Construction, I would like a quote.',
    '',
    `Name: ${values.name}`,
    `Phone/WhatsApp: ${values.phone}`,
    `Service needed: ${values.service}`,
    `Project location: ${values.location}`,
  ]
  if (values.budget) lines.push(`Estimated budget: ${values.budget}`)
  lines.push(`Preferred contact: ${values.preferredContact}`)
  lines.push('', 'Project details:', values.details)
  return lines.join('\n')
}

export default function QuoteRequestForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const update =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
    }

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (!values.name.trim()) next.name = 'Please enter your full name.'
    if (!values.phone.trim()) next.phone = 'Please enter your phone or WhatsApp number.'
    if (!values.service) next.service = 'Please choose the service you need.'
    if (!values.location.trim()) next.location = 'Please enter the project location.'
    if (!values.details.trim()) next.details = 'Please tell us a little about the project.'
    return next
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)

    const firstError = (Object.keys(next) as (keyof FormValues)[])[0]
    if (firstError) {
      document.getElementById(`quote-${firstError}`)?.focus()
      return
    }

    const message = buildMessage(values)
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    track('quote_form_submit', { service: values.service, preferred_contact: values.preferredContact })
    setSubmittedMessage(message)
    setCopied(false)
  }

  const handleCopy = async () => {
    if (!submittedMessage) return
    try {
      await navigator.clipboard.writeText(submittedMessage)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const handleReset = () => {
    setValues(EMPTY_VALUES)
    setErrors({})
    setSubmittedMessage(null)
    setCopied(false)
  }

  const errorCount = Object.values(errors).filter(Boolean).length

  if (submittedMessage) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-heading text-xl font-bold text-ink-900 md:text-2xl">
          WhatsApp has opened with your message
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-600 md:text-base">
          A new tab should have opened with your message ready to send. Press send in WhatsApp to
          reach us. Nothing is sent or stored by this website.
        </p>
        <p className="mt-4 text-sm text-ink-600 md:text-base">
          No WhatsApp? Copy the message below and send it to us another way.
        </p>

        <pre className="mt-4 overflow-x-auto rounded bg-surface p-4 text-sm whitespace-pre-wrap text-ink-600">
          {submittedMessage}
        </pre>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex h-12 items-center justify-center gap-2 rounded border border-blue-700 px-6 font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Copy className="h-4 w-4" aria-hidden="true" />
            {copied ? 'Message copied' : 'Copy message'}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-semibold text-blue-700 transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Send another request
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8"
    >
      <div role="alert" aria-live="assertive" className="sr-only">
        {errorCount > 0
          ? `${errorCount} field${errorCount > 1 ? 's' : ''} need attention. Please review the highlighted fields and try again.`
          : ''}
      </div>
      <h2 className="font-heading text-xl font-bold text-ink-900 md:text-2xl">
        Request a free quote
      </h2>
      <p className="mt-2 text-sm text-ink-600">
        Fill this in and we will open WhatsApp with a ready-to-send message.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-semibold text-ink-900">
            Full name <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'quote-name-error' : undefined}
            className={clsx('mt-1.5', fieldClass(Boolean(errors.name)))}
          />
          {errors.name ? (
            <p id="quote-name-error" className="mt-1.5 text-sm text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="quote-phone" className="block text-sm font-semibold text-ink-900">
            Phone / WhatsApp number <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'quote-phone-error' : undefined}
            className={clsx('mt-1.5', fieldClass(Boolean(errors.phone)))}
          />
          {errors.phone ? (
            <p id="quote-phone-error" className="mt-1.5 text-sm text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="quote-service" className="block text-sm font-semibold text-ink-900">
            Service needed <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            id="quote-service"
            name="service"
            required
            value={values.service}
            onChange={update('service')}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'quote-service-error' : undefined}
            className={clsx('mt-1.5', fieldClass(Boolean(errors.service)))}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="quote-service-error" className="mt-1.5 text-sm text-red-600">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="quote-location" className="block text-sm font-semibold text-ink-900">
            Project location <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="quote-location"
            name="location"
            type="text"
            required
            autoComplete="address-level2"
            value={values.location}
            onChange={update('location')}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? 'quote-location-error' : undefined}
            className={clsx('mt-1.5', fieldClass(Boolean(errors.location)))}
          />
          {errors.location ? (
            <p id="quote-location-error" className="mt-1.5 text-sm text-red-600">
              {errors.location}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="quote-budget" className="block text-sm font-semibold text-ink-900">
            Estimated budget range <span className="font-normal text-ink-600">(optional)</span>
          </label>
          <select
            id="quote-budget"
            name="budget"
            value={values.budget}
            onChange={update('budget')}
            className={clsx('mt-1.5', fieldClass(false))}
          >
            <option value="">Select a range</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quote-details" className="block text-sm font-semibold text-ink-900">
            Project details <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <textarea
            id="quote-details"
            name="details"
            rows={5}
            required
            value={values.details}
            onChange={update('details')}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={errors.details ? 'quote-details-error' : undefined}
            placeholder="What would you like to build or change?"
            className={clsx('mt-1.5', fieldClass(Boolean(errors.details)))}
          />
          {errors.details ? (
            <p id="quote-details-error" className="mt-1.5 text-sm text-red-600">
              {errors.details}
            </p>
          ) : null}
        </div>

        <fieldset>
          <legend className="block text-sm font-semibold text-ink-900">
            Preferred contact method
          </legend>
          <div className="mt-2 flex flex-wrap gap-5">
            {PREFERRED_OPTIONS.map((option) => (
              <label key={option} className="inline-flex items-center gap-2 text-sm text-ink-900">
                <input
                  type="radio"
                  name="preferredContact"
                  value={option}
                  checked={values.preferredContact === option}
                  onChange={update('preferredContact')}
                  className="h-4 w-4 accent-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded bg-blue-700 px-8 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
      >
        <Send className="h-5 w-5" aria-hidden="true" />
        Send on WhatsApp
      </button>

      <p className="mt-4 flex items-start gap-2 text-sm text-ink-600">
        <SocialIcon name="whatsapp" className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
        This opens WhatsApp with your message ready to send. Nothing is sent or stored by this
        website.
      </p>
    </form>
  )
}
