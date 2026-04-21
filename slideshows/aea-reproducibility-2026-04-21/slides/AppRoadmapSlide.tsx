import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const STEPS = [
  {
    phase: 'In place today',
    items: [
      'policyengine-us-data ships TROs in canonical TROv 0.1 (PR #746)',
      'policyengine.py exposes trace-tro and trace-tro-validate CLIs (PR #314 aligns namespace)',
      'household-api-docs documents the API + Python flow (PR #7)',
      'TROs carry CI run URL + git SHA + wheel SHA + h5 SHA',
    ],
  },
  {
    phase: 'Next: bring it into the app',
    items: [
      '"Cite this result" button on every policyengine.org simulation page',
      '  → downloads a .trace.tro.jsonld pinned to the exact model + data that rendered the page',
      '  → includes the reform JSON, the year, and the impact summary as a results-TRO',
      'Version badges on results: "model us@1.653.3 · data@1.78.2 · h5 sha256:abc123…"',
      'Shareable permalinks that hash to the same TRO',
      '"Replicate in Colab" button: opens a notebook with pip install lines prefilled',
      'In-app TRO validator: paste a TRO, get a diff against the runtime bundle',
    ],
  },
  {
    phase: 'Later',
    items: [
      'Integrate with Zenodo / OSF DOIs for durable citation',
      'SHACL validation wired into CI (today we validate via JSON Schema; TROv ships SHACL shapes)',
      'Contribute the microsim-reproducibility-packet template to AEA/QJE if Lars is interested',
    ],
  },
];

export default function AppRoadmapSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Bringing this into the app</SlideTitle>
      </SlideHeader>
      <div className="mt-6 max-w-6xl space-y-5">
        {STEPS.map((step) => (
          <div key={step.phase}>
            <div className="text-lg font-semibold text-pe-teal uppercase tracking-wide">
              {step.phase}
            </div>
            <ul className="mt-2 space-y-1.5">
              {step.items.map((item, i) => (
                <li key={i} className="text-base text-gray-800 leading-relaxed">
                  <span className="text-pe-teal mr-2">&middot;</span>
                  <span
                    className={
                      item.startsWith('  ')
                        ? 'ml-6 text-sm text-gray-600 italic'
                        : ''
                    }
                  >
                    {item.replace(/^  → /, '').replace(/^  /, '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Slide>
  );
}
