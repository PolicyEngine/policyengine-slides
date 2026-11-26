import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
  IconFileCode,
  IconLink,
  IconMail,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";
import BasePathImage from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import { speakers } from "@/lib/speakers";
import { SlideshowProvider, useSlideshowContextSafe } from "@/components/core/SlideshowContext";
import {
  breakdowns,
  budgetBehaviour,
  budgetYears,
  budgetLabel,
  budgetNotes,
  budgetPackage,
  budgetRows,
  budgetRunLabel,
  budgetTabs,
  budgetViews,
  calibration,
  closingLinks,
  compareHeads,
  coverage,
  coverageFoot,
  dataCompare,
  energy,
  funder,
  grant1Foot,
  grant2Foot,
  grantRows,
  grants,
  inBrief,
  knownLimits,
  microcosmFlow,
  microcosmFoot,
  microcosmResult,
  modelFlow,
  modelFoot,
  notClaimed,
  notFound,
  options,
  optionsFoot,
  parts,
  pilotBrings,
  pilotCandidates,
  pilotFlow,
  pilotScope,
  questions,
  rfMethod,
  rfMethodFoot,
  rfReports,
  rfReportsFoot,
  routes,
  routesFoot,
  rulesCode,
  rulesCompare,
  rulesEntities,
  rulesFacts,
  rulesRegistry,
  sources,
  stepsAlsoLabel,
  stepsCaution,
  stepsTable,
  tags,
  usesFoot,
  usesTable,
  whoWeAre,
  type CompareRow,
  type Logo,
  type MapRow,
  type PartKey,
  type Tag,
} from "../content";
import Embed from "./Embed";
import { Only, Reveal } from "./Reveal";
import styles from "./deck.module.css";

type Section = PartKey;

/** Staggers an element's entrance when its slide comes on screen. */
/**
 * Shows a reference slide whole: every build step at once, live and in the
 * export. Used in config.ts for slides that are jumped to in discussion.
 */
export function whole<P extends object>(Component: (props: P) => ReactNode) {
  function Whole(props: P) {
    const ctx = useSlideshowContextSafe();
    if (!ctx) return <Component {...props} />;
    return (
      <SlideshowProvider value={{ ...ctx, buildStep: Infinity }}>
        <Component {...props} />
      </SlideshowProvider>
    );
  }
  Whole.displayName = `Whole(${Component.name})`;
  return Whole;
}

const enter = (index: number) => ({ "--i": index }) as CSSProperties;

/** An icon in the teal ink, with no box behind it: the deck's one icon style. */
function Badge({ icon: IconComponent, size }: { icon: Icon; size?: "small" | "large" }) {
  const sizeClass = size === "small" ? styles.badgeSmall : size === "large" ? styles.badgeLarge : "";
  return (
    <span className={`${styles.badge} ${sizeClass}`}>
      <IconComponent stroke={1.75} aria-hidden="true" />
    </span>
  );
}

/** A table's row label with a small bare icon, aligned with the label's first line. */
function RowLabel({ icon: IconComponent, children }: { icon: Icon; children: ReactNode }) {
  return (
    <div className={`${styles.targetTopic} ${styles.rowLabelIcon}`}>
      <IconComponent stroke={1.75} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function StatusTag({ tag }: { tag: Tag }) {
  const tone = tag.tone === "muted" ? styles.tagMuted : tag.tone === "caution" ? styles.tagCaution : "";
  return <span className={`${styles.tag} ${tone}`}>{tag.label}</span>;
}

const bodyScale = (scale: number) => ({ "--u": `calc(var(--u0) * ${scale})` }) as CSSProperties;

/**
 * The talk's six parts along the top of a slide, by their short names: the
 * current part in teal, the parts already covered in a lighter grey.
 */
function PartNav({ section }: { section: Section }) {
  const current = parts.findIndex((part) => part.key === section);
  return (
    <nav className={styles.partNav} aria-label="Parts of the talk">
      {parts.map((part, index) => (
        <span
          key={part.key}
          className={index === current ? styles.navCurrent : index < current ? styles.navDone : ""}
          aria-current={index === current ? "step" : undefined}
        >
          <span className={styles.navNumber}>{index + 1}</span>
          {part.short}
        </span>
      ))}
    </nav>
  );
}

function Frame({
  section,
  title,
  subtitle,
  children,
  scale = 1.25,
  fill = false,
}: {
  section: Section;
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Size of the body relative to the deck's base unit. */
  scale?: number;
  /** The body fills the slide from the top, for a live page. */
  fill?: boolean;
}) {
  return (
    <Slide className={styles.deck}>
      <div className={styles.frame}>
        <header className={styles.frameIn}>
          <PartNav section={section} />
          <h1 className={styles.title}>{title}</h1>
          {subtitle && (
            <div className={styles.subtitleRow}>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          )}
          <div className={`accent-bar ${styles.bar}`} />
        </header>
        <div className={`${styles.body} ${styles.frameIn} ${fill ? styles.bodyFill : ""}`} style={bodyScale(scale)}>
          {children}
        </div>
      </div>
    </Slide>
  );
}

const columns = (count: number) => ({ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` });

type Step = { icon: Icon; owner?: string; title: string; text: string; code?: string; teal?: boolean };

/**
 * Icon steps joined by arrows on one line. "builds" gives the build step at
 * which each step appears, with the arrow that leads to it.
 */
function Flow({ steps, builds, titleLines }: { steps: Step[]; builds?: number[]; titleLines?: number }) {
  const template = steps.map(() => "minmax(0, 1fr)").join(" auto ");
  return (
    <div className={styles.flow} style={{ gridTemplateColumns: template }}>
      {steps.map((step, index) => {
        const at = builds?.[index] ?? 1;
        return (
          <Fragment key={step.title}>
            {index > 0 && (
              <Reveal step={at} motion="wipe" className={styles.arrow} style={{ gridRow: 1 }}>
                <IconArrowRight stroke={2.2} aria-hidden="true" />
              </Reveal>
            )}
            <Reveal
              step={at}
              ghost
              className={`${styles.step} ${step.teal ? styles.stepTeal : ""} ${builds ? "" : styles.enter}`}
              style={{ gridRow: 1, ...(builds ? {} : enter(index)) }}
            >
              <div className={styles.stepTop}>
                <Badge icon={step.icon} />
                <span className={styles.stepMarks}>
                  <span className={styles.stepIndex}>{index + 1}</span>
                </span>
              </div>
              {step.owner && <p className={styles.owner}>{step.owner}</p>}
              <h2 style={titleLines ? { minHeight: `${1.2 * titleLines}em` } : undefined}>{step.title}</h2>
              <p>{step.text}</p>
              {step.code && <code className={styles.inlineCode}>{step.code}</code>}
            </Reveal>
          </Fragment>
        );
      })}
    </div>
  );
}

function Mini({ icon, title, text }: { icon: Icon; title: string; text?: string }) {
  return (
    <div className={styles.mini}>
      <Badge icon={icon} size="small" />
      <div>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** A line under a slide's body, under a hairline. */
function Foot({ children, step = 1, tone }: { children: ReactNode; step?: number; tone?: "caution" }) {
  return (
    <Reveal step={step} className={`${styles.foot} ${tone === "caution" ? styles.footCaution : ""}`}>
      {children}
    </Reveal>
  );
}

/** A table with horizontal rules only: a header row, then rows that build in groups. */
function Table({
  template,
  heads,
  rows,
  dense = false,
}: {
  template: string;
  heads: ReactNode[];
  rows: { key: string; step: number; cells: ReactNode[]; className?: string; span?: boolean }[];
  dense?: boolean;
}) {
  const rowStyle = { gridTemplateColumns: template };
  return (
    <div className={`${styles.mapTable} ${dense ? styles.mapDense : ""}`}>
      <div className={`${styles.mapRow} ${styles.mapHead}`} style={rowStyle}>
        {heads.map((head, index) => (
          <div key={index}>{head}</div>
        ))}
      </div>
      {rows.map((row) => (
        <Reveal key={row.key} step={row.step} className={`${styles.mapRow} ${row.className ?? ""}`} style={rowStyle}>
          {row.span ? (
            <div style={{ gridColumn: "1 / -1" }}>{row.cells[0]}</div>
          ) : (
            row.cells.map((cell, index) => <div key={index}>{cell}</div>)
          )}
        </Reveal>
      ))}
    </div>
  );
}

function Tags({ list }: { list: Tag[] }) {
  return (
    <div className={styles.tagRow}>
      {list.map((item) => (
        <StatusTag key={item.label} tag={item} />
      ))}
    </div>
  );
}

// ---------- 1. Cover ----------

const coverSpeakers = [
  { ...speakers["vahid-ahmadi"], title: "Research Associate", photo: "/images/rf-2026/vahid-ahmadi.jpg" },
  { ...speakers["max-ghenis"], title: "CEO" },
];

export function TitleSlide() {
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10">
        <div className="h-1 w-20 rounded-full bg-white/30" />
        <h1 className="font-display text-center text-5xl font-bold text-white">
          PolicyEngine UK and the Resolution Foundation’s modelling
        </h1>
        <p className="text-center text-2xl text-balance text-white opacity-80">
          The model, the Microcosm data, and how the Resolution Foundation’s uses of the IPPR model map across
        </p>
        <div className="mt-4 flex items-start justify-center gap-16">
          {coverSpeakers.map((speaker) => (
            <div key={speaker.name} className="flex w-52 shrink-0 flex-col items-center text-center">
              <div className="relative mb-3 h-28 w-28 overflow-hidden rounded-full border-2 border-white/40">
                <BasePathImage src={speaker.photo} alt={speaker.name} fill className="object-cover" />
              </div>
              <p className="text-xl font-semibold text-white">{speaker.name}</p>
              <p className="text-sm font-light text-white/70">{speaker.title}</p>
            </div>
          ))}
        </div>
        <div className="pt-2 text-center text-white opacity-70">
          <p>Resolution Foundation · 30 November 2026</p>
        </div>
      </div>
    </Slide>
  );
}

// ---------- 2. In brief ----------

export function InBriefSlide() {
  return (
    <Frame section="intro" title="Outline" scale={1.0} subtitle="Six parts; the talk follows about ten slides, then discussion">
      <ol className={styles.agenda}>
        {parts.map((part, index) => (
          <li key={part.key} className={styles.enter} style={enter(index)}>
            <span className={styles.agendaNumber}>{index + 1}</span>
            <Badge icon={part.icon} />
            <div>
              <div className={styles.agendaHead}>
                <h2>{part.title}</h2>
              </div>
              <p>{part.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

// ---------- 3. Who we are ----------

function LogoCell({ org }: { org: Logo }) {
  const mark = org.logo ? (
    <BasePathImage
      src={org.logo}
      alt={`${org.name} logo`}
      width={org.width ?? 1}
      height={org.pixelHeight ?? 1}
      className={org.darken ? styles.logoDarken : undefined}
      style={{ height: `calc(var(--u) * ${org.height})`, width: "auto" }}
    />
  ) : (
    <span className={styles.wordmark}>{org.name}</span>
  );
  const box = org.source ? (
    <a
      href={org.source.href}
      target="_blank"
      rel="noopener noreferrer"
      title={org.name}
      onClick={(event) => event.stopPropagation()}
      className={`${styles.logoMark} pointer-events-auto`}
    >
      {mark}
    </a>
  ) : (
    <span className={styles.logoMark} title={org.name}>
      {mark}
    </span>
  );
  return (
    <div className={styles.logoCell}>
      {box}
      {org.caption && <p className={styles.logoCaption}>{org.caption}</p>}
    </div>
  );
}

function LogoSection({ title, logos, cells }: { title: string; logos: Logo[]; cells: number }) {
  return (
    <section className={styles.logoSection}>
      <h2 className={styles.rowLabel}>{title}</h2>
      <div className={styles.logoGrid} style={columns(cells)}>
        {logos.map((org) => (
          <LogoCell key={org.name} org={org} />
        ))}
      </div>
    </section>
  );
}

export function WhoSlide() {
  const { facts, government, thinkTanks } = whoWeAre;
  return (
    <Frame
      section="intro"
      title="Who we are"
      scale={1.1}
      subtitle="A non-partisan non-profit building open-source tax-benefit models"
    >
      <Reveal step={1} className={styles.facts}>
        {facts.map((fact) => (
          <div key={fact.title} className={styles.fact}>
            <Badge icon={fact.icon} />
            <div>
              <h3>{fact.title}</h3>
              <p>
                {fact.text}
                {"cite" in fact && fact.cite && (
                  <>
                    {" ("}
                    <a
                      href={fact.cite.source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={`${styles.factCite} pointer-events-auto`}
                    >
                      {fact.cite.text}
                    </a>
                    {")"}
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
      <div className={styles.logoGroups}>
        <Reveal step={2}>
          <section className={styles.logoSection}>
            <h2 className={styles.rowLabel}>Government and Parliament: where PolicyEngine has been used, trialled or cited</h2>
            <ul className={styles.govList}>
              {government.map((org) => (
                <li key={org.name}>
                  <a
                    href={org.source?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="pointer-events-auto"
                  >
                    {org.name}
                  </a>
                  : {org.caption}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
        <Reveal step={3}>
          <LogoSection title="Think tanks and researchers: published work using PolicyEngine" logos={thinkTanks} cells={thinkTanks.length} />
        </Reveal>
      </div>
    </Frame>
  );
}

// ---------- 6. How a run works ----------

export function ModelSlide() {
  return (
    <Frame
      section="model"
      title="PolicyEngine UK computes household incomes after taxes and benefits"
      scale={1.25}
      subtitle="Rules applied to a household file, twice, and the difference"
    >
      <Flow steps={modelFlow} builds={[1, 2, 3, 4]} />
      <Foot step={4}>{modelFoot}</Foot>
    </Frame>
  );
}

// ---------- 7. How the rules are encoded ----------

const codeAccent = /(\b(?:class|def|return)\b|"[^"]*")/;

export function RulesSlide() {
  return (
    <Frame
      section="model"
      title="How the rules are encoded"
      scale={1.12}
      subtitle="Parameters with references, formulas and tests, in the open"
    >
      <div className="grid grid-cols-[1.45fr_1fr] items-center gap-[calc(var(--u)*2)]">
        <Reveal step={1} className={styles.code}>
          <p className={styles.codeTitle}>
            <Badge icon={IconFileCode} size="small" />
            {rulesCode.title}
          </p>
          <pre>
            {rulesCode.code.split(codeAccent).map((part, index) =>
              index % 2 === 1 ? <span key={index}>{part}</span> : part,
            )}
          </pre>
        </Reveal>
        <div>
          <Reveal step={2} className={styles.vsteps}>
            <p className={styles.rowLabel}>policyengine-uk 2.179.0</p>
            {rulesFacts.map((fact) => (
              <div key={fact.label} className={`${styles.stat} ${styles.statMedium}`}>
                <Badge icon={fact.icon} size="large" />
                <div>
                  <p className={styles.statValue}>
                    {fact.value} <span className={styles.figureTitle}>{fact.label}</span>
                  </p>
                  <p className={styles.statLabel}>{fact.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal step={3} className={styles.divider}>
            <p className={styles.rowLabel}>Three entities</p>
            <div className={styles.chips}>
              {rulesEntities.map(({ icon, label }) => (
                <span key={label} className={styles.entity}>
                  <Badge icon={icon} size="small" />
                  {label}
                </span>
              ))}
            </div>
            <p className={styles.registry}>
              {rulesRegistry.text}
              <span>{rulesRegistry.label}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </Frame>
  );
}

// ---------- 8. Coverage ----------

export function CoverageSlide() {
  return (
    <Frame section="model" title="What the UK model covers" scale={1.08} subtitle="Complete, partial and outside the model">
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={{ gridTemplateColumns: "1fr 1.25fr 1.15fr 0.75fr" }}>
        {coverage.map((group, index) => (
          <Reveal key={group.title} step={index + 1} className={`${styles.card} ${styles.cardCompact}`}>
            <div className={styles.cardTitleRow}>
              <Badge icon={group.icon} />
              <h2>{group.title}</h2>
            </div>
            <div className={styles.columnTag}>
              <StatusTag tag={group.tag} />
            </div>
            <Bullets items={group.items} />
          </Reveal>
        ))}
      </div>
      <Foot step={coverage.length + 1}>{coverageFoot}</Foot>
    </Frame>
  );
}

// ---------- 9. The household file ----------

export function MicrocosmBuildSlide() {
  const blocks = [...microcosmFlow, microcosmResult];
  const template = blocks.map(() => "minmax(0, 1fr)").join(" auto ");
  return (
    <Frame
      section="model"
      title="Microcosm UK 2024–25: how the household file is built"
      scale={1.12}
      subtitle="The Family Resources Survey, with top incomes, wealth and spending added, then reweighted to official statistics"
    >
      <div className={styles.buildRow} style={{ gridTemplateColumns: template }}>
        {blocks.map((step, index) => {
          const result = index === microcosmFlow.length;
          const at = Math.min(index + 1, microcosmFlow.length);
          return (
            <Fragment key={step.title}>
              {index > 0 && (
                <Reveal step={at} motion="wipe" className={styles.arrow}>
                  <IconArrowRight stroke={2.2} aria-hidden="true" />
                </Reveal>
              )}
              <Reveal step={at} ghost className={`${styles.buildStep} ${result ? styles.buildResult : ""}`}>
                <div className={styles.buildTop}>
                  <Badge icon={step.icon} size="large" />
                  {!result && <span className={styles.snakeNumber}>{index + 1}</span>}
                </div>
                <p className={styles.owner}>{step.owner}</p>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </Reveal>
            </Fragment>
          );
        })}
      </div>
      <Foot step={microcosmFlow.length}>{microcosmFoot}</Foot>
    </Frame>
  );
}

// ---------- 10. Breakdowns ----------

export function BreakdownsSlide() {
  return (
    <Frame section="model" title="How far results break down" scale={1.12} subtitle="Standard outputs of a run">
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(4)}>
        {breakdowns.map((group, index) => (
          <Reveal key={group.title} step={index + 1} className={`${styles.card} ${styles.cardCompact}`}>
            <div className={styles.cardTitleRow}>
              <Badge icon={group.icon} />
              <h2>{group.title}</h2>
            </div>
            <ul className={`${styles.list} ${styles.breakdownList}`}>
              {group.items.map((item) => (
                <li key={item.text}>
                  {item.text}
                  {item.tag && <StatusTag tag={item.tag} />}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Frame>
  );
}

// ---------- 4. The Nuffield Foundation grants ----------

export function NuffieldSlide() {
  return (
    <Frame
      section="nuffield"
      title="The Nuffield Foundation grants: what they named and what exists today"
      scale={0.88}
      subtitle="Local-area analysis first, then Budget analysis by constituency and Council Tax Reduction"
    >
      <Reveal step={1} className={styles.grants}>
        {grants.map((grant) => (
          <div key={grant.title} className={styles.grant}>
            <p className={styles.rowLabel}>{grant.title}</p>
            <h2>“{grant.name}”</h2>
            <p>
              <strong>{grant.amount}</strong> · {grant.dates}
            </p>
          </div>
        ))}
      </Reveal>
      <Reveal step={2}>
        <p className={`${styles.rowLabel} ${styles.tableLabel}`}>Grant 1: the areas Nuffield lists, and what exists today</p>
        <Table
          dense
          template="1.25fr 2.6fr 0.75fr"
          heads={["What Nuffield lists", "What exists today", "Status"]}
          rows={grantRows.map((row) => ({
            key: row.area,
            step: 2,
            cells: [<RowLabel key="l" icon={row.icon}>{row.area}</RowLabel>, row.today, <StatusTag key="t" tag={row.tag} />],
          }))}
        />
      </Reveal>
      <Foot step={2}>
        <span className={styles.footStrong}>{grant1Foot}</span>
      </Foot>
      <Foot step={3}>{grant2Foot}</Foot>
    </Frame>
  );
}

// ---------- 5. The Autumn Budget 2026 dashboard ----------

function BudgetCard() {
  const address = new URL(sources.budgetDashboard.href);
  return (
    <div className={styles.dashCard}>
      <div className={styles.embedBar}>
        <span className={styles.embedAddress}>
          <IconWorld stroke={1.8} aria-hidden="true" />
          {address.host}
        </span>
      </div>
      <div className={styles.dashBody}>
        <h2 className={styles.figureTitle}>On the live page</h2>
        <div className={styles.dashFeatures}>
          {budgetTabs.map((feature) => (
            <div key={feature.title} className={styles.mini}>
              <Badge icon={feature.icon} size="large" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.targetsFoot}>
          <a href={sources.budgetDashboard.href}>
            {address.host}
            {address.pathname}
          </a>
          {" · "}
          {budgetRunLabel}
        </p>
      </div>
    </div>
  );
}

export function BudgetDashboardSlide() {
  return (
    <Frame
      section="nuffield"
      title="The Autumn Budget 2026 dashboard, by constituency"
      scale={1.1}
      fill
      subtitle="Budget measures by constituency, age and income"
    >
      <Only when="live">
        <Embed href={sources.budgetDashboard.href} title={sources.budgetDashboard.label} views={budgetViews} />
      </Only>
      <Only when="export">
        <BudgetCard />
      </Only>
    </Frame>
  );
}

// ---------- 11. RF's 2026 reports ----------

export function ReportsSlide() {
  return (
    <Frame
      section="uses"
      title="The Resolution Foundation’s 2026 research we have read"
      scale={1.0}
      subtitle="And how each uses the IPPR tax-benefit model, per its figure notes"
    >
      <Table
        template="1.15fr 0.7fr 2.2fr 2fr"
        heads={["Report", "Date", "What it does", "Model use"]}
        rows={rfReports.map((row) => ({
          key: row.report,
          step: 1,
          cells: [<span key="r" className={styles.targetTopic}>{row.report}</span>, row.date, row.what, row.use],
        }))}
      />
      <Foot>{rfReportsFoot}</Foot>
    </Frame>
  );
}

// ---------- 12. RF's projection method ----------

export function MethodSlide() {
  return (
    <Frame
      section="uses"
      title="How the Resolution Foundation projects incomes, as we read it"
      scale={1.12}
      subtitle="From Living Standards Outlook 2026, Annex 1 (10 February 2026). Please correct us"
    >
      <Flow
        steps={rfMethod.map((step) => ({ ...step, teal: step.owner.includes("IPPR model") }))}
        builds={[1, 2, 3, 4, 5]}
        titleLines={1}
      />
      <div className={styles.ownerKey}>
        <span>
          <i className={styles.keyRf} /> RF’s own processing
        </span>
        <span>
          <i className={styles.keyModel} /> The IPPR tax-benefit model (step 3 largely, per Annex 1)
        </span>
      </div>
      <Foot step={5}>{rfMethodFoot}</Foot>
    </Frame>
  );
}

// ---------- 13 and 14. The mapping tables ----------

function MapTable({
  rows,
  whereHead,
  firstHead,
  alsoLabel,
  template = "2.3fr 1.55fr 2.75fr 1.25fr",
}: {
  rows: MapRow[];
  whereHead: string;
  firstHead: string;
  /** Heads the rows marked "also", a second group under the main rows. */
  alsoLabel?: string;
  template?: string;
}) {
  const firstAlso = rows.findIndex((row) => row.also);
  const tableRows = rows.map((row) => ({
    key: row.label,
    step: row.step,
    cells: [
      <RowLabel key="l" icon={row.icon}>{row.label}</RowLabel>,
      <span key="w" className={styles.targetSource}>{row.where}</span>,
      row.today,
      <Tags key="t" list={row.tags} />,
    ] as ReactNode[],
    span: false,
    className: undefined as string | undefined,
  }));
  if (alsoLabel && firstAlso >= 0) {
    tableRows.splice(firstAlso, 0, {
      key: "also",
      step: rows[firstAlso].step,
      cells: [<span key="g" className={styles.rowLabel}>{alsoLabel}</span>],
      span: true,
      className: styles.mapGroup,
    });
  }
  return (
    <Table dense template={template} heads={[firstHead, whereHead, "PolicyEngine today", "Status"]} rows={tableRows} />
  );
}

export function UsesSlide() {
  return (
    <Frame
      section="uses"
      title="RF’s published analyses, mapped to PolicyEngine"
      scale={0.9}
      subtitle="What RF publishes, and what PolicyEngine does today"
    >
      <MapTable rows={usesTable} firstHead="RF’s use" whereHead="Where" template="2.2fr 1.5fr 3.1fr 1.3fr" />
      <Foot step={3}>
        {usesFoot[0]}
        <br />
        <span className={styles.footMuted}>{usesFoot[1]}</span>
      </Foot>
    </Frame>
  );
}

export function StepsSlide() {
  return (
    <Frame
      section="uses"
      title="Each step of the projection method, mapped to PolicyEngine"
      scale={0.85}
      subtitle="Which steps are the model’s, which are RF’s own, and what PolicyEngine does today"
    >
      <MapTable
        rows={stepsTable}
        firstHead="Step"
        whereHead="Whose"
        alsoLabel={stepsAlsoLabel}
        template="2.15fr 1.35fr 3.3fr 1.3fr"
      />
      <Foot step={2} tone="caution">
        {stepsCaution}
      </Foot>
    </Frame>
  );
}

// ---------- 15. Billing me softly ----------

export function EnergySlide() {
  return (
    <Frame
      section="uses"
      title="An RF proposal already modelled: the targeted energy bill discount"
      scale={1.12}
      subtitle="PolicyEngine’s dashboard of the Billing me softly proposal, 5 October 2026"
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(2)}>
        <Reveal step={1} className={`${styles.card} ${styles.cardCompact}`}>
          <p className={styles.rowLabel}>The proposal (Resolution Foundation, 10 Aug 2026)</p>
          <div className={styles.minis}>
            {energy.proposal.map((item) => (
              <Mini key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </Reveal>
        <Reveal step={2} className={`${styles.card} ${styles.cardCompact}`}>
          <p className={styles.rowLabel}>PolicyEngine’s run (5 Oct 2026)</p>
          <div className={styles.minis}>
            {energy.run.map((item) => (
              <Mini key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
          <p className={styles.runLabel}>{energy.runLabel}</p>
        </Reveal>
      </div>
      <Reveal step={2} className={styles.linkRow}>
        <a href={sources.energyDiscount.href} target="_blank" rel="noopener noreferrer" className="pointer-events-auto" onClick={(event) => event.stopPropagation()}>
          <IconLink stroke={1.8} aria-hidden="true" />
          policyengine.org/uk/targeted-energy-discount
        </a>
        <a href={sources.energyCode.href} target="_blank" rel="noopener noreferrer" className="pointer-events-auto" onClick={(event) => event.stopPropagation()}>
          <IconBrandGithub stroke={1.8} aria-hidden="true" />
          github.com/PolicyEngine/uk-energy-reforms
        </a>
      </Reveal>
      <Foot step={2}>{energy.foot}</Foot>
    </Frame>
  );
}

// ---------- 16 and 17. Comparison tables ----------

function CompareTable({ rows }: { rows: CompareRow[] }) {
  return (
    <Table
      dense
      template="1.45fr 2.2fr 2fr 2.2fr"
      heads={[
        "",
        compareHeads[0],
        <span key="ippr" className={styles.correctHead}>
          {compareHeads[1]}
          <em>Please correct us</em>
        </span>,
        compareHeads[2],
      ]}
      rows={rows.map((row) => ({
        key: row.label,
        step: row.step,
        cells: [
          <RowLabel key="l" icon={row.icon}>{row.label}</RowLabel>,
          row.cells[0],
          <span key="i" className={row.cells[1] === notFound ? styles.notPublic : undefined}>{row.cells[1]}</span>,
          row.cells[2],
        ],
      }))}
    />
  );
}

export function DataCompareSlide() {
  return (
    <Frame
      section="compare"
      title="The data: PolicyEngine, the IPPR model and UKMOD"
      scale={0.94}
      subtitle="Three ways of preparing the same survey. IPPR column: as RF uses it, from published notes"
    >
      <CompareTable rows={dataCompare} />
    </Frame>
  );
}

export function RulesCompareSlide() {
  return (
    <Frame
      section="compare"
      title="The rules engine and access: PolicyEngine, the IPPR model and UKMOD"
      scale={0.86}
      subtitle="UKMOD column from CeMPA’s 2026 country report; IPPR column from published descriptions, dated"
    >
      <CompareTable rows={rulesCompare} />
    </Frame>
  );
}

// ---------- 18. Calibration ----------

export function CalibrationSlide() {
  const { stats, beforeAfter, publishers, foot } = calibration;
  const total = publishers.reduce((sum, row) => sum + row.count, 0);
  const max = Math.max(...publishers.map((row) => row.count));
  return (
    <Frame
      section="compare"
      title="Calibration: weights fitted to official statistics"
      scale={1.1}
      subtitle="Release build of 22 November 2026. In-sample fit"
    >
      <div className={styles.calib}>
        <Reveal step={1} className={styles.calibStats}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className={styles.statValue}>
                {stat.value}
              </p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
          <div className={styles.calibTag}>
            <StatusTag tag={tags.inSample} />
          </div>
        </Reveal>
        <Reveal step={2}>
          <p className={styles.rowLabel}>Within 10%: starting weights → fitted</p>
          <div className={styles.beforeAfter}>
            {beforeAfter.map((row) => (
              <Fragment key={row.label}>
                <span className={styles.baLabel}>{row.label}</span>
                <span className={styles.baBefore}>{row.before}</span>
                <IconArrowRight stroke={2.2} aria-hidden="true" />
                <span className={styles.baAfter}>{row.after}</span>
              </Fragment>
            ))}
          </div>
          <p className={styles.calibNote}>Starting weights already include the SPI copies</p>
        </Reveal>
        <Reveal step={3}>
          <p className={styles.rowLabel}>Targets by publisher ({total.toLocaleString("en-GB")})</p>
          <div className={styles.bars}>
            {publishers.map((row) => (
              <Fragment key={row.name}>
                <span className={styles.barName}>{row.name}</span>
                <span className={styles.barTrack}>
                  <span className={styles.barFill} style={{ width: `${(70 * row.count) / max}%` }} />
                  <span className={styles.barCount}>{row.count}</span>
                </span>
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>
      <Foot step={3}>
        {foot}{" "}
        <a href={sources.dashboard.href} target="_blank" rel="noopener noreferrer" className={`${styles.footLink} pointer-events-auto`} onClick={(event) => event.stopPropagation()}>
          Calibration dashboard, pinned to the build
          <IconExternalLink stroke={1.8} aria-hidden="true" />
        </a>
      </Foot>
    </Frame>
  );
}

// ---------- 19. Autumn Budget 2026 against the OBR ----------

const money = (n: number) => `${n > 0 ? "+" : n < 0 ? "−" : ""}${Math.abs(n).toLocaleString("en-GB")}`;
const ratio = (pe: number, obr: number) => `${Math.round((100 * pe) / obr)}%`;

// Labels for the two build groups: the 2026-27 measures, then those scored
// in a later year (each row gives its year), with the package total.
const budgetGroups = [
  { before: 0, label: "Measures with a figure in 2026–27" },
  { before: 3, label: "Later years (the year is in each row); then the package" },
];

export function BudgetObrSlide() {
  const all = [...budgetRows, { ...budgetPackage, step: 2 }];
  return (
    <Frame
      section="compare"
      title="Autumn Budget 2026: PolicyEngine’s costings beside the OBR’s"
      scale={0.92}
      subtitle="All seven measures, as published on 31 October 2026, with the main reason for each gap"
    >
      <div>
        <Table
          dense
          template="2.1fr 0.7fr 0.95fr 0.7fr 0.85fr 3.9fr"
          heads={[
            "Measure, £m",
            "Year",
            <span key="p" className={styles.num}>PolicyEngine</span>,
            <span key="o" className={styles.num}>OBR</span>,
            <span key="r" className={styles.num}>PE as % of OBR</span>,
            "Main reason",
          ]}
          rows={all.flatMap((row, index) => {
            const group = budgetGroups.find((g) => g.before === index);
            const groupRow = group
              ? [{ key: group.label, step: row.step, span: true, className: styles.mapGroup, cells: [<span key="g" className={styles.rowLabel}>{group.label}</span>] as ReactNode[] }]
              : [];
            return [
              ...groupRow,
              {
                key: row.measure,
                step: row.step,
                span: false,
                className: row.measure === budgetPackage.measure ? styles.mapTotal : undefined,
                cells: [
                  <span key="m" className={styles.targetTopic}>{row.measure}</span>,
                  row.year,
                  <span key="p" className={styles.num}>{money(row.pe)}</span>,
                  <span key="o" className={styles.num}>{money(row.obr)}</span>,
                  <span key="r" className={`${styles.num} ${styles.targetSource}`}>{ratio(row.pe, row.obr)}</span>,
                  <span key="w" className={styles.reasonCell}>{row.reason}</span>,
                ] as ReactNode[],
              },
            ];
          })}
        />
        <div className={styles.tableNotes}>
          {budgetNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
      <Foot step={3}>
        {budgetYears} {budgetBehaviour}
        <br />
        <span className={styles.footMuted}>{budgetLabel}</span>
      </Foot>
    </Frame>
  );
}

// ---------- 20. What we do not claim ----------

export function LimitsSlide() {
  return (
    <Frame section="compare" title="What we do not claim, and known limits" scale={1.1} subtitle="What has and has not been tested">
      <div className={styles.limits}>
        <div className={styles.limitCol}>
          <p className={styles.rowLabel}>Not claimed</p>
          <Bullets items={notClaimed} />
        </div>
        <div className={styles.limitCol}>
          <p className={styles.rowLabel}>Known limits</p>
          <Bullets items={knownLimits} />
        </div>
      </div>
    </Frame>
  );
}

// ---------- 21. Routes in ----------

export function RoutesSlide() {
  return (
    <Frame
      section="next"
      title="Four routes in: web app, assistant, plugin, Python"
      scale={1.05}
      subtitle="From a web page to a prompt to code"
    >
      <div className={`${styles.cards} ${styles.cardsBoxed}`} style={columns(4)}>
        {routes.map((route, index) => (
          <Reveal key={route.title} step={index + 1} ghost className={`${styles.card} ${styles.cardCompact}`}>
            <div className={styles.cardHead}>
              <Badge icon={route.icon} size="large" />
              <StatusTag tag={route.tag} />
            </div>
            <h2>{route.title}</h2>
            <p>{route.text}</p>
            {"code" in route && route.code && (
              <div className={styles.codeLines}>
                {route.code.map((line) => (
                  <code key={line}>{line}</code>
                ))}
              </div>
            )}
            {"extra" in route && route.extra && (
              <div className={styles.cardNote}>
                <StatusTag tag={route.extra.tag} />
                {route.extra.text}
              </div>
            )}
          </Reveal>
        ))}
      </div>
      <Foot step={4}>{routesFoot}</Foot>
    </Frame>
  );
}

// ---------- 22. Options ----------

export function OptionsSlide() {
  return (
    <Frame
      section="next"
      title="Three ways the Resolution Foundation could use PolicyEngine"
      scale={0.86}
      subtitle="Options for discussion; none depends on the others"
    >
      <div className={`${styles.cards} ${styles.cardsBoxed}`} style={columns(3)}>
        {options.map((item, index) => (
          <Reveal key={item.title} step={index + 1} ghost className={`${styles.card} ${styles.cardCompact}`}>
            <div className={styles.cardTitleRow}>
              <Badge icon={item.icon} size="large" />
              <h2>{item.title}</h2>
            </div>
            <dl className={`${styles.pairs} ${styles.pairsStacked}`}>
              {item.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
      <Foot step={3}>{optionsFoot}</Foot>
    </Frame>
  );
}

// ---------- 23. A possible pilot ----------

export function PilotSlide() {
  return (
    <Frame
      section="next"
      title="A possible pilot: one published analysis, side by side"
      scale={0.88}
      subtitle="Reproduce one Resolution Foundation chart in PolicyEngine and explain as much of the difference as we can"
    >
      <Flow steps={pilotFlow} />
      <Reveal step={2} className={`${styles.cards} ${styles.cardsOpen}`} style={columns(2)}>
        <div className={`${styles.card} ${styles.cardCompact}`}>
          <p className={styles.rowLabel}>RF brings</p>
          <Bullets items={pilotBrings.rf} />
        </div>
        <div className={`${styles.card} ${styles.cardCompact}`}>
          <p className={styles.rowLabel}>PolicyEngine brings</p>
          <Bullets items={pilotBrings.pe} />
        </div>
      </Reveal>
      <Reveal step={3} className={styles.candidates}>
        {pilotCandidates.map((item) => (
          <p key={item.title}>
            <strong>{item.title}.</strong> {item.text}
          </p>
        ))}
      </Reveal>
      <Foot step={3}>{pilotScope}</Foot>
    </Frame>
  );
}

// ---------- 24. Questions ----------

export function QuestionsSlide() {
  return (
    <Frame section="next" title="Questions for discussion" scale={0.92} subtitle="Our reading so far, and where we need RF’s view">
      <div className={`${styles.answers} ${styles.answersTop}`}>
        <p className={styles.rowLabel}>Our reading so far, for you to correct</p>
        {inBrief.map((answer) => (
          <p key={answer.label}>
            <strong>{answer.label}:</strong> {answer.text}
          </p>
        ))}
      </div>
      <ol className={styles.questions}>
        {questions.map((question, index) => (
          <li key={question.text} className={styles.question}>
            <Badge icon={question.icon} />
            <span className={styles.questionNumber}>{index + 1}</span>
            {question.text}
          </li>
        ))}
      </ol>
    </Frame>
  );
}

// ---------- 25. Closing ----------

export function ClosingSlide() {
  return (
    <Slide isEnd className={styles.deck}>
      <h1 className={`${styles.closingTitle} font-display font-bold text-center`}>Thank you</h1>
      <p className={`${styles.closingSubtitle} text-center text-white/85`}>Sources for every figure are in the notes and the public repository</p>
      <div className={`${styles.closingContacts} grid w-full max-w-5xl grid-cols-2 self-center`}>
        {closingLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 transition-colors hover:bg-white/20"
          >
            <Badge icon={href.startsWith("mailto:") ? IconMail : href.includes("github.com") ? IconBrandGithub : IconWorld} size="small" />
            <span className="font-medium">{label}</span>
          </a>
        ))}
      </div>
      <a
        href={funder.source.href}
        target="_blank"
        rel="noreferrer"
        onClick={(event) => event.stopPropagation()}
        className={`${styles.closingFunder} self-center`}
      >
        <span>{funder.label}</span>
        <BasePathImage src={funder.logo} alt={funder.name} width={funder.width} height={funder.height} />
      </a>
    </Slide>
  );
}
