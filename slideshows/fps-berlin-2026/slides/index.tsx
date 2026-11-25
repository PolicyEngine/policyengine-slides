import { Fragment, type CSSProperties, type ReactNode } from "react";
import katex from "katex";
import {
  IconArrowRight,
  IconArrowsSplit,
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
  calibrationPoints,
  calibrationTex,
  central,
  centralChips,
  channels,
  closure,
  closurePoints,
  conclusions,
  costMovers,
  dataFacts,
  drawFacts,
  drawPoints,
  drawUses,
  exposureBuild,
  exposureNotes,
  exposureWhy,
  futureLines,
  directionPoints,
  growthDashboard,
  imputationLegend,
  imputationPoints,
  imputationTex,
  incidenceChips,
  incidenceRows,
  indexPoints,
  indexRows,
  jobLoss,
  marginChips,
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
  shockSteps,
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
  const current = useSlideshowContextSafe()?.currentSlide;
  return (
    <Slide className={styles.deck}>
      {current !== undefined && <span className={fps.pageNumber}>{current + 1}</span>}
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
        <p className="text-center text-2xl text-white opacity-80">The distributional and fiscal incidence in the UK</p>
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
    <Frame title="Agenda" subtitle="Five parts, then conclusions and future work" scale={1.15}>
      <div className={fps.agenda}>
        {parts.map((part, index) => (
          <div key={part.key} className={`${fps.agendaRow} ${styles.enter}`} style={enter(index)}>
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
  const current = useSlideshowContextSafe()?.currentSlide;
  return (
    <Slide className={styles.deck}>
      {current !== undefined && <span className={fps.pageNumber}>{current + 1}</span>}
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
      title="Job loss concentrates in the most AI-exposed occupations"
      subtitle="AI exposure and job-loss rate by occupation group (SOC2020)"
      scale={1.05}
      fill
    >
      <div className={`${fps.split} ${fps.splitWide}`}>
        <table className={`${fps.table} ${fps.compact}`}>
          <thead>
            <tr>
              <th>Major group</th>
              <th className={fps.num}>AI exposure (C-AIOE)</th>
              <th className={fps.num}>Employees (m)</th>
              <th className={fps.num}>Job-loss rate</th>
            </tr>
          </thead>
          <tbody>
            {jobLoss.map((row) => (
              <tr key={row.group}>
                <td className={fps.rowName}>{row.group}</td>
                <td className={fps.num}>{row.exposure}</td>
                <td className={fps.num}>{row.employment}</td>
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
        <Points items={exposureWhy} head="Why incidence matters" />
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame section="question" title="Two things the size of the shock does not settle" subtitle="Shock size fixed; both varied" scale={1.15}>
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
      subtitle="Baseline and shocked data, same tax-benefit model"
      scale={1.15}
    >
      <Flow steps={methodFlow} />
      <Points items={outcomeDefs} cols={3} head="Three outcomes, PolicyEngine UK 2.174.1, 2027–28 rules" />
    </Frame>
  );
}

export function ScenarioSlide() {
  return (
    <Frame
      section="method"
      title="The shock: 7% displaced, wages +2.6%, capital income +39.8%"
      subtitle="Briggs and Kodnani (2023), via Doorley et al.'s (2026) Irish design: a decade of adoption, in one year"
      scale={0.98}
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(3)}>
        {scenarioInputs.map((stat, index) => (
          <div key={stat.value} className={`${styles.card} ${styles.enter}`} style={enter(index)}>
            <div className={fps.kpiTop}>
              <span className={fps.kpiIcon}>
                <stat.icon stroke={1.75} aria-hidden="true" />
              </span>
              <p className={fps.kpiValue}>{stat.value}</p>
            </div>
            <p className={fps.kpiLabel}>{stat.label}</p>
            <div className={fps.eqBox}>
              <Tex tex={shockSteps[index].tex} />
            </div>
            <p className={fps.pointText}>{shockSteps[index].text}</p>
          </div>
        ))}
      </div>
      <Chips items={scenarioChips} />
    </Frame>
  );
}

// ---------- PolicyEngine and the method in detail ----------

// The organisation facts and government logos are the BIST deck's
// (bist-2026/content.ts, whoWeAre), which pins each claim to its source.
export function PolicyEngineSlide() {
  const { facts, government } = whoWeAre;
  return (
    <Frame
      title="PolicyEngine: the open-source model behind the paper"
      subtitle="Tax-benefit microsimulation for the UK and the US"
      scale={1.15}
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
        <div className={fps.logos} style={columns(government.length)}>
          {government.map((org) => (
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
                  <span className={fps.wordmark}>{org.name}</span>
                )}
              </span>
              <p className={fps.logoCaption}>
                {org.caption === "Built 10ds-microsim on it" ? "No 10's data science team built a microsimulation on it" : org.caption}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "calc(var(--u) * 1.2)" }}>
          <Chips items={[{ icon: IconInfoCircle, text: "Use by these bodies is not an endorsement of this paper" }]} />
        </div>
      </div>
    </Frame>
  );
}

export function ExposureMethodSlide() {
  return (
    <Frame
      section="method"
      title="Exposure: AIOE scaled down where AI complements the work"
      subtitle="No UK complementarity-adjusted series exists at this level, so I build one"
      scale={1.1}
    >
      <Flow steps={exposureBuild} />
      <div className={`${fps.split} ${fps.splitEven}`} style={{ alignItems: "center" }}>
        <div>
          <Tex tex="\text{C-AIOE}_l = \text{AIOE}_l \times \bigl(1 - (\theta_l - \theta_{\min})\bigr)" />
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
      subtitle="PolicyEngine's calibrated UK microdata: 2024–25 survey, grossed up to 2027–28"
      scale={1.02}
    >
      <Stats items={dataFacts} small />
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
      subtitle="One weight per household, fitted to published aggregates"
      scale={1.05}
    >
      <Tex tex={calibrationTex} />
      <div className={fps.split}>
        <Points items={calibrationPoints} />
        <div className={fps.kpis} style={{ gridTemplateColumns: "1fr", gap: "calc(var(--u) * 1.4)" }}>
          {calibrationFacts.map((fact) => (
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
      title="Who is displaced is random, so headline results average draws"
      subtitle="Random draws of who is displaced, within occupation quotas"
      scale={1.12}
    >
      <Stats items={drawFacts} />
      <Points items={drawPoints} cols={3} />
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
    <Frame section="central" title="£7.3bn a year, the net of flows several times larger" subtitle="The exposure-proportional central case, 2027–28" scale={0.9}>
      <Stats items={central} small />
      <Chips items={centralChips} />
      <div>
        <p className={fps.sideHead}>Each channel alone, £bn a year (20 paired draws)</p>
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
            <span>20 draws; channels interact by £0.1bn</span>
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
      scale={1.1}
      fill
    >
      <div className={`${fps.split} ${fps.splitWide} ${fps.figureShort}`} style={{ alignItems: "center" }}>
        <Figure
          src="/images/fps-berlin-2026/fig4_1_transition.png"
          width={1600}
          height={900}
          alt="Share of each income decile moving from employment to unemployment, rising from about 0.8 per cent in the bottom decile to about 5.6 per cent in the top"
          caption="Central case, 50-draw means, 95% intervals for the mean (assignment noise only)"
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

export function AbsorptionSlide() {
  return (
    <Frame
      section="central"
      title="The system absorbs 29% of the loss, almost all through lower taxes"
      subtitle="Job loss alone, OBR-sized: 1.67% of employees (20 draws)"
      scale={0.94}
    >
      <Stats items={absorption} small />
      <Points items={absorptionVariants} cols={3} head="What limits the benefit response" />
      <Chips items={absorptionChips} />
    </Frame>
  );
}

// ---------- 4. Who loses the job, and how ----------

export function IncidenceSlide() {
  return (
    <Frame
      section="comparisons"
      title="Who loses the job sets the cost far more than the poverty rise"
      subtitle="Same expected 2.04m displaced, five rules (50 paired draws, means ± s.d.)"
      scale={1.05}
    >
      <table className={fps.table}>
        <thead>
          <tr>
            <th>Displacement rule</th>
            <th className={fps.num}>Exchequer cost (£bn)</th>
            <th className={fps.num}>Poverty before housing costs (pp)</th>
            <th className={fps.num}>After housing costs (pp)</th>
            <th className={fps.num}>Gini (pp)</th>
          </tr>
        </thead>
        <tbody>
          {incidenceRows.map((row) => (
            <tr key={row.rule} className={row.rule === "Exposure-proportional" ? fps.rowCentral : row.stress ? fps.rowStress : ""}>
              <td>
                <span className={fps.rowName}>{row.rule}</span>
                <span className={fps.rowText}>{row.text}</span>
              </td>
              <td className={fps.num}>
                <strong>{row.cost}</strong> <span className={fps.sd}>± {row.sd}</span>
              </td>
              <td className={fps.num}>{row.bhc}</td>
              <td className={fps.num}>{row.ahc}</td>
              <td className={fps.num}>{row.gini}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Chips items={incidenceChips} />
    </Frame>
  );
}

export function MarginSlide() {
  return (
    <Frame
      section="comparisons"
      title="As wage cuts, the same loss costs more but raises poverty far less"
      subtitle="Same gross earnings, removed as exposure-graded wage cuts (20 draws)"
      scale={0.98}
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
          Exchequer cost, £bn a year
          <span>survivor-wage and capital channels on in both</span>
        </div>
        <div className={fps.marginValue}>{margins.job.cost.toFixed(1)}</div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>{margins.wage.cost.toFixed(1)}</div>
        <div className={fps.marginLabel}>
          Rise in absolute poverty (BHC), pp
          <span>same draws</span>
        </div>
        <div className={fps.marginValue}>+{margins.job.bhc.toFixed(2)}</div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>+{margins.wage.bhc.toFixed(2)}</div>
        <div className={fps.marginLabel}>
          Exchequer cost per £1 of earnings lost
          <span>channels off, employer NI included</span>
        </div>
        <div className={fps.marginValue}>{margins.job.perPound}p</div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>{margins.wage.perPound}p</div>
      </div>
      <Chips items={marginChips} />
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
      subtitle="Value at which the central cost reaches zero, the other two held fixed"
      scale={1.1}
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
        <Points items={costMovers} head="Other assumptions, central cost" />
      </div>
      <Chips items={breakEvenChips} />
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
      title="Where the displaced wage bill goes decides the sign"
      subtitle={`Closed account: part of the £${closure.labourFall}bn labour-income fall returns as profit, taxed at 25% (seed 0)`}
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
            central case, seed 0
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
      title="Three policy responses: cost and poverty reduction inside the shocked world"
      subtitle="Each reform on top of the central shock, 2027–28 (50 draws)"
      scale={1.05}
    >
      <table className={fps.table}>
        <thead>
          <tr>
            <th>Reform</th>
            <th className={fps.num}>Annual cost (£bn)</th>
            <th className={fps.num}>Poverty before housing costs (pp)</th>
            <th className={fps.num}>£bn per pp of poverty</th>
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
      <Points items={policyPoints} cols={2} />
    </Frame>
  );
}

export function ConclusionsSlide() {
  return (
    <Frame title="Conclusions and future work" subtitle="Holding the size of the shock fixed" scale={0.92}>
      <div className={fps.split}>
        <div className={fps.numbered}>
          {conclusions.map((item, index) => (
            <div key={item.title} className={styles.enter} style={enter(index)}>
              <span className={fps.kpiIcon}>
                <item.icon stroke={1.75} aria-hidden="true" />
              </span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Points items={futureLines} head="Limits → future work" />
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
          <div className={fps.qrInline}>
            <BasePathImage src="/images/fps-berlin-2026/dashboard-qr.svg" alt="QR code linking to the dashboard" width={330} height={330} />
            <p>{growthDashboard.title}: scan for the live dashboard</p>
          </div>
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
      title="Five exposure indices give £4–8bn on one draw"
      subtitle="Seed 0, adjusted to the 50-draw mean displaced count"
      scale={1.05}
    >
      <div className={fps.split}>
        <table className={fps.table}>
          <thead>
            <tr>
              <th>Index</th>
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

