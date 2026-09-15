import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/** Filled 9/15 from the Census release "Poverty in the United States: 2025"
 * (P60-290, tables at census.gov, 10:00 am ET). Child SPM from Table 8
 * (under-18: 9,657k of 72,080k = 13.4%; 2024: 9,753k = 13.5%, change not
 * statistically significant). Official child rate from the report text
 * (13.4%, down 1.0pp — a record low). */
export default function WhyTodaySlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>This morning at 10 am, the Census Bureau published the 2025 numbers</SlideTitle>
      </SlideHeader>
      <div className="mt-8 grid grid-cols-3 gap-6">
        <StatNumber value="13.4%" label="Official child poverty rate, 2025" sublabel="2024: 14.4% — a record low" />
        <StatNumber value="13.4%" label="SPM child poverty rate, 2025" sublabel="2024: 13.5% — down 0.1 points" />
        <StatNumber value="9.7M" label="Children below the SPM threshold" sublabel="2024: 9.8M — down about 100,000" />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          The official child rate fell a full point to a record low while the
          SPM child rate edged down 0.1 points — the two measures converged
          at 13.4 percent. Source: U.S. Census Bureau,{' '}
          <em>Poverty in the United States: 2025</em> (P60-290), released
          September 15, 2026.
        </p>
      </div>
    </Slide>
  );
}
