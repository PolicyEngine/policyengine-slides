import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import {
  BRIDGE_DATA_DATE,
  BRIDGE_END,
  BRIDGE_START,
  BRIDGE_STEPS,
  PAPER_BRIDGE,
} from '../bridgeNumbers';

/** The calculator's bridge as a static horizontal waterfall, for the
 * recording and the PDF. Numbers and their provenance: ../bridgeNumbers.ts. */
type Row = {
  label: string;
  from: number;
  to: number;
  kind: 'total' | 'up' | 'down';
  value: number;
  range?: string;
};

const COLORS: Record<Row['kind'], string> = {
  total: 'var(--pe-dark)',
  up: 'var(--pe-teal)',
  down: 'var(--color-gray-400)',
};

function fmt(value: number): string {
  if (value === 0) return '$0.0';
  return `${value < 0 ? '−' : '+'}$${Math.abs(value).toFixed(1)}`;
}

function buildRows(): Row[] {
  const rows: Row[] = [
    { label: BRIDGE_START.label, from: 0, to: BRIDGE_START.valueB, kind: 'total', value: BRIDGE_START.valueB },
  ];
  let level = BRIDGE_START.valueB;
  for (const step of BRIDGE_STEPS) {
    rows.push({
      label: step.label,
      from: level,
      to: level + step.valueB,
      kind: step.valueB >= 0 ? 'up' : 'down',
      value: step.valueB,
      range: `${fmt(step.minB)} to ${fmt(step.maxB)}`,
    });
    level += step.valueB;
  }
  rows.push({ label: BRIDGE_END.label, from: 0, to: BRIDGE_END.valueB, kind: 'total', value: BRIDGE_END.valueB });
  return rows;
}

const rows = buildRows();
const ends = rows.flatMap((row) => [row.from, row.to]);
const rawLo = Math.min(0, ...ends);
const rawHi = Math.max(0, ...ends);
const pad = (rawHi - rawLo) * 0.03;
const lo = rawLo - pad;
const hi = rawHi + pad;
const pct = (x: number) => ((x - lo) / (hi - lo)) * 100;
const zero = pct(0);

export default function BridgeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What separates the estimates, in one model</SlideTitle>
      </SlideHeader>

      <p className="-mt-6 mb-4 text-lg text-gray-700">
        Net present value as of 2026, same roster, Forbes data of {BRIDGE_DATA_DATE}
      </p>

      <div className="space-y-1">
        <div className="grid grid-cols-[360px_1fr_96px_170px] gap-4 text-sm text-gray-500">
          <span />
          <span />
          <span className="text-right">$ billions</span>
          <span>Range across orders</span>
        </div>
        {rows.map((row) => {
          const left = pct(Math.min(row.from, row.to));
          const width = Math.max(pct(Math.max(row.from, row.to)) - left, 0.4);
          return (
            <div key={row.label} className="grid grid-cols-[360px_1fr_96px_170px] items-center gap-4">
              <span
                className={`text-base leading-tight ${row.kind === 'total' ? 'font-bold text-gray-800' : 'text-gray-700'}`}
              >
                {row.label}
              </span>
              <div className="relative h-8">
                <span
                  className="absolute -top-1 -bottom-1 w-px bg-gray-300"
                  style={{ left: `${zero}%` }}
                  aria-hidden="true"
                />
                <span
                  className="absolute top-1 bottom-1 rounded"
                  style={{ left: `${left}%`, width: `${width}%`, background: COLORS[row.kind] }}
                  aria-hidden="true"
                />
              </div>
              <span
                className={`text-right font-mono text-base ${row.kind === 'total' ? 'font-bold text-gray-800' : 'text-gray-700'}`}
              >
                {fmt(row.value)}
              </span>
              <span className="text-sm text-gray-500">{row.range ?? ''}</span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-gray-500 leading-snug">
        Each bar between the two totals is a Shapley value: the assumption&apos;s effect averaged
        over every order of applying them, so those bars sum to the gap (to within rounding). The numbers move with the
        daily Forbes data; on the working paper&apos;s {PAPER_BRIDGE.date} snapshot the ends were{' '}
        {fmt(PAPER_BRIDGE.startB)} billion and {fmt(PAPER_BRIDGE.endB)} billion.{' '}
        Both ends differ from the published $104 billion and −$38.9 billion (slide 9) because the
        calculator runs both sets of assumptions on one roster and current Forbes data, and takes the
        midpoint of each of Hoover&apos;s ranges instead of averaging 100,000 random draws.
      </p>
    </Slide>
  );
}
