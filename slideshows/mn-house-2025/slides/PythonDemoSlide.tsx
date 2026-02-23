import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function PythonDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo: Python API</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Use PolicyEngine programmatically for custom analysis
            </p>

            <div className="code-block">
              <div className="code-block-header">
                <div className="code-block-dot bg-[#ff5f57]" />
                <div className="code-block-dot bg-[#febc2e]" />
                <div className="code-block-dot bg-[#28c840]" />
                <span className="ml-4 text-gray-500 text-sm font-mono">python</span>
              </div>
              <div className="code-block-content text-base">
                <pre className="text-gray-100 bg-transparent p-0">{`from policyengine_us import Simulation

sim = Simulation(
    situation={"people": {"you": {"age": 40}}}
)
sim.calculate("income_tax", 2025)`}</pre>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Build custom visualizations and reports</li>
              <li>Batch process multiple scenarios</li>
              <li>Integrate with other data sources</li>
              <li>Full control over household definitions</li>
            </ul>

            <p className="text-pe-teal font-semibold pt-4">
              Live demo →
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
