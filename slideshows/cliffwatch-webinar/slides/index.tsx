import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import CoverSlideTemplate from '@/components/layout/CoverSlide';
import EndSlideTemplate from '@/components/layout/EndSlide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { speakers } from '@/lib/speakers';
import {
  IconChartLine,
  IconFileAnalytics,
  IconListCheck,
  IconMap2,
  IconSearch,
  IconUsersGroup,
} from '@tabler/icons-react';
import type { ComponentType, CSSProperties, ReactNode } from 'react';

const colors = {
  teal: 'var(--pe-teal)',
  amber: 'var(--pe-amber)',
  dark: 'var(--pe-dark)',
};

const coverageTrackerUrl = 'https://www.policyengine.org/us/model/rules/coverage';
const cliffwatchDemoUrl = 'https://www.policyengine.org/us/cliffwatch?max=100000';
const cliffwatchUrl = 'https://www.policyengine.org/us/cliffwatch';
const cliffwatchLabel = 'policyengine.org/us/cliffwatch';

function WebinarSlide({ children }: { children: ReactNode }) {
  return (
    <Slide>
      <div className="mx-auto flex h-full max-w-[1120px] flex-col overflow-hidden">
        {children}
      </div>
    </Slide>
  );
}

function Header({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <SlideHeader>
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pe-teal">
        {eyebrow}
      </p>
      <SlideTitle className="max-w-[1040px] text-pe-dark tracking-normal">
        {title}
      </SlideTitle>
      {body && (
        <p className="mt-3 max-w-[920px] text-xl leading-relaxed text-gray-600">
          {body}
        </p>
      )}
    </SlideHeader>
  );
}

function Card({
  label,
  title,
  body,
  tone = colors.teal,
  icon: Icon,
}: {
  label?: string;
  title: string;
  body: string;
  tone?: string;
  icon?: ComponentType<{ className?: string; stroke?: number; style?: CSSProperties }>;
}) {
  return (
    <div
      className="content-card min-w-0 p-6"
      style={{ borderLeftColor: tone }}
    >
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${tone}18` }}
          >
            <Icon className="h-6 w-6" style={{ color: tone }} stroke={1.8} />
          </div>
        )}
        {label && (
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: tone }}>
            {label}
          </p>
        )}
      </div>
      <h3 className="text-xl font-black leading-tight tracking-normal text-pe-dark">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}

function CliffExampleChart() {
  const gridLines = [
    { y: 36, label: '$80,000' },
    { y: 118, label: '$60,000' },
    { y: 201, label: '$40,000' },
    { y: 283, label: '$20,000' },
    { y: 365, label: '$0' },
  ];
  const xLabels = [
    { x: 105, label: '$0' },
    { x: 405, label: '$20,000' },
    { x: 630, label: '$40,000' },
    { x: 880, label: '$60,000' },
  ];

  return (
    <svg
      aria-label="Benefit cliff chart showing annual resources dropping sharply near $20,000 in wages"
      className="h-full w-full"
      role="img"
      viewBox="0 0 1000 430"
    >
      <rect width="1000" height="430" fill="#F8FAFC" />
      <rect x="405" y="36" width="365" height="329" fill="#F8D9D9" opacity="0.86" />

      {gridLines.map((line) => (
        <g key={line.label}>
          <line
            x1="105"
            x2="985"
            y1={line.y}
            y2={line.y}
            stroke="#E3DCD2"
            strokeDasharray="5 7"
            strokeWidth="1.5"
          />
          <text
            x="95"
            y={line.y + 8}
            fill="#667085"
            fontSize="18"
            textAnchor="end"
          >
            {line.label}
          </text>
        </g>
      ))}

      <line x1="105" x2="985" y1="365" y2="365" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="105" x2="105" y1="36" y2="365" stroke="#CBD5E1" strokeWidth="2" />

      {xLabels.map((label) => (
        <text
          key={label.label}
          x={label.x}
          y="395"
          fill="#667085"
          fontSize="18"
          textAnchor="middle"
        >
          {label.label}
        </text>
      ))}

      <text
        x="640"
        y="420"
        fill="#667085"
        fontSize="17"
        textAnchor="middle"
      >
        Annual household wages and salaries
      </text>
      <text
        fill="#667085"
        fontSize="17"
        textAnchor="middle"
        transform="translate(28 214) rotate(-90)"
      >
        Annual amount ($)
      </text>

      <polyline
        fill="none"
        points="105,250 160,240 285,226 360,210 405,196 409,282 520,260 630,236 740,210 860,187 985,160"
        stroke="#111827"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <circle cx="405" cy="196" r="8" fill="#DC2626" stroke="#FFFFFF" strokeWidth="4" />
    </svg>
  );
}

export function TitleSlide() {
  return (
    <CoverSlideTemplate
      title="CliffWatch"
      subtitle="Mapping benefit cliffs with PolicyEngine"
      speakers={[
        {
          ...speakers['daphne-hansell'],
          title: 'Research Analyst',
        },
        {
          ...speakers['max-ghenis'],
          title: 'CEO',
        },
      ]}
      event="PolicyEngine"
      date="2026-05-29"
    />
  );
}

export function AgendaSlide() {
  return (
    <WebinarSlide>
      <Header
        eyebrow="What is a cliff?"
        title="A cliff turns a small raise into a big loss."
        body="The household earns more, but an eligibility rule changes all at once, so total resources can flatten or fall."
      />

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="mb-5 max-w-5xl">
          <p className="text-3xl font-black leading-tight tracking-normal text-pe-dark">
            Earn $1 more. Lose Medicaid.
          </p>
          <p className="mt-2 text-lg leading-relaxed text-gray-600">
            The paycheck rises a little, but the lost coverage can be worth much
            more.
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <CliffExampleChart />
        </div>
      </div>
    </WebinarSlide>
  );
}

export function CoverageTrackerSlide() {
  return (
    <Slide showFooter={false} fullBleed>
      <iframe
        className="block h-full w-full border-0 pointer-events-none"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        src={coverageTrackerUrl}
        title="PolicyEngine coverage tracker"
      />
    </Slide>
  );
}

export function DemoLinkSlide() {
  return (
    <Slide showFooter={false} fullBleed>
      <div
        className="pointer-events-auto relative h-full w-full bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <iframe
          className="block h-full w-full border-0"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src={cliffwatchDemoUrl}
          title="CliffWatch"
        />
      </div>
    </Slide>
  );
}

export function LegacyCliffChartSlide() {
  return (
    <WebinarSlide>
      <Header
        eyebrow="Cliff work over time"
        title="We have been tracking cliffs for years."
      />

      <div className="content-card relative min-h-0 flex-1 overflow-hidden bg-[#a8d9e3] p-0">
        <Image
          src="/screenshots/cliffwatch-legacy-cliff-chart.png"
          alt="Legacy PolicyEngine app screenshots showing net income and marginal tax rate cliff charts"
          width={1600}
          height={1074}
          className="h-full min-h-[460px] w-full object-contain object-center"
          priority
        />
      </div>
    </WebinarSlide>
  );
}

export function ExamplesSlide() {
  const examples = [
    {
      title: 'Small raises can trigger large losses',
      body: 'A household near an eligibility limit can lose health coverage, food assistance, or refundable credits faster than wages rise.',
      icon: IconUsersGroup,
      tone: colors.teal,
    },
    {
      title: 'State policy changes the cliff',
      body: 'The same family can face different cliff locations and sizes depending on state rules.',
      icon: IconMap2,
      tone: colors.dark,
    },
    {
      title: 'Program interactions stack',
      body: 'Medicaid, SNAP, childcare subsidies, refundable credits, and taxes can combine into one visible drop.',
      icon: IconListCheck,
      tone: colors.amber,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Examples"
        title="CliffWatch turns cliffs into concrete household results."
        body="Total resources vary across earnings, states, and programs."
      />

      <div className="grid min-w-0 grid-cols-3 gap-5">
        {examples.map((example) => (
          <Card
            key={example.title}
            title={example.title}
            body={example.body}
            tone={example.tone}
            icon={example.icon}
          />
        ))}
      </div>
    </WebinarSlide>
  );
}

export function NextStepsSlide() {
  const nextSteps = [
    {
      title: 'More programs and states',
      body: 'Deeper coverage captures the state and local rules that often determine whether a household hits a cliff.',
      icon: IconMap2,
      tone: colors.teal,
    },
    {
      title: 'Validated household scenarios',
      body: 'Representative examples make the largest cliffs easier to reproduce and compare.',
      icon: IconFileAnalytics,
      tone: colors.amber,
    },
    {
      title: 'Policy driver attribution',
      body: 'Each drop can be tied back to the programs, thresholds, and phase-outs that create it.',
      icon: IconSearch,
      tone: colors.dark,
    },
    {
      title: 'Reusable findings',
      body: 'Published analyses help agencies and researchers target reforms where cliffs are largest.',
      icon: IconChartLine,
      tone: colors.teal,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Research agenda"
        title="CliffWatch makes cliffs easier to find, compare, and fix."
        body="Better coverage and validated scenarios make the largest cliffs visible across households, states, and programs."
      />

      <div className="grid min-w-0 grid-cols-2 gap-5">
        {nextSteps.map((step) => (
          <Card
            key={step.title}
            title={step.title}
            body={step.body}
            tone={step.tone}
            icon={step.icon}
          />
        ))}
      </div>
    </WebinarSlide>
  );
}

export function WrapSlide() {
  return (
    <EndSlideTemplate
      message="Thank you"
      subtitle={cliffwatchLabel}
      links={[
        { label: cliffwatchLabel, url: cliffwatchUrl },
        { label: 'policyengine.org', url: 'https://policyengine.org' },
      ]}
    />
  );
}
