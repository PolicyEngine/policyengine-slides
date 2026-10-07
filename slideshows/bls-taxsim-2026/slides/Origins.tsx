import { IconChevronRight } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type Origins = NonNullable<BlsSlideContent['origins']>;

/** How the collaboration started: the testing process before the emulator, then the milestones that led to the agreement. */
export default function OriginsSlide({ origins }: { origins: Origins }) {
  return (
    <div className="mt-2 flex flex-col gap-7 text-pe-dark lg:gap-10 [@media(max-height:820px)]:gap-6 max-lg:[@media(max-height:820px)]:[zoom:0.9] [@media(max-height:740px)]:[zoom:0.94]">
      <section className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="text-xl font-bold lg:text-2xl">{origins.processTitle}</h3>
          <p className="text-base text-gray-600 lg:text-lg">{origins.processDetail}</p>
        </div>
        <div className="flex items-stretch gap-2">
          {origins.steps.map((step, index) => (
            <div key={step.title} className="flex flex-1 items-center gap-2">
              <div className="flex h-full flex-1 flex-col rounded-lg border-l-4 border-pe-teal bg-gray-50 px-4 py-4">
                <p className="font-mono text-sm font-bold text-pe-teal">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-1 text-lg font-semibold leading-snug">{step.title}</p>
                <p className="mt-1.5 text-base leading-snug text-gray-600">{step.text}</p>
              </div>
              {index < origins.steps.length - 1 && (
                <IconChevronRight className="shrink-0 text-pe-teal" size={22} stroke={2.5} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-xl font-bold lg:text-2xl">{origins.milestonesTitle}</h3>
        <ol className="grid gap-4" style={{ gridTemplateColumns: `repeat(${origins.milestones.length}, minmax(0, 1fr))` }}>
          {origins.milestones.map((milestone) => (
            <li key={milestone.title} className="flex flex-col rounded-lg bg-pe-dark px-5 py-4 text-white">
              <p className="font-mono text-2xl font-bold text-teal-300">{milestone.when}</p>
              <p className="mt-1 text-lg font-semibold leading-snug">{milestone.title}</p>
              <p className="mt-1.5 text-base leading-snug text-white/75">{milestone.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
