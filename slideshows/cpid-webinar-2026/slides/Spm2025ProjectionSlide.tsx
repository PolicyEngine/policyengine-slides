import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/**
 * [fill] the morning of: PolicyEngine's projected 2025 SPM child poverty rate
 * (from the SPM 1.0 pipeline) next to the Census actual. State the projection
 * as of its run date, and the miss in percentage points, whatever it is.
 */
export default function Spm2025ProjectionSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>Before today, the model projected 2025. Here is how it did.</SlideTitle>
      </SlideHeader>
      <div className="mt-10 grid grid-cols-3 gap-6 items-stretch">
        <StatNumber value="[fill]%" label="PolicyEngine projection, SPM child poverty 2025" sublabel="Run [fill date], from 2024 microdata aged to 2025" />
        <StatNumber value="[fill]%" label="Census, SPM child poverty 2025" sublabel="Published this morning" />
        <StatNumber value="[fill] pp" label="Difference" sublabel="Projection minus actual" />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          The miss is the point of showing this. Every dashboard estimate starts from the same baseline, so the baseline is checked against the official number the day it comes out.
        </p>
      </div>
    </Slide>
  );
}
