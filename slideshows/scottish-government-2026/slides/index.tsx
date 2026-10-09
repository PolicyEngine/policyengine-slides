import type { ReactNode } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconWorld,
} from "@tabler/icons-react";
import Image from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import {
  budgetPlan,
  energyPublications,
  nicsLinks,
  scotlandEnergyHeadline,
  sources,
  workPublications,
  type Publication,
  type Source,
} from "../content";
import styles from "./deck.module.css";
import {
  PipelineGraph,
  PropertyWaterfall,
  PropertyFlow,
  RegionEligibilityChart,
  ScotlandDecileChart,
  TargetTable,
} from "./figures";

const sections = {
  data: "1 · The UK's microdata",
  property: "2 · Property income",
  analysis: "3 · Analysis example",
  research: "4 · Published work, April–October 2026",
  budget: "5 · Plan for the Autumn Budget",
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

function PublicationCard({ item }: { item: Publication }) {
  return (
    <ExternalLink
      href={item.href}
      className="group block overflow-hidden border border-gray-200 bg-white hover:no-underline"
    >
      <Image
        src={item.image}
        alt={item.alt}
        width={1200}
        height={800}
        className={`${styles.cover} w-full object-cover`}
      />
      <div className="border-l-4 border-pe-teal p-4">
        <p className="text-sm text-gray-500">{item.date}</p>
        <h2 className="mt-1 text-xl font-semibold leading-snug text-pe-dark group-hover:underline">
          {item.title}
        </h2>
        <p className="mt-2 text-base leading-snug text-gray-600">
          {item.finding}
        </p>
      </div>
    </ExternalLink>
  );
}

export function TitleSlide() {
  return (
    <CoverSlide
      title="PolicyEngine: data pipeline, property income and Budget planning"
      subtitle="Presentation for Scottish Government"
      contentClassName={`pt-28 ${styles.titleCover}`}
      event=""
      date="9 October 2026"
      speakers={[
        { ...speakers["vahid-ahmadi"], title: "Research Associate, PolicyEngine" },
        { ...speakers["max-ghenis"], title: "CEO, PolicyEngine" },
        {
          ...speakers["maria-juaristi"],
          name: "María Juaristi",
          title: "Research Associate, PolicyEngine",
        },
      ]}
    />
  );
}

function SectionSlide({
  part,
  title,
  subtitle,
}: {
  part: number;
  title: string;
  subtitle: string;
}) {
  return (
    <Slide className={styles.deck}>
      <div className="flex h-full flex-col justify-center">
        <p className="mb-3 text-base font-bold uppercase tracking-[0.16em] text-pe-teal">
          Part {part} of {agenda.length}
        </p>
        <h1 className="font-display text-6xl font-bold leading-tight tracking-tight text-pe-dark">
          {title}
        </h1>
        <div className="accent-bar mt-6 w-32" />
        <p className="mt-6 max-w-4xl text-2xl leading-snug text-gray-600">{subtitle}</p>
      </div>
    </Slide>
  );
}

const agenda = [
  {
    title: "How we build the UK's microdata",
    text: "The sources, the pipeline and the Scottish targets",
  },
  {
    title: "Modelling property income",
    text: "Which data informs each piece, and how it enters the dataset",
  },
  {
    title: "An analysis example",
    text: "A targeted energy bill discount, by region and across Scotland",
  },
  {
    title: "Published work since April",
    text: "UK analysis and tools, with links",
  },
  {
    title: "Plan for the Autumn Budget",
    text: "Building on the 2025 dashboard, and how Budget day will run",
  },
];

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

export function DataSectionSlide() {
  return (
    <SectionSlide part={1} title={agenda[0].title} subtitle={agenda[0].text} />
  );
}

export function PipelineSlide() {
  return (
    <Frame
      section={sections.data}
      title="From surveys to a population that represents the UK"
      center
      references={[sources.pipeline, sources.inputs, sources.geography]}
    >
      <PipelineGraph />
    </Frame>
  );
}

export function TargetsSlide() {
  return (
    <Frame
      section={sections.data}
      title="Scottish targets in the Microcosm UK build"
      center
      references={[sources.nationalTargets, sources.localTargets]}
    >
      <TargetTable />
      <p className={styles.tableNote}>
        The national release calibrates to the 58 Scotland-wide rows. The 1,857
        council and constituency rows are for the local-area build, which is still
        being validated.
      </p>
    </Frame>
  );
}

export function ReleaseChecksSlide() {
  return (
    <Frame
      section={sections.data}
      title="Checking the fit to Scottish statistics"
      subtitle="Compare the model with official targets in the live UK calibration dashboard"
    >
      <div className="mb-3 flex items-center justify-between gap-6 text-base text-gray-600">
        <p>Review Scotland&apos;s population, income and benefit targets.</p>
        <ExternalLink href={sources.diagnostics.href} className="shrink-0 font-semibold text-pe-teal">Open the live dashboard ↗</ExternalLink>
      </div>
      <iframe
        src={sources.diagnostics.href}
        title="Microcosm UK calibration diagnostics"
        loading="lazy"
        className={`${styles.diagnosticsEmbed} pointer-events-auto`}
      />
    </Frame>
  );
}

export function PropertySectionSlide() {
  return (
    <SectionSlide part={2} title={agenda[1].title} subtitle={agenda[1].text} />
  );
}

export function PropertyConceptsSlide() {
  return (
    <Frame
      section={sections.property}
      title="Landlords' income, measured three ways"
      center
      references={[sources.pris, sources.propertyIssue]}
    >
      <PropertyWaterfall />
      <p className={styles.waterfallTakeaway}>
        The Enhanced FRS, still the website&apos;s UK default, multiplies
        tax-record profit by 1.9, so it treats about <strong>£56bn</strong> as
        taxable property income, more than the rent itself, against roughly{" "}
        <strong>£31bn</strong>.
      </p>
      <p className={styles.finePrint}>
        UK, 2024-25, individual landlords. Mortgage interest is pro-rated from
        HMRC&apos;s all-landlord figure; the FRS total covers landlords
        reporting a profit.
      </p>
    </Frame>
  );
}

export function PropertyModelSlide() {
  return (
    <Frame
      section={sections.property}
      title="How we build landlords' income, step by step"
      center
      references={[sources.propertyData, sources.propertyEngine, sources.pris]}
    >
      <PropertyFlow />
      <p className={styles.status}>
        The tax rules in step 7 are released (policyengine-uk 2.123.0). Steps 3 to 6
        use a draft data update (Microcosm #1145), and step 4 awaits a decision.
      </p>
    </Frame>
  );
}

export function AnalysisSectionSlide() {
  return (
    <SectionSlide part={3} title={agenda[2].title} subtitle={agenda[2].text} />
  );
}

export function EnergyDiscountSlide() {
  const h = scotlandEnergyHeadline;
  return (
    <Frame
      section={sections.analysis}
      title="A targeted energy bill discount"
      center
      subtitle="The Resolution Foundation's £2bn option for early 2027, modelled as £175 per eligible household in Great Britain: those on a means-tested benefit, or where no one has taxable income of £24,000 or more"
      references={[sources.energyDashboard, sources.energyAnalysis, sources.energyProposal]}
    >
      <div className={styles.energyStats}>
        <p>
          In Scotland, <strong>{h.recipients}</strong> of {h.households} households
          (44%) would be eligible. If all took it up, it would cost{" "}
          <strong>{h.cost}</strong> of the {h.gbCost} GB total.
        </p>
        <p className={styles.dashboardLink}>
          <ExternalLink href={sources.energyDashboard.href}>
            Explore other designs in the dashboard ↗
          </ExternalLink>
        </p>
      </div>
      <div className={styles.energyGrid}>
        <RegionEligibilityChart />
        <ScotlandDecileChart />
      </div>
    </Frame>
  );
}

export function ResearchSectionSlide() {
  return (
    <SectionSlide part={4} title={agenda[3].title} subtitle={agenda[3].text} />
  );
}

export function EnergyWorkSlide() {
  return (
    <Frame
      section={sections.research}
      title="Energy and the cost of living"
      references={[sources.research]}
    >
      <div className="grid grid-cols-4 gap-6">
        {energyPublications.map((item) => (
          <PublicationCard key={item.href} item={item} />
        ))}
      </div>
    </Frame>
  );
}

export function WorkBenefitsSlide() {
  return (
    <Frame
      section={sections.research}
      title="Work, benefits and new shocks"
    >
      <div className="grid grid-cols-4 gap-6">
        {workPublications.map((item) => (
          <PublicationCard key={item.href} item={item} />
        ))}
      </div>
      <p className="mt-6 text-lg text-gray-600">
        Also: employer NICs for{" "}
        <ExternalLink href={nicsLinks[0].href} className="text-pe-teal">
          {nicsLinks[0].label}
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href={nicsLinks[1].href} className="text-pe-teal">
          {nicsLinks[1].label}
        </ExternalLink>
        , and the full{" "}
        <ExternalLink href={sources.research.href} className="text-pe-teal">
          UK research library
        </ExternalLink>
        .
      </p>
    </Frame>
  );
}

export function BudgetSectionSlide() {
  return (
    <SectionSlide part={5} title={agenda[4].title} subtitle={agenda[4].text} />
  );
}

const startingPoints = [
  {
    title: "Autumn Budget 2025 dashboard",
    text: "Fiscal, distributional and household results, including results by constituency.",
    href: sources.budget2025.href,
    image: "/screenshots/scottish-government-2026/autumn-budget-2025.png",
    alt: "Autumn Budget 2025 dashboard showing policy selection and population impact charts",
  },
  {
    title: "Scottish Budget 2026-27 dashboard",
    text: "Fiscal and distributional results for the last Scottish Budget's income tax and benefit measures.",
    href: sources.scottishBudget.href,
    image: "/screenshots/scottish-government-2026/scottish-budget-2026-27.png",
    alt: "Scottish Budget 2026-27 dashboard showing the estimated budgetary impact of six measures",
  },
];

export function Budget2025Slide() {
  return (
    <Frame
      section={sections.budget}
      title="Where we are starting"
      subtitle="Our dashboards from the last UK and Scottish Budgets; click either to open it"
      references={[sources.budget2025, sources.scottishBudget]}
      center
    >
      <div className={styles.previewGrid}>
        {startingPoints.map((item) => (
          <ExternalLink key={item.href} href={item.href} className={styles.previewCard}>
            <Image
              src={item.image}
              alt={item.alt}
              width={1600}
              height={1000}
              className={styles.previewImage}
            />
            <div className={styles.previewBody}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span>Open the dashboard ↗</span>
            </div>
          </ExternalLink>
        ))}
      </div>
    </Frame>
  );
}

export function BudgetDaySlide() {
  return (
    <Frame
      section={sections.budget}
      title="How Budget day will run"
      subtitle="The Budget is on Wednesday 28 October. We plan to freeze a matched model and data pair the week before, so results can follow the documents quickly"
      references={[sources.budget2026]}
    >
      <div className="space-y-5">
        {budgetPlan.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-[24%_1fr] gap-10 border-b border-gray-200 pb-4"
          >
            <p className="text-xl font-semibold text-pe-teal">{item.stage}</p>
            <div>
              <h2 className="text-2xl font-semibold text-pe-dark">
                {item.title}
              </h2>
              <p className="mt-1 text-xl leading-relaxed text-gray-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

const contacts = [
  { label: "policyengine.org/uk/research", url: sources.research.href, Icon: IconWorld },
  { label: "hello@policyengine.org", url: "mailto:hello@policyengine.org", Icon: IconMail },
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
      <h1 className="font-display text-6xl font-bold mb-12 text-center">Thank you</h1>
      <div className="grid w-full max-w-5xl grid-cols-2 gap-5">
        {contacts.map(({ label, url, Icon }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 transition-colors hover:bg-white/20"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-pe-teal">
              <Icon size={24} stroke={1.8} aria-hidden="true" />
            </span>
            <span className="text-lg font-medium">{label}</span>
          </a>
        ))}
      </div>
    </Slide>
  );
}
