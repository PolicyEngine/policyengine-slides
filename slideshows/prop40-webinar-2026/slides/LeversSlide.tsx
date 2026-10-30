import { Fragment } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** The calculator's eight assumption groups, in its own order (ASSUMPTION_GROUPS
 * in lib/bridge.js), with the setting each team's set uses. Labels and option
 * names follow app/components/AssumptionPanels.js; values follow
 * BERKELEY_ASSUMPTIONS and HOOVER_NBER_OCTOBER_2026_ASSUMPTIONS in
 * lib/presets.js (PolicyEngine/california-wealth-tax at ff379b2, October 30,
 * 2026). The residency counts are the categories in
 * lib/residencyAdjustments.js: five contested residency (Houston and Snyder,
 * whom Rauh et al. classify as non-residents, and the three NBER pre-filing
 * exits: Benioff, Whitman and Slootman), six reported departures before
 * January 1 (Page, Brin, Thiel, Kalanick, Hankey and Spielberg) and four after
 * it, of whom the Hoover set takes out Zuckerberg. A row whose settings match
 * in both sets is not a bar in the bridge. */
const rows: { label: string; berkeley: string; hoover?: string }[] = [
  {
    label: 'Residency: documented departures',
    berkeley: 'None of the 15 documented claims applied',
    hoover:
      '12 out: 6 reported departures before January 1, 5 contested residency (3 of them pre-filing exits) and Mark Zuckerberg',
  },
  {
    label: 'Unannounced departures before January 1',
    berkeley: 'Both: none',
  },
  {
    label: "Count movers' future income tax",
    berkeley: 'Wealth tax only',
    hoover: "Count it: 45% of the cohort's income tax lost, in perpetuity, flat in real terms (r − g = 3%)",
  },
  {
    label: "Who pays the cohort's income tax",
    berkeley: '$4.3 billion a year (Boll, Saez and Zucman); filings for the four largest, wealth for the rest*',
    hoover: '$4.55 billion a year (Rauh midpoint), divided by wealth',
  },
  {
    label: 'Avoidance and valuation haircut',
    berkeley: '10% off one-time receipts',
    hoover: 'None',
  },
  {
    label: 'Legal challenges to collection',
    berkeley: 'Survives (100%); collect from people who left after January 1; non-US citizens in the base',
    hoover: '50% chance it survives; leave out people who left after January 1; non-US citizens out of the base',
  },
  {
    label: 'Real estate exclusion and growth to valuation',
    berkeley: 'Directly held real estate included; wealth held at the snapshot',
    hoover: 'Directly held real estate excluded; wealth grows 7% a year to December 31, 2026',
  },
  {
    label: 'Discounting and payment timing',
    berkeley: 'Both: 3% real discount rate, constant prices, lump sum in 2027',
  },
];

export default function LeversSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Eight assumptions, set to each team&apos;s values</SlideTitle>
      </SlideHeader>

      <p className="-mt-6 mb-2 text-lg text-gray-700">
        Each row is a group of controls in the calculator; the six that differ are the bars in the
        bridge (slide 15)
      </p>

      <div className="grid grid-cols-[320px_1fr_1fr] gap-x-6">
        <div />
        <p className="slide-tag self-end mb-1">Berkeley set</p>
        <p className="slide-tag self-end mb-1">Hoover set</p>

        {rows.map((row) => (
          <Fragment key={row.label}>
            <div className="border-t border-gray-200 py-1 text-[15px] font-semibold text-gray-800 leading-snug">
              {row.label}
            </div>
            {row.hoover === undefined ? (
              <div className="col-span-2 border-t border-gray-200 py-1 text-[15px] text-gray-500 leading-snug">
                {row.berkeley}
              </div>
            ) : (
              <>
                <div className="border-t border-gray-200 py-1 text-[15px] text-gray-700 leading-snug">
                  {row.berkeley}
                </div>
                <div className="border-t border-gray-200 py-1 text-[15px] text-gray-700 leading-snug">
                  {row.hoover}
                </div>
              </>
            )}
          </Fragment>
        ))}
      </div>

      <p className="mt-2 text-sm text-gray-500">
        *Berkeley&apos;s own estimate counts no income tax, so this row matters only once income tax is
        counted. Settings: the calculator&apos;s Berkeley and Hoover sets (lib/presets.js), October 30,
        2026.
      </p>
    </Slide>
  );
}
