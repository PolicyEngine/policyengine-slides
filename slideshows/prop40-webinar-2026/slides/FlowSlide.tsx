import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** David's section order, with Fernando's segment between the demo and what's
 * next, and David's dashboard walk-through before Q&A. The minutes add up to
 * the hour. */
const flow: { minutes: string; what: string; who: string }[] = [
  { minutes: '4 min', what: 'Welcome and PolicyEngine in brief', who: 'Max Ghenis' },
  { minutes: '10 min', what: 'Proposition 40 and the two competing estimates', who: 'David Trimmer' },
  { minutes: '11 min', what: 'Live demo: both sets of assumptions in one model', who: 'Max Ghenis' },
  { minutes: '15 min', what: 'Reconciling the two analyses: an Open Policy Analysis', who: 'Fernando Hoces de la Guardia' },
  { minutes: '2 min', what: 'What we are doing next', who: 'Max Ghenis' },
  { minutes: '5 min', what: 'Beyond Prop 40: the 2026 ballot measures dashboard', who: 'David Trimmer' },
  { minutes: '13 min', what: 'Q&A', who: 'Everyone' },
];

export default function FlowSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Agenda</SlideTitle>
      </SlideHeader>
      <div className="-mt-2 content-card divide-y divide-gray-200">
        {flow.map((row) => (
          <div key={row.what} className="grid grid-cols-[100px_1fr_auto] items-baseline gap-6 px-8 py-3">
            <span className="font-mono text-lg text-pe-teal">{row.minutes}</span>
            <span className="text-xl text-gray-800">{row.what}</span>
            <span className="text-base text-gray-500">{row.who}</span>
          </div>
        ))}
      </div>
    </Slide>
  );
}
