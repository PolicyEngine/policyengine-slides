import Slide from '@/components/core/Slide';
import CoverSlideTemplate from '@/components/layout/CoverSlide';
import EndSlideTemplate from '@/components/layout/EndSlide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { speakers } from '@/lib/speakers';
import {
  IconArrowRight,
  IconChartLine,
  IconCode,
  IconDatabase,
  IconMap2,
  IconScale,
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
      subtitle="Benefit cliffs, household scenarios, and live exploration"
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

export function CliffProblemSlide() {
  const points = [
    {
      title: 'Programs stack',
      body: 'Families experience taxes, credits, health coverage, food assistance, child care, and cash benefits together.',
      icon: IconUsersGroup,
      tone: colors.teal,
    },
    {
      title: 'Raises can backfire',
      body: 'Eligibility losses and phase-outs can make the next dollar of earnings worth little, nothing, or less than nothing.',
      icon: IconChartLine,
      tone: colors.amber,
    },
    {
      title: 'Place matters',
      body: 'The same household can face a different cliff profile when state rules and local policy choices change.',
      icon: IconMap2,
      tone: colors.dark,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Why cliffs matter"
        title="Benefit cliffs are a systems problem, not a single-program bug."
        body="CliffWatch starts from the household budget constraint, then shows where program interactions create sharp tradeoffs."
      />

      <div className="grid min-w-0 grid-cols-3 gap-5">
        {points.map((point) => (
          <Card
            key={point.title}
            title={point.title}
            body={point.body}
            tone={point.tone}
            icon={point.icon}
          />
        ))}
      </div>
    </WebinarSlide>
  );
}

export function ProductFrameSlide() {
  const frames = [
    {
      label: '1',
      title: 'Choose a household',
      body: 'Set family structure, state, and an income range.',
      tone: colors.teal,
    },
    {
      label: '2',
      title: 'Find the cliff',
      body: 'See where net resources flatten or fall as earnings rise.',
      tone: colors.teal,
    },
    {
      label: '3',
      title: 'See what drives it',
      body: 'Identify which program changes create the sharpest transitions.',
      tone: colors.amber,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="What CliffWatch does"
        title="CliffWatch turns program interactions into a navigable map."
        body="The product flow is intentionally simple: define a household, scan the income path, and inspect the drivers."
      />

      <div className="grid min-w-0 grid-cols-[1fr_48px_1fr_48px_1fr] items-stretch gap-3">
        {frames.map((frame, index) => (
          <div key={frame.title} className="contents">
            <Card
              label={frame.label}
              title={frame.title}
              body={frame.body}
              tone={frame.tone}
            />
            {index < frames.length - 1 && (
              <div className="flex items-center justify-center text-gray-300">
                <IconArrowRight className="h-8 w-8" stroke={1.8} />
              </div>
            )}
          </div>
        ))}
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

export function DiscussionSlide() {
  const platformLayers = [
    {
      label: 'Rules',
      title: 'Rules as code',
      body: 'Tax and benefit law encoded as readable, tested Python and YAML.',
      tone: colors.teal,
      icon: IconCode,
    },
    {
      label: 'Data',
      title: 'Representative households',
      body: 'Public microdata calibrated to official totals so analyses scale beyond one example.',
      tone: colors.amber,
      icon: IconDatabase,
    },
    {
      label: 'Reforms',
      title: 'Policy comparisons',
      body: 'Change a parameter or formula and compare the result against the same baseline.',
      tone: colors.dark,
      icon: IconScale,
    },
    {
      label: 'Outputs',
      title: 'Actionable results',
      body: 'Budget cost, poverty, inequality, winners and losers, and marginal tax rates.',
      tone: colors.teal,
      icon: IconChartLine,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="PolicyEngine"
        title="PolicyEngine is open-source tax and benefit simulation."
        body="It turns policy rules and household data into transparent estimates of how public policy affects people and budgets."
      />

      <div className="grid min-w-0 grid-cols-4 gap-4">
        {platformLayers.map((layer) => (
          <Card
            key={layer.title}
            label={layer.label}
            title={layer.title}
            body={layer.body}
            tone={layer.tone}
            icon={layer.icon}
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
