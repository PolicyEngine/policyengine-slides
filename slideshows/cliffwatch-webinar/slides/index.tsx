import Slide from '@/components/core/Slide';
import CoverSlideTemplate from '@/components/layout/CoverSlide';
import EndSlideTemplate from '@/components/layout/EndSlide';
import { speakers } from '@/lib/speakers';
import {
  IconArrowRight,
  IconChartLine,
  IconChecklist,
  IconMap2,
  IconMessageQuestion,
  IconRoute,
  IconSearch,
  IconUsersGroup,
} from '@tabler/icons-react';
import type { ComponentType, CSSProperties, ReactNode } from 'react';

const colors = {
  teal: 'var(--pe-teal)',
  amber: 'var(--pe-amber)',
  dark: 'var(--pe-dark)',
  blue: '#2563eb',
  rose: '#f97373',
  gold: '#d99a2b',
};

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
    <header className="shrink-0">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pe-teal">
        {eyebrow}
      </p>
      <h1 className="max-w-[1040px] text-4xl font-black leading-tight tracking-normal text-pe-dark">
        {title}
      </h1>
      {body && (
        <p className="mt-3 max-w-[920px] text-lg leading-relaxed text-gray-600">
          {body}
        </p>
      )}
      <div className="mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-pe-teal to-pe-amber" />
    </header>
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
      className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
      style={{ borderTop: `4px solid ${tone}` }}
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

function StepNumber({ value, tone }: { value: string; tone: string }) {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg font-black text-white"
      style={{ backgroundColor: tone }}
    >
      {value}
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
  const agenda = [
    {
      number: '01',
      title: 'Follow net resources',
      body: 'Find ranges where total resources flatten or fall as earnings rise.',
      tone: colors.rose,
    },
    {
      number: '02',
      title: 'Name the program change',
      body: 'Connect each sharp turn to the phase-out, cutoff, or tax interaction underneath.',
      tone: colors.teal,
    },
    {
      number: '03',
      title: 'Compare policy design',
      body: 'Change places or household assumptions to see which cliffs are policy choices.',
      tone: colors.gold,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Core question"
        title="When does a raise stop helping?"
        body="We’ll follow one household across the income path and use CliffWatch to see where policy turns extra earnings into a cliff."
      />

      <div className="mt-10 flex max-w-4xl flex-col gap-6">
        {agenda.map((item) => (
          <div key={item.title} className="flex items-baseline gap-6">
            <span
              className="font-mono text-4xl font-bold opacity-80"
              style={{ color: item.tone }}
            >
              {item.number}
            </span>
            <div>
              <h3 className="text-2xl font-bold leading-tight text-gray-800">
                {item.title}
              </h3>
              <p className="mt-1 text-lg leading-relaxed text-gray-500">
                {item.body}
              </p>
            </div>
          </div>
        ))}
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
      tone: colors.rose,
    },
    {
      title: 'Place matters',
      body: 'The same household can face a different cliff profile when state rules and local policy choices change.',
      icon: IconMap2,
      tone: colors.blue,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Why cliffs matter"
        title="Benefit cliffs are a systems problem, not a single-program bug."
        body="CliffWatch starts from the household budget constraint, then shows where program interactions create sharp tradeoffs."
      />

      <div className="mt-8 grid min-w-0 grid-cols-3 gap-5">
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
      tone: colors.blue,
    },
    {
      label: '2',
      title: 'Find the cliff',
      body: 'See where net resources flatten or fall as earnings rise.',
      tone: colors.teal,
    },
    {
      label: '3',
      title: 'Ask what drives it',
      body: 'Identify which program changes create the sharpest transitions.',
      tone: colors.gold,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="What CliffWatch does"
        title="CliffWatch turns program interactions into a navigable map."
        body="The product flow is intentionally simple: define a household, scan the income path, and inspect the drivers."
      />

      <div className="mt-10 grid min-w-0 grid-cols-[1fr_48px_1fr_48px_1fr] items-stretch gap-3">
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

export function DemoFlowSlide() {
  const steps = [
    {
      title: 'Start with one story',
      body: 'Pick a household people can picture quickly.',
      tone: colors.teal,
    },
    {
      title: 'Name the steep spot',
      body: 'Point to the income band where resources flatten or fall.',
      tone: colors.rose,
    },
    {
      title: 'Change one thing',
      body: 'Switch state, household composition, or income range.',
      tone: colors.gold,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Demo choreography"
        title="One scenario, one insight, one variation."
        body="A focused demo will be more useful than a tour of every control."
      />

      <div className="mt-8 grid min-w-0 grid-cols-3 gap-5">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <StepNumber value={`${index + 1}`} tone={step.tone} />
            <h3 className="mt-5 text-2xl font-black leading-tight tracking-normal text-pe-dark">
              {step.title}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-gray-600">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 grid min-w-0 grid-cols-2 gap-5">
        <Card
          title="Daphne leads the household walkthrough"
          body="Frame the scenario, make the selections, and narrate what changes on the chart."
          tone={colors.teal}
          icon={IconRoute}
        />
        <Card
          title="Max connects it to policy design"
          body="Translate the cliff into policy questions and pull audience reactions into the discussion."
          tone={colors.blue}
          icon={IconChecklist}
        />
      </div>
    </WebinarSlide>
  );
}

export function DemoPlaceholderSlide() {
  const fields = [
    ['Household', 'Single parent with two children'],
    ['Place', 'DC, then one comparison state'],
    ['Income path', '$0 to $80K in wage income'],
    ['Question', 'Where does the next dollar stop helping?'],
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Live demo handoff"
        title="Open CliffWatch with one prepared scenario."
        body="Use the slide only as the launch point, then move into the live page."
      />

      <div className="mt-8 grid min-w-0 grid-cols-[0.95fr_1.05fr] gap-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-pe-teal">
            Primary demo path
          </p>
          <div className="mt-5 divide-y divide-slate-200">
            {fields.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[140px_1fr] gap-4 py-3">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="text-lg font-semibold leading-snug text-pe-dark">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-pe-dark p-7 text-white shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Live URL
            </p>
            <p className="mt-5 break-words text-4xl font-black leading-tight tracking-normal">
              policyengine.org/us/cliff-watch
            </p>
          </div>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/75">
            Keep one backup scenario ready, but only use it if discussion needs
            a contrast.
          </p>
        </div>
      </div>
    </WebinarSlide>
  );
}

export function ChartReadingSlide() {
  const readingSteps = [
    {
      title: 'Follow income',
      body: 'Read left to right: what happens as earnings rise?',
      tone: colors.blue,
    },
    {
      title: 'Watch net resources',
      body: 'Look for ranges where resources flatten or drop.',
      tone: colors.teal,
    },
    {
      title: 'Name the driver',
      body: 'Connect the visible cliff to the program transition underneath.',
      tone: colors.rose,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Reading the chart"
        title="Teach the chart before debating the policy."
        body="A simple reading pattern keeps the demo accessible for people who do not live in marginal tax rate charts."
      />

      <div className="mt-8 grid min-w-0 grid-cols-3 gap-5">
        {readingSteps.map((step, index) => (
          <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <StepNumber value={`${index + 1}`} tone={step.tone} />
            <h3 className="mt-5 text-2xl font-black leading-tight tracking-normal text-pe-dark">
              {step.title}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-gray-600">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <div className="flex items-start gap-4">
          <IconSearch className="mt-1 h-8 w-8 shrink-0 text-pe-teal" stroke={1.8} />
          <p className="text-2xl font-semibold leading-relaxed text-gray-700">
            At this income range, the household gains earnings but loses enough
            support that the next dollar is partly or fully offset.
          </p>
        </div>
      </div>
    </WebinarSlide>
  );
}

export function TakeawaysSlide() {
  const takeaways = [
    'Cliffs appear when programs are modeled together.',
    'Household examples make the tradeoff concrete.',
    'Audience questions can become the next CliffWatch scenarios.',
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Takeaways"
        title="Three ideas to repeat before Q&A."
      />

      <div className="mt-9 space-y-5">
        {takeaways.map((takeaway, index) => (
          <div
            key={takeaway}
            className="flex items-center gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <StepNumber value={`${index + 1}`} tone={index === 1 ? colors.rose : colors.teal} />
            <p className="text-3xl font-black leading-tight tracking-normal text-pe-dark">
              {takeaway}
            </p>
          </div>
        ))}
      </div>
    </WebinarSlide>
  );
}

export function DiscussionSlide() {
  const questions = [
    'Which household scenario would you want to test first?',
    'Which state or program comparison would change the conversation?',
    'What would make CliffWatch useful for your team after today?',
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Discussion"
        title="Turn the demo into audience-driven analysis."
        body="Use these prompts if Q&A needs structure, or skip directly to audience questions."
      />

      <div className="mt-8 grid min-w-0 grid-cols-3 gap-5">
        {questions.map((question, index) => (
          <div key={question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <IconMessageQuestion className="h-9 w-9 text-pe-teal" stroke={1.8} />
            <p className="mt-5 text-xl font-semibold leading-relaxed text-gray-700">
              {question}
            </p>
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              Question {index + 1}
            </p>
          </div>
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
        { label: 'policyengine.org/us/cliff-watch', url: 'https://policyengine.org/us/cliff-watch' },
        { label: 'policyengine.org', url: 'https://policyengine.org' },
      ]}
    />
  );
}
