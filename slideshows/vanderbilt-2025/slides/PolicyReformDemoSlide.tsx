import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function PolicyReformDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo 4: Statewide impact analysis</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Analyze the statewide impact of the new CTC in Montana
            </p>

            <div className="space-y-4 ml-6">
              <p><strong>Population impacts:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Poverty and deep poverty rate changes</li>
                <li>Income inequality (Gini coefficient)</li>
                <li>Net income by income decile</li>
                <li>Winners, losers, and unaffected households</li>
              </ul>

              <p className="pt-2"><strong>Budget impact:</strong> Cost to Montana</p>
            </div>

            <p className="text-pe-teal font-semibold pt-2">
              policyengine.org
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
