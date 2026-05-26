import Slide from '@/components/core/Slide';
import CoverSlideTemplate from '@/components/layout/CoverSlide';
import EndSlideTemplate from '@/components/layout/EndSlide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { speakers } from '@/lib/speakers';
import {
  IconArrowRight,
  IconChartLine,
  IconMap2,
  IconMessageQuestion,
  IconSearch,
  IconUsersGroup,
} from '@tabler/icons-react';
import type { ComponentType, CSSProperties, ReactNode } from 'react';

const colors = {
  teal: 'var(--pe-teal)',
  amber: 'var(--pe-amber)',
  dark: 'var(--pe-dark)',
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
  compact = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  compact?: boolean;
}) {
  return (
    <SlideHeader>
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pe-teal">
        {eyebrow}
      </p>
      {compact ? (
        <h1 className="font-display max-w-[1040px] text-4xl font-bold leading-tight tracking-normal text-pe-dark">
          {title}
        </h1>
      ) : (
        <SlideTitle className="max-w-[1040px] text-pe-dark tracking-normal">
          {title}
        </SlideTitle>
      )}
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

function StepNumber({ value, tone }: { value: string; tone: string }) {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-black text-white"
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
      title: 'Ask what drives it',
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

export function DemoFlowSlide() {
  return (
    <WebinarSlide>
      <Header
        eyebrow="What to watch for"
        title="A cliff is the moment resources stop rising with earnings."
        body="The chart makes the tradeoff visible: income keeps moving right, but net resources flatten or fall."
        compact
      />

      <div className="grid min-w-0 grid-cols-[1.05fr_0.95fr] gap-7">
        <div className="content-card p-5">
          <svg viewBox="0 0 560 300" className="h-[250px] w-full" role="img" aria-label="Illustrative benefit cliff chart">
            <line x1="54" y1="246" x2="520" y2="246" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="54" y1="34" x2="54" y2="246" stroke="#CBD5E1" strokeWidth="2" />
            <text x="288" y="286" textAnchor="middle" className="fill-slate-500 text-sm font-semibold">
              Earnings
            </text>
            <text x="18" y="145" textAnchor="middle" transform="rotate(-90 18 145)" className="fill-slate-500 text-sm font-semibold">
              Net resources
            </text>

            <rect x="300" y="52" width="72" height="194" rx="8" fill="rgba(232, 145, 58, 0.13)" />
            <path
              d="M64 226 C138 210 196 178 252 136 C282 113 305 95 322 83 L344 138 C386 134 438 112 506 76"
              fill="none"
              stroke="var(--pe-teal)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="344" cy="138" r="9" fill="var(--pe-amber)" />
            <path d="M320 82 L344 138" stroke="var(--pe-amber)" strokeWidth="5" strokeLinecap="round" />
            <line x1="344" y1="138" x2="444" y2="138" stroke="var(--pe-amber)" strokeWidth="2" strokeDasharray="5 6" />
            <text x="452" y="143" className="fill-slate-700 text-base font-bold">
              cliff
            </text>
            <text x="336" y="42" textAnchor="middle" className="fill-pe-amber text-sm font-bold uppercase tracking-widest">
              transition
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <div className="border-l-4 border-pe-teal pl-5">
            <h3 className="text-2xl font-black leading-tight tracking-normal text-pe-dark">
              First, find the income band.
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-600">
              Where does the line bend, flatten, or drop?
            </p>
          </div>
          <div className="border-l-4 border-pe-amber pl-5">
            <h3 className="text-2xl font-black leading-tight tracking-normal text-pe-dark">
              Then, name the rule.
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-600">
              Which benefit phase-out, eligibility cutoff, or tax interaction changed?
            </p>
          </div>
          <div className="border-l-4 border-pe-amber pl-5">
            <h3 className="text-2xl font-black leading-tight tracking-normal text-pe-dark">
              Finally, compare alternatives.
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-600">
              A different place or policy design can smooth the same transition.
            </p>
          </div>
        </div>
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
        eyebrow="Example scenario"
        title="Start with a household people can picture."
        body="A concrete family makes the chart easier to read and the policy question easier to discuss."
      />

      <div className="grid min-w-0 grid-cols-[0.95fr_1.05fr] gap-6">
        <div className="content-card p-6">
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

        <div className="flex flex-col justify-between rounded-2xl bg-pe-dark p-7 text-white shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Live URL
            </p>
            <p className="mt-5 break-words text-4xl font-black leading-tight tracking-normal">
              policyengine.org/us/cliff-watch
            </p>
          </div>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/75">
            Change one assumption at a time so the audience can see what moves
            the cliff.
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
      tone: colors.teal,
    },
    {
      title: 'Watch net resources',
      body: 'Look for ranges where resources flatten or drop.',
      tone: colors.teal,
    },
    {
      title: 'Name the driver',
      body: 'Connect the visible cliff to the program transition underneath.',
      tone: colors.amber,
    },
  ];

  return (
    <WebinarSlide>
      <Header
        eyebrow="Reading the chart"
        title="Teach the chart before debating the policy."
        body="A simple reading pattern keeps the demo accessible for people who do not live in marginal tax rate charts."
      />

      <div className="grid min-w-0 grid-cols-3 gap-5">
        {readingSteps.map((step, index) => (
          <div key={step.title} className="content-card p-5">
            <StepNumber value={`${index + 1}`} tone={step.tone} />
            <h3 className="mt-5 text-2xl font-black leading-tight tracking-normal text-pe-dark">
              {step.title}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-gray-600">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 content-card bg-slate-50 p-6">
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

      <div className="space-y-5">
        {takeaways.map((takeaway, index) => (
          <div
            key={takeaway}
            className="content-card flex items-center gap-5 p-6"
          >
            <StepNumber value={`${index + 1}`} tone={index === 1 ? colors.amber : colors.teal} />
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

      <div className="grid min-w-0 grid-cols-3 gap-5">
        {questions.map((question, index) => (
          <div key={question} className="content-card p-6">
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
