import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/** Filled 9/15: PolicyEngine projected the 2025 SPM child poverty rate to
 * rise 0.9 points from 2024's 13.5% → 14.4%. Census published 13.4%
 * (P60-290, Table 8), statistically unchanged from 2024. */
export default function Spm2025ProjectionSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>Before today, the model projected 2025. Here is how it did.</SlideTitle>
      </SlideHeader>
      <div className="mt-10 grid grid-cols-3 gap-6 items-stretch">
        <StatNumber value="14.4%" label="PolicyEngine projection, SPM child poverty 2025" sublabel="A projected 0.9-point rise from 2024's 13.5%" />
        <StatNumber value="13.4%" label="Census, SPM child poverty 2025" sublabel="Published this morning — statistically unchanged from 2024" />
        <StatNumber value="+1.0 pp" label="Difference" sublabel="Projection minus actual" />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          The model projected a rise that did not materialize — and the miss
          is the point of showing this. Every dashboard estimate starts from
          the same baseline, so the baseline gets checked against the
          official number the day it comes out.
        </p>
      </div>
    </Slide>
  );
}
