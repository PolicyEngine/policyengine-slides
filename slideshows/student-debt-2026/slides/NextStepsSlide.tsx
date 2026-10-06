import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const steps = [
  {
    when: 'Month 1 · through late October',
    items: [
      'Confirm measures and assumptions',
      'Student loan balances imputed into the microdata from the SCF',
      'Calibration targets from Federal Student Aid portfolio data, with fit diagnostics',
      'Educational attainment added and calibrated to Census state totals (Project 2)',
    ],
  },
  {
    when: 'Month 2 · through late November',
    items: [
      'Calibrated balances on the public calibration dashboard',
      'RAP and the legacy plans merged into PolicyEngine',
      'First distributional results on the eleven measures',
      'Your team’s causal earnings multipliers (Project 2)',
    ],
  },
  {
    when: 'Months 3 and 4',
    items: [
      'Current-state report with tables and code; Scorecard comparisons',
      'Second implementation in the Axiom Foundation’s rules engine',
      'State degree ROI before and after taxes, transfers and loan payments',
      'Scoping document for the counterfactuals, a results page for funders, and a readout',
    ],
  },
];

export default function NextStepsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What comes next</SlideTitle>
      </SlideHeader>
      <div className="grid grid-cols-3 gap-6 -mt-4">
        {steps.map((s) => (
          <div key={s.when} className="content-card px-6 py-5">
            <p className="text-xl font-semibold text-pe-dark mb-3">{s.when}</p>
            <ul className="space-y-2.5">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-pe-teal shrink-0" />
                  <p className="text-lg text-gray-800 leading-snug">{i}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-lg text-gray-600">We&apos;ll share progress every week or two. All code, data and results are published openly.</p>
    </Slide>
  );
}
