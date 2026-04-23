import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const tracks = [
  {
    title: 'Rules depth',
    repo: 'policyengine-us',
    items: [
      'Basic Health Program coverage and New York transition logic',
      'Medicare Part B now handled rules-first in SPM medical OOP',
      'State tax and senior deduction fixes across multiple states',
    ],
  },
  {
    title: 'Data and calibration',
    repo: 'policyengine-us-data',
    items: [
      'ACA marketplace ETL and calibration work',
      'EITC targets by state and AGI cross-tabs',
      'TRACE declarations for certified US data releases',
    ],
  },
  {
    title: 'Infra and APIs',
    repo: 'policyengine.py / policyengine-api / household-api',
    items: [
      'Release bundles and TRO validation plumbing',
      'API migration onto the newer PolicyEngine stack',
      'Bundle metadata exposed in household calculation responses',
    ],
  },
  {
    title: 'Analyst surfaces',
    repo: 'policyengine-app-v2',
    items: [
      'Household model migration and cleanup',
      'Recent `/us/spm-calculator` surface work',
      'More stable reform-builder and multizone app flows',
    ],
  },
  {
    title: 'Quality and adjacent research',
    repo: 'policyengine-core / policybench',
    items: [
      'Core cache / reform invalidation correctness fixes',
      'Benchmark artifact hardening in PolicyBench',
      'Reusable validation harnesses for calculator comparisons',
    ],
  },
];

export default function RecentWorkBreadthSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Recent work has expanded the stack in every direction</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Looking across local repo activity from March 15 to April 22, 2026.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {tracks.slice(0, 4).map((track) => (
          <div key={track.title} className="content-card p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="font-mono text-xl font-bold text-gray-800">
                {track.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {track.repo}
              </span>
            </div>
            <ul className="space-y-3 text-lg text-gray-700">
              {track.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pe-teal flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="content-card p-6 mt-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="font-mono text-xl font-bold text-gray-800">
            {tracks[4].title}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            {tracks[4].repo}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {tracks[4].items.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-gray-200 bg-slate-50 px-5 py-4 text-lg text-gray-700 leading-relaxed"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
