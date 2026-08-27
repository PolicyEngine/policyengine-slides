import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const layers = [
  {
    name: 'Axiom',
    logo: '/logos/axiom-foundation.svg',
    alt: 'The Axiom Foundation',
    width: 1026,
    height: 363,
    displayHeight: 29,
    claim: 'What the law says',
    harness:
      'Three-part encode gate (deterministic checks · oracles · AI judge) + computed certification.',
  },
  {
    name: 'Chronicle',
    logo: '/logos/chronicle.png',
    alt: 'Chronicle',
    width: 732,
    height: 160,
    displayHeight: 24,
    claim: 'What happened, witnessed',
    harness:
      'Receipt verification · chain integrity · dual-time witnesses · chronology · byte fidelity · latency — not accuracy.',
  },
  {
    name: 'Microcosm',
    logo: '/logos/microcosm.png',
    alt: 'Microcosm',
    width: 608,
    height: 84,
    displayHeight: 22,
    claim: 'Who exists, in miniature',
    harness: 'Published-aggregate calibration + record-level evals.',
  },
  {
    name: 'PolicyEngine',
    logo: '/logos/teal.svg',
    alt: 'PolicyEngine',
    width: 350,
    height: 100,
    displayHeight: 28,
    claim: 'What rules do to entities',
    harness: 'Explained divergence against external models + oracle suite.',
  },
  {
    name: 'Thesis',
    logo: '/logos/thesis-institute.png',
    alt: 'The Thesis Institute',
    width: 532,
    height: 112,
    displayHeight: 24,
    claim: 'What happens next, probabilistically',
    harness:
      'Resolution against Chronicle’s first prints + calibration scoring.',
  },
];

export default function HarnessRecapSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          Every layer makes a different claim &mdash; so each needs a different
          public test
        </SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[0.72fr_0.95fr_1.8fr] gap-7 px-5 pb-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
        <div>Layer</div>
        <div>Claim</div>
        <div>Public harness</div>
      </div>

      <div className="border-y border-gray-200">
        {layers.map((layer, index) => (
          <div
            key={layer.name}
            className={`grid grid-cols-[0.72fr_0.95fr_1.8fr] gap-7 items-center px-5 py-3.5 ${
              index > 0 ? 'border-t border-gray-200' : ''
            }`}
          >
            <div className="h-9 flex items-center">
              <Image
                src={layer.logo}
                alt={layer.alt}
                width={layer.width}
                height={layer.height}
                style={{ height: `${layer.displayHeight}px`, width: 'auto' }}
              />
            </div>
            <p className="text-lg font-semibold text-pe-dark leading-snug">
              {layer.claim}
            </p>
            <p className="text-base text-gray-700 leading-snug">
              {layer.harness}
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-6">
        <p className="text-lg text-gray-800 leading-relaxed">
          The harnesses interlock: Chronicle resolves Thesis; Microcosm feeds
          PolicyEngine; Axiom supplies the rules and answer keys.
        </p>
      </div>
    </Slide>
  );
}
