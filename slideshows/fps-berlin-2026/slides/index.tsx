import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  IconArrowRight,
  IconBrandGithub,
  IconFileText,
  IconMail,
  IconUserMinus,
  IconWorld,
  IconArrowsSplit,
  type Icon,
} from "@tabler/icons-react";
import BasePathImage from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import { speakers } from "@/lib/speakers";
import {
  absorption,
  absorptionVariants,
  breakEvens,
  central,
  channels,
  closure,
  conclusions,
  costMovers,
  inBrief,
  incidenceRows,
  indexRows,
  jobLoss,
  limits,
  marginWhy,
  margins,
  methodFlow,
  obr,
  openQuestions,
  parts,
  policyRows,
  scenarioCaveats,
  scenarioInputs,
  sources,
  type PartKey,
} from "../content";
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
  backup = false,
}: {
  section?: PartKey;
  title: string;
  subtitle?: string;
  children: ReactNode;
  scale?: number;
  fill?: boolean;
  backup?: boolean;
}) {
  return (
    <Slide className={styles.deck}>
      <div className={styles.frame}>
        <header className={styles.frameIn}>
          {section && <PartNav section={section} />}
          <h1 className={styles.title}>
            {backup && <span className={fps.backupTag}>Backup</span>}
            {title}
          </h1>
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Kpi({ value, label, small = false }: { value: string; label: string; small?: boolean }) {
  return (
    <div className={`${fps.kpi} ${small ? fps.kpiSmall : ""}`}>
      <p className={fps.kpiValue}>{value}</p>
      <p className={fps.kpiLabel}>{label}</p>
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

// ---------- Cover and in brief ----------

export function TitleSlide() {
  const speaker = speakers["vahid-ahmadi"];
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center justify-center space-y-9">
        <div className="h-1 w-20 rounded-full bg-white/30" />
        <h1 className="font-display text-center text-6xl font-bold text-white">Who bears the AI shock?</h1>
        <p className="text-center text-2xl text-white opacity-80">
          The distributional and fiscal incidence in the UK
        </p>
        <div className="mt-2 flex flex-col items-center text-center">
          <div className="relative mb-3 h-28 w-28 overflow-hidden rounded-full border-2 border-white/40">
            <BasePathImage src={speaker.photo} alt={speaker.name} fill className="object-cover" />
          </div>
          <p className="text-xl font-semibold text-white">{speaker.name}</p>
          <p className="text-sm font-light text-white/70">Research Associate, PolicyEngine</p>
        </div>
        <div className="pt-2 text-center text-white opacity-70">
          <p>2026 Franco-German Fiscal Policy Seminar: AI and the Future of Public Finances</p>
          <p>Federal Ministry of Finance, Berlin, 1–2 December 2026</p>
        </div>
      </div>
    </Slide>
  );
}

export function InBriefSlide() {
  return (
    <Frame
      title="In brief"
      subtitle="An AI labour-market shock run through the UK tax-benefit system for 2027–28, household by household"
      scale={1.15}
    >
      <div className={fps.kpis} style={columns(3)}>
        {inBrief.map((item, index) => (
          <div key={item.title} className={`${fps.kpi} ${styles.enter}`} style={enter(index)}>
            <div className={fps.kpiHead}>
              <Badge icon={item.icon} size="small" />
              <p className={fps.kpiTitle} style={{ margin: 0 }}>
                {item.title}
              </p>
            </div>
            <p className={fps.kpiValue} style={{ marginTop: "calc(var(--u) * 1.2)" }}>
              {item.value}
            </p>
            <p className={fps.kpiLabel}>{item.text}</p>
          </div>
        ))}
      </div>
      <p className={fps.note}>
        Scenario analysis, not a forecast: what the UK rules would do if a shock of a given size, incidence and margin occurred.
      </p>
    </Frame>
  );
}

// ---------- 1. The question ----------

export function ExposureSlide() {
  const maxRate = Math.max(...jobLoss.map((row) => row.rate));
  return (
    <Frame
      section="question"
      title="The jobs most exposed to AI carry much of the tax base"
      subtitle="Exposure and the central scenario's job-loss rate by occupation group (SOC2020)"
      scale={1.05}
      fill
    >
      <div className={`${fps.split} ${fps.splitWide}`}>
        <table className={`${fps.table} ${fps.compact}`}>
          <thead>
            <tr>
              <th>Major group</th>
              <th className={fps.num}>C-AIOE</th>
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
        <div>
          <p className={fps.sideHead}>Why incidence matters</p>
          <p className={fps.lead}>
            Professional, managerial and administrative work scores highest on AI exposure, and <strong>pays well</strong>.
          </p>
          <Bullets
            items={[
              "Those earnings carry much of the income tax and NI base",
              "Universal Credit responds mainly to losses lower down",
              "So the same shock costs different amounts depending on where it lands",
            ]}
          />
        </div>
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame
      section="question"
      title="Two things the size of the shock does not settle"
      subtitle="I hold the shock's size fixed and vary both"
      scale={1.15}
    >
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(2)}>
        {openQuestions.map((question, index) => (
          <div key={question.title} className={`${styles.card} ${styles.enter}`} style={enter(index)}>
            <div className={styles.cardHead}>
              <Badge icon={question.icon} size="large" />
            </div>
            <h2>{question.title}</h2>
            <Bullets items={question.views} />
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ---------- 2. Data and method ----------

export function MethodSlide() {
  return (
    <Frame
      section="method"
      title="From occupation exposure to household incomes"
      subtitle="Baseline and shocked data pass through the same tax-benefit model"
      scale={1.15}
    >
      <div className={styles.flow} style={{ gridTemplateColumns: methodFlow.map(() => "minmax(0, 1fr)").join(" auto ") }}>
        {methodFlow.map((step, index) => (
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
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </Fragment>
        ))}
      </div>
      <p className={fps.note}>
        Outcomes: Exchequer cost (fall in the government balance), absolute poverty before and after housing costs, and the Gini.
        Each displaced worker is drawn by systematic sampling within occupation quotas.
      </p>
    </Frame>
  );
}

export function ScenarioSlide() {
  return (
    <Frame
      section="method"
      title="The central scenario follows an Irish study"
      subtitle="Doorley et al. (2026), from one investment-bank scenario of a decade of adoption, applied within one year"
      scale={1.15}
    >
      <div className={fps.kpis} style={columns(3)}>
        {scenarioInputs.map((input, index) => (
          <div key={input.value} className={styles.enter} style={enter(index)}>
            <Kpi value={input.value} label={input.label} />
          </div>
        ))}
      </div>
      <div>
        <p className={fps.sideHead}>What the central case leaves out</p>
        <Bullets items={scenarioCaveats} />
      </div>
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
    <Frame
      section="central"
      title="£7.3 billion a year, the net of flows several times larger"
      subtitle="The exposure-proportional central case, 2027–28"
      scale={1.1}
    >
      <div className={fps.kpis} style={columns(4)}>
        {central.map((stat) => (
          <Kpi key={stat.value} value={stat.value} label={stat.label} small />
        ))}
      </div>
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
            <span>20-draw mean; the channels sum to it within £0.1bn</span>
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
      <div className={`${fps.split} ${fps.splitWide}`} style={{ alignItems: "center" }}>
        <Figure
          src="/images/fps-berlin-2026/fig4_1_transition.png"
          width={1600}
          height={900}
          alt="Share of each income decile moving from employment to unemployment, rising from about 1 per cent in the bottom decile to about 5.6 per cent in the top"
          caption="Central scenario, 50-draw means with 95% intervals for the mean."
        />
        <div>
          <Kpi value="0.78%" label="of people in the bottom decile move into unemployment" small />
          <div style={{ height: "calc(var(--u) * 2)" }} />
          <Kpi value="5.57%" label="in the top decile" small />
          <p className={fps.note} style={{ marginTop: "calc(var(--u) * 2)" }}>
            Mostly because employees sit higher in the distribution: uniform incidence gives a similar gradient.
            Women are 49% of employment and 53% of the displaced.
          </p>
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
      subtitle="Job loss alone, sized to the OBR's technological-displacement scenario (1.67% of employees, 20 draws)"
      scale={1.12}
    >
      <div className={fps.kpis} style={columns(3)}>
        {absorption.map((stat, index) => (
          <div key={stat.value} className={styles.enter} style={enter(index)}>
            <Kpi value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
      <div>
        <p className={fps.sideHead}>Why so little from benefits</p>
        <Bullets items={absorptionVariants} />
      </div>
    </Frame>
  );
}

// ---------- 4. Who loses the job, and how ----------

export function IncidenceSlide() {
  return (
    <Frame
      section="comparisons"
      title="Who loses the job sets the cost far more than the poverty rise"
      subtitle="The same expected 2.04 million displaced under five rules (50 paired draws, means ± s.d.)"
      scale={1.05}
    >
      <table className={fps.table}>
        <thead>
          <tr>
            <th>Displacement rule</th>
            <th className={fps.num}>Exchequer cost (£bn)</th>
            <th className={fps.num}>Poverty BHC (pp)</th>
            <th className={fps.num}>Poverty AHC (pp)</th>
            <th className={fps.num}>Gini (pp)</th>
          </tr>
        </thead>
        <tbody>
          {incidenceRows.map((row) => (
            <tr
              key={row.rule}
              className={row.rule === "Exposure-proportional" ? fps.rowCentral : row.stress ? fps.rowStress : ""}
            >
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
      <p className={fps.note}>
        Cost tracks the earnings of those displaced: about £18,300 per displaced worker under uniform incidence against £22,900 under
        expertise compression. Uniform and exposure-proportional poverty rises do not differ over 2,000 draws.
      </p>
    </Frame>
  );
}

export function IncidenceFigureSlide() {
  return (
    <Frame
      section="comparisons"
      title="Every rule displaces more in the upper half"
      subtitle="Who is displaced by decile (seed 0), and cost against the poverty rise (50-draw means ± 1 s.d.)"
      scale={1.1}
      fill
    >
      <Figure
        src="/images/fps-berlin-2026/incidence_families.png"
        width={2179}
        height={915}
        alt="Left: share displaced by decile under five rules. Right: Exchequer cost against the rise in absolute poverty for each rule."
        caption="Uniform costs least yet raises poverty about as much as exposure-proportional; the high-earner tilt raises both."
      />
    </Frame>
  );
}

export function MarginSlide() {
  return (
    <Frame
      section="comparisons"
      title="As wage cuts, the same loss costs more but raises poverty far less"
      subtitle="The displaced workers' gross earnings, removed instead as exposure-graded pay cuts (20 paired draws)"
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
        <div className={fps.marginValue}>{margins.job.cost.toFixed(2)}</div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>{margins.wage.cost.toFixed(2)}</div>
        <div className={fps.marginLabel}>
          Rise in absolute poverty BHC, pp
          <span>same draws</span>
        </div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>+{margins.job.bhc.toFixed(2)}</div>
        <div className={fps.marginValue}>+{margins.wage.bhc.toFixed(2)}</div>
        <div className={fps.marginLabel}>
          Exchequer cost per £ of earnings lost
          <span>channels off, employer NI included</span>
        </div>
        <div className={fps.marginValue}>{margins.job.perPound}p</div>
        <div className={`${fps.marginValue} ${fps.marginHigh}`}>{margins.wage.perPound}p</div>
      </div>
      <div className={`${styles.cards} ${styles.cardsOpen}`} style={columns(3)}>
        {marginWhy.map((item) => (
          <div key={item.title} className={styles.card} style={{ paddingTop: "calc(var(--u) * 1)" }}>
            <h2 style={{ fontSize: "calc(var(--u) * 1.7)" }}>{item.title}</h2>
            <p style={{ fontSize: "calc(var(--u) * 1.4)" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ---------- 5. What moves the cost, and policy ----------

export function BreakEvenSlide() {
  return (
    <Frame
      section="sensitivity"
      title="Three assumptions can each turn the cost to zero"
      subtitle="The value of each at which the £7.3bn central cost reaches zero, the other two held at their central values"
      scale={1.1}
    >
      <div className={fps.split}>
        <div>
          {breakEvens.map((row) => (
            <div key={row.label} className={fps.breakEven}>
              <Badge icon={row.icon} />
              <span className={fps.breakEvenLabel}>{row.label}</span>
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
        <div>
          <p className={fps.sideHead}>Other assumptions, central cost</p>
          <Bullets items={costMovers} />
          <p className={fps.note} style={{ marginTop: "calc(var(--u) * 1.4)" }}>
            Full UC take-up and JSA move every break-even further away. The 9.5-month figure is an upper bound: half a year of earnings
            also withdraws UC a six-month spell would pay.
          </p>
        </div>
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
      title="Where the displaced wage bill goes decides the sign"
      subtitle="A closed account: part of the £68.3bn net fall in labour income returns as profit, taxed at 25% (seed 0)"
      scale={1.1}
    >
      <div className={fps.rangeBox}>
        <div className={fps.rangeLine}>
          <span className={fps.rangeZero} style={{ left: at(0) }} />
          <span className={`${fps.rangeTag} ${fps.rangeAbove}`} style={{ left: at(0) }}>
            Zero
          </span>
          <span className={fps.rangeTick} style={{ left: at(-0.9) }} />
          <span className={`${fps.rangeTag} ${fps.rangeBelow}`} style={{ left: at(-0.9) }}>
            <strong>£0.9bn gain</strong>
            all of it becomes UK-owned profit
          </span>
          <span className={fps.rangeTick} style={{ left: at(7.3) }} />
          <span className={`${fps.rangeTag} ${fps.rangeAbove}`} style={{ left: at(7.3) }}>
            <strong>£7.3bn</strong>
            central case
          </span>
          <span className={fps.rangeTick} style={{ left: at(14.4) }} />
          <span className={`${fps.rangeTag} ${fps.rangeBelow}`} style={{ left: at(14.4) }}>
            <strong>£14.4bn cost</strong>
            half becomes profit, half UK-owned
          </span>
        </div>
      </div>
      <Bullets
        items={[
          `Displaced workers lose £${closure.displacedEarnings}bn; survivors gain £${closure.survivorGain}bn`,
          "Half of post-tax profit is paid out; dividends taxed at the 36% average rate of the capital channel",
          "The central capital uplift adds £12.6bn more dividends than the labour shock can fund",
        ]}
      />
    </Frame>
  );
}

export function PolicySlide() {
  return (
    <Frame
      section="sensitivity"
      title="Three policy responses priced inside the shocked world"
      subtitle="Each reform on top of the central shock, 2027–28 (50 draws; shocked-plus-reform minus shocked)"
      scale={1.1}
    >
      <table className={fps.table}>
        <thead>
          <tr>
            <th>Reform</th>
            <th className={fps.num}>Annual cost (£bn)</th>
            <th className={fps.num}>Poverty BHC (pp)</th>
            <th className={fps.num}>£bn per point of poverty</th>
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
              <td className={fps.num}>
                <strong>{row.perPoint}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={fps.note}>
        Wage insurance pays in proportion to lost earnings, and the displaced sit mostly in the upper half: 63% of its spending reaches
        deciles 8–10, while R2 and R3 place 77% and 73% in deciles 1–5. R1 is untaxed and disregarded by means tests, the top of its
        cost range.
      </p>
    </Frame>
  );
}

export function ConclusionsSlide() {
  return (
    <Frame title="Conclusions" subtitle="Holding the size of the shock fixed" scale={1.12}>
      <div className={fps.split}>
        <div className={fps.numbered}>
          {conclusions.map((item, index) => (
            <div key={item.title} className={styles.enter} style={enter(index)}>
              <span className={fps.num}>{index + 1}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className={fps.sideHead}>Limits and next steps</p>
          <Bullets items={limits} />
          <p className={fps.note} style={{ marginTop: "calc(var(--u) * 1.4)" }}>
            Next: calibrate spell length and re-employment pay to UK displacement evidence, and model take-up and JSA for the newly
            displaced.
          </p>
        </div>
      </div>
    </Frame>
  );
}

const contacts: { label: string; url: string; Icon: Icon }[] = [
  { label: "vahid@policyengine.org", url: "mailto:vahid@policyengine.org", Icon: IconMail },
  { label: sources.post.label, url: sources.post.href, Icon: IconWorld },
  { label: sources.paper.label, url: sources.paper.href, Icon: IconBrandGithub },
  { label: "The paper (PDF)", url: "https://github.com/PolicyEngine/uk-ai-study/blob/main/paper/main.pdf", Icon: IconFileText },
];

export function ClosingSlide() {
  return (
    <Slide isEnd className={styles.deck}>
      <h1 className={`${styles.closingTitle} font-display font-bold text-center`}>Thank you</h1>
      <p className={`${styles.closingSubtitle} text-center text-white/85`}>Who bears the AI shock?</p>
      <div className={`${styles.closingContacts} grid w-full max-w-5xl grid-cols-2 self-center`}>
        {contacts.map(({ label, url, Icon: ContactIcon }) => (
          <a
            key={label}
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

// ---------- Backup ----------

export function ObrBackupSlide() {
  return (
    <Frame
      backup
      title="Against the OBR's technological-displacement scenario"
      subtitle="Unemployment up 1.4 points, no survivor-wage or capital change (20 draws, £bn a year)"
      scale={1.15}
    >
      <div className={fps.split}>
        <table className={fps.table}>
          <thead>
            <tr>
              <th />
              <th className={fps.num}>Simulation</th>
              <th className={fps.num}>OBR, March 2026</th>
            </tr>
          </thead>
          <tbody>
            {obr.map((row) => (
              <tr key={row.line}>
                <td className={fps.rowName}>{row.line}</td>
                <td className={fps.num}>{row.sim}</td>
                <td className={fps.num}>{row.obr}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p className={fps.lead}>
            The totals are close only because <strong>offsetting lines differ</strong>.
          </p>
          <Bullets
            items={[
              "The simulation loses more receipts and adds less welfare spending",
              "Timing and coverage differ too: one simulated year against an average",
            ]}
          />
        </div>
      </div>
    </Frame>
  );
}

export function IndexBackupSlide() {
  return (
    <Frame
      backup
      title="Five exposure indices"
      subtitle="Seed 0, adjusted to the 50-draw mean displaced count"
      scale={1.1}
    >
      <table className={fps.table}>
        <thead>
          <tr>
            <th>Index</th>
            <th className={fps.num}>Cost, raw (£bn)</th>
            <th className={fps.num}>Cost, adjusted (£bn)</th>
            <th className={fps.num}>Poverty BHC (pp)</th>
            <th className={fps.num}>Gini (pp)</th>
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
              <td className={fps.num}>{row.bhc}</td>
              <td className={fps.num}>{row.gini}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={fps.note}>
        Each extra million displaced adds £11.6bn across the 50 draws. The Gini and the top-decile transition share rise under every index.
      </p>
    </Frame>
  );
}

export function DecompositionBackupSlide() {
  return (
    <Frame
      backup
      title="Where the income loss falls, by decile"
      subtitle="Market income, benefits, and taxes and contributions, as a share of baseline disposable income (seed 0)"
      scale={1.1}
      fill
    >
      <Figure
        src="/images/fps-berlin-2026/fig4_4_decomposition.png"
        width={1800}
        height={900}
        alt="Change in market income, benefits and taxes by income decile"
        caption="Decile 8 loses most: market income −5.0%, benefits +0.3%, lower taxes +0.7%. Decile 1 depends on the household ranking."
      />
    </Frame>
  );
}

export function GridBackupSlide() {
  return (
    <Frame
      backup
      title="Displacement rate against survivor wage growth"
      subtitle="Change in average household disposable income (%), capital shock on (seed 0)"
      scale={1.1}
      fill
    >
      <Figure
        src="/images/fps-berlin-2026/fig4_5_disposable_grid.png"
        width={2000}
        height={1000}
        alt="Grid of disposable income changes by displacement rate and wage uplift"
        caption="At 7% displacement, average income falls with wage growth up to 4% (−0.32%) and rises with 5% (+0.15%)."
      />
    </Frame>
  );
}
