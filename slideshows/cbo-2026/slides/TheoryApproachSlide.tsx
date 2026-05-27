import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const peElasticities = [
  { name: 'Labor supply', detail: 'Hours and participation responses to net-of-tax wages.' },
  { name: 'Capital gains realization', detail: 'Realization elasticity to tax rate changes.' },
  { name: 'Take-up', detail: 'Program participation given eligibility.' },
  { name: 'UK-specific', detail: 'Self-employment income, savings response, others.' },
];

export default function TheoryApproachSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How we handle behavioral responses today</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[1fr_1fr] gap-8">
        <div className="space-y-5">
          <p className="text-xl text-gray-800 leading-relaxed">
            Not nearly as developed as CBO&apos;s apparatus. Specific
            elasticities, transparently parameterized, and{' '}
            <span className="font-medium text-pe-teal">
              configurable by the user
            </span>{' '}
            &mdash; with sensible defaults borrowed from published meta-analyses
            (including CBO&apos;s own).
          </p>

          <div className="space-y-2">
            {peElasticities.map((e) => (
              <div
                key={e.name}
                className="grid grid-cols-[180px_1fr] gap-3 items-baseline border-l-2 border-pe-teal pl-3 py-1"
              >
                <p className="text-sm font-semibold text-pe-dark">{e.name}</p>
                <p className="text-sm text-gray-700 leading-snug">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="content-card p-6">
            <div className="slide-tag mb-3">The hard part of meta-analysis</div>
            <p className="text-base text-gray-700 leading-relaxed">
              Picking a number is the easy step. The hard steps are weighting
              studies that disagree, applying heterogeneity to populations the
              original studies did not cover, and handling the fact that the
              elasticity you need is rarely the elasticity that has been
              estimated.
            </p>
          </div>

          <div className="accent-block">
            <p className="text-lg text-gray-800 leading-relaxed">
              AI opens at least two new instruments here: we can ask LLMs what
              they believe across many definitions of an elasticity, and we
              can put LLMs in the seat of the human subjects whose responses
              the literature is trying to measure.
            </p>
          </div>

          <p className="text-sm text-gray-500 italic leading-snug">
            Neither replaces empirical work. Both add something the meta-
            analysis literature has trouble producing on its own &mdash; scale,
            speed, and visible disagreement.
          </p>
        </div>
      </div>
    </Slide>
  );
}
