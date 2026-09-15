import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/**
 * Computed 2026-09-15 from the 2026 CPS ASEC public-use person file (asecpub26csv.zip,
 * pppub26.csv), person weight MARSUPWT. Published columns replicate P60-290 Table 8
 * (44,390k people and 9,653k children below the threshold against Census's 44,390k and
 * 9,657k). Anchored column: each unit's SPM_POVTHRESHOLD scaled by tenure so the national
 * base equals its 2024 value (BLS corrected series 39,231 / 32,879 / 39,220) times CPI-U
 * 2.631% (Census's 2025/2024 two-adult-two-child official threshold ratio, 32,649/31,812);
 * equivalence scale and geographic adjustment as published. Chained CPI (2.48%) moves
 * the anchored rates by 0.02 to 0.04 points, the same to one decimal. 2024 rates are the
 * report's re-based figures (13.0 / 13.5 / 15.1). Receipt: replicate_and_anchor.py.
 */
const rows: { group: string; r2024: string; r2025: string; change: string; anchored: string; anchoredChange: string; effect: string }[] = [
  { group: 'All people', r2024: '13.0', r2025: '13.1', change: '+0.1', anchored: '12.3', anchoredChange: '−0.7', effect: '+0.8' },
  { group: 'Under 18', r2024: '13.5', r2025: '13.4', change: '−0.1', anchored: '12.3', anchoredChange: '−1.2', effect: '+1.1' },
  { group: '18 to 64', r2024: '12.2', r2025: '12.3', change: '0.0', anchored: '11.5', anchoredChange: '−0.7', effect: '+0.7' },
  { group: '65 and over', r2024: '15.1', r2025: '15.4', change: '+0.2', anchored: '14.7', anchoredChange: '−0.4', effect: '+0.7' },
];

export default function AnchoredThresholdsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Hold the thresholds at 2024, and SPM poverty fell</SlideTitle>
      </SlideHeader>
      <p className="mt-2 text-lg text-gray-700">
        BLS&apos;s 2025 thresholds rose 6.3% for renters, 5.3% for owners with a mortgage, and 4.4% for owners without. Prices rose 2.63%
        on CPI-U and 2.48% on chained CPI (2024 to 2025 annual averages). The same households, measured against 2024 thresholds plus CPI-U:
      </p>
      <div className="mt-4 content-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-white" style={{ background: 'var(--pe-dark)' }}>
              <th className="px-4 py-2 text-sm font-semibold">SPM poverty rate, %</th>
              <th className="px-4 py-2 text-sm font-semibold text-right">2024</th>
              <th className="px-4 py-2 text-sm font-semibold text-right">2025 published</th>
              <th className="px-4 py-2 text-sm font-semibold text-right">Change</th>
              <th className="px-4 py-2 text-sm font-semibold text-right">2025 at 2024 thresholds</th>
              <th className="px-4 py-2 text-sm font-semibold text-right">Change</th>
              <th className="px-4 py-2 text-sm font-semibold text-right">Threshold growth beyond prices</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((r) => (
              <tr key={r.group}>
                <td className="px-4 py-2 text-base font-semibold text-gray-800">{r.group}</td>
                <td className="px-4 py-2 text-base text-gray-700 text-right">{r.r2024}</td>
                <td className="px-4 py-2 text-base text-gray-700 text-right">{r.r2025}</td>
                <td className="px-4 py-2 text-base text-gray-700 text-right">{r.change}</td>
                <td className="px-4 py-2 text-base font-semibold text-pe-teal text-right">{r.anchored}</td>
                <td className="px-4 py-2 text-base font-semibold text-pe-teal text-right">{r.anchoredChange}</td>
                <td className="px-4 py-2 text-base text-gray-700 text-right">{r.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Recomputed from the public 2026 CPS ASEC file with national thresholds held at their 2024 values plus CPI-U; equivalence
        scale and geographic adjustment as published. Anchoring with chained CPI instead gives 12.3, 12.3 and 14.6. Renters: 24.0%
        published, 22.1% at 2024 thresholds. Columns may not add due to rounding. The official measure, whose thresholds move with
        CPI-U, fell 1.0 point for children.
      </p>
    </Slide>
  );
}
