import type { ReactNode } from "react";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconChartBar,
  IconCircleCheck,
  IconClockHour4,
  IconFileCode,
  IconHome,
  IconInfoCircle,
  IconMail,
  IconWorld,
} from "@tabler/icons-react";
import Image from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import { dashboard } from "../dashboardData";
import {
  candidateLabel,
  pastEvents,
  preparation,
  sources,
  steps,
  type Source,
} from "../content";
import styles from "./deck.module.css";
import {
  DecileGrowth,
  HouseholdCurve,
  MeasureLegend,
  StackedChart,
  TimeSeries,
  bn,
  fiscalYear,
  pct,
  pounds,
  signed,
} from "./figures";

const sections = {
  intro: "PolicyEngine",
  budget: "Autumn Budget 2026",
  analysis: "Candidate measures",
  living: "Living standards outlook",
};

const YEAR = fiscalYear(dashboard.year);

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
  label,
}: {
  section?: string;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  references?: Source[];
  /** A one-line status note under the subtitle, such as the candidate label. */
  label?: string;
}) {
  return (
    <Slide className={styles.deck}>
      <div className="flex h-full flex-col">
        <SlideHeader>
          {section && <p className={styles.section}>{section}</p>}
          <SlideTitle>{title}</SlideTitle>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {label && (
            <p className={styles.candidate}>
              <IconInfoCircle size={18} stroke={1.8} aria-hidden="true" />
              {label}
            </p>
          )}
        </SlideHeader>
        <div className={styles.body}>{children}</div>
      </div>
      {references.length > 0 && <SourceLine items={references} />}
    </Slide>
  );
}

export function TitleSlide() {
  return (
    <CoverSlide
      title="Analysing the UK Autumn Budget 2026 with PolicyEngine"
      contentClassName={`pt-28 ${styles.titleCover}`}
      event="Webinar"
      date="Wednesday 28 October 2026"
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

const stepIcons = [IconFileCode, IconHome, IconChartBar];

// The Good Growth Foundation deck's merged "What PolicyEngine is" slide.
export function WhatSlide() {
  return (
    <Frame
      section={sections.intro}
      title="What PolicyEngine is"
      subtitle="A free, open-source model of UK taxes and benefits"
      references={[sources.home, sources.model, sources.data]}
    >
      <div className={styles.whatBody}>
      <div className={styles.whatFlow}>
        {steps.map((step, index) => {
          const Icon = stepIcons[index];
          return (
            <div key={step.title} className={styles.whatStepWrap}>
              <div className={styles.whatStep}>
                <span className={styles.whatIcon}>
                  <Icon size={40} stroke={1.8} aria-hidden="true" />
                </span>
                <h2 className={styles.whatStepTitle}>{step.title}</h2>
                <p className={styles.whatStepText}>{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <IconArrowRight size={44} stroke={1.6} aria-hidden="true" className={styles.whatArrow} />
              )}
            </div>
          );
        })}
      </div>
      <ExternalLink
        href={sources.model.href}
        className={`${styles.whatCode} hover:no-underline`}
      >
        <IconBrandGithub size={24} stroke={1.8} aria-hidden="true" />
        All the code is public, so anyone can check how each number is calculated.
      </ExternalLink>
      </div>
    </Frame>
  );
}

export function PreparationSlide() {
  return (
    <Frame
      section={sections.budget}
      title="How we prepared for Budget day"
      subtitle="Budget day is Wednesday 28 October"
      references={[sources.dashboardCode]}
    >
      <div className="grid grid-cols-3 gap-5">
        {preparation.map((item) => {
          const done = item.status === "Done";
          const Icon = done ? IconCircleCheck : IconClockHour4;
          return (
            <div key={item.title} className={styles.prepCard}>
              <p className={done ? styles.statusDone : styles.statusReview}>
                <Icon size={18} stroke={2} aria-hidden="true" />
                {item.status}
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-snug text-pe-dark">{item.title}</h2>
              <p className="mt-2 text-lg leading-snug text-gray-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}

export function PastBudgetsSlide() {
  return (
    <Frame
      section={sections.budget}
      title="Past Budgets, on today's model"
      subtitle="Earlier fiscal events rerun on the same model and data as 2026, and every published score of last year's Budget set beside ours"
      references={[sources.pastEvents, sources.review2025]}
    >
      <div className={styles.pastGrid}>
        <div>
          <h2 className={styles.panelTitle}>Six fiscal events since 2023, each on its own page</h2>
          <div className={styles.eventTable}>
            <div className={styles.eventHead}>
              <span>Event</span>
              <span className="text-right">Measures modelled</span>
            </div>
            {pastEvents.map((row) => (
              <div key={row.event} className={styles.eventRow}>
                <span>{row.event}</span>
                <span className="text-right tabular-nums">{row.measures}</span>
              </div>
            ))}
          </div>
          <p className={styles.panelNote}>
            Revenue and income-decile charts and the OBR comparison for each
            event; every measure not modelled is listed with its reason. In
            review, to publish after 28 October.
          </p>
        </div>
        <ExternalLink href={sources.review2025.href} className={styles.shotCard}>
          <Image
            src="/screenshots/introduction-2026/autumn-budget-2025-in-review.png"
            alt="Autumn Budget 2025 in review: timeline, scores and household calculator tabs"
            width={2880}
            height={1800}
            className={styles.shot}
          />
          <p className={styles.shotCaption}>
            <strong>Autumn Budget 2025 in review:</strong>{" "}163 publications on
            one timeline, each score beside the Budget&apos;s and
            PolicyEngine&apos;s, and the published household examples
            replicated.
          </p>
        </ExternalLink>
      </div>
    </Frame>
  );
}

export function RevenueSlide() {
  const columns = dashboard.revenue.map((r) => ({
    label: fiscalYear(r.year),
    values: r.values,
    net: r.net,
    highlight: r.year === dashboard.year,
  }));
  return (
    <Frame
      section={sections.analysis}
      title="Revenue impact"
      subtitle="The nine measures' effect on government revenue, 2026-27 to 2031-32; below zero is a cost to the Treasury"
      label={candidateLabel}
      references={[sources.dashboard]}
    >
      <div className={styles.chartWithLegend}>
        <StackedChart
          columns={columns}
          axisLabel="Impact (£bn)"
          tickFormat={(v) => `£${v}bn`}
          netLabel={(v) => signed(v, bn)}
        />
        <MeasureLegend netName="Net impact" />
      </div>
    </Frame>
  );
}

export function DecilesSlide() {
  const absolute = dashboard.deciles.map((d) => ({
    label: String(d.decile),
    values: d.absolute,
    net: d.absoluteNet,
  }));
  const relative = dashboard.deciles.map((d) => ({
    label: String(d.decile),
    // distributional_impact.csv already holds percentages
    values: d.relative,
    net: d.relativeNet,
  }));
  return (
    <Frame
      section={sections.analysis}
      title={`Impact by income decile, ${YEAR}`}
      subtitle="Average change in household net income: in pounds a year (left) and as a share of income (right)"
      label={candidateLabel}
      references={[sources.dashboard]}
    >
      <div className={styles.twoCharts}>
        <figure>
          <figcaption>Pounds a year per household</figcaption>
          <StackedChart
            columns={absolute}
            axisLabel="£ a year"
            xLabel="Income decile (1 = lowest)"
            tickFormat={(v) => `£${v}`}
            netLabel={(v) => signed(v, pounds)}
            height={480}
          />
        </figure>
        <figure>
          <figcaption>Share of net income</figcaption>
          <StackedChart
            columns={relative}
            axisLabel="% of net income"
            xLabel="Income decile (1 = lowest)"
            tickFormat={(v) => `${v}%`}
            netLabel={(v) => signed(v, (a) => pct(a, 2))}
            height={480}
          />
        </figure>
      </div>
      <MeasureLegend />
    </Frame>
  );
}

const AGE_LABELS: Record<string, string> = {
  "0-15": "Under 16",
  "16-24": "16 to 24",
  "25-34": "25 to 34",
  "35-49": "35 to 49",
  "50-64": "50 to 64",
  "65+": "65 and over",
};

export function AgeSlide() {
  const columns = dashboard.ages.map((a) => ({
    label: AGE_LABELS[a.band],
    values: a.values,
    net: a.net,
    highlight: a.band === "16-24",
  }));
  const shown = dashboard.measures
    .map((m) => m.id)
    .filter((id) => dashboard.ages.some((a) => (a.values as Record<string, number>)[id]));
  return (
    <Frame
      section={sections.analysis}
      title={`Average change by age, ${YEAR}`}
      subtitle="Change in household net income per person, in pounds a year; each person counts their household's change, with young people aged 16 to 24 highlighted"
      label={candidateLabel}
      references={[sources.dashboard]}
    >
      <div className={styles.chartWithLegend}>
        <StackedChart
          columns={columns}
          axisLabel="£ a year per person"
          xLabel="Age group"
          tickFormat={(v) => `£${v}`}
          netLabel={(v) => signed(v, pounds)}
        />
        <MeasureLegend only={shown} />
      </div>
    </Frame>
  );
}

export function HouseholdsSlide() {
  const top = Math.max(...dashboard.households.flatMap((h) => h.points.map(([, v]) => v)));
  const yMax = Math.ceil(top / 50) * 50;
  return (
    <Frame
      section={sections.analysis}
      title={`Example households, ${YEAR}`}
      subtitle="Change in net income from all nine measures as each household's income varies, everything else held fixed"
      label={candidateLabel}
      references={[sources.dashboard]}
    >
      <div className={styles.householdGrid}>
        {dashboard.households.map((h) => (
          <figure key={h.id} className={styles.householdCard} title={h.definition}>
            <figcaption>
              <h2>{h.label}</h2>
              <p>{h.definition}</p>
            </figcaption>
            <HouseholdCurve points={h.points} xMax={h.xMax} yMax={yMax} />
            <p className={styles.householdAxis}>{h.xLabel}</p>
          </figure>
        ))}
      </div>
    </Frame>
  );
}

const ls = dashboard.living;

export function IncomesSlide() {
  return (
    <Frame
      section={sections.living}
      title="Incomes before the Budget"
      subtitle="The baseline the measures are scored against: current law and the OBR's March 2026 forecast, with no Budget measures"
      references={[sources.dashboard, sources.obrMarch2026]}
    >
      <div className={styles.twoCharts}>
        <figure>
          <figcaption>Median household income (BHC), 2027-28 prices</figcaption>
          <TimeSeries
            outturn={ls.medianOutturn}
            projection={ls.medianProjection}
            format={(v) => `£${v / 1000}k`}
            yMin={0}
            yMax={50000}
            axisLabel="£ a year"
          />
        </figure>
        <figure>
          <figcaption>Real change in median income by decile, 2027-28 to 2031-32</figcaption>
          <DecileGrowth values={ls.decileGrowth} />
        </figure>
      </div>
      <LsLegend />
    </Frame>
  );
}

export function PovertySlide() {
  return (
    <Frame
      section={sections.living}
      title="Poverty before the Budget"
      subtitle="The same baseline: current law and the OBR's March 2026 forecast, with no Budget measures"
      references={[sources.dashboard, sources.obrMarch2026]}
    >
      <div className={styles.twoCharts}>
        <figure>
          <figcaption>Absolute poverty (BHC), all people</figcaption>
          <TimeSeries
            outturn={ls.povertyOutturn}
            projection={ls.povertyProjection}
            format={(v) => `${Math.round(v * 100)}%`}
            yMin={0}
            yMax={0.2}
            axisLabel="Poverty rate"
          />
        </figure>
        <figure>
          <figcaption>Relative poverty (AHC) by family type, 2027-28 and 2031-32</figcaption>
          <div className={styles.familyRows}>
            {ls.families.map((f) => (
              <div key={f.label} className={styles.familyRow}>
                <span>{f.label}</span>
                <span className={styles.familyTrack}>
                  <span className={styles.familyStart} style={{ left: `${f.start * 250}%` }} />
                  <span className={styles.familyEnd} style={{ left: `${f.end * 250}%` }} />
                </span>
                <span className="tabular-nums">
                  {pct(f.start * 100)} → {pct(f.end * 100)}
                </span>
              </div>
            ))}
            <div className={styles.familyAxis}>
              <span />
              <span className={styles.familyTicks}>
                {[0, 10, 20, 30, 40].map((t) => (
                  <span key={t} style={{ left: `${t * 2.5}%` }}>{t}%</span>
                ))}
              </span>
              <span />
            </div>
            <p className={styles.familyKey}>
              <i className={styles.familyStart} /> 2027-28
              <i className={styles.familyEnd} /> 2031-32
            </p>
          </div>
        </figure>
      </div>
      <LsLegend />
    </Frame>
  );
}

function LsLegend() {
  return (
    <p className={styles.lsLegend}>
      <span><i className={styles.outturnKey} />Official: DWP Households Below Average Income</span>
      <span><i className={styles.projectionKey} />Baseline projection, policyengine {dashboard.source.policyengine}</span>
    </p>
  );
}

const contacts = [
  { label: "policyengine.org/uk", url: sources.home.href, Icon: IconWorld },
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
      <div className={styles.closing}>
        <h1 className={`${styles.closingTitle} font-display font-bold`}>Thank you</h1>
        <ExternalLink href={sources.dashboard.href} className={`${styles.closingDashboard} hover:no-underline`}>
          <span className={styles.closingDashboardText}>
            <span className={styles.closingEyebrow}>Explore the dashboard</span>
            <span className={styles.closingMain}>uk-autumn-budget-2026.vercel.app</span>
            <span className={styles.closingHint}>Scan the code to open it on your phone</span>
          </span>
          <Image
            src="/images/introduction-2026/dashboard-qr.svg"
            alt="QR code for the Autumn Budget 2026 dashboard"
            width={240}
            height={240}
            className={styles.closingQr}
          />
        </ExternalLink>
        <div className={styles.closingContacts}>
          {contacts.map(({ label, url, Icon }) => (
            <ExternalLink key={url} href={url} className={`${styles.closingContact} hover:no-underline`}>
              <span className={styles.closingContactIcon}>
                <Icon size={20} stroke={1.8} aria-hidden="true" />
              </span>
              <span>{label}</span>
            </ExternalLink>
          ))}
        </div>
      </div>
    </Slide>
  );
}
