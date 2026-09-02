import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const layers = [
  {
    layer: 'The rules',
    harness: 'The validation scoreboard',
    url: 'axiom.org/validation',
    detail:
      'Cross-engine conformance published per program (provisions indexed, citations extracted, RuleSpec rules linked back to their source), with conformance and certification computed from the harness, never set by hand.',
  },
  {
    layer: 'The data',
    harness: 'The calibration dashboard',
    url: 'microcosm.institute',
    detail:
      'Every calibration target published with its error against what the statistical agencies print, releases compared side by side before anything is promoted.',
  },
];

export default function HarnessLayersSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>A harness at every layer</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-800 leading-relaxed max-w-5xl">
        AI writes the rules and builds the data, so each layer ships
        with a public harness that grades it, live.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-8 items-stretch">
        {layers.map((l) => (
          <div key={l.layer} className="content-card p-7 flex flex-col">
            <div className="flex items-baseline justify-between mb-3">
              <div className="slide-tag">{l.layer}</div>
              <span className="font-mono text-base text-pe-teal">{l.url}</span>
            </div>
            <h3 className="text-2xl font-bold text-pe-dark mb-3">
              {l.harness}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">{l.detail}</p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-6 max-w-5xl">
        <p className="text-lg text-gray-800 leading-relaxed">
          Trust is a URL you can open and re-run, and the
          microsimulation built on these layers is graded the same way.
        </p>
      </div>
    </Slide>
  );
}
