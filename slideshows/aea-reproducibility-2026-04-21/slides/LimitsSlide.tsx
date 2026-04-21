import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const CATEGORIES = [
  {
    title: 'Raw-data rebuild reproducibility',
    detail:
      'For reproducing a published run, the frozen h5 on Hugging Face is the relevant artifact boundary. Rebuilding that h5 from raw CPS / PUF / SIPP / SCF inputs is still a separate problem, and a few QRF stages are not yet proven bit-exact across environments.',
    status: 'Published-run replay: mostly solved at the artifact boundary. Raw-data-to-h5 rebuild: still open.',
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
    title: 'Environment capture above the package layer',
    detail:
      'The certified bundle does not yet freeze Python version, OS, or a full transitive lockfile. For strict journal replay, that environment capture matters more than the seeded take-up stages do.',
    status: 'TRACE metadata already carries CI/run context; full environment lock remains future work.',
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
        The claim should be explicit: a reviewer can replay the published result
        against the frozen rules bundle and frozen calibrated h5. That is a
        narrower and more defensible promise than “rebuild the whole microsim
        stack from raw licensed inputs anywhere.”
      </div>
    </Slide>
  );
}
