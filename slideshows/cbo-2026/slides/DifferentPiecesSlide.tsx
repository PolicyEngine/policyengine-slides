import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const pieces = [
  { who: 'Statutory authorities', what: 'Encoded law', detail: 'Federal, state, local rules as machine-readable parameters with citations.' },
  { who: 'Census, BLS, IRS, CBO', what: 'Ground-truth statistics', detail: 'Published, scheduled, authoritative series the whole community can resolve forecasts against.' },
  { who: 'PolicyEngine, TPC, ITEP, others', what: 'Microsim engines', detail: 'Mechanistic rules + calibrated microdata, open-source and reproducible.' },
  { who: 'CBO, JCT, Treasury', what: 'Behavioral and longitudinal models', detail: 'Macro feedback, lifetime projections, private microdata under strict governance.' },
  { who: 'Penn Wharton, Yale Budget Lab, Tax Foundation, think tanks', what: 'Specialized models', detail: 'Sector-specific, region-specific, reform-specific analyses.' },
  { who: 'Forecasting community', what: 'Calibration against reality', detail: 'Scored predictions on government cells and policy parameters as feedback loops.' },
];

export default function DifferentPiecesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Different institutions hold different pieces</SlideTitle>
      </SlideHeader>

      <div className="mt-8 space-y-3">
        {pieces.map((p) => (
          <div key={p.who} className="grid grid-cols-[1fr_1fr_1.4fr] gap-6 items-start p-4 rounded-lg hover:bg-gray-50">
            <div className="text-base text-gray-600 leading-snug">{p.who}</div>
            <div className="text-lg font-bold text-pe-teal leading-snug">{p.what}</div>
            <div className="text-base text-gray-700 leading-snug">{p.detail}</div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xl text-gray-600 italic max-w-5xl">
        Nobody holds all the pieces. The interesting question is how they fit together.
      </p>
    </Slide>
  );
}
