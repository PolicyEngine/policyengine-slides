import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  IconAdjustmentsHorizontal,
  IconAlertTriangle,
  IconAnchor,
  IconAntennaBars1,
  IconAntennaBars3,
  IconAntennaBars5,
  IconArrowDown,
  IconArrowsExchange,
  IconArrowsShuffle,
  IconBolt,
  IconBook,
  IconBrandGithub,
  IconBrandPython,
  IconBriefcase,
  IconBuildingBank,
  IconBuildingFactory2,
  IconBuildingSkyscraper,
  IconBulb,
  IconCalendarEvent,
  IconChartBar,
  IconChartLine,
  IconCheck,
  IconChecks,
  IconChevronRight,
  IconCircleCheck,
  IconCircleHalf2,
  IconCode,
  IconCoins,
  IconCrane,
  IconCurrencyDollar,
  IconDatabase,
  IconEngine,
  IconFileCode,
  IconFileText,
  IconFlag,
  IconGitCompare,
  IconHelpCircle,
  IconHome,
  IconHourglass,
  IconInfoCircle,
  IconLayoutDashboard,
  IconLeaf,
  IconListCheck,
  IconMail,
  IconMathFunction,
  IconMessageCircle,
  IconMessageQuestion,
  IconPlayerPlay,
  IconPlugConnected,
  IconPlusMinus,
  IconPoint,
  IconReceiptTax,
  IconRefresh,
  IconRobot,
  IconRuler2,
  IconScale,
  IconSearch,
  IconShip,
  IconShoppingCart,
  IconStack2,
  IconTag,
  IconTarget,
  IconTargetArrow,
  IconTerminal2,
  IconToggleRight,
  IconTool,
  IconTrendingDown,
  IconTrendingUp,
  IconUserOff,
  IconUsers,
  IconUsersGroup,
  IconWallet,
  IconWaveSine,
  IconWorld,
  IconWritingSign,
  IconX,
  type Icon,
} from "@tabler/icons-react";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import {
  access,
  anchored,
  bridgeBenchmark,
  capitalSpending,
  claudeFlow,
  corporationTax,
  equationExamples,
  forecastRecord,
  freeRunning,
  hostedObrPin,
  incomeTax,
  layers,
  listing,
  liveSiteViews,
  modelModules,
  multiplierRows,
  pipeline,
  platformModels,
  registryStatus,
  review,
  reviewFindings,
  sources,
  thibRatings,
  unemploymentDrift,
  type Source,
} from "../content";
import styles from "./deck.module.css";
import embedStyles from "./embed.module.css";
import SiteEmbed from "./SiteEmbed";
import {
  BankRateBars,
  IncomeTaxBars,
  MultiplierPlot,
  ScorecardTable,
} from "./figures";

type Item = { icon: Icon; title: string; text?: ReactNode; aside?: ReactNode };

const agenda: Item[] = [
  {
    icon: IconBrandPython,
    title: "The OBR model in Python",
    text: "Our build, and Thibault's review",
  },
  {
    icon: IconTarget,
    title: "How well it fits",
    text: "Anchored and free-running",
  },
  {
    icon: IconBolt,
    title: "Policy shocks and limits",
    text: "Against the OBR's multipliers",
  },
  {
    icon: IconStack2,
    title: "The macro platform",
    text: "Seven models, forecasts, AI access",
  },
  {
    icon: IconUsersGroup,
    title: "Working together",
    text: "Where we could collaborate",
  },
];

const sections = agenda.map(
  (item, index) => `${index + 1} · ${item.title}`,
);

function ExternalLink({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`pointer-events-auto hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

function SourceLine({ items }: { items: Source[] }) {
  return (
    <div className="absolute bottom-24 left-16 right-16 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
      <span>Sources</span>
      {items.map((item) => (
        <ExternalLink key={item.href} href={item.href}>
          {item.label}
        </ExternalLink>
      ))}
    </div>
  );
}

function Frame({
  section,
  title,
  subtitle,
  children,
  references = [],
  center = true,
  scale = 1,
}: {
  section?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  references?: Source[];
  /** Centre the body in the space below the title. */
  center?: boolean;
  /** Enlarges a sparse slide's body; every component scales together. */
  scale?: number;
}) {
  return (
    <Slide className={styles.deck}>
      <div className="flex h-full flex-col">
        <SlideHeader>
          {section && (
            <p className="mb-2 text-base font-semibold uppercase tracking-wide text-pe-teal">
              {section}
            </p>
          )}
          <SlideTitle>{title}</SlideTitle>
          {subtitle && (
            <p className="mt-3 text-xl leading-relaxed text-gray-600">
              {subtitle}
            </p>
          )}
        </SlideHeader>
        <div
          className={`${styles.body} ${center ? styles.centerBody : ""}`}
          style={{ "--scale": scale } as CSSProperties}
        >
          {children}
        </div>
      </div>
      {references.length > 0 && <SourceLine items={references} />}
    </Slide>
  );
}

// The deck's components: one list, one card, one stat, one note, one strip.
// Each takes an icon.

function IconList({ items, twoCol = false }: { items: Item[]; twoCol?: boolean }) {
  return (
    <div className={`${styles.iconList} ${twoCol ? styles.twoCol : ""}`}>
      {items.map(({ icon: ItemIcon, title, text, aside }) => (
        <div
          key={title}
          className={`${styles.iconItem} ${aside ? styles.withAside : ""}`}
        >
          <ItemIcon stroke={1.8} aria-hidden="true" />
          <div>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
          </div>
          {aside}
        </div>
      ))}
    </div>
  );
}

function Card({
  icon: CardIcon,
  title,
  text,
  children,
  amber = false,
}: {
  icon: Icon;
  title: string;
  text?: ReactNode;
  children?: ReactNode;
  amber?: boolean;
}) {
  return (
    <div className={`${styles.card} ${amber ? styles.cardAmber : ""}`}>
      <h2>
        <CardIcon stroke={1.8} aria-hidden="true" />
        {title}
      </h2>
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}

function Stat({
  icon: StatIcon,
  value,
  label,
  note,
  amber = false,
}: {
  icon: Icon;
  value: ReactNode;
  label: string;
  note?: ReactNode;
  amber?: boolean;
}) {
  return (
    <div className={`${styles.card} ${amber ? styles.cardAmber : ""}`}>
      <p className={`${styles.stat} ${amber ? styles.statAmber : ""}`}>
        <StatIcon stroke={1.8} aria-hidden="true" />
        {value}
      </p>
      <p className={styles.statLabel}>{label}</p>
      {note && <p className={styles.statNote}>{note}</p>}
    </div>
  );
}

function Note({ icon: NoteIcon, children }: { icon: Icon; children: ReactNode }) {
  return (
    <p className={styles.takeaway}>
      <NoteIcon stroke={1.8} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

type StripItem = { icon: Icon; label: string; text?: ReactNode };

function Strip({ items }: { items: StripItem[] }) {
  return (
    <div className={styles.strip}>
      {items.map(({ icon: StripIcon, label, text }) => (
        <span key={label}>
          <StripIcon stroke={1.8} aria-hidden="true" />
          <b>{label}</b>
          {text}
        </span>
      ))}
    </div>
  );
}

/** Cards in a row, with an arrow between each pair. */
function Flow({ children }: { children: ReactNode[] }) {
  return (
    <div className={styles.flow}>
      {children.map((child, index) => (
        <Fragment key={index}>
          {index > 0 && <IconChevronRight stroke={2} aria-hidden="true" />}
          {child}
        </Fragment>
      ))}
    </div>
  );
}

function RowLabel({
  icon: RowIcon,
  children,
  detail,
}: {
  icon: Icon;
  children: ReactNode;
  detail?: ReactNode;
}) {
  return (
    <span className={styles.rowLabel}>
      <RowIcon stroke={1.8} aria-hidden="true" />
      <span>
        {children}
        {detail && <small>{detail}</small>}
      </span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Opening

export function TitleSlide() {
  return (
    <CoverSlide
      title="Opening up the OBR macroeconomic model"
      subtitle="An open-source Python implementation, and a platform around it"
      contentClassName="pt-28"
      speakers={[
        { ...speakers["vahid-ahmadi"], title: "Research Associate, PolicyEngine" },
        { ...speakers["max-ghenis"], title: "CEO, PolicyEngine" },
      ]}
    />
  );
}

export function AgendaSlide() {
  return (
    <Frame title="Today" scale={1.25}>
      <IconList items={agenda} />
    </Frame>
  );
}

const layerStatus = {
  built: { label: "Built", className: styles.chipGood },
  partial: { label: "Partly built", className: styles.chipMid },
  gap: { label: "Left to users", className: styles.chipBad },
} as const;

const layerIcons: Icon[] = [IconMathFunction, IconEngine, IconBulb];

export function PublishedVsBuiltSlide() {
  return (
    <Frame
      section={sections[0]}
      title="What the OBR publishes, and what we built"
      scale={1.35}
      references={[sources.roadmap, sources.obrReadme]}
    >
      <div className={styles.stack}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Layer</th>
              <th>The OBR</th>
              <th>Our Python version</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {layers.map((layer, index) => (
              <tr key={layer.title}>
                <td>
                  <RowLabel icon={layerIcons[index] ?? IconPoint}>{layer.title}</RowLabel>
                </td>
                <td>{layer.obr}</td>
                <td>{layer.ours}</td>
                <td>
                  <span className={`${styles.chip} ${layerStatus[layer.status].className}`}>
                    {layerStatus[layer.status].label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Note icon={IconInfoCircle}>Same equations, not the OBR&apos;s judgements</Note>
      </div>
    </Frame>
  );
}

const moduleIcons: Record<string, Icon> = {
  "GDP and output": IconChartLine,
  Consumption: IconShoppingCart,
  "Investment and inventories": IconBuildingFactory2,
  "Labour market": IconBriefcase,
  Exports: IconShip,
  Imports: IconArrowsExchange,
  "Balance of payments": IconWorld,
  "North Sea oil": IconEngine,
  "Prices and wages": IconTag,
  "Income accounts": IconWallet,
  "Public sector": IconBuildingBank,
  "Finance and balance sheets": IconScale,
};

// The model's modules, from the listing's own section headers. Counts and
// the mapping from groups to modules are in content.ts.
export function ModulesSlide() {
  return (
    <Frame
      section={sections[0]}
      title="The model's modules"
      scale={1.05}
      subtitle={`${listing.equations} equations in ${modelModules.length} modules, from the listing's own sections`}
      references={[sources.listing, sources.review]}
    >
      <div className={styles.stack}>
        <div className={`${styles.cardGrid} ${styles.cols4}`}>
          {modelModules.map((module) => {
            const ModuleIcon = moduleIcons[module.name] ?? IconPoint;
            return (
              <div key={module.name} className={`${styles.card} ${styles.module}`}>
                <h2>
                  <ModuleIcon stroke={1.8} aria-hidden="true" />
                  {module.name}
                </h2>
                <span className={styles.moduleCount}>{module.equations}</span>
                <p className={styles.moduleFoot}>
                  <span className={styles.mono}>{module.variables}</span>
                  {module.exogenous && (
                    <span className={`${styles.chip} ${styles.chipMid}`}>
                      {module.exogenous}
                    </span>
                  )}
                </p>
              </div>
            );
          })}
        </div>
        <Strip
          items={[
            { icon: IconMathFunction, label: "Number", text: "equations in the module" },
            { icon: IconCode, label: "Code", text: "example variables" },
            { icon: IconInfoCircle, label: "Tag", text: "exogenous in the OBR's file" },
          ]}
        />
      </div>
    </Frame>
  );
}

export function InputsSlide() {
  return (
    <Frame
      section={sections[0]}
      title="The inputs"
      scale={1.15}
      references={[sources.obrReadme, sources.forecasting]}
    >
      <div className={styles.stack}>
        <div className={`${styles.cardGrid} ${styles.cols4}`}>
          <Stat
            icon={IconMathFunction}
            value={listing.equations}
            label="Equations"
            note={`EViews listing, ${listing.listingDate}`}
          />
          <Stat
            icon={IconCalendarEvent}
            value={listing.efoShort}
            label="EFO baseline"
            note={`Published ${listing.efoPublished}`}
          />
          <Stat
            icon={IconDatabase}
            value={listing.onsSeries}
            label="ONS series"
            note={`Cover ${listing.missingWithOnsCodes} of ${listing.missingEndogenous} variables the EFO omits`}
          />
          <Stat
            icon={IconAlertTriangle}
            value={listing.droppedEquations}
            label="Equations dropped"
            note="In some quarter: no input data"
            amber
          />
        </div>
        <Note icon={IconInfoCircle}>
          Unpublished inputs are estimated or seeded, and labelled
        </Note>
      </div>
    </Frame>
  );
}

const equationIcons: Icon[] = [IconShoppingCart, IconUserOff, IconWallet];
const pipelineIcons: Icon[] = [
  IconFileCode,
  IconDatabase,
  IconAdjustmentsHorizontal,
  IconRefresh,
  IconAnchor,
  IconGitCompare,
];

export function ArchitectureSlide() {
  return (
    <Frame
      section={sections[0]}
      title="How it runs"
      scale={1.08}
      references={[sources.listing, sources.transpiler, sources.obrReadme, sources.demo]}
    >
      <div className={styles.stack}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Example equation</th>
              <th>The OBR&apos;s listing, and the Python it becomes (… marks trimmed terms)</th>
            </tr>
          </thead>
          <tbody>
            {equationExamples.map((example, index) => (
              <tr key={example.line}>
                <td>
                  <RowLabel
                    icon={equationIcons[index] ?? IconPoint}
                    detail={`${example.kind}, l.${example.line}`}
                  >
                    {example.label}
                  </RowLabel>
                </td>
                <td>
                  <div className={styles.eqLine}>
                    <span>EViews</span>
                    {example.eviews}
                  </div>
                  <div className={`${styles.eqLine} ${styles.eqPython}`}>
                    <span>Python</span>
                    {example.python}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Flow>
          {pipeline.map((step, index) => (
            <Card
              key={step.title}
              icon={pipelineIcons[index] ?? IconPoint}
              title={step.title}
              text={step.text}
            />
          ))}
        </Flow>
        <Strip
          items={[
            { icon: IconBrandPython, label: "Python", text: "run_reform()" },
            { icon: IconLayoutDashboard, label: "Dashboard", text: "scenarios, equations" },
            { icon: IconRobot, label: "MCP tools", text: "for AI agents" },
          ]}
        />
      </div>
    </Frame>
  );
}

// Thibault's review of the published code (September 2026) and our check of
// his three headline points. Sources: his email of 23 Sep, our replies of
// 29 Sep and 8 Oct, and the write-up in docs/published_model_review.md
// (entries H1, R1, V2). He is in the room: the wording credits his work.
const headlinePoints: {
  icon: Icon;
  point: string;
  finding: string;
  check: string;
  verdict: string;
}[] = [
  {
    icon: IconUsers,
    point: "Distribution",
    finding: "No channel: taxing high earners to pay low earners leaves consumption unchanged",
    check: "Consumption uses aggregates only, with no household split",
    verdict: "Holds",
  },
  {
    icon: IconShip,
    point: "Total imports",
    finding: "Fixed: more activity can't change the trade balance",
    check: "Exports and imports are never solved for; sterling moves only prices",
    verdict: "Holds",
  },
  {
    icon: IconCoins,
    point: "Public debt interest",
    finding: "Fixed: more borrowing doesn't raise the interest bill",
    check: "Gilt interest isn't in the code; household interest does follow Bank Rate",
    verdict: "Holds, narrower",
  },
];

export function ThibReviewSlide() {
  return (
    <Frame
      section={sections[0]}
      title="Thibault's review: three headline points, checked"
      scale={1.25}
      subtitle={`September 2026: the OBR's published EViews code and variable list, ${review.points} points`}
      references={[sources.review]}
    >
      <div className={styles.stack}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Point</th>
              <th>Thibault&apos;s finding</th>
              <th>Our check, in the Python build</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {headlinePoints.map((row) => (
              <tr key={row.point}>
                <td>
                  <RowLabel icon={row.icon}>{row.point}</RowLabel>
                </td>
                <td>{row.finding}</td>
                <td>{row.check}</td>
                <td>
                  <span className={`${styles.chip} ${styles.chipGood}`}>{row.verdict}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Strip
          items={[
            { icon: IconListCheck, label: `${review.points} points`, text: "rated by Thibault" },
            { icon: IconAntennaBars5, label: `${thibRatings.high}`, text: "high" },
            { icon: IconAntennaBars3, label: `${thibRatings.mid}`, text: "mid" },
            { icon: IconAntennaBars1, label: `${thibRatings.low}`, text: "low" },
          ]}
        />
      </div>
    </Frame>
  );
}

const findingIcons: Icon[] = [IconUserOff, IconChartLine, IconPlusMinus, IconFlag];

export function ReviewSlide() {
  return (
    <Frame
      section={sections[0]}
      title={`Thibault's ${review.points} points, checked line by line`}
      scale={1.15}
      subtitle="Each one against the OBR's published code and variable list"
      references={[sources.review]}
    >
      <div className={styles.stack}>
        <div className={`${styles.cardGrid} ${styles.cols3}`}>
          <Stat
            icon={IconCircleCheck}
            value={review.accurate}
            label="Accurate"
            note={`${review.documented} documented, ${review.notFlagged} not flagged`}
          />
          <Stat icon={IconCircleHalf2} value={review.partly} label="Partly true" />
          <Stat
            icon={IconHelpCircle}
            value={review.uncheckable}
            label="Can't be checked"
            note="Process, outside the code"
          />
        </div>
        <p className={styles.listHead}>
          <IconAlertTriangle stroke={1.8} aria-hidden="true" />
          Problems in the published files
        </p>
        <IconList
          twoCol
          items={reviewFindings.map((finding, index) => ({
            icon: findingIcons[index] ?? IconPoint,
            title: finding.title,
            text: `${finding.code} · ${finding.text}`,
          }))}
        />
      </div>
    </Frame>
  );
}

export function ThibDifferSlide() {
  return (
    <Frame
      section={sections[0]}
      title="Where we agree, and one open question"
      scale={1.35}
      references={[sources.review, sources.obrReadme]}
    >
      <IconList
        twoCol
        items={[
          {
            icon: IconChecks,
            title: "We agree",
            text: "Fiscal feedback can't reach output: GDP is an input",
          },
          {
            icon: IconAdjustmentsHorizontal,
            title: "Two refinements",
            text: "Bank Rate and real wages reach consumption; the current account feeds back",
          },
          {
            icon: IconFileText,
            title: "The open question",
            text: "About half the accurate points are documented by the OBR",
          },
          {
            icon: IconMessageCircle,
            title: "Thibault's view",
            text: "A documented gap is still a gap",
          },
          {
            icon: IconTarget,
            title: "Our suggestion",
            text: "Lead with: the model can't reproduce the OBR's own forecast",
          },
          {
            icon: IconBuildingBank,
            title: "Taking it to the OBR",
            text: "Any fix can be tested in the open build first",
          },
        ]}
      />
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Fit

export function AnchoringSlide() {
  return (
    <Frame
      section={sections[1]}
      title="Anchored to the October 2026 EFO"
      scale={1.5}
      references={[sources.obrReadme, sources.siteFigures]}
    >
      <IconList
        twoCol
        items={[
          {
            icon: IconAnchor,
            title: `GDP ${anchored.gdpMape}% MAPE, consumption ${anchored.consMape}%`,
            text: `${anchored.window}, by construction`,
          },
          {
            icon: IconGitCompare,
            title: "Reforms scored as deltas",
            text: "The add-factors cancel",
          },
          {
            icon: IconBolt,
            title: `Converges in ${anchored.convergedQuarters} of ${anchored.convergedQuarters} quarters`,
            text: "Every demo solve, default closure",
          },
          {
            icon: IconAlertTriangle,
            title: "Unemployment is not anchored",
            text: `${unemploymentDrift[0].model}% against the EFO's ${unemploymentDrift[0].efo}% by ${unemploymentDrift[0].quarter}`,
          },
        ]}
      />
    </Frame>
  );
}

export function FitSlide() {
  return (
    <Frame
      section={sections[1]}
      title="Two numbers that are easy to misread"
      scale={1.5}
      references={[sources.scorecard, sources.obrReadme, sources.macroReadme]}
    >
      <div className={styles.stack}>
        <div className={`${styles.cardGrid} ${styles.cols2}`}>
          <Stat
            icon={IconAnchor}
            value={`${anchored.gdpMape}%`}
            label="Anchored GDP error"
            note="The anchoring works. Not forecast skill"
          />
          <Stat
            icon={IconPlayerPlay}
            value={`${freeRunning.gdpMape}%`}
            label="Free-running GDP error, add-factors off"
            note="This emulator's gap. Not an OBR forecast error"
            amber
          />
        </div>
        <Note icon={IconTag}>
          Our platform&apos;s label: &ldquo;{registryStatus.split(";")[0]}&rdquo;
        </Note>
      </div>
    </Frame>
  );
}

export function ScorecardSlide() {
  return (
    <Frame
      section={sections[1]}
      title="Free-running scorecard"
      scale={1.3}
      subtitle={`${freeRunning.computed} of ${freeRunning.headline} headline variables computed; ${freeRunning.withinBand} of ${freeRunning.computed} within band`}
      references={[sources.scorecard]}
    >
      <ScorecardTable />
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Shocks and limits

export function MultipliersSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Shocks against the OBR's multipliers"
      scale={1.2}
      subtitle="GDP per pound at quarters 1, 4 and 12; sustained shocks from 2025Q1"
      references={[sources.demo, sources.demoResults, sources.passthrough]}
    >
      <MultiplierPlot />
    </Frame>
  );
}

// Where the income-tax shock comes from and how it moves: the model has no
// tax calculator, so the revenue is an input (demo.md row 2, l.48 and l.53).
export function IncomeTaxSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Income tax: the channel with real behaviour"
      scale={1.12}
      subtitle="Basic rate +1p, sustained from 2025Q1. Real GDP change, £m a quarter"
      references={[sources.demo, sources.demoResults, sources.obrReadme]}
    >
      <div className={styles.stack}>
        <Flow>
          <Card
            icon={IconReceiptTax}
            title="HMRC ready reckoner"
            text={`${incomeTax.revenuePerQuarter} a quarter, an input`}
          />
          <Card icon={IconWallet} title="Household income falls" text="HHDI, l.654" />
          <Card icon={IconShoppingCart} title="Consumption equation" text="The OBR's own, l.4" />
          <Card icon={IconChartLine} title="GDP" text="Solved here; fixed in the OBR's file" />
        </Flow>
        <div className="grid grid-cols-[1fr_30em] items-center gap-[3em]">
          <div className={styles.stack}>
            <IncomeTaxBars />
            <Note icon={IconUsersGroup}>
              PolicyEngine microsim costing ({incomeTax.policyEngineRevenuePerQuarter}) gives
              the same ratios
            </Note>
          </div>
          <IconList
            items={[
              {
                icon: IconScale,
                title: "Right order, reverse profile",
                text: `Ours grows; the OBR's ${multiplierRows[1].obr} fades`,
              },
              {
                icon: IconBuildingBank,
                title: "No second-round receipts",
                text: "Borrowing moves one for one",
              },
              {
                icon: IconShip,
                title: "Imports don't respond",
                text: "GDP change equals consumption change",
              },
            ]}
          />
        </div>
      </div>
    </Frame>
  );
}

export function ClosuresSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Corporation tax and capital spending"
      scale={1.15}
      subtitle="Both need the opt-in investment closure, a stop-gap"
      references={[sources.demo, sources.obrReadme]}
    >
      <div className={`${styles.cardGrid} ${styles.cols2}`} style={{ columnGap: "3em" }}>
        <div className={styles.stack}>
          <p className={styles.listHead}>
            <IconBuildingSkyscraper stroke={1.8} aria-hidden="true" />
            Corporation tax +5pp
          </p>
          <div className={`${styles.cardGrid} ${styles.cols2}`}>
            <Stat
              icon={IconTrendingDown}
              value={`£${Math.abs(corporationTax.gdpQ4)}m`}
              label="GDP fall, quarter 4"
            />
            <Stat
              icon={IconTrendingDown}
              value={`£${Math.abs(corporationTax.gdpQ12)}m`}
              label="GDP fall, quarter 12"
            />
          </div>
          <Note icon={IconInfoCircle}>
            {corporationTax.plateauFraction} of the way to a {corporationTax.plateau} plateau.
            No sourced OBR benchmark
          </Note>
        </div>
        <div className={styles.stack}>
          <p className={styles.listHead}>
            <IconCrane stroke={1.8} aria-hidden="true" />
            Government investment +{capitalSpending.shock} a quarter
          </p>
          <div className={`${styles.cardGrid} ${styles.cols2}`}>
            <Stat
              icon={IconTrendingUp}
              value={`£${capitalSpending.gdpQ1.toLocaleString("en-GB")}m`}
              label="GDP rise, quarter 1"
            />
            <Stat
              icon={IconTrendingUp}
              value={`£${capitalSpending.gdpQ12.toLocaleString("en-GB")}m`}
              label="GDP rise, quarter 12"
            />
          </div>
          <Note icon={IconInfoCircle}>
            Pass-through at about 1.0, no taper. Dead under the default closure
          </Note>
        </div>
      </div>
    </Frame>
  );
}

export function BankRateSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Bank Rate: weaker than the Bank of England's range"
      scale={1.4}
      subtitle="+1pp held for four quarters. Peak fall in GDP"
      references={[sources.demo, sources.monetary]}
    >
      <div className={styles.stack}>
        <BankRateBars />
        <Note icon={IconInfoCircle}>Only consumption and household interest respond</Note>
      </div>
    </Frame>
  );
}

export function LimitsSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Known limits"
      scale={1.35}
      references={[sources.obrReadme, sources.siteFigures, sources.tywhh]}
    >
      <IconList
        twoCol
        items={[
          {
            icon: IconBuildingBank,
            title: "Bank Rate response is weak",
            text: "A quarter to a half of the BoE's range",
          },
          {
            icon: IconUserOff,
            title: "Unemployment drifts",
            text: `${unemploymentDrift[1].model}% against ${unemploymentDrift[1].efo}% by ${unemploymentDrift[1].quarter}`,
          },
          {
            icon: IconScale,
            title: "Spending multiplier is about 1",
            text: `By construction, against the OBR's ${multiplierRows[0].obr}`,
          },
          {
            icon: IconAdjustmentsHorizontal,
            title: "VAT needs an opt-in overlay",
            text: "CPI is exogenous in the listing",
          },
          {
            icon: IconCalendarEvent,
            title: "Household-tax seasonal fix",
            text: `GDP error ${freeRunning.gdpMapeBefore71}% → ${freeRunning.gdpMape}%: an artefact removed, not better fit`,
          },
          {
            icon: IconChartLine,
            title: "Point estimates only",
            text: "No confidence bands",
          },
        ]}
      />
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Platform

const platformIcons: Record<string, Icon> = {
  "PolicyEngine microsimulation": IconUsersGroup,
  "OBR emulator": IconBuildingBank,
  "BoE SVAR": IconWaveSine,
  "DEFINE-UK": IconLeaf,
  "OG-UK": IconHourglass,
  "FRB/US": IconCurrencyDollar,
  "US HANK": IconHome,
};

export function PlatformSlide() {
  return (
    <Frame
      section={sections[3]}
      title="The macro platform: models side by side"
      scale={1.2}
      subtitle="In development, not yet launched. Each model answers a different question"
      references={[sources.compare, sources.macroReadme]}
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Model</th>
            <th>Country</th>
            <th>Answers</th>
            <th>Scores reforms</th>
            <th>Runs</th>
          </tr>
        </thead>
        <tbody>
          {platformModels.map((model) => (
            <tr key={model.name}>
              <td>
                <RowLabel icon={platformIcons[model.name] ?? IconPoint}>{model.name}</RowLabel>
              </td>
              <td>{model.country}</td>
              <td>{model.answers}</td>
              <td className={model.scoresReforms ? "" : styles.no}>
                <span className={styles.rowLabel}>
                  {model.scoresReforms ? (
                    <IconCheck stroke={2} aria-hidden="true" />
                  ) : (
                    <IconX stroke={2} aria-hidden="true" />
                  )}
                  {model.scoresReforms ? "Yes" : "No"}
                </span>
              </td>
              <td>{model.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Frame>
  );
}

const liveViewIcons: Record<string, Icon> = {
  Home: IconHome,
  Models: IconStack2,
  Compare: IconGitCompare,
  "OBR model": IconBuildingBank,
  "OBR validation": IconChecks,
  Forecasts: IconChartLine,
};

// The platform, live: the deployed site in a frame, with buttons for its main
// pages. The site's headers allow this deck's origins to frame it.
export function LiveSiteSlide() {
  return (
    <Frame
      section={sections[3]}
      title="The platform, live"
      subtitle={new URL(sources.liveSite.href).host}
      center={false}
    >
      <div className={embedStyles.liveBody}>
        <SiteEmbed
          href={sources.liveSite.href}
          title={sources.liveSite.label}
          views={liveSiteViews.map((view) => ({
            ...view,
            icon: liveViewIcons[view.label] ?? IconPoint,
          }))}
        />
      </div>
    </Frame>
  );
}

export function ForecastRecordSlide() {
  return (
    <Frame
      section={sections[3]}
      title="A scored forecast record"
      scale={1.2}
      subtitle="Committed before the data arrive, then scored against no change"
      references={[sources.forecastPage, sources.forecastScores, sources.forecastRules]}
    >
      <div className={styles.stack}>
        <div className={`${styles.cardGrid} ${styles.cols4}`}>
          <Stat
            icon={IconListCheck}
            value={forecastRecord.scored}
            label="Forecasts scored"
            note={`${forecastRecord.live} live, ${forecastRecord.retroactive} retroactive`}
          />
          <Stat
            icon={IconTargetArrow}
            value={`${forecastRecord.liveIn68} of ${forecastRecord.live}`}
            label="Live, inside 68% band"
          />
          <Stat
            icon={IconRuler2}
            value={forecastRecord.averageMiss}
            label="Average miss"
            note={`No change: ${forecastRecord.noChangeMiss}`}
          />
          <Stat
            icon={IconArrowDown}
            value={forecastRecord.bias}
            label="Bias"
            note={`Ran low on ${forecastRecord.ranLow}`}
            amber
          />
        </div>
        <Note icon={IconInfoCircle}>
          Too few to show skill. All from the BoE SVAR, not the OBR emulator
        </Note>
      </div>
    </Frame>
  );
}

// How someone uses the platform from Claude (the macro site's Use page and
// mcp_server.py). No result numbers: the third card names what comes back.
export function AccessSlide() {
  return (
    <Frame
      section={sections[3]}
      title="Use it from Claude"
      scale={1.2}
      references={[sources.connect, sources.mcpServer, sources.cli, sources.macroReadme]}
    >
      <div className={styles.stack}>
        <Flow>
          <Card icon={IconPlugConnected} title="1 · Connect" text={claudeFlow.settingsPath}>
            <div className={styles.chipRow}>
              <code className={styles.code}>{claudeFlow.url}</code>
            </div>
          </Card>
          <Card icon={IconMessageCircle} title="2 · Ask in plain language">
            <p className={styles.bubble}>{claudeFlow.prompt}</p>
          </Card>
          <Card
            icon={IconTool}
            title="3 · Claude calls the tools"
            text="Back: costing, GDP, consumption, investment"
          >
            <div className={styles.chipRow}>
              {claudeFlow.tools.map((tool) => (
                <code key={tool} className={styles.code}>
                  {tool}
                </code>
              ))}
            </div>
          </Card>
        </Flow>
        <Strip
          items={[
            { icon: IconRobot, label: "MCP server", text: `${access.mcpTools} tools, hosted` },
            { icon: IconTerminal2, label: "CLI", text: `${access.cliCommands} commands` },
            { icon: IconCode, label: "Python", text: "each model's own API" },
            { icon: IconDatabase, label: "Data snapshots", text: "dated, never edited" },
          ]}
        />
      </div>
    </Frame>
  );
}

export function MicroMacroSlide() {
  return (
    <Frame
      section={sections[3]}
      title="From a microsimulation reform to GDP"
      scale={1.25}
      references={[sources.mcpServer, sources.capabilities]}
    >
      <div className={styles.stack}>
        <Flow>
          <Card icon={IconWritingSign} title="Reform" text="A PolicyEngine-UK parameter change" />
          <Card icon={IconUsersGroup} title="Static costing" text="Microsimulation, £bn a year" />
          <Card
            icon={IconArrowsShuffle}
            title="Bridge"
            text={
              <>
                Quarterly <span className={styles.mono}>HHDI_ADDFACTOR</span> path
              </>
            }
          />
          <Card icon={IconChartLine} title="OBR model" text="GDP, consumption, investment" />
        </Flow>
        <div className={`${styles.cardGrid} ${styles.cols2}`}>
          <Card
            icon={IconChartBar}
            title="Distribution stays in the microsimulation"
            text="Deciles, winners and losers; poverty before housing costs"
          />
          <Card
            icon={IconScale}
            title="Compared with HMRC"
            text={`1p basic rate: ${bridgeBenchmark.policyEngine} static, HMRC ${bridgeBenchmark.hmrc} (${bridgeBenchmark.gap})`}
            amber
          />
        </div>
      </div>
    </Frame>
  );
}

const demoSteps: { icon: Icon; title: string; text: string; code: string }[] = [
  {
    icon: IconBrandPython,
    title: "Run a shock in Python",
    text: "Government consumption, then income tax",
    code: "run_reform(var=\"CGG\", shock=1250)",
  },
  {
    icon: IconToggleRight,
    title: "Switch on a labelled overlay",
    text: "VAT pass-through; Bank Rate with mortgage rates",
    code: "price_passthrough=True",
  },
  {
    icon: IconLayoutDashboard,
    title: "Open the dashboard",
    text: "Scenarios, variables, equations",
    code: "obr-macroeconomic-model.vercel.app",
  },
  {
    icon: IconRobot,
    title: "Ask an AI agent",
    text: "A 21p basic rate, microsimulation to OBR model",
    code: "start_job · score_reform",
  },
];

export function DemoSlide() {
  return (
    <Frame
      section={sections[4]}
      title="Demo"
      scale={1.3}
      subtitle={`Overlays run locally: the hosted model (${hostedObrPin}) predates VAT pass-through`}
      references={[sources.demo, sources.connect, sources.hostedPin]}
    >
      <IconList
        items={demoSteps.map((step) => ({
          icon: step.icon,
          title: step.title,
          text: step.text,
          aside: <code className={styles.code}>{step.code}</code>,
        }))}
      />
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Working together

export function CollaborateSlide() {
  return (
    <Frame
      section={sections[4]}
      title="Where we could work together"
      scale={1.3}
      references={[sources.obrReadme, sources.review, sources.definePage]}
    >
      <div className={`${styles.cardGrid} ${styles.cols3}`}>
        <Card
          icon={IconAdjustmentsHorizontal}
          title="Closures and fiscal rules"
          text="Other closures; spending that moves borrowing"
        />
        <Card
          icon={IconLeaf}
          title="Public and green investment"
          text="Investment closure and DEFINE-UK"
        />
        <Card
          icon={IconUsersGroup}
          title="Distributional macro"
          text="Macro paths back into household results"
        />
        <Card
          icon={IconSearch}
          title="Equation review"
          text="The listing's open problems"
        />
        <Card
          icon={IconBriefcase}
          title="Labour market"
          text="Anchoring participation to the EFO"
        />
        <Card
          icon={IconBook}
          title="Joint publications"
          text="Methods notes or scenario analysis"
        />
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame section={sections[4]} title="Questions for NEF" scale={1.4}>
      <IconList
        items={[
          {
            icon: IconMessageQuestion,
            title: "Which policy questions would you run first?",
          },
          {
            icon: IconAdjustmentsHorizontal,
            title: "Which OBR judgements should be explicit and switchable?",
            text: "Multiplier taper, monetary response, price pass-through",
          },
          {
            icon: IconLeaf,
            title: "How should green scenarios connect to the OBR model?",
          },
          {
            icon: IconSearch,
            title: "Would you review equations or closures with us?",
          },
          {
            icon: IconWritingSign,
            title: "What output would be useful to publish?",
          },
        ]}
      />
    </Frame>
  );
}

export function NextStepsSlide() {
  return (
    <Frame section={sections[4]} title="Proposed next steps" scale={1.4}>
      <div className={`${styles.cardGrid} ${styles.cols2}`}>
        <Card
          icon={IconCode}
          title="1 · Hands-on session"
          text="Run a scenario NEF chooses, together"
        />
        <Card
          icon={IconTarget}
          title="2 · Pick two or three questions"
          text="Agree scope, closures and checks"
        />
        <Card
          icon={IconSearch}
          title="3 · Shared review"
          text="The open equation and closure issues on GitHub"
        />
        <Card
          icon={IconCalendarEvent}
          title="4 · Check in"
          text="A date to review results and a possible write-up"
        />
      </div>
    </Frame>
  );
}

const contacts = [
  { label: "policyengine.org", url: "https://policyengine.org", Icon: IconWorld },
  { label: "hello@policyengine.org", url: "mailto:hello@policyengine.org", Icon: IconMail },
  { label: sources.obrRepo.label, url: sources.obrRepo.href, Icon: IconBrandGithub },
  { label: sources.macroRepo.label, url: sources.macroRepo.href, Icon: IconBrandGithub },
];

export function ClosingSlide() {
  return (
    <Slide isEnd>
      <h1 className="font-display text-6xl font-bold mb-12 text-center">Thank you</h1>
      <div className="grid w-full max-w-5xl grid-cols-2 gap-5">
        {contacts.map(({ label, url, Icon: ContactIcon }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className={styles.contact}
          >
            <ContactIcon size={30} stroke={1.8} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </Slide>
  );
}
