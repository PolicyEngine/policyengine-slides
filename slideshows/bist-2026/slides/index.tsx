import { Fragment, type CSSProperties, type ReactNode } from "react";
import katex from "katex";
import {
  IconArrowRight,
  IconArrowsLeftRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBuildingBank,
  IconChartBar,
  IconChevronUp,
  IconFileCode,
  IconFlame,
  IconHome,
  IconMail,
  IconTable,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";
import BasePathImage from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import { speakers } from "@/lib/speakers";
import {
  abmQuestions,
  abmReturns,
  aiShock,
  appendixContents,
  businessPolicy,
  calibrationEquation,
  calibrationFit,
  components,
  coverage,
  dataAccess,
  epdTrace,
  firmTools,
  inBrief,
  interfaceSpec,
  interfaceToday,
  macroLinks,
  microcosmFlow,
  microcosmRelease,
  microcosmStatus,
  pilots,
  questions,
  rulesCode,
  rulesEntities,
  rulesFacts,
  runFlow,
  runStatus,
  sources,
  tags,
  tariffBridge,
  tariffDisaggregation,
  tradeEnergy,
  tradeEvents,
  uncertainty,
  uses,
  whoWeAre,
  type Logo,
  type Source,
  type Tag,
} from "../content";
import styles from "./deck.module.css";

// The eyebrow above each title. The talk has three parts, then a close.
const sections = {
  intro: "PolicyEngine: who and what",
  macro: "Overlap 1: macro and micro",
  business: "Overlap 2: business modelling",
  next: "Working together",
  appendix: "Appendix",
};

function ExternalLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
      className="pointer-events-auto hover:underline"
    >
      {children}
    </a>
  );
}

/** An icon in a tinted rounded square: the deck's one icon style. */
function Badge({
  icon: IconComponent,
  size,
  solid = false,
}: {
  icon: Icon;
  size?: "small" | "large";
  solid?: boolean;
}) {
  const sizeClass = size === "small" ? styles.badgeSmall : size === "large" ? styles.badgeLarge : "";
  return (
    <span className={`${styles.badge} ${sizeClass} ${solid ? styles.badgeSolid : ""}`}>
      <IconComponent stroke={1.8} aria-hidden="true" />
    </span>
  );
}

function StatusTag({ tag }: { tag: Tag }) {
  const tone = tag.tone === "muted" ? styles.tagMuted : tag.tone === "caution" ? styles.tagCaution : "";
  return <span className={`${styles.tag} ${tone}`}>{tag.label}</span>;
}

const bodyScale = (scale: number) =>
  ({ "--u": `calc(var(--u0) * ${scale})` }) as CSSProperties;

function Frame({
  section,
  title,
  subtitle,
  status = [],
  children,
  references = [],
  scale = 1.25,
}: {
  section?: string;
  title: string;
  subtitle?: string;
  /** Status tags shown beside the subtitle. */
  status?: Tag[];
  children: ReactNode;
  references?: Source[];
  /** Size of the body relative to the deck's base unit. */
  scale?: number;
}) {
  return (
    <Slide className={styles.deck}>
      <div className={styles.frame}>
        <header>
          {section && <p className={styles.section}>{section}</p>}
          <h1 className={styles.title}>{title}</h1>
          {(subtitle || status.length > 0) && (
            <div className={styles.subtitleRow}>
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
              {status.map((tag) => (
                <StatusTag key={tag.label} tag={tag} />
              ))}
            </div>
          )}
          <div className={`accent-bar ${styles.bar}`} />
        </header>
        <div className={styles.body} style={bodyScale(scale)}>
          {children}
        </div>
        {references.length > 0 && (
          <div className={styles.sources}>
            <span>Sources</span>
            {references.map((item) => (
              <ExternalLink key={item.href} href={item.href}>
                {item.label}
              </ExternalLink>
            ))}
          </div>
        )}
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
}: {
  icon: Icon;
  title: string;
  text?: string;
  cardTags?: Tag[];
  children?: ReactNode;
}) {
  return (
    <div className={styles.card}>
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
    </div>
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

/** Icon steps joined by arrows, with an optional bracket under a run of steps. */
function Flow({
  steps,
  bracket,
  feedback,
  titleLines,
}: {
  steps: Step[];
  /** A return arrow under the flow, from the last step back to the first. */
  feedback?: { label: string; tag?: Tag };
  /** Reserve this many lines for every step title, so the text below lines up. */
  titleLines?: number;
  bracket?: { from: number; to: number; label: string };
}) {
  const template = steps.map(() => "minmax(0, 1fr)").join(" auto ");
  return (
    <div className={styles.flow} style={{ gridTemplateColumns: template }}>
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          {index > 0 && (
            <span className={styles.arrow} style={{ gridRow: 1 }}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </span>
          )}
          <div className={`${styles.step} ${step.dashed ? styles.stepDashed : ""}`} style={{ gridRow: 1 }}>
            <div className={styles.stepTop}>
              <Badge icon={step.icon} />
              {step.tag && <StatusTag tag={step.tag} />}
            </div>
            {step.owner && <p className={styles.owner}>{step.owner}</p>}
            <h2 style={titleLines ? { minHeight: `${1.2 * titleLines}em` } : undefined}>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        </Fragment>
      ))}
      {bracket && (
        <div
          className={styles.bracket}
          style={{ gridColumn: `${2 * bracket.from + 1} / ${2 * bracket.to + 2}` }}
        >
          <p>{bracket.label}</p>
        </div>
      )}
      {feedback && (
        <>
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
        </>
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

function Stat({
  icon,
  value,
  label,
  medium = false,
}: {
  icon: Icon;
  value: string;
  label: string;
  medium?: boolean;
}) {
  return (
    <div className={`${styles.stat} ${medium ? styles.statMedium : ""}`}>
      <Badge icon={icon} size={medium ? undefined : "large"} />
      <div>
        <p className={styles.statValue}>{value}</p>
        <p className={styles.statLabel}>{label}</p>
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

export function TitleSlide() {
  return (
    <CoverSlide
      title="From business shocks to household incomes"
      subtitle="Tax–benefit microsimulation alongside trade, macroeconomic and agent-based models"
      event="BIST Modelling Unit"
      date="19 November 2026"
      speakers={[
        { ...speakers["vahid-ahmadi"], title: "Research Associate" },
        { ...speakers["max-ghenis"], title: "CEO" },
      ]}
    />
  );
}

export function InBriefSlide() {
  return (
    <Frame title="In brief"
      scale={1.35} subtitle="Three parts, then two candidate pilots to discuss">
      <div className={styles.cards} style={columns(3)}>
        {inBrief.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
            cardTags={item.tag ? [item.tag] : []}
          />
        ))}
      </div>
    </Frame>
  );
}

/** One organisation's mark, at its own height, linked to its source if it has one. */
function LogoMark({ org }: { org: Logo }) {
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
    <span className={styles.wordmark} style={{ height: `calc(var(--u) * ${org.height})` }}>
      {org.name}
    </span>
  );
  return org.source ? (
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
}

export function WhoSlide() {
  const { facts, government, thinkTanks } = whoWeAre;
  return (
    <Frame
      section={sections.intro}
      title="Who we are"
      scale={1.05}
      subtitle="The organisation, and who uses our UK work"
      references={[
        sources.about,
        sources.joss,
        sources.nuffield,
        sources.no10,
        sources.hmt,
        sources.obr,
        sources.hansard,
        sources.nef,
        sources.cps,
        sources.niesr,
      ]}
    >
      <div className="grid grid-cols-[1fr_2fr] items-center gap-[calc(var(--u)*3)]">
        <div className={styles.vsteps}>
          {facts.map((fact) => (
            <div key={fact.title} className={styles.vstep}>
              <Badge icon={fact.icon} size="large" />
              <div>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.cardCompact}`}>
            <h2 className={styles.figureTitle}>In government</h2>
            <div className={styles.logoGroups}>
              {government.map((group) => (
                <div key={group.caption} className={styles.logoGroup}>
                  <div className={styles.logoRow}>
                    {group.logos.map((org) => (
                      <LogoMark key={org.name} org={org} />
                    ))}
                  </div>
                  <p className={styles.logoCaption}>{group.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardCompact}`}>
            <h2 className={styles.figureTitle}>Think tanks and researchers using our work</h2>
            <div className={styles.logoRow}>
              {thinkTanks.map((org) => (
                <LogoMark key={org.name} org={org} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function WhatSlide() {
  return (
    <Frame
      section={sections.intro}
      title="PolicyEngine UK computes household incomes after taxes and benefits"
      scale={1.5}
      subtitle="Open-source microsimulation: spending is an input, income is the result"
      references={[sources.model, sources.data, sources.python, sources.joss]}
    >
      <Flow steps={components} />
    </Frame>
  );
}

export function RunSlide() {
  return (
    <Frame
      section={sections.intro}
      title="How a reform or a scenario is run"
      scale={1.5}
      subtitle="Two simulations on the same households: baseline and counterfactual"
      status={[runStatus]}
      references={[sources.model, sources.growth, sources.labourSupply, sources.impactAnalysis]}
    >
      <Flow steps={runFlow} />
    </Frame>
  );
}

export function EpdSlide() {
  const { flow, feedback } = epdTrace;
  return (
    <Frame
      section={sections.macro}
      title="The Economic Prosperity Deal: from macro impacts to households"
      scale={1.25}
      subtitle="How one deal could be traced from a trade or macro model's results to household incomes"
      status={[tags.notBuilt, tags.noResults]}
      references={[sources.epd, sources.trade, sources.python]}
    >
      <Flow steps={flow} titleLines={2} feedback={feedback} />
    </Frame>
  );
}

export function DisaggregationSlide() {
  const { rows, breakdowns } = tariffDisaggregation;
  return (
    <Frame
      section={sections.macro}
      title="Disaggregation: how sector results reach people"
      scale={1.08}
      subtitle="Inside the PolicyEngine step: which records receive each change"
      references={[sources.python, sources.trade, sources.gtap]}
    >
      <div className={`${styles.rows} ${styles.rowsShared}`}>
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>The other model's result</p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead} ${styles.rowsHeadTag}`}>
          Mapped by
          <StatusTag tag={tags.notBuilt} />
        </p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>PolicyEngine can assign it to</p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>PolicyEngine can already report</p>
        {rows.map((row) => (
          <Fragment key={row.result}>
            <div className={`${styles.cell} ${styles.cellLead}`}>
              <Badge icon={row.icon} size="small" />
              {row.result}
            </div>
            <span className={styles.arrow}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </span>
            <div className={`${styles.cell} ${styles.cellDashed}`}>{row.key}</div>
            <span className={styles.arrow}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </span>
            <div className={styles.cell}>{row.assigned}</div>
          </Fragment>
        ))}
        <span className={`${styles.arrow} ${styles.sharedArrow}`}>
          <IconArrowRight stroke={2.2} aria-hidden="true" />
        </span>
        <div className={`${styles.cell} ${styles.sharedCell}`}>
          <ul className={styles.list}>
            {breakdowns.map((item) => (
              <li key={item.title}>
                {item.title}
                {"tag" in item && item.tag && <StatusTag tag={item.tag} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

export function BridgeSlide() {
  const { steps, replaceable, cushion } = tariffBridge;
  return (
    <Frame
      section={sections.macro}
      title="The tariff bridge: steps a trade model could replace"
      scale={1.1}
      subtitle="From the 2025 US tariffs to survey employees' earnings"
      status={[tags.frsNotMicrocosm, { label: "Deal not yet modelled", tone: "muted" }]}
      references={[sources.trade, sources.epd]}
    >
      <Flow
        steps={steps}
        titleLines={2}
        bracket={{
          from: replaceable[0],
          to: replaceable[1],
          label: "A trade model could replace these",
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
        <div>
          <p className={styles.statValue}>{cushion.wageCuts}</p>
          <p className={styles.statLabel}>if the loss comes as wage cuts across workers</p>
        </div>
        <div>
          <p className={styles.statValue}>{cushion.jobLosses}</p>
          <p className={styles.statLabel}>
            if it comes as job losses (SD {cushion.jobLossesSd} across 100 draws)
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function UncertaintySlide() {
  return (
    <Frame
      section={sections.appendix}
      title="Assignment variability: repeated random draws"
      scale={1.05}
      subtitle="A sector scenario gives totals; random draws choose which employees are affected"
      status={[tags.illustrative, tags.frsNotMicrocosm]}
      references={[sources.ai, sources.aiDraws, sources.trade]}
    >
      <div className="grid grid-cols-[1fr_1.15fr] items-center gap-[calc(var(--u)*3)]">
        <div className={styles.vsteps}>
          {uncertainty.steps.map((step) => (
            <div key={step.title} className={styles.vstep}>
              <Badge icon={step.icon} size="large" />
              <div>
                <h3>{step.title}</h3>
                {step.text && <p>{step.text}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.card}>
          <h2 className={styles.figureTitle}>Exchequer cost, AI scenario</h2>
          <div className={styles.pairs}>
            {uncertainty.stats.map((stat) => (
              <Stat key={stat.value} icon={stat.icon} value={stat.value} label={stat.label} medium />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

// Keywords and strings in the snippet take the accent colour.
const codeAccent = /(\b(?:class|def|return)\b|"[^"]*")/;

export function RulesSlide() {
  return (
    <Frame
      section={sections.intro}
      title="How the rules are encoded"
      scale={1.2}
      subtitle="Law as dated parameters, formulas and tests"
      status={[{ label: "Counts at version 2.179.0", tone: "muted" }]}
      references={[sources.parameterExample, sources.variableExample, sources.testExample]}
    >
      <div className="grid grid-cols-[1.45fr_1fr] items-center gap-[calc(var(--u)*2)]">
        <div className={styles.code}>
          <p className={styles.codeTitle}>
            <IconFileCode stroke={1.8} aria-hidden="true" />
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
              {rulesEntities.map(({ icon: EntityIcon, label }) => (
                <span key={label} className={styles.chip}>
                  <EntityIcon stroke={1.8} aria-hidden="true" />
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

export function MicrocosmBuildSlide() {
  return (
    <Frame
      section={sections.intro}
      title="Microcosm UK 2024–25: how the household file is built"
      scale={1.3}
      subtitle="An open-source pipeline of 54 stages, from surveys and statistics to weights"
      status={[microcosmStatus]}
      references={[sources.sourceStages, sources.imputation, sources.data]}
    >
      <Flow steps={microcosmFlow} titleLines={2} />
    </Frame>
  );
}

export function CalibrationSlide() {
  const { stats, publishers, solver } = calibrationFit;
  const largest = Math.max(...publishers.map((row) => row.count));
  return (
    <Frame
      section={sections.intro}
      title="Calibration: weights fitted to official statistics"
      scale={1.1}
      subtitle="The certified national build of 7 November 2026"
      status={[{ label: "In-sample fit", tone: "caution" }]}
      references={[sources.dashboard, sources.calibration, sources.doctrine]}
    >
      <div className={styles.kpis}>
        {stats.map((stat) => (
          <Stat key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} medium />
        ))}
      </div>
      <div className="grid grid-cols-[1.15fr_1fr] items-start gap-[calc(var(--u)*3)]">
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
        <div>
          <h2 className={styles.figureTitle}>Targets by publisher</h2>
          <div className={styles.bars}>
            {publishers.map((row) => (
              <Fragment key={row.name}>
                <span className={styles.barName}>{row.name}</span>
                <span className={styles.barTrack}>
                  <span
                    className={styles.barFill}
                    style={{ width: `${(row.count / largest) * 82}%` }}
                  />
                  <span className={styles.barCount}>{row.count}</span>
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function BusinessPolicySlide() {
  const { flow } = businessPolicy;
  return (
    <Frame
      section={sections.business}
      title="Business policy: from firm costs to households"
      scale={1.45}
      subtitle="Example: the British Industrial Competitiveness Scheme (BICS)"
      status={[tags.notBuilt, tags.noResults]}
      references={[sources.bicsGuidance, sources.bicsIa, sources.model]}
    >
      <Flow steps={flow} titleLines={2} />
    </Frame>
  );
}

export function FirmToolsSlide() {
  return (
    <Frame
      section={sections.business}
      title="What we have on the business side"
      scale={1.2}
      subtitle="Each labelled by how far along it is"
      references={[sources.firm, sources.vatThresholds, sources.youngWorkerNics, sources.inactiveNics, sources.data]}
    >
      <div className={styles.cards} style={columns(3)}>
        {firmTools.map((tool) => (
          <Card key={tool.title} icon={tool.icon} title={tool.title} text={tool.text} cardTags={tool.tags}>
            {tool.facts.length > 0 && (
              <div className={styles.cardFacts}>
                {tool.facts.map((fact) => (
                  <p key={fact.label}>
                    <strong>{fact.value}</strong> {fact.label}
                  </p>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Frame>
  );
}

// Positions on a £0bn to £40bn scale.
const pct = (bn: number) => `${(bn / 40) * 100}%`;

export function AiSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="Who bears the cost of the AI scenario?"
      scale={1.3}
      subtitle="A 2026 scenario: 7% of employees lose a year's earnings"
      status={[tags.illustrative, tags.frsNotMicrocosm]}
      references={[sources.ai]}
    >
      <div className="grid grid-cols-[1fr_1.9fr] items-center gap-[calc(var(--u)*3)]">
        <div className={styles.vsteps} style={{ gap: "calc(var(--u) * 2.4)" }}>
          <Stat icon={IconBuildingBank} value={aiShock.cost} label="Exchequer cost: mean of 50 draws" />
          <Stat icon={IconHome} value={aiShock.poverty} label="Absolute poverty before housing costs" />
        </div>
        <div className={styles.card}>
          <h2 className={styles.figureTitle}>Exchequer cost by who loses the jobs</h2>
          <div>
            <div className={styles.range}>
              <span className={styles.rangeBand} style={{ left: pct(13.9), width: `calc(${pct(20.6)} - ${pct(13.9)})` }} />
              <span className={styles.rangeMark} style={{ left: pct(13.9) }} />
              <span className={styles.rangeMark} style={{ left: pct(20.6) }} />
              <span className={`${styles.rangeMark} ${styles.rangeMarkMuted}`} style={{ left: pct(32.8) }} />
              <span className={styles.rangeLabel} style={{ left: pct(13.9) }}>
                {aiShock.patternLow}
                <span>uniform</span>
              </span>
              <span className={styles.rangeLabel} style={{ left: pct(20.6) }}>
                {aiShock.patternHigh}
                <span>top-third tilt</span>
              </span>
              <span className={styles.rangeLabel} style={{ left: pct(32.8) }}>
                {aiShock.topLoaded}
                <span>top-loaded stress test</span>
              </span>
            </div>
            <div className={styles.rangeTicks}>
              {[0, 10, 20, 30, 40].map((bn) => (
                <span key={bn} style={{ left: pct(bn) }}>
                  £{bn}bn
                </span>
              ))}
            </div>
          </div>
          <div className={styles.divider}>
            <Mini
              icon={IconChartBar}
              title={`Poverty varies less: ${aiShock.povertyRange}`}
              text="across the four same-size patterns (the teal band)"
            />
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function AbmSlide() {
  return (
    <Frame
      section={sections.business}
      title="Where an agent-based model could link"
      scale={1.15}
      subtitle="Three candidate questions, for discussion"
      status={[tags.notBuilt]}
      references={[sources.dosi, sources.gtap, sources.ai, sources.inet]}
    >
      <div className={`${styles.rows} ${styles.rowsShared}`}>
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>Policy question</p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>An agent-based model could simulate</p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>It could pass in</p>
        <span />
        <p className={`${styles.rowLabel} ${styles.rowsHead}`}>PolicyEngine can report</p>
        {abmQuestions.map((row) => (
          <Fragment key={row.question}>
            <div className={`${styles.cell} ${styles.cellLead}`}>
              <Badge icon={row.icon} />
              {row.question}
            </div>
            <span className={styles.arrow}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </span>
            <div className={`${styles.cell} ${styles.cellDashed}`}>{row.behaviour}</div>
            <span className={styles.arrow}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </span>
            <div className={`${styles.cell} ${styles.cellDashed}`}>{row.passes}</div>
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
      section={sections.macro}
      title="Links to macroeconomic models"
      scale={1.25}
      subtitle="Three possible routes, at three stages"
      references={[sources.model, ...macroLinks.map((link) => link.source)]}
    >
      <div className={styles.cards} style={columns(3)}>
        {macroLinks.map((link) => (
          <Card key={link.title} icon={link.icon} title={link.title} text={link.text} cardTags={link.tags}>
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

function SpecRows({ rows }: { rows: { icon: Icon; field: string; text?: string }[] }) {
  return (
    <dl className={`${styles.pairs} ${styles.pairTight}`}>
      {rows.map((row) => (
        <div key={row.field} className={styles.pair}>
          <Badge icon={row.icon} size="small" />
          <div>
            <dt>{row.field}</dt>
            {row.text && <dd>{row.text}</dd>}
          </div>
        </div>
      ))}
    </dl>
  );
}

export function InterfaceSlide() {
  return (
    <Frame
      section={sections.macro}
      title="One way to link: tables in, tables out"
      scale={0.9}
      subtitle="A starting point for discussion"
      references={[sources.trade, sources.model, sources.python]}
    >
      <div className={styles.interface}>
        <div className={`${styles.card} ${styles.cardCompact}`}>
          <div className={styles.cardTitleRow}>
            <h2>What another model could pass</h2>
            <StatusTag tag={tags.proposed} />
          </div>
          <SpecRows rows={interfaceSpec.inputs} />
          <div className={styles.divider}>
            <StatusTag tag={{ label: "Runs today", tone: "built" }} />
            <p className={styles.dividerText}>{interfaceToday}</p>
          </div>
        </div>
        <div className={styles.hub}>
          <div className={styles.hubRow}>
            <IconArrowRight stroke={2.2} aria-hidden="true" />
            <Badge icon={IconTable} size="large" solid />
            <IconArrowRight stroke={2.2} aria-hidden="true" />
          </div>
          <p>PolicyEngine</p>
        </div>
        <div className={`${styles.card} ${styles.cardCompact}`}>
          <div className={styles.cardTitleRow}>
            <h2>PolicyEngine can already report</h2>
            <StatusTag tag={{ label: "Existing outputs", tone: "built" }} />
          </div>
          <SpecRows rows={interfaceSpec.outputs} />
          <div className={styles.divider}>
            <div className={styles.cardTitleRow}>
              <p className={styles.dividerText}>Possible additions</p>
              <StatusTag tag={tags.proposed} />
            </div>
            <SpecRows rows={interfaceSpec.proposedOutputs} />
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function DataSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="Open code, restricted microdata, synthetic data"
      scale={1.4}
      subtitle="Models can link by exchanging tables of results"
      references={[sources.model, sources.python, sources.data, sources.firm]}
    >
      <div className={styles.cards} style={columns(3)}>
        {dataAccess.map((item) => (
          <Card key={item.title} icon={item.icon} title={item.title} text={item.text} cardTags={[item.tag]} />
        ))}
      </div>
    </Frame>
  );
}

export function PilotsSlide() {
  return (
    <Frame
      section={sections.next}
      title="Two candidate pilots"
      scale={1.15}
      subtitle="For discussion: one scenario each, passed one way to PolicyEngine"
      status={[tags.notBuilt, tags.noResults]}
      references={[sources.epd, sources.bicsGuidance, sources.trade, sources.model]}
    >
      <div className={styles.cards} style={columns(2)}>
        {pilots.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={`${styles.cardTitleRow} ${styles.titleTwoLines}`}>
              <Badge icon={item.icon} size="large" solid />
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
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame section={sections.next} title="Questions for discussion"
      scale={1.12}>
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
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-pe-teal">
              <ContactIcon size={20} stroke={1.8} aria-hidden="true" />
            </span>
            <span className="font-medium">{label}</span>
          </a>
        ))}
      </div>
    </Slide>
  );
}

export function AppendixSlide() {
  return (
    <Slide className={styles.deck}>
      <div className={styles.frame}>
        <div className={styles.body} style={bodyScale(1.3)}>
          <div>
            <p className={styles.section}>After the talk</p>
            <h1 className={styles.dividerTitle}>Appendix</h1>
            <div className={`accent-bar ${styles.bar}`} />
          </div>
          <div className={styles.minis} style={{ ...columns(4), marginTop: "calc(var(--u) * 1.2)" }}>
            {appendixContents.map((item) => (
              <div
                key={item.title}
                className={`${styles.card} ${styles.cardCompact}`}
                style={"wide" in item ? { gridColumn: "span 2" } : undefined}
              >
                <div className={styles.cardHead}>
                  <Badge icon={item.icon} size="large" />
                </div>
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function CoverageSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="What the UK model covers"
      scale={1.08}
      subtitle="Business-tax changes can be allocated by shareholding or spending"
      references={[sources.model]}
    >
      <div className={styles.cards} style={columns(4)}>
        {coverage.map((group) => (
          <div key={group.title} className={`${styles.card} ${styles.cardCompact}`}>
            <div className={styles.cardHead}>
              <Badge icon={group.icon} size="large" />
            </div>
            <h2>{group.title}</h2>
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
    </Frame>
  );
}

export function ReleaseSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="Microcosm UK data: release gates, certification and firm support"
      scale={1.15}
      subtitle="What a release checks, what a bundle fixes, what exists for firms"
      references={[sources.gates, sources.bundle, sources.certification, sources.microcosmReadme, sources.firmTargets]}
    >
      <div className={styles.cards} style={columns(3)}>
        {microcosmRelease.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.value ? undefined : item.text}
            cardTags={[item.tag]}
          >
            {item.value && (
              <div className={`${styles.stat} ${styles.statMedium}`} style={{ marginTop: "calc(var(--u) * 0.6)" }}>
                <p className={styles.statValue}>{item.value}</p>
                <p className={styles.statLabel} style={{ marginTop: 0 }}>
                  {item.text}
                </p>
              </div>
            )}
            <Bullets items={item.points} />
          </Card>
        ))}
      </div>
    </Frame>
  );
}

export function TradeSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="Who bears the cost of trade changes?"
      scale={1.2}
      subtitle="Four UK trade events of 2021–26, traced to households"
      status={[{ label: "Earlier FRS datasets, not Microcosm UK", tone: "muted" }]}
      references={[sources.trade]}
    >
      <div className="grid grid-cols-[1.5fr_1fr] items-center gap-[calc(var(--u)*3)]">
        <div className={styles.cards} style={columns(2)}>
          {tradeEvents.map((event) => (
            <div key={event.title} className={`${styles.card} ${styles.cardCompact}`}>
              <div className={styles.cardTitleRow}>
                <Badge icon={event.icon} />
                <h2>{event.title}</h2>
              </div>
              <p>{event.text}</p>
            </div>
          ))}
        </div>
        <div>
          <p className={styles.rowLabel}>The energy surge, 2022–23</p>
          <div className={styles.stat} style={{ marginTop: "calc(var(--u) * 0.7)" }}>
            <Badge icon={IconFlame} size="large" />
            <p className={styles.statValue}>{tradeEnergy.offset}</p>
          </div>
          <p className={styles.statLabel}>
            of the rise in energy costs offset by the Energy Price Guarantee and the Energy Bills
            Support Scheme
          </p>
          <div className={styles.chips}>
            <span className={styles.chip}>{tradeEnergy.range}</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function UsesSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="Use, evaluation and engagement"
      scale={1.1}
      references={[sources.no10, sources.hmt, sources.obr, sources.hansard, sources.nuffield]}
    >
      <div className={styles.cards} style={{ gridTemplateColumns: "1.15fr 1.15fr 0.8fr" }}>
        {uses.map((group) => (
          <div key={group.title} className={`${styles.card} ${styles.cardCompact}`}>
            <div className={styles.cardTitleRow}>
              <Badge icon={group.icon} size="large" />
              <h2>{group.title}</h2>
            </div>
            <Bullets items={group.items} />
          </div>
        ))}
      </div>
    </Frame>
  );
}
