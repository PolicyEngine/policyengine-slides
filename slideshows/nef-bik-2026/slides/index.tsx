import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  IconAdjustmentsHorizontal,
  IconArrowsSplit,
  IconBike,
  IconBolt,
  IconBook2,
  IconCircleCheck,
  IconCircleDashed,
  IconCircleHalf2,
  IconHistory,
  IconBrandGithub,
  IconBuildingBank,
  IconBuildingSkyscraper,
  IconCalculator,
  IconCalendarEvent,
  IconCar,
  IconChartBar,
  IconChecklist,
  IconChevronRight,
  IconClipboardList,
  IconCoin,
  IconCoins,
  IconDatabase,
  IconFileInvoice,
  IconFlask,
  IconGasStation,
  IconGift,
  IconHeartbeat,
  IconHelpCircle,
  IconHome,
  IconListSearch,
  IconMail,
  IconMap2,
  IconMessageQuestion,
  IconPigMoney,
  IconPoint,
  IconReceiptTax,
  IconRulerMeasure,
  IconScale,
  IconSearch,
  IconTarget,
  IconTruck,
  IconUser,
  IconUsersGroup,
  IconWorld,
  IconWritingSign,
  type Icon,
} from "@tabler/icons-react";
import Slide from "@/components/core/Slide";
import Image from "@/components/core/BasePathImage";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import {
  byType2016,
  coverage,
  cover,
  definitions,
  dataSources,
  exampleQuestions,
  gaps,
  phases,
  pipeline,
  rules2026,
  size,
  timeline,
  type Status,
  type Use,
} from "../content";
import styles from "./deck.module.css";
import BuildScope from "./BuildScope";
import CountUp from "./CountUp";

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
    icon: IconGift,
    title: "Benefits in kind in the UK",
    text: "What they are, how big, what is changing",
  },
  {
    icon: IconMap2,
    title: "What PolicyEngine covers",
    text: "Rules, data and calibration today",
  },
  {
    icon: IconRulerMeasure,
    title: "Scoping the project",
    text: "Data, gaps, options and questions",
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

function IconList({ items }: { items: Item[] }) {
  return (
    <div className={styles.iconList}>
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

/** One panel: the question on the left, exactly what would be simulated on the right. */
function Ask({
  question,
  scenario,
  chip,
  step,
}: {
  question: string;
  scenario: string;
  chip?: ReactNode;
  step?: number;
}) {
  return (
    <div className={styles.ask} data-step={step}>
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
          {chip}
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

const statusChip: Record<Status, { label: string; className: string; icon: Icon }> = {
  done: { label: "Done", className: styles.chipGood, icon: IconCircleCheck },
  partly: { label: "Partly done", className: styles.chipMid, icon: IconCircleHalf2 },
  notYet: { label: "Not yet", className: styles.chipBad, icon: IconCircleDashed },
};

function StatusChip({ status }: { status: Status }) {
  const { label, className, icon: ChipIcon } = statusChip[status];
  return (
    <span className={`${styles.chip} ${styles.status} ${className}`}>
      <ChipIcon stroke={2} aria-hidden="true" />
      {label}
    </span>
  );
}

/** The key to the status chips, inside the figure it explains. */
function StatusLegend({ of }: { of: string }) {
  return (
    <p className={styles.statusLegend}>
      <span>{of}</span>
      <StatusChip status="done" />
      <StatusChip status="partly" />
      <StatusChip status="notYet" />
    </p>
  );
}

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
    <Frame title="Today" scale={1.5}>
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

export const BikSectionSlide = () => <SectionSlide part={0} />;
export const CoverageSectionSlide = () => <SectionSlide part={1} />;
export const ScopingSectionSlide = () => <SectionSlide part={2} />;

// ---------------------------------------------------------------------------
// Part 1: benefits in kind in the UK

// One benefit, followed from the employer to the two charges on it, then
// what changes when the employee gives up salary for it.
export function WhatIsBikSlide() {
  return (
    <Frame part={0} title="A benefit in kind is pay that isn't cash" scale={1.35}>
      <div className={styles.split}>
        <div className={styles.stack}>
          <Card
            icon={IconGift}
            title="Benefit in kind (BIK)"
            text="A car, fuel, medical insurance, a cheap loan, a home"
          />
          <Card
            icon={IconCalculator}
            title="Taxable value"
            text="A formula for cars; usually the employer's cost for others"
          >
            <p className={styles.formula}>
              <IconCar stroke={1.8} aria-hidden="true" />
              Car: list price × a rate, {rules2026.evRate} electric to {rules2026.maxRate}
            </p>
          </Card>
        </div>
        <div className={styles.stack}>
          <div className={styles.lane} {...at(2)}>
            <IconChevronRight stroke={2} aria-hidden="true" />
            <div className={`${styles.cardGrid} ${styles.cols2}`}>
              <Card
                icon={IconUser}
                title="Employee: income tax"
                text="On the taxable value, at their marginal rate"
              >
                <Points
                  items={[
                    {
                      icon: IconFileInvoice,
                      text: (
                        <>
                          <b>P11D:</b>{" "}the employer&apos;s yearly return of benefits, or through payroll
                        </>
                      ),
                    },
                  ]}
                />
              </Card>
              <Card
                icon={IconBuildingSkyscraper}
                title="Employer: Class 1A"
                text={`National Insurance at ${rules2026.class1aRate}, paid by the employer only`}
              >
                <Points
                  items={[
                    {
                      icon: IconUser,
                      text: "Usually no employee National Insurance",
                    },
                  ]}
                />
              </Card>
            </div>
          </div>
          <div className={styles.lane} {...at(3)}>
            <IconChevronRight stroke={2} aria-hidden="true" />
            <Card
              icon={IconArrowsSplit}
              title="If salary is given up for it: OpRA"
              text="Optional remuneration arrangement: taxed on the higher of the salary given up and the taxable value"
              amber
            >
              <div className={styles.chipRow}>
                <span className={`${styles.chip} ${styles.chipBad}`}>Exempt: pensions</span>
                <span className={`${styles.chip} ${styles.chipBad}`}>Cycle to work</span>
                <span className={`${styles.chip} ${styles.chipBad}`}>Cars up to 75 g/km CO2</span>
                <span className={`${styles.chip} ${styles.chipBad}`}>Childcare vouchers</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Frame>
  );
}

const typeIcons: Icon[] = [IconCar, IconHeartbeat, IconGasStation, IconTruck, IconCoin, IconHome];
const definitionIcons: Icon[] = [IconGift, IconCalculator, IconBuildingSkyscraper];

// Three columns, read left to right: what the words mean, what HMRC
// publishes now, and (set apart, in its own dated panel) the last split by
// type, as shares so that no one reads it against today's pounds.
export function SizeSlide() {
  const largest = Math.max(...byType2016.rows.map((row) => row.share));
  return (
    <Frame part={0} title={`${size.allTaxableValueBn} of benefits liable to Class 1A in ${size.year}`} scale={1.12}>
      <div className={styles.sizeGrid}>
        <div className={styles.stack}>
          <p className={styles.listHead}>
            <IconBook2 stroke={1.8} aria-hidden="true" />
            In plain words
          </p>
          <div className={styles.defs}>
            {definitions.map((definition, index) => {
              const DefinitionIcon = definitionIcons[index] ?? IconPoint;
              return (
                <div key={definition.title} className={styles.iconItem}>
                  <DefinitionIcon stroke={1.8} aria-hidden="true" />
                  <div>
                    <h2>{definition.title}</h2>
                    <p>{definition.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.stack} {...at(2)}>
          <p className={styles.listHead}>
            <IconChartBar stroke={1.8} aria-hidden="true" />
            Now: HMRC, {size.year}, provisional
          </p>
          <div className={`${styles.cardGrid} ${styles.cols2}`}>
            <div className={styles.card}>
              <p className={styles.stat}>
                <IconGift stroke={1.8} aria-hidden="true" />
                {size.allTaxableValueBn}
              </p>
              <p className={styles.statLabel}>Taxable value of benefits liable to Class 1A</p>
              <p className={styles.statNote}>Experimental</p>
            </div>
            <div className={styles.card}>
              <p className={styles.stat}>
                <IconBuildingSkyscraper stroke={1.8} aria-hidden="true" />
                {size.class1aLiabilityBn}
              </p>
              <p className={styles.statLabel}>Class 1A due from employers</p>
            </div>
            <div className={styles.card}>
              <p className={styles.stat}>
                <IconCar stroke={1.8} aria-hidden="true" />
                <span>
                  <CountUp value={size.carRecipientsThousands * 1000} />
                </span>
              </p>
              <p className={styles.statLabel}>People with a company car</p>
              <p className={styles.statNote}>
                Reported to HMRC, an undercount; {size.carTaxableValueBn} taxable value
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.stat}>
                <IconBolt stroke={1.8} aria-hidden="true" />
                <span>
                  <CountUp value={size.electricShare} />%
                </span>
              </p>
              <p className={styles.statLabel}>Of company cars are electric</p>
            </div>
          </div>
        </div>
        <div className={styles.past} {...at(3)}>
          <p className={styles.listHead}>
            <IconHistory stroke={1.8} aria-hidden="true" />
            Last full split by type: {byType2016.year}
          </p>
          <p className={styles.pastNote}>Shares of taxable value only. No final figures by type since.</p>
          <div className={`${styles.hbars} ${styles.typeBars}`}>
            {byType2016.rows.map((row, index) => {
              const TypeIcon = typeIcons[index] ?? IconPoint;
              return (
                <Fragment key={row.label}>
                  <span className={styles.hbarLabel}>
                    <TypeIcon stroke={1.8} aria-hidden="true" />
                    {row.label}
                  </span>
                  <span className={styles.hbarTrack}>
                    <span
                      className={`${styles.hbar} ${styles.hbarRange}`}
                      style={{ width: `${(row.share / largest) * 70}%` }}
                    />
                    <span className={styles.hbarValue}>{row.share}%</span>
                  </span>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** Marks a change that is announced but not yet legislated. */
function Announced() {
  return <span className={`${styles.chip} ${styles.chipMid} ${styles.announced}`}>Announced</span>;
}

const eventIcons: Icon[] = [
  IconReceiptTax,
  IconClipboardList,
  IconClipboardList,
  IconPigMoney,
  IconCar,
];

// Five tax years on one line: the electric car rate climbs along it, and
// each year carries the change that starts then.
export function ChangesSlide() {
  const top = Math.max(...timeline.map((year) => year.evRate));
  return (
    <Frame part={0} title="The rules are changing each year to 2030-31" scale={1.3}>
      <ol className={`${styles.agendaRoad} ${styles.years}`}>
        {timeline.map((year, index) => {
          const EventIcon = eventIcons[index] ?? IconPoint;
          return (
            <li key={year.year} className={styles.agendaStop}>
              <span className={`${styles.agendaDot} ${styles.yearDot}`}>{year.year}</span>
              <div className={`${styles.agendaCard} ${styles.yearCard}`}>
                <div className={styles.rate}>
                  <span
                    className={styles.rateBar}
                    style={{ height: `${(year.evRate / top) * 100}%` }}
                  />
                  <p>
                    <b>{year.evRate}%</b>
                    <IconBolt stroke={1.8} aria-hidden="true" />
                    Electric car rate
                    {year.rateAnnounced && <Announced />}
                  </p>
                </div>
                {year.events.map((event) => (
                  <div key={event.title} className={styles.yearEvent} {...at(2)}>
                    <EventIcon stroke={1.8} aria-hidden="true" />
                    <div>
                      <h2>{event.title}</h2>
                      {event.text && <p>{event.text}</p>}
                      {event.announced && <Announced />}
                    </div>
                  </div>
                ))}
                {year.yield && (
                  <span className={`${styles.chip} ${styles.chipGood} ${styles.yieldChip}`} {...at(3)}>
                    {year.yield}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 2: what PolicyEngine covers

const pipelineIcons: Icon[] = [IconClipboardList, IconDatabase, IconTarget, IconScale];
const carIcons: Icon[] = [IconCar, IconCoins, IconTarget, IconReceiptTax];

// The four stages of the model, and under each what it does for company
// cars: the one benefit that goes all the way through today.
export function HowItWorksSlide() {
  return (
    <Frame part={1} title="How the model works: company cars, end to end" scale={1.2}>
      <div className={styles.stack}>
        <StatusLegend of="For company cars, each stage is" />
        <div className={`${styles.cardGrid} ${styles.cols4} ${styles.layerGrid} ${styles.stages}`}>
          {pipeline.map((stage, index) => {
            const StageIcon = pipelineIcons[index] ?? IconPoint;
            const CarIcon = carIcons[index] ?? IconPoint;
            return (
              <div key={stage.title} className={`${styles.card} ${styles.layer}`}>
                <h2>
                  <StageIcon stroke={1.8} aria-hidden="true" />
                  {index + 1} · {stage.title}
                </h2>
                <div className={styles.layerLine}>
                  <span>In general</span>
                  <p>{stage.text}</p>
                </div>
                <div className={styles.layerLine} {...at(2)}>
                  <span className={styles.carHead}>
                    <CarIcon stroke={1.8} aria-hidden="true" />
                    Company cars
                    <StatusChip status={stage.status} />
                  </span>
                  <p>{stage.car}</p>
                  {stage.missing && (
                    <p className={styles.missing}>
                      <IconCircleDashed stroke={1.8} aria-hidden="true" />
                      {stage.missing}
                    </p>
                  )}
                </div>
                <div className={styles.layerFacts} {...at(3)}>
                  <p className={styles.stat}>
                    <CountUp value={stage.fact.value} />
                  </p>
                  <p className={styles.statLabel}>{stage.fact.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}

const coverageIcons: Icon[] = [
  IconCar,
  IconGasStation,
  IconBuildingSkyscraper,
  IconPigMoney,
  IconHeartbeat,
  IconTruck,
  IconHome,
  IconBike,
];

// One row per benefit, one column per layer of the model.
export function CoverageSlide() {
  return (
    <Frame part={1} title="What we model today, benefit by benefit" scale={1.35}>
      <div className={styles.stack}>
      <StatusLegend of="Each layer is" />
      <table className={`${styles.table} ${styles.coverage}`}>
        <thead>
          <tr>
            <th>Benefit</th>
            <th>Rules</th>
            <th>Data</th>
            <th>Calibration</th>
            <th>Today</th>
          </tr>
        </thead>
        <tbody>
          {coverage.map((row, index) => {
            const RowIcon = coverageIcons[index] ?? IconPoint;
            return (
              <tr key={row.benefit}>
                <td>
                  <span className={styles.rowLabel}>
                    <RowIcon stroke={1.8} aria-hidden="true" />
                    <span>
                      {row.benefit}
                      {row.detail && <small>{row.detail}</small>}
                    </span>
                  </span>
                </td>
                <td>
                  <StatusChip status={row.rules} />
                </td>
                <td>
                  <StatusChip status={row.data} />
                </td>
                <td>
                  <StatusChip status={row.target} />
                </td>
                <td>{row.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Part 3: scoping

const sourceIcons: Icon[] = [
  IconUsersGroup,
  IconReceiptTax,
  IconBuildingSkyscraper,
  IconCar,
  IconHistory,
  IconBike,
  IconBuildingBank,
];

const useChip: Record<Use, string> = {
  Impute: styles.chipGood,
  Calibrate: styles.chipMid,
  Validate: styles.chipBad,
  Possible: styles.chipBad,
};
const useLabel: Record<Use, string> = {
  Impute: "Impute",
  Calibrate: "Calibrate",
  Validate: "Validate",
  Possible: "Possible; access unconfirmed",
};

export function DataSlide() {
  return (
    <Frame part={2} title="Data: surveys say who, HMRC says how much" scale={1.35}>
      <table className={`${styles.table} ${styles.tight}`}>
        <thead>
          <tr>
            <th>Source</th>
            <th>What it measures</th>
            <th>Level</th>
            <th>Latest</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          {dataSources.map((row, index) => {
            const SourceIcon = sourceIcons[index] ?? IconPoint;
            return (
              <tr key={row.source}>
                <td>
                  <span className={styles.rowLabel}>
                    <SourceIcon stroke={1.8} aria-hidden="true" />
                    <span>{row.source}</span>
                  </span>
                </td>
                <td>{row.measures}</td>
                <td>{row.level}</td>
                <td className={styles.nowrap}>{row.latest}</td>
                <td>
                  <span className={styles.chipRow}>
                    {row.uses.map((use) => (
                      <span key={use} className={`${styles.chip} ${useChip[use]}`}>
                        {useLabel[use]}
                      </span>
                    ))}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Frame>
  );
}

const gapIcons: Icon[] = [IconScale, IconDatabase, IconTarget, IconChecklist];
const gapItemIcons: Icon[][] = [
  [IconHeartbeat, IconArrowsSplit, IconBuildingSkyscraper],
  [IconHeartbeat, IconHome, IconReceiptTax],
  [IconListSearch, IconGasStation, IconChartBar],
  [IconCar, IconBuildingBank, IconPigMoney],
];

export function GapSlide() {
  return (
    <Frame part={2} title="The gap, in four layers" scale={1.4}>
      <div className={`${styles.cardGrid} ${styles.cols4}`}>
        {gaps.map((gap, index) => (
          <Card
            key={gap.title}
            icon={gapIcons[index] ?? IconPoint}
            title={gap.title}
            step={index + 1}
            className={styles.gapCard}
          >
            <Points
              items={gap.items.map((text, item) => ({
                icon: gapItemIcons[index]?.[item] ?? IconPoint,
                text,
              }))}
            />
          </Card>
        ))}
      </div>
    </Frame>
  );
}

const phaseIcons: Icon[] = [IconCar, IconGift, IconArrowsSplit];
const phaseWorkIcons: Icon[][] = [
  [IconChecklist, IconTarget],
  [IconHeartbeat, IconDatabase],
  [IconBike, IconScale],
];
const effortChip: Record<string, string> = {
  Smallest: styles.chipGood,
  Medium: styles.chipBad,
  Largest: styles.chipMid,
};

export function PhasesSlide() {
  return (
    <Frame part={2} title="Options: three phases, each with its own output" scale={1.3}>
      <Flow>
        {phases.map((phase, index) => (
          <div
            key={phase.title}
            className={`${styles.card} ${styles.phase}`}
            {...at(index + 1)}
          >
            <p className={styles.phaseNumber}>Phase {index + 1}</p>
            <h2>
              {(() => {
                const PhaseIcon = phaseIcons[index] ?? IconPoint;
                return <PhaseIcon stroke={1.8} aria-hidden="true" />;
              })()}
              {phase.title}
            </h2>
            <div className={styles.layerLine}>
              <span>Work</span>
              <Points
                items={phase.work.map((text, item) => ({
                  icon: phaseWorkIcons[index]?.[item] ?? IconPoint,
                  text,
                }))}
              />
            </div>
            <div className={styles.layerLine}>
              <span>Output: static scores</span>
              <p>{phase.output}</p>
            </div>
            <div className={styles.layerLine}>
              <span>Effort: our rough ranking</span>
              <p className={styles.effort}>
                <span className={`${styles.chip} ${effortChip[phase.effort]}`}>{phase.effort}</span>
                {phase.effortNote}
              </p>
            </div>
          </div>
        ))}
      </Flow>
    </Frame>
  );
}

// Three questions, each with the scenario that would answer it and the
// phase it needs. No results: nothing has been run for this deck.
export function ExamplesSlide() {
  return (
    <Frame part={2} title="Questions this would answer" scale={1.4}>
      <div className={styles.stack}>
        {exampleQuestions.map((example, index) => (
          <Ask
            key={example.question}
            question={example.question}
            scenario={example.scenario}
            step={index + 1}
            chip={
              <span
                className={`${styles.chip} ${example.needs === "Runs today" ? styles.chipGood : styles.chipMid} ${styles.needs}`}
              >
                {example.needs}
              </span>
            }
          />
        ))}
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame part={2} title="Questions for NEF" scale={1.4}>
      <IconList
        items={[
          {
            icon: IconMessageQuestion,
            title: "Which reforms do you want to analyse first?",
          },
          {
            icon: IconGift,
            title: "Which benefits matter most to you?",
            text: "Cars, medical insurance, salary sacrifice, others",
          },
          {
            icon: IconAdjustmentsHorizontal,
            title: "Static results, or with behaviour?",
            text: "Employers and employees switching between pay and benefits",
          },
          {
            icon: IconSearch,
            title: "Do you hold data or contacts we should use?",
          },
          {
            icon: IconCalendarEvent,
            title: "What timeline and output would be useful?",
          },
          {
            icon: IconWritingSign,
            title: "Would you publish with us?",
          },
        ]}
      />
    </Frame>
  );
}

const contacts = [
  { label: "policyengine.org", url: "https://policyengine.org", Icon: IconWorld },
  { label: "vahid@policyengine.org", url: "mailto:vahid@policyengine.org", Icon: IconMail },
  {
    label: "PolicyEngine/policyengine-uk",
    url: "https://github.com/PolicyEngine/policyengine-uk",
    Icon: IconBrandGithub,
  },
  {
    label: "PolicyEngine/microcosm",
    url: "https://github.com/PolicyEngine/microcosm",
    Icon: IconBrandGithub,
  },
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
