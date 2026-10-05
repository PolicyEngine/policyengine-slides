import {
  IconBook,
  IconBrandGithub,
  IconBuildingBank,
  IconCalendar,
  IconChartBar,
  IconChartDots,
  IconChevronRight,
  IconFileSpreadsheet,
  IconFileText,
  IconFlask,
  IconHeartHandshake,
  IconHistory,
  IconPlayerPlay,
  IconScale,
  IconSettings,
  IconUsersGroup,
  IconVersions,
  IconWorld,
  type Icon,
} from '@tabler/icons-react';
import Image from '@/components/core/BasePathImage';
import type { BlsIcon, BlsSlideContent } from '../content';

const ICONS: Record<BlsIcon, Icon> = {
  'book': IconBook,
  'building': IconBuildingBank,
  'calendar': IconCalendar,
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
export function IconCards({ cards, hero }: { cards: NonNullable<BlsSlideContent['cards']>; hero?: BlsSlideContent['hero'] }) {
  const grid = (
    <div className={`grid grid-cols-2 gap-5 ${hero ? '' : 'mt-6 max-w-6xl'}`}>
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
  if (!hero) return grid;
  return (
    <div className="mt-4 grid grid-cols-[0.8fr_1.7fr] items-stretch gap-6">
      <div className="flex flex-col justify-center rounded-xl bg-pe-dark px-6 py-6 text-white">
        <p className="text-6xl font-extrabold tracking-tight">{hero.value}</p>
        <p className="mt-2 text-lg leading-snug">{hero.label}</p>
        <p className="mt-3 text-sm leading-snug text-white/70">{hero.source}</p>
      </div>
      {grid}
    </div>
  );
}

function FlowBox({ title, text, outlined = false }: { title: string; text: string; outlined?: boolean }) {
  return (
    <div className={`rounded-lg px-4 py-3 ${outlined ? 'border border-gray-200 border-l-4 border-l-pe-teal bg-white' : 'border-l-4 border-pe-teal bg-gray-50'}`}>
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
    <div className="mt-4 space-y-4">
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
      {compare.outputs && (
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{compare.outputsTitle}</p>
          <div className="mt-2 grid gap-3" style={{ gridTemplateColumns: `repeat(${compare.outputs.length}, minmax(0, 1fr))` }}>
            {compare.outputs.map((output) => (
              <div key={output.field} className="rounded-lg border-l-4 border-pe-teal bg-gray-50 px-3 py-2">
                <p className="font-mono text-base font-semibold text-pe-teal">{output.field}</p>
                <p className="text-sm leading-snug text-gray-600">{output.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      )}
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

type Worked = NonNullable<BlsSlideContent['worked']>;

/** One real record: the input row, the household built from it, and the outputs. */
export function WorkedExample({ worked }: { worked: Worked }) {
  return (
    <div className="mt-2 space-y-3">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4">
        <div className="rounded-xl bg-pe-darker px-5 py-4 font-mono">
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-teal-300">{worked.inputTitle}</p>
          {worked.input.map((row) => (
            <div key={row.field} className="grid grid-cols-[6.5rem_5.5rem_1fr] items-baseline gap-2 py-1 text-base">
              <span className="text-teal-300">{row.field}</span>
              <span className="text-white">{row.value}</span>
              <span className="font-sans text-sm text-white/60">{row.meaning}</span>
            </div>
          ))}
        </div>
        <Arrow />
        <div className="rounded-xl border-l-4 border-pe-teal bg-gray-50 px-5 py-4">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">{worked.householdTitle}</p>
          <div className="space-y-2">
            {worked.household.map((member) => (
              <div key={member.role} className="rounded-lg bg-white px-3 py-2 shadow-sm">
                <p className="text-base font-semibold leading-snug text-pe-dark">{member.role}</p>
                <p className="text-sm leading-snug text-gray-600">{member.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <Arrow />
        <div className="rounded-xl border-l-4 border-pe-teal bg-gray-50 px-5 py-4">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">{worked.outputTitle}</p>
          {worked.outputs.map((row) => (
            <div key={row.field} className="grid grid-cols-[4rem_6rem_1fr] items-baseline gap-2 border-b border-gray-200 py-1.5 last:border-0">
              <span className="font-mono text-sm text-pe-teal">{row.field}</span>
              <span className="text-lg font-bold text-pe-dark">{row.value}</span>
              <span className="text-sm leading-snug text-gray-600">{row.meaning}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500">{worked.footnote}</p>
    </div>
  );
}

type Contrast = NonNullable<BlsSlideContent['contrasts']>['items'][number];

const CHOICE_COLORS = ['bg-teal-400', 'bg-[var(--pe-amber-dark)]'];

function ContrastPanel({ item }: { item: Contrast }) {
  const max = Math.max(...item.options.map((o) => o.value));
  return (
    <div className="flex flex-col rounded-xl border-l-4 border-pe-teal bg-gray-50 px-5 py-4">
      <p className="text-xl font-semibold text-pe-dark">{item.title}</p>
      <p className="text-sm text-gray-500">{item.measure}</p>
      <div className="mt-4 space-y-4">
        {item.options.map((option, index) => (
          <div key={option.label} title={`${option.label}: $${option.value.toLocaleString('en-US')}`}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-base leading-snug text-pe-dark">{option.label}</span>
              <span className="text-lg font-bold text-pe-dark">${option.value.toLocaleString('en-US')}</span>
            </div>
            <div className="mt-1 h-3 rounded-full bg-gray-200">
              <div className={`h-3 rounded-full ${CHOICE_COLORS[index]}`} style={{ width: `${(option.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-auto pt-4 text-base font-semibold leading-snug text-pe-dark">{item.delta}</p>
      <p className="text-sm leading-snug text-gray-600">{item.note}</p>
    </div>
  );
}

/** Side-by-side comparisons: one coding choice changes in each panel. */
export function Contrasts({ contrasts }: { contrasts: NonNullable<BlsSlideContent['contrasts']> }) {
  return (
    <div className="mt-2 space-y-4">
      <p className="text-xl leading-snug text-pe-dark">{contrasts.intro}</p>
      <div className="grid grid-cols-3 items-stretch gap-5">
        {contrasts.items.map((item) => <ContrastPanel key={item.title} item={item} />)}
      </div>
      <p className="text-sm text-gray-500">{contrasts.footnote}</p>
    </div>
  );
}

type YearChartData = NonNullable<BlsSlideContent['yearChart']>;

const ENGINE_STYLE: Record<'taxsim' | 'pe', { bar: string; label: string }> = {
  taxsim: { bar: 'bg-[var(--pe-amber-dark)]', label: 'TAXSIM35' },
  pe: { bar: 'bg-teal-400', label: 'PolicyEngine' },
};

/** Vertical bars by year, colored by the engine that handled the year. */
export function YearChart({ chart }: { chart: YearChartData }) {
  const max = Math.max(...chart.bars.map((b) => b.value));
  return (
    <div className="mt-2 grid grid-cols-[1.7fr_1fr] gap-8">
      <div>
        <div className="flex items-baseline justify-between">
          <p className="text-lg font-semibold text-pe-dark">{chart.title}</p>
          <div className="flex gap-4 text-sm text-gray-600">
            {(['taxsim', 'pe'] as const).map((engine) => (
              <span key={engine} className="flex items-center gap-2">
                <span className={`inline-block h-3 w-3 rounded-sm ${ENGINE_STYLE[engine].bar}`} />
                {chart.legend[engine]}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 flex h-[clamp(170px,32vh,400px)] items-end gap-[2px] border-b border-gray-300">
          {chart.bars.map((bar) => (
            <div key={bar.year} className="flex h-full flex-1 flex-col justify-end px-1" title={`${bar.year}: $${bar.value.toLocaleString('en-US')} (${ENGINE_STYLE[bar.engine].label})`}>
              <span className="mb-1 text-center text-sm font-semibold text-pe-dark">${bar.value.toLocaleString('en-US')}</span>
              <div className={`rounded-t ${ENGINE_STYLE[bar.engine].bar}`} style={{ height: `${(bar.value / max) * 82}%` }} />
            </div>
          ))}
        </div>
        <div className="flex gap-[2px]">
          {chart.bars.map((bar) => (
            <div key={bar.year} className="flex-1 px-1 pt-1 text-center">
              <p className="text-sm font-semibold text-pe-dark">{bar.year}</p>
              {bar.note && <p className="text-xs leading-tight text-gray-500">{bar.note}</p>}
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500">{chart.footnote}</p>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{chart.recordTitle}</p>
        <div className="mt-3 space-y-2">
          {chart.record.map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border-l-4 border-pe-teal bg-gray-50 px-4 py-2.5">
              <DeckIcon name={item.icon} size={22} />
              <span className="text-base font-medium leading-snug text-pe-dark">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-base leading-snug text-pe-dark">{chart.caption}</p>
      </div>
    </div>
  );
}

type Chains = NonNullable<BlsSlideContent['chains']>;

/** One row per program: eligibility through to an expected value. */
export function BenefitChains({ chains }: { chains: Chains }) {
  return (
    <div className="mt-2 space-y-4">
      <p className="text-xl leading-snug text-pe-dark">{chains.intro}</p>
      <div className="grid grid-cols-[9rem_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-x-3 gap-y-4">
        <span />
        {chains.columns.map((column, index) => (
          <div key={column} className={`text-sm font-semibold uppercase tracking-wider text-gray-500 ${index > 0 ? 'col-span-2 pl-8' : ''}`}>
            {column}
          </div>
        ))}
        {chains.rows.map((row) => (
          <div key={row.program} className="contents">
            <p className="text-xl font-bold text-pe-dark">{row.program}</p>
            {row.steps.map((step, index) => (
              <div key={step.label} className="contents">
                {index > 0 && <Arrow />}
                <div className={`rounded-lg px-4 py-3 ${index === row.steps.length - 1 ? 'bg-pe-dark text-white' : 'border-l-4 border-pe-teal bg-gray-50 text-pe-dark'}`}>
                  <p className="text-2xl font-bold leading-tight">{step.value}</p>
                  <p className={`text-sm leading-snug ${index === row.steps.length - 1 ? 'text-white/80' : 'text-gray-600'}`}>{step.label}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="text-xl leading-snug font-medium text-pe-dark">{chains.takeaway}</p>
      <p className="text-sm text-gray-500">{chains.footnote}</p>
    </div>
  );
}

type SourcesPanelData = NonNullable<BlsSlideContent['sourcesPanel']>;

/** Source surveys on the left, method notes on the right. */
export function SourcesPanel({ panel }: { panel: SourcesPanelData }) {
  return (
    <div className="mt-2 grid grid-cols-[1fr_0.95fr] items-start gap-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{panel.sourcesTitle}</p>
        {panel.sources.map((source) => (
          <div key={source.code} className="grid grid-cols-[5rem_1fr] items-baseline gap-3 rounded-lg border-l-4 border-pe-teal bg-gray-50 px-4 py-2">
            <span className="font-mono text-xl font-bold text-pe-teal">{source.code}</span>
            <span>
              <span className="block text-base font-semibold text-pe-dark">{source.name}</span>
              <span className="block text-sm leading-snug text-gray-600">{source.role}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="space-y-5">
        {panel.blocks.map((block, index) => (
          <div key={block.tag} className={index === panel.blocks.length - 1 ? 'rounded-lg bg-pe-dark px-5 py-4 text-white' : ''}>
            <span className="slide-tag">{block.tag}</span>
            <p className={`mt-2 text-lg leading-snug ${index === panel.blocks.length - 1 ? 'text-white' : 'text-pe-dark'}`}>{block.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type ResourceBarsData = NonNullable<BlsSlideContent['resourceBars']>;

/** One bar per resource concept for the same household. */
export function ResourceBars({ bars }: { bars: ResourceBarsData }) {
  const max = Math.max(...bars.rows.map((row) => row.value));
  return (
    <div className="mt-2 space-y-4">
      <p className="text-xl leading-snug text-pe-dark">{bars.intro}</p>
      <div className="space-y-3">
        {bars.rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[17rem_1fr] items-center gap-5" title={`${row.label}: $${row.value.toLocaleString('en-US')}`}>
            <div>
              <p className="text-lg font-semibold leading-snug text-pe-dark">{row.label}</p>
              <p className="text-sm leading-snug text-gray-600">{row.detail}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-9 rounded-r-md bg-teal-400" style={{ width: `${(row.value / max) * 82}%` }} />
              <span className="text-xl font-bold text-pe-dark">${row.value.toLocaleString('en-US')}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xl leading-snug font-medium text-pe-dark">{bars.takeaway}</p>
      <p className="text-sm text-gray-500">{bars.footnote}</p>
    </div>
  );
}

type PartnershipData = NonNullable<BlsSlideContent['partnership']>;

function PartnerSide({ side }: { side: PartnershipData['left'] }) {
  return (
    <div className="rounded-xl border-l-4 border-pe-teal bg-gray-50 px-6 py-4">
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{side.title}</p>
      <div className="mt-2 divide-y divide-gray-200">
        {side.items.map((item) => (
          <div key={item.title} className="flex items-center gap-4 py-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pe-teal/10">
              <DeckIcon name={item.icon} size={22} />
            </span>
            <div>
              <p className="text-lg font-semibold leading-snug text-pe-dark">{item.title}</p>
              <p className="text-sm leading-snug text-gray-600">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Two partners joined by an agreement in the center. */
export function Partnership({ partnership }: { partnership: PartnershipData }) {
  const { center } = partnership;
  return (
    <div className="mt-4 space-y-5">
      <div className="grid grid-cols-[1fr_13rem_1fr] items-stretch gap-5">
        <PartnerSide side={partnership.left} />
        <div className="flex flex-col items-center justify-center rounded-xl bg-pe-dark px-4 py-6 text-center text-white">
          <IconHeartHandshake size={40} stroke={1.5} className="text-teal-300" aria-hidden="true" />
          <p className="mt-3 text-lg font-bold leading-snug">{center.title}</p>
          <p className="text-2xl font-extrabold text-teal-300">{center.date}</p>
          <p className="mt-2 text-sm leading-snug text-white/80">{center.detail}</p>
        </div>
        <PartnerSide side={partnership.right} />
      </div>
      <p className="text-xl leading-snug font-medium text-pe-dark">{partnership.takeaway}</p>
    </div>
  );
}

type DropInData = NonNullable<BlsSlideContent['dropIn']>;

/** Renders `[[text]]` spans as the highlighted, changed part of a code line. */
function CodeLine({ code }: { code: string }) {
  const parts = code.split(/(\[\[.*?\]\])/g).filter(Boolean);
  return (
    <code className="whitespace-nowrap font-mono text-[13px] leading-snug">
      {parts.map((part, index) =>
        part.startsWith('[[') ? (
          <span key={index} className="font-bold text-teal-300">{part.slice(2, -2)}</span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </code>
  );
}

/** The before-and-after code swap as the main content, a site capture beside it. */
export function DropIn({ dropIn }: { dropIn: DropInData }) {
  return (
    <div className="mt-2 space-y-3">
      <div className="flex items-center gap-4 rounded-lg bg-pe-darker px-5 py-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-white/60">{dropIn.installLabel}</span>
        <code className="font-mono text-base text-white">
          <span className="text-white/50">$ </span>{dropIn.install}
        </code>
      </div>
      <div className="grid grid-cols-[1fr_21rem] items-stretch gap-6">
        <div className="overflow-hidden rounded-lg bg-pe-darker">
          <div className="grid grid-cols-[4.5rem_0.42fr_0.58fr] gap-4 border-b border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/60">
            {dropIn.columns.map((column) => <span key={column}>{column}</span>)}
          </div>
          {dropIn.rows.map((row) => (
            <div key={row.env} className="grid grid-cols-[4.5rem_0.42fr_0.58fr] items-baseline gap-4 border-b border-white/5 px-5 py-1.5 last:border-0">
              <span className="text-sm font-semibold text-white">{row.env}</span>
              <span className="text-white/55"><CodeLine code={row.before} /></span>
              <span className="text-white"><CodeLine code={row.after} /></span>
            </div>
          ))}
        </div>
        <figure className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
          <div className="flex items-center gap-1.5 border-b border-gray-200 bg-white px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="ml-2 truncate rounded bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-600">{dropIn.screenshot.url}</span>
          </div>
          <div className="relative min-h-0 flex-1">
            <Image
              src={dropIn.screenshot.src}
              alt={dropIn.screenshot.alt}
              width={dropIn.screenshot.width}
              height={dropIn.screenshot.height}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </figure>
      </div>
      <p className="text-xl leading-snug font-medium text-pe-dark">{dropIn.takeaway}</p>
    </div>
  );
}
