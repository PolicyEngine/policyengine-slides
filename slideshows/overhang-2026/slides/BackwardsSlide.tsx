import { IconArrowRight, IconScale, IconTargetArrow, IconUsers } from '@tabler/icons-react';
import DeckFrame from './DeckFrame';

/** The payoff for the title: with forecasts for every statistic, statistics for every bill,
 *  and cheap conditionals, the loop on slide 2 runs backwards, from values to policies. */
export default function BackwardsSlide() {
  const scale = [
    { what: 'Every official statistic has a forecast', today: '45 scored so far, the May deficit among them' },
    { what: 'Every bill derives its statistics', today: 'One bill page lists its candidates; you added yours' },
    { what: 'Every pair gets a conditional, cheaply', today: 'One pair so far, 17.6M against 27.2M, graded in 2029' },
  ];
  const loop = [
    { label: 'Values', detail: 'Pick the goal', Icon: IconUsers },
    { label: 'Indicators', detail: 'Set the level you want', Icon: IconTargetArrow },
    { label: 'Policies', detail: 'Search the bills whose conditionals move it', Icon: IconScale },
  ];
  return (
    <DeckFrame title="Cheap conditionals let us run the loop backwards" badge={<span className="rounded-full bg-pe-light px-4 py-2 text-sm font-semibold text-pe-dark">Where this goes</span>}>
        <div className="flex h-full min-h-0 flex-col justify-center gap-6">
          <div className="grid grid-cols-3 gap-5">
            {scale.map((row) => (
              <div key={row.what} className="content-card p-5">
                <p className="text-xl font-semibold leading-snug text-pe-dark">{row.what}</p>
                <p className="mt-2 text-sm text-gray-500">{row.today}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[1fr_36px_1fr_36px_1fr] items-center gap-4">
            {loop.map(({ label, detail, Icon }, i) => (
              <div key={label} className="contents">
                <div className="rounded-xl border border-pe-100 bg-pe-light p-5">
                  <Icon className="mb-3 text-pe-teal" size={32} stroke={1.5} />
                  <h2 className="text-2xl font-bold text-pe-dark">{label}</h2>
                  <p className="mt-1 text-lg text-gray-600">{detail}</p>
                </div>
                {i < 2 && <IconArrowRight className="text-pe-teal" size={30} />}
              </div>
            ))}
          </div>
          <p className="border-l-4 border-pe-teal pl-5 text-2xl font-medium text-pe-dark">Start from the goal and search the bills.</p>
        </div>
    </DeckFrame>
  );
}
