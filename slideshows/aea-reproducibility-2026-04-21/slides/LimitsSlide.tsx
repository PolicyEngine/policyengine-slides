import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const CATEGORIES = [
  {
    title: 'Stochastic imputation',
    detail:
      'We impute SCF wealth, SIPP assets and tips, ORG wages, and ACS housing with seeded quantile random forests. Reproducible within a pinned numpy version; we have not yet guaranteed cross-numpy determinism.',
    status: 'Known, documented in the DataReleaseManifest.',
  },
  {
    title: 'Calibration target tensions',
    detail:
      'Real IRS SOI tabulations disagree across publications (Historical Table 2 vs Publication 1304, TY2022) by ~1-2% on EITC. The optimizer absorbs this as residual noise.',
    status: 'Published in each release via calibration_log.csv. Open issues: #805 (ACA), #802 (EITC) on us-data.',
  },
  {
    title: 'Licensing: some inputs restricted',
    detail:
      'IRS-PUF and SIPP require individual user licenses. We ship their imputed contribution inside a certified h5 on HuggingFace, not the raw microdata. Public replicators get the certified h5 and the calibration targets, not the PUF.',
    status: 'Mirrors the PSID / HRS model. UK Data Service constraints on UK data handled similarly.',
  },
  {
    title: 'Model-level gaps in coverage',
    detail:
      'Not every state benefit program is modeled; some counties (CA CHIP, DC Healthy DC Plan pre-2026) have recent gaps. programs.yaml tracks per-program status.',
    status: 'Documented in policyengine-us/programs.yaml (served via /us/metadata).',
  },
];

export default function LimitsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What this does <span className="text-amber-600">not</span> solve &mdash; yet</SlideTitle>
      </SlideHeader>
      <div className="mt-8 space-y-5">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="border-l-4 border-amber-500 pl-5 py-1">
            <div className="text-xl font-semibold text-pe-dark">{cat.title}</div>
            <div className="text-base text-gray-700 mt-1 leading-relaxed">
              {cat.detail}
            </div>
            <div className="text-sm text-gray-500 mt-1 italic">{cat.status}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-base text-gray-600 leading-relaxed italic">
        Being explicit about these lets the replication packet describe what
        varies and what does not, instead of the packet promising bit-exact
        where the underlying computation is stochastic.
      </div>
    </Slide>
  );
}
