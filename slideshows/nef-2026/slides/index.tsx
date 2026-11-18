import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  IconAdjustmentsHorizontal,
  IconAlertTriangle,
  IconAnchor,
  IconArrowDown,
  IconArrowNarrowRight,
  IconArrowsShuffle,
  IconBolt,
  IconBook,
  IconBrandGithub,
  IconBrandPython,
  IconBriefcase,
  IconBuildingBank,
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
  IconEqual,
  IconFileCode,
  IconFileText,
  IconFilter,
  IconFlask,
  IconGitCompare,
  IconHelpCircle,
  IconHome,
  IconHourglass,
  IconInfoCircle,
  IconLayoutDashboard,
  IconLeaf,
  IconLineDashed,
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
  incomeTax,
  judgementStandIns,
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
  solver,
  sources,
  unemploymentDrift,
} from "../content";
import styles from "./deck.module.css";
import embedStyles from "./embed.module.css";
import SiteEmbed from "./SiteEmbed";
import {
  BankRateBars,
  IncomeTaxBars,
  Maths,
  ModuleNetwork,
  MultiplierPlot,
  ScorecardTable,
  moduleIcons,
} from "./figures";

type Item = {
  icon: Icon;
  title: string;
  text?: ReactNode;
  aside?: ReactNode;
  muted?: boolean;
};

// The five parts. The agenda slide, the section slides and the tracker in
// every slide's header all read this list.
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

/** Where the slide sits in the talk: past parts, this one, the ones to come. */
function Tracker({ part }: { part: number }) {
  return (
    <nav className={styles.tracker} aria-label="Sections">
      {agenda.map(({ icon: PartIcon, title }, index) => (
        <span
          key={title}
          className={
            index === part ? styles.trackerNow : index < part ? styles.trackerPast : ""
          }
        >
          <PartIcon size={16} stroke={1.8} aria-hidden="true" />
          {title}
        </span>
      ))}
    </nav>
  );
}

function Frame({
  part,
  title,
  subtitle,
  children,
  center = true,
  scale = 1,
}: {
  /** Index of the slide's part in the agenda. */
  part?: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Centre the body in the space below the title. */
  center?: boolean;
  /** Enlarges a sparse slide's body; every component scales together. */
  scale?: number;
}) {
  return (
    <Slide className={styles.deck}>
      <div className="flex h-full flex-col">
        <SlideHeader>
          {part !== undefined && <Tracker part={part} />}
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
    </Slide>
  );
}

// The deck's components: one list, one card, one stat, one note, one strip,
// one table style. Each takes an icon.

function IconList({
  items,
  columns = 1,
}: {
  items: Item[];
  columns?: 1 | 2 | 3;
}) {
  const grid = columns === 3 ? styles.threeCol : columns === 2 ? styles.twoCol : "";
  return (
    <div className={`${styles.iconList} ${grid}`}>
      {items.map(({ icon: ItemIcon, title, text, aside, muted }) => (
        <div
          key={title}
          className={`${styles.iconItem} ${aside ? styles.withAside : ""} ${muted ? styles.muted : ""}`}
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

function Head({ icon: HeadIcon, children }: { icon: Icon; children: ReactNode }) {
  return (
    <p className={styles.listHead}>
      <HeadIcon stroke={1.8} aria-hidden="true" />
      {children}
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

/** Opens a results slide: the question, and exactly what was simulated. */
function Ask({ question, scenario }: { question: string; scenario: string }) {
  return (
    <div className={styles.ask}>
      <p>
        <IconHelpCircle stroke={1.8} aria-hidden="true" />
        <b>Question</b>
        <span>{question}</span>
      </p>
      <p>
        <IconFlask stroke={1.8} aria-hidden="true" />
        <b>Scenario</b>
        <span>{scenario}</span>
      </p>
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

// The baseline every shock is scored against (model README, "Reform
// baseline": run_reform scores around the baseline anchored to the EFO).
const baseline = `shocked run minus the baseline anchored to the ${listing.efo}`;

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

/** Opens a part: its number and title, and the agenda with this part lit. */
function SectionSlide({ part }: { part: number }) {
  const current = agenda[part];
  return (
    <Slide className={styles.deck}>
      <div className="grid h-full grid-cols-[1.15fr_1fr] items-center gap-16">
        <div>
          <p className="mb-3 text-base font-bold uppercase tracking-[0.16em] text-pe-teal">
            Part {part + 1} of {agenda.length}
          </p>
          <h1 className="font-display text-6xl font-bold leading-tight tracking-tight text-pe-dark">
            {current.title}
          </h1>
          <div className="accent-bar mt-6 w-32" />
          <p className="mt-6 text-2xl leading-snug text-gray-600">{current.text}</p>
        </div>
        <div className={styles.sectionList} style={{ "--scale": 1.15 } as CSSProperties}>
          <IconList
            items={agenda.map((item, index) => ({
              icon: item.icon,
              title: item.title,
              muted: index !== part,
            }))}
          />
        </div>
      </div>
    </Slide>
  );
}

export const ModelSectionSlide = () => <SectionSlide part={0} />;
export const FitSectionSlide = () => <SectionSlide part={1} />;
export const ShocksSectionSlide = () => <SectionSlide part={2} />;
export const PlatformSectionSlide = () => <SectionSlide part={3} />;
export const TogetherSectionSlide = () => <SectionSlide part={4} />;

// ---------------------------------------------------------------------------
// Part 1: the OBR model in Python

const layerStatus = {
  built: { label: "Built", className: styles.chipGood },
  partial: { label: "Partly built", className: styles.chipMid },
  standin: { label: "Stand-ins, labelled", className: styles.chipMid },
} as const;

const layerIcons: Icon[] = [IconMathFunction, IconEngine, IconBulb];
const standInIcons: Icon[] = [IconAnchor, IconToggleRight, IconAdjustmentsHorizontal];

export function PublishedVsBuiltSlide() {
  return (
    <Frame part={0} title="What the OBR publishes, and what we built" scale={1.12}>
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
        <Strip
          items={[
            { icon: IconBulb, label: "Stand-ins" },
            ...judgementStandIns.map((item, index) => ({
              icon: standInIcons[index] ?? IconPoint,
              label: item.title,
              text: item.text,
            })),
          ]}
        />
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
            note={`${listing.missingWithOnsCodes} of ${listing.missingEndogenous} missing variables had ONS codes`}
          />
          <Stat
            icon={IconAlertTriangle}
            value={listing.droppedEquations}
            label="Equations dropped"
            note="In some quarter: no input data"
            amber
          />
        </div>
      </div>
    </Frame>
  );
}

// The model's modules, from the listing's own section headers. Counts and
// the mapping from groups to modules are in content.ts.
export function ModulesSlide() {
  return (
    <Frame
      part={0}
      title="The model's modules"
      subtitle={`${listing.equations} equations in ${modelModules.length} modules, from the listing's own sections`}
      scale={1.05}
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

// Links counted from the listing (module-links.py, module-links.json).
export function ModuleLinksSlide() {
  return (
    <Frame part={0} title="How the modules connect">
      <div className={styles.stack}>
        <ModuleNetwork />
        <Strip
          items={[
            {
              icon: IconArrowNarrowRight,
              label: "Number",
              text: "equations that use the other module's variables",
            },
            { icon: IconLineDashed, label: "Dashed", text: "doesn't reach GDP in the OBR's file" },
            { icon: IconFilter, label: "Shown", text: "links of 6 or more, plus the demand loop" },
          ]}
        />
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
    <Frame part={0} title="How it runs" scale={1.05}>
      <div className={styles.stack}>
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
            { icon: IconRefresh, label: "Gauss-Seidel", text: solver.what },
            { icon: IconCircleCheck, label: "Why", text: solver.why },
          ]}
        />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Example equation</th>
              <th>In the OBR&apos;s listing (… marks trimmed terms)</th>
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
                  <Maths tex={example.tex} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Frame>
  );
}

// Thibault's review of the published code (September 2026) and our check of
// it. Sources: his email of 23 Sep, our replies of 29 Sep and 8 Oct, and the
// write-up in docs/published_model_review.md (entries H1, R1, V2 for the
// headline points). He is in the room: the wording credits his work.
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
    finding: "Taxing high earners to pay low earners leaves consumption unchanged",
    check: "Aggregates only: no household split",
    verdict: "Holds",
  },
  {
    icon: IconShip,
    point: "Total imports",
    finding: "More activity can't change the trade balance",
    check: "Exports and imports are never solved for",
    verdict: "Holds",
  },
  {
    icon: IconCoins,
    point: "Public debt interest",
    finding: "More borrowing doesn't raise the interest bill",
    check: "Gilt interest isn't in the code; household interest follows Bank Rate",
    verdict: "Holds, narrower",
  },
];

const findingIcons: Icon[] = [IconUserOff, IconChartLine, IconPlusMinus];

export function ThibReviewSlide() {
  return (
    <Frame
      part={0}
      title="Thibault's review, checked against the code"
      subtitle="September 2026: the OBR's published EViews code and variable list"
    >
      <div className={styles.stack}>
        <Strip
          items={[
            { icon: IconListCheck, label: `${review.points} points` },
            { icon: IconCircleCheck, label: `${review.accurate}`, text: "accurate" },
            { icon: IconCircleHalf2, label: `${review.partly}`, text: "partly true" },
            {
              icon: IconHelpCircle,
              label: `${review.uncheckable}`,
              text: "can't be checked from the code",
            },
          ]}
        />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Headline point</th>
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
        <Head icon={IconAlertTriangle}>Problems in the published files</Head>
        <IconList
          columns={3}
          items={reviewFindings.slice(0, 3).map((finding, index) => ({
            icon: findingIcons[index] ?? IconPoint,
            title: finding.title,
            text: `${finding.code} · ${finding.text}`,
          }))}
        />
        <Note icon={IconChecks}>
          We agree: as published, fiscal feedback can&apos;t reach output, because GDP is an
          input
        </Note>
      </div>
    </Frame>
  );
}

export function ThibNextSlide() {
  return (
    <Frame part={0} title="How to take it to the OBR" scale={1.35}>
      <IconList
        items={[
          {
            icon: IconFileText,
            title: "Documented isn't the same as fine",
            text: "Thibault's view. About half the accurate points are in the OBR's own variable list; a documented gap is still a gap",
          },
          {
            icon: IconTarget,
            title: "The strongest point: it can't reproduce the OBR's own forecast",
            text: "Our suggestion. The add-factors and calibration that make it work aren't published",
          },
          {
            icon: IconBrandPython,
            title: "Test any fix in the open build first",
            text: "Thibault writes to the OBR; any proposed fix can be run in our Python version",
          },
        ]}
      />
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 2: fit

export function FitSlide() {
  return (
    <Frame part={1} title="How well it fits: two very different numbers">
      <div className={styles.stack}>
        <div
          className={`${styles.cardGrid} ${styles.cols2}`}
          style={{ columnGap: "3em", alignItems: "start" }}
        >
          <div className={styles.stack}>
            <Head icon={IconAnchor}>Anchored to the {listing.efo}</Head>
            <div className={`${styles.cardGrid} ${styles.cols2}`}>
              <Stat icon={IconChartLine} value={`${anchored.gdpMape}%`} label="GDP error" />
              <Stat
                icon={IconShoppingCart}
                value={`${anchored.consMape}%`}
                label="Consumption error"
              />
            </div>
            <IconList
              items={[
                {
                  icon: IconInfoCircle,
                  title: "By construction",
                  text: "Add-factors are EFO minus model",
                },
                {
                  icon: IconGitCompare,
                  title: "Reforms scored as deltas",
                  text: "The add-factors cancel",
                },
                {
                  icon: IconUserOff,
                  title: "Unemployment isn't anchored",
                  text: `${unemploymentDrift[0].model}% against the EFO's ${unemploymentDrift[0].efo}% by ${unemploymentDrift[0].quarter}`,
                },
              ]}
            />
          </div>
          <div className={styles.stack}>
            <Head icon={IconPlayerPlay}>Free-running, add-factors off</Head>
            <Stat
              icon={IconChartLine}
              value={`${freeRunning.gdpMape}%`}
              label="GDP error"
              note={`${freeRunning.withinBand} of ${freeRunning.computed} computed variables within band`}
              amber
            />
            <ScorecardTable variables={["Consumption", "Unemployment rate", "Company profits"]} />
          </div>
        </div>
        <Note icon={IconInfoCircle}>
          The free-running gap measures this emulator, not the OBR&apos;s forecast error
        </Note>
        <Strip
          items={[
            {
              icon: IconTag,
              label: "Our platform's label",
              text: <>&ldquo;{registryStatus.split(";")[0]}&rdquo;</>,
            },
          ]}
        />
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 3: shocks and limits

export function MultipliersSlide() {
  return (
    <Frame part={2} title="Shocks against the OBR's multipliers">
      <div className={styles.stack}>
        <Ask
          question="How much does GDP change per £1 of tax or spending, against the OBR's own multipliers?"
          scenario={`Each change is sustained every quarter from 2025Q1 for 12 quarters; ${baseline}`}
        />
        <MultiplierPlot />
      </div>
    </Frame>
  );
}

// These slides point at each other; the numbers are their places in config.ts.
const incomeTaxSlideNumber = 14;
const microMacroSlideNumber = 23;

// Where the income-tax shock comes from and how it moves: the model has no
// tax calculator, so the revenue is an input (demo.md row 2, l.48 and l.53).
export function IncomeTaxSlide() {
  return (
    <Frame
      part={2}
      title="Income tax: the channel with real behaviour"
      subtitle="An aggregate model: one consumption equation, no household split, no deciles"
    >
      <div className={styles.stack}>
        <Ask
          question="If the basic rate rises 1p, how much does GDP fall, and when?"
          scenario={`${incomeTax.revenuePerQuarter} a quarter of income tax from 2025Q1 for 12 quarters; ${baseline}`}
        />
        <Flow>
          <Card
            icon={IconReceiptTax}
            title="HMRC ready reckoner"
            text={`${incomeTax.revenuePerQuarter} a quarter, an input`}
          />
          <Card
            icon={IconWallet}
            title="Household income falls"
            text={`HHDI, l.${equationExamples[2].line}`}
          />
          <Card
            icon={IconShoppingCart}
            title="Consumption equation"
            text={`The OBR's own, l.${equationExamples[0].line}`}
          />
          <Card icon={IconChartLine} title="GDP" text="Solved here; fixed in the OBR's file" />
        </Flow>
        <div className="grid grid-cols-[1fr_29em] items-center gap-[3em]">
          <div className={styles.stack}>
            <Head icon={IconChartBar}>Real GDP change, £m a quarter</Head>
            <IncomeTaxBars />
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
        <Strip
          items={[
            {
              icon: IconEqual,
              label: "Same result",
              text: `with PolicyEngine's own costing (${incomeTax.policyEngineRevenuePerQuarter} a quarter) as the input: still aggregate`,
            },
            {
              icon: IconArrowNarrowRight,
              label: "Deciles",
              text: `come from PolicyEngine's microsimulation, run alongside: slide ${microMacroSlideNumber}`,
            },
          ]}
        />
      </div>
    </Frame>
  );
}

const pounds = (value: number) =>
  `${value < 0 ? "−" : "+"}£${Math.abs(value).toLocaleString("en-GB")}m`;

export function InvestmentSlide() {
  return (
    <Frame part={2} title="Investment: off by default, on with one switch">
      <div className={styles.stack}>
        <Ask
          question="Does corporation tax or public investment move GDP in this model?"
          scenario={`Each change is sustained from 2025Q1 for 12 quarters, with the investment switch on; ${baseline}`}
        />
        <Note icon={IconToggleRight}>
          In the OBR&apos;s file total investment is an input, so these shocks do nothing. Our
          opt-in switch turns on the listing&apos;s own commented-out investment identity (l.86)
        </Note>
        <div className={`${styles.cardGrid} ${styles.cols2}`}>
          <Card
            icon={IconBuildingSkyscraper}
            title="Corporation tax +5pp"
            text="Dearer capital, so investment falls slowly"
          >
            <div className={styles.inlineStats}>
              <span>
                <b>{pounds(corporationTax.gdpQ4)}</b>GDP, quarter 4
              </span>
              <span>
                <b>{pounds(corporationTax.gdpQ12)}</b>GDP, quarter 12
              </span>
            </div>
            <p>
              Still falling, towards about −{corporationTax.plateau} a quarter. No OBR number
              to compare with
            </p>
          </Card>
          <Card
            icon={IconCrane}
            title={`Government investment +${capitalSpending.shock} a quarter`}
            text="About £1 of GDP per £1, with no fade"
          >
            <div className={styles.inlineStats}>
              <span>
                <b>{pounds(capitalSpending.gdpQ1)}</b>GDP, quarter 1
              </span>
              <span>
                <b>{pounds(capitalSpending.gdpQ12)}</b>GDP, quarter 12
              </span>
            </div>
            <p>The OBR&apos;s multiplier: {multiplierRows[4].obrLabel}</p>
          </Card>
        </div>
        <div>
          <span className={`${styles.chip} ${styles.chipBad}`}>
            Stop-gap: freezes a few variables to keep the run stable
          </span>
        </div>
      </div>
    </Frame>
  );
}

export function BankRateSlide() {
  return (
    <Frame part={2} title="Bank Rate: most channels are missing" scale={1.15}>
      <div className={styles.stack}>
        <Ask
          question="If Bank Rate rises 1pp for a year, how much does GDP fall?"
          scenario={`Bank Rate +1pp from 2025Q1 for four quarters, then back; ${baseline}. Bars show the biggest fall in GDP`}
        />
        <BankRateBars />
        <Strip
          items={[
            { icon: IconCheck, label: "Responds", text: "consumption, household interest" },
            {
              icon: IconX,
              label: "Doesn't",
              text: "business investment, sterling, house prices, inflation, unemployment",
            },
          ]}
        />
      </div>
    </Frame>
  );
}

export function LimitsSlide() {
  return (
    <Frame part={2} title="Known limits, and whose they are" scale={1.15}>
      <div
        className={`${styles.cardGrid} ${styles.cols2}`}
        style={{ columnGap: "3.5em", alignItems: "start" }}
      >
        <div className={styles.stack}>
          <Head icon={IconBuildingBank}>In the OBR&apos;s published model (we inherit them)</Head>
          <IconList
            items={[
              {
                icon: IconHome,
                title: "Bank Rate reaches little",
                text: "Consumption and household interest only: about a quarter to a half of the BoE's range",
              },
              {
                icon: IconScale,
                title: "Spending multiplier is about 1",
                text: `By accounting; the equations can't give the OBR's ${multiplierRows[0].obr}`,
              },
              {
                icon: IconTag,
                title: "CPI has no live equation",
                text: "VAT barely transmits without our opt-in overlay",
              },
            ]}
          />
        </div>
        <div className={styles.stack}>
          <Head icon={IconBrandPython}>In our replication</Head>
          <IconList
            items={[
              {
                icon: IconUserOff,
                title: "Unemployment drifts",
                text: `${unemploymentDrift[1].model}% against ${unemploymentDrift[1].efo}% by ${unemploymentDrift[1].quarter}. From their code (l.163, l.175), visible in ours`,
              },
              {
                icon: IconAlertTriangle,
                title: `${listing.droppedEquations} equations dropped`,
                text: "In some quarter: no input data",
              },
              {
                icon: IconDatabase,
                title: "Unpublished inputs seeded or estimated",
                text: "Each one labelled",
              },
              {
                icon: IconChartLine,
                title: "Point estimates only",
                text: "No uncertainty bands",
              },
            ]}
          />
        </div>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 4: the platform

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
      part={3}
      title="The macro platform: models side by side"
      subtitle="In development, not yet launched. Each model answers a different question"
      scale={1.2}
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
      part={3}
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
      part={3}
      title="A scored forecast record"
      subtitle="Committed before the data arrive, then scored against no change"
      scale={1.2}
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
    <Frame part={3} title="Use it from Claude" scale={1.1}>
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
            { icon: IconRobot, label: "MCP server", text: `${access.mcpTools} tools` },
            { icon: IconTerminal2, label: "CLI", text: `${access.cliCommands} commands` },
            { icon: IconBrandPython, label: "Python", text: "run_reform()" },
            { icon: IconLayoutDashboard, label: "Dashboard", text: "scenarios, equations" },
            { icon: IconDatabase, label: "Data snapshots", text: "dated" },
          ]}
        />
      </div>
    </Frame>
  );
}

// One worked example: the same reform gives a household answer, straight
// from the microsimulation, and an economy answer, through the OBR model.
export function MicroMacroSlide() {
  return (
    <Frame part={3} title="From a microsimulation reform to GDP" scale={1.1}>
      <div className={styles.stack}>
        <Ask
          question="One reform, two answers: who pays, and what happens to the economy?"
          scenario="Basic rate +1p, entered once in the PolicyEngine-UK microsimulation"
        />
        <div className={styles.split}>
          <Card
            icon={IconUsersGroup}
            title="PolicyEngine-UK microsimulation"
            text="Basic rate +1p"
          />
          <div className={styles.stack}>
            <div className={styles.lane}>
              <IconChevronRight stroke={2} aria-hidden="true" />
              <div className={styles.stack}>
                <Head icon={IconUsers}>Households: stays in the microsimulation</Head>
                <Card
                  icon={IconChartBar}
                  title="Who pays"
                  text="Deciles, winners and losers, poverty (before housing costs)"
                />
              </div>
            </div>
            <div className={styles.lane}>
              <IconChevronRight stroke={2} aria-hidden="true" />
              <div className={styles.stack}>
                <Head icon={IconChartLine}>Economy: through the OBR model</Head>
                <Flow>
                  <Card
                    icon={IconCoins}
                    title="Static cost"
                    text={`${bridgeBenchmark.policyEngine} a year`}
                  />
                  <Card
                    icon={IconArrowsShuffle}
                    title="Household income path"
                    text={
                      <>
                        Quarterly <span className={styles.mono}>HHDI_ADDFACTOR</span>
                      </>
                    }
                  />
                  <Card icon={IconBuildingBank} title="OBR model" text="Solved by quarter" />
                  <Card icon={IconChartLine} title="GDP" text="And consumption, investment" />
                </Flow>
              </div>
            </div>
          </div>
        </div>
        <Strip
          items={[
            {
              icon: IconScale,
              label: "Check",
              text: `static cost ${bridgeBenchmark.policyEngine} against HMRC's ${bridgeBenchmark.hmrc} (${bridgeBenchmark.gap})`,
            },
            {
              icon: IconArrowNarrowRight,
              label: "GDP path",
              text: `with HMRC's costing as the input: slide ${incomeTaxSlideNumber}`,
            },
          ]}
        />
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 5: working together

export function CollaborateSlide() {
  return (
    <Frame part={4} title="Where we could work together" scale={1.3}>
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
    <Frame part={4} title="Questions for NEF" scale={1.4}>
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

const contacts = [
  { label: "policyengine.org", url: "https://policyengine.org", Icon: IconWorld },
  { label: "vahid@policyengine.org", url: "mailto:vahid@policyengine.org", Icon: IconMail },
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
