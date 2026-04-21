import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const LAYERS = [
  {
    layer: '5. Run-level citation',
    artifact: 'Simulation TRO (JSON-LD)',
    addresses: 'Pins the bundle TRO + reform JSON + results JSON',
    detail:
      'This is what the paper cites. It answers: what exact reform was run, what exact results were published, and what exact frozen bundle were those chained to?',
  },
  {
    layer: '4. Certified release bundle',
    artifact: 'policyengine.py CountryReleaseManifest',
    addresses: 'Pins one rules bundle to one certified data artifact',
    detail:
      'Ships inside each policyengine.py wheel. Runtime is supposed to refuse mixing a model with data it was not certified against.',
  },
  {
    layer: '3. Calibrated microdata artifact',
    artifact: 'enhanced_cps_2024.h5 on HuggingFace + DataReleaseManifest',
    addresses: 'SHA-256 of the h5, build fingerprint, calibration log',
    detail:
      'This is the public replay boundary. A replicator reuses the frozen h5; they do not need to rebuild the imputation pipeline to reproduce the published run.',
  },
  {
    layer: '2. Rules bundle',
    artifact: 'policyengine-us / policyengine-uk code + parameters',
    addresses: 'Wheel SHA-256 + parameter tree + reform semantics',
    detail:
      'Variables, parameters, and reforms live here. This layer should answer Tara’s “did the rules change?” question without conflating it with microdata drift.',
  },
  {
    layer: '1. Raw inputs and calibration targets',
    artifact: 'CPS, ACS, SCF, IRS-PUF, SIPP, ORG, IRS SOI targets',
    addresses: 'Upstream provider fingerprints where available; checked-in CSVs where not',
    detail:
      'Open inputs can be hash-verified. Restricted inputs stay behind licensing. Public packets should cite their downstream contribution through the calibrated h5 and calibration log, not pretend the raw data is redistributable.',
  },
];

export default function ChainSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The provenance split that matters</SlideTitle>
      </SlideHeader>
      <div className="mt-8 space-y-4">
        {LAYERS.map((row) => (
          <div
            key={row.layer}
            className="grid grid-cols-[220px_1fr] gap-8 border-l-4 border-pe-teal pl-6 py-2"
          >
            <div className="text-xl font-semibold text-pe-dark">{row.layer}</div>
            <div>
              <div className="text-xl text-pe-dark">
                <span className="font-semibold">{row.artifact}</span>
                <span className="text-gray-500"> &middot; {row.addresses}</span>
              </div>
              <div className="mt-1 text-base text-gray-600 leading-relaxed">
                {row.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
