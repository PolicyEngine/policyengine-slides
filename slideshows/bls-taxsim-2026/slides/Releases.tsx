import type { BlsSlideContent } from '../content';
import { DeckIcon } from './Visuals';

type Releases = NonNullable<BlsSlideContent['releases']>;

/**
 * Versions and releases: headline release figures, the command that pins a run
 * to exact versions, and what ships with every release. On short screens the
 * block zooms out, as DropInTabs does, so it clears the footer at 1280x720.
 */
export default function ReleasesSlide({ releases }: { releases: Releases }) {
  return (
    <div className="mt-4 space-y-5 text-pe-dark [@media(max-height:820px)]:space-y-4 [@media(min-height:741px)_and_(max-height:820px)]:[zoom:0.85] [@media(max-height:740px)]:[zoom:0.78]">
      <div
        className="grid grid-rows-[auto_auto] gap-x-4"
        style={{ gridTemplateColumns: `repeat(${releases.stats.length}, minmax(0, 1fr))` }}
      >
        {releases.stats.map((stat) => (
          <div
            key={stat.label}
            className="row-span-2 grid grid-rows-subgrid justify-items-center gap-y-2 rounded-lg bg-pe-dark px-5 pb-4 pt-5 text-center text-white"
          >
            <p className="text-3xl font-extrabold leading-none tracking-tight lg:text-4xl">{stat.value}</p>
            <p className="max-w-[18rem] text-sm leading-snug text-white/80 [text-wrap:balance] lg:text-base">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_1.15fr] items-start gap-6">
        <div className="rounded-lg border border-gray-200 bg-white px-5 py-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{releases.pin.title}</p>
          <pre className="mt-3 overflow-x-auto rounded-md bg-gray-900 px-4 py-3 font-mono text-base leading-relaxed text-gray-100">
            <code>{releases.pin.code}</code>
          </pre>
          <p className="mt-3 text-base leading-snug text-gray-600">{releases.pin.note}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {releases.items.map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-lg border-l-4 border-pe-teal bg-gray-50 px-4 py-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pe-teal/10">
                <DeckIcon name={item.icon} size={22} />
              </span>
              <div>
                <p className="text-lg font-semibold leading-snug">{item.title}</p>
                <p className="mt-1 text-base leading-snug text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {releases.takeaway && <p className="text-xl font-medium leading-snug">{releases.takeaway}</p>}
    </div>
  );
}
