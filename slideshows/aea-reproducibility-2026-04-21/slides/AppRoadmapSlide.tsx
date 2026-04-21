import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

type Item = { text: string; subtext?: string };
type Phase = { phase: string; items: Item[] };

const PHASES: Phase[] = [
  {
    phase: 'Already implemented in the stack',
    items: [
      { text: 'policyengine-us-data publishes a hashed h5 artifact, data manifest, and calibration log for each certified release' },
      { text: 'policyengine.py has a certified bundle layer plus a per-simulation TRO layer' },
      { text: 'The model/data compatibility contract now lives in a release bundle instead of in loose package pins' },
      { text: 'TRACE objects already carry the key hashes: bundle, wheel, manifest, and dataset artifact' },
    ],
  },
  {
    phase: 'Landing now',
    items: [
      {
        text: 'Household docs need to teach the split clearly: API/Python usage on one side, reproducibility artifacts on the other',
        subtext:
          'That is what PR #7 is for once the routing and mobile-navigation regressions are fixed.',
      },
      {
        text: 'trace-tro-validate should work from the documented install line',
        subtext:
          'The validator depends on jsonschema; that should not be a footnote in the replication workflow.',
      },
      {
        text: 'The narrative itself should separate rules changes from microdata changes',
        subtext:
          'That is the main story Tara, John, and Lars are reacting to.',
      },
    ],
  },
  {
    phase: 'What the app should expose next',
    items: [
      {
        text: '"Cite this result" export on every simulation page',
        subtext:
          'Downloads the run-level TRO plus results.json, chained to the exact rules bundle and exact calibrated h5 that rendered the page.',
      },
      {
        text: 'A visible version badge that separates rules from data',
        subtext: '"rules us@1.653.3 · data enhanced_cps_2024.h5@1.78.2 · h5 sha256:abc123..."',
      },
      { text: 'A diff view that answers: did the result move because rules changed, data changed, or both?' },
      { text: '"Replicate in Colab" / notebook button with the correct install line and immutable bundle URL' },
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
