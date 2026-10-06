import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { ModelFootnote } from '../components/Footnote';
import { usd0, usd2 } from '../components/plans';
import floor from '../data/ten_dollar_floor.json';

const MAX = 80000;
const PLANS = ['SAVE (if available)', 'IBR', 'IBR, new borrower'];
const COLORS: Record<string, string> = {
  'SAVE (if available)': 'var(--pe-amber)',
  IBR: 'var(--color-gray-700)',
  'IBR, new borrower': 'var(--color-gray-500)',
};

export default function FloorSlide() {
  const households = Array.from(new Set(floor.map((r) => r.household)));
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Measure 4: $0 under a legacy plan, $10+ under RAP</SlideTitle>
      </SlideHeader>
      <p className="-mt-4 mb-3 text-xl text-gray-700">
        Incomes at which the legacy plan charges $0 while RAP charges at least $10 a month
      </p>
      <div className="space-y-4">
        {households.map((h) => (
          <div key={h}>
            <p className="text-lg font-semibold text-gray-800 mb-2">{h}</p>
            <div className="space-y-1.5">
              {PLANS.map((p) => {
                const r = floor.find((x) => x.household === h && x.legacy_plan === p)!;
                return (
                  <div key={p} className="grid grid-cols-[13rem_1fr_19rem] items-center gap-3">
                    <span className="text-base text-gray-700">{p}</span>
                    <div className="h-5 bg-gray-100 rounded" title={`$0 to ${usd0(r.agi_to)}`}>
                      <div className="h-5 rounded" style={{ width: `${(r.agi_to / MAX) * 100}%`, background: COLORS[p] }} />
                    </div>
                    <span className="text-base text-gray-700 tabular-nums">
                      AGI up to {usd0(r.agi_to)}; RAP there {usd2(r.rap_payment_at_top_of_range)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-500">Bars run from $0 to $80,000 of AGI.</p>
      <ModelFootnote extra="Ranges are on a $100 grid of AGI." />
    </Slide>
  );
}
