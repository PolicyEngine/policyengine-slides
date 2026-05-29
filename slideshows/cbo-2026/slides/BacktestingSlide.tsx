import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const components = [
  { label: 'Rules error', detail: 'Statute interpretation, parameter values at the time.' },
  { label: 'Data error', detail: 'Microdata calibration drift, take-up assumptions.' },
  { label: 'Behavioral error', detail: 'Elasticities, structural responses.' },
  { label: 'Structural error', detail: 'Model-class limits — what the framework cannot represent.' },
];

export default function BacktestingSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Backtesting: what we are setting up</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-[1fr_1.1fr] gap-10">
        <div className="space-y-6">
          <div>
            <div className="slide-tag mb-2">The approach</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              Simulate PolicyEngine over historical years against published series &mdash; SOI tabs, CPS poverty rates, other public references.
            </p>
          </div>
          <div>
            <div className="slide-tag mb-2">The goal</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              Decompose total residual into component sources so we can attribute uncertainty honestly.
            </p>
          </div>
          <div>
            <div className="slide-tag mb-2">Honest status</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              On our near-term roadmap. Not yet a routine practice.
            </p>
          </div>
        </div>

        <div className="content-card p-8">
          <h3 className="text-xl font-bold text-pe-dark mb-4">Residual decomposition</h3>
          <div className="space-y-4">
            {components.map((c) => (
              <div key={c.label}>
                <div className="text-lg font-bold text-pe-teal">{c.label}</div>
                <div className="text-base text-gray-600 leading-snug">{c.detail}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-gray-600 italic">
            Output: empirical uncertainty bands tied to observed historical errors, not analyst priors.
          </p>
        </div>
      </div>
    </Slide>
  );
}
