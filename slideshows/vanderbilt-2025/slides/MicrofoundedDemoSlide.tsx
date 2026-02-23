import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function MicrofoundedDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo 1: Household-by-household impacts</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Household by household impacts of One Big Beautiful Bill Act
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li>Explore individual household impacts across the income distribution</li>
              <li>See variation in outcomes by income, family size, and location</li>
              <li>Understand how aggregate results emerge from individual households</li>
            </ul>

            <p className="text-pe-teal font-semibold pt-2">
              policyengine.org/us/obbba-household-by-household
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
