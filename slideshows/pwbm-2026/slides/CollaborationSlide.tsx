import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const ideas = [
  {
    title: 'Cross-model reform benchmark',
    detail:
      'Pick a small shared reform set and compare household, aggregate, and dynamic outputs side by side.',
  },
  {
    title: 'Handoff experiment',
    detail:
      'Define the minimal micro-output schema that a structural model would actually want from a detailed tax-benefit engine.',
  },
  {
    title: 'Reproducibility standard',
    detail:
      'Agree on a citable packet for rules, microdata artifact, reform payload, and published outputs.',
  },
  {
    title: 'Shared methods note',
    detail:
      'Write down where detailed microsim ends, where dynamic structure begins, and which questions belong at each layer.',
  },
];

export default function CollaborationSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Where a collaboration would be genuinely useful</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-8">
        {ideas.map((idea) => (
          <div key={idea.title} className="content-card p-6">
            <h3 className="font-mono text-xl font-bold text-gray-800 mb-3">
              {idea.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {idea.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8">
        <p className="text-2xl text-gray-700 leading-relaxed">
          The practical starting point is small: one reform family, one shared
          output schema, one replication packet.
        </p>
      </div>
    </Slide>
  );
}
