import type { ReactNode } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBuildingBank,
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

function CardTile({ item }: { item: Card }) {
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
        {item.text && (
          <p className="mt-2 text-base leading-snug text-gray-600">
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
      title="PolicyEngine"
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

export function WhatSlide() {
  return (
    <Frame
      title="What PolicyEngine is"
      subtitle="Free, open-source tax and benefit analysis for the UK and the US"
      references={[sources.home, sources.model]}
    >
      <div className="grid grid-cols-2 gap-14 text-2xl leading-relaxed text-gray-700">
        <div className="space-y-6">
          <p>
            A model of the UK tax and benefit system that anyone can use, free,
            in a web browser.
          </p>
          <p>
            Pick a policy, such as a tax rate, a benefit amount or a new
            allowance, and see what it does.
          </p>
        </div>
        <div className="space-y-6">
          <p>
            <span className="font-semibold text-pe-dark">For one household:</span>{" "}
            how much a family gains or loses.
          </p>
          <p>
            <span className="font-semibold text-pe-dark">For the country:</span>{" "}
            the cost to government, and who gains and loses.
          </p>
          <p>All the code is public, so every number can be checked.</p>
        </div>
      </div>
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
      title="Who uses PolicyEngine"
      references={[sources.no10Post, sources.hansard]}
    >
      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        {users.map((user) => (
          <div key={user.name} className="flex items-start gap-4">
            <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pe-teal text-white">
              <IconBuildingBank size={22} stroke={1.8} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-pe-dark">
                {user.source ? (
                  <ExternalLink href={user.source.href}>{user.name}</ExternalLink>
                ) : (
                  user.name
                )}
              </h2>
              <p className="mt-1 text-lg text-gray-600">{user.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function PressSlide() {
  return (
    <Frame
      title="In the media"
      subtitle="Recent coverage that drew on PolicyEngine analysis"
      references={[sources.citations]}
    >
      <div className="grid grid-cols-4 gap-6">
        {press.map((item) => (
          <CardTile key={item.href} item={item} />
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
      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
        {publications.map((item) => (
          <ExternalLink
            key={item.href}
            href={item.href}
            className="group flex items-stretch overflow-hidden border border-gray-200 bg-white hover:no-underline"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={600}
              height={400}
              className={`${styles.thumbWide} shrink-0 object-cover`}
            />
            <div className="min-w-0 border-l-4 border-pe-teal px-4 py-3">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="mt-0.5 text-lg font-semibold leading-snug text-pe-dark group-hover:underline">
                {item.title}
              </h2>
              <p className="mt-1 text-base leading-snug text-gray-600">{item.text}</p>
            </div>
          </ExternalLink>
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
      <div className="flex items-start gap-8">
        <ExternalLink href={sources.budget2025.href} className="min-w-0 basis-[58%]">
          <Image
            src="/screenshots/telegraph-2026/autumn-budget-2025.png"
            alt="Autumn Budget 2025 dashboard showing the policy selector and population impact charts"
            width={1600}
            height={1000}
            className={`${styles.shot} w-auto max-w-full border border-gray-200`}
          />
        </ExternalLink>
        <ExternalLink href={sources.budget2025.href} className="min-w-0 basis-[42%]">
          <Image
            src="/screenshots/telegraph-2026/autumn-budget-2025-constituency-map.png"
            alt="Map of the average change in household net income across all 650 constituencies, 2029-30"
            width={1376}
            height={1398}
            className={`${styles.shot} w-auto max-w-full`}
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
