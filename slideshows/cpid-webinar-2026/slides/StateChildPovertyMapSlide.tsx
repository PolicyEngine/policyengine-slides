import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/**
 * SPM poverty rate for people under 18 by state, three-year average 2023 to 2025, from
 * P60-290 Table 18 (table_18_spm_opm_state_by_age.xlsx, SPM percent and margin of error
 * columns). United States: 13.5% (±0.3). Tile-grid map; tiles sized equally, so the
 * layout is about position, not area.
 */
const states: { st: string; rate: number; moe: number; col: number; row: number }[] = [
  { st: 'AK', rate: 10.5, moe: 2.1, col: 0, row: 0 },
  { st: 'AL', rate: 15.5, moe: 2.4, col: 6, row: 6 },
  { st: 'AR', rate: 13.3, moe: 2.7, col: 4, row: 5 },
  { st: 'AZ', rate: 13.3, moe: 2.3, col: 1, row: 5 },
  { st: 'CA', rate: 17.9, moe: 1.0, col: 0, row: 4 },
  { st: 'CO', rate: 7.7, moe: 1.8, col: 2, row: 4 },
  { st: 'CT', rate: 12.8, moe: 3.2, col: 9, row: 3 },
  { st: 'DC', rate: 20.3, moe: 3.7, col: 8, row: 5 },
  { st: 'DE', rate: 8.7, moe: 2.6, col: 9, row: 4 },
  { st: 'FL', rate: 18.4, moe: 1.8, col: 7, row: 7 },
  { st: 'GA', rate: 15.1, moe: 2.2, col: 7, row: 6 },
  { st: 'HI', rate: 13.0, moe: 2.6, col: 0, row: 7 },
  { st: 'IA', rate: 8.2, moe: 1.9, col: 4, row: 3 },
  { st: 'ID', rate: 6.5, moe: 1.3, col: 1, row: 2 },
  { st: 'IL', rate: 12.4, moe: 1.6, col: 5, row: 2 },
  { st: 'IN', rate: 10.6, moe: 2.2, col: 5, row: 3 },
  { st: 'KS', rate: 9.7, moe: 2.5, col: 3, row: 5 },
  { st: 'KY', rate: 13.3, moe: 2.9, col: 5, row: 4 },
  { st: 'LA', rate: 20.7, moe: 3.0, col: 4, row: 6 },
  { st: 'MA', rate: 12.8, moe: 2.0, col: 9, row: 2 },
  { st: 'MD', rate: 10.7, moe: 2.5, col: 8, row: 4 },
  { st: 'ME', rate: 6.5, moe: 2.3, col: 10, row: 0 },
  { st: 'MI', rate: 10.3, moe: 1.9, col: 6, row: 2 },
  { st: 'MN', rate: 6.9, moe: 1.9, col: 4, row: 2 },
  { st: 'MO', rate: 9.7, moe: 2.3, col: 4, row: 4 },
  { st: 'MS', rate: 19.1, moe: 2.6, col: 5, row: 6 },
  { st: 'MT', rate: 9.3, moe: 2.3, col: 2, row: 2 },
  { st: 'NC', rate: 14.4, moe: 2.2, col: 6, row: 5 },
  { st: 'ND', rate: 10.3, moe: 2.1, col: 3, row: 2 },
  { st: 'NE', rate: 7.1, moe: 1.9, col: 3, row: 4 },
  { st: 'NH', rate: 7.5, moe: 2.4, col: 10, row: 1 },
  { st: 'NJ', rate: 13.3, moe: 1.9, col: 8, row: 3 },
  { st: 'NM', rate: 10.9, moe: 2.1, col: 2, row: 5 },
  { st: 'NV', rate: 15.0, moe: 2.5, col: 1, row: 3 },
  { st: 'NY', rate: 16.2, moe: 1.9, col: 8, row: 2 },
  { st: 'OH', rate: 12.3, moe: 2.1, col: 6, row: 3 },
  { st: 'OK', rate: 9.9, moe: 2.0, col: 3, row: 6 },
  { st: 'OR', rate: 11.0, moe: 2.4, col: 0, row: 3 },
  { st: 'PA', rate: 11.1, moe: 2.0, col: 7, row: 3 },
  { st: 'RI', rate: 8.4, moe: 2.3, col: 10, row: 3 },
  { st: 'SC', rate: 11.1, moe: 2.1, col: 7, row: 5 },
  { st: 'SD', rate: 7.8, moe: 2.2, col: 3, row: 3 },
  { st: 'TN', rate: 10.0, moe: 1.7, col: 5, row: 5 },
  { st: 'TX', rate: 16.1, moe: 1.3, col: 3, row: 7 },
  { st: 'UT', rate: 7.3, moe: 1.6, col: 1, row: 4 },
  { st: 'VA', rate: 12.1, moe: 2.4, col: 7, row: 4 },
  { st: 'VT', rate: 8.3, moe: 2.5, col: 9, row: 1 },
  { st: 'WA', rate: 9.3, moe: 1.9, col: 0, row: 2 },
  { st: 'WI', rate: 7.3, moe: 1.7, col: 5, row: 1 },
  { st: 'WV', rate: 11.3, moe: 2.4, col: 6, row: 4 },
  { st: 'WY', rate: 6.5, moe: 1.4, col: 2, row: 3 },
];

const bins: { max: number; label: string; bg: string; fg: string }[] = [
  { max: 9, label: 'under 9%', bg: 'rgba(44,110,107,0.12)', fg: '#1f2937' },
  { max: 12, label: '9 to 12%', bg: 'rgba(44,110,107,0.30)', fg: '#1f2937' },
  { max: 15, label: '12 to 15%', bg: 'rgba(44,110,107,0.52)', fg: '#ffffff' },
  { max: 18, label: '15 to 18%', bg: 'rgba(44,110,107,0.74)', fg: '#ffffff' },
  { max: 100, label: '18% and up', bg: 'rgba(44,110,107,1)', fg: '#ffffff' },
];
const binFor = (rate: number) => bins.find((b) => rate < b.max) ?? bins[bins.length - 1];

export default function StateChildPovertyMapSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>SPM child poverty by state, 2023 to 2025 average</SlideTitle>
      </SlideHeader>
      <div className="mt-2 flex items-start gap-8">
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: 'repeat(11, 96px)', gridTemplateRows: 'repeat(8, 58px)' }}
        >
          {states.map((s) => {
            const b = binFor(s.rate);
            return (
              <div
                key={s.st}
                className="rounded-md flex flex-col items-center justify-center leading-tight"
                style={{ gridColumn: s.col + 1, gridRow: s.row + 1, background: b.bg, color: b.fg }}
                title={`${s.st}: ${s.rate}% (±${s.moe})`}
              >
                <span className="text-sm font-semibold">{s.st}</span>
                <span className="text-sm">{s.rate.toFixed(1)}</span>
              </div>
            );
          })}
        </div>
        <div className="content-card px-5 py-4 min-w-[260px]">
          <p className="text-base font-semibold text-gray-800 mb-2">United States: 13.5%</p>
          <ul className="space-y-1.5">
            {bins.map((b) => (
              <li key={b.label} className="flex items-center gap-3 text-base text-gray-700">
                <span className="inline-block w-5 h-5 rounded" style={{ background: b.bg }} />
                {b.label}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-gray-500">
            Three-year averages, so states are comparable at CPS sample sizes; margins of error run 1 to 3 points for most states.
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Source: U.S. Census Bureau, Poverty in the United States: 2025, Table 18. Percent of people under 18 below the SPM threshold.
      </p>
    </Slide>
  );
}
