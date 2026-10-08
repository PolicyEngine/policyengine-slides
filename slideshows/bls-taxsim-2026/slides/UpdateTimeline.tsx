import { IconFlag } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type UpdateTimeline = NonNullable<BlsSlideContent['updateTimeline']>;
type Tone = UpdateTimeline['lanes'][number]['segments'][number]['tone'];

/** Half-month slots per month on the shared axis. */
const SLOTS_PER_MONTH = 2;

const TONES: Record<Tone, string> = {
  done: 'border-l-4 border-pe-teal bg-pe-teal/10',
  sprint: 'bg-pe-teal text-white',
  muted: 'border border-dashed border-gray-300 bg-gray-50 text-gray-600',
  plan: 'border border-dashed border-pe-teal/60 bg-white',
  commit: 'bg-pe-dark text-white',
};

/**
 * The annual state tax update: last cycle's figures, then last cycle and the next one on one
 * November-to-March axis in half-month slots, the major changes, and the commitment.
 */
export default function UpdateTimelineSlide({ timeline }: { timeline: UpdateTimeline }) {
  const slots = timeline.months.length * SLOTS_PER_MONTH;
  const columns = `12rem repeat(${slots}, minmax(0, 1fr))`;
  return (
    <div className="mt-1 flex flex-col gap-7 text-pe-dark [@media(max-height:820px)]:gap-3 [@media(max-height:820px)]:[zoom:0.88]">
      <div className="grid gap-x-4" style={{ gridTemplateColumns: `repeat(${timeline.stats.length}, minmax(0, 1fr))` }}>
        {timeline.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1.5 rounded-lg bg-pe-dark px-4 pb-3 pt-4 text-center text-white">
            <p className="text-4xl font-extrabold leading-none tracking-tight">{stat.value}</p>
            <p className="max-w-[19rem] text-base leading-snug text-white/80 [text-wrap:balance]">{stat.label}</p>
          </div>
        ))}
      </div>

      <section className="grid gap-x-1.5 gap-y-3" style={{ gridTemplateColumns: columns }}>
        <span />
        {timeline.months.map((month) => (
          <p
            key={month}
            className="border-l-2 border-gray-200 pl-2 text-base font-semibold uppercase tracking-wide text-gray-500"
            style={{ gridColumn: `span ${SLOTS_PER_MONTH}` }}
          >
            {month}
          </p>
        ))}

        {timeline.lanes.map((lane, laneIndex) => (
          <div key={lane.title} className="contents">
            <div className="flex flex-col justify-center pr-3" style={{ gridRow: laneIndex + 2, gridColumn: 1 }}>
              <p className="text-xl font-bold leading-tight">{lane.title}</p>
              <p className="text-base text-gray-500">{lane.detail}</p>
            </div>
            {lane.segments.map((segment) => (
              <div
                key={segment.title}
                className={`flex flex-col justify-center rounded-lg px-4 py-3.5 ${TONES[segment.tone]}`}
                style={{ gridRow: laneIndex + 2, gridColumn: `${segment.start + 2} / span ${segment.span}` }}
              >
                <p className="flex items-center gap-1.5 text-lg font-semibold leading-snug">
                  {segment.tone === 'commit' && <IconFlag className="shrink-0 text-pe-amber" size={20} stroke={2.2} aria-hidden="true" />}
                  {segment.title}
                </p>
                <p className={`mt-1 text-base leading-snug ${segment.tone === 'sprint' || segment.tone === 'commit' ? 'text-white/85' : 'text-gray-600'}`}>
                  {segment.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="grid grid-cols-2 gap-4 [@media(max-height:960px)]:hidden">
        {timeline.changeGroups.map((group) => (
          <div key={group.title} className="rounded-lg bg-gray-50 px-5 py-4">
            <h3 className="text-lg font-bold">{group.title}</h3>
            <ul className="mt-2 grid grid-cols-2 gap-x-5 gap-y-1.5">
              {group.items.map((item) => (
                <li key={item.state} className="text-base leading-snug">
                  <span className="font-semibold text-pe-teal">{item.state}:</span> <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div>
        <p className="text-2xl font-semibold leading-snug">{timeline.takeaway}</p>
        <p className="mt-1.5 text-sm text-gray-500">{timeline.source}</p>
      </div>
    </div>
  );
}
