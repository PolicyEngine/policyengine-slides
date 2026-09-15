import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/**
 * Top-level comparison of PolicyEngine's 2025 baseline with the raw CPS ASEC (Max, 9/15
 * 1:50 pm). Census: P60-290 (13.1% all people, 13.4% under 18). PolicyEngine:
 * policyengine-us 2.2.1 on the certified Microcosm 2024 population projected to 2025,
 * receipt rollout/fable-continuation-20260911/out/spm-change-2024-2025-pe-us-2.2.1.json
 * (13.235% all people, 16.567% under 18). The differences listed are the ones the model's
 * construction implies (rules-computed benefits, recalibrated weights, a 2024 population
 * aged to 2025) plus the CPS under-reporting literature (Meyer, Mok and Sullivan 2015 on
 * transfers; Bee and Mitchell 2017 on retirement income). No decomposition is claimed.
 */
const rows: { group: string; census: string; pe: string }[] = [
  { group: 'All people', census: '13.1%', pe: '13.2%' },
  { group: 'Under 18', census: '13.4%', pe: '16.6%' },
];

const reasons: string[] = [
  'Benefits are computed from program rules for eligible units (SNAP, SSI, WIC, school meals, housing assistance) rather than taken from what respondents report',
  'Weights are recalibrated to administrative totals from the IRS, SSA, SNAP and Medicaid; poverty rates are never a target',
  'The CPS under-reports transfer and retirement income, with SNAP, unemployment insurance and pension income the most cited gaps',
  'The 2025 baseline is the 2024 population aged forward, not a 2025 survey',
];

export default function BaselineVsCensusSlide() {
  return (
    <Slide center>
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
