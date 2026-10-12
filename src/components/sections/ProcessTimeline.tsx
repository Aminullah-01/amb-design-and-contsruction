import { clsx } from 'clsx'
import { Check } from 'lucide-react'
import ProcessIcon from '@/components/ui/ProcessIcon'
import { processStages } from '@/content/process'

type ProcessTimelineProps = {
  variant?: 'compact' | 'full'
  className?: string
}

export default function ProcessTimeline({ variant = 'compact', className }: ProcessTimelineProps) {
  const full = variant === 'full'

  return (
    <div className={clsx('relative', className)}>
      <span
        className="pointer-events-none absolute top-7 right-[8.333%] left-[8.333%] hidden h-0.5 bg-blue-500/25 lg:block"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute top-7 bottom-7 left-7 w-0.5 bg-blue-500/25 lg:hidden"
        aria-hidden="true"
      />

      <ol
        className={clsx(
          variant === 'compact' && 'space-y-10 lg:grid lg:grid-cols-6 lg:gap-6 lg:space-y-0',
          full && 'space-y-12',
        )}
      >
        {processStages.map((step, index) => (
          <li
            key={step.title}
            className={clsx(
              'relative flex gap-4',
              !full && 'lg:flex-col lg:items-center lg:gap-0 lg:text-center',
            )}
          >
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
              <ProcessIcon name={step.icon} className="h-6 w-6" />
              <span className="absolute -top-1.5 -right-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[11px] font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className={clsx(!full && 'lg:mt-5')}>
              <h3 className="font-heading text-lg font-bold text-ink-900">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.short}</p>

              {full && step.outputs.length > 0 ? (
                <ul className="mt-3 space-y-1.5">
                  {step.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-2 text-sm text-ink-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                      {output}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}