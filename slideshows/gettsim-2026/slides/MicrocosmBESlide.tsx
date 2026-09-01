import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stats = [
  { value: '57,240', label: 'household records' },
  { value: '254', label: 'calibration targets' },
  { value: '1.84%', label: 'mean absolute error' },
  { value: '242/254', label: 'targets within 5%' },
];

export default function MicrocosmBESlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Microcosm-BE: a calibrated Belgian population</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="content-card p-5 text-center">
            <div className="stat-number text-5xl">{s.value}</div>
            <p className="text-base text-gray-700 mt-2 leading-snug">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-500 text-center">
        v0.5 release. Targets are sums of Chronicle facts &mdash; Belgian
        administrative and national-accounts data. Surveys enter as validation
        only.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="content-card p-5">
          <h3 className="text-lg font-bold text-pe-dark mb-2">
            Every EUROMOD output column accounted for
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            All 182 substantive EUROMOD output columns sit in a ledger on this
            release: 10 matched to 1e-9, 143 explained, 29 named gaps,
            0 unclassified.
          </p>
        </div>

        <div className="content-card p-5">
          <h3 className="text-lg font-bold text-pe-dark mb-2">
            Same population, two engines
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Joint-vs-separate PIT on the identical calibrated population
            (v0.2): &euro;2.16B in Axiom, &euro;1.83B in EUROMOD. The residual
            is decomposed mechanism by mechanism.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-[1.4fr_1fr] gap-6 items-stretch">
        <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Provenance
          </p>
          <p className="text-sm text-gray-600 leading-snug">
            Support records are a reweighted US survey donor pool; a Belgian
            donor pool is the planned upgrade.
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
            Live
          </p>
          <p className="text-sm text-gray-600 leading-snug">
            The calibration dashboard at{' '}
            <span className="font-mono text-pe-teal">microcosm.institute</span>{' '}
            serves this release publicly.
          </p>
        </div>
      </div>
    </Slide>
  );
}
