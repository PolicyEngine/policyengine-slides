import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/**
 * How BLS and Census set SPM thresholds (BLS SPM threshold methodology page and the
 * spm-threshold-paper; the 2025 values are BLS's August 24, 2026 publication). The
 * national base uses five years of Consumer Expenditure Survey data for two-adult,
 * two-child units around the median of spending on food, clothing, shelter, utilities,
 * telephone and internet (the 47th to 53rd percentiles), times 1.2, with the tenure
 * group's own shelter and utilities swapped in, times 0.82. Census then applies a
 * three-parameter equivalence scale for unit size and a rent index from five years of
 * American Community Survey data for the unit's metro area or state nonmetro area.
 */
const steps: { step: string; detail: string }[] = [
  { step: 'Start from spending', detail: 'Five years of Consumer Expenditure Survey data for two-adult, two-child units, around the median of spending on food, clothing, shelter, utilities, telephone and internet' },
  { step: 'Scale it', detail: 'Multiply by 1.2 for other needs, swap in each housing group’s own shelter and utilities, and take 82 percent' },
  { step: 'Adjust for the unit', detail: 'A three-parameter equivalence scale for the number of adults and children' },
  { step: 'Adjust for the place', detail: 'A rent index from five years of American Community Survey data for the metro area or state nonmetro area' },
];

export default function SpmThresholdsSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>SPM thresholds: how they are defined</SlideTitle>
      </SlideHeader>
      <div className="mt-4 grid grid-cols-3 gap-6">
        <StatNumber value="$41,701" label="Renters, 2025" sublabel="Two adults, two children, national" />
        <StatNumber value="$41,323" label="Owners with a mortgage, 2025" sublabel="Two adults, two children, national" />
        <StatNumber value="$34,326" label="Owners without a mortgage, 2025" sublabel="Two adults, two children, national" />
      </div>
      <div className="mt-6 content-card divide-y divide-gray-200">
        {steps.map((s) => (
          <div key={s.step} className="grid grid-cols-[220px_1fr] items-baseline gap-6 px-6 py-3">
            <span className="text-lg font-semibold text-gray-800">{s.step}</span>
            <span className="text-base text-gray-700">{s.detail}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Thresholds move with what households spend, not with a price index: from 2024 to 2025 they rose 6.3% for renters, 5.3% for owners
        with a mortgage and 4.4% for owners without, against 2.6% CPI-U.
      </p>
    </Slide>
  );
}
