import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

// Target counts: national/state/district from the IARIW research calibration
// surface (32,633 public aggregates); county from PolicyEngine/microcosm
// SYSTEM_REQUIREMENTS (full-county calibration, 6,288 targets).
const levels = [
  { level: 'National', targets: '478', status: 'certified' },
  { level: 'State', targets: '7,815', status: 'certified' },
  { level: 'County', targets: '6,288', status: 'research' },
  { level: 'Congressional district', targets: '24,340', status: 'research' },
];

export default function DataGranularitySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Calibrated down to the district</SlideTitle>
      </SlideHeader>

      <p className="text-lg text-gray-800 leading-relaxed max-w-6xl">
        The same population is reweighted against targets at every level of
        geography, so one reform can be scored nationally, by state, by
        county, and for each of the 436 congressional districts.
      </p>

      <div className="mt-3 grid grid-cols-[0.7fr_1.6fr] gap-7 items-start">
        <div className="flex flex-col gap-4">
          <div className="content-card divide-y divide-gray-200 px-5">
            {levels.map((l) => (
              <div key={l.level} className="flex items-baseline justify-between gap-4 py-2">
                <div>
                  <div className="text-lg font-bold text-pe-dark leading-tight">{l.level}</div>
                  <div
                    className="text-[11px] uppercase tracking-wider mt-0.5"
                    style={{ color: l.status === 'certified' ? 'var(--pe-teal)' : 'var(--pe-amber)' }}
                  >
                    {l.status}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-pe-teal leading-none">{l.targets}</div>
                  <div className="text-xs text-gray-500 mt-1">targets</div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-pe-teal pl-5">
            <div className="slide-tag mb-2">How the levels nest</div>
            <p className="text-xs text-gray-700 leading-relaxed">
              A geographic ladder built from 2020 census blocks, up through
              tracts and PUMAs to counties and 119th-Congress districts, with
              every overlap conserving population. Finer cuts inherit the
              same weights.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
          <div className="flex items-start justify-between gap-6 px-2 pb-2">
            <div>
              <div className="slide-tag mb-1">One reform, every district</div>
              <p className="text-base font-semibold leading-snug text-pe-dark">
                Average household net income change by congressional
                district, 2026, under the One Big Beautiful Bill Act
              </p>
            </div>
            <p className="max-w-sm text-right text-xs leading-snug text-gray-500">
              vs. TCJA-expiration counterfactual, district-calibrated research
              files. Certified release: national and state targets; county and
              district are research builds. Map: Ghenis et al., OBBBA companion
              paper.
            </p>
          </div>
          <Image
            src="/images/iariw-2026/obbba-district-impact.png"
            alt="US congressional district map of estimated 2026 average household net income change under the One Big Beautiful Bill Act"
            width={1678}
            height={795}
            className="w-full h-auto max-h-[300px] object-contain"
          />
        </div>
      </div>

    </Slide>
  );
}
