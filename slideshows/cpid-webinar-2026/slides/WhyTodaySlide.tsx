import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/**
 * [fill] the morning of September 15 from the Census release
 * "Income, Poverty and Health Insurance Coverage in the United States: 2025"
 * (tables at census.gov, 10:00 am ET).
 */
export default function WhyTodaySlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>This morning at 10 am, the Census Bureau published the 2025 numbers</SlideTitle>
      </SlideHeader>
      <div className="mt-8 grid grid-cols-3 gap-6">
        <StatNumber value="[fill]%" label="Official child poverty rate, 2025" sublabel="2024: [fill]%" />
        <StatNumber value="[fill]%" label="SPM child poverty rate, 2025" sublabel="2024: [fill]%" />
        <StatNumber value="[fill]M" label="Children below the SPM threshold" sublabel="Change from 2024: [fill]" />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          Source: U.S. Census Bureau, <em>Income, Poverty and Health Insurance Coverage in the United States: 2025</em>,
          released September 15, 2026. One line on what moved and why goes here after the release.
        </p>
      </div>
    </Slide>
  );
}
