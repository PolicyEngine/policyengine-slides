import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** The six sections David set, with Fernando's segment between the demo and
 * what's next. Who presents follows the webinar listing; no minutes are set
 * yet, so the first column numbers the sections. */
const flow: { step: string; what: string; who: string }[] = [
  { step: '1', what: 'PolicyEngine in brief', who: 'PolicyEngine' },
  { step: '2', what: 'Proposition 40: what it would do', who: 'PolicyEngine' },
  { step: '3', what: 'The two competing estimates', who: 'PolicyEngine' },
  { step: '4', what: 'Live demo: both sets of assumptions in one model', who: 'PolicyEngine' },
  { step: '5', what: 'Reconciling the two analyses: an Open Policy Analysis', who: 'Fernando Hoces de la Guardia' },
  { step: '6', what: 'What we are doing next', who: 'PolicyEngine' },
  { step: '7', what: 'Q&A', who: 'Everyone' },
];

export default function FlowSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Agenda</SlideTitle>
      </SlideHeader>
      <div className="-mt-2 content-card divide-y divide-gray-200">
        {flow.map((row) => (
          <div key={row.step} className="grid grid-cols-[60px_1fr_auto] items-baseline gap-6 px-8 py-3">
            <span className="font-mono text-lg text-pe-teal">{row.step}</span>
            <span className="text-xl text-gray-800">{row.what}</span>
            <span className="text-base text-gray-500">{row.who}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-base text-gray-500">
        PolicyEngine is a nonprofit and takes no position on Proposition 40 or any ballot measure.
      </p>
    </Slide>
  );
}
