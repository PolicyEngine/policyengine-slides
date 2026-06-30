import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const examples = [
  {
    title: 'One Big Beautiful Bill Act',
    body: 'A household-by-household explorer of the 2025 federal tax law.',
  },
  {
    title: 'Child Tax Credit — both parties',
    body: 'Modeled the Harris and Vance proposals, and the bipartisan Wyden–Smith expansion.',
  },
  {
    title: 'EITC reforms',
    body: "Including Scott Winship's individualized EITC at the American Enterprise Institute.",
  },
  {
    title: 'Research partners',
    body: 'NBER, the Atlanta Fed, Brookings, and the Niskanen Center.',
  },
];

export default function FederalSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The same engine scores federal law</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-500 -mt-4 mb-9">
        Built and trusted across the political spectrum
      </p>

      <div className="grid grid-cols-2 gap-5">
        {examples.map((e) => (
          <div key={e.title} className="content-card p-6">
            <div className="text-2xl font-bold text-pe-dark mb-1">{e.title}</div>
            <p className="text-lg text-gray-600 leading-snug">{e.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 accent-block">
        <p className="text-2xl font-medium text-pe-dark">
          Credible and nonpartisan — the foundation that political work has to stand on.
        </p>
      </div>
    </Slide>
  );
}
