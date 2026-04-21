import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const LAYERS = [
  {
    layer: '5. Per-run artifact',
    artifact: 'TRACE TRO (JSON-LD)',
    addresses: 'SHA-256 composition fingerprint over 1-4',
    detail:
      'Canonical TROv 0.1 vocabulary + pe: namespace for certification metadata. SHACL-validatable. Ships CI run URL and git SHA.',
  },
  {
    layer: '4. Certified release bundle',
    artifact: 'policyengine.py CountryReleaseManifest',
    addresses: 'Pins model version + certified data package version',
    detail:
      'Ships inside each policyengine.py wheel. Runtime refuses to mix a model with data it was not certified against.',
  },
  {
    layer: '3. Data artifact',
    artifact: 'enhanced_cps_2024.h5 on HuggingFace + DataReleaseManifest',
    addresses: 'SHA-256 of the h5, build fingerprint, calibration log',
    detail:
      'Every upload is content-addressed. The manifest records the upstream microdata vintages and the deterministic build pipeline that produced this h5.',
  },
  {
    layer: '2. Model code',
    artifact: 'policyengine-us / policyengine-uk on PyPI',
    addresses: 'Semver + PyPI immutability + published wheel SHA-256',
    detail:
      'Variables, parameters, and reforms are open-source. Version pin in requirements reproduces the computation logic exactly.',
  },
  {
    layer: '1. Input microdata',
    artifact: 'CPS, ACS, SCF, IRS-PUF, SIPP, ORG, IRS SOI targets',
    addresses: 'Upstream provider fingerprints where available; checked-in CSVs where not',
    detail:
      'Open data (CPS, ACS, SOI) is fetched and hash-verified. Restricted data (IRS-PUF, SIPP) stays behind licensing; public replicators use checked-in calibration targets as a proxy.',
  },
];

export default function ChainSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The provenance chain</SlideTitle>
      </SlideHeader>
      <div className="mt-8 max-w-6xl space-y-4">
        {LAYERS.map((row) => (
          <div
            key={row.layer}
            className="grid grid-cols-[200px_1fr] gap-6 border-l-4 border-pe-teal pl-6 py-2"
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
