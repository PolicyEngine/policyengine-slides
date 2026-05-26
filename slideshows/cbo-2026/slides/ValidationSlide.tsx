import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const checks = [
  { label: 'Unit tests', count: '~30,000', detail: 'Per-variable, per-edge-case, run on every PR.' },
  { label: 'TAXSIM agreement', count: '99.9%+', detail: 'Cross-validated against the NBER calculator on millions of household scenarios.' },
  { label: 'External benchmarks', count: 'Live', detail: 'CTC, EITC, SNAP, ACA against Treasury, CBO, USDA, and Kaiser Family Foundation publications.' },
  { label: 'Reproducibility', count: '100%', detail: 'Every published number is re-runnable from source code and public data.' },
];

export default function ValidationSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Validation: visible, testable, public</SlideTitle>
      </SlideHeader>

      <div className="mt-12 grid grid-cols-2 gap-6">
        {checks.map((c) => (
          <div key={c.label} className="content-card p-6">
            <div className="flex items-baseline gap-4 mb-2">
              <div className="stat-number text-4xl text-pe-teal">{c.count}</div>
              <h3 className="text-xl font-bold text-pe-dark">{c.label}</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">{c.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xl text-gray-600 italic max-w-4xl">
        Open source makes the structural choices inspectable; alternative assumptions can be swapped via reforms and re-run.
      </p>
    </Slide>
  );
}
