import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/**
 * Architecture per the dashboard README. Run times measured on the final
 * build (PE-US 1.824.7, per-state slices, 9/11): household ~45-90s cold;
 * statewide 2-6 min for most states, ~10 min worst case (CA with several
 * provisions). Anything already computed — including every shared link
 * after its first open — loads instantly from the durable cache.
 * Compact custom list (not BulletList) so both cards fit above the
 * footer even in smaller windows.
 */
const columns: { heading: string; items: { text: string; subtext?: string }[] }[] = [
  {
    heading: 'Under the hood',
    items: [
      { text: 'PolicyEngine US: open-source tax and benefit rules', subtext: 'Federal rules plus every state income tax and the state programs the reform touches' },
      { text: 'Calibrated microdata for every state', subtext: 'Census survey households, enhanced with administrative data and weighted to official totals' },
      { text: 'Pinned model version', subtext: 'Every result cites the policyengine-us release it ran on' },
    ],
  },
  {
    heading: 'What to expect live',
    items: [
      { text: 'Household impacts in about a minute' },
      { text: 'Statewide impacts in a few minutes', subtext: 'Two to six for most states' },
      { text: 'Short shareable links for every result', subtext: 'Results cache durably, so shared links open instantly' },
      { text: 'Provision cards show only what actually changes' },
    ],
  },
];

export default function HowItRunsSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>How an estimate gets made</SlideTitle>
      </SlideHeader>
      <div className="mt-4 grid grid-cols-2 gap-6">
        {columns.map((col) => (
          <div key={col.heading} className="content-card px-6 py-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{col.heading}</h3>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item.text} className="flex gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-pe-teal shrink-0" />
                  <div>
                    <p className="text-lg text-gray-800 leading-snug">{item.text}</p>
                    {item.subtext && (
                      <p className="text-base text-gray-600 leading-snug mt-0.5">{item.subtext}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Slide>
  );
}
