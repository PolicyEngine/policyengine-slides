import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const levels = [
  {
    tag: 'Household',
    title: 'Your family',
    body: 'The exact dollar change for one household — income, taxes, benefits, and the cliffs in between.',
  },
  {
    tag: 'District',
    title: 'Your district',
    body: 'Aggregated to all 435 congressional districts today — with state legislative districts next.',
  },
  {
    tag: 'State & nation',
    title: 'Your state and the country',
    body: 'Revenue, poverty, inequality, and who gains or loses — with demographic crosstabs.',
  },
];

export default function ThreeLevelsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>One engine, three levels of impact</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-500 -mt-4 mb-9">
        The same calculation, zoomed all the way in or all the way out
      </p>

      <div className="grid grid-cols-3 gap-6">
        {levels.map((l, i) => (
          <div key={l.tag} className="relative">
            <div className="content-card p-8 h-full">
              <div className="slide-tag mb-5">{l.tag}</div>
              <div className="text-3xl font-bold text-pe-dark mb-3">{l.title}</div>
              <p className="text-xl text-gray-600 leading-snug">{l.body}</p>
            </div>
            {i < levels.length - 1 && (
              <div className="absolute top-1/2 -right-5 -translate-y-1/2 text-4xl text-pe-teal font-bold z-10">
                ›
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-9 text-xl text-gray-500">
        A legislator and the family they represent see the same policy — from two ends of the same model.
      </p>
    </Slide>
  );
}
