import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  IconAlertTriangle,
  IconBabyCarriage,
  IconBasket,
  IconBolt,
  IconBrandGithub,
  IconBuildingCommunity,
  IconBus,
  IconCalendarEvent,
  IconChartBar,
  IconCheck,
  IconChevronRight,
  IconCircleCheck,
  IconCircleDashed,
  IconCircleHalf2,
  IconCloud,
  IconCode,
  IconCompass,
  IconCurrencyPound,
  IconDatabase,
  IconDroplet,
  IconFileText,
  IconFlame,
  IconGift,
  IconHeartbeat,
  IconHeartHandshake,
  IconHome,
  IconHourglass,
  IconLayersIntersect,
  IconListCheck,
  IconMap2,
  IconMapPin,
  IconMessageQuestion,
  IconNotebook,
  IconPoint,
  IconPresentation,
  IconReceipt,
  IconReportAnalytics,
  IconRoute,
  IconRuler2,
  IconScale,
  IconSchool,
  IconSearch,
  IconShieldOff,
  IconTarget,
  IconToolsKitchen2,
  IconTrain,
  IconUsers,
  IconUsersGroup,
  IconWorld,
  IconX,
  type Icon,
} from "@tabler/icons-react";
import Slide from "@/components/core/Slide";
import Image from "@/components/core/BasePathImage";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import {
  benchmarks,
  carbon,
  cover,
  hardGaps,
  incomeCount,
  metrics,
  misNotes,
  openQuestions,
  otherGaps,
  phases,
  roles,
  scope,
  services,
  statusKeyNotValued,
  statusKeyValued,
  type MetricStatus,
  type Status,
} from "../content";
import styles from "./deck.module.css";
import BuildScope from "./BuildScope";

type Item = {
  icon: Icon;
  title: string;
  text?: ReactNode;
  muted?: boolean;
};

// Builds: an element with `data-step={n}` appears at the slide's nth step
// (BuildScope and deck.module.css). `builds` in config.ts counts the steps.
const at = (step: number) => ({ "data-step": step });

// The three parts. The agenda slide, the section slides and the tracker in
// every slide's header all read this list.
const agenda: Item[] = [
  {
    icon: IconCompass,
    title: "What we mean",
    text: "The services, the question and the unit",
  },
  {
    icon: IconMap2,
    title: "Status today",
    text: "What the model values, gaps, carbon and measures",
  },
  {
    icon: IconRoute,
    title: "The plan",
    text: "Four phases, who brings what, open questions",
  },
];

/** Where the slide sits in the proposal: past parts, this one, the ones to come. */
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
  children,
  center = true,
  scale = 1,
}: {
  /** Index of the slide's part in the agenda. */
  part?: number;
  title: string;
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

// The deck's components: one list, one card, one table, one chip style.
// Each takes an icon.

function IconList({ items, className = "" }: { items: Item[]; className?: string }) {
  return (
    <div className={`${styles.iconList} ${className}`}>
      {items.map(({ icon: ItemIcon, title, text, muted }) => (
        <div key={title} className={`${styles.iconItem} ${muted ? styles.muted : ""}`}>
          <ItemIcon stroke={1.8} aria-hidden="true" />
          <div>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
          </div>
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
  className = "",
}: {
  icon: Icon;
  title: string;
  text?: ReactNode;
  children?: ReactNode;
  amber?: boolean;
  /** The build step the card appears at. */
  step?: number;
  className?: string;
}) {
  return (
    <div
      className={`${styles.card} ${amber ? styles.cardAmber : ""} ${className}`}
      data-step={step}
    >
      <h2>
        <CardIcon stroke={1.8} aria-hidden="true" />
        {title}
      </h2>
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}

/** Short points inside a card, each with its icon. */
function Points({ items }: { items: { icon: Icon; text: ReactNode }[] }) {
  return (
    <ul className={styles.standIns}>
      {items.map(({ icon: PointIcon, text }, index) => (
        <li key={index}>
          <PointIcon stroke={1.8} aria-hidden="true" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

/** Cards in a row, with an arrow between each pair. Card n appears at step
 * n, and the arrow before it with it. */
function Flow({ children }: { children: ReactNode[] }) {
  return (
    <div className={styles.flow}>
      {children.map((child, index) => (
        <Fragment key={index}>
          {index > 0 && <IconChevronRight stroke={2} aria-hidden="true" {...at(index + 1)} />}
          {child}
        </Fragment>
      ))}
    </div>
  );
}

// Status: one chip style in three tones, each with its icon. The label says
// what the tone means on that slide.
type Tone = "good" | "mid" | "bad";

const tone: Record<Tone, { className: string; icon: Icon }> = {
  good: { className: styles.chipGood, icon: IconCircleCheck },
  mid: { className: styles.chipMid, icon: IconCircleHalf2 },
  bad: { className: styles.chipBad, icon: IconCircleDashed },
};

function StatusChip({ of, label }: { of: Tone; label: string }) {
  const { className, icon: ChipIcon } = tone[of];
  return (
    <span className={`${styles.chip} ${styles.status} ${className}`}>
      <ChipIcon stroke={2} aria-hidden="true" />
      {label}
    </span>
  );
}

/** The key to the status chips, inside the figure it explains. */
function StatusLegend({ of, labels }: { of: string; labels: [string, string, string] }) {
  return (
    <p className={styles.statusLegend}>
      <span>{of}</span>
      <StatusChip of="good" label={labels[0]} />
      <StatusChip of="mid" label={labels[1]} />
      <StatusChip of="bad" label={labels[2]} />
    </p>
  );
}

const serviceTone: Record<Status, Tone> = { yes: "good", partly: "mid", no: "bad" };
const serviceLabel: Record<Status, string> = { yes: "Yes", partly: "Partly", no: "No" };

const metricTone: Record<MetricStatus, Tone> = { exists: "good", partly: "mid", toBuild: "bad" };
const metricLabel: Record<MetricStatus, string> = {
  exists: "Exists",
  partly: "Partly exists",
  toBuild: "To build",
};

// ---------------------------------------------------------------------------
// Opening

// The cover, laid out as the shared CoverSlide is. Each name appears once:
// the photo's alt text is empty, because the name is in the caption under it.
export function TitleSlide() {
  const people = [
    { ...speakers["vahid-ahmadi"], title: "Research Associate" },
    { ...speakers["max-ghenis"], title: "CEO" },
  ];
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10 pt-28">
        <div className="h-1 w-20 rounded-full bg-white/30" />
        <h1 className="text-balance text-center font-display text-5xl font-bold text-white">{cover.title}</h1>
        <p className="text-balance text-center text-2xl text-white opacity-80">{cover.subtitle}</p>
        <div className="mt-4 flex items-start justify-center gap-16">
          {people.map((person) => (
            <div key={person.name} className="flex w-52 shrink-0 flex-col items-center text-center">
              <div className="relative mb-3 h-28 w-28 overflow-hidden rounded-full border-2 border-white/40">
                <Image src={person.photo} alt="" fill sizes="112px" className="object-cover" />
              </div>
              <p className="text-xl font-semibold text-white">{person.name}</p>
              <p className="text-sm font-light text-white/70">{person.title}</p>
            </div>
          ))}
        </div>
        <div className="pt-2 text-center text-white opacity-60">
          <p>{cover.event}</p>
          <p>{cover.date}</p>
        </div>
      </div>
    </Slide>
  );
}

export function AgendaSlide() {
  return (
    <Frame title="In this proposal" scale={1.5}>
      <ol className={`${styles.agendaRoad} ${styles.road3}`}>
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
        </div>
        <div className={styles.sectionList} style={{ "--scale": 1.25 } as CSSProperties}>
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

export const MeaningSectionSlide = () => <SectionSlide part={0} />;
export const StatusSectionSlide = () => <SectionSlide part={1} />;
export const PlanSectionSlide = () => <SectionSlide part={2} />;

// ---------------------------------------------------------------------------
// Part 1: what we mean

const inScopeIcons: Icon[] = [
  IconHeartbeat,
  IconSchool,
  IconBabyCarriage,
  IconToolsKitchen2,
  IconBus,
  IconBuildingCommunity,
  IconHeartHandshake,
  IconBolt,
];

export function ScopeSlide() {
  return (
    <Frame part={0} title="Public services received in kind, valued in pounds" scale={1.3}>
      <div className={`${styles.cardGrid} ${styles.cols2}`}>
        <div className={styles.stack}>
          <Card icon={IconListCheck} title="In scope">
            <div className={styles.scopeGrid}>
              {scope.inScope.map((service, index) => {
                const ServiceIcon = inScopeIcons[index] ?? IconPoint;
                return (
                  <span key={service} className={styles.scopeItem}>
                    <ServiceIcon stroke={1.8} aria-hidden="true" />
                    {service}
                  </span>
                );
              })}
            </div>
          </Card>
          <Card icon={IconScale} title="The question" text={scope.question} />
        </div>
        <div className={styles.stack}>
          <Card icon={IconUsersGroup} title="The unit" text={scope.unit} step={2}>
            <Points items={[{ icon: IconLayersIntersect, text: scope.unitNote }]} />
          </Card>
          <Card icon={IconShieldOff} title="Out of scope for now" amber step={3}>
            <Points
              items={scope.outOfScope.map((text, index) => ({
                icon: [IconUsers, IconCurrencyPound, IconTarget][index] ?? IconPoint,
                text,
              }))}
            />
          </Card>
          <Card icon={IconGift} title="Not employer benefits in kind" amber step={3}>
            <p>{scope.notBik}</p>
          </Card>
        </div>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 2: status today

const serviceIcons: Icon[] = [
  IconHeartbeat,
  IconSchool,
  IconBabyCarriage,
  IconToolsKitchen2,
  IconBus,
  IconTrain,
  IconBuildingCommunity,
  IconHeartHandshake,
  IconBolt,
  IconDroplet,
  IconBasket,
];

// One row per service: an in-kind value today, the data behind it,
// calibration, and the main gap. The proposal's table of 11 rows, in two
// halves: the services with a household value, then those without.
function StatusSlide({
  title,
  from,
  to,
  keys,
}: {
  title: string;
  from: number;
  to: number;
  keys: readonly (readonly [string, string])[];
}) {
  return (
    <Frame part={1} title={title} scale={1.3}>
      <div className={styles.stack}>
        <table className={`${styles.table} ${styles.matrix}`}>
          <thead>
            <tr>
              <th>Service</th>
              <th>In-kind value today</th>
              <th>Data and method</th>
              <th>Calibrated to official figures</th>
              <th>Main gap</th>
            </tr>
          </thead>
          <tbody>
            {services.slice(from, to).map((row, index) => {
              const RowIcon = serviceIcons[from + index] ?? IconPoint;
              return (
                <tr key={row.service}>
                  <td>
                    <span className={styles.rowLabel}>
                      <RowIcon stroke={1.8} aria-hidden="true" />
                      <span>{row.service}</span>
                    </span>
                  </td>
                  <td>
                    <StatusChip of={serviceTone[row.valued]} label={serviceLabel[row.valued]} />
                    <small>{row.valuedNote}</small>
                  </td>
                  <td>{row.source}</td>
                  <td>
                    {row.calibrated ? (
                      <>
                        <StatusChip
                          of={serviceTone[row.calibrated]}
                          label={serviceLabel[row.calibrated]}
                        />
                        <small>{row.calibratedNote}</small>
                      </>
                    ) : (
                      <small>{row.calibratedNote}</small>
                    )}
                  </td>
                  <td>{row.gap}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.legendRow}>
          <p className={styles.caption}>
            <span>
              {keys.map(([short, long], index) => (
                <Fragment key={short}>
                  {index > 0 && " · "}
                  <b>{short}</b>: {long}
                </Fragment>
              ))}
            </span>
          </p>
          <StatusLegend of="Each status is" labels={["Yes", "Partly", "No"]} />
        </div>
      </div>
    </Frame>
  );
}

export const ValuedSlide = () => (
  <StatusSlide
    title="Valued today: five services, and school meals in part"
    from={0}
    to={6}
    keys={statusKeyValued}
  />
);

export const NotValuedSlide = () => (
  <StatusSlide
    title="Not yet valued in kind: housing, care, energy, water, food"
    from={6}
    to={11}
    keys={statusKeyNotValued}
  />
);

function Mark({ yes }: { yes: boolean }) {
  return yes ? (
    <span className={styles.mark}>
      <IconCheck stroke={2.2} aria-label="Counted" />
    </span>
  ) : (
    <span className={`${styles.mark} ${styles.markNo}`}>
      <IconX stroke={2.2} aria-label="Not counted" />
    </span>
  );
}

export function IncomeSlide() {
  return (
    <Frame part={1} title="Most services count in net income, but not in HBAI income" scale={1.3}>
      <div className={styles.incomeGrid}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Counted in</th>
              <th className={styles.center}>Household net income</th>
              <th className={styles.center}>HBAI income</th>
            </tr>
          </thead>
          <tbody>
            {incomeCount.map((row) => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td className={styles.center}>
                  <Mark yes={row.net} />
                </td>
                <td className={styles.center}>
                  <Mark yes={row.hbai} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.stack}>
          <Card
            icon={IconChartBar}
            title="HBAI income"
            text="Households Below Average Income: the DWP's official income statistics, which set poverty rates and deciles"
          />
          <Card
            icon={IconTarget}
            title="The first fix in the plan"
            text={'A single "extended income" measure, with and without services'}
            step={2}
          />
        </div>
      </div>
    </Frame>
  );
}

const pointIcons: Icon[] = [IconDatabase, IconHome, IconReportAnalytics];

export function BenchmarksSlide() {
  return (
    <Frame part={1} title="Two official analyses to compare against" scale={1.1}>
      <div className={styles.stack}>
        <p className={styles.caption}>
          Both attribute public services to households. Neither has been compared with
          PolicyEngine yet; we would compare where coverage overlaps.
        </p>
        <table className={`${styles.table} ${styles.bench}`}>
          <thead>
            <tr>
              <th />
              {benchmarks.columns.map((column) => (
                <th key={column.name}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {benchmarks.rows.map((row) => (
              <tr key={row.label}>
                <td>{row.label}</td>
                <td>{row.ons}</td>
                <td>{row.hmt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`${styles.cardGrid} ${styles.cols3}`}>
          {benchmarks.points.map((point, index) => (
            <Card
              key={point.title}
              icon={pointIcons[index] ?? IconPoint}
              title={point.title}
              text={point.text}
              step={2}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}

const hardGapIcons: Icon[] = [IconHeartHandshake, IconBuildingCommunity];
const hardPointIcons: Icon[][] = [
  [IconDatabase, IconHome, IconListCheck],
  [IconHome, IconCurrencyPound, IconUsers],
];
const otherGapIcons: Icon[] = [IconRuler2, IconTrain, IconHeartbeat, IconBolt, IconMapPin, IconUsersGroup];

export function GapsSlide() {
  return (
    <Frame part={1} title="Gaps: social care and social housing are the hardest" scale={1.05}>
      <div className={styles.stack}>
        <div className={`${styles.cardGrid} ${styles.cols2}`}>
          {hardGaps.map((gap, index) => (
            <Card key={gap.title} icon={hardGapIcons[index] ?? IconPoint} title={gap.title} amber>
              <Points
                items={gap.points.map((text, item) => ({
                  icon: hardPointIcons[index]?.[item] ?? IconPoint,
                  text,
                }))}
              />
            </Card>
          ))}
        </div>
        <div className={styles.stack} {...at(2)}>
          <p className={styles.listHead}>
            <IconCheck stroke={1.8} aria-hidden="true" />
            The others: mostly work we know how to do
          </p>
          <div className={`${styles.cardGrid} ${styles.cols3}`}>
            {otherGaps.map((gap, index) => (
              <Card
                key={gap.title}
                icon={otherGapIcons[index] ?? IconPoint}
                title={gap.title}
                text={gap.text}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

const existsIcons: Icon[] = [IconCloud, IconFlame, IconReceipt];

export function CarbonSlide() {
  return (
    <Frame part={1} title="Carbon: a coarse footprint today, three steps to refine it" scale={1.2}>
      <div className={styles.stack}>
        <div className={styles.carbonGrid}>
          <div className={styles.stack}>
            <p className={styles.listHead}>
              <IconCircleCheck stroke={1.8} aria-hidden="true" />
              What exists
            </p>
            <IconList
              className={styles.compactList}
              items={carbon.exists.map((text, index) => ({
                icon: existsIcons[index] ?? IconPoint,
                title: text,
              }))}
            />
          </div>
          <div className={styles.stack} {...at(2)}>
            <p className={styles.listHead}>
              <IconChevronRight stroke={1.8} aria-hidden="true" />
              What we would add
            </p>
            {carbon.add.map((step, index) => (
              <div key={step.title} className={`${styles.card} ${styles.stepCard}`}>
                <span className={styles.agendaDot}>{index + 1}</span>
                <div>
                  <h2>
                    {step.title}
                    {step.scheduled ? (
                      <StatusChip of="good" label="In phase 2" />
                    ) : (
                      <StatusChip of="bad" label="Not yet scheduled" />
                    )}
                  </h2>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className={styles.caption} {...at(2)}>
          We would agree the timing of steps 2 and 3 in phase 1. We have not found a UK
          microsimulation that does step 3.
        </p>
      </div>
    </Frame>
  );
}

const metricIcons: Icon[] = [IconCurrencyPound, IconScale, IconBasket, IconCloud];
const misIcons: Icon[] = [IconLayersIntersect, IconSearch, IconHourglass];

export function MetricsSlide() {
  return (
    <Frame part={1} title="Four measures to compare services and cash" scale={1.2}>
      <div className={styles.stack}>
        <div className={styles.legendRow}>
          <p className={styles.caption}>
            Today poverty is reported on HBAI income only, which leaves out most services.
          </p>
          <StatusLegend of="Each measure" labels={["Exists", "Partly exists", "To build"]} />
        </div>
        <div className={`${styles.cardGrid} ${styles.cols4}`}>
          {metrics.map((metric, index) => (
            <Card
              key={metric.title}
              icon={metricIcons[index] ?? IconPoint}
              title={metric.title}
              className={styles.metricCard}
            >
              <StatusChip of={metricTone[metric.status]} label={metricLabel[metric.status]} />
              <p>{metric.text}</p>
              {metric.note && <p className={styles.metricNote}>{metric.note}</p>}
            </Card>
          ))}
        </div>
        <div {...at(2)}>
          <IconList
            className={`${styles.threeCol} ${styles.compactList}`}
            items={misNotes.map((note, index) => ({
              icon: misIcons[index] ?? IconPoint,
              title: note.title,
              text: note.text,
            }))}
          />
        </div>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 3: the plan

const phaseIcons: Icon[] = [IconCompass, IconChartBar, IconScale, IconHeartHandshake];

export function PhasesSlide() {
  return (
    <Frame part={2} title="Four phases, each ending in a check-in with NEF" scale={1.15}>
      <div className={styles.stack}>
        <Flow>
          {phases.map((phase, index) => {
            const PhaseIcon = phaseIcons[index] ?? IconPoint;
            return (
              <div
                key={phase.title}
                className={`${styles.card} ${styles.phase} ${phase.exploratory ? styles.cardAmber : ""}`}
                {...at(index + 1)}
              >
                <p className={styles.phaseNumber}>
                  Phase {index + 1}
                  {phase.exploratory && <StatusChip of="mid" label="Exploratory" />}
                </p>
                <h2>
                  <PhaseIcon stroke={1.8} aria-hidden="true" />
                  {phase.title}
                </h2>
                <p className={styles.months}>
                  <IconCalendarEvent stroke={1.8} aria-hidden="true" />
                  {phase.months}
                </p>
                <Points items={phase.work.map((text) => ({ icon: IconPoint, text }))} />
                <p className={styles.checkIn}>
                  <IconMessageQuestion stroke={1.8} aria-hidden="true" />
                  Check-in with NEF
                </p>
              </div>
            );
          })}
        </Flow>
        <p className={styles.caption}>
          <IconAlertTriangle stroke={1.8} aria-hidden="true" />
          Timings are estimates, to be fixed once the scope questions are agreed.
        </p>
      </div>
    </Frame>
  );
}

const nefIcons: Icon[] = [IconFileText, IconTarget, IconSearch, IconScale];
const peIcons: Icon[] = [IconCode, IconDatabase, IconNotebook, IconFileText];

export function RolesSlide() {
  return (
    <Frame part={2} title="Who brings what" scale={1.75}>
      <div className={`${styles.cardGrid} ${styles.cols2}`}>
        <Card icon={IconUsersGroup} title="What NEF brings">
          <Points
            items={roles.nef.map((text, index) => ({ icon: nefIcons[index] ?? IconPoint, text }))}
          />
        </Card>
        <Card icon={IconPresentation} title="What PolicyEngine brings" step={2}>
          <Points
            items={roles.policyengine.map((text, index) => ({
              icon: peIcons[index] ?? IconPoint,
              text,
            }))}
          />
        </Card>
      </div>
    </Frame>
  );
}

const questionIcons: Icon[] = [
  IconListCheck,
  IconBolt,
  IconCurrencyPound,
  IconChartBar,
  IconMapPin,
  IconHome,
  IconFileText,
];

export function QuestionsSlide() {
  return (
    <Frame part={2} title="Open questions for NEF" scale={1.2}>
      <div className={styles.stack}>
        <IconList
          className={styles.twoCol}
          items={openQuestions.map((question, index) => ({
            icon: questionIcons[index] ?? IconMessageQuestion,
            title: question.title,
            text: question.text,
          }))}
        />
        <p className={styles.caption}>
          <IconChevronRight stroke={1.8} aria-hidden="true" />
          Next: NEF&apos;s answers to these, then a short call to agree phase 1.
        </p>
      </div>
    </Frame>
  );
}

const contacts = [
  { label: "policyengine.org", url: "https://policyengine.org", Icon: IconWorld },
  {
    label: "PolicyEngine/policyengine-uk",
    url: "https://github.com/PolicyEngine/policyengine-uk",
    Icon: IconBrandGithub,
  },
];

export function ClosingSlide() {
  return (
    <Slide isEnd>
      <h1 className="font-display text-6xl font-bold mb-12 text-center">Thank you</h1>
      <div className="flex w-full flex-wrap justify-center gap-5">
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
            <span className="whitespace-nowrap">{label}</span>
          </a>
        ))}
      </div>
    </Slide>
  );
}
