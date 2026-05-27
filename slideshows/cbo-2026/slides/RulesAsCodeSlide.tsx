import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stages = [
  {
    stage: 'Statute or regulation',
    detail: 'Public Law, IRS guidance, state agency rules.',
    ai: 'Locate, ingest, identify cross-references.',
  },
  {
    stage: 'Parameters',
    detail: 'YAML files with dates, citations, and reform points.',
    ai: 'Draft from text with citations preserved.',
  },
  {
    stage: 'Executable rules',
    detail: 'Python formulas referencing parameters and household entities.',
    ai: 'Implement first pass, propagate edge cases.',
  },
  {
    stage: 'Tests',
    detail: 'YAML test cases, integration tests, cross-program validation.',
    ai: 'Generate cases including edge cases analysts forget.',
  },
  {
    stage: 'Human review',
    detail: 'At every stage. Source interpretation, assumptions, sign-off.',
    ai: 'Cannot substitute. Must accompany.',
  },
];

export default function RulesAsCodeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>From statute to executable rule</SlideTitle>
      </SlideHeader>

      <div className="mt-8 space-y-3">
        {stages.map((s, i) => (
          <div
            key={s.stage}
            className="grid grid-cols-[260px_1fr_1fr] gap-6 items-start p-4 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-pe-teal font-bold">{i + 1}</span>
              <span className="text-lg font-bold text-pe-dark">{s.stage}</span>
            </div>
            <div className="text-base text-gray-700 leading-snug">{s.detail}</div>
            <div className="text-base text-gray-500 leading-snug italic">
              <span className="font-medium text-pe-teal">AI:</span> {s.ai}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 accent-block max-w-5xl">
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="font-semibold text-pe-dark">Axiom</span> is the
          501(c)(3) we are standing up to do this layer as a public good
          &mdash; machine-readable federal, state, and local law that every
          modeler, including CBO, can build on.
        </p>
      </div>
    </Slide>
  );
}
