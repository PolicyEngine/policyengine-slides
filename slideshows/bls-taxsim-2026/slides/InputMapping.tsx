import { IconArrowRight, IconInfoCircle } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';
import { DeckIcon } from './Visuals';

type Mapping = NonNullable<BlsSlideContent['mapping']>;

function TaxsimChips({ names }: { names: string[] }) {
  if (names.length === 0) return <span className="text-sm italic text-gray-500">Not reported</span>;
  return (
    <div className="flex max-w-[9.5rem] flex-wrap gap-1">
      {names.map((name) => (
        <span
          key={name}
          className="rounded-md px-2 py-0.5 font-mono text-sm"
          style={{ color: 'var(--pe-amber-dark)', background: 'color-mix(in srgb, var(--pe-amber-dark) 12%, transparent)' }}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

function PolicyEngineChips({ names }: { names: string[] }) {
  return (
    <div className="flex flex-col items-start gap-1">
      {names.map((name) => (
        <span key={name} className="rounded-md bg-pe-teal/10 px-2 py-0.5 text-sm font-medium leading-snug text-pe-dark">
          {name}
        </span>
      ))}
    </div>
  );
}

/**
 * One card per general area: TAXSIM variables and PolicyEngine concepts as chips joined by an arrow
 * (TAXSIM to PolicyEngine for inputs, PolicyEngine to TAXSIM for outputs), with a one-line note.
 * The last card states why it matters.
 */
export default function InputMapping({ mapping }: { mapping: Mapping }) {
  const output = mapping.direction === 'output';
  return (
    <div
      className={`mt-4 grid grid-cols-3 gap-4 text-pe-dark lg:gap-5 ${
        output
          ? 'max-lg:[@media(max-height:820px)]:[zoom:0.8]'
          : 'lg:[@media(min-height:741px)_and_(max-height:820px)]:[zoom:0.92] max-lg:[@media(max-height:820px)]:[zoom:0.76] [@media(max-height:740px)]:[zoom:0.84]'
      }`}
    >
      {mapping.rows.map((row) => (
        <div key={row.area} className="flex flex-col rounded-lg border-l-4 border-pe-teal bg-gray-50 px-5 py-4 [@media(max-height:820px)]:py-3">
          <p className="flex items-center gap-2.5 text-lg font-semibold leading-snug">
            <DeckIcon name={row.icon} size={22} />
            {row.area}
          </p>
          <div className={`mt-3 grid items-center gap-x-2.5 ${output ? 'grid-cols-[1fr_auto_auto]' : 'grid-cols-[auto_auto_1fr]'}`}>
            {output ? <PolicyEngineChips names={row.pe} /> : <TaxsimChips names={row.taxsim} />}
            <IconArrowRight className="shrink-0 text-pe-teal" size={18} stroke={2.25} aria-hidden="true" />
            {output ? <TaxsimChips names={row.taxsim} /> : <PolicyEngineChips names={row.pe} />}
          </div>
          <p className="mt-auto flex items-start gap-2 pt-3 text-sm leading-snug text-gray-600 lg:text-[15px]">
            <IconInfoCircle className="mt-0.5 shrink-0 text-gray-400" size={16} stroke={2} aria-hidden="true" />
            {row.note}
          </p>
        </div>
      ))}
      <div className="flex flex-col justify-center rounded-lg bg-pe-dark px-5 py-4 text-white">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">{mapping.value.title}</p>
        <p className="mt-2 text-lg font-medium leading-snug">{mapping.value.text}</p>
      </div>
    </div>
  );
}
