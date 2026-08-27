import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import CodeBlock from '@/components/content/CodeBlock';

export default function DemoPySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The same models, as a Python package</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          pip install policyengine &mdash; the interface behind the apps
        </p>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[1.25fr_0.75fr] gap-8 items-start">
        <CodeBlock title="policyengine.py">
          <pre className="text-[15px] leading-relaxed font-mono text-gray-100">
            <code>{`import policyengine as pe

# UK: single adult earning £50,000
uk = pe.uk.calculate_household(
    people=[{"age": 35, "employment_income": 50_000}],
    year=2026,
)
print(uk.person[0].income_tax)

# US: same call, with a reform attached
us = pe.us.calculate_household(
    people=[{"age": 35, "employment_income": 60_000}],
    tax_unit={"filing_status": "SINGLE"},
    household={"state_code": "CA"},
    year=2026,
    reform={"gov.irs.credits.ctc.amount.adult_dependent": 1000},
)
print(us.tax_unit.income_tax)`}</code>
          </pre>
        </CodeBlock>

        <div className="space-y-5">
          <div className="content-card p-5">
            <h3 className="text-base font-bold text-pe-dark mb-1">
              Households and populations
            </h3>
            <p className="text-sm text-gray-700 leading-snug">
              The same package runs a single household or a full calibrated
              population, baseline against reform.
            </p>
          </div>
          <div className="content-card p-5">
            <h3 className="text-base font-bold text-pe-dark mb-1">
              Reforms are parameter changes
            </h3>
            <p className="text-sm text-gray-700 leading-snug">
              Every parameter carries its legislative reference; a reform is a
              dated override of the ones you name.
            </p>
          </div>
          <div className="accent-block">
            <p className="text-sm text-gray-700 leading-snug">
              This is the interface new engines plug into &mdash; the Belgian
              work you just saw targets the same contract.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
