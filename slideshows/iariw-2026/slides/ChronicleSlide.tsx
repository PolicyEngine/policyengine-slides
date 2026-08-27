import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const belgianPackages = [
  'Statbel — fiscal income by €1,000 class, population by region, sex, and age',
  'SPF Finances, ONSS, ONEM — tax and social security administrative totals',
  'Eurostat — national accounts for the household sector',
  'Federal Planning Bureau — the medium-term outlook, history and forecast',
  'JRC — published EUROMOD baseline statistics',
];

export default function ChronicleSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Chronicle: official statistics, as facts</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[1fr_1fr] gap-8 items-start">
        <div className="space-y-5">
          <p className="text-xl text-gray-800 leading-relaxed">
            A source-backed fact store: every published value captured with its
            type, unit, geography, period, and lineage back to the source
            artifact.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="content-card p-5 text-center">
              <div className="stat-number text-5xl">171,855</div>
              <p className="text-base text-gray-700 mt-1">
                facts ingested to date
              </p>
            </div>
            <div className="content-card p-5 text-center">
              <div className="stat-number text-5xl">40</div>
              <p className="text-base text-gray-700 mt-1">
                official publishers
              </p>
            </div>
          </div>

          <div className="accent-block">
            <p className="text-base text-gray-700 leading-relaxed">
              The feedback loop: Microcosm calibrates only to sums of Chronicle
              facts, so every target traces to a publisher &mdash; and gaps in
              the store show up as gaps in what can be calibrated.
            </p>
          </div>
        </div>

        <div className="content-card p-6">
          <div className="slide-tag mb-4">The Belgian shelf, built this summer</div>
          <ul className="space-y-3">
            {belgianPackages.map((p) => (
              <li key={p} className="flex gap-3 text-base text-gray-700">
                <span className="text-pe-teal font-bold">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 italic mt-5">
            Survey aggregates are labeled as such and enter downstream work as
            validation only.
          </p>
        </div>
      </div>
    </Slide>
  );
}
