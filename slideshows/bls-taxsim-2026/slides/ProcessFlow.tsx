import { IconChevronRight, IconFileCheck, IconRefresh } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type Process = NonNullable<BlsSlideContent['process']>;

/** A left-to-right sequence of step cards, with an optional loop note. */
export default function ProcessFlow({ process }: { process: Process }) {
  return (
    <div className="mt-4 space-y-6 text-pe-dark">
      {process.intro && <p className="text-xl leading-snug max-w-5xl">{process.intro}</p>}
      <div className="flex items-stretch gap-2">
        {process.steps.map((step, index) => (
          <div key={step.title} className="flex flex-1 items-center gap-2">
            <div className="flex h-full flex-1 flex-col rounded-lg border-l-4 border-pe-teal bg-gray-50 px-4 py-4">
              <p className="font-mono text-sm font-bold text-pe-teal">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-1 text-lg font-semibold leading-snug">{step.title}</p>
              <p className="mt-2 text-base leading-snug text-gray-600">{step.text}</p>
              {step.output && (
                <p className="mt-auto flex items-start gap-2 pt-3 text-sm font-semibold leading-snug text-pe-teal">
                  <IconFileCheck className="mt-px shrink-0" size={16} stroke={2} aria-hidden="true" />
                  {step.output}
                </p>
              )}
            </div>
            {index < process.steps.length - 1 && (
              <IconChevronRight className="shrink-0 text-pe-teal" size={22} stroke={2.5} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
      {process.takeaway && <p className="text-xl leading-snug font-medium max-w-6xl">{process.takeaway}</p>}
      {process.loop && (
        <p className="flex items-center gap-3 text-lg leading-snug">
          <IconRefresh className="shrink-0 text-pe-teal" size={24} stroke={2} aria-hidden="true" />
          {process.loop}
        </p>
      )}
    </div>
  );
}
