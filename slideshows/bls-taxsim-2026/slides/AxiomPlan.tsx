import { IconChevronRight } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type AxiomPlan = NonNullable<BlsSlideContent['axiomPlan']>;

const TONES: Record<AxiomPlan['stages'][number]['tone'], { band: string; label: string }> = {
  now: { band: 'bg-pe-teal', label: 'text-pe-teal' },
  next: { band: 'bg-pe-700', label: 'text-pe-700' },
  always: { band: 'bg-pe-dark', label: 'text-pe-dark' },
};

/**
 * The transition to Axiom in three stages, left to right: what runs today,
 * what comes next, and what stays the same throughout.
 */
export default function AxiomPlanSlide({ plan }: { plan: AxiomPlan }) {
  return (
    <div className="mt-4 space-y-5 text-pe-dark [@media(max-height:740px)]:[zoom:0.9]">
      {plan.intro && <p className="max-w-6xl text-xl leading-snug">{plan.intro}</p>}

      <div className="flex items-stretch gap-2">
        {plan.stages.map((stage, index) => (
          <div key={stage.title} className="flex flex-1 items-center gap-2">
            <div className="flex h-full flex-1 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className={`h-1.5 ${TONES[stage.tone].band}`} />
              <div className="flex flex-1 flex-col px-5 py-4">
                <p className={`text-sm font-semibold uppercase tracking-wider ${TONES[stage.tone].label}`}>{stage.label}</p>
                <p className="mt-1 text-xl font-semibold leading-snug">{stage.title}</p>
                <ul className="mt-3 space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="relative pl-4 text-base leading-snug text-gray-700">
                      <span className={`absolute left-0 top-2 h-1.5 w-1.5 rounded-full ${TONES[stage.tone].band}`} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {index < plan.stages.length - 1 && (
              <IconChevronRight className="shrink-0 text-pe-teal" size={24} stroke={2.5} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {plan.takeaway && <p className="max-w-6xl text-xl font-medium leading-snug">{plan.takeaway}</p>}
      {plan.footnote && <p className="text-sm leading-snug text-gray-500">{plan.footnote}</p>}
    </div>
  );
}
