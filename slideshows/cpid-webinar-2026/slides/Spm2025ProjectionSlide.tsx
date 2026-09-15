import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/**
 * PolicyEngine's projection was recorded before the release from the production API,
 * https://api.policyengine.org/us/economy/2/over/2?region=us&time_period=2025 (and 2024),
 * pulled September 15, 2026 at 01:48 ET: model_version 1.764.6, data_version
 * populace-us-2024-buildp-sparse-rmloss100-cae8640-20260728T011454Z.
 * SPM child poverty: 2024 16.97%, 2025 16.73%, change -0.24 pp.
 *
 * The comparison is the year-over-year change, not the level. The model's level sits
 * above the Census level in 2024 as well (16.97% against 13.4%), and official rates are
 * comparators, never targets.
 *
 * [fill] at 10am: the Census 2025 SPM child rate, its change from the corrected 2024 base
 * (13.4%, SEHSD-WP2026-17 Table 3), and the gap between the two changes.
 */
export default function Spm2025ProjectionSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>Before today, the model projected 2025. Here is how it compares.</SlideTitle>
      </SlideHeader>
      <div className="mt-10 grid grid-cols-3 gap-6 items-stretch">
        <StatNumber
          value="−0.2 pp"
          label="PolicyEngine projected change in SPM child poverty, 2024 to 2025"
          sublabel="16.97% to 16.73%, production API, pulled this morning at 1:48 am ET"
        />
        <StatNumber
          value="[fill] pp"
          label="Census change in SPM child poverty, 2024 to 2025"
          sublabel="13.4% to [fill]%, published at 10 am"
        />
        <StatNumber
          value="[fill] pp"
          label="Gap between the two changes"
          sublabel="Projected change minus published change"
        />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          The comparison is the change, not the level: the model&apos;s 2024 rate was 17.0% against the Census
          13.4%. Official numbers are the comparator, not the target, and the projection is checked against them
          the day they come out.
        </p>
      </div>
    </Slide>
  );
}
