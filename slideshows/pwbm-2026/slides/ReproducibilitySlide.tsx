import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const points = [
  {
    title: 'One install command',
    detail:
      '`pip install policyengine` ships the Python client, the rules, and a pinned reference to the certified microdata artifact.',
  },
  {
    title: 'Release manifests pin the whole stack',
    detail:
      'A certified release bundle ties one rules version to one calibrated microdata artifact; runtime refuses mismatched combinations.',
  },
  {
    title: 'Every run is citable',
    detail:
      'A simulation-level record pins the bundle, the reform JSON, and the results JSON, so a paper can cite the exact run.',
  },
];

export default function ReproducibilitySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Reproducibility ships as a feature</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          The Python package pins rules and microdata together. A procedure to
          certify bundles is in flight.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1.4fr_0.6fr] gap-8 mt-8">
        <div className="flex flex-col gap-5">
          {points.map((point) => (
            <div key={point.title} className="content-card p-6">
              <h3 className="font-mono text-xl font-bold text-gray-800 mb-2">
                {point.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {point.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="content-card p-5 text-center">
            <div className="stat-number text-5xl">243</div>
            <p className="text-sm text-gray-500 mt-2 leading-snug">
              merged PRs in core model repos, past 7 days
            </p>
          </div>
          <div className="content-card p-5 text-center">
            <div className="stat-number text-5xl">108.6k</div>
            <p className="text-sm text-gray-500 mt-2 leading-snug">
              lines touched (+94.3k / −14.3k)
            </p>
          </div>
          <div
            className="rounded-2xl px-5 py-4 text-white flex-1"
            style={{
              background: 'linear-gradient(135deg, #1d4044 0%, #17343a 100%)',
            }}
          >
            <p className="text-base leading-relaxed text-white/90">
              At that pace, humans can’t track what changed between runs.
              Reproducibility has to be automated, not documented.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
