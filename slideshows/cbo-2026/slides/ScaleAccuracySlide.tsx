import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const changes = [
  {
    title: 'Policy search becomes normal',
    detail:
      'Members can compare near-miss designs before a bill hardens into a public position.',
  },
  {
    title: 'Distributional claims get cheaper to check',
    detail:
      'More people can ask who gains, who loses, and where effects concentrate.',
  },
  {
    title: 'Institutions become more important',
    detail:
      'At this scale, neutrality, provenance, and domain boundaries matter more, not less.',
  },
  {
    title: 'False precision becomes the danger',
    detail:
      'The scarce resource shifts from calculation to judgment about what should be trusted.',
  },
];

export default function ScaleAccuracySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How would information at this scale change society?</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[0.95fr_1.05fr] gap-8 items-start">
        <div className="space-y-5">
          <p className="text-2xl text-gray-800 leading-relaxed">
            If credible estimates became abundant, policy would start to look
            less like choosing among slogans and more like searching a design
            space.
          </p>

          <div className="accent-block">
            <p className="text-xl text-gray-800 leading-relaxed">
              The biggest social change may be agenda-setting: more ideas can be
              evaluated before organized interests decide which ones are viable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {changes.map((change) => (
            <div key={change.title} className="content-card p-5">
              <h3 className="text-lg font-bold text-pe-dark mb-2">
                {change.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {change.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-gray-500 italic text-center">
        More information does not make policy technocratic. It changes who can
        see consequences early enough to act on them.
      </p>
    </Slide>
  );
}
