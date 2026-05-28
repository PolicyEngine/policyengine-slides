import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import CoverSlideTemplate from '@/components/layout/CoverSlide';
import EndSlideTemplate from '@/components/layout/EndSlide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { speakers } from '@/lib/speakers';
import {
  IconArrowRight,
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

const cliffwatchDemoUrl = 'https://www.policyengine.org/us/cliffwatch?max=100000';
const cliffwatchDemoLabel = 'policyengine.org/us/cliffwatch?max=100000';
const coverageTrackerUrl = 'https://www.policyengine.org/us/model/rules/coverage';

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

export function TitleSlide() {
  return (
    <CoverSlideTemplate
      title="CliffWatch Webinar"
      subtitle="Benefit cliffs, PolicyEngine coverage, and live examples"
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
      event="PolicyEngine webinar"
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

      <div className="grid min-w-0 grid-cols-[0.95fr_1.05fr] gap-6">
        <div className="flex flex-col justify-between rounded-2xl bg-pe-dark p-6 text-white shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Basic idea
            </p>
            <p className="mt-5 text-4xl font-black leading-tight tracking-normal">
              Earn $1 more.
              <br />
              Lose Medicaid.
            </p>
          </div>
          <p className="mt-7 text-lg leading-relaxed text-white/75">
            CliffWatch helps show where more income stops helping and which rule
            is driving the drop.
          </p>
        </div>

        <div className="content-card p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-pe-teal">
            Simple Medicaid example
          </p>
          <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-stretch gap-4">
            <div className="rounded-lg border border-teal-100 bg-teal-50 p-4">
              <p className="text-sm font-bold uppercase tracking-widest text-pe-teal">
                At or below the limit
              </p>
              <p className="mt-3 text-2xl font-black leading-tight text-pe-dark">
                Medicaid coverage
              </p>
            </div>
            <div className="flex items-center justify-center text-slate-300">
              <IconArrowRight className="h-8 w-8" stroke={1.8} />
            </div>
            <div className="rounded-lg border border-pe-amber/30 bg-pe-amber/10 p-4">
              <p className="text-sm font-bold uppercase tracking-widest text-pe-amber">
                $1 over the limit
              </p>
              <p className="mt-3 text-2xl font-black leading-tight text-pe-dark">
                No Medicaid
              </p>
            </div>
          </div>

          <div className="mt-5 border-l-4 border-pe-amber pl-5">
            <h3 className="text-xl font-black leading-tight tracking-normal text-pe-dark">
              The cliff is the gap between wages and resources.
            </h3>
            <p className="mt-2 text-base leading-relaxed text-gray-600">
              The paycheck rises a little, but the lost coverage can be worth
              much more.
            </p>
          </div>
        </div>
      </div>
    </WebinarSlide>
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
          title="CliffWatch demo"
        />
      </div>
    </Slide>
  );
}

export function CoverageTrackerSlide() {
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
          src={coverageTrackerUrl}
          title="PolicyEngine model coverage tracker"
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
        body="The earlier PolicyEngine app already showed net income and marginal tax-rate cliffs. CliffWatch is the latest, cleaner iteration."
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

        <div className="absolute bottom-4 right-4 rounded-lg border border-white/70 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-600 shadow-sm">
          Legacy PolicyEngine app, 2023
        </div>
      </div>
    </WebinarSlide>
  );
}

export function ExamplesSlide() {
  const examples = [
    {
      title: 'A household near the limit',
      body: 'Show how one extra dollar can trigger a health, food, or tax-credit change.',
      icon: IconUsersGroup,
      tone: colors.teal,
    },
    {
      title: 'The same household elsewhere',
      body: 'Compare states to show how policy choices reshape the cliff.',
      icon: IconMap2,
      tone: colors.dark,
    },
    {
      title: 'The program driver',
      body: 'Trace the drop to Medicaid, SNAP, refundable credits, or another rule.',
      icon: IconListCheck,
      tone: colors.amber,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Examples"
        title="Use CliffWatch to make cliffs concrete."
        body="Start with one household, compare one place-specific policy choice, and identify the rule behind the drop."
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

      <div className="mt-6 rounded-2xl bg-pe-dark p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
          Live example
        </p>
        <p className="mt-3 text-3xl font-black leading-tight tracking-normal">
          Start with a household near a program cutoff, then change one
          assumption.
        </p>
      </div>
    </WebinarSlide>
  );
}

export function NextStepsSlide() {
  const nextSteps = [
    {
      title: 'Expand the coverage map',
      body: 'Keep adding and validating benefits, tax credits, and state-specific rules that shape cliff behavior.',
      icon: IconMap2,
      tone: colors.teal,
    },
    {
      title: 'Build a scenario library',
      body: 'Turn common household examples into reusable starting points for partners and follow-up analysis.',
      icon: IconFileAnalytics,
      tone: colors.amber,
    },
    {
      title: 'Trace policy drivers',
      body: 'Identify which program interactions create the largest cliffs and which reforms smooth them.',
      icon: IconSearch,
      tone: colors.dark,
    },
    {
      title: 'Share research outputs',
      body: 'Publish findings that make cliffs easier to compare across households, states, and programs.',
      icon: IconChartLine,
      tone: colors.teal,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Next steps"
        title="The next phase is better cliff coverage and reusable findings."
        body="The research path is to improve coverage, validate the biggest cliffs, and make the results reusable."
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
      subtitle="Questions and scenario requests"
      links={[
        { label: cliffwatchDemoLabel, url: cliffwatchDemoUrl },
        { label: 'policyengine.org', url: 'https://policyengine.org' },
      ]}
    />
  );
}
