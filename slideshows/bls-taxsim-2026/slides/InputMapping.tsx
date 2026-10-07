import { IconAlertCircle, IconArrowRight, IconInfoCircle, IconPlus } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';
import { DeckIcon } from './Visuals';

type Mapping = NonNullable<BlsSlideContent['mapping']>;
type Row = Mapping['rows'][number];

const AMBER_CHIP = { color: 'var(--pe-amber-dark)', background: 'color-mix(in srgb, var(--pe-amber-dark) 12%, transparent)' };

function TaxsimChips({ names }: { names: string[] }) {
  if (names.length === 0) return <span className="text-sm italic text-gray-500">Not reported</span>;
  return (
    <div className="flex flex-wrap gap-1">
      {names.map((name) => (
        <span key={name} className="rounded-md px-2 py-0.5 font-mono text-sm [@media(max-height:820px)]:py-0" style={AMBER_CHIP}>
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

function CardHeader({ row }: { row: Row }) {
  return (
    <p className="flex items-center gap-3 text-lg font-semibold leading-snug">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pe-teal/10 [@media(max-height:820px)]:h-7 [@media(max-height:820px)]:w-7">
        <DeckIcon name={row.icon} size={20} />
      </span>
      {row.area}
    </p>
  );
}

/** Story card: TAXSIM variables (or none), the limit or how the emulator handles it, then the PolicyEngine variables. */
function StoryCard({ row, addLabel, taxsimLabel }: { row: Row; addLabel?: string; taxsimLabel?: string }) {
  return (
    <div
      className={`grid grid-rows-subgrid ${taxsimLabel ? 'row-span-4' : 'row-span-3'} gap-y-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm [@media(max-height:820px)]:gap-y-2 [@media(max-height:820px)]:py-3`}
    >
      <CardHeader row={row} />
      {taxsimLabel && (
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{taxsimLabel}</span>
          <TaxsimChips names={row.taxsim} />
        </div>
      )}
      <p className="flex items-start gap-2 text-sm leading-snug text-gray-700 lg:text-[15px]">
        <IconAlertCircle className="mt-0.5 shrink-0" size={17} stroke={2} style={{ color: 'var(--pe-amber-dark)' }} aria-hidden="true" />
        {row.note}
      </p>
      <div className="rounded-lg bg-pe-teal/10 px-3 py-2.5 [@media(max-height:820px)]:py-1.5">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
          <IconPlus size={14} stroke={2.5} aria-hidden="true" />
          {addLabel}
        </p>
        <div className="mt-1.5 flex flex-wrap items-start gap-1">
          {(row.add ?? []).map((name) => (
            <span key={name} className="rounded-md border border-pe-teal/20 bg-white px-2 py-0.5 font-mono text-[13px] text-pe-dark [@media(max-height:820px)]:py-0">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Output mapping: PolicyEngine concepts joined to TAXSIM variables by an arrow, then a one-line note. */
function MappingCard({ row, output }: { row: Row; output: boolean }) {
  return (
    <div className="row-span-3 grid grid-rows-subgrid gap-y-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm [@media(max-height:820px)]:gap-y-2 [@media(max-height:820px)]:py-3">
      <CardHeader row={row} />
      <div className={`grid items-center gap-x-2.5 ${output ? 'grid-cols-[1fr_auto_auto]' : 'grid-cols-[auto_auto_1fr]'}`}>
        {output ? <PolicyEngineChips names={row.pe} /> : <TaxsimChips names={row.taxsim} />}
        <IconArrowRight className="shrink-0 text-pe-teal" size={18} stroke={2.25} aria-hidden="true" />
        {output ? <TaxsimChips names={row.taxsim} /> : <PolicyEngineChips names={row.pe} />}
      </div>
      <p className="flex items-start gap-2 self-end text-sm leading-snug text-gray-600 lg:text-[15px]">
        <IconInfoCircle className="mt-0.5 shrink-0 text-gray-400" size={16} stroke={2} aria-hidden="true" />
        {row.note}
      </p>
    </div>
  );
}

/**
 * One card per general area, in a three-column grid whose rows line up across cards (CSS subgrid).
 * Input cards with `add` tell a story: TAXSIM variables, the limit, then the PolicyEngine variables that
 * remove it. Output cards join PolicyEngine concepts to TAXSIM variables. The last card states why it matters.
 */
export default function InputMapping({ mapping }: { mapping: Mapping }) {
  const output = mapping.direction === 'output';
  const story = mapping.rows.some((row) => row.add);
  return (
    <div
      className={`mt-4 grid grid-cols-3 gap-x-4 gap-y-4 text-pe-dark lg:gap-x-5 ${
        story
          ? 'lg:[@media(min-height:741px)_and_(max-height:820px)]:[zoom:0.88] max-lg:[@media(max-height:820px)]:[zoom:0.76] [@media(max-height:740px)]:[zoom:0.8]'
          : 'max-lg:[@media(max-height:820px)]:[zoom:0.8]'
      }`}
    >
      {mapping.rows.map((row) =>
        story ? <StoryCard key={row.area} row={row} addLabel={mapping.addLabel} taxsimLabel={mapping.taxsimLabel} /> : <MappingCard key={row.area} row={row} output={output} />,
      )}
      <div className={`${story && mapping.taxsimLabel ? 'row-span-4' : 'row-span-3'} flex flex-col justify-center rounded-xl bg-pe-dark px-6 py-5 text-white`}>
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">{mapping.value.title}</p>
        <p className="mt-2 text-lg font-medium leading-snug">{mapping.value.text}</p>
      </div>
    </div>
  );
}
