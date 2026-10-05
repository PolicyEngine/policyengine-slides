import {
  IconBrandGithub,
  IconChartBar,
  IconChartDots,
  IconChevronRight,
  IconFileSpreadsheet,
  IconFileText,
  IconFlask,
  IconHistory,
  IconPlayerPlay,
  IconScale,
  IconSettings,
  IconUsersGroup,
  IconVersions,
  IconWorld,
  type Icon,
} from '@tabler/icons-react';
import type { BlsIcon, BlsSlideContent } from '../content';

const ICONS: Record<BlsIcon, Icon> = {
  'chart-bar': IconChartBar,
  'chart-dots': IconChartDots,
  'file-spreadsheet': IconFileSpreadsheet,
  'file-text': IconFileText,
  'flask': IconFlask,
  'github': IconBrandGithub,
  'history': IconHistory,
  'play': IconPlayerPlay,
  'scale': IconScale,
  'settings': IconSettings,
  'users': IconUsersGroup,
  'versions': IconVersions,
  'world': IconWorld,
};

function DeckIcon({ name, size = 26 }: { name: BlsIcon; size?: number }) {
  const Component = ICONS[name];
  return <Component className="shrink-0 text-pe-teal" size={size} stroke={1.75} aria-hidden="true" />;
}

/** Two-by-two cards, each with an icon, a title and one line of text. */
export function IconCards({ cards }: { cards: NonNullable<BlsSlideContent['cards']> }) {
  return (
    <div className="mt-6 grid max-w-6xl grid-cols-2 gap-5">
      {cards.map((card) => (
        <div key={card.title} className="flex items-start gap-4 rounded-lg border-l-4 border-pe-teal bg-gray-50 px-5 py-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pe-teal/10">
            <DeckIcon name={card.icon} />
          </span>
          <div>
            <p className="text-xl font-semibold leading-snug text-pe-dark">{card.title}</p>
            <p className="mt-1 text-lg leading-snug text-gray-600">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** A two-segment year bar, then a row of items to record with each run. */
export function YearRouting({ years }: { years: NonNullable<BlsSlideContent['years']> }) {
  return (
    <div className="mt-6 max-w-6xl space-y-8 text-pe-dark">
      <div>
        <div className="flex overflow-hidden rounded-xl">
          {years.segments.map((segment) => (
            <div
              key={segment.engine}
              className={`flex flex-1 flex-col justify-center px-6 py-4 ${segment.highlight ? 'bg-pe-teal text-white' : 'bg-gray-100 text-pe-dark'}`}
            >
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">{segment.label}</p>
              <p className="text-2xl font-bold leading-tight">{segment.engine}</p>
              <p className="text-base leading-snug opacity-90">{segment.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xl leading-snug">{years.caption}</p>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{years.recordTitle}</p>
        <div className="mt-3 grid grid-cols-5 gap-3">
          {years.record.map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border-l-4 border-pe-teal bg-gray-50 px-4 py-3">
              <DeckIcon name={item.icon} size={22} />
              <span className="text-base font-medium leading-snug">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowBox({ title, text, outlined = false }: { title: string; text: string; outlined?: boolean }) {
  return (
    <div className={`rounded-lg px-4 py-4 ${outlined ? 'border border-gray-200 border-l-4 border-l-pe-teal bg-white' : 'border-l-4 border-pe-teal bg-gray-50'}`}>
      <p className="text-lg font-semibold leading-snug text-pe-dark">{title}</p>
      <p className="mt-1 text-base leading-snug text-gray-600">{text}</p>
    </div>
  );
}

function Arrow() {
  return <IconChevronRight className="shrink-0 text-pe-teal" size={22} stroke={2.5} aria-hidden="true" />;
}

/** One input feeding two calculations, then a comparison and a review. */
export function CompareFlow({ compare }: { compare: NonNullable<BlsSlideContent['compare']> }) {
  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-[1fr_auto_1.15fr_auto_1fr_auto_1fr] items-center gap-3">
        <FlowBox {...compare.input} />
        <Arrow />
        <div className="flex flex-col gap-3">
          {compare.engines.map((engine) => (
            <FlowBox key={engine.title} {...engine} outlined />
          ))}
        </div>
        <Arrow />
        <FlowBox {...compare.output} />
        <Arrow />
        <FlowBox {...compare.next} />
      </div>
      {compare.takeaway && <p className="text-xl leading-snug font-medium text-pe-dark">{compare.takeaway}</p>}
    </div>
  );
}

/** Discussion questions beside clickable resource cards. */
export function QuestionsAndLinks({ questions, links }: { questions: string[]; links: NonNullable<BlsSlideContent['links']> }) {
  return (
    <div className="mt-6 grid grid-cols-[1.1fr_0.9fr] gap-12">
      <ol className="space-y-5">
        {questions.map((question, index) => (
          <li key={question} className="flex items-start gap-5 text-xl leading-snug text-pe-dark">
            <span className="font-mono text-pe-teal font-bold shrink-0 w-8" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{question}</span>
          </li>
        ))}
      </ol>
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto flex items-center gap-4 rounded-lg border-l-4 border-pe-teal bg-gray-50 px-4 py-3 hover:bg-pe-teal/10"
          >
            {link.icon && <DeckIcon name={link.icon} size={24} />}
            <span>
              <span className="block font-mono text-base text-pe-teal">{link.label}</span>
              {link.description && <span className="block text-sm leading-snug text-gray-600">{link.description}</span>}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
