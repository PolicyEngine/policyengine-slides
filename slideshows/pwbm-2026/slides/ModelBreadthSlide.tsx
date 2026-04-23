import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stats = [
  { value: '66', label: 'Modelled programs in the live US tracker' },
  { value: '57', label: 'Marked complete today' },
  { value: '50 + DC', label: 'States with complete implementations represented' },
  { value: '60', label: 'Rules linked to computation-tree variables' },
];

const takeaways = [
  'One tracker covers IRS, USDA, HHS, SSA, HUD, DOE, FCC, state, and local rules.',
  'Each program links to its parameters, variables, tests, and computation tree.',
  'The stack spans taxes and benefits, federal through local, in one rules engine.',
];

export default function ModelBreadthSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>We publish a live tracker of modeled rules</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          `policyengine-model` exposes program coverage as a first-class product surface.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1.08fr,0.92fr] gap-8 mt-6">
        <div className="content-card overflow-hidden border border-gray-200">
          <Image
            src="/screenshots/pwbm-2026/model-rules-coverage.png"
            alt="PolicyEngine model coverage tracker"
            width={2560}
            height={1440}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="content-card p-5">
                <div className="stat-number text-5xl">{stat.value}</div>
                <p className="text-sm text-gray-500 mt-2 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="content-card p-6">
            <h3 className="font-mono text-xl font-bold text-gray-800 mb-4">
              What the tracker shows
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              {takeaways.map((takeaway) => (
                <li key={takeaway} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pe-teal flex-shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="accent-block mt-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              TAXSIM established the canonical open tax interface. PolicyEngine
              extends that pattern across taxes and benefits.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
