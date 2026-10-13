import type { BlsSlideContent } from '../content';

type CeInputs = NonNullable<BlsSlideContent['ceInputs']>;

function Chips({ names, className }: { names: string[]; className: string }) {
  return (
    <div className="flex flex-wrap gap-1">
      {names.map((name) => (
        <span key={name} className={`rounded-md px-1.5 py-0.5 font-mono text-xs lg:text-[13px] ${className}`}>
          {name}
        </span>
      ))}
    </div>
  );
}

/** One row per input area: the CE variables, the PolicyEngine inputs they feed, what PolicyEngine does with them, and TAXSIM's limit. */
export default function CeInputsTable({ table }: { table: CeInputs }) {
  const [ceLabel, peLabel, useLabel, taxsimLabel] = table.columns;
  return (
    <div className="mt-3 text-pe-dark lg:[@media(min-height:741px)_and_(max-height:820px)]:[zoom:0.88] max-lg:[@media(max-height:820px)]:[zoom:0.8] [@media(max-height:740px)]:[zoom:0.8]">
      <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1.05fr)_minmax(0,1.5fr)_minmax(0,1fr)] gap-x-5">
        {[ceLabel, peLabel, useLabel, taxsimLabel].map((label, index) => (
          <p
            key={label}
            className={`border-b-2 pb-2 text-xs font-semibold uppercase tracking-wider lg:text-sm ${
              index === 1 || index === 2 ? 'border-pe-teal text-teal-700' : 'border-gray-300 text-gray-500'
            }`}
          >
            {label}
          </p>
        ))}
        {table.rows.map((row) => (
          <div key={row.area} className="col-span-4 grid grid-cols-subgrid items-center border-b border-gray-200 py-2.5 [@media(max-height:820px)]:py-1.5">
            <div>
              <p className="text-base font-semibold leading-snug lg:text-lg">{row.area}</p>
              <div className="mt-1">
                <Chips names={row.ce} className="bg-gray-100 text-gray-700" />
              </div>
            </div>
            <Chips names={row.pe} className="bg-pe-teal/10 text-pe-dark" />
            <p className="text-sm leading-snug lg:text-base">{row.use}</p>
            <p className="text-sm leading-snug text-gray-600 lg:text-base">{row.taxsim}</p>
          </div>
        ))}
      </div>
      {table.source && <p className="mt-3 text-xs text-gray-500 lg:text-sm">{table.source}</p>}
    </div>
  );
}
