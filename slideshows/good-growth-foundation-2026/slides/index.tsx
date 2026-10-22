import type { ReactNode } from "react";
import {
  IconAdjustments,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconMail,
  IconMap2,
  IconWorld,
} from "@tabler/icons-react";
import Image from "@/components/core/BasePathImage";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import {
  coverage,
  energyHeadline,
  sources,
  steps,
  users,
  type Source,
} from "../content";
import styles from "./deck.module.css";
import { DecileChart, PipelineGraph, RegionEligibilityChart } from "./figures";

const sections = {
  model: "The model",
  data: "The data",
  analysis: "An analysis example",
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

export function TitleSlide() {
  return (
    <CoverSlide
      title="PolicyEngine UK: an introduction"
      subtitle="Presentation for the Good Growth Foundation"
      contentClassName={`pt-28 ${styles.titleCover}`}
      event=""
      date="23 October 2026"
      speakers={[
        { ...speakers["max-ghenis"], title: "CEO, PolicyEngine" },
        {
          ...speakers["maria-juaristi"],
          name: "María Juaristi",
          title: "Research Associate, PolicyEngine",
        },
        { ...speakers["vahid-ahmadi"], title: "Research Associate, PolicyEngine" },
      ]}
    />
  );
}

const whatCards = [
  {
    Icon: IconAdjustments,
    title: "Pick a policy",
    text: "A tax rate, a benefit amount or a new allowance.",
  },
  {
    Icon: IconHome,
    title: "One household",
    text: "How much a family gains or loses.",
  },
  {
    Icon: IconMap2,
    title: "The whole country",
    text: "The cost to government, and who gains and loses.",
  },
];

export function WhatSlide() {
  return (
    <Frame
      title="What PolicyEngine is"
      subtitle="Free, open-source tax and benefit analysis for the UK and the US"
      references={[sources.home]}
    >
      <p className="text-2xl leading-relaxed text-gray-700">
        A model of the UK tax and benefit system that anyone can use, free, in
        a web browser.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-6">
        {whatCards.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="border border-gray-200 border-l-4 border-l-pe-teal bg-white p-6"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pe-teal text-white">
              <Icon size={30} stroke={1.8} aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-pe-dark">{title}</h2>
            <p className="mt-2 text-lg leading-snug text-gray-600">{text}</p>
          </div>
        ))}
      </div>
      <ExternalLink
        href={sources.model.href}
        className={`${styles.codeBanner} mt-8 flex items-center gap-4 rounded-xl bg-pe-teal/10 px-6 py-4 text-xl hover:no-underline`}
      >
        <IconBrandGithub size={28} stroke={1.8} aria-hidden="true" className="text-pe-teal" />
        All the code is public, so anyone can see how each number is calculated.
      </ExternalLink>
    </Frame>
  );
}

export function HowSlide() {
  return (
    <Frame
      title="How it works"
      references={[sources.model, sources.data]}
    >
      <div className="grid grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={step.title} className="border-l-4 border-pe-teal bg-gray-50 p-6">
            <p className="text-5xl font-bold text-pe-teal">{index + 1}</p>
            <h2 className="mt-4 text-2xl font-semibold text-pe-dark">
              {step.title}
            </h2>
            <p className="mt-3 text-xl leading-relaxed text-gray-700">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function CoverageSlide() {
  return (
    <Frame
      section={sections.model}
      title="What the UK model covers"
      subtitle="The rules in policyengine-uk, for every nation of the UK"
      references={[sources.parameters, sources.tests]}
    >
      <div className="grid grid-cols-4 gap-6">
        {coverage.map((group) => (
          <div key={group.title} className="border-l-4 border-pe-teal bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-pe-dark">{group.title}</h2>
            <ul className={styles.coverageList}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={styles.takeaway}>
        732 of the model&apos;s 795 parameter files cite the law or guidance
        they come from, and more than 4,000 automated tests check the
        calculations.
      </p>
      <p className={styles.finePrint}>
        It can also model behavioural responses, such as changes in work and in
        when capital gains are realised. It does not model inheritance tax.
      </p>
    </Frame>
  );
}

export function PipelineSlide() {
  return (
    <Frame
      section={sections.data}
      title="From surveys to a population that represents the UK"
      center
      references={[sources.pipeline, sources.inputs, sources.geography, sources.nationalTargets]}
    >
      <PipelineGraph />
    </Frame>
  );
}

export function EnergyDiscountSlide() {
  const h = energyHeadline;
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
          <strong>{h.recipients}</strong> of {h.households} households ({h.share})
          would be eligible. If all took it up, it would cost{" "}
          <strong>{h.cost}</strong> in 2026-27.
        </p>
        <p className={styles.dashboardLink}>
          <ExternalLink href={sources.energyDashboard.href}>
            Explore other designs in the dashboard ↗
          </ExternalLink>
        </p>
      </div>
      <div className={styles.energyGrid}>
        <RegionEligibilityChart />
        <DecileChart />
      </div>
    </Frame>
  );
}

export function UsersSlide() {
  return (
    <Frame
      title="Who uses PolicyEngine UK"
      subtitle="Organisations that use, cite and support our work"
      references={[sources.hansard, sources.tpa, sources.cps, sources.nef, sources.nuffield]}
    >
      <div className="grid grid-cols-4 gap-x-10 gap-y-12 pt-4">
        {users.map((user) => {
          const logo = user.logo ? (
            <Image
              src={user.logo}
              alt={`${user.name} logo`}
              width={240}
              height={104}
              className={`${styles.communityLogo} w-auto max-w-full object-contain`}
            />
          ) : (
            <span className={`${styles.communityLogo} ${styles.communityInitials}`}>
              {user.initials}
            </span>
          );
          const body = (
            <div className="flex flex-col items-center text-center">
              {logo}
              <p className="mt-3 text-base font-medium leading-snug text-pe-dark">
                {user.name}
              </p>
            </div>
          );
          return user.source ? (
            <ExternalLink key={user.name} href={user.source.href} className="block hover:no-underline">
              {body}
            </ExternalLink>
          ) : (
            <div key={user.name}>{body}</div>
          );
        })}
      </div>
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
