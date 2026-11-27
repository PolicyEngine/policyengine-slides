import { Fragment, type CSSProperties, type ReactNode } from "react";
import katex from "katex";
import {
  IconAlertTriangle,
  IconArrowRight,
  IconArrowsSplit,
  IconBuildingBank,
  IconInfoCircle,
  IconMail,
  IconUserMinus,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";
import BasePathImage from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import { useSlideshowContextSafe } from "@/components/core/SlideshowContext";
import { speakers } from "@/lib/speakers";
import { whoWeAre } from "../../bist-2026/content";
import {
  absorption,
  absorptionChips,
  absorptionVariants,
  breakEvenChips,
  breakEvens,
  buildStages,
  calibrationFacts,
  calibrationLegend,
  targetRows,
  calibrationTex,
  central,
  centralChips,
  channels,
  closure,
  closurePoints,
  takeaways,
  nextSteps,
  costMovers,
  dataFacts,
  drawFacts,
  drawPoints,
  drawUses,
  exposureBuild,
  exposureNotes,
  exposureWhy,
  directionPoints,
  growthDashboard,
  imputationLegend,
  imputationPoints,
  imputationTex,
  incidenceChips,
  decompositionPoints,
  gridPoints,
  indexPoints,
  indexRows,
  jobLoss,
  marginWhy,
  margins,
  methodFlow,
  openQuestions,
  outcomeDefs,
  parts,
  policyPoints,
  policyRows,
  scenarioChips,
  scenarioInputs,
  shockCards,
  sources,
  transitionPoints,
  transitionStats,
  type Chip,
  type PartKey,
  type Point,
  type Stat,
} from "../content";
import DashboardEmbed from "./DashboardEmbed";
import styles from "./deck.module.css";
import fps from "./fps.module.css";

const enter = (index: number) => ({ "--i": index }) as CSSProperties;
const bodyScale = (scale: number) => ({ "--u": `calc(var(--u0) * ${scale})` }) as CSSProperties;
const columns = (count: number) => ({ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` });

function Badge({ icon: IconComponent, size }: { icon: Icon; size?: "small" | "large" }) {
  const sizeClass = size === "small" ? styles.badgeSmall : size === "large" ? styles.badgeLarge : "";
  return (
    <span className={`${styles.badge} ${sizeClass}`}>
      <IconComponent stroke={1.75} aria-hidden="true" />
    </span>
  );
}

/** The talk's five parts along the top of a slide, the current one in teal. */
function PartNav({ section }: { section: PartKey }) {
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
  scale = 1.2,
  fill = false,
}: {
  section?: PartKey;
  title: string;
  subtitle?: string;
  children: ReactNode;
  scale?: number;
  fill?: boolean;
}) {
  const deck = useSlideshowContextSafe();
  const current = deck?.currentSlide;
  return (
    <Slide className={styles.deck}>
      {current !== undefined && <span className={fps.pageNumber}>{current + 1} / {deck?.totalSteps}</span>}
      <div className={styles.frame}>
        <header className={styles.frameIn}>
          {section && <PartNav section={section} />}
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

/** Icon rows: a tinted icon, a bold lead and a one-line tail. */
function Points({ items, cols = 1, head }: { items: Point[]; cols?: number; head?: string }) {
  return (
    <div>
      {head && <p className={fps.sideHead}>{head}</p>}
      <div className={fps.points} style={columns(cols)}>
        {items.map((item, index) => (
          <div key={item.lead} className={`${fps.point} ${styles.enter}`} style={enter(index)}>
            <span className={fps.pointIcon}>
              <item.icon stroke={1.75} aria-hidden="true" />
            </span>
            <div>
              <p className={fps.pointLead}>{item.lead}</p>
              {item.text && <p className={fps.pointText}>{item.text}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Small grey chips in place of footnote paragraphs. */
function Chips({ items }: { items: Chip[] }) {
  return (
    <div className={`${fps.chips} ${fps.chipsNote}`}>
      {items.map((item) => (
        <span key={item.text} className={fps.chip}>
          <item.icon stroke={1.9} aria-hidden="true" />
          {item.text}
        </span>
      ))}
    </div>
  );
}

/** A headline number with a tinted icon beside it. */
function StatKpi({ stat, small = false, index = 0 }: { stat: Stat; small?: boolean; index?: number }) {
  return (
    <div className={`${fps.kpi} ${small ? fps.kpiSmall : ""} ${styles.enter}`} style={enter(index)}>
      <div className={fps.kpiTop}>
        <span className={fps.kpiIcon}>
          <stat.icon stroke={1.75} aria-hidden="true" />
        </span>
        <p className={fps.kpiValue}>{stat.value}</p>
      </div>
      <p className={fps.kpiLabel}>{stat.label}</p>
    </div>
  );
}

function Stats({ items, small = false }: { items: Stat[]; small?: boolean }) {
  return (
    <div className={fps.kpis} style={columns(items.length)}>
      {items.map((stat, index) => (
        <StatKpi key={stat.value} stat={stat} small={small} index={index} />
      ))}
    </div>
  );
}

function Figure({ src, width, height, alt, caption }: { src: string; width: number; height: number; alt: string; caption: string }) {
  return (
    <figure className={fps.figure}>
      <BasePathImage src={src} alt={alt} width={width} height={height} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

/** Maths, rendered to HTML when the slide renders. */
function Tex({ tex, inline = false }: { tex: string; inline?: boolean }) {
  const html = katex.renderToString(tex, { displayMode: !inline, throwOnError: false });
  // KaTeX output from fixed strings in this file, not user input.
  if (inline) {
    // eslint-disable-next-line react/no-danger
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  // eslint-disable-next-line react/no-danger
  return <div className={styles.equation} dangerouslySetInnerHTML={{ __html: html }} />;
}

// ---------- Cover and in brief ----------

export function TitleSlide() {
  const speaker = speakers["vahid-ahmadi"];
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center justify-center space-y-9">
        <div className="h-1 w-20 rounded-full bg-white/30" />
        <h1 className="font-display text-center text-6xl font-bold text-white">Who bears the AI shock?</h1>
        <p className="text-center text-3xl text-white opacity-85">The distributional and fiscal incidence in the UK</p>
        <div className="mt-2 flex flex-col items-center text-center">
          <div className="relative mb-3 h-28 w-28 overflow-hidden rounded-full border-2 border-white/40">
            <BasePathImage src="/images/fps-berlin-2026/vahid-ahmadi.jpg" alt={speaker.name} fill className="object-cover" />
          </div>
          <p className="text-xl font-semibold text-white">{speaker.name}</p>
          <p className="text-base font-light text-white/80">Research Associate</p>
        </div>
        <div className="pt-2 text-center text-lg text-white opacity-80">
          <p>2026 Franco-German Fiscal Policy Seminar</p>
          <p>AI and the Future of Public Finances</p>
        </div>
      </div>
    </Slide>
  );
}

export function AgendaSlide() {
  return (
    <Frame title="Agenda" subtitle="25 minutes, then discussion" scale={1.05}>
      <div className={fps.agenda}>
        <div className={`${fps.agendaRow} ${styles.enter}`} style={enter(0)}>
          <span className={fps.agendaNum} />
          <span className={fps.kpiIcon}>
            <IconInfoCircle stroke={1.75} aria-hidden="true" />
          </span>
          <span className={fps.agendaTitle}>Introduction</span>
          <span className={fps.agendaText}>PolicyEngine, the open-source model behind the paper</span>
        </div>
        {parts.map((part, index) => (
          <div key={part.key} className={`${fps.agendaRow} ${styles.enter}`} style={enter(index + 1)}>
            <span className={fps.agendaNum}>{index + 1}</span>
            <span className={fps.kpiIcon}>
              <part.icon stroke={1.75} aria-hidden="true" />
            </span>
            <span className={fps.agendaTitle}>{part.title}</span>
            <span className={fps.agendaText}>{part.agenda}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** A divider slide that opens one of the five parts. */
function SectionSlide({ section }: { section: PartKey }) {
  const index = parts.findIndex((part) => part.key === section);
  const part = parts[index];
  const deck = useSlideshowContextSafe();
  const current = deck?.currentSlide;
  return (
    <Slide className={styles.deck}>
      {current !== undefined && <span className={fps.pageNumber}>{current + 1} / {deck?.totalSteps}</span>}
      <div className={styles.frame}>
        <header className={styles.frameIn}>
          <PartNav section={section} />
        </header>
        <div className={fps.section}>
          <span className={fps.sectionIcon}>
            <part.icon stroke={1.5} aria-hidden="true" />
          </span>
          <p className={fps.sectionNum}>Part {index + 1}</p>
          <h1 className={fps.sectionTitle}>{part.title}</h1>
          <p className={fps.sectionText}>{part.agenda}</p>
        </div>
      </div>
    </Slide>
  );
}

export const SectionQuestionSlide = () => <SectionSlide section="question" />;
export const SectionMethodSlide = () => <SectionSlide section="method" />;
export const SectionCentralSlide = () => <SectionSlide section="central" />;
export const SectionComparisonsSlide = () => <SectionSlide section="comparisons" />;
export const SectionSensitivitySlide = () => <SectionSlide section="sensitivity" />;

// ---------- 1. The question ----------

export function ExposureSlide() {
  const maxRate = Math.max(...jobLoss.map((row) => row.rate));
  return (
    <Frame
      section="question"
      title="The most exposed jobs are well paid, so who is hit sets the cost"
      subtitle="Assumed job-loss rate by occupation group, following each group's AI exposure score"
      scale={1.05}
      fill
    >
      <div className={`${fps.split} ${fps.splitWide}`}>
        <table className={`${fps.table} ${fps.compact}`}>
          <thead>
            <tr>
              <th>Occupation group</th>
              <th className={fps.num}>Job-loss rate</th>
            </tr>
          </thead>
          <tbody>
            {jobLoss.map((row) => (
              <tr key={row.group}>
                <td className={fps.rowName}>{row.group}</td>
                <td className={fps.num}>
                  <span className={fps.rateCell}>
                    {row.rate.toFixed(1)}%
                    <span className={fps.rateTrack}>
                      <span className={fps.rateFill} style={{ display: "block", width: `${(row.rate / maxRate) * 100}%` }} />
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Points items={exposureWhy} head="Why who is hit matters" />
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame section="question" title="The size of the shock leaves two questions open" subtitle="I hold the size fixed, then test five rules for who loses the job, and job loss against wage cuts" scale={1.15}>
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(2)}>
        {openQuestions.map((question, index) => (
          <div key={question.title} className={`${styles.card} ${styles.enter}`} style={enter(index)}>
            <div className={fps.kpiHead}>
              <Badge icon={question.icon} size="large" />
              <h2 style={{ margin: 0 }}>{question.title}</h2>
            </div>
            <div style={{ marginTop: "calc(var(--u) * 1.6)" }}>
              <Points items={question.views} />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ---------- 2. Data and method ----------

function Flow({ steps }: { steps: { icon: Icon; title: string; text: string; owner?: string }[] }) {
  return (
    <div className={styles.flow} style={{ gridTemplateColumns: steps.map(() => "minmax(0, 1fr)").join(" auto ") }}>
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          {index > 0 && (
            <div className={styles.arrow} style={{ gridRow: 1 }}>
              <IconArrowRight stroke={2.2} aria-hidden="true" />
            </div>
          )}
          <div className={`${styles.step} ${styles.enter}`} style={{ gridRow: 1, ...enter(index) }}>
            <div className={styles.stepTop}>
              <Badge icon={step.icon} />
              <span className={styles.stepMarks}>
                <span className={styles.stepIndex}>{index + 1}</span>
              </span>
            </div>
            {step.owner && <p className={styles.owner}>{step.owner}</p>}
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export function MethodSlide() {
  return (
    <Frame
      section="method"
      title="From occupation exposure to household incomes"
      subtitle="The same tax-benefit model, run on the data before and after the shock"
      scale={1.15}
    >
      <Flow steps={methodFlow} />
      <Points items={outcomeDefs} cols={3} head="Three outcomes, under 2027–28 tax and benefit rules" />
    </Frame>
  );
}

export function ScenarioSlide() {
  return (
    <Frame
      section="method"
      title="The shock has three channels: job loss, pay, capital income"
      subtitle="Step 3: a scenario, not a forecast. Ten years of adoption applied in one year (Briggs and Kodnani 2023, via Doorley et al. 2026)"
      scale={0.94}
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(3)}>
        {scenarioInputs.map((stat, index) => (
          <div key={stat.value} className={`${styles.card} ${fps.shockCard} ${styles.enter}`} style={enter(index)}>
            <p className={fps.shockTitle}>
              <span className={fps.kpiIcon}>
                <stat.icon stroke={1.75} aria-hidden="true" />
              </span>
              {shockCards[index].title}
            </p>
            <div className={fps.kpiTop}>
              <span className={fps.kpiValue}>{stat.value}</span>
              <span className={fps.kpiLabel} style={{ marginTop: 0 }}>{shockCards[index].plain}</span>
            </div>
            <p className={fps.pointText}>{shockCards[index].detail}</p>
          </div>
        ))}
      </div>
      <div>
        <p className={fps.sideHead}>How the shock is applied</p>
        <Chips items={scenarioChips} />
      </div>
    </Frame>
  );
}

// ---------- PolicyEngine and the method in detail ----------

// The organisation facts and government logos are the BIST deck's
// (bist-2026/content.ts, whoWeAre), which pins each claim to its source.
type LogoOrg = {
  name: string;
  logo?: string;
  width?: number;
  pixelHeight?: number;
  height?: number;
  darken?: boolean;
  caption?: string;
};

// US public bodies, as the other PolicyEngine decks in this repo state them:
// BEA (Distribution of Personal Income technical document, June 2026), the
// Joint Economic Committee (Immigration Fiscal Impact Calculator) and the
// Atlanta Fed (memorandum of understanding; Policy Rules Database).
const usBodies: LogoOrg[] = [
  { name: "Bureau of Economic Analysis", logo: "/logos/organizations/bea.png", width: 1349, pixelHeight: 508, height: 3.4, caption: "Runs it for its personal income distribution" },
  { name: "Joint Economic Committee", logo: "/logos/organizations/jec.png", width: 400, pixelHeight: 400, height: 3.8, caption: "Congressional committee staff built a calculator on it" },
  { name: "Federal Reserve Bank of Atlanta", logo: "/logos/organizations/atlanta-fed.png", width: 4118, pixelHeight: 274, height: 1.9, caption: "Partnership on its Policy Rules Database" },
];

function LogoRow({ orgs }: { orgs: readonly LogoOrg[] }) {
  return (
    <div className={fps.logos} style={columns(orgs.length)}>
      {orgs.map((org) => (
        <div key={org.name} className={fps.logoCell}>
          <span className={fps.logoMark}>
            {org.logo ? (
              <BasePathImage
                src={org.logo}
                alt={`${org.name} logo`}
                width={org.width ?? 1}
                height={org.pixelHeight ?? 1}
                className={org.darken ? fps.logoDarken : undefined}
                style={{ height: `calc(var(--u) * ${org.height})`, width: "auto" }}
              />
            ) : (
              <span className={fps.wordmark} style={{ display: "inline-flex", alignItems: "center", gap: "calc(var(--u) * 0.6)" }}>
                <IconBuildingBank stroke={1.6} aria-hidden="true" style={{ width: "calc(var(--u) * 3)", height: "calc(var(--u) * 3)" }} />
                {org.name}
              </span>
            )}
          </span>
          <p className={fps.logoCaption}>
            {org.caption === "Built 10ds-microsim on it" ? "10 Downing Street's data science team built a model on it" : org.caption}
          </p>
        </div>
      ))}
    </div>
  );
}

export function PolicyEngineSlide() {
  const { facts, government } = whoWeAre;
  return (
    <Frame
      title="PolicyEngine: the open-source model behind the paper"
      subtitle="Tax-benefit microsimulation for the UK and the US"
      scale={0.98}
    >
      <div className={fps.kpis} style={columns(3)}>
        {facts.map((fact, index) => (
          <div key={fact.title} className={`${fps.kpi} ${styles.enter}`} style={enter(index)}>
            <div className={fps.kpiHead}>
              <span className={fps.kpiIcon}>
                <fact.icon stroke={1.75} aria-hidden="true" />
              </span>
              <p className={fps.kpiTitle} style={{ margin: 0 }}>
                {fact.title}
              </p>
            </div>
            <p className={fps.kpiLabel}>
              {fact.text}
              {"cite" in fact && fact.cite ? ` (${fact.cite.text.replace("et al., 2026,", "et al. 2026,")})` : ""}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className={fps.sideHead}>UK public bodies</p>
        <LogoRow orgs={government} />
        <p className={fps.sideHead} style={{ marginTop: "calc(var(--u) * 1.6)" }}>US public bodies</p>
        <LogoRow orgs={usBodies} />
      </div>
    </Frame>
  );
}

export function ExposureMethodSlide() {
  return (
    <Frame
      section="method"
      title="Exposure: what AI can do, scaled down where it helps the worker"
      subtitle="Step 2: an exposure score for each of nine occupation groups"
      scale={1.0}
    >
      <Flow steps={exposureBuild} />
      <div className={`${fps.split} ${fps.splitEven}`} style={{ alignItems: "center" }}>
        <div>
          <p className={fps.eqTag}>Adjusted exposure of each group</p>
          <Tex tex="\text{C-AIOE}_l = \text{AIOE}_l \times \bigl(1 - (\theta_l - \theta_{\min})\bigr)" />
          <p className={fps.pointText}>Higher θ, smaller factor: AI that helps the worker counts less as exposure</p>
          <p className={fps.eqTag} style={{ marginTop: "calc(var(--u) * 1.2)" }}>Shift so the least exposed group is zero</p>
          <Tex tex="\widetilde{C}_l = \text{C-AIOE}_l - \min_k \text{C-AIOE}_k \;\ge 0" />
        </div>
        <Points items={exposureNotes} />
      </div>
    </Frame>
  );
}

export function DataSlide() {
  return (
    <Frame
      section="method"
      title="Microcosm: the Family Resources Survey, completed and reweighted"
      subtitle="Step 1: PolicyEngine's calibrated UK household data, 2024–25 survey projected to 2027–28"
      scale={1.02}
    >
      <Stats items={dataFacts} />
      <div style={{ marginTop: "calc(var(--u) * 1.5)" }}>
        <Flow steps={buildStages} />
      </div>
    </Frame>
  );
}

export function ImputationSlide() {
  return (
    <Frame
      section="method"
      title="Imputation draws from the conditional distribution, not the mean"
      subtitle="Missing variables drawn from donor surveys, one at a time"
      scale={1.05}
    >
      <div className={`${fps.split} ${fps.splitEven}`} style={{ alignItems: "center" }}>
        <div>
          <p className={fps.eqLabel}>For record i and variable v = 1, …, V, in a fixed order</p>
          <p className={fps.eqTag}>Regime gate (zero or positive)</p>
          <Tex tex={imputationTex.gate} />
          <p className={fps.eqTag}>Draw among non-zero donors</p>
          <Tex tex={imputationTex.draw} />
          <div className={fps.chips} style={{ marginTop: "calc(var(--u) * 1)" }}>
            {imputationLegend.map((item) => (
              <span key={item.text} className={fps.chip}>
                <Tex tex={item.tex} inline />
                {item.text}
              </span>
            ))}
          </div>
        </div>
        <Points items={imputationPoints} />
      </div>
    </Frame>
  );
}

export function CalibrationSlide() {
  return (
    <Frame
      section="method"
      title="Calibration: 98.7% of 1,514 official totals matched within 10%"
      subtitle="One weight per household, fitted to published totals (7 November build, in sample)"
      scale={0.94}
    >
      <div className={fps.split} style={{ alignItems: "start" }}>
        <table className={`${fps.table} ${fps.calTable}`}>
          <thead>
            <tr>
              <th>Publisher</th>
              <th>Targets by topic</th>
              <th className={fps.num}>Targets</th>
              <th className={fps.num}>Within 10%</th>
            </tr>
          </thead>
          <tbody>
            {targetRows.map((row, index) => (
              <tr key={row.topic} className={index > 0 && targetRows[index - 1].source === row.source ? fps.sameBlock : undefined}>
                <td className={fps.rowName}>{index > 0 && targetRows[index - 1].source === row.source ? "" : row.source}</td>
                <td>{row.topic}</td>
                <td className={fps.num}>{row.count.toLocaleString("en-GB")}</td>
                <td className={fps.num}>{row.within.toLocaleString("en-GB")}</td>
              </tr>
            ))}
            <tr className={fps.rowCentral}>
              <td className={fps.rowName}>Total</td>
              <td>38 families, equal weight</td>
              <td className={fps.num}>{targetRows.reduce((t, r) => t + r.count, 0).toLocaleString("en-GB")}</td>
              <td className={fps.num}>{targetRows.reduce((t, r) => t + r.within, 0).toLocaleString("en-GB")}</td>
            </tr>
          </tbody>
        </table>
        <div className={fps.kpis} style={{ gridTemplateColumns: "1fr", gap: "calc(var(--u) * 1.4)" }}>
          <div className={fps.eqBox}>
            <Tex tex={calibrationTex} />
          </div>
          <Points items={calibrationLegend} />
          {calibrationFacts.slice(2).map((fact) => (
            <div key={fact.value} className={fps.kpiInline}>
              <div className={fps.kpiTop}>
                <span className={fps.kpiIcon}>
                  <fact.icon stroke={1.75} aria-hidden="true" />
                </span>
                <p className={fps.kpiValue}>{fact.value}</p>
              </div>
              <p className={fps.kpiLabel}>{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function DrawsSlide() {
  return (
    <Frame
      section="method"
      title="Who loses the job is drawn at random, so results average many draws"
      subtitle="Within each occupation group's quota"
      scale={1.12}
    >
      <Stats items={drawFacts} />
      <Points items={drawPoints} cols={2} />
      <Chips items={drawUses} />
    </Frame>
  );
}

// ---------- 3. The central case ----------

export function CentralSlide() {
  // Scale the waterfall to the gross displacement cost.
  const top = channels[0].value;
  const pct = (value: number) => `${(Math.abs(value) / top) * 100}%`;
  const afterWage = top + channels[1].value;
  return (
    <Frame section="central" title="£7.3bn a year, the net of flows several times larger" subtitle="Central case: job losses follow exposure; 2027–28, average of 50 draws" scale={0.86}>
      <Stats items={central} small />
      <Chips items={centralChips} />
      <div>
        <p className={fps.sideHead}>The three channels alone, £bn a year (20 draws)</p>
        <div className={fps.waterfall}>
          <p className={fps.wfLabel}>
            {channels[0].label}
            <span>{channels[0].text}</span>
          </p>
          <div className={fps.wfTrack}>
            <div className={`${fps.wfBar} ${fps.wfCost}`} style={{ left: 0, width: "100%" }}>
              +{channels[0].value}
            </div>
          </div>
          <p className={fps.wfLabel}>
            {channels[1].label}
            <span>{channels[1].text}</span>
          </p>
          <div className={fps.wfTrack}>
            <div className={`${fps.wfBar} ${fps.wfGain}`} style={{ left: pct(afterWage), width: pct(channels[1].value) }}>
              {channels[1].value.toString().replace("-", "−")}
            </div>
          </div>
          <p className={fps.wfLabel}>
            {channels[2].label}
            <span>{channels[2].text}</span>
          </p>
          <div className={fps.wfTrack}>
            <div className={`${fps.wfBar} ${fps.wfGain}`} style={{ left: pct(afterWage + channels[2].value), width: pct(channels[2].value) }}>
              {channels[2].value.toString().replace("-", "−")}
            </div>
          </div>
          <p className={fps.wfLabel}>
            Net cost
            <span>20 of the 50 draws</span>
          </p>
          <div className={fps.wfTrack}>
            <div className={`${fps.wfBar} ${fps.wfNet}`} style={{ left: 0, width: pct(7.2) }}>
              7.2
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function TransitionSlide() {
  return (
    <Frame
      section="central"
      title="Job loss falls mostly in the upper half of the distribution"
      subtitle="Share of each income decile moving from employment to unemployment"
      scale={1.05}
      fill
    >
      <div className={`${fps.split} ${fps.splitWide} ${fps.figureShort}`} style={{ alignItems: "center" }}>
        <Figure
          src="/images/fps-berlin-2026/fig4_1_transition.png"
          width={1600}
          height={900}
          alt="Share of each income decile moving from employment to unemployment, rising from about 0.8 per cent in the bottom decile to about 5.6 per cent in the top"
          caption="Central case, average of 50 draws; error bars: 95% interval for the mean (random draws only)"
        />
        <div style={{ display: "grid", gap: "calc(var(--u) * 2)" }}>
          {transitionStats.map((stat, index) => (
            <StatKpi key={stat.value} stat={stat} small index={index} />
          ))}
          <Points items={transitionPoints} />
        </div>
      </div>
    </Frame>
  );
}

export function DecompositionSlide() {
  return (
    <Frame
      section="central"
      title="The income loss falls in the upper-middle deciles"
      subtitle="Change by decile in earnings, benefits and taxes, as a share of baseline disposable income (one draw)"
      scale={1.0}
      fill
    >
      <div className={`${fps.split} ${fps.splitWide} ${fps.figureShort}`} style={{ alignItems: "center" }}>
        <Figure
          src="/images/fps-berlin-2026/fig4_4_decomposition.png"
          width={1800}
          height={900}
          alt="Change in disposable income, market income, benefits and taxes by income decile, central case, one draw"
          caption="Central case, one draw; the residual is council tax and pension deductions"
        />
        <Points items={decompositionPoints} />
      </div>
    </Frame>
  );
}

export function AbsorptionSlide() {
  return (
    <Frame
      section="central"
      title="The system absorbs 29% of the loss, almost all through lower taxes"
      subtitle="To isolate job loss: a smaller run with no pay or capital offsets (1.67% of employees, the size of the OBR's scenario)"
      scale={0.9}
    >
      <Stats items={absorption} small />
      <Points items={absorptionVariants} cols={2} head="Why benefits respond so little" />
      <Chips items={absorptionChips} />
    </Frame>
  );
}

// ---------- 4. Who loses the job, and how ----------

export function IncidenceSlide() {
  return (
    <Frame
      section="comparisons"
      title="Who loses the job changes the cost a lot, and poverty very little"
      subtitle="Same 2.04m job losses, five rules: uniform (equal chance), junior-concentrated (under-25s), exposure-proportional (central), expertise compression (exposed high earners), top-loaded stress test"
      scale={0.88}
      fill
    >
      <div className={fps.figureShort}>
        <Figure
          src="/images/fps-berlin-2026/incidence_families.png"
          width={2179}
          height={915}
          alt="Left: share displaced by decile under five rules. Right: cost to the budget against the rise in absolute poverty for each rule."
          caption=""
        />
      </div>
      <Chips items={incidenceChips} />
    </Frame>
  );
}

export function MarginSlide() {
  return (
    <Frame
      section="comparisons"
      title="As wage cuts, the same loss costs more and raises poverty less"
      subtitle="Same total earnings loss, spread as wage cuts graded by exposure (20 draws)"
      scale={0.86}
    >
      <div className={fps.margins}>
        <div />
        <div className={fps.marginHead}>
          <Badge icon={IconUserMinus} size="small" />
          Job loss
        </div>
        <div className={fps.marginHead}>
          <Badge icon={IconArrowsSplit} size="small" />
          Wage cuts
        </div>
        <div className={fps.marginLabel}>
          Cost to the budget, £bn a year
          <span>the same pay and capital offsets netted from both</span>
        </div>
        <div className={fps.marginValue}>{margins.job.cost.toFixed(1)}</div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>{margins.wage.cost.toFixed(1)}</div>
        <div className={fps.marginLabel}>
          Rise in absolute poverty (points)
          <span>before housing costs</span>
        </div>
        <div className={fps.marginValue}>+{margins.job.bhc.toFixed(2)}</div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>+{margins.wage.bhc.toFixed(2)}</div>
        <div className={fps.marginLabel}>
          Budget cost per £1 of earnings lost
          <span>job loss or wage cut alone, employer NI included</span>
        </div>
        <div className={fps.marginValue}>{margins.job.perPound}p</div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>{margins.wage.perPound}p</div>
      </div>
      <Points items={marginWhy} cols={3} />
    </Frame>
  );
}

// ---------- 5. What moves the cost, and policy ----------

export function BreakEvenSlide() {
  return (
    <Frame
      section="sensitivity"
      title="Three assumptions can each turn the cost to zero"
      subtitle="The £7.3bn is a small net of large flows; the value at which each brings the cost to zero"
      scale={1.02}
    >
      <div className={fps.split}>
        <div>
          {breakEvens.map((row) => (
            <div key={row.label} className={fps.breakEven}>
              <span className={fps.kpiIcon}>
                <row.icon stroke={1.75} aria-hidden="true" />
              </span>
              <span className={fps.breakEvenLabel}>
                {row.label}
                <span className={fps.breakEvenNote}>{row.note}</span>
              </span>
              <span className={fps.breakEvenFrom}>
                <span className={fps.breakEvenCaption}>Central</span>
                {row.central}
              </span>
              <span className={fps.breakEvenTo}>
                <span className={fps.breakEvenCaption}>Break-even</span>
                {row.breakEven}
              </span>
            </div>
          ))}
        </div>
        <Points items={costMovers} head="Other assumptions: the central cost becomes" />
      </div>
      <Chips items={breakEvenChips} />
    </Frame>
  );
}

export function GridSlide() {
  return (
    <Frame
      section="sensitivity"
      title="Average income falls unless pay rises keep pace with job loss"
      subtitle="Change in average household disposable income (%), by job-loss rate and pay rise (one draw)"
      scale={1.0}
      fill
    >
      <div className={`${fps.split} ${fps.splitWide} ${fps.figureShort}`} style={{ alignItems: "center" }}>
        <Figure
          src="/images/fps-berlin-2026/fig4_5_disposable_grid.png"
          width={2000}
          height={1000}
          alt="Grid of changes in average household disposable income by job-loss rate (0 to 10 per cent) and pay rise (0 to 5 per cent)"
          caption="Across: job-loss rate. Up: pay rise for those who stay. One draw, capital shock on"
        />
        <Points items={gridPoints} />
      </div>
    </Frame>
  );
}

export function ClosureSlide() {
  // Position on a scale from −5 to +16 £bn.
  const lo = -5;
  const hi = 16;
  const at = (value: number) => `${((value - lo) / (hi - lo)) * 100}%`;
  return (
    <Frame
      section="sensitivity"
      title="Where the lost wage bill goes decides whether the budget gains or loses"
      subtitle={`The rise in capital income was assumed; here part of the £${closure.labourFall}bn fall in labour income returns as company profit, taxed at 25% (one draw)`}
      scale={1.05}
    >
      <div className={fps.rangeBox}>
        <div className={fps.rangeLine}>
          <span className={fps.rangeZero} style={{ left: at(0) }} />
          <span className={`${fps.rangeTag} ${fps.rangeAbove}`} style={{ left: at(0), transform: "translateX(-20%)" }}>
            Zero
          </span>
          <span className={fps.rangeTick} style={{ left: at(-0.9) }} />
          <span className={`${fps.rangeTag} ${fps.rangeBelow}`} style={{ left: at(-0.9), transform: "translateX(-30%)" }}>
            <strong>£0.9bn gain</strong>
            all of it becomes UK-owned profit
          </span>
          <span className={fps.rangeTick} style={{ left: at(7.3) }} />
          <span className={`${fps.rangeTag} ${fps.rangeAbove}`} style={{ left: at(7.3) }}>
            <strong>£7.3bn</strong>
            central case, one draw
          </span>
          <span className={fps.rangeTick} style={{ left: at(14.4) }} />
          <span className={`${fps.rangeTag} ${fps.rangeBelow}`} style={{ left: at(14.4), transform: "translateX(-75%)" }}>
            <strong>£14.4bn cost</strong>
            half becomes profit, half UK-owned
          </span>
        </div>
      </div>
      <div style={{ marginTop: "calc(var(--u) * 3)" }}>
        <Points items={closurePoints} cols={3} />
      </div>
    </Frame>
  );
}

export function PolicySlide() {
  return (
    <Frame
      section="sensitivity"
      title="Three stylised policy responses: cost per point of poverty avoided"
      subtitle="Each added on top of the central shock, 2027–28 (average of 50 draws)"
      scale={1.05}
    >
      <table className={fps.table}>
        <thead>
          <tr>
            <th>Reform</th>
            <th className={fps.num}>Annual cost (£bn)</th>
            <th className={fps.num}>Change in absolute poverty (points)</th>
            <th className={fps.num}>£bn per point of poverty avoided</th>
          </tr>
        </thead>
        <tbody>
          {policyRows.map((row) => (
            <tr key={row.reform}>
              <td>
                <span className={fps.rowName}>{row.reform}</span>
                <span className={fps.rowText}>{row.text}</span>
              </td>
              <td className={fps.num}>{row.cost}</td>
              <td className={fps.num}>{row.bhc}</td>
              <td className={fps.num}>{row.perPoint}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Points items={policyPoints} cols={3} />
    </Frame>
  );
}

export function ConclusionsSlide() {
  return (
    <Frame title="Conclusions and next steps" subtitle="The size of the shock is held fixed throughout" scale={1.05}>
      <div className={`${fps.split} ${fps.splitEven}`}>
        <div>
          <p className={fps.sideHead}>Findings</p>
          <div className={fps.numbered}>
            {takeaways.map((item, index) => (
              <div key={item.title} className={styles.enter} style={enter(index)}>
                <span className={fps.kpiIcon}>
                  <item.icon stroke={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h2>{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Points items={nextSteps} head="Where next" />
      </div>
    </Frame>
  );
}

export function DirectionsSlide() {
  return (
    <Frame title="Beyond this paper" subtitle="Other directions for the same tools" scale={1.05} fill>
      <div className={fps.directionsSplit}>
        <div className={fps.embed}>
          <DashboardEmbed src={growthDashboard.href} title={growthDashboard.title} image="/images/fps-berlin-2026/dashboard.jpg" />
        </div>
        <div style={{ display: "grid", gap: "calc(var(--u) * 2)" }}>
          <Points items={directionPoints} />
          <Chips items={[{ icon: IconAlertTriangle, text: "Left: our AI and the UK economy dashboard (preliminary)" }]} />
        </div>
      </div>
    </Frame>
  );
}

const contacts: { label: string; url: string; Icon: Icon }[] = [
  { label: "vahid@policyengine.org", url: "mailto:vahid@policyengine.org", Icon: IconMail },
  { label: "policyengine.org", url: "https://www.policyengine.org", Icon: IconWorld },
];

const qrCodes: { src: string; url: string; caption: string; alt: string }[] = [
  { src: "/images/fps-berlin-2026/ssrn-qr.svg", url: sources.ssrn.href, caption: "Read the paper on SSRN", alt: "QR code linking to the paper on SSRN" },
  { src: "/images/fps-berlin-2026/linkedin-qr.svg", url: sources.linkedin.href, caption: "Connect with me on LinkedIn", alt: "QR code linking to Vahid Ahmadi's LinkedIn profile" },
];

export function ClosingSlide() {
  return (
    <Slide isEnd className={styles.deck}>
      <h1 className={`${styles.closingTitle} font-display font-bold text-center`} style={{ marginTop: "calc(var(--u0) * 4)" }}>
        Thank you
      </h1>
      <p className={`${styles.closingSubtitle} text-center text-white/85`}>Who bears the AI shock?</p>
      <div className={`${styles.closingContacts} grid grid-cols-2 self-center`} style={{ marginTop: "calc(var(--u0) * 2.5)", width: "calc(var(--u0) * 56)" }}>
        {contacts.map(({ label, url, Icon: ContactIcon }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 transition-colors hover:bg-white/20"
          >
            <Badge icon={ContactIcon} size="small" />
            <span className="text-lg font-medium">{label}</span>
          </a>
        ))}
      </div>
      <div className={fps.qrRow}>
        {qrCodes.map((qr) => (
          <a
            key={qr.src}
            className={fps.qrBox}
            href={qr.url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            <BasePathImage src={qr.src} alt={qr.alt} width={370} height={370} />
            <p>{qr.caption}</p>
          </a>
        ))}
      </div>
    </Slide>
  );
}

// ---------- Former backup slides, now in the main flow ----------

export function IndexBackupSlide() {
  return (
    <Frame
      section="sensitivity"
      title="Five exposure scores give £4–8bn on one draw"
      subtitle="The cost under five exposure scores, on one draw adjusted to the average number displaced"
      scale={1.05}
    >
      <div className={fps.split}>
        <table className={fps.table}>
          <thead>
            <tr>
              <th>Score</th>
              <th className={fps.num}>Cost on the draw (£bn)</th>
              <th className={fps.num}>Adjusted (£bn)</th>
            </tr>
          </thead>
          <tbody>
            {indexRows.map((row) => (
              <tr key={row.index} className={row.index.startsWith("C-AIOE") ? fps.rowCentral : ""}>
                <td className={fps.rowName}>{row.index}</td>
                <td className={fps.num}>{row.raw}</td>
                <td className={fps.num}>
                  <strong>{row.adjusted}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Points items={indexPoints} />
      </div>
    </Frame>
  );
}

