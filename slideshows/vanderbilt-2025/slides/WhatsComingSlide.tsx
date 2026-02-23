import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function WhatsComingSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What's coming</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <div>
              <p className="font-semibold text-pe-dark mb-3">Congressional district analysis</p>
              <p className="ml-6">Interactive maps showing SNAP participation and other benefits by district</p>
              <p className="ml-6 text-pe-teal text-2xl">policyengine.github.io/snap-district-map</p>
            </div>

            <div>
              <p className="font-semibold text-pe-dark mb-3">Child poverty dashboard (preview)</p>
              <p className="ml-6">Child poverty focused dashboard for simulating tax credit reforms</p>
              <p className="ml-6 text-pe-teal text-2xl">policyengine.org/us/rhode-island-ctc-calculator</p>
            </div>

            <div>
              <p className="font-semibold text-pe-dark mb-3">AI-powered policy analysis</p>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Natural language policy design and analysis</li>
                <li>Automated report generation</li>
                <li>Interactive policy chatbot</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-pe-dark mb-3">Enhanced state coverage</p>
              <p className="ml-6">Expanding state-level tax and benefit modeling across all 50 states</p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
