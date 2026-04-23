import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const axiomPoints = [
  'Encode public rules as machine-readable, open infrastructure.',
  'Build standards many organizations can consume, not one closed application.',
  'Use AI to accelerate encoding while keeping deterministic execution and validation.',
];

export default function AxiomFutureSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI changes the size of the mission</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-6">
        <div className="flex flex-col gap-5">
          <div className="content-card p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">
              The shift
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once rule encoding starts to scale, the question stops being
              &ldquo;how do we cover more programs?&rdquo; and becomes
              &ldquo;what if public rules themselves become open infrastructure?&rdquo;
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              That is bigger than one microsimulation model, and bigger than one
              institution. It points toward shared standards, validation, and
              interoperability.
            </p>
          </div>

        </div>

        <div
          className="rounded-2xl p-6 text-white"
          style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
            Axiom Foundation
          </p>
          <div className="space-y-4">
            {axiomPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="text-[var(--pe-teal)] font-bold mt-0.5 flex-shrink-0">
                  →
                </span>
                <p className="text-xl text-white/85 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accent-block mt-8">
        <p className="text-2xl text-gray-700 leading-relaxed">
          If AI lowers the cost of rule encoding, the next bottleneck is shared
          infrastructure the rest of the policy ecosystem can trust.
        </p>
      </div>
    </Slide>
  );
}
