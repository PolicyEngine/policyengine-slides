import type { ReactNode } from "react";
import {
  IconBolt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCalculator,
  IconChartBar,
  IconCircleCheck,
  IconClockHour4,
  IconFlag,
  IconHistory,
  IconListCheck,
  IconLock,
  IconMail,
  IconScale,
  IconShieldCheck,
  IconUsers,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";
import Image from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import {
  about,
  lastBudget,
  mockBudgets,
  pillars,
  preparation,
  sources,
  type Source,
} from "../content";
import DashboardEmbed from "./DashboardEmbed";
import styles from "./deck.module.css";

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
    <p className={styles.sources}>
      <span>Sources</span>
      {items.map((item) => (
        <ExternalLink key={item.href} href={item.href}>
          {item.label}
        </ExternalLink>
      ))}
    </p>
  );
}

// A content slide as in the BLS and CPID decks: the title and accent bar, an
// optional note at the right of the title, then the body and its sources.
function Frame({
  title,
  aside,
  children,
  references = [],
}: {
  title: string;
  /** Short text on the title's line, at the right, such as an address. */
  aside?: ReactNode;
  children: ReactNode;
  references?: Source[];
}) {
  return (
    <Slide className={styles.deck}>
      <div className="flex h-full flex-col">
        <SlideHeader>
          <div className={styles.titleRow}>
            <SlideTitle>{title}</SlideTitle>
            {aside && <span className={styles.titleAside}>{aside}</span>}
          </div>
        </SlideHeader>
        <div className={styles.body}>
          {children}
          {references.length > 0 && <SourceLine items={references} />}
        </div>
      </div>
    </Slide>
  );
}

export function TitleSlide() {
  return (
    <CoverSlide
      title="Analysing the UK Autumn Budget 2026 with PolicyEngine"
      contentClassName={`pt-28 ${styles.titleCover}`}
      event="Webinar"
      date="Wednesday 28 October 2026, 4:30pm UK"
      speakers={[
        { ...speakers["vahid-ahmadi"], title: "Research Associate" },
        { ...speakers["max-ghenis"], title: "CEO" },
        {
          ...speakers["maria-juaristi"],
          name: "María Juaristi",
          title: "Research Associate",
        },
      ]}
    />
  );
}

// Each pillar's icon and band colour, in the order of `pillars`.
const pillarLooks: { icon: Icon; color: string }[] = [
  { icon: IconScale, color: "var(--pe-teal)" },
  { icon: IconUsers, color: "var(--pe-teal-dark)" },
  { icon: IconChartBar, color: "var(--pe-dark)" },
];

// The BLS and CPID decks' three-pillar slide, with the UK model's lists.
export function WhatSlide() {
  return (
    <Frame
      title="What PolicyEngine is"
      references={[sources.home, sources.model, sources.data]}
    >
      <p className={styles.lead}>{about}</p>
      <div className={styles.pillars}>
        {pillars.map((pillar, index) => {
          const { icon: PillarIcon, color } = pillarLooks[index];
          return (
            <div key={pillar.title} className={`content-card ${styles.pillar}`}>
              <div className={styles.pillarHead} style={{ background: color }}>
                <PillarIcon size={30} stroke={1.6} aria-hidden="true" />
                <h2>{pillar.title}</h2>
              </div>
              <ul className={styles.pillarList}>
                {pillar.items.map((item) => (
                  <li key={item}>
                    <span className={styles.pillarDot} style={{ background: color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <ExternalLink
        href={sources.model.href}
        className={`accent-block ${styles.callout} hover:no-underline`}
      >
        <IconBrandGithub size={24} stroke={1.8} aria-hidden="true" />
        All the code is public, so anyone can check how each number is
        calculated.
      </ExternalLink>
    </Frame>
  );
}

// Each preparation item's icon, in the order of `preparation`.
const prepIcons: Icon[] = [IconListCheck, IconLock, IconCalculator, IconBolt, IconShieldCheck];

export function PreparationSlide() {
  return (
    <Frame
      title="How we prepared for Budget day"
      references={[sources.dashboardCode, sources.dashboard2025Code]}
    >
      <div className={styles.timeline}>
        <p className={styles.timelineLabel}>
          <strong>Last year&apos;s Budget, then five mock Budgets</strong>
          <span>Full Budget-day runs on invented measures, to rehearse the day</span>
        </p>
        <ol className={styles.timelineTrack}>
          <li className={`${styles.timelineStop} ${styles.timelinePast}`}>
            <span className={styles.timelineDot}>
              <IconHistory size={18} stroke={2.2} aria-hidden="true" />
            </span>
            <span className={styles.timelineDate}>{lastBudget.title}</span>
            <span className={styles.timelineNote}>{lastBudget.text}</span>
          </li>
          {mockBudgets.map((date, index) => (
            <li key={date} className={styles.timelineStop}>
              <span className={styles.timelineDot}>{index + 1}</span>
              <span className={styles.timelineDate}>{date}</span>
            </li>
          ))}
          <li className={`${styles.timelineStop} ${styles.timelineDay}`}>
            <span className={styles.timelineDot}>
              <IconFlag size={18} stroke={2.2} aria-hidden="true" />
            </span>
            <span className={styles.timelineDate}>Budget day, 28 Oct</span>
          </li>
        </ol>
      </div>
      <div className={`content-card ${styles.prepList}`}>
        {preparation.map((item, index) => {
          const ItemIcon = prepIcons[index];
          const done = item.status === "Done";
          const StatusIcon = done ? IconCircleCheck : IconClockHour4;
          return (
            <div key={item.title} className={styles.prepRow}>
              <span className={styles.prepIcon}>
                <ItemIcon size={22} stroke={1.8} aria-hidden="true" />
              </span>
              <div>
                <h2 className={styles.prepTitle}>{item.title}</h2>
                <p className={styles.prepText}>{item.text}</p>
              </div>
              <span className={done ? styles.statusDone : styles.statusReview}>
                <StatusIcon size={16} stroke={2} aria-hidden="true" />
                {item.status}
              </span>
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
  { label: "Pensioners", query: "?tab=dashboard&sub=age&age=pensioners" },
  { label: "Living standards", query: "?tab=dashboard&sub=living" },
  { label: "Household calculator", query: "?tab=household" },
];

// The analysis is presented live, on the dashboard embedded in the slide, with
// its address beside the title as on the CPID deck's live demo.
export function DashboardSlide() {
  return (
    <Frame
      title="The analysis: live dashboard"
      aside={new URL(sources.dashboard.href).host}
    >
      <DashboardEmbed
        href={sources.dashboard.href}
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
        <ExternalLink href={sources.dashboard.href} className={`${styles.closingCard} hover:no-underline`}>
          <Image
            src="/images/introduction-2026/dashboard-qr.svg"
            alt="QR code for the Autumn Budget 2026 dashboard"
            width={240}
            height={240}
            className={styles.closingQr}
          />
          <span className={styles.closingCardText}>
            <span className={styles.closingEyebrow}>Explore the dashboard</span>
            {/* The full address: the host alone does not serve the dashboard. */}
            <span className={styles.closingAddress}>
              {sources.dashboard.href.replace("https://", "")}
            </span>
            <span className={styles.closingHint}>Scan the code to open it on your phone</span>
          </span>
        </ExternalLink>
        <div className={styles.closingContacts}>
          {contacts.map(({ label, url, Icon }) => (
            <ExternalLink key={url} href={url} className={`${styles.closingContact} hover:no-underline`}>
              <span className={styles.closingContactIcon}>
                <Icon size={18} stroke={1.8} aria-hidden="true" />
              </span>
              <span>{label}</span>
            </ExternalLink>
          ))}
        </div>
      </div>
    </Slide>
  );
}
