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
  budgetPlan,
  ideas,
  press,
  publications,
  sources,
  steps,
  users,
  type Card,
  type Source,
} from "../content";
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
  subtitle?: ReactNode;
  children: ReactNode;
  references?: Source[];
}) {
  return (
    <Slide className={styles.deck}>
      <SlideHeader>
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

function CompactTile({ item }: { item: Card }) {
  return (
    <ExternalLink
      href={item.href}
      className="group flex flex-col overflow-hidden border border-gray-200 bg-white hover:no-underline"
    >
      <Image
        src={item.image}
        alt={item.alt}
        width={800}
        height={450}
        className={`${styles.compactCover} w-full object-cover`}
      />
      <div className="flex-1 border-l-4 border-pe-teal px-3 py-2">
        <p className="text-xs text-gray-500">{item.date}</p>
        <h2 className="mt-0.5 text-base font-semibold leading-snug text-pe-dark group-hover:underline">
          {item.title}
        </h2>
        {item.text && (
          <p className={`${styles.compactText} mt-1 text-sm leading-snug text-gray-600`}>
            {item.text}
          </p>
        )}
      </div>
    </ExternalLink>
  );
}

export function TitleSlide() {
  return (
    <CoverSlide
      title="PolicyEngine: introduction and Budget planning"
      subtitle="Conversation with The Telegraph"
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
        className="mt-8 flex items-center gap-4 rounded-xl bg-pe-teal/10 px-6 py-4 text-xl text-pe-dark hover:no-underline"
      >
        <IconBrandGithub size={28} stroke={1.8} aria-hidden="true" className="text-pe-teal" />
        All the code is public, so every number can be checked.
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

export function UsersSlide() {
  return (
    <Frame
      title="Our community"
      subtitle="Organisations that use, cite and support our work"
      references={[sources.tpa, sources.cps, sources.nuffield]}
    >
      <div className="grid grid-cols-4 gap-x-10 gap-y-12 pt-4">
        {users.map((user) => {
          const logo = user.logo ? (
            <Image
              src={user.logo}
              alt={`${user.name} logo`}
              width={240}
              height={104}
              className={`${styles.communityLogo} w-auto max-w-full object-contain ${user.darkenLogo ? "brightness-0" : ""}`}
            />
          ) : (
            <span className={`${styles.communityLogo} flex w-16 items-center justify-center rounded-lg bg-pe-teal/10 text-base font-bold text-pe-teal`}>
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

export function PressSlide() {
  return (
    <Frame
      title="In the media and reports"
      subtitle="Press coverage and think-tank reports that drew on PolicyEngine analysis"
      references={[sources.citations]}
    >
      <div className="grid grid-cols-4 gap-4">
        {press.map((item) => (
          <CompactTile key={item.href} item={item} />
        ))}
      </div>
    </Frame>
  );
}

export function PublicationsSlide() {
  return (
    <Frame
      title="Recent UK work"
      subtitle={
        <>
          Interactive analysis published since April.{" "}
          <ExternalLink href={sources.research.href} className="text-pe-teal">
            See all UK research
          </ExternalLink>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4">
        {publications.map((item) => (
          <CompactTile key={item.href} item={item} />
        ))}
      </div>
    </Frame>
  );
}

export function Budget2025Slide() {
  return (
    <Frame
      title="Autumn Budget 2025"
      subtitle="Our dashboard on Budget day: the cost of each measure, who gains and loses, and the effect in every constituency"
      references={[sources.budget2025]}
    >
      <div className="flex items-start justify-center gap-10">
        <ExternalLink href={sources.budget2025.href} className="min-w-0">
          <Image
            src="/screenshots/telegraph-2026/autumn-budget-2025.png"
            alt="Autumn Budget 2025 dashboard showing the policy selector and revenue impact chart"
            width={1600}
            height={1000}
            className={`${styles.chart} w-auto max-w-full`}
          />
        </ExternalLink>
        <ExternalLink href={sources.budget2025.href} className="min-w-0">
          <Image
            src="/screenshots/telegraph-2026/autumn-budget-2025-constituency-map.png"
            alt="Map of the average change in household net income across all 650 constituencies, 2029-30"
            width={1376}
            height={1398}
            className={`${styles.chart} w-auto max-w-full`}
          />
        </ExternalLink>
      </div>
    </Frame>
  );
}

export function Budget2026Slide() {
  return (
    <Frame
      title="Autumn Budget 2026: our plan"
      subtitle="The same kind of dashboard, on our new household data"
    >
      <div className="space-y-0">
        {budgetPlan.map((step) => (
          <div
            key={step.title}
            className="grid grid-cols-[16rem_1fr] gap-8 border-b border-gray-200 py-4"
          >
            <p className="text-xl font-semibold text-pe-teal">{step.when}</p>
            <div>
              <h2 className="text-2xl font-semibold text-pe-dark">{step.title}</h2>
              <p className="mt-1 text-xl text-gray-600">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function IdeasSlide() {
  return (
    <Frame
      title="Ideas for working together"
      subtitle="For discussion"
    >
      <div className="grid grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <div key={idea.title} className="border-l-4 border-pe-teal bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-pe-dark">{idea.title}</h2>
            <p className="mt-2 text-lg leading-snug text-gray-700">{idea.text}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

const contacts = [
  { label: "policyengine.org", url: "https://www.policyengine.org/uk", Icon: IconWorld },
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
