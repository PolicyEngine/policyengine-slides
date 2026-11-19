import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  IconAdjustmentsHorizontal,
  IconAlertTriangle,
  IconAnchor,
  IconArrowsShuffle,
  IconBolt,
  IconBook,
  IconBrandGithub,
  IconBrandPython,
  IconBriefcase,
  IconBuildingBank,
  IconBuildingSkyscraper,
  IconBulb,
  IconChartBar,
  IconChartLine,
  IconCheck,
  IconChecks,
  IconChevronRight,
  IconCoins,
  IconCrane,
  IconCurrencyDollar,
  IconDatabase,
  IconEngine,
  IconEqual,
  IconEye,
  IconFileCode,
  IconFlask,
  IconGitCompare,
  IconHelpCircle,
  IconHome,
  IconHourglass,
  IconInfoCircle,
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
  IconScale,
  IconSearch,
  IconShip,
  IconShoppingCart,
  IconStack2,
  IconTag,
  IconTarget,
  IconToggleRight,
  IconTool,
  IconUserOff,
  IconUserCheck,
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
  bankRate,
  bridgeBenchmark,
  capitalSpending,
  claudeFlow,
  corporationTax,
  equationExamples,
  freeRunning,
  incomeTax,
  efoGloss,
  engineTerms,
  judgementStandIns,
  layers,
  listing,
  liveSiteViews,
  modelModules,
  multiplierRows,
  pipeline,
  platformModels,
  review,
  reviewFindings,
  scorecardRows,
  sources,
  unemploymentAnchored,
} from "../content";
import styles from "./deck.module.css";
import embedStyles from "./embed.module.css";
import BuildScope from "./BuildScope";
import SiteEmbed from "./SiteEmbed";
import {
  BankRateBars,
  IncomeTaxPath,
  Maths,
  ModuleMap,
  MultiplierPlot,
} from "./figures";

type Item = {
  icon: Icon;
  title: string;
  text?: ReactNode;
  aside?: ReactNode;
  muted?: boolean;
};

// Builds: an element with `data-step={n}` appears at the slide's nth step
// (BuildScope and deck.module.css). `builds` in config.ts counts the steps.
const at = (step: number) => ({ "data-step": step });

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
    title: "Policy scenarios and limits",
    text: "Against the OBR's multipliers",
  },
  {
    icon: IconStack2,
    title: "The macro platform",
    text: "Seven models, the live site, AI access",
  },
  {
    icon: IconUsersGroup,
    title: "Working together",
    text: "Where we could collaborate",
  },
];

// The platform (part 4) isn't launched: every slide of that part says so.
const platformPart = 3;

function Preview() {
  return (
    <p className={styles.preview}>
      <IconEye size={18} stroke={1.8} aria-hidden="true" />
      Preview, not yet launched
    </p>
  );
}

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
          <div className={styles.head}>
            {part !== undefined && <Tracker part={part} />}
            <SlideTitle>{title}</SlideTitle>
            {part === platformPart && <Preview />}
            {subtitle && (
              <p className={`mt-3 leading-relaxed text-gray-600 ${styles.subtitle}`}>
                {subtitle}
              </p>
            )}
          </div>
        </SlideHeader>
        <BuildScope
          className={`${styles.body} ${center ? styles.centerBody : ""}`}
          style={{ "--scale": scale } as CSSProperties}
        >
          {children}
        </BuildScope>
      </div>
    </Slide>
  );
}

// The deck's components: one list, one card, one stat, one table style.
// Each takes an icon.

function IconList({
  items,
  columns = 1,
  step,
}: {
  items: Item[];
  columns?: 1 | 2 | 3;
  /** The build step the list appears at. */
  step?: number;
}) {
  const grid = columns === 3 ? styles.threeCol : columns === 2 ? styles.twoCol : "";
  return (
    <div className={`${styles.iconList} ${grid}`} data-step={step}>
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
  step,
}: {
  icon: Icon;
  title: string;
  text?: ReactNode;
  children?: ReactNode;
  amber?: boolean;
  /** The build step the card appears at. */
  step?: number;
}) {
  return (
    <div className={`${styles.card} ${amber ? styles.cardAmber : ""}`} data-step={step}>
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
  icon?: Icon;
  value: ReactNode;
  label: string;
  note?: ReactNode;
  amber?: boolean;
}) {
  return (
    <div className={`${styles.card} ${amber ? styles.cardAmber : ""}`}>
      <p className={`${styles.stat} ${amber ? styles.statAmber : ""}`}>
        {StatIcon && <StatIcon stroke={1.8} aria-hidden="true" />}
        {value}
      </p>
      <p className={styles.statLabel}>{label}</p>
      {note && <p className={styles.statNote}>{note}</p>}
    </div>
  );
}

function Head({
  icon: HeadIcon,
  children,
  step,
}: {
  icon: Icon;
  children: ReactNode;
  step?: number;
}) {
  return (
    <p className={styles.listHead} data-step={step}>
      <HeadIcon stroke={1.8} aria-hidden="true" />
      {children}
    </p>
  );
}

type Step = { icon: Icon; label: string; text?: ReactNode };

/** A whole number that counts up from zero when it appears. */
function CountUp({ value }: { value: number }) {
  return (
    <span
      className={styles.countUp}
      style={{ "--count": value } as CSSProperties}
      role="img"
      aria-label={String(value)}
    />
  );
}

/**
 * Opens a results slide: one panel with the question on the left and exactly
 * what was simulated on the right. It appears first, before the figure.
 */
function Ask({ question, scenario }: { question: string; scenario: string }) {
  return (
    <div className={styles.ask}>
      <div>
        <p className={styles.askLabel}>
          <IconHelpCircle stroke={1.8} aria-hidden="true" />
          Question
        </p>
        <p className={styles.askQuestion}>{question}</p>
      </div>
      <div>
        <p className={styles.askLabel}>
          <IconFlask stroke={1.8} aria-hidden="true" />
          Scenario
        </p>
        <p className={styles.askScenario}>{scenario}</p>
      </div>
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

/** Steps on one line, with an arrow between each pair. */
function Steps({ items }: { items: Step[] }) {
  return (
    <div className={styles.steps}>
      {items.map(({ icon: StepIcon, label, text }, index) => (
        <Fragment key={label}>
          {index > 0 && <IconChevronRight className={styles.stepArrow} stroke={2} aria-hidden="true" />}
          <span>
            <StepIcon stroke={1.8} aria-hidden="true" />
            <b>{label}</b>
            {text}
          </span>
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

// The baseline every scenario is scored against (model README, "Reform
// baseline": run_reform scores around the baseline anchored to the EFO).
const baseline = `scenario run minus the baseline anchored to the ${listing.efo}`;

// ---------------------------------------------------------------------------
// Opening

export function TitleSlide() {
  return (
    <CoverSlide
      title="Opening up the OBR macroeconomic model"
      subtitle="An open-source Python implementation, and a platform around it"
      contentClassName="pt-28"
      speakers={[
        { ...speakers["vahid-ahmadi"], title: "Research Associate" },
        { ...speakers["max-ghenis"], title: "CEO" },
      ]}
    />
  );
}

export function AgendaSlide() {
  return (
    <Frame title="Today" scale={1.45}>
      <ol className={styles.agendaRoad}>
        {agenda.map(({ icon: PartIcon, title, text }, index) => (
          <li key={title} className={styles.agendaStop}>
            <span className={styles.agendaDot}>{index + 1}</span>
            <div className={styles.agendaCard}>
              <PartIcon className={styles.agendaIcon} stroke={1.6} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
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
          {part === platformPart && <Preview />}
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
export const ScenariosSectionSlide = () => <SectionSlide part={2} />;
export const PlatformSectionSlide = () => <SectionSlide part={3} />;
export const TogetherSectionSlide = () => <SectionSlide part={4} />;

// ---------------------------------------------------------------------------
// Part 1: the OBR model in Python

const layerStatus = {
  built: { label: "Built", className: styles.chipGood },
  partial: { label: "Partly built", className: styles.chipMid },
  standin: { label: "Stand-ins", className: styles.chipMid },
} as const;

const layerIcons: Icon[] = [IconMathFunction, IconEngine, IconBulb];
const termIcons: Icon[] = [IconAdjustmentsHorizontal, IconPlusMinus];
const standInIcons: Icon[] = [IconAnchor, IconToggleRight, IconAdjustmentsHorizontal];

// Three layers, one card each, read top to bottom: what the OBR has, what
// we built, and the number that belongs to that layer.
export function PublishedVsBuiltSlide() {
  const facts: ReactNode[] = [
    <>
      <p className={styles.stat}>
        <CountUp value={listing.equations} />
      </p>
      <p className={styles.statLabel}>Equations</p>
      <p className={styles.statNote}>The OBR&apos;s listing, {listing.listingDate}</p>
    </>,
    <>
      <p className={styles.stat}>
        <CountUp value={listing.onsSeries} />
      </p>
      <p className={styles.statLabel}>ONS series fill the inputs</p>
      <p className={`${styles.statNote} ${styles.caveat}`}>
        <IconAlertTriangle stroke={1.8} aria-hidden="true" />
        {listing.droppedEquations} equations dropped in some quarter: no input data
      </p>
    </>,
    <>
      <p className={styles.stat}>{listing.efoShort}</p>
      <p className={styles.statLabel}>{efoGloss.name}</p>
      <p className={styles.statNote}>{efoGloss.what}</p>
    </>,
  ];
  return (
    <Frame part={0} title="What the OBR publishes, and what we built" scale={1.12}>
      <div className={`${styles.cardGrid} ${styles.cols3} ${styles.layerGrid}`}>
        {layers.map((layer, index) => {
          const LayerIcon = layerIcons[index] ?? IconPoint;
          return (
            <div key={layer.title} className={`${styles.card} ${styles.layer}`} {...at(index + 1)}>
              <h2>
                <LayerIcon stroke={1.8} aria-hidden="true" />
                {layer.title}
                <span className={`${styles.chip} ${layerStatus[layer.status].className}`}>
                  {layerStatus[layer.status].label}
                </span>
              </h2>
              <div className={styles.layerLine}>
                <span>The OBR has</span>
                <p>{layer.obr}</p>
              </div>
              <div className={styles.layerLine}>
                <span>We built</span>
                <p>{layer.ours}</p>
                {layer.status !== "built" && (
                  <ul className={styles.standIns}>
                    {(layer.status === "standin" ? judgementStandIns : engineTerms).map((item, standIn) => {
                      const StandInIcon =
                        (layer.status === "standin" ? standInIcons : termIcons)[standIn] ?? IconPoint;
                      return (
                        <li key={item.title}>
                          <StandInIcon stroke={1.8} aria-hidden="true" />
                          <span>
                            <b>{item.title}</b> {item.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div className={styles.layerFacts}>{facts[index]}</div>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}

// The model's modules, from the listing's own section headers, in three
// groups, with the flows between the groups. Counts, the mapping from the
// listing's groups to modules and the link counts are in content.ts
// (module-links.py, module-links.json).
export function ModulesSlide() {
  return (
    <Frame
      part={0}
      title="The model's modules, and how they connect"
      subtitle={`${listing.equations} equations in ${modelModules.length} modules, from the listing's own sections, in three groups`}
    >
      <ModuleMap />
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
    <Frame part={0} title="How it runs" scale={1.15}>
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
        <table className={styles.table} {...at(2)}>
          <thead>
            <tr>
              <th>Three of the {listing.equations} equations</th>
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
// it, from the write-up in docs/published_model_review.md. `finding` is the
// write-up's heading for the point (entries H1, R1 and V2; R1 shortened at
// its semicolon), in place of a paraphrase of ours; `check` is from each
// entry's "Why"; all three verdicts there are "True but openly documented".
// The card titles (`point`) are his three headline points as the speaker
// notes record them; they are not in the write-up. He is in the room: the
// wording credits his work.
const headlinePoints: {
  icon: Icon;
  point: string;
  finding: string;
  check: string;
  verdict: string;
}[] = [
  {
    icon: IconUsers,
    point: "No distributional channel",
    finding: "Single aggregate consumption function; no distributional dimension",
    check: "Every term is an aggregate: no household split",
    verdict: "Holds",
  },
  {
    icon: IconShip,
    point: "Total imports fixed",
    finding: "Export and import volumes exogenous",
    check: "Neither is ever solved for; the exchange rate moves only prices",
    verdict: "Holds",
  },
  {
    icon: IconCoins,
    point: "Public debt interest fixed",
    finding: "Debt interest and gilt stock exogenous; no in-code link to rates or borrowing",
    check: "Debt interest is an input; debt is computed but never used",
    verdict: "Holds",
  },
];

// One story, top to bottom: his three headline points and our check of each,
// then, quieter, three further errors in the published files.
export function ThibReviewSlide() {
  return (
    <Frame
      part={0}
      title="Thibault's review, checked against the code"
      subtitle={`${review.points} points on the OBR's published code, September 2026. Our check: ${review.accurate} confirmed, ${review.partly} confirmed in part, ${review.uncheckable} about process, outside the code`}
      scale={1.08}
    >
      <div className={styles.stack}>
        <Head icon={IconListCheck}>Three headline points, as our write-up records them</Head>
        <div className={`${styles.cardGrid} ${styles.cols3} ${styles.verdictGrid}`}>
          {headlinePoints.map(({ icon: PointIcon, ...row }) => (
            <div
              key={row.point}
              className={`${styles.card} ${styles.verdictCard}`}
              {...at(headlinePoints.findIndex((point) => point.point === row.point) + 1)}
            >
              <h2>
                <PointIcon stroke={1.8} aria-hidden="true" />
                {row.point}
              </h2>
              <p>{row.finding}</p>
              <div className={styles.verdict}>
                <small>Our check</small>
                <p>{row.check}</p>
                <span className={`${styles.chip} ${styles.chipGood}`}>{row.verdict}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.quiet} {...at(4)}>
          <Head icon={IconAlertTriangle}>Also from the review: errors in the published files</Head>
          <div className={`${styles.cardGrid} ${styles.cols3}`}>
            {reviewFindings.slice(0, 3).map((finding) => (
              <p key={finding.code} className={styles.quietItem}>
                <span className={`${styles.chip} ${styles.chipBad}`}>{finding.code}</span>
                <span>
                  <b>
                    {finding.title} <small>{finding.refs}</small>
                  </b>
                  {finding.means}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 2: fit

// Two mirrored columns: a heading, two stats and three lines on each side.
const poor = scorecardRows.filter((row) => row.status === "poor");
const countWords: Record<number, string> = { 1: "one", 2: "two", 3: "three", 4: "four" };
const consumptionFreeRunning =
  scorecardRows.find((row) => row.variable === "Consumption")?.error ?? "";

export function FitSlide() {
  const mape = (
    <>
      Average error <small>(MAPE)</small>
    </>
  );
  return (
    <Frame
      part={1}
      title="How well it fits: two very different numbers"
      subtitle={`Distance from the OBR's ${listing.efo} path, ${anchored.window}. The free-running gap is this emulator's, not an OBR forecast error`}
      scale={1.12}
    >
      <div className={`${styles.cardGrid} ${styles.cols2} ${styles.mirror}`}>
          <Head icon={IconAnchor}>Anchored to the {listing.efo}</Head>
          <Head icon={IconPlayerPlay} step={2}>
            Free-running, add-factors off
          </Head>
          <div className={`${styles.cardGrid} ${styles.cols2}`}>
            <Stat icon={IconChartLine} value={`${anchored.gdpMape}%`} label="GDP" note={mape} />
            <Stat
              icon={IconShoppingCart}
              value={`${anchored.consMape}%`}
              label="Consumption"
              note={mape}
            />
          </div>
          <div className={`${styles.cardGrid} ${styles.cols2}`} {...at(2)}>
            <Stat
              icon={IconChartLine}
              value={`${freeRunning.gdpMape}%`}
              label="GDP"
              note={mape}
              amber
            />
            <Stat
              icon={IconShoppingCart}
              value={consumptionFreeRunning}
              label="Consumption"
              note={mape}
              amber
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
                title: "Scenarios scored as differences",
                text: "Scenario minus baseline: the add-factors cancel",
              },
              {
                icon: IconUserCheck,
                title: "Unemployment on the EFO path",
                text: `${unemploymentAnchored[0].model}% at ${unemploymentAnchored[0].quarter}, also by construction`,
              },
            ]}
          />
          <IconList
            step={2}
            items={[
              {
                icon: IconAdjustmentsHorizontal,
                title: "The model on its own",
                text: "GDP solved, unpublished inputs seeded",
              },
              {
                icon: IconChecks,
                title: `${freeRunning.withinBand} of ${freeRunning.computed} variables within band`,
                text: "Band: rates within 1pp, levels within 10%",
              },
              {
                icon: IconAlertTriangle,
                title: `Poor on ${countWords[poor.length] ?? poor.length}`,
                text: poor.map((row) => `${row.variable} ${row.error}`).join(" · "),
              },
            ]}
          />
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 3: scenarios and limits

export function MultipliersSlide() {
  return (
    <Frame part={2} title="Policy scenarios against the OBR's multipliers">
      <div className={styles.stack}>
        <Ask
          question="How much does GDP change per £1 of tax or spending?"
          scenario={`Each change runs for 12 quarters from 2025Q1; ${baseline}`}
        />
        <MultiplierPlot />
      </div>
    </Frame>
  );
}

// The micro-to-macro slide points back at this one; the number is its place
// in config.ts.
const incomeTaxSlideNumber = 11;

const pence = (perPound: number) => `${Math.round(perPound * 100)}p`;

// Where the income-tax scenario comes from and how it moves: the model has no
// tax calculator, so the revenue is an input (demo.md row 2, l.48 and l.53).
export function IncomeTaxSlide() {
  return (
    <Frame part={2} title="Income tax +1p: what the OBR model does to GDP">
      <div className={styles.stack}>
        <Ask
          question="If the basic rate rises 1p, how much does GDP fall, and when?"
          scenario={`${incomeTax.revenuePerQuarter} a quarter from 2025Q1 for 12 quarters; ${baseline}`}
        />
        <div className={styles.hero}>
          <div className={styles.stack}>
            <Steps
              items={[
                {
                  icon: IconReceiptTax,
                  label: "HMRC costing",
                  text: incomeTax.revenuePerQuarter,
                },
                {
                  icon: IconWallet,
                  label: "Household income",
                  text: `listing l.${equationExamples[2].line}`,
                },
                {
                  icon: IconShoppingCart,
                  label: "Consumption",
                  text: `l.${equationExamples[0].line}`,
                },
                { icon: IconChartLine, label: "GDP", text: "solved here" },
              ]}
            />
            <div className={styles.chartHead}>
              <Head icon={IconChartLine}>UK GDP, £m a quarter below baseline, 2025–2027</Head>
              <span className={`${styles.chip} ${styles.chipGood}`}>
                Our Python OBR model · input: HMRC costing
              </span>
            </div>
            <IncomeTaxPath />
          </div>
          <div className={styles.panel} {...at(2)}>
            <Head icon={IconBulb}>What to take from it</Head>
            <IconList
              items={[
                {
                  icon: IconScale,
                  title: "Similar size, opposite path over time",
                  text: `GDP falls ${pence(multiplierRows[1].q1)} per £1 of tax at first, ${pence(multiplierRows[1].q12)} by quarter 12. The OBR assumes ${pence(multiplierRows[1].obr)}, fading`,
                },
                {
                  icon: IconBuildingBank,
                  title: "Other taxes don't respond",
                  text: `Receipts rise by exactly the ${incomeTax.revenuePerQuarter}: lower spending doesn't cut VAT or other receipts`,
                },
                {
                  icon: IconShip,
                  title: "Imports are fixed",
                  text: "All the drop in spending lands on UK GDP, none on imports",
                },
              ]}
            />
            <div className={styles.footnotes}>
              <small>With PolicyEngine</small>
              <p>
                <IconEqual stroke={1.8} aria-hidden="true" />
                Same GDP effect per £1 with PolicyEngine&apos;s own costing as the input
              </p>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

const pounds = (value: number) =>
  `${value < 0 ? "−" : "+"}£${Math.abs(value).toLocaleString("en-GB")}m`;

// The switch on the left, then what each change does once it is on.
export function InvestmentSlide() {
  return (
    <Frame part={2} title="Investment: off by default, on with one switch">
      <div className={styles.stack}>
        <Ask
          question="Does corporation tax or public investment move GDP in this model?"
          scenario={`Each change runs for 12 quarters from 2025Q1, with the switch on; ${baseline}`}
        />
        <div className={styles.switchRow}>
          <div className={`${styles.card} ${styles.cardAmber} ${styles.switch}`}>
            <h2>
              <IconToggleRight stroke={1.8} aria-hidden="true" />
              The investment switch
            </h2>
            <div className={styles.layerLine}>
              <span>Off: the OBR&apos;s file</span>
              <p>Total investment is an input, so these changes do nothing</p>
            </div>
            <div className={styles.layerLine}>
              <span>On: our opt-in</span>
              <p>The listing&apos;s own commented-out lines: total investment, l.86; business investment, l.92</p>
            </div>
            <span className={`${styles.chip} ${styles.chipBad}`}>
              Stop-gap: holds three variables fixed to keep the run stable
            </span>
          </div>
          <div className={styles.stack} {...at(2)}>
            <Head icon={IconBuildingSkyscraper}>Corporation tax +5pp</Head>
            <div className={`${styles.cardGrid} ${styles.cols2}`}>
              <Stat value={pounds(corporationTax.gdpQ4)} label="GDP, quarter 4" />
              <Stat value={pounds(corporationTax.gdpQ12)} label="GDP, quarter 12" />
            </div>
            <p className={styles.caption}>
              Dearer capital, so investment falls slowly: still falling, towards about −
              {corporationTax.plateau} a quarter. No OBR number to compare with
            </p>
          </div>
          <div className={styles.stack} {...at(3)}>
            <Head icon={IconCrane}>Government investment +{capitalSpending.size} a quarter</Head>
            <div className={`${styles.cardGrid} ${styles.cols2}`}>
              <Stat value={pounds(capitalSpending.gdpQ1)} label="GDP, quarter 1" />
              <Stat value={pounds(capitalSpending.gdpQ12)} label="GDP, quarter 12" />
            </div>
            <p className={styles.caption}>
              About £1 of GDP per £1, with no fade. The OBR&apos;s multiplier:{" "}
              {multiplierRows[4].obrLabel}
            </p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// The bars are the answer; the channels beside them are the reason.
export function BankRateSlide() {
  return (
    <Frame part={2} title="Bank Rate: most channels are missing" scale={1.1}>
      <div className={styles.stack}>
        <Ask
          question="If Bank Rate rises 1pp for a year, how much does GDP fall?"
          scenario={`Bank Rate +1pp from 2025Q1 for four quarters, then back; ${baseline}`}
        />
        <div className={styles.hero}>
          <div className={styles.stack}>
            <Head icon={IconChartBar}>Biggest fall in GDP</Head>
            <BankRateBars />
          </div>
          <div className={styles.panel} {...at(2)}>
            <Head icon={IconCheck}>What Bank Rate moves in the model</Head>
            <div className={styles.chipRow}>
              {["Consumption", "Household interest"].map((channel) => (
                <span key={channel} className={`${styles.chip} ${styles.chipGood}`}>
                  {channel}
                </span>
              ))}
            </div>
            <Head icon={IconX}>What it doesn&apos;t move</Head>
            <div className={styles.chipRow}>
              {["Business investment", "Sterling", "House prices", "Inflation", "Unemployment"].map(
                (channel) => (
                  <span key={channel} className={`${styles.chip} ${styles.chipBad}`}>
                    {channel}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
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
                text: `Consumption and household interest only: GDP ${bankRate[0].display} to ${bankRate[1].display}, against the BoE's ${bankRate[2].display} to ${bankRate[3].display}`,
              },
              {
                icon: IconScale,
                title: "Nothing damps a spending change",
                text: `Once GDP is solved the multiplier is about 1: no import or price response. The OBR's published figure is ${multiplierRows[0].obr}`,
              },
              {
                icon: IconTag,
                title: "CPI has no live equation",
                text: "VAT barely transmits without our opt-in overlay",
              },
            ]}
          />
        </div>
        <div className={`${styles.stack} ${styles.fromRight}`} {...at(2)}>
          <Head icon={IconBrandPython}>In our replication</Head>
          <IconList
            items={[
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

// The site's three colour classes for its status labels: its best in teal,
// its middle in grey, its weakest in amber (the deck has no red).
const statusChip = {
  gain: styles.chipGood,
  mid: styles.chipBad,
  loss: styles.chipMid,
} as const;

export function PlatformSlide() {
  return (
    <Frame
      part={3}
      title="The macro platform: models side by side"
      subtitle="Each model answers a different question, and carries the site's own status label"
      scale={1.05}
    >
      <table className={`${styles.table} ${styles.tight}`}>
        <thead>
          <tr>
            <th>Model</th>
            <th>Answers</th>
            <th>Scores reforms</th>
            <th>Runs</th>
            <th>Status, on the site</th>
          </tr>
        </thead>
        <tbody>
          {platformModels.map((model) => (
            <tr key={model.name}>
              <td>
                <RowLabel
                  icon={platformIcons[model.name] ?? IconPoint}
                  detail={[model.country, model.gloss].filter(Boolean).join(" · ")}
                >
                  {model.name}
                </RowLabel>
              </td>
              <td>{model.answers}</td>
              <td className={model.scoresReforms ? "" : styles.no}>
                <span className={styles.rowLabel}>
                  {model.scoresReforms ? (
                    <IconCheck stroke={2} aria-hidden="true" />
                  ) : (
                    <IconX stroke={2} aria-hidden="true" />
                  )}
                  <span>
                    {model.scoresReforms ? "Yes" : "No"}
                    {model.scoresNote && <small className={styles.oneLine}>{model.scoresNote}</small>}
                  </span>
                </span>
              </td>
              <td>{model.runs}</td>
              <td>
                <span className={`${styles.chip} ${statusChip[model.level]}`}>{model.status}</span>
              </td>
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

// How someone uses the platform from Claude (the macro site's Use page and
// mcp_server.py). No result numbers: the third card names what comes back.
export function AccessSlide() {
  return (
    <Frame part={3} title="Use it from Claude" scale={1.15}>
        <Flow>
          <Card icon={IconPlugConnected} title="1 · Connect" text={claudeFlow.settingsPath}>
            <div className={styles.chipRow}>
              <code className={styles.code}>{claudeFlow.url}</code>
            </div>
            <p className={styles.or}>The same models, other ways in</p>
            <div className={styles.chipRow}>
              <span className={`${styles.chip} ${styles.chipBad}`}>
                MCP (Model Context Protocol) server · {access.mcpTools} tools
              </span>
              <span className={`${styles.chip} ${styles.chipBad}`}>
                CLI · {access.cliCommands} commands
              </span>
              <span className={`${styles.chip} ${styles.chipBad}`}>Python · run_reform()</span>
              <span className={`${styles.chip} ${styles.chipBad}`}>Dashboard</span>
            </div>
          </Card>
          <Card icon={IconMessageCircle} title="2 · Ask in plain language" step={2}>
            <p className={styles.bubble}>{claudeFlow.prompt}</p>
          </Card>
          <Card
            icon={IconTool}
            title="3 · Claude calls the tools"
            text="Back: costing, GDP, consumption, investment"
            step={3}
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
            <div className={styles.lane} {...at(2)}>
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
            <div className={styles.lane} {...at(3)}>
              <IconChevronRight stroke={2} aria-hidden="true" />
              <div className={styles.stack}>
                <Head icon={IconChartLine}>Economy: through the OBR model</Head>
                <Flow>
                  <Card
                    icon={IconCoins}
                    title="Static cost"
                    text={`${bridgeBenchmark.policyEngine} a year, ${bridgeBenchmark.gap} HMRC's ${bridgeBenchmark.hmrc}`}
                  />
                  <Card
                    icon={IconArrowsShuffle}
                    title="Household income path"
                    text={
                      <>
                        A quarterly add-factor, <span className={styles.mono}>HHDI_ADDFACTOR</span>
                      </>
                    }
                  />
                  <Card icon={IconBuildingBank} title="OBR model" text="Solved by quarter" />
                  <Card
                    icon={IconChartLine}
                    title="GDP"
                    text={`And consumption, investment. Path: slide ${incomeTaxSlideNumber}`}
                  />
                </Flow>
              </div>
            </div>
          </div>
        </div>
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
          text="Other closures; receipts that respond to the economy"
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
          text="Unemployment that responds to demand"
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
