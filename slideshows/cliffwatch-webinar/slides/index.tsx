import Slide from '@/components/core/Slide';
import CoverSlideTemplate from '@/components/layout/CoverSlide';
import EndSlideTemplate from '@/components/layout/EndSlide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { speakers } from '@/lib/speakers';
import {
  IconArrowRight,
  IconChartLine,
  IconChecklist,
  IconMap2,
  IconMessageQuestion,
  IconRoute,
  IconSearch,
  IconSparkles,
  IconUsersGroup,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';

const colors = {
  teal: 'var(--pe-teal)',
  tealDark: 'var(--pe-teal-dark)',
  amber: 'var(--pe-amber)',
  dark: 'var(--pe-dark)',
  slate: '#475569',
  blue: '#2563eb',
  rose: '#f97373',
  gold: '#d99a2b',
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pe-teal">
      {children}
    </p>
  );
}

function PresenterCue({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
      {children}
    </p>
  );
}

function OutlineCard({
  label,
  title,
  body,
  tone = colors.teal,
}: {
  label: string;
  title: string;
  body: string;
  tone?: string;
}) {
  return (
    <div
      className="content-card min-h-[220px] p-6"
      style={{ borderLeftColor: tone }}
    >
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: tone }}>
        {label}
      </p>
      <h3 className="mt-4 text-2xl font-black leading-tight text-pe-dark">{title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}

function FlowStep({
  number,
  title,
  body,
  tone,
}: {
  number: string;
  title: string;
  body: string;
  tone: string;
}) {
  return (
    <div className="content-card p-5" style={{ borderLeftColor: tone }}>
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black text-white"
        style={{ backgroundColor: tone }}
      >
        {number}
      </div>
      <h3 className="text-xl font-black leading-tight text-pe-dark">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}

export function TitleSlide() {
  return (
    <CoverSlideTemplate
      title="CliffWatch Webinar"
      subtitle="Demo outline for benefit cliffs, household scenarios, and live exploration"
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
      label: '1',
      title: 'Why cliffs matter',
      body: 'Frame the policy problem, the audience pain point, and what CliffWatch makes visible.',
      tone: colors.rose,
    },
    {
      label: '2',
      title: 'What CliffWatch does',
      body: 'Walk through the product mental model before touching the live interface.',
      tone: colors.blue,
    },
    {
      label: '3',
      title: 'Live demo',
      body: 'Run selected household scenarios, compare states, and explain the chart in plain language.',
      tone: colors.teal,
    },
    {
      label: '4',
      title: 'Discussion',
      body: 'Invite questions on policy design, use cases, and follow-up analyses participants want next.',
      tone: colors.gold,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Run of show</Eyebrow>
        <SlideTitle>Keep the first half crisp so the demo has room to breathe.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          Draft timing: 10 minutes of framing, 25 minutes of demo, 15 minutes of
          discussion. Adjust once the final webinar length is locked.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-4 gap-6">
        {agenda.map((item) => (
          <OutlineCard
            key={item.label}
            label={item.label}
            title={item.title}
            body={item.body}
            tone={item.tone}
          />
        ))}
      </div>

      <PresenterCue>
        Fill in final webinar length, audience assumptions, and handoff points.
      </PresenterCue>
    </Slide>
  );
}

export function CliffProblemSlide() {
  const points = [
    {
      title: 'Households experience programs together',
      body: 'Taxes, credits, health coverage, food assistance, child care, and cash benefits stack in ways that are hard to see program by program.',
      icon: IconUsersGroup,
      tone: colors.teal,
    },
    {
      title: 'Cliffs hide in income ranges',
      body: 'A raise can trigger eligibility losses or phase-outs that make the next dollar worth little, nothing, or less than nothing.',
      icon: IconChartLine,
      tone: colors.rose,
    },
    {
      title: 'State choices change the picture',
      body: 'The same household can face very different marginal incentives depending on state rules and local policy design.',
      icon: IconMap2,
      tone: colors.blue,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Problem framing</Eyebrow>
        <SlideTitle>Benefit cliffs are a systems problem, not a single-program bug.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          Use this slide to name the problem before showing the tool. The goal
          is to make the demo feel inevitable rather than decorative.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-3 gap-7">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <div
              key={point.title}
              className="content-card p-7"
              style={{ borderLeftColor: point.tone }}
            >
              <div
                className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${point.tone}18` }}
              >
                <Icon className="h-9 w-9" style={{ color: point.tone }} stroke={1.8} />
              </div>
              <h3 className="text-2xl font-black leading-tight text-pe-dark">{point.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">{point.body}</p>
            </div>
          );
        })}
      </div>

      <PresenterCue>
        Add one concrete household story or audience-relevant example.
      </PresenterCue>
    </Slide>
  );
}

export function ProductFrameSlide() {
  const frames = [
    {
      label: 'Question',
      title: 'Where do cliffs appear?',
      body: 'Start from a household, geography, and income range instead of an isolated program rule.',
      tone: colors.blue,
    },
    {
      label: 'Evidence',
      title: 'What changes at each income point?',
      body: 'Use marginal and net-resource views to see which programs drive the sharpest changes.',
      tone: colors.teal,
    },
    {
      label: 'Action',
      title: 'What should analysts investigate next?',
      body: 'Turn the live demo into policy questions, scenario requests, and follow-up modeling work.',
      tone: colors.gold,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Product mental model</Eyebrow>
        <SlideTitle>CliffWatch turns program interactions into a navigable map.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          This is the bridge from policy framing to the live interface. Keep it
          conceptual; the next slides can carry the details.
        </p>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-[1fr_72px_1fr_72px_1fr] items-stretch gap-2">
        {frames.map((frame, index) => (
          <div key={frame.label} className="contents">
            <OutlineCard
              label={frame.label}
              title={frame.title}
              body={frame.body}
              tone={frame.tone}
            />
            {index < frames.length - 1 && (
              <div className="flex items-center justify-center text-gray-300">
                <IconArrowRight className="h-10 w-10" stroke={1.8} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="accent-block mt-9">
        <p className="text-2xl font-semibold leading-relaxed text-gray-700">
          Suggested phrase: “We built this so you can see the full household
          budget constraint before debating a single policy lever.”
        </p>
      </div>
    </Slide>
  );
}

export function DemoFlowSlide() {
  const steps = [
    {
      title: 'Open CliffWatch',
      body: 'Orient viewers to the page, controls, and the question the first scenario will answer.',
      tone: colors.teal,
    },
    {
      title: 'Choose household',
      body: 'Set household composition, state, and income sweep. Narrate only the choices that matter.',
      tone: colors.blue,
    },
    {
      title: 'Read the cliff',
      body: 'Point to the steepest income ranges, then unpack the program interactions underneath.',
      tone: colors.rose,
    },
    {
      title: 'Compare and discuss',
      body: 'Change one assumption, compare the result, and tee up audience questions.',
      tone: colors.gold,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Live demo choreography</Eyebrow>
        <SlideTitle>One scenario, one insight, one variation.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          The live demo should feel guided, not like a product tour. This slide
          is the speaking outline for Daphne and Max.
        </p>
      </SlideHeader>

      <div className="mt-7 grid grid-cols-4 gap-5">
        {steps.map((step, index) => (
          <FlowStep
            key={step.title}
            number={`${index + 1}`}
            title={step.title}
            body={step.body}
            tone={step.tone}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-7">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <IconRoute className="h-8 w-8 text-pe-teal" stroke={1.8} />
            <h3 className="text-2xl font-black text-pe-dark">Presenter split</h3>
          </div>
          <ul className="slide-list text-lg text-gray-700">
            <li>Daphne: household story, state choice, chart reading.</li>
            <li>Max: model context, policy implications, audience Q&A.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <IconChecklist className="h-8 w-8 text-pe-teal" stroke={1.8} />
            <h3 className="text-2xl font-black text-pe-dark">Before going live</h3>
          </div>
          <ul className="slide-list text-lg text-gray-700">
            <li>Lock one primary scenario and one backup scenario.</li>
            <li>Preload the page and confirm any shareable links.</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}

export function DemoPlaceholderSlide() {
  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Demo workspace</Eyebrow>
        <SlideTitle>Use this slide as the handoff into the live CliffWatch page.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          Keep the slide visible while introducing the demo, then open the live
          tool in a new tab if the iframe is too constrained for the webinar.
        </p>
      </SlideHeader>

      <div className="mt-5 grid h-[calc(100vh-320px)] grid-cols-[0.78fr_1.22fr] gap-7">
        <div className="space-y-5">
          <div className="content-card p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-pe-teal">
              Primary scenario
            </p>
            <h3 className="mt-3 text-2xl font-black text-pe-dark">
              [Add household, state, and income range]
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Note the reason this scenario matters for the webinar audience.
            </p>
          </div>
          <div className="content-card p-6" style={{ borderLeftColor: colors.gold }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: colors.gold }}>
              Backup scenario
            </p>
            <h3 className="mt-3 text-2xl font-black text-pe-dark">
              [Add alternate household or state]
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Use if the first thread runs short or the audience asks for a
              different comparison.
            </p>
          </div>
          <PresenterCue>
            Live URL: policyengine.org/us/cliff-watch
          </PresenterCue>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <iframe
            src="https://www.policyengine.org/us/cliff-watch"
            title="CliffWatch"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent p-5">
            <p className="text-sm font-semibold text-gray-700">
              If embedded controls feel tight, switch to the live browser tab.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function ChartReadingSlide() {
  const readingSteps = [
    {
      label: 'X-axis',
      title: 'Income path',
      body: 'Name the income range and the household decision the range represents.',
      tone: colors.blue,
    },
    {
      label: 'Y-axis',
      title: 'Net resources or marginal rate',
      body: 'Explain whether the chart is showing total resources or the value of the next dollar.',
      tone: colors.teal,
    },
    {
      label: 'Drivers',
      title: 'Programs changing at the cliff',
      body: 'Identify the program changes before moving to interpretation or reform ideas.',
      tone: colors.rose,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Chart narration</Eyebrow>
        <SlideTitle>Teach viewers how to read the result before debating it.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          This keeps the live demo accessible for people who are not already
          fluent in marginal tax rate charts.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[0.95fr_1.05fr] gap-8">
        <div className="space-y-5">
          {readingSteps.map((step) => (
            <OutlineCard
              key={step.label}
              label={step.label}
              title={step.title}
              body={step.body}
              tone={step.tone}
            />
          ))}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="mb-6 flex items-center gap-4">
            <IconSearch className="h-10 w-10 text-pe-teal" stroke={1.8} />
            <h3 className="text-3xl font-black text-pe-dark">Narration template</h3>
          </div>
          <div className="space-y-6 text-2xl leading-relaxed text-gray-700">
            <p>“At roughly [income band], this household loses [program/support].”</p>
            <p>“That means the next dollar of earnings is worth [interpretation].”</p>
            <p>“The policy question is whether we want this transition to be smoother.”</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function TakeawaysSlide() {
  const takeaways = [
    {
      title: 'Cliffs are visible only when programs are modeled together',
      body: 'CliffWatch is useful because it gives the household-level view rather than isolated eligibility rules.',
    },
    {
      title: 'Good demos make the policy choice concrete',
      body: 'The strongest scenarios connect a visible chart change to an understandable household decision.',
    },
    {
      title: 'The webinar should collect follow-up questions',
      body: 'Audience requests can become the next scenarios, comparisons, or public analyses.',
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>What viewers should leave with</Eyebrow>
        <SlideTitle>Three takeaways to repeat in the closing minutes.</SlideTitle>
      </SlideHeader>

      <div className="mt-10 space-y-6">
        {takeaways.map((takeaway, index) => (
          <div key={takeaway.title} className="content-card flex items-start gap-7 p-7">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-pe-light text-2xl font-black text-pe-teal">
              {index + 1}
            </div>
            <div>
              <h3 className="text-3xl font-black leading-tight text-pe-dark">
                {takeaway.title}
              </h3>
              <p className="mt-3 text-xl leading-relaxed text-gray-600">{takeaway.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

export function DiscussionSlide() {
  const questions = [
    'Which household scenarios would help you explain cliffs to your stakeholders?',
    'Which states, programs, or reforms should CliffWatch make easier to compare?',
    'What would make the tool useful for your team after the webinar?',
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Discussion prompts</Eyebrow>
        <SlideTitle>Invite the audience to turn the demo into the next analysis.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          Use this slide if Q&A needs structure. It can also capture follow-up
          work for the PolicyEngine team.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[1fr_0.85fr] gap-8">
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={question} className="content-card flex items-start gap-5 p-6">
              <IconMessageQuestion className="mt-1 h-9 w-9 flex-shrink-0 text-pe-teal" stroke={1.8} />
              <p className="text-2xl font-semibold leading-relaxed text-gray-700">
                {question}
              </p>
              <span className="ml-auto text-sm font-bold text-gray-300">Q{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <IconSparkles className="mb-6 h-12 w-12 text-pe-teal" stroke={1.8} />
          <h3 className="text-3xl font-black leading-tight text-pe-dark">
            Optional close
          </h3>
          <p className="mt-5 text-2xl leading-relaxed text-gray-700">
            “If CliffWatch makes one thing clear, it is that cliffs are design
            choices we can measure. Once they are visible, we can ask better
            questions about how to smooth them.”
          </p>
        </div>
      </div>
    </Slide>
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
