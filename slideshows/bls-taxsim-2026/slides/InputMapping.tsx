import type { BlsSlideContent } from '../content';

type Mapping = NonNullable<BlsSlideContent['mapping']>;

/** Rows by general area: the TAXSIM variables, how the emulator maps them, and the limits or conventions that follow. */
export default function InputMapping({ mapping }: { mapping: Mapping }) {
  const [taxsimLabel, emulatorLabel, limitLabel] = mapping.columns;
  return (
    <div className="mt-2 text-pe-dark max-lg:[@media(max-height:820px)]:[zoom:0.88] [@media(max-height:740px)]:[zoom:0.92]">
      <div className="grid grid-cols-[9.5rem_1fr_1.25fr_1.35fr] gap-x-4 lg:grid-cols-[11rem_1fr_1.25fr_1.35fr] lg:gap-x-5">
        <div />
        <p className="flex items-center gap-2 pb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--pe-amber-dark)' }} aria-hidden="true" />
          {taxsimLabel}
        </p>
        <p className="flex items-center gap-2 pb-2 text-sm font-semibold uppercase tracking-wider text-teal-700">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--pe-teal-light)' }} aria-hidden="true" />
          {emulatorLabel}
        </p>
        <p className="pb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">{limitLabel}</p>

        {mapping.rows.map((row) => (
          <div key={row.area} className="col-span-4 grid grid-cols-subgrid items-stretch border-t border-gray-200 py-2.5 lg:py-3 [@media(max-height:820px)]:py-1.5">
            <p className="self-center text-lg font-bold leading-snug">{row.area}</p>
            <p className="self-center font-mono text-sm leading-snug text-gray-700 lg:text-[15px]">{row.taxsim}</p>
            <p className="self-center text-base leading-snug">{row.emulator}</p>
            <p className="rounded-md border-l-4 border-gray-300 bg-gray-50 px-3 py-2 text-base leading-snug text-gray-700 [@media(max-height:820px)]:py-1.5">{row.limit}</p>
          </div>
        ))}
      </div>
      {mapping.takeaway && <p className="mt-4 text-lg leading-snug text-gray-700 lg:text-xl">{mapping.takeaway}</p>}
    </div>
  );
}
