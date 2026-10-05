import { IconChevronRight, IconExternalLink, IconFileCheck, IconRefresh } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type Process = NonNullable<BlsSlideContent['process']>;

/**
 * A left-to-right sequence of steps, with optional headline figures above
 * and real examples below. With examples, the steps shrink to a one-line strip.
 */
export default function ProcessFlow({ process }: { process: Process }) {
  const compact = Boolean(process.examples);
  return (
    <div className="mt-4 space-y-5 text-pe-dark">
      {process.intro && <p className="text-xl leading-snug max-w-6xl">{process.intro}</p>}

      {process.stats && (
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${process.stats.length}, minmax(0, 1fr))` }}>
          {process.stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-pe-dark px-5 py-3 text-white">
              <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
              <p className="text-sm leading-snug text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {compact ? (
        <div className="flex flex-wrap items-center gap-2">
          {process.steps.map((step, index) => (
            <div key={step.title} className="flex items-center gap-2">
              <span className="rounded-full border border-pe-teal/40 bg-pe-teal/10 px-4 py-1.5 text-base font-semibold">
                <span className="mr-2 font-mono text-sm text-pe-teal">{String(index + 1).padStart(2, '0')}</span>
                {step.title}
              </span>
              {index < process.steps.length - 1 && (
                <IconChevronRight className="shrink-0 text-pe-teal" size={20} stroke={2.5} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      ) : (
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
      )}

      {process.examples && (
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${process.examples.length}, minmax(0, 1fr))` }}>
          {process.examples.map((example) => (
            <a
              key={example.url}
              href={example.url}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto flex flex-col rounded-lg border-l-4 border-pe-teal bg-gray-50 px-5 py-4 hover:bg-pe-teal/10"
            >
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <span className="font-mono font-semibold text-pe-teal">{example.tag}</span>
                <IconExternalLink size={14} stroke={2} aria-hidden="true" />
              </p>
              <p className="mt-1 text-lg font-semibold leading-snug">{example.title}</p>
              <p className="mt-1 text-base leading-snug text-gray-600">{example.text}</p>
              <p className="mt-auto pt-3 text-base font-semibold leading-snug text-pe-teal">{example.outcome}</p>
            </a>
          ))}
        </div>
      )}

      {process.sides && (
        <div className="grid grid-cols-2 gap-5">
          {process.sides.map((side) => (
            <div key={side.title} className="rounded-lg bg-pe-dark px-5 py-4 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">{side.title}</p>
              <ul className="mt-2 space-y-1.5">
                {side.items.map((item) => (
                  <li key={item} className="relative pl-4 text-base leading-snug">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-teal-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

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
