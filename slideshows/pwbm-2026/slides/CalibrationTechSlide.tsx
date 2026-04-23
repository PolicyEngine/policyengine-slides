import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const qrfPoints = [
  {
    label: 'Problem',
    detail:
      'CPS lacks variables the tax calculator needs (detailed capital gains, itemized-deduction components, taxable-SS split). The PUF has them but no benefit or demographic detail.',
  },
  {
    label: 'Method',
    detail:
      'A Quantile Regression Forest trained on PUF predicts the conditional distribution of each missing variable given common covariates, then samples a value for each CPS record.',
  },
  {
    label: 'Why QRF',
    detail:
      'Preserves dispersion and tail behavior that point estimates (mean or median) flatten. Implemented via the `microimpute` package.',
  },
];

const calibPoints = [
  {
    label: 'Decision variable',
    detail:
      'One weight per household–clone. Stack households across geographies into a sparse targets × records matrix.',
  },
  {
    label: 'Loss',
    detail:
      'Relative squared error against thousands of national, state, and congressional-district aggregates pulled from IRS SOI, Census, and agency totals.',
  },
  {
    label: 'Optimizer',
    detail:
      'PyTorch gradient descent with L0 and L2 regularization. L0 drives most weights to zero, which produces the sparse local dataset without a second pipeline.',
  },
  {
    label: 'Workflow',
    detail:
      'Checkpoint-resumable epoch loop; calibration logs report per-target relative error so drift is attributable, not just global.',
  },
];

export default function CalibrationTechSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Imputation and calibration, in more detail</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-6">
        <div className="content-card p-6">
          <div className="slide-tag mb-4">Imputation · QRF</div>
          <h3 className="font-mono text-xl font-bold text-gray-800 mb-4">
            Fill CPS gaps from the PUF
          </h3>
          <div className="space-y-4">
            {qrfPoints.map((point) => (
              <div key={point.label}>
                <div className="font-mono text-xs uppercase tracking-widest text-pe-teal font-bold mb-1">
                  {point.label}
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card p-6">
          <div className="slide-tag mb-4">Calibration · Gradient descent</div>
          <h3 className="font-mono text-xl font-bold text-gray-800 mb-4">
            Reweight to match aggregate targets
          </h3>
          <div className="space-y-4">
            {calibPoints.map((point) => (
              <div key={point.label}>
                <div className="font-mono text-xs uppercase tracking-widest text-pe-teal font-bold mb-1">
                  {point.label}
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accent-block mt-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Both steps live in `policyengine-us-data` and run on a laptop; the
          sparse loss matrix and L0 penalty make the district-level calibration
          tractable without dedicated infrastructure.
        </p>
      </div>
    </Slide>
  );
}
