import { IconExternalLink } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type Origins = NonNullable<BlsSlideContent['origins']>;

/** YAML with `#` comments dimmed, as in the issue it comes from. */
function Yaml({ code }: { code: string }) {
  return (
    <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-white lg:text-[13px]">
      {code.split('\n').map((line, index) => {
        const hash = line.indexOf('#');
        return (
          <span key={index}>
            {hash >= 0 ? (
              <>
                {line.slice(0, hash)}
                <span className="text-white/45">{line.slice(hash)}</span>
              </>
            ) : (
              line
            )}
            {'\n'}
          </span>
        );
      })}
    </pre>
  );
}

/**
 * How the collaboration started: the record-by-record testing before the emulator, with a real test from
 * the policyengine-us tracker beside it, then the milestones that led to the agreement.
 */
export default function OriginsSlide({ origins }: { origins: Origins }) {
  return (
    <div className="mt-2 flex flex-col gap-6 text-pe-dark lg:gap-7 [@media(max-height:820px)]:gap-4 lg:[@media(min-height:741px)_and_(max-height:820px)]:[zoom:0.92] max-lg:[@media(max-height:820px)]:[zoom:0.84] [@media(max-height:740px)]:[zoom:0.84]">
      <section className="grid grid-cols-[1.05fr_0.95fr] items-stretch gap-8">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-xl font-bold lg:text-2xl">{origins.processTitle}</h3>
            <p className="text-base text-gray-600">{origins.processDetail}</p>
          </div>
          <ol className="mt-3 flex flex-1 flex-col justify-between gap-1.5">
            {origins.steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-3 rounded-lg border-l-4 border-pe-teal bg-gray-50 px-4 py-2 [@media(max-height:820px)]:py-1.5">
                <span className="font-mono text-sm font-bold leading-6 text-pe-teal">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-base leading-snug">
                  <span className="font-semibold">{step.title}.</span> <span className="text-gray-600">{step.text}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>

        {origins.example && (
          <a
            href={origins.example.url}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto flex flex-col overflow-hidden rounded-lg bg-pe-darker hover:ring-2 hover:ring-pe-teal/50"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 lg:text-sm">
              <span className="font-semibold text-teal-300">{origins.example.title}</span>
              <span className="flex items-center gap-1.5">
                {origins.example.source}
                <IconExternalLink size={14} stroke={2} aria-hidden="true" />
              </span>
            </div>
            <div className="flex-1 px-4 py-3">
              <Yaml code={origins.example.code} />
            </div>
          </a>
        )}
      </section>

      <section className="flex flex-col gap-2.5">
        <h3 className="text-lg font-bold lg:text-xl">{origins.milestonesTitle}</h3>
        <ol className="grid gap-4" style={{ gridTemplateColumns: `repeat(${origins.milestones.length}, minmax(0, 1fr))` }}>
          {origins.milestones.map((milestone) => (
            <li key={milestone.title} className="flex flex-col rounded-lg bg-pe-dark px-4 py-3 text-white">
              <p className="flex items-baseline gap-2 text-base font-semibold leading-snug lg:text-lg">
                <span className="font-mono font-bold text-teal-300">{milestone.when}</span>
                {milestone.title}
              </p>
              <p className="mt-1 text-sm leading-snug text-white/75">{milestone.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
