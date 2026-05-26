import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const pillars = [
  {
    title: 'Rules',
    detail: 'Federal and state tax and benefit programs, encoded as parameters and executable code, with citations to statute and regulation.',
  },
  {
    title: 'Data',
    detail: 'Microdata calibrated from CPS, IRS SOI, ACS, SCF, and SIPP to ~7,000 administrative targets.',
  },
  {
    title: 'Behavior',
    detail: 'Labor-supply elasticities and take-up models, configurable and openly documented.',
  },
];

export default function PEOverviewSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Three layers, each open-source</SlideTitle>
      </SlideHeader>

      <div className="mt-12 grid grid-cols-3 gap-8">
        {pillars.map((p) => (
          <div key={p.title} className="content-card p-8">
            <h3 className="text-3xl font-bold text-pe-teal mb-4">{p.title}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{p.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-xl text-gray-600 max-w-4xl italic">
        Reproducible workflows: versioned parameters, versioned data, versioned code. Re-run any year, any policy, any assumption.
      </p>
    </Slide>
  );
}
