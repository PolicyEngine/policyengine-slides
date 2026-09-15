import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/**
 * Top-level comparison of PolicyEngine's 2025 baseline with the raw CPS ASEC (Max, 9/15
 * 1:50 pm). Census: P60-290 (13.1% all people, 13.4% under 18). PolicyEngine:
 * policyengine-us 2.2.1 on the certified Microcosm 2024 population projected to 2025,
 * receipt rollout/fable-continuation-20260911/out/spm-change-2024-2025-pe-us-2.2.1.json
 * (13.235% all people, 16.567% under 18). Under-reporting figures, all read today: Rothbaum,
 * SEHSD-WP2015-01, CPS ASEC / NIPA ratios 2007-2012, unemployment compensation 67.8, 77.2,
 * 76.4, 70.6, 65.4, 66.0 percent and pensions 69.9, 73.8, 69.7, 71.4, 73.7, 68.3 percent;
 * Meyer and Mittag (NBER w21676 abstract): CPS misses 40 percent of food stamp recipients,
 * over one-third of housing assistance recipients, 60 percent of TANF/GA recipients; Bee and
 * Mitchell (SEHSD-WP2017-39 abstract): 65+ median income $44,400 in administrative records vs
 * $33,800 in the CPS ASEC, 65+ poverty 6.9 vs 9.1 percent. No decomposition is claimed.
 */
const rows: { group: string; census: string; pe: string }[] = [
  { group: 'All people', census: '13.1%', pe: '13.2%' },
  { group: 'Under 18', census: '13.4%', pe: '16.6%' },
];

const reasons: string[] = [
  'Benefits are computed from program rules for eligible units (SNAP, SSI, WIC, school meals, housing assistance) rather than taken from what respondents report',
  'Weights are recalibrated to administrative totals from the IRS, SSA, SNAP and Medicaid; poverty rates are never a target',
  'The CPS under-reports transfer and retirement income: against national accounts it captured 65 to 77 percent of unemployment insurance dollars and 68 to 74 percent of pension income over 2007 to 2012 (Rothbaum, Census 2015)',
  'Linked to administrative records, the CPS misses 40 percent of SNAP recipients (Meyer and Mittag), and median income of people 65 and over is 30 percent higher in tax records than in the survey, mostly under-reported pensions and retirement withdrawals (Bee and Mitchell, Census 2017)',
  'The 2025 baseline is the 2024 population aged forward, not a 2025 survey',
];

export default function BaselineVsCensusSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine&apos;s 2025 baseline against the raw CPS</SlideTitle>
      </SlideHeader>
      <div className="mt-4 grid grid-cols-[1fr_1.4fr] gap-6 items-start">
        <div className="content-card overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="text-white" style={{ background: 'var(--pe-dark)' }}>
                <th className="px-4 py-2 text-sm font-semibold">SPM poverty, 2025</th>
                <th className="px-4 py-2 text-sm font-semibold text-right">Census (CPS ASEC)</th>
                <th className="px-4 py-2 text-sm font-semibold text-right">PolicyEngine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((r) => (
                <tr key={r.group}>
                  <td className="px-4 py-3 text-lg font-semibold text-gray-800">{r.group}</td>
                  <td className="px-4 py-3 text-lg text-gray-700 text-right">{r.census}</td>
                  <td className="px-4 py-3 text-lg font-semibold text-pe-teal text-right">{r.pe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="content-card px-6 py-4">
          <p className="text-lg font-semibold text-gray-800 mb-2">Why the numbers differ</p>
          <ul className="space-y-2">
            {reasons.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-pe-teal shrink-0" />
                <p className="text-base text-gray-700 leading-snug">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Gaps against Census are signals to investigate, not corrections to Census. The dashboard reports each reform as a change against
        the model&apos;s own baseline.
      </p>
    </Slide>
  );
}
