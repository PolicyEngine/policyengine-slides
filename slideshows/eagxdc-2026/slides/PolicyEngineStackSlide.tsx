import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import {
  IconChartBar,
  IconCode,
  IconDatabase,
  IconScale,
} from '@tabler/icons-react';

const layers = [
  {
    icon: IconCode,
    title: 'Rules',
    body: 'Federal and state tax-benefit law encoded as readable, open-source Python and YAML.',
  },
  {
    icon: IconDatabase,
    title: 'Data',
    body: 'Representative households built from public microdata, calibrated to administrative totals.',
  },
  {
    icon: IconScale,
    title: 'Reforms',
    body: 'Any parameter or formula change scored against the same baseline, household by household.',
  },
  {
    icon: IconChartBar,
    title: 'Outputs',
    body: 'Budget cost, poverty, inequality, winners and losers, marginal tax rates — all reproducible.',
  },
];

export default function PolicyEngineStackSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine: open microsimulation as public infrastructure</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Rules + data + reforms = a transparent simulator anyone can audit,
          extend, and call.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-4 gap-6 mt-12">
        {layers.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.title}
              className="content-card p-6 min-h-[340px] flex flex-col"
            >
              <div className="icon-circle mb-6">
                <Icon className="h-8 w-8 text-pe-teal" stroke={1.8} />
              </div>
              <div className="text-2xl font-black text-pe-dark mb-4">
                {layer.title}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{layer.body}</p>
            </div>
          );
        })}
      </div>

      <div className="accent-block mt-10 max-w-5xl">
        <p className="text-2xl text-gray-700 leading-relaxed">
          Open source unlocks the analysis surface. The same model serves
          households, researchers, advocates, congressional staff — and AI.
        </p>
      </div>
    </Slide>
  );
}
