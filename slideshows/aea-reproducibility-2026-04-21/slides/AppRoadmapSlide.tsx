import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

type Item = { text: string; subtext?: string };
type Phase = { phase: string; items: Item[] };

const PHASES: Phase[] = [
  {
    phase: 'In place today',
    items: [
      { text: 'policyengine-us-data ships TROs in canonical TROv 0.1 (us-data PR #746)' },
      { text: 'policyengine.py exposes trace-tro and trace-tro-validate CLIs (pe.py PR #314 aligns namespace)' },
      { text: 'household-api-docs documents the API + Python flow (docs PR #7)' },
      { text: 'TROs carry CI run URL + git SHA + wheel SHA + h5 SHA' },
    ],
  },
  {
    phase: 'Next: bring it into the app',
    items: [
      {
        text: '"Cite this result" button on every policyengine.org simulation page',
        subtext:
          'Downloads a .trace.tro.jsonld pinned to the exact model + data that rendered the page; includes the reform JSON, year, and impact summary as a results-TRO',
      },
      {
        text: 'Version badges on results',
        subtext: '"model us@1.653.3 · data@1.78.2 · h5 sha256:abc123..."',
      },
      { text: 'Shareable permalinks that hash to the same TRO' },
      { text: '"Replicate in Colab" button that opens a notebook with pip install lines prefilled' },
      { text: 'In-app TRO validator: paste a TRO, get a diff against the runtime bundle' },
    ],
  },
  {
    phase: 'Later',
    items: [
      { text: 'Integrate with Zenodo / OSF DOIs for durable citation' },
      { text: 'SHACL validation wired into CI (today we validate via JSON Schema; TROv ships SHACL shapes)' },
      { text: 'Contribute the microsim-reproducibility-packet template to AEA/QJE if Lars is interested' },
    ],
  },
];

export default function AppRoadmapSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Bringing this into the app</SlideTitle>
      </SlideHeader>
      <div className="mt-6 max-w-6xl space-y-6">
        {PHASES.map((p) => (
          <div key={p.phase}>
            <div className="text-base font-semibold text-pe-teal uppercase tracking-wide">
              {p.phase}
            </div>
            <ul className="mt-2 space-y-2.5">
              {p.items.map((item, i) => (
                <li key={i}>
                  <div className="flex items-start gap-4 text-base text-gray-800 leading-relaxed">
                    <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-pe-teal" />
                    <span>{item.text}</span>
                  </div>
                  {item.subtext && (
                    <div className="ml-6 mt-0.5 text-sm text-gray-600 italic leading-relaxed">
                      {item.subtext}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Slide>
  );
}
