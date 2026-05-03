import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { Kicker } from './WorkshopComponents';

const markets = [
  {
    venue: 'Metaculus',
    venueDetail: '1,900 forecasters',
    question: 'When will AGI be announced?',
    point: 'Jul 2032',
    note: 'Community median; tails span 2027 to 2065',
  },
  {
    venue: 'Metaculus',
    venueDetail: '32 forecasters',
    question: '20M+ Americans laid off in any quarter before 2030',
    point: '20%',
    note: 'community probability',
  },
  {
    venue: 'Manifold',
    venueDetail: '169 traders, $34K vol',
    question: 'AI causes US unemployment > 10% before 2030',
    point: '19%',
    note: '',
  },
  {
    venue: 'Manifold',
    venueDetail: '52 traders',
    question: 'AI causes mass unemployment by 2030',
    point: '16%',
    note: '',
  },
  {
    venue: 'Manifold',
    venueDetail: '43 traders',
    question: 'Things basically fine re AI job loss by 2030',
    point: '61%',
    note: 'The "no big deal" scenario also has substantial weight',
  },
];

interface DistRow {
  year: string;
  q1: number;
  median: number;
  q3: number;
}

const laborShare: DistRow[] = [
  { year: '2030', q1: 54.6, median: 58.0, q3: 61.5 },
  { year: '2035', q1: 47.7, median: 52.5, q3: 57.2 },
];

const recentValue = 62.1;

const xMin = 40;
const xMax = 70;
const xRange = xMax - xMin;

function pct(v: number): string {
  return `${((v - xMin) / xRange) * 100}%`;
}

function ChartRow({ row }: { row: DistRow }) {
  return (
    <div className="grid grid-cols-[40px_1fr_56px] gap-3 items-center">
      <div className="text-sm font-bold text-pe-dark font-mono">{row.year}</div>
      <div className="relative h-7">
        <div className="absolute inset-y-0 left-0 right-0 bg-gray-100 rounded-sm" />
        <div
          className="absolute inset-y-1 bg-pe-teal/30 rounded-sm"
          style={{
            left: pct(row.q1),
            right: `calc(100% - ${pct(row.q3)})`,
          }}
        />
        <div
          className="absolute inset-y-0 w-1 bg-pe-teal"
          style={{ left: `calc(${pct(row.median)} - 2px)` }}
        />
      </div>
      <div className="text-sm font-mono font-bold text-pe-dark text-right">
        {row.median.toFixed(1)}%
      </div>
    </div>
  );
}

export default function ForecastDisagreementSlide() {
  const refLeft = pct(recentValue);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Deep uncertainty about the AI shock</SlideTitle>
        <p className="text-lg text-gray-600 mt-1">
          Prediction markets queried 2026-05-02. Medians, tail risks, and
          forecast intervals all carry non-trivial probability mass.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1.1fr_0.9fr] gap-7 mt-4">
        <div>
          <div className="content-card p-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                  <th className="pb-2 font-medium text-left">Venue</th>
                  <th className="pb-2 font-medium text-left">Question</th>
                  <th className="pb-2 font-medium text-right">Forecast</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((m, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-2.5 align-top">
                      <div className="text-xs font-bold uppercase tracking-[0.14em] text-pe-teal">
                        {m.venue}
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5">
                        {m.venueDetail}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 align-top text-sm text-gray-700 leading-snug">
                      {m.question}
                      {m.note && (
                        <div className="text-[10px] text-gray-500 mt-0.5 italic">
                          {m.note}
                        </div>
                      )}
                    </td>
                    <td className="py-2.5 align-top text-right">
                      <div className="text-xl font-black text-pe-dark font-mono whitespace-nowrap">
                        {m.point}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-card p-5">
          <Kicker>US labor share of national income</Kicker>
          <p className="text-xs text-gray-500 mt-1 mb-4">
            Metaculus community forecast, 25 forecasters. Bar = central 50%
            interval (Q1–Q3). Solid line = median.
          </p>

          <div className="space-y-4">
            {laborShare.map((row) => (
              <ChartRow key={row.year} row={row} />
            ))}
          </div>

          <div className="grid grid-cols-[40px_1fr_56px] gap-3 mt-3">
            <div />
            <div className="relative h-3">
              {[40, 45, 50, 55, 60, 65, 70].map((tick) => (
                <div
                  key={tick}
                  className="absolute text-[10px] text-gray-400 font-mono -translate-x-1/2"
                  style={{ left: pct(tick) }}
                >
                  {tick}
                </div>
              ))}
            </div>
            <div />
          </div>

          <div className="grid grid-cols-[40px_1fr_56px] gap-3 mt-3 items-center">
            <div />
            <div className="relative h-5">
              <div
                className="absolute inset-y-0 w-px bg-amber-700"
                style={{ left: refLeft }}
              />
              <div
                className="absolute -top-0.5 text-[10px] text-amber-700 font-bold whitespace-nowrap"
                style={{
                  left: refLeft,
                  transform: 'translateX(4px)',
                }}
              >
                ← 2024 actual: 62.1%
              </div>
            </div>
            <div />
          </div>

          <div className="accent-block mt-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              The interval widens from 6.9 pp in 2030 to 9.5 pp in 2035 — the
              uncertainty grows faster than the median falls.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
