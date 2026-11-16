import type { ReactNode } from "react";
import katex from "katex";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconChartBar,
  IconFileCode,
  IconHome,
  IconMail,
  IconWorld,
} from "@tabler/icons-react";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import {
  abmQuestions,
  aiShock,
  businessPolicy,
  calibrationEquation,
  calibrationFit,
  components,
  coverage,
  dataAccess,
  firmTools,
  inBrief,
  interfaceSpec,
  macroLinks,
  microcosmFacts,
  microcosmFlow,
  microcosmRelease,
  pilots,
  questions,
  rulesCode,
  rulesFacts,
  runFacts,
  runFlow,
  sources,
  tariffBridge,
  tariffDisaggregation,
  tradeEnergy,
  tradeEvents,
  uncertainty,
  uses,
  type Source,
} from "../content";
import styles from "./deck.module.css";

const sections = {
  model: "PolicyEngine UK",
  data: "Microcosm: the household data",
  tariffs: "Tariff analysis",
  business: "Business policy",
  ai: "AI",
  links: "Linking models",
  next: "Working together",
  appendix: "Appendix",
};

function ExternalLink({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
      className={`pointer-events-auto hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

function SourceLine({ items }: { items: Source[] }) {
  return (
    <div className="absolute bottom-24 left-16 right-16 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
      <span>Sources</span>
      {items.map((item) => (
        <ExternalLink key={item.href} href={item.href}>
          {item.label}
        </ExternalLink>
      ))}
    </div>
  );
}

function Frame({
  section,
  title,
  subtitle,
  children,
  references = [],
  center = false,
}: {
  section?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  references?: Source[];
  /** Centre the body in the space below the title (for figure slides). */
  center?: boolean;
}) {
  return (
    <Slide className={styles.deck}>
      <div className="flex h-full flex-col">
        <SlideHeader>
          {section && (
            <p className="mb-2 text-base font-semibold uppercase tracking-wide text-pe-teal">
              {section}
            </p>
          )}
          <SlideTitle>{title}</SlideTitle>
          {subtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
        </SlideHeader>
        {center ? <div className={styles.centerBody}>{children}</div> : children}
      </div>
      {references.length > 0 && <SourceLine items={references} />}
    </Slide>
  );
}

function Card({ title, children, tag, mutedTag = false }: {
  title: string;
  children: ReactNode;
  tag?: string;
  mutedTag?: boolean;
}) {
  return (
    <div className={styles.card}>
      {tag && <span className={`${styles.tag} ${mutedTag ? styles.tagMuted : ""}`}>{tag}</span>}
      <h2>{title}</h2>
      {children}
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

function Code({ title, code }: { title: string; code: string }) {
  return (
    <div className={styles.code}>
      <p className={styles.codeTitle}>{title}</p>
      <pre>{code}</pre>
    </div>
  );
}

function Facts({
  items,
  columns = 4,
}: {
  items: { title: string; text: string; code?: string }[];
  columns?: 3 | 4;
}) {
  return (
    <div className={`${styles.facts} ${columns === 3 ? styles.factsThree : ""}`}>
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          {item.code && <code className={styles.inlineCode}>{item.code}</code>}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
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
    <Frame
      title="In brief"
      subtitle="The talk proposes two candidate pilots that would pass another model's sector results to PolicyEngine. Neither is built."
      center
    >
      <div className="grid grid-cols-3 gap-6">
        {inBrief.map((item, index) => (
          <Card key={item.title} title={`${index + 1}. ${item.title}`}>
            <p>{item.text}</p>
          </Card>
        ))}
      </div>
    </Frame>
  );
}

const componentIcons = [IconFileCode, IconHome, IconChartBar];

export function WhatSlide() {
  return (
    <Frame
      section={sections.model}
      title="What PolicyEngine UK computes: incomes, not spending"
      center
      subtitle="Household incomes after taxes and benefits, poverty and the public finances"
      references={[sources.model, sources.data, sources.python, sources.joss]}
    >
      <div className="grid grid-cols-3 gap-6">
        {components.map((item, index) => {
          const Icon = componentIcons[index];
          return (
            <div key={item.title} className={styles.card}>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pe-teal text-white">
                  <Icon size={26} stroke={1.8} aria-hidden="true" />
                </span>
                <h2>{item.title}</h2>
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <p className={styles.takeaway}>
        Spending is an input, not a result. Each household&apos;s spending
        by category sets its VAT and duties and its exposure to a price
        change. What the model computes is income.
      </p>
      <p className={styles.finePrint}>
        Open source. Later slides cover how a run works, how the rules are
        written and how the data are built. The shock studies were run on
        earlier datasets (the survey-weighted or enhanced FRS), not
        Microcosm UK.
      </p>
    </Frame>
  );
}

export function CoverageSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="What the UK model covers"
      center
      subtitle="Including how the model allocates business taxes to households"
      references={[sources.model]}
    >
      <div className={`grid grid-cols-4 gap-5 ${styles.twoLineTitles}`}>
        {coverage.map((group) => (
          <Card key={group.title} title={group.title}>
            <Bullets items={group.items} />
          </Card>
        ))}
      </div>
      <p className={styles.takeaway}>
        Business-tax changes estimated elsewhere can be allocated to households
        through shareholdings or consumption.
      </p>
    </Frame>
  );
}

export function UsesSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="Use, evaluation and engagement"
      center
      references={[sources.no10, sources.hmt, sources.obr, sources.hansard, sources.nuffield]}
    >
      <div className="grid grid-cols-3 gap-6">
        {uses.map((group) => (
          <Card key={group.title} title={group.title}>
            <Bullets items={group.items} />
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
      title="Who bears the trade shocks?"
      center
      subtitle="Four UK trade events of 2021–26, traced to households"
      references={[sources.trade]}
    >
      <div className="grid grid-cols-2 gap-10">
        <Card title="The four events">
          <Bullets items={tradeEvents} />
          <p className="!mt-4">
            The price shocks come from published estimates; the tariff
            earnings shock is built from an assumed elasticity (the tariff
            bridge).
            The food and energy price rises were largest, as a share of
            spending, for lower-income deciles.
          </p>
        </Card>
        <div className="flex flex-col justify-center gap-8">
          <div className={styles.stat}>
            <p className={styles.statValue}>{tradeEnergy.offset}</p>
            <p className={styles.statLabel}>
              offset by the Energy Price Guarantee and the Energy Bills Support
              Scheme, as a share of the 2022–23 rise in energy costs that would
              have occurred without them ({tradeEnergy.range})
            </p>
          </div>
          <p className={styles.bodyText}>
            The study models no policy aimed at the food price rise;
            general cost-of-living payments cushioned it.
          </p>
          <p className={styles.bodyText}>
            Price episodes use the enhanced FRS 2023–24; the tariff stage
            the survey-weighted FRS 2024–25. Neither is Microcosm UK.
          </p>
        </div>
      </div>
    </Frame>
  );
}

function OwnedFlow({
  boxes,
  dashed = [],
}: {
  boxes: { owner: string; title: string; text: string }[];
  dashed?: number[];
}) {
  return (
    <div className={`${styles.flow} ${styles.flowCompact}`} style={{ gridTemplateColumns: `repeat(${boxes.length}, minmax(0, 1fr))` }}>
      {boxes.map((box, index) => (
        <div
          key={box.title}
          className={`${styles.flowBox} ${dashed.includes(index) ? styles.flowReplaceable : ""}`}
        >
          <p className={styles.flowOwner}>{box.owner}</p>
          <h2>{box.title}</h2>
          <p>{box.text}</p>
        </div>
      ))}
    </div>
  );
}

export function DisaggregationSlide() {
  const { flow, breakdowns } = tariffDisaggregation;
  return (
    <Frame
      section={sections.tariffs}
      title="Disaggregating tariff impacts"
      subtitle="A trade model gives results by sector. PolicyEngine could carry them to households; the concordance is not built."
      references={[sources.python, sources.trade, sources.gtap]}
      center
    >
      <OwnedFlow boxes={flow} />
      <h2 className={`mt-6 ${styles.figureTitle}`}>Breakdowns PolicyEngine returns</h2>
      <div className={styles.facts}>
        {breakdowns.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <p className={`mt-4 ${styles.finePrint} ${styles.finePrintFlush}`}>
        The breakdowns are standard policyengine.py outputs; the net
        Exchequer cost is the change in the model&apos;s government balance.
        Today the trade study assigns shocks by two-digit SIC division. The
        survey&apos;s sample size limits sector detail.
      </p>
    </Frame>
  );
}

export function BridgeSlide() {
  const { steps, replaceable, cushion } = tariffBridge;
  return (
    <Frame
      section={sections.tariffs}
      title="The tariff bridge: steps a trade model could replace"
      subtitle="How the trade study turns the 2025 US tariffs into an earnings shock for survey employees"
      references={[sources.trade, sources.epd]}
      center
    >
      <div className={styles.flow} style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`${styles.flowBox} ${replaceable.includes(index) ? styles.flowReplaceable : ""}`}
          >
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`, columnGap: "2.25rem" }}>
        <div className={styles.bracket} style={{ gridColumn: `${replaceable[0] + 1} / ${replaceable[replaceable.length - 1] + 2}` }}>
          <p>Steps a trade model&apos;s sector results could replace</p>
        </div>
      </div>
      <p className={styles.takeaway}>
        Taxes, benefits and lower pension contributions absorb{" "}
        <strong>{cushion.wageCuts}</strong> of the loss when it takes the form
        of wage cuts and <strong>{cushion.jobLosses}</strong> when it takes the
        form of job losses (standard deviation {cushion.jobLossesSd} across
        100 draws). This is the Dolls, Fuest and Peichl stabilisation
        coefficient.
      </p>
      <p className={styles.finePrint}>
        Results are for the tariff schedule before the US–{"\u2060"}UK
        Economic Prosperity Deal, on the survey-weighted FRS 2024–25. The
        deal&apos;s general terms (operative 8 May 2025) provide for a quota
        of 100,000 UK vehicles at a 10% tariff and, subject to supply-chain
        conditions, a steel and aluminium quota at most-favoured-nation
        rates. The study&apos;s code includes a deal schedule, but we have no
        published results for it.
      </p>
    </Frame>
  );
}

export function BusinessPolicySlide() {
  const { flow, external } = businessPolicy;
  return (
    <Frame
      section={sections.business}
      title="Business policy beyond tax: from firm costs to households"
      subtitle="Example: the British Industrial Competitiveness Scheme, which exempts eligible manufacturers in Great Britain from three electricity policy costs. Not built; no results."
      references={[sources.bicsGuidance, sources.bicsIa, sources.model]}
      center
    >
      <OwnedFlow boxes={flow} dashed={external} />
      <div className="grid" style={{ gridTemplateColumns: `repeat(${flow.length}, minmax(0, 1fr))`, columnGap: "2.25rem" }}>
        <div className={styles.bracket} style={{ gridColumn: `${external[0] + 1} / ${external[external.length - 1] + 2}` }}>
          <p>Another model, or an assumption</p>
        </div>
      </div>
      <p className={styles.takeaway}>
        The same path serves a subsidy or a regulatory cost. PolicyEngine
        needs the cost change and how firms split it; it computes who gains
        or loses and the knock-on change in taxes and benefits. The
        measure&apos;s own Exchequer cost comes from outside the model.
      </p>
      <p className={styles.finePrint}>
        In the model today, employer NI changes are split between pay,
        prices and profits (by default, all to pay), and an outside
        business-tax estimate can be allocated by spending or shareholding.
        Both are booked as taxes, so a non-tax measure needs an extension.
      </p>
    </Frame>
  );
}

// Positions on a £0bn to £35bn scale.
const pct = (bn: number) => `${(bn / 35) * 100}%`;

export function AiSlide() {
  return (
    <Frame
      section={sections.ai}
      title="Who bears the AI shock?"
      center
      subtitle="An illustrative 2026 scenario: 7% of employees lose a year's earnings; other employees' wages rise about 2.6%"
      references={[sources.ai]}
    >
      <div className="grid grid-cols-[1fr_2fr] gap-12">
        <div className="flex flex-col gap-8">
          <div className={styles.stat}>
            <p className={styles.statValue}>{aiShock.cost}</p>
            <p className={styles.statLabel}>
              Exchequer cost of the illustrative scenario (mean of 50 draws)
            </p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>{aiShock.poverty}</p>
            <p className={styles.statLabel}>Absolute poverty before housing costs</p>
          </div>
        </div>
        <div>
          <h2 className={styles.figureTitle}>
            Exchequer cost by who loses the jobs
          </h2>
          <p className={styles.figureSubtitle}>
            Range across four incidence patterns of the same size, and a
            deliberately top-loaded fifth
          </p>
          <div className="mt-4">
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
                <span>top-third earners tilt</span>
              </span>
              <span className={styles.rangeLabel} style={{ left: pct(32.8) }}>
                {aiShock.topLoaded}
                <span>top-loaded</span>
              </span>
            </div>
            <div className={styles.rangeTicks}>
              {[0, 10, 20, 30, 35].map((bn) => (
                <span key={bn} style={{ left: pct(bn) }}>
                  £{bn}bn
                </span>
              ))}
            </div>
          </div>
          <p className={`mt-6 ${styles.bodyText}`}>
            The rise in poverty varies much less across the four patterns
            ({aiShock.povertyRange}).
          </p>
        </div>
      </div>
      <p className={`${styles.finePrint} ${styles.finePrintFlush}`}>
        The £20.6bn pattern tilts job losses towards the top third of earners
        in occupations with above-median AI exposure. The study uses the
        survey-weighted Family Resources Survey. In a single draw, the central
        scenario costs £18.2bn on that dataset and £29.5bn on the enhanced FRS,
        so the fiscal results depend on the dataset.
      </p>
    </Frame>
  );
}

export function FirmToolsSlide() {
  return (
    <Frame
      section={sections.business}
      title="What we have on the business side"
      center
      subtitle="Each labelled by how far along it is"
      references={[sources.firm, sources.vatThresholds, sources.youngWorkerNics, sources.inactiveNics, sources.data]}
    >
      <div className="grid grid-cols-[1.35fr_1fr_1fr] gap-6">
        {firmTools.map((tool) => (
          <Card key={tool.title} title={tool.title} tag={tool.status} mutedTag={tool.status === "Not built"}>
            <p>{tool.text}</p>
          </Card>
        ))}
      </div>
    </Frame>
  );
}

export function MacroSlide() {
  return (
    <Frame
      section={sections.links}
      title="Links to macroeconomic models"
      center
      references={[sources.model, ...macroLinks.map((link) => link.source)]}
    >
      <div className="grid grid-cols-3 gap-6">
        {macroLinks.map((link) => (
          <Card key={link.title} title={link.title} tag={link.tag} mutedTag={link.tag === "Not built"}>
            <p>{link.text}</p>
            <p className={styles.note}>{link.note}</p>
          </Card>
        ))}
      </div>
    </Frame>
  );
}

export function AbmSlide() {
  return (
    <Frame
      section={sections.links}
      title="Where an agent-based model would link"
      subtitle="Three candidate questions, each naming the behaviour the agent-based model would simulate. None of these links is built."
      references={[sources.dosi, sources.gtap, sources.ai, sources.inet]}
      center
    >
      <table className={styles.matrix}>
        <thead>
          <tr>
            <th>Policy question</th>
            <th>Behaviour it simulates</th>
            <th>It passes</th>
            <th>PolicyEngine returns</th>
          </tr>
        </thead>
        <tbody>
          {abmQuestions.map((row) => (
            <tr key={row.question}>
              <th scope="row">{row.question}</th>
              <td>{row.behaviour}</td>
              <td>{row.passes}</td>
              <td>{row.returns}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.takeaway}>
        Trade flows and the response to tariffs stay in a trade model such
        as GTAP. PolicyEngine models no firm behaviour: it adds the tax and
        benefit rules and the households.
      </p>
      <p className={styles.finePrint}>
        Dosi et al. model technological change and cycles, not AI; a CGE run
        with technology sectors split out could also supply an AI shock.
        Youngman et al.&apos;s agent-based model cites our approach to
        under-sampled wealthy households; it uses neither our model nor our
        data.
      </p>
    </Frame>
  );
}

export function DataSlide() {
  return (
    <Frame
      section={sections.links}
      title="Open code, restricted microdata, synthetic data"
      center
      references={[sources.model, sources.python, sources.data, sources.firm]}
    >
      <div className="grid grid-cols-3 gap-6">
        {dataAccess.map((item) => (
          <Card key={item.title} title={item.title} tag={item.tag} mutedTag={item.tag === "Restricted"}>
            <p>{item.text}</p>
          </Card>
        ))}
      </div>
      <p className={styles.takeaway}>
        Models can be linked by exchanging tables by sector, decile or
        region, without microdata changing hands.
      </p>
      <p className={styles.finePrint}>
        The synthetic firms do not recover administrative microdata or firm
        behaviour, and are not linked to households. Microcosm can declare
        firm tables and person–firm job links, but that support is
        experimental.
      </p>
    </Frame>
  );
}

export function PilotsSlide() {
  return (
    <Frame
      section={sections.next}
      title="Two candidate pilots"
      center
      subtitle="One scenario each, passed one way from another model to PolicyEngine. We have no published results for either."
      references={[sources.epd, sources.bicsGuidance, sources.trade, sources.model]}
    >
      <div className="grid grid-cols-2 gap-8">
        {pilots.map((item) => (
          <Card key={item.title} title={item.title}>
            <dl className={styles.pairs}>
              {item.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.text}</dd>
                </div>
              ))}
            </dl>
          </Card>
        ))}
      </div>
      <p className={`mt-5 ${styles.finePrint} ${styles.finePrintFlush}`}>
        PolicyEngine would run the microsimulation, as the survey data are
        licensed through the UK Data Service. Neither link is built.
        Scenarios are for BIST to choose. Later, if a pilot shows it is worth
        building: a two-way loop with a macroeconomic model, OG-UK, and a link
        between firm and household data.
      </p>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame section={sections.next} title="Questions for discussion" center>
      <ol>
        {questions.map((question, index) => (
          <li key={question} className={styles.question}>
            <span className={styles.questionNumber}>{index + 1}</span>
            {question}
          </li>
        ))}
      </ol>
    </Frame>
  );
}

export function RulesSlide() {
  const { parameter, variable, test } = rulesCode;
  return (
    <Frame
      section={sections.model}
      title="How the rules are encoded"
      subtitle="Law as dated parameters, formulas and tests. Example: the personal allowance, abridged; counts at version 2.179.0"
      references={[sources.parameterExample, sources.variableExample, sources.testExample]}
      center
    >
      <div className={styles.codeGrid}>
        <div className={styles.codeColumn}>
          <Code title={parameter.title} code={parameter.code} />
          <Code title={test.title} code={test.code} />
        </div>
        <div className={styles.codeColumn}>
          <Code title={variable.title} code={variable.code} />
          <Facts items={rulesFacts} columns={3} />
        </div>
      </div>
    </Frame>
  );
}

export function RunSlide() {
  return (
    <Frame
      section={sections.model}
      title="How a reform or a shock is run"
      subtitle="Two simulations on the same households: a baseline and a counterfactual"
      references={[sources.model, sources.growth, sources.labourSupply, sources.impactAnalysis]}
      center
    >
      <OwnedFlow boxes={runFlow} />
      <div className={styles.belowFlow}>
        <Facts items={runFacts} />
      </div>
      <p className={`${styles.finePrint} ${styles.finePrintFlush} ${styles.finePrintSpaced}`}>
        An optional response on hours of work uses the OBR&apos;s
        elasticities. A participation response is in the code but switched
        off. A business shock enters through earnings, prices or business
        taxes, from published estimates, another model or a stated scenario.
      </p>
    </Frame>
  );
}

export function MicrocosmBuildSlide() {
  return (
    <Frame
      section={sections.data}
      title="Microcosm UK 2024–25: how the household file is built"
      subtitle="An open-source pipeline from licensed surveys and published statistics to a weighted file"
      references={[sources.sourceStages, sources.imputation, sources.data]}
      center
    >
      <OwnedFlow boxes={microcosmFlow} />
      <div className={styles.belowFlow}>
        <Facts items={microcosmFacts} />
      </div>
      <p className={`${styles.finePrint} ${styles.finePrintFlush} ${styles.finePrintSpaced}`}>
        FRS: Family Resources Survey. SPI: Survey of Personal Incomes. WAS:
        Wealth and Assets Survey, round 8. LCFS: Living Costs and Food Survey
        2024–25. ETB: Effects of Taxes and Benefits. NTS: National Travel
        Survey. The shock studies in this deck were run on earlier datasets,
        not on Microcosm UK.
      </p>
    </Frame>
  );
}

export function CalibrationSlide() {
  const { stats, publishers } = calibrationFit;
  return (
    <Frame
      section={sections.data}
      title="Calibration: weights fitted to official statistics"
      subtitle="The certified national build of 7 November 2026, as its public dashboard reports it"
      references={[sources.dashboard, sources.calibration, sources.doctrine]}
      center
    >
      <div className={styles.kpis}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className={styles.kpiValue}>{stat.value}</p>
            <p className={styles.kpiLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className={`grid grid-cols-[1.1fr_1fr] gap-12 ${styles.belowKpis}`}>
        <div>
          <h2 className={styles.figureTitle}>What the solver minimises</h2>
          <Tex tex={calibrationEquation} display />
          <ul className={`${styles.list} ${styles.listSmall}`}>
            <li>
              <Tex tex="w" />: household weights (<Tex tex="w^{0}" /> at
              the start). <Tex tex="a_j" />: a household&apos;s contribution
              to target <Tex tex="j" />, from data and rules.{" "}
              <Tex tex="t_j" />: the official figure
            </li>
            <li>
              <Tex tex="\omega_j" /> sum to one: each group of related
              targets carries equal total weight, split evenly within it
            </li>
            <li>
              Gradient descent (Adam) on log-weights: 1,500 steps, fixed
              seed, each weight at most 10 times its start
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.figureTitle}>Targets by publisher</h2>
          <table className={`${styles.matrix} ${styles.matrixCompact}`}>
            <tbody>
              {publishers.map((row) => (
                <tr key={row.name}>
                  <th scope="row">{row.name}</th>
                  <td className={styles.matrixNumber}>{row.count}</td>
                  <td>{row.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className={`${styles.finePrint} ${styles.finePrintFlush} ${styles.finePrintSpaced}`}>
        In-sample fit; the dashboard has no out-of-sample test for the UK.
        Solver settings in the code (429d7a0) match the build&apos;s
        diagnostics.
      </p>
    </Frame>
  );
}

export function ReleaseSlide() {
  return (
    <Frame
      section={sections.appendix}
      title="Gates, certification and firm support"
      subtitle="What is checked before a release, what a certified bundle fixes, and what exists for firms"
      references={[sources.gates, sources.bundle, sources.certification, sources.microcosmReadme, sources.firmTargets]}
      center
    >
      <div className="grid grid-cols-[1fr_1fr_1.15fr] gap-6">
        {microcosmRelease.map((item) => (
          <Card key={item.title} title={item.title} tag={item.tag} mutedTag={item.tag === "Experimental"}>
            <p>{item.text}</p>
            <p className={styles.note}>{item.note}</p>
          </Card>
        ))}
      </div>
    </Frame>
  );
}

export function UncertaintySlide() {
  return (
    <Frame
      section={sections.model}
      title="Assignment variability: repeated random draws"
      subtitle="A sector-level shock does not say which survey employees are affected"
      references={[sources.ai, sources.aiDraws, sources.trade]}
      center
    >
      <div className="grid grid-cols-[1.2fr_1fr] gap-12">
        <Card title="How the draws work">
          <Bullets items={uncertainty.steps} />
        </Card>
        <div className="flex flex-col justify-center gap-5">
          {uncertainty.stats.map((stat) => (
            <div key={stat.label} className={`${styles.stat} ${styles.statCompact}`}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <p className={`mt-4 ${styles.finePrint} ${styles.finePrintFlush}`}>
        The draws cover random assignment only, not sampling error in the
        survey, error in the calibrated weights or doubt about the scenario.
        The trade study also reports household-bootstrap sampling intervals
        for its energy results.
      </p>
    </Frame>
  );
}

function SpecTable({ rows }: { rows: { field: string; text: string }[] }) {
  return (
    <dl className={styles.spec}>
      {rows.map((row) => (
        <div key={row.field}>
          <dt>{row.field}</dt>
          <dd>{row.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function InterfaceSlide() {
  return (
    <Frame
      section={sections.links}
      title="A proposed interface: tables in, tables out"
      references={[sources.trade, sources.model, sources.python]}
      center
    >
      <div className="grid grid-cols-2 gap-8">
        <div className={`${styles.card} ${styles.specCard}`}>
          <div className={styles.specHead}>
            <h2>The other model passes</h2>
            <span className={`${styles.tag} ${styles.tagMuted}`}>Proposed, not built</span>
          </div>
          <SpecTable rows={interfaceSpec.inputs} />
        </div>
        <div className={`${styles.card} ${styles.specCard}`}>
          <div className={styles.specHead}>
            <h2>PolicyEngine returns</h2>
            <span className={styles.tag}>Existing outputs</span>
          </div>
          <SpecTable rows={interfaceSpec.outputs} />
          <span className={`${styles.tag} ${styles.tagMuted} ${styles.tagBelow}`}>
            Proposed, not built
          </span>
          <SpecTable rows={interfaceSpec.proposedOutputs} />
        </div>
      </div>
      <p className={`mt-5 ${styles.finePrint} ${styles.finePrintFlush}`}>
        If the trade model holds total employment fixed, its sector results
        are wage changes and moves between sectors, not job losses;
        PolicyEngine would then apply wage changes only. No reader for such
        a table exists. Cells of sector by region have few survey records,
        so they carry sampling error.
      </p>
    </Frame>
  );
}

export function AppendixSlide() {
  return (
    <Slide className={styles.deck} center>
      <p className="mb-3 text-base font-semibold uppercase tracking-wide text-pe-teal">
        After the talk
      </p>
      <h1 className="font-display text-6xl font-bold tracking-tight text-pe-dark">
        Appendix
      </h1>
      <div className="accent-bar mt-6 w-32" />
      <p className={`mt-8 ${styles.bodyText}`}>
        What the UK model covers · Gates, certification and firm support ·
        Who bears the trade shocks? · Use, evaluation and engagement
      </p>
    </Slide>
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
    <Slide isEnd>
      <h1 className={`${styles.closingTitle} font-display text-6xl font-bold text-center`}>
        Thank you
      </h1>
      <p className="mt-6 text-center text-2xl text-white/85">
        From business shocks to household incomes
      </p>
      <div className="mt-12 grid w-full max-w-5xl grid-cols-2 gap-4 self-center">
        {contacts.map(({ label, url, Icon }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 transition-colors hover:bg-white/20"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-pe-teal">
              <Icon size={20} stroke={1.8} aria-hidden="true" />
            </span>
            <span className="text-base font-medium">{label}</span>
          </a>
        ))}
      </div>
    </Slide>
  );
}
