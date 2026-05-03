import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import {
  IconDatabase,
  IconAdjustmentsHorizontal,
  IconBraces,
} from '@tabler/icons-react';

const components = [
  {
    icon: IconDatabase,
    name: 'Enhanced CPS',
    pkg: 'policyengine-us-data',
    body: 'Public-use survey microdata enriched with imputed tax and asset variables, calibrated to administrative totals.',
  },
  {
    icon: IconBraces,
    name: 'microimpute',
    pkg: 'pip install microimpute',
    body: 'ML-based variable imputation across donor and recipient datasets — used to fill in PUF tax detail on CPS households.',
  },
  {
    icon: IconAdjustmentsHorizontal,
    name: 'microcalibrate',
    pkg: 'pip install microcalibrate',
    body: 'Survey weight calibration via L0-regularized neural reweighting to match administrative population targets.',
  },
];

export default function AIInModelSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI and ML inside the simulator itself</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          The simulation engine is deterministic. The data underneath uses
          modern ML to reach research-grade accuracy from public sources.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-9">
        {components.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.name} className="content-card p-6">
              <div className="icon-circle mb-5">
                <Icon className="h-7 w-7 text-pe-teal" stroke={1.8} />
              </div>
              <div className="text-2xl font-black text-pe-dark mb-1">
                {c.name}
              </div>
              <p className="text-xs font-mono text-gray-400 mb-3">{c.pkg}</p>
              <p className="text-base text-gray-600 leading-relaxed">{c.body}</p>
            </div>
          );
        })}
      </div>

      <div className="accent-block mt-9 max-w-5xl">
        <p className="text-2xl text-gray-700 leading-relaxed">
          Open-source, pip-installable, separately useful. Calibration of any
          survey to known totals is its own community problem — not just a
          PolicyEngine internal.
        </p>
      </div>
    </Slide>
  );
}
