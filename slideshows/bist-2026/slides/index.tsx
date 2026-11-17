import { Fragment, type CSSProperties, type ReactNode } from "react";
import katex from "katex";
import {
  IconArrowRight,
  IconArrowsLeftRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronUp,
  IconFileCode,
  IconMail,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";
import BasePathImage from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import { speakers } from "@/lib/speakers";
import {
  abmQuestions,
  abmReturns,
  aiProject,
  axiomAccess,
  axiomGeography,
  axiomRelationship,
  axiomRules,
  axiomToday,
  budgetProject,
  businessPolicy,
  calibrationEquation,
  calibrationFit,
  coverage,
  dashboardFeatures,
  dataAccess,
  epdTrace,
  firmMethod,
  interfaceToday,
  macroLinks,
  microcosmFlow,
  microcosmResult,
  modelFlow,
  parts,
  pilots,
  questions,
  rulesCode,
  rulesEntities,
  rulesFacts,
  runStatus,
  sources,
  tags,
  targetTable,
  tariffBridge,
  tariffDisaggregation,
  tradeEvents,
  tradePath,
  whoWeAre,
  type Logo,
  type PartKey,
  type Tag,
} from "../content";
import Embed from "./Embed";
import { CountUp, Only, Reveal } from "./Reveal";
import styles from "./deck.module.css";

/** Which of the talk's seven parts a slide belongs to. */
type Section = PartKey;

/** Staggers an element's entrance when its slide comes on screen. */
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

function StatusTag({ tag }: { tag: Tag }) {
  const tone = tag.tone === "muted" ? styles.tagMuted : tag.tone === "caution" ? styles.tagCaution : "";
  return <span className={`${styles.tag} ${tone}`}>{tag.label}</span>;
}

const bodyScale = (scale: number) =>
  ({ "--u": `calc(var(--u0) * ${scale})` }) as CSSProperties;

/**
 * The talk's seven parts along the top of a slide, by their short names: the
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
  status = [],
  children,
  scale = 1.25,
  fill = false,
}: {
  section?: Section;
  title: string;
  subtitle?: string;
  /** Status tags shown beside the subtitle; "only" limits one to the live deck or the export. */
  status?: (Tag & { only?: "live" | "export" })[];
  children: ReactNode;
  /** Size of the body relative to the deck's base unit. */
  scale?: number;
  /** The body fills the slide from the top, for a live page or a figure. */
  fill?: boolean;
}) {
  return (
    <Slide className={styles.deck}>
      <div className={styles.frame}>
        <header>
          {section && <PartNav section={section} />}
          <h1 className={styles.title}>{title}</h1>
          {(subtitle || status.length > 0) && (
            <div className={styles.subtitleRow}>
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
              {status.map((tag) =>
                tag.only ? (
                  <Only key={tag.label} when={tag.only}>
                    <StatusTag tag={tag} />
                  </Only>
                ) : (
                  <StatusTag key={tag.label} tag={tag} />
                ),
              )}
            </div>
          )}
          <div className={`accent-bar ${styles.bar}`} />
        </header>
        <div className={`${styles.body} ${fill ? styles.bodyFill : ""}`} style={bodyScale(scale)}>
          {children}
        </div>
      </div>
    </Slide>
  );
}

const columns = (count: number) => ({ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` });

/** A card: icon badge and status tags on top, a short heading, one line. */
function Card({
  icon,
  title,
  text,
  cardTags = [],
  children,
  step = 1,
  index,
}: {
  icon: Icon;
  title: string;
  text?: string;
  cardTags?: Tag[];
  children?: ReactNode;
  /** The build step at which the card appears. */
  step?: number;
  /** Position in a row of cards, for a staggered entrance. */
  index?: number;
}) {
  return (
    <Reveal
      step={step}
      ghost
      className={`${styles.card} ${index === undefined ? "" : styles.enter}`}
      style={index === undefined ? undefined : enter(index)}
    >
      <div className={styles.cardHead}>
        <Badge icon={icon} size="large" />
        <div className={styles.tagRow}>
          {cardTags.map((tag) => (
            <StatusTag key={tag.label} tag={tag} />
          ))}
        </div>
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      {children}
    </Reveal>
  );
}

type Step = {
  icon: Icon;
  owner?: string;
  title: string;
  text: string;
  tag?: Tag;
  dashed?: boolean;
};

/**
 * Icon steps joined by arrows, with an optional bracket under a run of steps.
 * "builds" gives the build step at which each step appears, with the arrow
 * that leads to it; without it the steps enter together, one after another.
 */
function Flow({
  steps,
  bracket,
  feedback,
  titleLines,
  builds,
}: {
  steps: Step[];
  /** A return arrow under the flow, from the last step back to the first. */
  feedback?: { label: string; tag?: Tag; step?: number };
  /** Reserve this many lines for every step title, so the text below lines up. */
  titleLines?: number;
  bracket?: { from: number; to: number; label: string; step?: number };
  builds?: number[];
}) {
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
              className={`${styles.step} ${step.dashed ? styles.stepDashed : ""} ${builds ? "" : styles.enter}`}
              style={{ gridRow: 1, ...(builds ? {} : enter(index)) }}
            >
              <div className={styles.stepTop}>
                <Badge icon={step.icon} />
                <span className={styles.stepMarks}>
                  {step.tag && <StatusTag tag={step.tag} />}
                  <span className={styles.stepIndex}>{index + 1}</span>
                </span>
              </div>
              {step.owner && <p className={styles.owner}>{step.owner}</p>}
              <h2 style={titleLines ? { minHeight: `${1.2 * titleLines}em` } : undefined}>{step.title}</h2>
              <p>{step.text}</p>
            </Reveal>
          </Fragment>
        );
      })}
      {bracket && (
        <Reveal
          step={bracket.step ?? 1}
          motion="fade"
          className={styles.bracket}
          style={{ gridColumn: `${2 * bracket.from + 1} / ${2 * bracket.to + 2}` }}
        >
          <p>{bracket.label}</p>
        </Reveal>
      )}
      {feedback && (
        <Reveal step={feedback.step ?? 1} motion="fade" className={styles.feedback}>
          <span className={`${styles.feedbackLine} ${styles.feedbackStart}`} style={{ gridColumn: 1 }}>
            <IconChevronUp stroke={2.2} aria-hidden="true" />
          </span>
          <span
            className={`${styles.feedbackLine} ${styles.feedbackMiddle}`}
            style={{ gridColumn: `2 / ${2 * steps.length - 1}` }}
          />
          <span
            className={`${styles.feedbackLine} ${styles.feedbackEnd}`}
            style={{ gridColumn: 2 * steps.length - 1 }}
          />
          <div className={styles.feedbackLabel}>
            <p>{feedback.label}</p>
            {feedback.tag && <StatusTag tag={feedback.tag} />}
          </div>
        </Reveal>
      )}
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** Inline or display maths, rendered to HTML when the slide renders. */
function Tex({ tex, display = false }: { tex: string; display?: boolean }) {
  const html = katex.renderToString(tex, { displayMode: display, throwOnError: false });
  return display ? (
    <div className={styles.equation} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  );
}

// The cover follows the shared CoverSlide, with the audience's name set as
// written: that component capitalises every word of its event line.
const coverSpeakers = [
  { ...speakers["vahid-ahmadi"], title: "Research Associate" },
  { ...speakers["max-ghenis"], title: "CEO" },
];

export function TitleSlide() {
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10">
        <div className="h-1 w-20 rounded-full bg-white/30" />
        <h1 className="font-display text-center text-5xl font-bold text-white">
          From business shocks to household incomes
        </h1>
        <p className="text-center text-2xl text-white opacity-80">
          Tax–benefit microsimulation alongside trade, macroeconomic and agent-based models
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
          <p>Modelling Unit, Department for Business, Innovation, Science and Trade</p>
          <p>19 November 2026</p>
        </div>
      </div>
    </Slide>
  );
}

export function InBriefSlide() {
  return (
    <Frame section="intro" title="In brief" scale={1.12} subtitle="Six parts after this introduction">
      <ol className={styles.agenda}>
        {parts.slice(1).map((part, index) => (
          <li key={part.key} className={styles.enter} style={enter(index)}>
            <span className={styles.agendaNumber}>{index + 2}</span>
            <Badge icon={part.icon} />
            <div>
              <div className={styles.agendaHead}>
                <h2>{part.title}</h2>
                {"tag" in part && <StatusTag tag={part.tag} />}
              </div>
              <p>{part.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

/**
 * The slide that opens a part: its number and title, what it covers, and the
 * seven parts with this one in teal and those already covered in grey.
 */
function PartDivider({ section }: { section: Section }) {
  const current = parts.findIndex((part) => part.key === section);
  const part = parts[current];
  return (
    <Slide className={styles.deck}>
      <div className={styles.partSlide}>
        <div className={styles.partLead}>
          <p className={styles.partKicker}>Part {current + 1} of {parts.length}</p>
          <p className={styles.partBig}>{current + 1}</p>
          <h1 className={styles.partName}>{part.title}</h1>
          <p className={styles.partText}>{part.text}</p>
          {"tag" in part && (
            <div className={styles.partTag}>
              <StatusTag tag={part.tag} />
            </div>
          )}
          <div className={`accent-bar ${styles.bar}`} />
        </div>
        <ol className={styles.partList}>
          {parts.map((item, index) => (
            <li
              key={item.key}
              className={index === current ? styles.partListCurrent : index < current ? styles.partListDone : ""}
            >
              <span className={styles.partListNumber}>{index + 1}</span>
              {item.title}
            </li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}

export function PartWhatSlide() {
  return <PartDivider section="what" />;
}

export function PartHaveSlide() {
  return <PartDivider section="have" />;
}

export function PartProjectsSlide() {
  return <PartDivider section="projects" />;
}

export function PartExploreSlide() {
  return <PartDivider section="explore" />;
}

export function PartIdeasSlide() {
  return <PartDivider section="ideas" />;
}

export function PartCollaborateSlide() {
  return <PartDivider section="collaborate" />;
}

/** One organisation: its mark in a cell of fixed height, and a caption below. */
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

function LogoSection({ title, logos }: { title: string; logos: Logo[] }) {
  return (
    <section className={styles.logoSection}>
      <h2 className={styles.rowLabel}>{title}</h2>
      <div className={styles.logoGrid} style={columns(logos.length)}>
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
      subtitle="The organisation, and where our UK work is used or cited"
    >
      <div className={styles.facts}>
        {facts.map((fact, index) => (
          <div key={fact.title} className={`${styles.fact} ${styles.enter}`} style={enter(index)}>
            <Badge icon={fact.icon} />
            <div>
              <h3>{fact.title}</h3>
              <p>{fact.text}</p>
            </div>
          </div>
        ))}
      </div>
      <LogoSection title="Used or cited in government" logos={government} />
      <LogoSection title="Think tanks and researchers using our work" logos={thinkTanks} />
    </Frame>
  );
}

export function WhatSlide() {
  return (
    <Frame
      section="what"
      title="PolicyEngine UK computes household incomes after taxes and benefits"
      scale={1.28}
      subtitle="Open-source microsimulation: the same households, run twice"
      status={[runStatus]}
    >
      <Flow steps={modelFlow} builds={[1, 2, 3, 4]} />
    </Frame>
  );
}

export function EpdSlide() {
  const { flow, feedback } = epdTrace;
  return (
    <Frame
      section="explore"
      title="The UK–US Economic Prosperity Deal: from model results to households"
      scale={1.25}
      subtitle="How one deal could be traced from a trade or macro model's results to household incomes"
      status={[tags.noResults]}
    >
      <Flow steps={flow} titleLines={2} builds={[1, 2, 3, 3]} feedback={{ ...feedback, step: 4 }} />
    </Frame>
  );
}

export function LinkSlide() {
  const { rows, breakdowns } = tariffDisaggregation;
  return (
    <Frame
      section="ideas"
      title="One way to link: tables in, tables out"
      scale={0.98}
      subtitle="A starting point for discussion: what a model could pass, and which records receive it"
    >
      <div className={`${styles.rows} ${styles.rowsShared}`}>
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>A model’s result</p>
        <span />
        <Reveal step={2} motion="fade" className={`${styles.rowLabel} ${styles.rowsHead} ${styles.rowsHeadTag}`}>
          Mapped into
          <StatusTag tag={tags.toBuild} />
        </Reveal>
        <span />
        <Reveal step={3} motion="fade" className={`${styles.rowLabel} ${styles.rowsHead}`}>
          Once mapped, assigned to
        </Reveal>
        <span />
        <Reveal step={4} motion="fade" className={`${styles.rowLabel} ${styles.rowsHead}`}>
          PolicyEngine already reports
        </Reveal>
        {rows.map((row) => (
          <Fragment key={row.result}>
            <div className={`${styles.cell} ${styles.cellLead}`}>
              <Badge icon={row.icon} size="small" />
              <div>
                {row.result}
                <p className={styles.cellSub}>{row.from}</p>
              </div>
            </div>
            <Reveal step={2} motion="wipe" className={styles.arrow}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </Reveal>
            <Reveal step={2} ghost className={`${styles.cell} ${styles.cellDashed}`}>
              {row.key}
            </Reveal>
            <Reveal step={3} motion="wipe" className={styles.arrow}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </Reveal>
            <Reveal step={3} ghost className={`${styles.cell} ${styles.cellTagged}`}>
              {row.assigned}
              <StatusTag tag={row.tag} />
            </Reveal>
          </Fragment>
        ))}
        <Reveal step={4} motion="wipe" className={`${styles.arrow} ${styles.sharedArrow}`}>
          <IconArrowRight stroke={2.2} aria-hidden="true" />
        </Reveal>
        <Reveal step={4} ghost className={`${styles.cell} ${styles.sharedCell}`}>
          <ul className={styles.list}>
            {breakdowns.map((item) => (
              <li key={item.title}>
                {item.title}
                {"tag" in item && item.tag && <StatusTag tag={item.tag} />}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <div className={styles.rowsFoot}>
        <StatusTag tag={{ label: "Runs today", tone: "built" }} />
        <p>{interfaceToday}</p>
      </div>
    </Frame>
  );
}

export function BridgeSlide() {
  const { steps, replaceable, cushion } = tariffBridge;
  return (
    <Frame
      section="projects"
      title="Who bears the cost of trade changes: the 2025 US tariffs"
      scale={1.1}
      subtitle="Inside the trade study: from tariff rates to employees’ earnings"
      status={[tags.workingPaper, tags.microcosm, { label: "No published results for the UK–US deal", tone: "muted" }]}
    >
      <Flow
        steps={steps}
        titleLines={2}
        bracket={{
          from: replaceable[0],
          to: replaceable[1],
          label: "A trade model could replace these",
          step: 3,
        }}
      />
      <div className={styles.finding}>
        <div>
          <h2 className={styles.figureTitle}>
            The tax and benefit system cushions part of the earnings loss
          </h2>
          <p className={styles.statLabel}>
            Through lower taxes and NI, more benefits and lower pension contributions
          </p>
        </div>
        <Reveal step={2}>
          <p className={styles.statValue}>
            <CountUp value={cushion.wageCuts} step={2} />
          </p>
          <p className={styles.statLabel}>if the loss comes as wage cuts across workers</p>
        </Reveal>
        <Reveal step={2}>
          <p className={styles.statValue}>
            <CountUp value={cushion.jobLosses} step={2} />
          </p>
          <p className={styles.statLabel}>
            if it comes as job losses (SD {cushion.jobLossesSd} across {cushion.draws})
          </p>
        </Reveal>
      </div>
    </Frame>
  );
}

// Keywords and strings in the snippet take the accent colour.
const codeAccent = /(\b(?:class|def|return)\b|"[^"]*")/;

export function RulesSlide() {
  return (
    <Frame
      section="what"
      title="How the rules are encoded"
      scale={1.2}
      subtitle="Law as dated parameters, formulas and tests"
      status={[{ label: "Counts at version 2.179.0", tone: "muted" }]}
    >
      <div className="grid grid-cols-[1.45fr_1fr] items-center gap-[calc(var(--u)*2)]">
        <div className={styles.code}>
          <p className={styles.codeTitle}>
            <Badge icon={IconFileCode} size="small" />
            {rulesCode.title}
          </p>
          <pre>
            {rulesCode.code.split(codeAccent).map((part, index) =>
              index % 2 === 1 ? <span key={index}>{part}</span> : part,
            )}
          </pre>
        </div>
        <div>
          <div className={styles.vsteps}>
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
          </div>
          <div className={styles.divider}>
            <p className={styles.rowLabel}>Three entities</p>
            <div className={styles.chips}>
              {rulesEntities.map(({ icon, label }) => (
                <span key={label} className={styles.entity}>
                  <Badge icon={icon} size="small" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// The household file's build on one row, left to right: five numbered
// steps, each tall and narrow, then the file itself. Each step comes in with
// the arrow that leads to it; the file comes in with the last step.
export function MicrocosmBuildSlide() {
  const blocks = [...microcosmFlow, microcosmResult];
  const template = blocks.map(() => "minmax(0, 1fr)").join(" auto ");
  return (
    <Frame
      section="what"
      title="Microcosm UK 2024–25: how the household file is built"
      scale={1.2}
      subtitle="An open-source pipeline of 54 stages, from surveys and statistics to weights"
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
    </Frame>
  );
}

export function CalibrationSlide() {
  const { stats, solver } = calibrationFit;
  // The first build shows what goes in (targets and records); the second,
  // how the fitted weights do.
  const [targets, fit, records] = stats;
  const tiles = [
    { stat: targets, step: 1 },
    { stat: records, step: 1 },
    { stat: fit, step: 2 },
  ];
  return (
    <Frame
      section="what"
      title="Calibration: weights fitted to official statistics"
      scale={1.22}
      subtitle="The certified national build of 7 November 2026"
      status={[
        { label: "In-sample fit", tone: "caution" },
        { label: "Targets at model year 2025", tone: "muted" },
      ]}
    >
      <div className="grid grid-cols-[1.3fr_1fr] items-center gap-[calc(var(--u)*3)]">
        <div>
          <h2 className={styles.figureTitle}>What the solver minimises</h2>
          <Tex tex={calibrationEquation} display />
          <p className={styles.legend}>
            <span>
              <Tex tex="w" /> weights
            </span>
            <span>
              <Tex tex="a_j" /> household contributions
            </span>
            <span>
              <Tex tex="t_j" /> official figure
            </span>
            <span>
              <Tex tex="\omega_j" /> target weights
            </span>
          </p>
          <div className={styles.chips}>
            {solver.map((item) => (
              <span key={item} className={styles.chip}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.kpiStack}>
          {tiles.map(({ stat, step }) => (
            <Reveal key={stat.label} step={step} ghost className={styles.kpi}>
              <Badge icon={stat.icon} />
              <p className={styles.statValue}>
                {step > 1 ? <CountUp value={stat.value} step={step} /> : stat.value}
              </p>
              <p className={styles.statLabel}>{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const count = (n: number) => n.toLocaleString("en-GB");

/** A share as a percentage: whole when it is all, else to one decimal. */
const share = (part: number, whole: number) =>
  part === whole ? "100%" : `${((100 * part) / whole).toFixed(1)}%`;

// The 1,514 targets of the certified build by topic, after the Good Growth
// Foundation deck's target table: where each binds, who publishes it, how
// many there are and the share the fitted weights reproduce within 10%.
function TargetTable() {
  const total = targetTable.reduce((sum, row) => sum + row.count, 0);
  const within = targetTable.reduce((sum, row) => sum + row.within, 0);
  return (
    <div className={styles.targetTable}>
      <div className={`${styles.targetRow} ${styles.targetHead}`}>
        <div>Topic</div>
        <div>Where it binds</div>
        <div>Source</div>
        <div className={styles.targetNumber}>Targets</div>
        <div className={styles.targetNumber}>Within 10%</div>
      </div>
      {targetTable.map((row) => (
        <div key={row.topic} className={styles.targetRow}>
          <div className={styles.targetTopic}>{row.topic}</div>
          <div>{row.binds}</div>
          <div className={styles.targetSource}>{row.source}</div>
          <div className={styles.targetNumber}>{count(row.count)}</div>
          <div className={styles.targetNumber}>{share(row.within, row.count)}</div>
        </div>
      ))}
      <div className={`${styles.targetRow} ${styles.targetTotal}`}>
        <div>All targets</div>
        <div />
        <div className={styles.targetSource}>14 publishers</div>
        <div className={styles.targetNumber}>{count(total)}</div>
        <div className={styles.targetNumber}>{share(within, total)}</div>
      </div>
    </div>
  );
}

export function TargetsSlide() {
  return (
    <Frame
      section="what"
      title="What the weights are fitted to: 1,514 official figures"
      scale={0.98}
      subtitle="Every target of the certified 7 November build, by topic, with the share the weights reproduce within 10%"
    >
      <TargetTable />
    </Frame>
  );
}

// The page a PDF export shows in place of the live dashboard: what the live
// page offers and its address. The table on the slide before carries the
// numbers.
function DashboardCard() {
  const address = new URL(sources.dashboard.href);
  return (
    <div className={styles.dashCard}>
      <div className={styles.embedBar}>
        <span className={styles.embedAddress}>
          <IconWorld stroke={1.8} aria-hidden="true" />
          {address.host}
        </span>
      </div>
      <div className={styles.dashBody}>
        <h2 className={styles.figureTitle}>On the live page, target by target</h2>
        <div className={styles.dashFeatures}>
          {dashboardFeatures.map((feature) => (
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
          <a href={sources.dashboard.href}>
            {address.host}
            {address.pathname}
          </a>
        </p>
      </div>
    </div>
  );
}

export function CalibrationLiveSlide() {
  return (
    <Frame
      section="what"
      title="What the weights are fitted to: the live calibration dashboard"
      scale={1.1}
      fill
      subtitle="Every target by publisher and statistic: the official figure beside the fitted value"
      status={[
        { label: "Live", tone: "built", only: "live" },
        { label: "Certified 7 November build", tone: "built" },
      ]}
    >
      <Only when="live">
        <Embed href={sources.dashboard.href} title={sources.dashboard.label} zoom={0.8} />
      </Only>
      <Only when="export">
        <DashboardCard />
      </Only>
    </Frame>
  );
}

export function BusinessPolicySlide() {
  const { flow } = businessPolicy;
  return (
    <Frame
      section="ideas"
      title="Business policy: from firm costs to households"
      scale={1.38}
      subtitle="Example: the British Industrial Competitiveness Scheme (BICS)"
      status={[tags.notBuilt, tags.noResults]}
    >
      <Flow steps={flow} titleLines={2} />
    </Frame>
  );
}

export function AbmSlide() {
  return (
    <Frame
      section="ideas"
      title="Where an agent-based model could link"
      scale={1.04}
      subtitle="Three candidate questions, for discussion"
      status={[tags.notBuilt]}
    >
      <div className={`${styles.rows} ${styles.rowsShared}`}>
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>Policy question</p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>What it would simulate</p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>What it would pass in</p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>What PolicyEngine reports</p>
        {abmQuestions.map((row, index) => (
          <Fragment key={row.question}>
            <Reveal step={index + 1} ghost className={`${styles.cell} ${styles.cellLead}`}>
              <Badge icon={row.icon} />
              {row.question}
            </Reveal>
            <Reveal step={index + 1} motion="wipe" className={styles.arrow}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </Reveal>
            <Reveal step={index + 1} ghost className={`${styles.cell} ${styles.cellDashed}`}>
              {row.behaviour}
            </Reveal>
            <Reveal step={index + 1} motion="wipe" className={styles.arrow}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </Reveal>
            <Reveal step={index + 1} ghost className={`${styles.cell} ${styles.cellTagged}`}>
              {row.passes}
              <StatusTag tag={row.tag} />
            </Reveal>
          </Fragment>
        ))}
        <span className={`${styles.arrow} ${styles.sharedArrow}`}>
          <IconArrowRight stroke={2.2} aria-hidden="true" />
        </span>
        <div className={`${styles.cell} ${styles.sharedCell}`}>
          <Bullets items={abmReturns} />
        </div>
      </div>
    </Frame>
  );
}

export function MacroSlide() {
  return (
    <Frame
      section="explore"
      title="Links to macroeconomic models"
      scale={1.32}
      subtitle="Three possible routes, each at a different stage"
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(3)}>
        {macroLinks.map((link) => (
          <Card
            key={link.title}
            icon={link.icon}
            title={link.title}
            text={link.text}
            cardTags={link.tags}
            step={macroLinks.indexOf(link) + 1}
          >
            <div className={styles.link}>
              <span>{link.from}</span>
              {link.twoWay ? (
                <IconArrowsLeftRight stroke={2.2} aria-hidden="true" />
              ) : (
                <IconArrowRight stroke={2.2} aria-hidden="true" />
              )}
              <span>{link.to}</span>
            </div>
          </Card>
        ))}
      </div>
    </Frame>
  );
}

export function PilotsSlide() {
  return (
    <Frame
      section="collaborate"
      title="Two candidate pilots"
      scale={1.26}
      subtitle="For discussion: one scenario each, passed one way to PolicyEngine"
      status={[tags.notBuilt, tags.noResults]}
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(2)}>
        {pilots.map((item, index) => (
          <Reveal key={item.title} step={index + 1} ghost className={styles.card}>
            <div className={`${styles.cardTitleRow} ${styles.titleTwoLines}`}>
              <Badge icon={item.icon} size="large" />
              <h2>{item.title}</h2>
            </div>
            <dl className={styles.pairs}>
              {item.rows.map((row) => (
                <div key={row.label} className={styles.pair}>
                  <Badge icon={row.icon} size="small" />
                  <div>
                    <dt>{row.label}</dt>
                    <dd>{row.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame section="collaborate" title="Questions for discussion" scale={1.12}>
      <ol className={styles.questions}>
        {questions.map((question, index) => (
          <li key={question.text} className={`${styles.question} ${styles.enter}`} style={enter(index)}>
            <Badge icon={question.icon} />
            <span className={styles.questionNumber}>{index + 1}</span>
            {question.text}
          </li>
        ))}
      </ol>
    </Frame>
  );
}

const contacts = [
  { label: "vahid@policyengine.org", url: "mailto:vahid@policyengine.org", Icon: IconMail },
  { label: "policyengine.org/uk", url: sources.home.href, Icon: IconWorld },
  { label: "github.com/PolicyEngine", url: "https://github.com/PolicyEngine", Icon: IconBrandGithub },
  {
    label: "linkedin.com/company/thepolicyengine",
    url: "https://www.linkedin.com/company/thepolicyengine",
    Icon: IconBrandLinkedin,
  },
];

export function ClosingSlide() {
  return (
    <Slide isEnd className={styles.deck}>
      <h1 className={`${styles.closingTitle} font-display font-bold text-center`}>Thank you</h1>
      <p className={`${styles.closingSubtitle} text-center text-white/85`}>
        From business shocks to household incomes
      </p>
      <div className={`${styles.closingContacts} grid w-full max-w-5xl grid-cols-2 self-center`}>
        {contacts.map(({ label, url, Icon: ContactIcon }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 transition-colors hover:bg-white/20"
          >
            <Badge icon={ContactIcon} size="small" />
            <span className="font-medium">{label}</span>
          </a>
        ))}
      </div>
    </Slide>
  );
}

export function CoverageSlide() {
  return (
    <Frame
      section="have"
      title="What the UK model covers, and what we can share"
      scale={1.12}
      subtitle="Taxes and benefits on households, with business-tax changes allocated to them"
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(4)}>
        {coverage.map((group, index) => (
          <div key={group.title} className={`${styles.card} ${styles.cardCompact} ${styles.enter}`} style={enter(index)}>
            <div className={styles.cardTitleRow}>
              <Badge icon={group.icon} />
              <h2>{group.title}</h2>
            </div>
            <Bullets items={group.items} />
            {group.notModelled && (
              <div className={styles.cardNote}>
                <StatusTag tag={{ label: "Outside the model", tone: "muted" }} />
                {group.notModelled}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.access}>
        {dataAccess.map((item) => (
          <div key={item.title} className={styles.accessItem}>
            <Badge icon={item.icon} size="small" />
            <div>
              <div className={styles.accessHead}>
                <h3>{item.title}</h3>
                <StatusTag tag={item.tag} />
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** The Axiom Foundation's rules for firms and employers, each with its status and the law it encodes. */
export function AxiomRulesSlide() {
  return (
    <Frame
      section="have"
      title="Rules as code for firms and employers, from the Axiom Foundation"
      scale={0.9}
      subtitle="It publishes open, machine-readable encodings of the world’s rules, starting with tax and benefit policy"
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(3)}>
        {axiomRules.map((rule, index) => (
          <div key={rule.title} className={`${styles.card} ${styles.cardCompact} ${styles.enter}`} style={enter(index)}>
            <div className={styles.cardHead}>
              <Badge icon={rule.icon} />
              <StatusTag tag={rule.tag} />
            </div>
            <h2>{rule.title}</h2>
            <p>{rule.text}</p>
            <div className={styles.cardNote}>{rule.law}</div>
          </div>
        ))}
      </div>
      <div className={styles.rowsFoot}>
        <p>{axiomRelationship}</p>
      </div>
    </Frame>
  );
}

/** Examples of what the Axiom Foundation has encoded, holds as text only or lacks, and three ways to call it. */
export function AxiomTodaySlide() {
  return (
    <Frame
      section="have"
      title="What exists today, and how a model could call it"
      scale={1.0}
      subtitle="Rules on the business side: what the Axiom Foundation has encoded, and what it has not"
      status={[{ label: "As of 16 November 2026", tone: "muted" }]}
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(3)}>
        {axiomToday.map((group, index) => (
          <div key={group.title} className={`${styles.card} ${styles.cardCompact} ${styles.enter}`} style={enter(index)}>
            <div className={styles.cardTitleRow}>
              <Badge icon={group.icon} />
              <h2>{group.title}</h2>
            </div>
            <Bullets items={group.items} />
          </div>
        ))}
      </div>
      <div className={styles.access}>
        {axiomAccess.map((item) => (
          <div key={item.title} className={styles.accessItem}>
            <Badge icon={item.icon} size="small" />
            <div>
              <div className={styles.accessHead}>
                <h3>{item.title}</h3>
                <StatusTag tag={item.tag} />
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.rowsFoot}>
        <StatusTag tag={{ label: "On axiom.org", tone: "built" }} />
        <p>{axiomGeography}</p>
      </div>
    </Frame>
  );
}

// ---------- Projects we have done ----------

export function BudgetSlide() {
  const [measures, calculator] = budgetProject.labels;
  return (
    <Frame
      section="projects"
      title="The Autumn Budget 2026 dashboard"
      scale={1.1}
      fill
      subtitle={`${measures.title}, and ${calculator.title.toLowerCase()}`}
      status={[{ label: "Live", tone: "built" }]}
    >
      <Embed
        href={sources.budgetDashboard.href}
        title={sources.budgetDashboard.label}
        views={budgetProject.views}
      />
    </Frame>
  );
}

export function AiPostSlide() {
  return (
    <Frame
      section="projects"
      title="Who bears the cost of an AI scenario?"
      scale={1.1}
      fill
      subtitle="PolicyEngine post, 16 November 2026: distributional and fiscal incidence in the UK"
      status={[{ label: "Illustrative scenario", tone: "caution" }, aiProject.tag]}
    >
      <div className={styles.project}>
        <div className={styles.projectSide}>
          {aiProject.labels.map((label) => (
            <div key={label.title} className={styles.vstep}>
              <Badge icon={label.icon} size="large" />
              <div>
                <h3>{label.title}</h3>
                <p>{label.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Embed href={sources.aiPost.href} title={sources.aiPost.label} zoom={0.7} />
      </div>
    </Frame>
  );
}

/** A figure from a paper, in a frame, with its caption. */
function Figure({
  image,
  caption,
}: {
  image: { src: string; width: number; height: number; alt: string };
  caption: string;
}) {
  return (
    <figure className={styles.figure}>
      <BasePathImage src={image.src} alt={image.alt} width={image.width} height={image.height} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function FirmMethodSlide() {
  const { flow, accuracy, image, caption } = firmMethod;
  return (
    <Frame
      section="projects"
      title="How we built synthetic UK firms"
      scale={0.9}
      subtitle="Firm-level VAT microsimulation: published tables in, calibrated firm records out"
      status={[tags.workingPaper]}
    >
      <div className={styles.method}>
        <div>
          <p className={styles.rowLabel}>The method</p>
          <ol className={styles.methodSteps}>
            {flow.map((step, index) => (
              <li key={step.title} className={styles.enter} style={enter(index)}>
                <div className={styles.snakeLead}>
                  <span className={styles.snakeNumber}>{index + 1}</span>
                  <Badge icon={step.icon} size="small" />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <Reveal step={2} ghost className={styles.accuracy}>
          <p className={styles.rowLabel}>{accuracy.title}</p>
          <p className={styles.statValue}>
            <CountUp value={accuracy.overall.value} step={2} />
          </p>
          <p className={styles.statLabel}>{accuracy.overall.label}</p>
          <ul className={styles.accuracyRows}>
            {accuracy.rows.map((row) => (
              <li key={row.label}>
                <span>{row.label}</span>
                <strong>{row.value}</strong>
                <i style={{ width: row.value }} />
              </li>
            ))}
          </ul>
          <div className={styles.accuracyPopulation}>
            {accuracy.population.map((item) => (
              <Mini key={item.label} icon={item.icon} title={item.value} text={item.label} />
            ))}
          </div>
        </Reveal>
        <Reveal step={3}>
          <p className={styles.rowLabel}>Beside HMRC’s costing</p>
          <Figure image={image} caption={caption} />
        </Reveal>
      </div>
    </Frame>
  );
}

export function TradeSlide() {
  return (
    <Frame
      section="projects"
      title="Who bears the cost of trade changes? Four UK episodes, 2021–26"
      scale={1.12}
      subtitle="The trade study: price and earnings changes from four trade events, traced to households"
      status={[tags.workingPaper, tags.microcosm]}
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(4)}>
        {tradeEvents.map((event, index) => (
          <div
            key={event.title}
            className={`${styles.card} ${styles.episodeCard} ${event.next ? styles.episodeNext : ""} ${styles.enter}`}
            style={enter(index)}
          >
            <div className={styles.cardHead}>
              <Badge icon={event.icon} size="large" />
              <StatusTag tag={{ label: event.years, tone: "muted" }} />
            </div>
            <p className={styles.owner}>{event.channel}</p>
            <h2>{event.title}</h2>
            <p>{event.text}</p>
            {event.next && (
              <p className={styles.episodeLink}>
                Next slide
                <IconArrowRight stroke={2.2} aria-hidden="true" />
              </p>
            )}
          </div>
        ))}
      </div>
      <div className={styles.rowsFoot}>
        <StatusTag tag={{ label: "Method", tone: "built" }} />
        <p>{tradePath}</p>
      </div>
    </Frame>
  );
}
