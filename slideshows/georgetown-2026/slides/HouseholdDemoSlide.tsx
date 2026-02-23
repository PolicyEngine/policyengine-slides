import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function HouseholdDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <div className="flex items-center gap-4">
            <span className="slide-tag">Demo 2</span>
            <SlideTitle>DC household</SlideTitle>
          </div>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Create a Washington DC household and calculate their taxes and benefits
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li>Enter household characteristics: family in Washington DC</li>
              <li>Set income and other relevant details</li>
              <li>View current tax liabilities and benefit eligibility</li>
              <li>See breakdown by program and net household income</li>
            </ul>

            <p className="text-pe-teal font-semibold pt-4">
              policyengine.org →
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
