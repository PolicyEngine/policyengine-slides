import type { ReactNode } from "react";
import Image from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import {
  budgetPlan,
  inputRows,
  pipelineSteps,
  recentResearch,
  sources,
} from "../content";
import styles from "./deck.module.css";

type Source = { label: string; href: string };

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
  title,
  subtitle,
  children,
  references = [],
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  references?: Source[];
}) {
  return (
    <Slide className={styles.deck}>
      <SlideHeader>
        <SlideTitle>{title}</SlideTitle>
        {subtitle && (
          <p className="mt-4 text-xl leading-relaxed text-gray-600">
            {subtitle}
          </p>
        )}
      </SlideHeader>
      {children}
      {references.length > 0 && <SourceLine items={references} />}
    </Slide>
  );
}

export function TitleSlide() {
  return (
    <CoverSlide
      title="PolicyEngine and the Scottish Government"
      subtitle="UK data pipeline and fiscal analysis"
      event="Scottish Government"
      date="9 October 2026"
    />
  );
}

export function AgendaSlide() {
  const items = [
    [
      "01",
      "Microcosm UK",
      "How we build, calibrate and validate the population",
    ],
    ["02", "Property income", "Reserved for the modelling update"],
    ["03", "Autumn Budget 2026", "Building on the 2025 dashboard"],
  ];
  return (
    <Frame title="Today’s discussion">
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
      <p className="mt-8 text-xl text-gray-600">
        Closing with recent UK research and interactive analysis.
      </p>
    </Frame>
  );
}

export function PipelineSlide() {
  return (
    <Frame
      title="The Microcosm UK pipeline"
      subtitle="A reproducible build connects survey records, public evidence and the tax-benefit model."
      references={[sources.pipeline, sources.architecture]}
    >
      <ol className="grid grid-cols-5 gap-8 mt-12">
        {pipelineSteps.map((step, i) => (
          <li key={step.title} className="border-t-4 border-pe-teal pt-5">
            <span className="text-5xl font-light text-pe-teal">{i + 1}</span>
            <h2 className="mt-5 text-3xl font-semibold text-pe-dark">
              {step.title}
            </h2>
            <p className="mt-4 text-2xl leading-relaxed text-gray-600">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-2xl text-pe-dark">
        The same linked household structure runs through every stage.
      </p>
    </Frame>
  );
}

export function InputsSlide() {
  return (
    <Frame
      title="The UK data sources"
      subtitle="The FRS provides the household backbone. Donor surveys supply additional distributions and variables."
      references={[sources.inputs, sources.frs]}
    >
      <table className="w-full text-xl text-left">
        <thead className="text-pe-dark">
          <tr className="border-b-2 border-pe-teal">
            <th className="w-[45%] pb-4 pr-10 font-semibold">Source</th>
            <th className="pb-4 font-semibold">Role in the build</th>
          </tr>
        </thead>
        <tbody>
          {inputRows.map(([source, role]) => (
            <tr key={source} className="border-b border-gray-200">
              <th className="py-4 pr-10 font-medium text-pe-dark">{source}</th>
              <td className="py-4 text-gray-600">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Frame>
  );
}

export function EnrichmentSlide() {
  return (
    <Frame
      title="Enriching the survey population"
      subtitle="Income support and conditional imputation serve different roles in the build."
      references={[sources.inputs, sources.architecture]}
    >
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-semibold text-pe-dark">
            Income support
          </h2>
          <p className="mt-5 text-2xl leading-relaxed text-gray-700">
            The SPI support channel adds households with income profiles that
            the FRS alone may underrepresent.
          </p>
          <p className="mt-5 text-2xl leading-relaxed text-gray-700">
            The build retains provenance and refreshes related inputs so the
            copied household remains coherent.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-pe-dark">
            Conditional imputation
          </h2>
          <p className="mt-5 text-2xl leading-relaxed text-gray-700">
            Shared characteristics connect donor surveys to recipient
            households.
          </p>
          <p className="mt-5 text-2xl leading-relaxed text-gray-700">
            Weighted conditional models draw values from a distribution,
            preserving variation beyond an average prediction.
          </p>
        </div>
      </div>
      <p className="mt-10 border-t border-gray-200 pt-6 text-xl text-gray-600">
        Each source has a defined role. Build checks track consistency after the
        transfers.
      </p>
    </Frame>
  );
}

export function ScotlandSlide() {
  const items = [
    [
      "Consistent geography",
      "Assign a Scottish 2022 Census Output Area within the survey region, then derive the constituency and local authority from that area.",
    ],
    [
      "Joint calibration",
      "The dense build calibrates applicable national and local targets together. Geographic scope is an explicit build setting.",
    ],
    [
      "Scotland analysis",
      "Use the relevant Scottish households and weights to analyse UK-wide measures alongside devolved tax and benefit rules.",
    ],
  ];
  return (
    <Frame
      title="Scotland in a coherent UK population"
      subtitle="Geographic assignment and calibration connect local analysis to the national model."
      references={[sources.pipeline]}
    >
      <div className="space-y-7">
        {items.map(([title, text]) => (
          <div
            key={title}
            className="grid grid-cols-[28%_1fr] gap-10 border-b border-gray-200 pb-6"
          >
            <h2 className="text-2xl font-semibold text-pe-dark">{title}</h2>
            <p className="text-2xl leading-relaxed text-gray-700">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-7 text-xl text-gray-600">
        Local detail requires its own validation before a candidate becomes a
        production release.
      </p>
    </Frame>
  );
}

export function ValidationSlide() {
  const checks = [
    [
      "Source and structure checks",
      "Pinned source identities, linked entities and recorded stage evidence",
    ],
    [
      "Calibration diagnostics",
      "Per-target achieved values, errors and any excluded measures",
    ],
    [
      "Candidate comparison",
      "Compare the candidate with the incumbent on the same scored evidence",
    ],
    [
      "Release certification",
      "Verify the candidate, parent spine and diagnostics before packaging a release",
    ],
  ];
  return (
    <Frame
      title="Calibration and release checks"
      subtitle="An implemented pipeline produces candidates. Certification determines whether a cut can ship."
      references={[sources.pipeline, sources.release]}
    >
      <div className="space-y-6">
        {checks.map(([title, text], i) => (
          <div key={title} className="flex gap-7">
            <span className="text-3xl font-semibold text-pe-teal">{i + 1}</span>
            <div>
              <h2 className="text-2xl font-semibold text-pe-dark">{title}</h2>
              <p className="mt-2 text-xl text-gray-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 border-t border-gray-200 pt-5 text-xl text-gray-600">
        Matching aggregate targets does not establish every household
        relationship or every reform’s accuracy.
      </p>
    </Frame>
  );
}

export function PropertyIncomeSlide() {
  return (
    <Frame title="Property income">
      <div className="flex h-[350px] flex-col justify-center border-l-4 border-pe-teal pl-12">
        <p className="text-4xl font-semibold text-pe-dark">Modelling update</p>
        <p className="mt-6 text-2xl text-gray-600">
          Placeholder for the in-flight property-income PR.
        </p>
      </div>
    </Frame>
  );
}

export function Budget2025Slide() {
  return (
    <Frame
      title="The Autumn Budget 2025 foundation"
      subtitle="An interactive dashboard connects policy choices to population and personal impacts."
      references={[sources.budget2025]}
    >
      <div className="grid grid-cols-[65%_1fr] gap-10 items-center">
        <ExternalLink href={sources.budget2025.href}>
          <Image
            src="/screenshots/scottish-government-2026/autumn-budget-2025.png"
            alt="Autumn Budget 2025 dashboard showing policy selection and population impact charts"
            width={1600}
            height={1000}
            className="w-full h-auto max-h-[50vh] object-contain object-left border border-gray-200"
          />
        </ExternalLink>
        <div className="space-y-7 text-2xl text-gray-700">
          <p>Policy selection and comparisons across years</p>
          <p>Fiscal, distributional and constituency results</p>
          <p>Household examples and personal impacts</p>
          <ExternalLink
            href={sources.budget2025.href}
            className="block text-xl font-semibold text-pe-teal"
          >
            Open the 2025 dashboard
          </ExternalLink>
        </div>
      </div>
    </Frame>
  );
}

export function Budget2026Slide() {
  return (
    <Frame
      title="Autumn Budget 2026 plan"
      subtitle="The new development repository builds on the 2025 dashboard. This is the proposed delivery sequence."
      references={[sources.budget2026, sources.budget2025]}
    >
      <div className="space-y-6">
        {budgetPlan.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-[24%_1fr] gap-10 border-b border-gray-200 pb-5"
          >
            <p className="text-xl font-semibold text-pe-teal">{item.stage}</p>
            <div>
              <h2 className="text-2xl font-semibold text-pe-dark">
                {item.title}
              </h2>
              <p className="mt-2 text-xl leading-relaxed text-gray-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-lg text-gray-600">
        The repository still contains inherited 2025 policy content. New 2026
        measures and results depend on the published Budget.
      </p>
    </Frame>
  );
}

export function BudgetScotlandSlide() {
  return (
    <Frame
      title="The Scotland view for Budget 2026"
      subtitle="Proposed outputs for discussion with the Scottish Government"
      references={[sources.budget2026, sources.scotlandTax]}
    >
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-semibold text-pe-dark">
            Households in Scotland
          </h2>
          <ul className="mt-6 space-y-6 text-2xl leading-relaxed text-gray-700 list-disc pl-7">
            <li>Income changes by decile and household type</li>
            <li>Child poverty and income inequality</li>
            <li>Interactions with Scottish tax and benefit rules</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-pe-dark">
            Fiscal and geographic scope
          </h2>
          <ul className="mt-6 space-y-6 text-2xl leading-relaxed text-gray-700 list-disc pl-7">
            <li>
              Separate UK-wide fiscal effects from household impacts in Scotland
            </li>
            <li>Publish local results where the data passes validation</li>
            <li>Document the baseline, policy timing and assumptions</li>
          </ul>
        </div>
      </div>
      <p className="mt-9 border-t border-gray-200 pt-5 text-xl text-gray-600">
        Priority breakdowns and official benchmarks can shape the Scotland view.
      </p>
    </Frame>
  );
}

export function ResearchSlide() {
  return (
    <Frame
      title="Recent UK research"
      subtitle="Selected analyses and interactive tools, June–October 2026"
      references={[sources.research]}
    >
      <div className="space-y-4">
        {recentResearch.map((item) => (
          <div
            key={item.topic}
            className="grid grid-cols-[25%_1fr] gap-8 border-b border-gray-200 pb-3"
          >
            <div>
              <h2 className="text-xl font-semibold text-pe-dark">
                {item.topic}
              </h2>
              <p className="mt-1 text-sm text-gray-500">{item.date}</p>
            </div>
            <div>
              <p className="text-xl text-gray-700">{item.summary}</p>
              <div className="mt-2 flex flex-wrap gap-x-6 text-base text-pe-teal">
                {item.links.map((link) => (
                  <ExternalLink key={link.href} href={link.href}>
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}
