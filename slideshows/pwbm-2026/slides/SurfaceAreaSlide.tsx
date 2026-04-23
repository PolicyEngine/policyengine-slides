import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const surfaces = [
  {
    title: 'Research-style outputs',
    detail:
      'Distribution tables, poverty metrics, winners/losers analysis, household-by-household comparisons.',
  },
  {
    title: 'Programmatic access',
    detail:
      'Python, APIs, and household services expose the same engine used in the web app.',
  },
  {
    title: 'Live analyst surfaces',
    detail:
      'Recent product work includes SPM, marriage, and richer household configuration flows.',
  },
];

export default function SurfaceAreaSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>This already ships in analyst-facing surfaces</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          The same engine powers research workflows, web products, APIs, and
          explainers.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1.05fr,0.95fr] gap-8 mt-6">
        <div className="content-card overflow-hidden">
          <Image
            src="/screenshots/pe-winners-losers.png"
            alt="PolicyEngine winners and losers analysis"
            width={1600}
            height={1200}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          {surfaces.map((surface) => (
            <div key={surface.title} className="content-card p-6">
              <h3 className="font-mono text-xl font-bold text-gray-800 mb-3">
                {surface.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {surface.detail}
              </p>
            </div>
          ))}

          <div className="accent-block mt-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              This is useful for PWBM because it means the household-policy
              layer is already being exercised in public, not just in one-off
              research scripts.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
