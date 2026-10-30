import { Fragment } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** Each team's headline and assumptions, from their own reports (checked
 * October 29, 2026):
 * - Galle, Gamage, Saez and Shanske, "Expert Report on Proposition 40",
 *   updated July 20, 2026, p. 4: 250 billionaires on Forbes's July 1, 2026
 *   list, $2.307 trillion, 5% = $115 billion, a 10% avoidance and evasion
 *   haircut = $104 billion, rounded to $100 billion.
 * - Jaros and Rauh, NBER Working Paper 35899, October 2026: their Forbes 2025
 *   base (212 people by their count, $1.89 trillion), seven confirmed departures
 *   and three pre-filing exits out, international billionaires out, Mark
 *   Zuckerberg out of the recognized base ($59.15 billion), q = 0.50 (about
 *   $30 billion, range $28-36 billion), 7% growth to December 31, 2026, and
 *   NPV = WT − f·C/(r − g) with f ~ U[0.30, 0.60], C = $3.3-5.8 billion,
 *   r − g = 1.5-4.5%: mean −$38.9 billion over 100,000 draws.
 * - Boll, Saez and Zucman, NBER Working Paper 35218 (revised August 2026):
 *   income tax lost to mobility of $0.15-0.56 billion a year. */
const camps = [
  {
    name: 'Berkeley',
    headline: 'About $100 billion',
    detail: 'one-time revenue; $104 billion on their July 2026 list',
    source: 'Galle, Gamage, Saez and Shanske, July 20, 2026',
  },
  {
    name: 'Hoover',
    headline: '−$38.9 billion',
    detail: 'mean net present value; central estimate of about $30 billion collected',
    source: 'Jaros and Rauh, NBER Working Paper 35899, October 2026',
  },
];

const rows: { label: string; berkeley: string; hoover: string }[] = [
  {
    label: 'Roster',
    berkeley: 'Forbes, July 1, 2026: 250 people, $2,307 billion',
    hoover: 'Forbes 2025 list, 212 people by their count; international billionaires out',
  },
  {
    label: 'Departures',
    berkeley: 'None; departures before January 1 “very unlikely in most cases”',
    hoover: 'Seven confirmed departures, three pre-filing exits and Mark Zuckerberg out',
  },
  {
    label: 'Avoidance or erosion',
    berkeley: '10% for avoidance and evasion',
    hoover: 'None beyond the confirmed departures',
  },
  {
    label: 'Survives legal challenge',
    berkeley: 'Not discounted',
    hoover: '50% probability weight',
  },
  {
    label: 'Wealth growth',
    berkeley: 'None: July 1, 2026 values',
    hoover: '7% a year to December 31, 2026',
  },
  {
    label: 'Future income tax lost',
    berkeley: 'Not in the score; Boll, Saez and Zucman: $0.15–0.56 billion a year',
    hoover: 'f = 30–60% of C = $3.3–5.8 billion a year, for good, at r − g = 1.5–4.5%',
  },
];

export default function EstimatesTableSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Two published estimates, side by side</SlideTitle>
      </SlideHeader>

      <div className="-mt-4 grid grid-cols-[200px_1fr_1fr] gap-x-6">
        <div />
        {camps.map((camp) => (
          <div key={camp.name} className="content-card px-5 py-2 mb-1">
            <p className="slide-tag">{camp.name}</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight text-pe-teal">{camp.headline}</p>
            <p className="text-sm text-gray-700">{camp.detail}</p>
            <p className="text-sm text-gray-500">{camp.source}</p>
          </div>
        ))}

        {rows.map((row) => (
          <Fragment key={row.label}>
            <div className="border-t border-gray-200 py-1 text-base font-semibold text-gray-800">
              {row.label}
            </div>
            <div className="border-t border-gray-200 py-1 text-base text-gray-700 leading-snug">
              {row.berkeley}
            </div>
            <div className="border-t border-gray-200 py-1 text-base text-gray-700 leading-snug">
              {row.hoover}
            </div>
          </Fragment>
        ))}
      </div>

      <p className="mt-2 text-sm text-gray-500">
        f: share of the cohort&apos;s California income tax lost to departures. C: the cohort&apos;s
        income tax a year. r − g: discount rate net of income growth.
      </p>
      {/* Why the calculator's totals (slides 14 and 15) differ from these */}
      <p className="mt-1 text-sm text-gray-500">
        These are the published figures. The calculator (slides 14 and 15) runs both sets of
        assumptions on one roster and current Forbes data, and takes the midpoint of each of
        Hoover&apos;s ranges instead of averaging 100,000 random draws, so its totals differ.
      </p>
    </Slide>
  );
}
