import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const ingredients = [
  {
    title: 'Models AI can call accurately',
    detail:
      'Encoded rules. Calibrated microdata. Behavioral theory. Validation gates. The substrate we have been building.',
  },
  {
    title: 'Feedback between agents',
    detail:
      'Predictions logged, scored against reality, shared. Agents learn from each other&apos;s reasoning the way we do.',
  },
  {
    title: 'Orchestration for public decision-making',
    detail:
      'Routing the right model to the right question, surfacing uncertainty honestly, presenting trade-offs in a form policymakers can act on.',
  },
];

export default function PredictAllSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Back to where we started</SlideTitle>
      </SlideHeader>

      <div className="mt-7 space-y-6">
        <p className="text-2xl text-gray-900 leading-relaxed font-light">
          What if we could{' '}
          <span className="font-medium text-pe-teal">
            predict every government indicator, every policy, every
            counterfactual
          </span>{' '}
          &mdash; and do it with honest uncertainty?
        </p>

        <p className="text-xl text-gray-700 leading-relaxed">
          Could we equip AIs to use the models we built, learn from one
          another&apos;s predictions, and orchestrate themselves to inform
          public decisions &mdash; all without giving up the calibration
          discipline that makes the numbers worth using?
        </p>

        <div className="grid grid-cols-3 gap-5">
          {ingredients.map((i) => (
            <div key={i.title} className="content-card p-5">
              <h3 className="text-base font-bold text-pe-dark mb-2">
                {i.title}
              </h3>
              <p
                className="text-sm text-gray-700 leading-snug"
                dangerouslySetInnerHTML={{ __html: i.detail }}
              />
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 italic text-center max-w-4xl mx-auto pt-1">
          Each of you has spent a career building parts of this. The new
          question is what the parts can do together.
        </p>
      </div>
    </Slide>
  );
}
