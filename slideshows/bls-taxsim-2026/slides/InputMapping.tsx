import type { BlsSlideContent } from '../content';

type Mapping = NonNullable<BlsSlideContent['mapping']>;

/** Rows by general area: the area and its TAXSIM variables on the left, and how the emulator handles them on the right. */
export default function InputMapping({ mapping }: { mapping: Mapping }) {
  return (
    <div className="mt-4 text-pe-dark max-lg:[@media(max-height:820px)]:[zoom:0.88] [@media(max-height:740px)]:[zoom:0.92]">
      <div className="flex flex-col">
        {mapping.rows.map((row) => (
          <div
            key={row.area}
            className="grid grid-cols-[12rem_1fr] items-center gap-x-8 border-t border-gray-200 py-3 last:border-b lg:grid-cols-[15rem_1fr] lg:gap-x-10 lg:py-4 [@media(max-height:820px)]:py-2"
          >
            <div>
              <p className="text-lg font-bold leading-snug">{row.area}</p>
              <p className="mt-0.5 font-mono text-sm leading-snug" style={{ color: 'var(--pe-amber-dark)' }}>{row.taxsim}</p>
            </div>
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
