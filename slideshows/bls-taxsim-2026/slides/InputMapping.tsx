import type { BlsSlideContent } from '../content';

type Mapping = NonNullable<BlsSlideContent['mapping']>;

/** Rows by general area: the TAXSIM variables, then one sentence on how the emulator handles them and what follows. */
export default function InputMapping({ mapping }: { mapping: Mapping }) {
  return (
    <div className="mt-4 text-pe-dark max-lg:[@media(max-height:820px)]:[zoom:0.88] [@media(max-height:740px)]:[zoom:0.92]">
      <div className="grid grid-cols-[9.5rem_minmax(0,14rem)_1fr] gap-x-6 lg:grid-cols-[11rem_minmax(0,17rem)_1fr] lg:gap-x-8">
        {mapping.rows.map((row) => (
          <div key={row.area} className="col-span-3 grid grid-cols-subgrid items-center border-t border-gray-200 py-3 last:border-b lg:py-4 [@media(max-height:820px)]:py-2.5">
            <p className="text-lg font-bold leading-snug">{row.area}</p>
            <p className="font-mono text-sm leading-snug lg:text-[15px]" style={{ color: 'var(--pe-amber-dark)' }}>{row.taxsim}</p>
            <p className="text-base leading-snug text-gray-700 lg:text-lg">{row.text}</p>
          </div>
        ))}
      </div>
      {mapping.takeaway && (
        <p className="mt-5 border-l-4 border-pe-teal pl-4 text-lg font-medium leading-snug lg:text-xl">{mapping.takeaway}</p>
      )}
    </div>
  );
}
