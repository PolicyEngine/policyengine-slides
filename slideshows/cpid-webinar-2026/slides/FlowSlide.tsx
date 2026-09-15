import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const flow: { minutes: string; what: string; who: string }[] = [
  { minutes: '5 min', what: 'Welcome, the new numbers, and the prediction we registered', who: 'Max Ghenis' },
  { minutes: '10 min', what: 'The new Census numbers: remarks', who: 'Cynthia Osborne and Joshua McCabe' },
  { minutes: '10 min', what: 'PolicyEngine, microsimulation, and the SPM', who: 'Max Ghenis' },
  { minutes: '20 min', what: 'Child Poverty Impact Dashboard: live demo', who: 'David Trimmer' },
  { minutes: '15 min', what: 'Q&A', who: 'Everyone' },
];

export default function FlowSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>The next hour</SlideTitle>
      </SlideHeader>
      <div className="mt-6 content-card divide-y divide-gray-200">
        {flow.map((row) => (
          <div key={row.what} className="grid grid-cols-[110px_1fr_auto] items-baseline gap-6 px-8 py-5">
            <span className="font-mono text-lg text-pe-teal">{row.minutes}</span>
            <span className="text-2xl text-gray-800">{row.what}</span>
            <span className="text-lg text-gray-500">{row.who}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-base text-gray-500">
        The Child Poverty Impact Dashboard was commissioned by the
        Pritzker Children&apos;s Initiative.
      </p>
    </Slide>
  );
}
