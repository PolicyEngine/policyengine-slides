import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/**
 * The prediction on this slide is the one PolicyEngine registered on September 11, 2026:
 * spm-threshold-paper repo, data/predictions/2025-spm-poverty-rates-2026-09-11.json
 * (+ .ots OpenTimestamps proof + SHA256SUMS). Method per that file: Census 2024 SPM rate
 * (corrected series, SEHSD-WP2026-17) plus the canonical model's 2024-to-2025 change.
 *   all 13.0 + 0.22 = 13.2 | under 18 13.4 + 0.86 = 14.3 | 65+ 15.1 - 0.52 = 14.6
 * Model levels are held out from calibration, so only the change is used.
 * For the talk track (in the file, not on the slide): the legacy production model
 * (pe-us 1.764.6, CPI-aged thresholds) would have said 12.5 / 13.2 / 13.9; BLS's 2025
 * thresholds rose 4.4-6.3% against 2.6% CPI-U, the largest single change between the two runs.
 *
 * Filled 10:15 am: Census 2025 SPM child 13.4%, change -0.1 pp on the report's re-based 2024 (13.5%,
 * Vintage 2025 population controls; the registration used the corrected-series 13.4%). Gap = +1.0 pp.
 */
export default function Spm2025ProjectionSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Before today, PolicyEngine registered a 2025 prediction. Here is how it compares.</SlideTitle>
      </SlideHeader>
      <div className="mt-10 grid grid-cols-3 gap-6 items-stretch">
        <StatNumber
          value="+0.9 pp"
          label="PolicyEngine's registered change in SPM child poverty, 2024 to 2025"
          sublabel="Registered September 11: 13.4% to 14.3%"
        />
        <StatNumber
          value="−0.1 pp"
          label="Census change in SPM child poverty, 2024 to 2025"
          sublabel="13.5% to 13.4% on the report's re-based 2024, published at 10 am"
        />
        <StatNumber
          value="+1.0 pp"
          label="Registered minus published"
          sublabel="All people: registered +0.2, Census +0.1. Age 65 and over: registered −0.5, Census +0.2. The prior model had children at −0.2."
        />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          The model&apos;s own poverty level is held out from calibration and sits above the Census level, so the
          registered prediction is the modeled 2024 to 2025 change, added to the published 2024 rate. The child change missed by a point; the prior model, still on
          policyengine.org, was within 0.1. On all people and on seniors the registered changes were closer. The prediction file,
          its hash and an OpenTimestamps proof are public, and the miss stays there.
        </p>
      </div>
    </Slide>
  );
}
