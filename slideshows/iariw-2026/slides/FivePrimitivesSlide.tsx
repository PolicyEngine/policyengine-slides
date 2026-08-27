import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const primitives = [
  {
    n: '1',
    need: 'Understand the policy rules',
    harness: 'Harness: encode gate + computed certification.',
  },
  {
    n: '2',
    need: 'Ready access to official statistics',
    harness: 'Harness: receipt integrity + dual-time witnesses.',
  },
  {
    n: '3',
    need: 'The world at a micro level',
    harness: 'Harness: published aggregates + record-level evals.',
  },
  {
    n: '4',
    need: 'A model that computes reforms',
    harness: 'Harness: explained divergence + oracle suite.',
  },
  {
    n: '5',
    need: 'Judgment to put it together — expertise, discretion, uncertainty',
    harness: 'Harness: resolution + calibration scoring.',
  },
];

export default function FivePrimitivesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What do we arm the AI with?</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Five primitives &mdash; each with a public harness: a feedback loop
          that grades whether it is getting it right.
        </p>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-5 gap-4">
        {primitives.map((p) => (
          <div key={p.n} className="content-card p-5 flex flex-col">
            <div className="font-mono text-3xl font-bold text-pe-teal leading-none">
              {p.n}
            </div>
            <p className="text-lg font-bold text-pe-dark leading-snug mt-3">
              {p.need}
            </p>
            <p className="text-sm text-gray-500 leading-snug mt-auto pt-4">
              {p.harness}
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8 max-w-5xl">
        <p className="text-xl text-gray-800 leading-relaxed">
          The same primitives norm AI agents and human researchers alike
          &mdash; toward faster, more accurate, more epistemically rigorous
          estimates of what policy will do.
        </p>
      </div>
    </Slide>
  );
}
