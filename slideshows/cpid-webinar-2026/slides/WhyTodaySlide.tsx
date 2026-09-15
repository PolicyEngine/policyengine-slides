import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/**
 * [fill] the morning of September 15 from the Census release
 * "Poverty in the United States: 2025" (census.gov, 10:00 am ET).
 *
 * 2024 comparators are already filled:
 * - Official child poverty 2024: 14.3% (P60-287, Table A-3: 10,350k of 72,550k children).
 * - SPM child poverty 2024: 13.4%, 9,763k children (corrected series, SEHSD-WP2026-17
 *   Table 3, August 19, 2026; originally published 13.4%, 9,744k in P60-287 Table B-4).
 * At 10am, re-check the 2024 column of the 2025 report; if it prints a different
 * 2024 base, use the report's own figure.
 */
export default function WhyTodaySlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>This morning at 10 am, the Census Bureau published the 2025 numbers</SlideTitle>
      </SlideHeader>
      <div className="mt-8 grid grid-cols-3 gap-6">
        <StatNumber value="[fill]%" label="Official child poverty rate, 2025" sublabel="2024: 14.3%" />
        <StatNumber value="[fill]%" label="SPM child poverty rate, 2025" sublabel="2024: 13.4%" />
        <StatNumber value="[fill]M" label="Children below the SPM threshold, 2025" sublabel="2024: 9.8M" />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          Source: U.S. Census Bureau, <em>Poverty in the United States: 2025</em>, released September 15, 2026.
          One line on what moved goes here after the release.
        </p>
      </div>
    </Slide>
  );
}
