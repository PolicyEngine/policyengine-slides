import { Fragment, type ReactNode } from "react";
import {
  IconAdjustmentsHorizontal,
  IconAlertTriangle,
  IconArrowsShuffle,
  IconBolt,
  IconBook,
  IconBrandGithub,
  IconBrandPython,
  IconBuildingBank,
  IconChecks,
  IconCoins,
  IconMessageCircle,
  IconShip,
  IconCalendarEvent,
  IconChartBar,
  IconChartLine,
  IconCode,
  IconDatabase,
  IconEye,
  IconFileCode,
  IconGitCompare,
  IconLeaf,
  IconLink,
  IconMail,
  IconMessageQuestion,
  IconPlugConnected,
  IconRobot,
  IconScale,
  IconSearch,
  IconTarget,
  IconTerminal2,
  IconUsers,
  IconUsersGroup,
  IconWorld,
  IconWritingSign,
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
  bridgeBenchmark,
  capitalSpending,
  corporationTax,
  defineGreen,
  forecastRecord,
  freeRunning,
  hostedObrPin,
  incomeTax,
  layers,
  listing,
  multiplierRows,
  pipeline,
  platformModels,
  registryStatus,
  review,
  reviewFindings,
  sources,
  unemploymentDrift,
  type Source,
  liveSiteViews,
  thibRatings,
} from "../content";
import styles from "./deck.module.css";
import embedStyles from "./embed.module.css";
import SiteEmbed from "./SiteEmbed";
import {
  BankRateBars,
  IncomeTaxBars,
  MultiplierPlot,
  ScorecardTable,
} from "./figures";

const agenda = [
  {
    title: "The OBR model in Python",
    text: "What we built, Thibault's review and our answer",
  },
  {
    title: "How well it fits",
    text: "Anchored, free-running, and what each number means",
  },
  {
    title: "Policy shocks and limits",
    text: "Results against the OBR's published multipliers",
  },
  {
    title: "The macro platform",
    text: "Seven models, a forecast record, and AI-agent access",
  },
  {
    title: "Working together",
    text: "Where NEF and PolicyEngine could collaborate",
  },
];

const sections = agenda.map(
  (item, index) => `${index + 1} · ${item.title}`,
);

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
            <p className="mt-3 text-xl leading-relaxed text-gray-600">
              {subtitle}
            </p>
          )}
        </SlideHeader>
        {center ? <div className={styles.centerBody}>{children}</div> : children}
      </div>
      {references.length > 0 && <SourceLine items={references} />}
    </Slide>
  );
}

type Item = { icon: Icon; title: string; text?: ReactNode };

function IconList({ items, twoCol = false }: { items: Item[]; twoCol?: boolean }) {
  return (
    <div className={`${styles.iconList} ${twoCol ? styles.twoCol : ""}`}>
      {items.map(({ icon: ItemIcon, title, text }) => (
        <div key={title} className={styles.iconItem}>
          <span className={styles.iconBadge}>
            <ItemIcon size={26} stroke={1.8} aria-hidden="true" />
          </span>
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
  children,
  amber = false,
}: {
  icon: Icon;
  title: string;
  children?: ReactNode;
  amber?: boolean;
}) {
  return (
    <div className={`${styles.card} ${amber ? styles.cardAmber : ""}`}>
      <h2>
        <CardIcon size={26} stroke={1.8} aria-hidden="true" />
        {title}
      </h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Stat({
  value,
  label,
  note,
  amber = false,
}: {
  value: ReactNode;
  label: string;
  note?: ReactNode;
  amber?: boolean;
}) {
  return (
    <div className={`${styles.card} ${amber ? styles.cardAmber : ""}`}>
      <p className={`${styles.stat} ${amber ? styles.statAmber : ""}`}>{value}</p>
      <p className={styles.statLabel}>{label}</p>
      {note && <p className={styles.statNote}>{note}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Opening

export function TitleSlide() {
  return (
    <CoverSlide
      title="Opening up the OBR macroeconomic model"
      subtitle="An open-source Python implementation, and a platform around it"
      contentClassName="pt-28"
      speakers={[
        { ...speakers["vahid-ahmadi"], title: "Research Associate, PolicyEngine" },
        { ...speakers["max-ghenis"], title: "CEO, PolicyEngine" },
      ]}
    />
  );
}

export function AgendaSlide() {
  return (
    <Frame title="Today">
      <div className={styles.agenda}>
        {agenda.map((item, index) => (
          <div key={item.title} className={styles.agendaRow}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function PublishedVsBuiltSlide() {
  return (
    <Frame
      section={sections[0]}
      title="What the OBR publishes, and what we built"
      references={[sources.roadmap, sources.obrReadme]}
      center
    >
      <div className={styles.layers}>
        <div className={styles.layerHead}>Layer</div>
        <div className={styles.layerHead}>The OBR</div>
        <div className={styles.layerHead}>Our Python version</div>
        <div className={styles.layerHead}>Status</div>
        {layers.map((layer) => (
          <Fragment key={layer.title}>
            <div className={styles.layerName}>{layer.title}</div>
            <div>{layer.obr}</div>
            <div>{layer.ours}</div>
            <div>
              <span className={`${styles.chip} ${layerStatus[layer.status].className}`}>
                {layerStatus[layer.status].label}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
      <p className={styles.takeaway}>
        Same equations, but not the OBR&apos;s judgements: the forecast a user
        gets depends on the judgements they supply
      </p>
    </Frame>
  );
}

export function InputsSlide() {
  return (
    <Frame
      section={sections[0]}
      title="The inputs"
      references={[sources.obrReadme, sources.forecasting]}
      center
    >
      <div className={`${styles.cardGrid} ${styles.cols4}`}>
        <Stat
          value={listing.equations}
          label="Equations"
          note={`The OBR's EViews listing of ${listing.listingDate}, all parsed`}
        />
        <Stat
          value="Oct 2026"
          label="EFO baseline"
          note={`Detailed forecast tables, published ${listing.efoPublished}`}
        />
        <Stat
          value={listing.onsSeries}
          label="ONS series"
          note={`${listing.missingWithOnsCodes} of ${listing.missingEndogenous} variables missing from the EFO had ONS codes`}
        />
        <Stat
          value={listing.droppedEquations}
          label="Equations dropped"
          note="In some quarter, because an input has no published data"
          amber
        />
      </div>
      <p className={styles.takeaway}>
        Where the OBR publishes an equation but not its inputs, we estimate
        them from published sources or seed them, and say which
      </p>
    </Frame>
  );
}

export function ArchitectureSlide() {
  return (
    <Frame
      section={sections[0]}
      title="How it runs"
      references={[sources.obrReadme, sources.demo]}
      center
    >
      <div className={styles.pipeline}>
        {pipeline.map((step, index) => (
          <div key={step.title} className={styles.step}>
            <p className={styles.stepNum}>{String(index + 1).padStart(2, "0")}</p>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.surfaces}>
        <div className={styles.surface}>
          <IconBrandPython size={28} stroke={1.8} aria-hidden="true" />
          Python <span>run_reform()</span>
        </div>
        <div className={styles.surface}>
          <IconChartBar size={28} stroke={1.8} aria-hidden="true" />
          Dashboard <span>scenarios, equations</span>
        </div>
        <div className={styles.surface}>
          <IconRobot size={28} stroke={1.8} aria-hidden="true" />
          MCP tools <span>for AI agents</span>
        </div>
      </div>
    </Frame>
  );
}

// Thibault's review of the published code (Sep 2026) and our answer. Sources:
// his email of 23 Sep, our replies of 29 Sep and 8 Oct, and the write-up in
// docs/published_model_review.md (entries H1, R1, R2, V2, G2).
export function ThibFoundSlide() {
  return (
    <Frame
      section={sections[0]}
      title="What Thibault found"
      subtitle="He read the OBR's published EViews code and variable list in September 2026"
      references={[sources.review]}
      center
    >
      <div className="grid grid-cols-[1.5fr_1fr] gap-12">
        <div className={`${styles.cardGrid} ${styles.cols1}`}>
          <Card icon={IconUsers} title="No distribution" amber>
            Taxing high earners to pay low earners leaves consumption unchanged
          </Card>
          <Card icon={IconShip} title="Total imports fixed" amber>
            More activity can't change the trade balance
          </Card>
          <Card icon={IconCoins} title="Public debt interest fixed" amber>
            More borrowing doesn't raise the interest bill
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-5 self-center">
          <Stat value={review.points} label="Points in his list" note="Each rated by how much it matters" />
          <Stat
            value={`${thibRatings.high} · ${thibRatings.mid} · ${thibRatings.low}`}
            label="High · Mid · Low"
          />
        </div>
      </div>
    </Frame>
  );
}

export function ThibAnswerSlide() {
  return (
    <Frame
      section={sections[0]}
      title="Our answer: all three hold"
      subtitle="Checked against the published code and in our Python build"
      references={[sources.review]}
      center
    >
      <IconList
        items={[
          {
            icon: IconShip,
            title: "Trade: true",
            text: "Exports and imports never appear on the left-hand side of any equation. Sterling moves only prices",
          },
          {
            icon: IconCoins,
            title: "Debt interest: true, but narrower",
            text: "Gilt interest series DIPLDC and IILG are not in the code; debt (PSND, GGGD) is computed and never used. Household interest payments do follow Bank Rate",
          },
          {
            icon: IconUsers,
            title: "Distribution: true, reworded",
            text: "Consumption also uses unemployment, house prices, a rate term and wealth, but all as aggregates. No household split, so a revenue-neutral transfer does nothing",
          },
        ]}
      />
    </Frame>
  );
}

export function ReviewSlide() {
  return (
    <Frame
      section={sections[0]}
      title="All 53 points, checked line by line"
      subtitle={`We checked each of Thibault's ${review.points} points against the OBR's published code and variable list`}
      references={[sources.review]}
      center
    >
      <div className="grid grid-cols-[1fr_1.35fr] gap-12">
        <div className="grid grid-cols-2 gap-5 self-start">
          <Stat value={review.accurate} label="Accurate" note={`${review.documented} documented, ${review.notFlagged} not flagged`} />
          <Stat value={review.partly} label="Partly true" />
          <Stat value={review.uncheckable} label="Can't be checked" note="Process claims, outside the code" />
        </div>
        <div>
          <p className="mb-4 text-lg font-semibold uppercase tracking-wide text-gray-500">
            Problems in the published files
          </p>
          <div className="space-y-4">
            {reviewFindings.map((finding) => (
              <div key={finding.code} className="flex items-baseline gap-4 border-b border-gray-200 pb-3">
                <span className="w-14 shrink-0 text-2xl font-bold text-pe-amber">{finding.code}</span>
                <span className="text-xl text-gray-700">{finding.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function ThibDifferSlide() {
  return (
    <Frame
      section={sections[0]}
      title="Where we agree, and where we would push"
      references={[sources.review, sources.obrReadme]}
      center
    >
      <IconList
        twoCol
        items={[
          {
            icon: IconChecks,
            title: "Agree",
            text: "As published, the model can't carry fiscal feedback to output: GDP is an input",
          },
          {
            icon: IconSearch,
            title: "Two partial corrections",
            text: "Bank Rate and real wages do reach consumption, just not output. The current account feeds back through investment income",
          },
          {
            icon: IconMessageCircle,
            title: "Documented, not fixed",
            text: "About half the accurate points are open in the OBR's own variable list. Thibault: disclosure doesn't make them acceptable",
          },
          {
            icon: IconTarget,
            title: "The stronger line",
            text: "The model can't reproduce the OBR's own forecast: the add-factors and calibration aren't published",
          },
          {
            icon: IconBrandPython,
            title: "What our build changes",
            text: "GDP is solved, not imposed; we built the add-factors; 355 ONS series fill unpublished inputs",
          },
          {
            icon: IconBuildingBank,
            title: "Next for both of us",
            text: "Thibault writes to the OBR; we can test any fix in the open build first",
          },
        ]}
      />
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Fit

export function AnchoringSlide() {
  return (
    <Frame
      section={sections[1]}
      title="Anchored to the October 2026 EFO"
      references={[sources.obrReadme, sources.siteFigures]}
      center
    >
      <IconList
        items={[
          {
            icon: IconTarget,
            title: `Baseline on the EFO: GDP ${anchored.gdpMape}% MAPE, consumption ${anchored.consMape}%`,
            text: `${anchored.window}. By construction: add-factors are EFO minus model`,
          },
          {
            icon: IconGitCompare,
            title: "Reforms are scored as deltas",
            text: "The same add-factors sit in the baseline and the shocked run, and cancel",
          },
          {
            icon: IconBolt,
            title: `Converges in ${anchored.convergedQuarters} of ${anchored.convergedQuarters} quarters`,
            text: "Every baseline and shocked solve in the demo set, default closure",
          },
          {
            icon: IconAlertTriangle,
            title: "Unemployment is not anchored",
            text: `It drifts to ${unemploymentDrift[0].model}% against the EFO's ${unemploymentDrift[0].efo}% by ${unemploymentDrift[0].quarter}`,
          },
        ]}
      />
    </Frame>
  );
}

export function FitSlide() {
  return (
    <Frame
      section={sections[1]}
      title="Two numbers that are easy to misread"
      references={[sources.scorecard, sources.obrReadme, sources.macroReadme]}
      center
    >
      <div className={`${styles.cardGrid} ${styles.cols2}`}>
        <Stat
          value={`${anchored.gdpMape}%`}
          label="Anchored GDP error"
          note="Shows the anchoring works. Says nothing about forecast skill"
        />
        <Stat
          value={`${freeRunning.gdpMape}%`}
          label="Free-running GDP error (add-factors off)"
          note="Measures this emulator: GDP made endogenous, unpublished inputs seeded. Not an OBR forecast error: in the OBR's model GDP is an input"
          amber
        />
      </div>
      <p className={styles.takeaway}>
        Our platform&apos;s label for it: &ldquo;{registryStatus.split(";")[0]}&rdquo;
      </p>
    </Frame>
  );
}

export function ScorecardSlide() {
  return (
    <Frame
      section={sections[1]}
      title="Free-running scorecard"
      subtitle={`${freeRunning.computed} of ${freeRunning.headline} headline variables are computed; the rest are held at the OBR's value. ${freeRunning.withinBand} of ${freeRunning.computed} within band`}
      references={[sources.scorecard]}
      center
    >
      <ScorecardTable />
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Shocks and limits

export function MultipliersSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Shocks against the OBR's multipliers"
      subtitle="GDP per pound at quarters 1, 4 and 12, sustained shocks from 2025Q1"
      references={[sources.demo, sources.demoResults, sources.passthrough]}
      center
    >
      <MultiplierPlot />
    </Frame>
  );
}

export function IncomeTaxSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Income tax: the channel with real behaviour"
      subtitle={`Basic rate +1p, ${incomeTax.revenuePerQuarter} a quarter (${incomeTax.revenuePerYear} a year). Real GDP change, £m a quarter`}
      references={[sources.demo, sources.demoResults]}
      center
    >
      <div className="grid grid-cols-[1fr_24rem] gap-12">
        <IncomeTaxBars />
        <IconList
          items={[
            { icon: IconUsers, title: "Income falls, then spending", text: "The OBR's consumption equation" },
            { icon: IconScale, title: "Right order, reverse profile", text: `Ours grows; the OBR's ${multiplierRows[1].obr} fades` },
            { icon: IconBuildingBank, title: "Borrowing moves one for one", text: "No second-round receipts" },
          ]}
        />
      </div>
    </Frame>
  );
}

export function ClosuresSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Corporation tax and capital spending"
      subtitle="Both need the opt-in investment closure, a stop-gap that freezes three variables to keep investment stable"
      references={[sources.demo, sources.obrReadme]}
      center
    >
      <div className={`${styles.cardGrid} ${styles.cols2}`}>
        <div className="space-y-5">
          <p className="text-2xl font-semibold text-pe-dark">Corporation tax +5pp</p>
          <div className="grid grid-cols-2 gap-5">
            <Stat value={`£${Math.abs(corporationTax.gdpQ4)}m`} label="GDP fall, quarter 4" />
            <Stat value={`£${Math.abs(corporationTax.gdpQ12)}m`} label="GDP fall, quarter 12" />
          </div>
          <p className="text-xl text-gray-600">
            {corporationTax.plateauFraction} of the way to a plateau near{" "}
            {corporationTax.plateau} a quarter. No sourced OBR benchmark
          </p>
        </div>
        <div className="space-y-5">
          <p className="text-2xl font-semibold text-pe-dark">
            Government investment +{capitalSpending.shock} a quarter
          </p>
          <div className="grid grid-cols-2 gap-5">
            <Stat value={`£${capitalSpending.gdpQ1.toLocaleString("en-GB")}m`} label="GDP rise, quarter 1" />
            <Stat value={`£${capitalSpending.gdpQ12.toLocaleString("en-GB")}m`} label="GDP rise, quarter 12" />
          </div>
          <p className="text-xl text-gray-600">
            Identity pass-through at about 1.0, no taper. Under the default
            closure the channel is dead
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function BankRateSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Bank Rate: weaker than the Bank of England's range"
      subtitle="+1pp held for four quarters. Peak fall in GDP"
      references={[sources.demo, sources.monetary]}
      center
    >
      <BankRateBars />
      <p className={styles.takeaway}>
        Only consumption and household interest respond. Investment, sterling,
        house prices and gilts have no interest-rate equation in the listing
      </p>
    </Frame>
  );
}

export function LimitsSlide() {
  return (
    <Frame
      section={sections[2]}
      title="Known limits"
      references={[sources.obrReadme, sources.siteFigures, sources.tywhh]}
      center
    >
      <IconList
        twoCol
        items={[
          {
            icon: IconBuildingBank,
            title: "Bank Rate response is weak",
            text: "About a quarter to a half of the BoE's range",
          },
          {
            icon: IconUsers,
            title: "Unemployment drifts",
            text: `${unemploymentDrift[1].model}% against ${unemploymentDrift[1].efo}% by ${unemploymentDrift[1].quarter}: participation is not pinned`,
          },
          {
            icon: IconScale,
            title: "Spending multiplier is about 1",
            text: `By construction, against the OBR's ${multiplierRows[0].obr}; borrowing does not move`,
          },
          {
            icon: IconAdjustmentsHorizontal,
            title: "VAT needs an opt-in overlay",
            text: "CPI is exogenous in the listing; pass-through is labelled judgement",
          },
          {
            icon: IconCalendarEvent,
            title: "Household-tax seasonal fix",
            text: `GDP error ${freeRunning.gdpMapeBefore71}% → ${freeRunning.gdpMape}%: an artefact removed, not better fit`,
          },
          {
            icon: IconChartLine,
            title: "Point estimates only",
            text: "No confidence bands on any result",
          },
        ]}
      />
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Platform

export function PlatformSlide() {
  return (
    <Frame
      section={sections[3]}
      title="The macro platform: models side by side"
      subtitle="In development and not yet launched. Each model answers a different question"
      references={[sources.compare, sources.macroReadme]}
      center
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Model</th>
            <th>Country</th>
            <th>Answers</th>
            <th>Scores reforms</th>
            <th>Runs</th>
          </tr>
        </thead>
        <tbody>
          {platformModels.map((model) => (
            <tr key={model.name}>
              <td>{model.name}</td>
              <td>{model.country}</td>
              <td>{model.answers}</td>
              <td className={model.scoresReforms ? styles.yes : styles.no}>
                {model.scoresReforms ? "Yes" : "No"}
              </td>
              <td>{model.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Frame>
  );
}

// The platform, live: the deployed site in a frame, with buttons for its main
// pages. The site's headers allow this deck's origins to frame it.
export function LiveSiteSlide() {
  return (
    <Frame
      section={sections[3]}
      title="The platform, live"
      subtitle={new URL(sources.liveSite.href).host}
    >
      <div className={embedStyles.liveBody}>
        <SiteEmbed
          href={sources.liveSite.href}
          title={sources.liveSite.label}
          views={liveSiteViews}
        />
      </div>
    </Frame>
  );
}

export function DefineSlide() {
  return (
    <Frame
      section={sections[3]}
      title="DEFINE-UK: green public investment"
      subtitle={`Extra public spending on green power, about ${defineGreen.spending}, against current policies. Effects in 2035`}
      references={[sources.definePage]}
      center
    >
      <div className={`${styles.cardGrid} ${styles.cols4}`}>
        <Stat value={defineGreen.gdp2035} label="Real GDP" />
        <Stat value={defineGreen.emissions2035} label="Emissions, CO2e a year" note={defineGreen.emissionsShare2035} />
        <Stat value={defineGreen.unemployment2035} label="Unemployment" />
        <Stat value={defineGreen.consumption2035} label="Real consumption" />
      </div>
      <p className={styles.takeaway}>
        Deltas only, never levels. A partial replication of the published
        model, run locally; public debt and interest are not among the served
        outputs
      </p>
    </Frame>
  );
}

export function ForecastRecordSlide() {
  return (
    <Frame
      section={sections[3]}
      title="A scored forecast record"
      subtitle="Forecasts are committed before the data arrive, then scored against a no-change baseline"
      references={[sources.forecastPage, sources.forecastScores, sources.forecastRules]}
      center
    >
      <div className={`${styles.cardGrid} ${styles.cols4}`}>
        <Stat value={forecastRecord.scored} label="Forecasts scored" note={`${forecastRecord.live} live, ${forecastRecord.retroactive} retroactive`} />
        <Stat value={`${forecastRecord.liveIn68} of ${forecastRecord.live}`} label="Live, inside 68% band" />
        <Stat value={forecastRecord.averageMiss} label="Average miss" note={`No-change baseline: ${forecastRecord.noChangeMiss}`} />
        <Stat value={forecastRecord.bias} label="Bias" note={`Ran low on ${forecastRecord.ranLow}`} amber />
      </div>
      <p className={styles.takeaway}>
        Too few to show skill. All scored forecasts are from the BoE SVAR and
        its unemployment satellite, not the OBR emulator
      </p>
    </Frame>
  );
}

export function AccessSlide() {
  return (
    <Frame
      section={sections[3]}
      title="Use it from code or an AI agent"
      references={[sources.mcpServer, sources.cli, sources.connect, sources.macroReadme]}
      center
    >
      <IconList
        twoCol
        items={[
          {
            icon: IconPlugConnected,
            title: `MCP server, ${access.mcpTools} tools`,
            text: "Hosted; add it to Claude, ChatGPT or another client",
          },
          {
            icon: IconTerminal2,
            title: `CLI, ${access.cliCommands} commands`,
            text: "One install pins the hosted models to exact commits",
          },
          {
            icon: IconCode,
            title: "Python",
            text: "Call each model's own API directly",
          },
          {
            icon: IconDatabase,
            title: "Dated data snapshots",
            text: "ONS, BoE and FRED series archived as published, never edited",
          },
        ]}
      />
    </Frame>
  );
}

export function MicroMacroSlide() {
  return (
    <Frame
      section={sections[3]}
      title="From a microsimulation reform to GDP"
      references={[sources.mcpServer, sources.capabilities]}
      center
    >
      <div className={styles.flow}>
        <div className={styles.flowBox}>
          <h2>
            <IconWritingSign size={24} stroke={1.8} aria-hidden="true" />
            Reform
          </h2>
          <p>A PolicyEngine-UK parameter change</p>
        </div>
        <div className={styles.flowBox}>
          <h2>
            <IconUsersGroup size={24} stroke={1.8} aria-hidden="true" />
            Static costing
          </h2>
          <p>Population microsimulation, £bn a year</p>
        </div>
        <div className={styles.flowBox}>
          <h2>
            <IconArrowsShuffle size={24} stroke={1.8} aria-hidden="true" />
            Bridge
          </h2>
          <p>
            Quarterly <code>HHDI_ADDFACTOR</code> path
          </p>
        </div>
        <div className={styles.flowBox}>
          <h2>
            <IconChartLine size={24} stroke={1.8} aria-hidden="true" />
            OBR model
          </h2>
          <p>GDP, consumption, investment by quarter</p>
        </div>
      </div>
      <div className={styles.flowOut}>
        <Card icon={IconChartBar} title="Distribution stays in the microsimulation">
          Decile changes, winners and losers. Poverty from PolicyEngine-UK,
          before housing costs as the headline
        </Card>
        <Card icon={IconScale} title="Compared with HMRC" amber>
          {`1p on the basic rate: ${bridgeBenchmark.policyEngine} static, against the ready reckoner's ${bridgeBenchmark.hmrc} (${bridgeBenchmark.gap})`}
        </Card>
      </div>
    </Frame>
  );
}

const demoSteps = [
  {
    title: "Run a shock in Python",
    text: "Government consumption, then income tax, 12 quarters",
    code: "run_reform(var=\"CGG\", shock=1250)",
  },
  {
    title: "Switch on a labelled overlay",
    text: "VAT with price pass-through; Bank Rate with mortgage rates",
    code: "price_passthrough=True",
  },
  {
    title: "Open the dashboard",
    text: "Scenarios, variables and the equations behind them",
    code: "obr-macroeconomic-model.vercel.app",
  },
  {
    title: "Ask an AI agent",
    text: "Score a 21p basic rate through microsimulation and the OBR model",
    code: "start_job · score_reform",
  },
];

export function DemoSlide() {
  return (
    <Frame
      section={sections[4]}
      title="Demo"
      subtitle={`Overlays run locally: the hosted tools take no overlay switch, and the hosted model (${hostedObrPin}) predates VAT pass-through`}
      references={[sources.demo, sources.connect, sources.hostedPin]}
      center
    >
      <div className={styles.demoSteps}>
        {demoSteps.map((step, index) => (
          <div key={step.title} className={styles.demoStep}>
            <span>{index + 1}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
            <code>{step.code}</code>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Working together

export function CollaborateSlide() {
  return (
    <Frame
      section={sections[4]}
      title="Where we could work together"
      references={[sources.obrReadme, sources.review, sources.definePage]}
      center
    >
      <div className={`${styles.cardGrid} ${styles.cols3}`}>
        <Card icon={IconAdjustmentsHorizontal} title="Closures and fiscal rules">
          Alternatives to our default closure, and a spending shock that moves
          borrowing
        </Card>
        <Card icon={IconLeaf} title="Public and green investment">
          The investment closure beside DEFINE-UK scenarios
        </Card>
        <Card icon={IconUsersGroup} title="Distributional macro">
          Macro paths back into household results
        </Card>
        <Card icon={IconSearch} title="Equation review">
          The listing&apos;s open problems, from unemployment to the deflator
        </Card>
        <Card icon={IconUsers} title="Labour market">
          Anchoring participation so unemployment tracks the EFO
        </Card>
        <Card icon={IconBook} title="Joint publications">
          Methods notes or scenario analysis, written together
        </Card>
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame section={sections[4]} title="Questions for NEF" center>
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

export function NextStepsSlide() {
  return (
    <Frame section={sections[4]} title="Proposed next steps" center>
      <div className={`${styles.cardGrid} ${styles.cols2}`}>
        <Card icon={IconCode} title="1 · Hands-on session">
          Run the model together on a scenario NEF chooses
        </Card>
        <Card icon={IconTarget} title="2 · Pick two or three questions">
          Agree scope, closures and what counts as a check
        </Card>
        <Card icon={IconSearch} title="3 · Shared review">
          Go through the open equation and closure issues on GitHub
        </Card>
        <Card icon={IconCalendarEvent} title="4 · Check in">
          Agree a date to review results and a possible write-up
        </Card>
      </div>
    </Frame>
  );
}

const contacts = [
  { label: "policyengine.org", url: "https://policyengine.org", Icon: IconWorld },
  { label: "hello@policyengine.org", url: "mailto:hello@policyengine.org", Icon: IconMail },
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
            className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 transition-colors hover:bg-white/20"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-pe-teal">
              <ContactIcon size={24} stroke={1.8} aria-hidden="true" />
            </span>
            <span className="text-lg font-medium">{label}</span>
          </a>
        ))}
      </div>
    </Slide>
  );
}
