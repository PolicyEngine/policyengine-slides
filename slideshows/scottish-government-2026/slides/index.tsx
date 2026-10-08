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
  pipelineChanges,
  propertyConcepts,
  nicsLinks,
  releaseChecks,
  scotlandLocal,
  scotlandNational,
  sources,
  validationStats,
  workPublications,
  type Publication,
  type Source,
} from "../content";
import styles from "./deck.module.css";

const sections = {
  data: "1 · Data pipeline and property income",
  research: "2 · Published work, April–October 2026",
  budget: "3 · Plan for the Autumn Budget",
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
}: {
  section?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  references?: Source[];
}) {
  return (
    <Slide className={styles.deck}>
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
      {children}
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

export function AgendaSlide() {
  const items = [
    [
      "01",
      "New data pipeline and property income",
      "Microcosm UK, what it means for Scotland, and how we are fixing property income",
    ],
    [
      "02",
      "Published work over the last six months",
      "UK analysis and tools since April, with links",
    ],
    [
      "03",
      "Plan for the Autumn Budget",
      "Building on the 2025 dashboard, and how Budget day will run",
    ],
  ];
  return (
    <Frame title="Today">
      <div className="space-y-8">
        {items.map(([number, title, text]) => (
          <div
            key={number}
            className="flex items-baseline gap-8 border-b border-gray-200 pb-6"
          >
            <span className="text-4xl font-semibold text-pe-teal">
              {number}
            </span>
            <div>
              <h2 className="text-3xl font-semibold text-pe-dark">{title}</h2>
              <p className="mt-2 text-2xl text-gray-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function PipelineChangesSlide() {
  return (
    <Frame
      section={sections.data}
      title="From the Enhanced FRS to Microcosm UK"
      subtitle="What has changed since the data pipeline we showed in February"
      references={[sources.pipeline, sources.inputs, sources.geography]}
    >
      <table className="w-full text-left text-xl">
        <thead className="text-pe-dark">
          <tr className="border-b-2 border-pe-teal">
            <th className="w-[16%] pb-3 pr-6 font-semibold" />
            <th className="w-[30%] pb-3 pr-8 font-semibold text-gray-500">
              February
            </th>
            <th className="pb-3 font-semibold">Now</th>
          </tr>
        </thead>
        <tbody>
          {pipelineChanges.map((row) => (
            <tr key={row.topic} className="border-b border-gray-200 align-top">
              <th className="py-3 pr-6 font-semibold text-pe-dark">
                {row.topic}
              </th>
              <td className="py-3 pr-8 text-gray-500">{row.before}</td>
              <td className="py-3 text-gray-800">{row.now}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Frame>
  );
}

export function ScotlandDataSlide() {
  return (
    <Frame
      section={sections.data}
      title="Scotland in the new build"
      subtitle="An update to the Scotland calibration targets we showed in February"
      references={[
        sources.nationalTargets,
        sources.localTargets,
        sources.inputs,
      ]}
    >
      <div className="grid grid-cols-2 gap-14">
        <div>
          <h2 className="text-2xl font-semibold text-pe-dark">
            58 national targets for Scotland
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-7 text-xl leading-relaxed text-gray-700">
            {scotlandNational.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-pe-dark">
            Local detail and Scottish rules
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-7 text-xl leading-relaxed text-gray-700">
            {scotlandLocal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

export function ReleaseChecksSlide() {
  return (
    <Frame
      section={sections.data}
      title="Checked before release"
      subtitle="The national release was certified on 4 October 2026. The local release is still going through the same checks."
      references={[sources.release, sources.pipeline]}
    >
      <div className="grid grid-cols-[40%_1fr] gap-14">
        <div>
          <h2 className="text-2xl font-semibold text-pe-dark">
            Release checks
          </h2>
          <ol className="mt-4 space-y-4 text-xl text-gray-700">
            {releaseChecks.map((check, i) => (
              <li key={check} className="flex gap-4">
                <span className="font-semibold text-pe-teal">{i + 1}</span>
                <span>{check}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-6">
          {validationStats.map((stat) => (
            <div key={stat.label} className="border-l-4 border-pe-teal pl-6">
              <p className="text-xl text-gray-700">{stat.label}</p>
              <p className="mt-2 flex items-baseline gap-4">
                <span className="text-4xl font-semibold text-pe-dark">
                  {stat.value}
                </span>
                <span className="text-xl text-gray-500">
                  vs {stat.benchmark} official
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function PropertyConceptsSlide() {
  return (
    <Frame
      section={sections.data}
      title="Property income: three sources, three concepts"
      subtitle="Each source measures landlords' income at a different point, so they can't simply be scaled to each other"
      references={[sources.propertyIssue, sources.pris]}
    >
      <table className="w-full text-left text-xl">
        <thead className="text-pe-dark">
          <tr className="border-b-2 border-pe-teal">
            <th className="w-[38%] pb-3 pr-8 font-semibold">Source</th>
            <th className="pb-3 font-semibold">What it measures</th>
          </tr>
        </thead>
        <tbody>
          {propertyConcepts.map((row) => (
            <tr key={row.source} className="border-b border-gray-200">
              <th className="py-3 pr-8 font-medium text-pe-dark">
                {row.source}
              </th>
              <td className="py-3 text-gray-700">{row.measures}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 grid grid-cols-2 gap-10">
        <div className="border-l-4 border-pe-teal pl-6">
          <p className="text-xl text-gray-700">
            The Enhanced FRS scaled SPI property income up to the HMRC gross
            figure, about <strong>£55bn</strong>, against roughly{" "}
            <strong>£30bn</strong> of taxable profit in the SPI.
          </p>
        </div>
        <div className="border-l-4 border-pe-teal pl-6">
          <p className="text-xl text-gray-700">
            Leaving out the finance-cost tax reduction overstates landlords'
            income tax by roughly <strong>£1.2–2.6bn</strong> a year.
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function PropertyFixSlide() {
  return (
    <Frame
      section={sections.data}
      title="Property income: what we are changing"
      references={[
        sources.propertyEngine,
        sources.propertyData,
        sources.propertyRates,
      ]}
    >
      <div className="grid grid-cols-3 gap-10">
        <div>
          <p className="text-base font-semibold uppercase tracking-wide text-pe-teal">
            Model · merged 7 October
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-6 text-xl leading-relaxed text-gray-700">
            <li>
              Landlords' finance costs relieved as a tax reduction, with carry
              forward
            </li>
            <li>
              The £1,000 property allowance replaces expenses instead of
              stacking on top of them
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base font-semibold uppercase tracking-wide text-pe-teal">
            Data · in progress
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-6 text-xl leading-relaxed text-gray-700">
            <li>SPI taxable profit used as it is, not scaled up</li>
            <li>Finance costs taken from the SPI tax records</li>
            <li>Landlords' gross receipts matched to HMRC's bands</li>
          </ul>
          <p className="mt-4 text-base text-gray-500">
            In a test build (not a release), the SPI amounts fit to within 0.1%
            and finance costs come to £10.15bn against HMRC's £11.08bn.
          </p>
        </div>
        <div>
          <p className="text-base font-semibold uppercase tracking-wide text-pe-teal">
            From April 2027
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-6 text-xl leading-relaxed text-gray-700">
            <li>
              Property income gets its own rates outside Scotland: 22%, 42% and
              47%
            </li>
            <li>Finance-cost relief moves to 22%</li>
            <li>
              In the model, Scottish taxpayers' property income is taxed at the
              Scottish income tax rates
            </li>
          </ul>
        </div>
      </div>
    </Frame>
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

export function Budget2025Slide() {
  return (
    <Frame
      section={sections.budget}
      title="Where we start: the 2025 dashboard"
      references={[sources.budget2025]}
    >
      <div className="flex items-start gap-12">
        <ExternalLink href={sources.budget2025.href} className="min-w-0">
          <Image
            src="/screenshots/scottish-government-2026/autumn-budget-2025.png"
            alt="Autumn Budget 2025 dashboard showing policy selection and population impact charts"
            width={1600}
            height={1000}
            className={`${styles.shot} w-auto max-w-full border border-gray-200`}
          />
        </ExternalLink>
        <div className="max-w-xl shrink-0 basis-[32%] space-y-5 text-xl leading-relaxed text-gray-700">
          <p>
            Published on Budget day 2025, with fiscal, distributional and
            household results for each measure, and results by constituency.
          </p>
          <p>This year&apos;s dashboard keeps the same structure.</p>
          <ExternalLink
            href={sources.budget2025.href}
            className="block font-semibold text-pe-teal"
          >
            Open the 2025 dashboard
          </ExternalLink>
        </div>
      </div>
    </Frame>
  );
}

export function BudgetDaySlide() {
  return (
    <Frame
      section={sections.budget}
      title="How Budget day will run"
      subtitle="The model and data are fixed in advance, so results can follow the publication quickly"
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
