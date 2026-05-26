import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const tiles = [
  {
    number: '1',
    title: 'Encode the rules',
    detail:
      'Computational representation of law and proposals. The rules-as-code layer.',
    small: '(Where AI is already changing PolicyEngine and Axiom)',
  },
  {
    number: '2',
    title: 'Build the models',
    detail:
      "Microsimulation, calibrated data, behavioral dynamics. The part I'm obsessed with.",
    small: '(Enhanced CPS, Microplex, labor supply response)',
  },
  {
    number: '3',
    title: 'Tell the story',
    detail:
      "Analysis, uncertainty, context. The quarter-cases the model can't capture.",
    small: '(Where neutral, calibrated forecasting meets reality)',
  },
];

export default function HowWeGetThereSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How do we get there?</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[0.95fr_1.15fr] gap-8 items-start">
        <div className="space-y-4 pt-1">
          <p className="text-xl text-gray-900 leading-snug font-light">
            Not enough economists in the country to do this manually. Not
            enough modelers. Not enough analysts.
          </p>
          <p className="text-xl text-gray-800 leading-snug">
            But we can{' '}
            <span className="font-medium text-pe-teal">
              teach AIs to research the way we do
            </span>
            . Orchestrate them. Be the conductors for this symphony.
          </p>
        </div>

        <div className="space-y-2">
          {tiles.map((tile) => (
            <div
              key={tile.number}
              className="content-card p-3 grid grid-cols-[52px_1fr] gap-3 items-start"
            >
              <div className="font-mono text-3xl font-bold text-pe-teal leading-none pt-1">
                {tile.number}
              </div>
              <div>
                <h3 className="text-base font-bold text-pe-dark mb-0.5">
                  {tile.title}
                </h3>
                <p className="text-sm text-gray-700 leading-snug">
                  {tile.detail}
                </p>
                <p className="text-xs text-gray-500 italic mt-1 leading-snug">
                  {tile.small}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600 italic text-center">
        Each of these layers is being transformed by AI. Let me show you how.
      </p>
    </Slide>
  );
}
