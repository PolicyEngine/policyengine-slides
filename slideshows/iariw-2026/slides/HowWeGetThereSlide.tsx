import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function HowWeGetThereSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How do we get there?</SlideTitle>
      </SlideHeader>

      <div className="mt-8 space-y-7">
        <p className="text-2xl text-gray-900 leading-relaxed font-light">
          AI can&apos;t do it on its own today.{' '}
          <span className="font-medium text-pe-teal">
            But we can do two things that compound.
          </span>
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="content-card p-6">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
              Track 1
            </div>
            <h3 className="text-2xl font-bold text-pe-dark mb-3">
              Use AI to build the apparatus for projections
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              AI helps us assemble what we project with &mdash; the encoded
              rules, the calibrated data, the behavioral theory, the analysis
              tooling. The modeling craft, accelerated. Human review at every
              step.
            </p>
          </div>

          <div
            className="content-card p-6"
            style={{ borderLeftColor: 'var(--pe-amber)' }}
          >
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
              Track 2
            </div>
            <h3 className="text-2xl font-bold text-pe-dark mb-3">
              Equip AI to do the projections at scale
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              With the apparatus in place, AI agents can run projections with
              comparable fidelity &mdash; calling the right pieces, integrating
              baselines, propagating uncertainty, surfacing calibrated answers
              by the thousand.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic text-center">
          The rest of this talk is the apparatus &mdash; rules, data, and the
          verification that has to scale with both.
        </p>
      </div>
    </Slide>
  );
}
