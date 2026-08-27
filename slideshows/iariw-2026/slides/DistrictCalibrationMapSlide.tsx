import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const calibrationLevels = [
  { value: '24,340', label: 'district targets' },
  { value: '7,815', label: 'state targets' },
  { value: '478', label: 'national targets' },
];

export default function DistrictCalibrationMapSlide() {
  return (
    <Slide>
      <div className="flex h-full flex-col">
        <SlideHeader>
          <SlideTitle>
            Add district targets, and national policy becomes local
          </SlideTitle>
          <p className="mt-2 text-xl text-gray-600">
            More calibration detail gives the synthetic population enough
            geographic grain to estimate the same reform across every
            congressional district.
          </p>
        </SlideHeader>

        <div className="grid min-h-0 flex-1 grid-cols-[0.68fr_1.7fr] gap-7">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-pe-dark px-6 py-5 text-white shadow-lg">
              <div className="text-5xl font-bold leading-none text-pe-teal">
                32,633
              </div>
              <p className="mt-2 text-base font-semibold leading-snug">
                public aggregates in the research calibration surface
              </p>
            </div>

            <div className="content-card divide-y divide-gray-200 px-5">
              {calibrationLevels.map((level) => (
                <div
                  key={level.label}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <span className="text-2xl font-bold text-pe-dark">
                    {level.value}
                  </span>
                  <span className="text-sm text-gray-600">{level.label}</span>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-pe-teal pl-5">
              <div className="slide-tag mb-2">The payoff</div>
              <p className="text-base leading-relaxed text-gray-700">
                One model, one reform, and detailed results for all{' '}
                <span className="font-semibold text-pe-dark">
                  436 districts
                </span>
                .
              </p>
            </div>
          </div>

          <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
            <div className="flex items-start justify-between gap-6 px-2 pb-2">
              <div>
                <div className="slide-tag mb-1">OBBBA impact map</div>
                <p className="text-base font-semibold leading-snug text-pe-dark">
                  Average household net income change by congressional
                  district, 2026
                </p>
              </div>
              <p className="max-w-xs text-right text-xs leading-snug text-gray-500">
                OBBBA vs. TCJA-expiration counterfactual; all provisions except
                marketplace participation
              </p>
            </div>

            <div className="min-h-0 flex-1">
              <Image
                src="/images/iariw-2026/obbba-district-impact.png"
                alt="US congressional district map showing estimated 2026 average household net income changes from the One Big Beautiful Bill Act"
                width={1678}
                height={795}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-8 text-xs leading-snug text-gray-500">
          <p>
            Source: Ghenis et al., OBBBA companion paper.
          </p>
          <p className="max-w-4xl text-right">
            Map uses district-calibrated eCPS 1.73.0 research files. The
            current certified Microcosm release calibrates national and state
            targets.
          </p>
        </div>
      </div>
    </Slide>
  );
}
