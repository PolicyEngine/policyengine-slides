import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sources = [
  { code: 'CPS', name: 'Current Population Survey', role: 'Spine — demographics, income, labor force.' },
  { code: 'ACS', name: 'American Community Survey', role: 'Geography, housing, sub-state detail.' },
  { code: 'SCF', name: 'Survey of Consumer Finances', role: 'Wealth, capital income, debt.' },
  { code: 'SIPP', name: 'Survey of Income and Program Participation', role: 'Program take-up, dynamics, transitions.' },
  { code: 'PUF', name: 'IRS Public Use File', role: 'Tax-unit income detail, itemized deductions.' },
];

export default function ImputationSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Imputation at scale: many sources, one microdata</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[1fr_0.95fr] gap-8 items-start">
        <div className="space-y-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            Sources we fuse
          </p>
          {sources.map((s) => (
            <div
              key={s.code}
              className="content-card p-4 grid grid-cols-[80px_1fr] gap-3 items-baseline"
            >
              <div className="font-mono text-2xl font-bold text-pe-teal">
                {s.code}
              </div>
              <div>
                <p className="text-sm font-semibold text-pe-dark">{s.name}</p>
                <p className="text-sm text-gray-600 leading-snug">{s.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          <div>
            <div className="slide-tag mb-2">Technique</div>
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="font-semibold">Quantile regression forests.</span>{' '}
              For each variable missing from the spine, learn its full
              conditional distribution given many potentially non-linear
              predictors &mdash; then sample from it.
            </p>
            <p className="text-sm text-gray-500 leading-snug mt-2">
              Not just a mean estimate. The whole distribution, including the
              tails that matter for distributional analysis.
            </p>
          </div>

          <div>
            <div className="slide-tag mb-2">Where AI helps</div>
            <p className="text-base text-gray-700 leading-relaxed">
              The hard part is knowing what each column actually means
              &mdash; the same name across two surveys often hides different
              definitions. AI reads the documentation, surfaces mismatches,
              and proposes the apples-to-apples mapping. Get this wrong and
              the imputation silently drifts.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
