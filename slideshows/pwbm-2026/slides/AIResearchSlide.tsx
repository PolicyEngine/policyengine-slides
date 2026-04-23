import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const cards = [
  {
    title: 'PolicyBench',
    eyebrow: 'Benchmarking AI alone',
    points: [
      'US no-tools benchmark: top score 73.35 across 12,974 parsed tax-benefit predictions.',
      'Archived tool-assisted pilot: 4,200 of 4,200 predictions exactly matched the simulator.',
      'The lesson is useful for research audiences too: models still need structured calculators.',
    ],
  },
  {
    title: 'LLM ETI',
    eyebrow: 'AI as economic agent',
    points: [
      'In the notch replication, LLMs showed human-like bunching with implied ETI of at least 0.53.',
      'In the tax survey, GPT-4o produced a mean ETI estimate of 0.36.',
      'That sits close to canonical empirical ranges of 0.25 to 0.40.',
    ],
  },
  {
    title: 'Economic Parameter Atlas',
    eyebrow: 'Belief elicitation',
    points: [
      'Interactive viewer for elicited parameter distributions across 21 quantities and 11 frontier models.',
      'Shows pooled, REML, and Bayesian intervals rather than one fake point estimate.',
      'A useful way to surface model priors about elasticities before hard-coding them.',
    ],
  },
];

export default function AIResearchSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>We are starting to benchmark and elicit AI, not just deploy it</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {cards.map((card) => (
          <div key={card.title} className="content-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              {card.eyebrow}
            </p>
            <h3 className="font-mono text-xl font-bold text-gray-800 mb-4">
              {card.title}
            </h3>
            <div className="space-y-3 text-lg text-gray-700">
              {card.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pe-teal flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-8 rounded-2xl px-8 py-6 text-white"
        style={{ background: 'linear-gradient(135deg, #5c3d2e 0%, #3e2518 100%)' }}
      >
        <p className="text-2xl leading-relaxed text-white/90">
          The pattern is consistent: AI alone is informative, but the combination
          of structured policy models, explicit tools, and transparent evaluation
          is what makes it credible.
        </p>
      </div>
    </Slide>
  );
}
