import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { BigStatement, Kicker } from './WorkshopComponents';

const problems = [
  {
    title: 'The dials are inside the building',
    body: 'The analyst running the model is the only one who can swap an elasticity, change a labor-share assumption, or test a tail scenario.',
  },
  {
    title: 'No public contribution surface',
    body: 'A state expert with sharper local knowledge, a researcher with a better elasticity estimate, an EA with a forecasting prior — none can plug it in.',
  },
  {
    title: 'AI agents can\'t reach in',
    body: 'When a policymaker asks an LLM "what does this reform cost?", the LLM has no API to call. So it guesses.',
  },
];

export default function ClosedModelSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Most of these models are closed</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Always a problem. With AI introducing rapidly evolving assumptions
          about the economy, it&apos;s now an acute one.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.95fr_1.05fr] gap-9 mt-7 items-center">
        <div>
          <Kicker>The structural issue</Kicker>
          <BigStatement>
            You can&apos;t stress-test
            <br />
            an AI shock from outside
            <br />
            <span className="text-pe-teal">a closed model.</span>
          </BigStatement>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            The forecasters who think hardest about AI&apos;s economic
            trajectory are not the same people holding the keys to CBO,
            Treasury OTA, JCT. The two communities barely interface.
          </p>
        </div>

        <div className="space-y-4">
          {problems.map((p) => (
            <div key={p.title} className="content-card p-5">
              <div className="text-xl font-black text-pe-dark mb-2">
                {p.title}
              </div>
              <p className="text-base text-gray-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
