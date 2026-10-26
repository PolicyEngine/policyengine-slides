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
import {
  preparation,
  sources,
  steps,
  type Source,
} from "../content";
import DashboardEmbed from "./DashboardEmbed";
import styles from "./deck.module.css";

const sections = {
  intro: "PolicyEngine",
  budget: "Autumn Budget 2026",
  analysis: "The analysis",
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

// The dashboard's tabs and Population impact sub-tabs that the bar's buttons
// open in the frame. Public finances is Population impact's default sub-tab.
const dashboardViews = [
  { label: "Public finances", query: "?tab=dashboard" },
  { label: "Pensioners", query: "?tab=dashboard&sub=pensioners" },
  { label: "Living standards", query: "?tab=dashboard&sub=living" },
  { label: "Household impact", query: "?tab=household" },
];

// The analysis is presented live, on the dashboard embedded in the slide.
export function DashboardSlide() {
  return (
    <Frame section={sections.analysis} title="The analysis: live dashboard">
      <DashboardEmbed
        href={sources.dashboard.href}
        address="uk-autumn-budget-2026.vercel.app/uk/autumn-budget-2026"
        title={sources.dashboard.label}
        views={dashboardViews}
      />
    </Frame>
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
