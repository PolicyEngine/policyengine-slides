import {
  type Icon,
  IconArrowLeft,
  IconArrowRight,
  IconArrowsSplit2,
  IconBook,
  IconBrandGithub,
  IconBriefcase,
  IconBuildingBank,
  IconCalendar,
  IconChartBar,
  IconChartDots,
  IconChevronRight,
  IconFileText,
  IconFlask,
  IconGavel,
  IconHeartHandshake,
  IconHistory,
  IconPlayerPlay,
  IconReceiptTax,
  IconScale,
  IconUsersGroup,
  IconWorld,
} from '@tabler/icons-react';
import type { BlsIcon, BlsSlideContent } from '../content';

const ICONS: Record<BlsIcon, Icon> = {
  'book': IconBook,
  'calendar': IconCalendar,
  'building': IconBuildingBank,
  'chart-bar': IconChartBar,
  'chart-dots': IconChartDots,
  'file-text': IconFileText,
  'flask': IconFlask,
  'github': IconBrandGithub,
  'history': IconHistory,
  'play': IconPlayerPlay,
  'scale': IconScale,
  'users': IconUsersGroup,
  'world': IconWorld,
  'briefcase': IconBriefcase,
  'receipt': IconReceiptTax,
  'gavel': IconGavel,
  'heart-handshake': IconHeartHandshake,
};

function DeckIcon({ name, size = 26 }: { name: BlsIcon; size?: number }) {
  const Component = ICONS[name];
  return <Component className="shrink-0 text-pe-teal" size={size} stroke={1.75} aria-hidden="true" />;
}

/** Two-by-two cards, each with an icon, a title and one line of text. */
export function IconCards({
  cards,
  hero,
  takeaway,
}: {
  cards: NonNullable<BlsSlideContent['cards']>;
  hero?: BlsSlideContent['hero'];
  takeaway?: string;
}) {
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
  if (!hero && takeaway) {
    return (
      <div className="flex max-w-6xl flex-col max-lg:[@media(max-height:820px)]:[zoom:0.84] [@media(max-height:740px)]:[zoom:0.94]">
        {grid}
        <div className="mt-6 flex items-center gap-4 rounded-lg border-l-4 border-pe-teal bg-pe-teal/10 px-5 py-3">
          <IconArrowRight className="shrink-0 text-pe-teal" size={26} stroke={2} aria-hidden="true" />
          <p className="text-lg font-semibold leading-snug text-pe-dark lg:text-xl">{takeaway}</p>
        </div>
      </div>
    );
  }
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

type TriangleData = NonNullable<BlsSlideContent['triangle']>;

function TriangleCorner({ corner }: { corner: TriangleData['corners']['top'] }) {
  return (
    <div className="flex w-72 items-start gap-3 rounded-xl border-l-4 border-pe-teal bg-gray-50 px-5 py-4 shadow-sm">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pe-teal/10">
        <DeckIcon name={corner.icon} size={24} />
      </span>
      <div>
        <p className="text-xl font-semibold leading-snug text-pe-dark">{corner.title}</p>
        <p className="text-base leading-snug text-gray-600">{corner.text}</p>
      </div>
    </div>
  );
}

/**
 * The triangle itself. The 1000 x 560 box puts each corner card's center on a
 * vertex of the SVG triangle, so the dashed sides run between the cards.
 */
function TriangleDiagram({ triangle, className = '' }: { triangle: TriangleData; className?: string }) {
  const { corners, sides, center } = triangle;
  return (
      <div className={`relative h-[560px] w-[1000px] ${className}`}>
        <svg className="absolute inset-0 h-full w-full text-pe-teal/50" viewBox="0 0 1000 560" aria-hidden="true">
          <polygon points="500,50 144,515 856,515" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10 8" />
        </svg>
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <TriangleCorner corner={corners.top} />
        </div>
        <div className="absolute bottom-0 left-0">
          <TriangleCorner corner={corners.left} />
        </div>
        <div className="absolute bottom-0 right-0">
          <TriangleCorner corner={corners.right} />
        </div>
        <p className="absolute right-[700px] top-[250px] w-60 text-right text-base leading-snug text-gray-600">{sides.left}</p>
        <p className="absolute left-[700px] top-[250px] w-60 text-base leading-snug text-gray-600">{sides.right}</p>
        <p className="absolute left-1/2 top-[527px] w-[22rem] -translate-x-1/2 text-center text-base leading-snug text-gray-600">{sides.bottom}</p>
        <div className="absolute left-1/2 top-[360px] w-72 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-pe-dark px-5 py-5 text-center text-white">
          <IconScale size={40} stroke={1.5} className="mx-auto text-teal-300" aria-hidden="true" />
          <p className="mt-2 text-lg font-bold leading-snug">{center.title}</p>
          <p className="mt-1 text-sm leading-snug text-white/80">{center.text}</p>
        </div>
      </div>
  );
}

/**
 * Three calculations at the corners of a triangle, with the law at the center.
 * With steps, the steps run down the left and the triangle shrinks to 75% on
 * the right; the wrapper reserves the scaled 750 x 420 footprint.
 */
export function Triangle({ triangle }: { triangle: TriangleData }) {
  const takeaway = <p className="text-xl leading-snug font-medium text-pe-dark">{triangle.takeaway}</p>;
  if (!triangle.steps) {
    return (
      <div className="-mt-4 space-y-4">
        <TriangleDiagram triangle={triangle} className="mx-auto" />
        {takeaway}
      </div>
    );
  }
  return (
    <div className="-mt-2 space-y-5">
      <div className="grid grid-cols-[1fr_auto] items-center gap-10">
        <ol className="space-y-6">
          {triangle.steps.map((step, index) => (
            <li key={step.title} className="flex items-start gap-5">
              <span className="w-10 shrink-0 font-mono text-2xl font-bold text-pe-teal" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-2xl font-semibold leading-snug text-pe-dark">{step.title}</p>
                <p className="mt-1 text-lg leading-snug text-gray-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="relative h-[420px] w-[750px] shrink-0">
          <TriangleDiagram triangle={triangle} className="origin-top-left scale-75" />
        </div>
      </div>
      {takeaway}
    </div>
  );
}

type BridgeData = NonNullable<BlsSlideContent['bridge']>;

const SIDE_STYLE: Record<'nber' | 'pe', { border: string; icon: string; dot: string }> = {
  nber: { border: 'border-[var(--pe-amber-dark)]', icon: 'text-[var(--pe-amber-dark)]', dot: 'bg-[var(--pe-amber-dark)]' },
  pe: { border: 'border-teal-400', icon: 'text-teal-500', dot: 'bg-teal-400' },
};

function BridgeSide({ side }: { side: BridgeData['left'] }) {
  const style = SIDE_STYLE[side.party];
  return (
    <div className={`flex h-full flex-col rounded-xl border-t-4 bg-gray-50 px-5 py-4 ${style.border}`}>
      <p className="text-sm font-bold uppercase tracking-wider text-pe-dark lg:text-base">{side.title}</p>
      <div className="mt-2 flex flex-1 flex-col justify-evenly divide-y divide-gray-200">
        {side.items.map((item) => {
          const Component = ICONS[item.icon];
          return (
            <div key={item.title} className="flex items-center gap-3 py-2 lg:gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm lg:h-10 lg:w-10">
                <Component className={style.icon} size={24} stroke={1.75} aria-hidden="true" />
              </span>
              <div>
                <p className="text-base font-semibold leading-snug text-pe-dark lg:text-lg">{item.title}</p>
                <p className="text-xs leading-snug text-gray-600 lg:text-sm">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** TAXSIM on the left, PolicyEngine on the right, the agreement and the year routing in the middle. */
export function PartnershipBridge({ bridge }: { bridge: BridgeData }) {
  const { center } = bridge;
  return (
    <div className="mt-2">
      <div className="grid min-h-[calc(100vh-390px)] grid-cols-[1fr_auto_clamp(14rem,24vw,19rem)_auto_1fr] items-stretch gap-3">
        <BridgeSide side={bridge.left} />
        <IconArrowRight className={`self-center ${SIDE_STYLE.nber.icon}`} size={30} stroke={2.5} aria-hidden="true" />
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pe-dark">
            <IconHeartHandshake className="text-teal-300" size={34} stroke={1.5} aria-hidden="true" />
          </span>
          <div>
            <p className="text-base font-bold leading-snug text-pe-dark lg:text-lg">{center.title}</p>
            <p className="text-xl font-extrabold text-teal-600 lg:text-2xl">{center.date}</p>
            <p className="mt-1 text-sm leading-snug text-gray-600">{center.detail}</p>
          </div>
          <div className="w-full rounded-xl bg-pe-dark px-4 py-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70 lg:text-sm">{center.routingTitle}</p>
            <div className="mt-2 space-y-2">
              {center.routing.map((route) => (
                <div key={route.years} className="flex items-center justify-between gap-2 whitespace-nowrap rounded-lg bg-white/10 px-3 py-2">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <span className={`h-3 w-3 rounded-full ${SIDE_STYLE[route.party].dot}`} aria-hidden="true" />
                    {route.years}
                  </span>
                  <span className="text-xs text-white/85">{route.engine}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <IconArrowLeft className={`self-center ${SIDE_STYLE.pe.icon}`} size={30} stroke={2.5} aria-hidden="true" />
        <BridgeSide side={bridge.right} />
      </div>
    </div>
  );
}

type RoutingData = NonNullable<BlsSlideContent['routing']>;

const ROUTE_STROKE: Record<'nber' | 'pe', string> = {
  nber: 'var(--pe-amber-dark)',
  pe: 'var(--pe-teal-light)',
};

/** Curved connectors between a single box and two stacked boxes; `join` mirrors the fork. */
function Connector({ join = false }: { join?: boolean }) {
  const paths = [
    { party: 'nber' as const, d: join ? 'M0,25 C55,25 45,50 100,50' : 'M0,50 C55,50 45,25 100,25' },
    { party: 'pe' as const, d: join ? 'M0,75 C55,75 45,50 100,50' : 'M0,50 C55,50 45,75 100,75' },
  ];
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
      {paths.map((p) => (
        <path key={p.party} d={p.d} fill="none" stroke={ROUTE_STROKE[p.party]} strokeWidth={3.5} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

function ExampleTable({ table }: { table: RoutingData['input']['table'] }) {
  return (
    <table className="mt-3 w-full border-separate border-spacing-y-1.5 font-mono text-[11px] lg:text-sm">
      <thead>
        <tr className="text-left text-white/55">
          <th className="w-4" aria-label="Row" />
          {table.columns.map((column) => (
            <th key={column} className="px-1.5 pb-0.5 font-normal lg:px-2">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row.cells.join('|')} className="bg-white/10 text-white">
            <td className="rounded-l-md pl-2">
              <span className={`block h-2.5 w-2.5 rounded-full ${SIDE_STYLE[row.party].dot}`} aria-hidden="true" />
            </td>
            {row.cells.map((cell, index) => (
              <td key={index} className={`px-1.5 py-1.5 lg:px-2 ${index === row.cells.length - 1 ? 'rounded-r-md' : ''}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function FileBox({ file }: { file: RoutingData['input'] }) {
  return (
    <div className="flex flex-col justify-center rounded-xl bg-pe-darker px-4 py-4 text-white lg:px-5">
      <p className="text-base font-bold lg:text-lg">{file.title}</p>
      <p className="text-sm text-white/70">{file.detail}</p>
      <ExampleTable table={file.table} />
    </div>
  );
}

/** Same input file and output file on each side; rows split by tax year to two engines in between. */
export function WorkflowRouting({ routing }: { routing: RoutingData }) {
  return (
    <div className="mt-2 space-y-5">
      <div className="grid h-[clamp(14rem,calc(100vh-405px),24rem)] grid-cols-[minmax(min-content,1.12fr)_3rem_minmax(0,0.88fr)_3rem_minmax(min-content,1.12fr)] items-stretch">
        <FileBox file={routing.input} />
        <Connector />
        <div className="flex flex-col justify-between gap-4 py-1">
          {routing.engines.map((engine) => (
            <div key={engine.name} className={`flex flex-1 flex-col justify-center rounded-xl border-l-4 bg-gray-50 px-5 py-3 ${SIDE_STYLE[engine.party].border}`}>
              <p className="text-sm font-bold tracking-wide text-gray-500">{engine.years}</p>
              <p className="text-xl font-bold leading-snug text-pe-dark">{engine.name}</p>
              <p className="text-sm leading-snug text-gray-600">{engine.detail}</p>
            </div>
          ))}
        </div>
        <Connector join />
        <FileBox file={routing.output} />
      </div>
      <div className="flex items-center gap-4 rounded-lg border-l-4 border-pe-teal bg-pe-teal/10 px-5 py-3">
        <IconArrowsSplit2 className="shrink-0 text-pe-teal" size={28} stroke={1.75} aria-hidden="true" />
        <p className="text-lg font-semibold leading-snug text-pe-dark lg:text-xl">{routing.takeaway}</p>
      </div>
      {routing.footnote && <p className="text-sm text-gray-500">{routing.footnote}</p>}
    </div>
  );
}
