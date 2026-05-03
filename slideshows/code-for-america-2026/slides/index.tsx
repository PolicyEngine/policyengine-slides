import BasePathImage from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import CoverSlideTemplate from '@/components/layout/CoverSlide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { speakers } from '@/lib/speakers';
import {
  IconActivityHeartbeat,
  IconArrowRight,
  IconBolt,
  IconBuildingBank,
  IconChartArrowsVertical,
  IconCheck,
  IconChartHistogram,
  IconCode,
  IconCompass,
  IconDatabase,
  IconFileText,
  IconHandStop,
  IconRoute,
  IconScale,
  IconShieldCheck,
  IconUsers,
} from '@tabler/icons-react';

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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-2">
      {children}
    </p>
  );
}

function SimpleCard({
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
      className="rounded-2xl border bg-white p-6 shadow-sm"
      style={{ borderColor: `${tone}40` }}
    >
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: tone }}>
        {label}
      </p>
      <h3 className="mt-3 text-2xl font-black leading-tight text-pe-dark">{title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-gray-300">
      <IconArrowRight className="h-10 w-10" stroke={1.8} />
    </div>
  );
}

export function TitleSlide() {
  return (
    <CoverSlideTemplate
      title="PolicyEngine's open-source ecosystem"
      subtitle="From policy design to benefit access"
      speakers={[
        {
          ...speakers['max-ghenis'],
          title: 'Co-founder and CEO',
        },
      ]}
      event="Code for America Summit"
      date="2026-05-08"
    />
  );
}

export function AudienceSlide() {
  const groups = [
    {
      label: 'Government technologists',
      detail: 'building screening, outreach, or eligibility systems',
      icon: IconCode,
      tone: colors.blue,
    },
    {
      label: 'Policy and program staff',
      detail: 'designing or running tax and benefit programs',
      icon: IconBuildingBank,
      tone: colors.teal,
    },
    {
      label: 'Civic tech and nonprofits',
      detail: 'building tools that help households access benefits',
      icon: IconUsers,
      tone: colors.rose,
    },
    {
      label: 'Researchers and analysts',
      detail: 'measuring take-up, gaps, and policy impact',
      icon: IconChartHistogram,
      tone: colors.gold,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Who&apos;s in the room?</Eyebrow>
        <SlideTitle>Quick raise of hands.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          The next hour pulls together four perspectives on benefit access. The
          message lands differently depending on what you do every day.
        </p>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-2 gap-7">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.label}
              className="content-card flex items-start gap-6 p-7"
              style={{ borderLeftColor: group.tone }}
            >
              <div
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${group.tone}18` }}
              >
                <Icon className="h-9 w-9" style={{ color: group.tone }} stroke={1.8} />
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight text-pe-dark">
                  {group.label}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">{group.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="accent-block mt-8 flex items-center gap-5">
        <IconHandStop className="h-10 w-10 text-pe-teal" stroke={1.8} />
        <p className="text-2xl font-semibold text-gray-700">
          Whatever your seat, today is about the rules underneath every benefit
          decision — and how households experience them.
        </p>
      </div>
    </Slide>
  );
}

export function NarrativeSlide() {
  const steps = [
    {
      title: 'Chaos in policy',
      body: 'Statutes change, programs interact, and every team interprets the rules separately.',
      icon: IconBolt,
      tone: colors.rose,
    },
    {
      title: 'Clarity in code',
      body: 'PolicyEngine encodes the rules once, with tests, references, and an open API.',
      icon: IconDatabase,
      tone: colors.blue,
    },
    {
      title: 'Households reached',
      body: 'Screeners and outreach tools use the same logic to help families claim what they qualify for.',
      icon: IconUsers,
      tone: colors.teal,
    },
    {
      title: 'Evidence back',
      body: 'Researchers compare modeled eligibility with real enrollment and feed it back to policy.',
      icon: IconScale,
      tone: colors.gold,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Through line</Eyebrow>
        <SlideTitle>From chaos to clarity — and back to households and evidence.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          Four perspectives, one sequence: messy policy gets encoded once,
          benefits reach families, and the resulting evidence shapes the next
          round of policy.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[1fr_70px_1fr_70px_1fr_70px_1fr] items-stretch gap-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="contents">
              <div className="content-card p-6 min-h-[290px]" style={{ borderLeftColor: step.tone }}>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
                  <Icon className="h-9 w-9" style={{ color: step.tone }} stroke={1.8} />
                </div>
                <h3 className="text-2xl font-black leading-tight text-pe-dark">{step.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">{step.body}</p>
              </div>
              {index < steps.length - 1 && <FlowArrow />}
            </div>
          );
        })}
      </div>
    </Slide>
  );
}

export function DuplicationSlide() {
  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Why shared rules matter</Eyebrow>
        <SlideTitle>Benefit access breaks when every tool rebuilds the same rules.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          Policy changes once. Without shared infrastructure, every downstream
          team interprets, encodes, tests, and explains it separately.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[0.9fr_1.15fr_1fr] gap-8">
        <div className="space-y-5">
          <SimpleCard
            label="Source complexity"
            title="Policy text"
            body="Statutes, guidance, eligibility thresholds, uprating rules, and geography."
            tone={colors.rose}
          />
          <SimpleCard
            label="Program data"
            title="Parameters"
            body="FPL, deductions, credits, limits, state variation, and effective dates."
            tone={colors.gold}
          />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Duplicated interpretation
          </p>
          {['Screener', 'Navigator', 'Research', 'Policy app'].map((label) => (
            <div key={label} className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xl font-black text-pe-dark">{label}</div>
              <div className="mt-1 text-base text-gray-500">
                Eligibility copy, tests, calculators, and edge cases.
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          <SimpleCard
            label="User-facing result"
            title="Inconsistent answers"
            body="The same household can get different guidance from different tools."
            tone={colors.teal}
          />
          <SimpleCard
            label="Operations"
            title="Slow updates"
            body="New policy takes too long to reach screening and outreach workflows."
            tone={colors.blue}
          />
          <SimpleCard
            label="Evidence"
            title="Weak measurement"
            body="Take-up gaps are hard to estimate when eligibility logic diverges."
            tone={colors.gold}
          />
        </div>
      </div>

      <div className="accent-block mt-7">
        <p className="text-2xl font-semibold text-gray-700">
          Shared-infrastructure bet: encode once, test once, expose through an
          API, then let partners specialize.
        </p>
      </div>
    </Slide>
  );
}

export function ArchitectureSlide() {
  const users = [
    ['Policy designers', 'household and society simulations', colors.blue],
    ['MyFriendBen', 'screening across 40+ programs', colors.teal],
    ['Amplifi', 'proactive navigation before benefit loss', colors.rose],
    ['Better Government Lab', 'take-up gaps from administrative data', colors.gold],
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Architecture</Eyebrow>
        <SlideTitle>PolicyEngine is the shared layer underneath specialized tools.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          The web app, API partners, and researchers all depend on the same
          open rules, data, and methodology.
        </p>
      </SlideHeader>

      <div className="mt-12 grid grid-cols-[0.9fr_1.05fr_1.2fr] gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Inputs</p>
          <div className="mt-6 space-y-6">
            <SimpleCard
              label="Rules"
              title="Legislative text"
              body="Statutes, bills, guidance, and jurisdiction-specific provisions."
              tone={colors.rose}
            />
            <SimpleCard
              label="Data"
              title="Program parameters"
              body="Thresholds, deductions, credits, limits, geography, and dates."
              tone={colors.gold}
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Shared layer</p>
          <div className="mt-6 flex min-h-[430px] flex-col justify-center rounded-3xl border border-teal-100 bg-teal-50 p-8 text-center">
            <div className="relative mx-auto h-16 w-full max-w-[260px]">
              <BasePathImage
                src="/logos/teal.svg"
                alt="PolicyEngine"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-5 text-base font-bold uppercase tracking-widest text-pe-teal">
              Open source · Python · GitHub
            </p>
            <div className="mx-auto mt-6 max-w-xs text-2xl leading-snug text-pe-dark">
              Rules as code
              <br />
              Open microdata
              <br />
              Tests + validation
              <br />
              REST API
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Specialized users
          </p>
          <div className="mt-6 space-y-4">
            {users.map(([title, body, tone]) => (
              <div key={title} className="flex items-start gap-4">
                <div className="mt-5 h-14 w-2 rounded-full" style={{ backgroundColor: tone }} />
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-2xl font-black text-pe-dark">{title}</div>
                  <div className="mt-2 text-lg text-gray-600">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function CapabilitiesSlide() {
  const eras = [
    {
      tag: '2021 →',
      tagColor: colors.teal,
      title: 'Where we came from',
      icon: IconCode,
      tone: colors.teal,
      body:
        'PolicyEngine launched as an open-source UK tax-benefit calculator forked from OpenFisca. Rules-as-code was the founding bet.',
      bullets: [
        'Spun out as a 501(c)(3) within a month of launch',
        'Expanded to the US in 2022 — federal, then state by state',
        'Open source from day one: GitHub, Python, public API',
      ],
    },
    {
      tag: 'Today',
      tagColor: colors.blue,
      title: 'Where we are now',
      icon: IconChartArrowsVertical,
      tone: colors.blue,
      body:
        'The same engine powers household calculation and population microsimulation — across federal, state, and local rules — for 24+ partner organizations.',
      bullets: [
        '65 programs · enhanced CPS microdata · 50+DC states',
        'Take-up calibrated to administrative data, not just survey self-reports',
        'Behavioral responses via labor-supply elasticity framework',
      ],
    },
    {
      tag: 'Next',
      tagColor: colors.gold,
      title: 'Where we&apos;re going',
      icon: IconActivityHeartbeat,
      tone: colors.gold,
      body:
        'Modeling implementation, not just policy text. Administrative burden changes who actually gets benefits — and that ripples into poverty, health, and child outcomes.',
      bullets: [
        'Take-up elasticities by policy regime (e.g., Arkansas-style work requirements)',
        'Spillover effects on people who comply but never finish paperwork',
        'Project downstream effects on poverty, inequality, and health',
      ],
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>The journey</Eyebrow>
        <SlideTitle>Where we come from, where we are, where we&apos;re going.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          PolicyEngine is more than rules-as-code. The same engine powers
          population-level simulation today and is moving toward modeling how
          programs are actually delivered — including who is reached and who
          falls through the cracks.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-3 gap-7">
        {eras.map((era) => {
          const Icon = era.icon;
          return (
            <div
              key={era.title}
              className="content-card p-7 min-h-[440px]"
              style={{ borderLeftColor: era.tone }}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
                  style={{ backgroundColor: era.tagColor }}
                >
                  {era.tag}
                </span>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${era.tone}18` }}
                >
                  <Icon className="h-7 w-7" style={{ color: era.tone }} stroke={1.8} />
                </div>
              </div>

              <h3
                className="mt-6 text-3xl font-black leading-tight text-pe-dark"
                dangerouslySetInnerHTML={{ __html: era.title }}
              />
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {era.body}
              </p>

              <ul className="mt-5 space-y-2 text-base text-gray-700">
                {era.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: era.tone }}
                    />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="accent-block mt-7">
        <p className="text-2xl font-semibold text-gray-700">
          The same way we lean on labor economists for tax-elasticity priors,
          the next layer leans on take-up researchers like Jeremy to make
          implementation modeling honest about who actually gets reached.
        </p>
      </div>
    </Slide>
  );
}

export function ModelScopeSlide() {
  const stats = [
    { value: '65', label: 'Programs in the model' },
    { value: '57', label: 'Marked complete today' },
    { value: '50 + DC', label: 'States with implementations' },
    { value: '31 / 19 / 15', label: 'Federal · state · local' },
  ];

  const takeaways = [
    'IRS, USDA, HHS, SSA, HUD, DOE, FCC, ACA, plus state and local rules.',
    'Each program links to its parameters, variables, tests, and computation tree.',
    'Live tracker at policyengine.org/us/model — searchable by program or state.',
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>What we model</Eyebrow>
        <SlideTitle>One open-source engine covers federal, state, and local rules.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          The live tracker at <span className="font-semibold text-pe-dark">policyengine.org/us/model</span> exposes
          every program, parameter, and test as first-class product surface.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1.08fr,0.92fr] gap-7 mt-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <BasePathImage
            src="/screenshots/pwbm-2026/model-rules-coverage.png"
            alt="PolicyEngine model coverage tracker"
            width={2560}
            height={1440}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="text-4xl font-black tracking-tight text-pe-dark">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-bold uppercase tracking-widest text-pe-teal">
              What the tracker shows
            </h3>
            <ul className="mt-4 space-y-3 text-base text-gray-700">
              {takeaways.map((takeaway) => (
                <li key={takeaway} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-pe-teal" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function AgentWorkflowSlide() {
  const steps = [
    ['Collect source', 'Law, guidance, parameters', IconFileText, colors.rose],
    ['Draft rule', 'Agent writes model logic', IconCode, colors.blue],
    ['Write tests', 'Examples and edge cases', IconShieldCheck, colors.teal],
    ['Validate', 'Human review and regression checks', IconCheck, colors.gold],
    ['Ship API', 'Calculation available to partners', IconRoute, colors.dark],
  ] as const;

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>AI workflow</Eyebrow>
        <SlideTitle>AI agents help turn policy text into testable, reviewable code.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          The demo should make the quality loop visible: source grounding, code,
          tests, validation, and release.
        </p>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-5 gap-5">
        {steps.map(([title, body, Icon, tone], index) => (
          <div key={title} className="content-card p-6 min-h-[310px]" style={{ borderLeftColor: tone }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: `${tone}18` }}>
              <Icon className="h-8 w-8" style={{ color: tone }} stroke={1.8} />
            </div>
            <div className="mt-8 text-5xl font-black text-pe-teal/35">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="mt-4 text-2xl font-black leading-tight text-pe-dark">{title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-gray-600">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-7">
        <div className="rounded-2xl bg-teal-50 p-6">
          <div className="text-2xl font-black text-pe-dark">Built-in guardrails</div>
          <p className="mt-3 text-xl leading-relaxed text-gray-700">
            Source citations travel with every rule. Tests ship with the code.
            Human review signs off before anything reaches the API.
          </p>
        </div>
        <div className="rounded-2xl bg-amber-50 p-6">
          <div className="text-2xl font-black text-pe-dark">Why this scales</div>
          <p className="mt-3 text-xl leading-relaxed text-gray-700">
            What used to take an analyst weeks now takes hours — and the result
            is reusable across every tool that calls our API.
          </p>
        </div>
      </div>
    </Slide>
  );
}

export function CredibilityLayerSlide() {
  const cards = [
    {
      label: 'PolicyBench',
      title: 'Benchmark the AI boundary',
      body: 'AI can help parse policy text, but PolicyBench makes accuracy measurable before the result reaches households or partners.',
      tone: colors.blue,
      icon: IconShieldCheck,
      stats: [
        ['73.35', 'top no-tools score across 12,974 parsed tax-benefit predictions'],
        ['4,200 / 4,200', 'tool-assisted pilot predictions exactly matched the simulator'],
      ],
    },
    {
      label: 'Axiom Foundation',
      title: 'Scale rule encoding beyond one app',
      body: 'Axiom separates the infrastructure mission: public rules as machine-readable, open-source code that many organizations can consume.',
      tone: colors.teal,
      icon: IconDatabase,
      stats: [
        ['Rules as code', 'AI helps encode; deterministic software computes'],
        ['Shared standard', 'PolicyEngine focuses on households, budgets, and incentives'],
      ],
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Credibility layer</Eyebrow>
        <SlideTitle>PolicyBench and Axiom answer the two hard AI questions.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          Two questions an audience always asks. How do we know AI got the
          rule right? And how does this scale beyond one organization?
        </p>
      </SlideHeader>

      <div className="mt-9 grid grid-cols-2 gap-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="min-h-[500px] rounded-3xl border-2 bg-white p-7 shadow-sm"
              style={{ borderColor: `${card.tone}55` }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: card.tone }}
                  >
                    {card.label}
                  </p>
                  <h3 className="mt-4 text-4xl font-black leading-tight text-pe-dark">
                    {card.title}
                  </h3>
                </div>
                <div
                  className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${card.tone}18` }}
                >
                  <Icon className="h-9 w-9" style={{ color: card.tone }} stroke={1.8} />
                </div>
              </div>

              <p className="mt-6 text-xl leading-relaxed text-gray-600">{card.body}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {card.stats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-slate-50 p-5">
                    <div className="text-3xl font-black leading-tight text-pe-dark">{value}</div>
                    <p className="mt-3 text-base leading-snug text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="accent-block mt-7">
        <p className="text-2xl font-semibold text-gray-700">
          PolicyBench measures what AI gets right today. Axiom turns rule
          encoding into public infrastructure that anyone can build on.
        </p>
      </div>
    </Slide>
  );
}

export function ScaleSlide() {
  const evidence = [
    {
      label: 'Policy analysis',
      title: 'Used and cited by major policy institutions',
      detail: 'Brookings, JEC, CRFB, FGA, No. 10, Niskanen, AEI, and others.',
    },
    {
      label: 'Validation',
      title: 'External model comparison partners',
      detail: 'NBER TAXSIM and Atlanta Fed Policy Rules Database.',
    },
    {
      label: 'Production',
      title: 'Frontline benefit tools run on our API',
      detail: '100K+ people served via API partners globally.',
    },
  ];

  const organizations: {
    name: string;
    logo: string;
    width?: number;
    height?: number;
    className?: string;
  }[] = [
    { name: 'Brookings Institution', logo: '/logos/organizations/brookings.svg', width: 150, height: 50 },
    { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png' },
    { name: 'Committee for a Responsible Federal Budget', logo: '/logos/organizations/crfb.png', width: 135, className: 'invert' },
    { name: '10 Downing Street', logo: '/logos/organizations/10-downing-street.png' },
    { name: 'Foundation for Government Accountability', logo: '/logos/organizations/fga.png', width: 100 },
    { name: 'Bureau of Economic Analysis', logo: '/logos/organizations/bea.png' },
    { name: 'NBER', logo: '/logos/organizations/nber.png', width: 145 },
    { name: 'Atlanta Fed', logo: '/logos/organizations/atlanta-fed.png', width: 125 },
    { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
    { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
    { name: 'Living Wage Institute', logo: '/logos/organizations/living-wage-calculator.png', width: 95 },
    { name: 'Georgetown University', logo: '/logos/organizations/georgetown.png' },
    { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png' },
    { name: 'University of Michigan', logo: '/logos/organizations/umich.png' },
    { name: 'USC', logo: '/logos/organizations/usc.png', width: 70 },
    { name: 'UHERO', logo: '/logos/organizations/uhero.png' },
    { name: 'Colorado Fiscal Institute', logo: '/logos/organizations/cfi.png' },
    { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.jpg' },
    { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
    { name: 'Mothers Outreach Network', logo: '/logos/organizations/mothers-outreach-network.png' },
    { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
    { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
    { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
    { name: 'Starlight', logo: '/logos/organizations/starlight.png' },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Who uses PolicyEngine</Eyebrow>
        <SlideTitle>Researchers, governments, validators, and frontline benefit tools on one rules engine.</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {evidence.map((item) => (
          <div key={item.label} className="content-card p-5">
            <div
              className="text-xs font-bold uppercase tracking-widest text-pe-teal"
              style={{ fontSize: '0.7rem' }}
            >
              {item.label}
            </div>
            <h3 className="text-base font-bold text-pe-dark leading-tight mt-2 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="w-full mt-6">
        <div className="grid grid-cols-6 gap-x-7 gap-y-5 w-full px-4">
          {organizations.map((org) => (
            <div
              key={org.name}
              className="flex items-center justify-center"
              style={{ height: '46px' }}
            >
              <BasePathImage
                src={org.logo}
                alt={org.name}
                width={org.width ?? 105}
                height={org.height ?? 48}
                className={`object-contain max-h-11 ${org.className ?? ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export function EcosystemLoopSlide() {
  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Ecosystem loop</Eyebrow>
        <SlideTitle>Households sit at the center of the loop.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          The same rules layer powers measurement, navigation, and screening —
          and the evidence feeds back into the next round of policy.
        </p>
      </SlideHeader>

      <div className="relative mt-6 h-[540px]">
        <div className="absolute left-4 top-[210px] w-[260px] rounded-2xl border-2 border-blue-200 bg-white p-6">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-700">Policy</div>
          <div className="mt-2 text-2xl font-black text-pe-dark">Design and reform</div>
          <p className="mt-3 text-base text-gray-600">simulate household and society effects</p>
        </div>

        <div className="absolute left-[300px] top-[160px] flex h-[230px] w-[360px] flex-col items-center justify-center rounded-3xl bg-teal-50 p-7 text-center">
          <IconCode className="h-10 w-10 text-pe-teal" stroke={1.8} />
          <div className="mt-3 text-3xl font-black text-pe-dark">PolicyEngine</div>
          <p className="mt-3 text-lg leading-snug text-pe-dark">
            open rules + data + methodology + API
          </p>
        </div>

        <div className="absolute left-[710px] top-[200px] flex w-[260px] flex-col items-center rounded-3xl border-2 border-amber-300 bg-white p-6 text-center">
          <IconUsers className="h-10 w-10 text-amber-500" stroke={1.8} />
          <div className="mt-2 text-2xl font-black text-pe-dark">Households</div>
          <p className="mt-2 text-base text-gray-600">families navigating the rules in real life</p>
        </div>

        <div className="absolute right-4 top-0 w-[300px] rounded-2xl border-2 border-teal-200 bg-teal-50 p-5">
          <div className="text-xs font-black uppercase tracking-widest text-teal-700">Screen</div>
          <div className="mt-1 text-xl font-black text-pe-dark">Laura / MyFriendBen</div>
          <p className="mt-2 text-base text-gray-600">surface eligibility across 40+ programs</p>
        </div>

        <div className="absolute right-4 top-[210px] w-[300px] rounded-2xl border-2 border-red-200 bg-red-50 p-5">
          <div className="text-xs font-black uppercase tracking-widest text-red-700">Navigate</div>
          <div className="mt-1 text-xl font-black text-pe-dark">Jill / Amplifi</div>
          <p className="mt-2 text-base text-gray-600">intervene before benefit loss</p>
        </div>

        <div className="absolute right-4 bottom-[40px] w-[300px] rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
          <div className="text-xs font-black uppercase tracking-widest text-amber-700">Measure</div>
          <div className="mt-1 text-xl font-black text-pe-dark">Jeremy / Better Gov Lab</div>
          <p className="mt-2 text-base text-gray-600">compare eligibility to enrollment</p>
        </div>

        <IconArrowRight
          className="absolute left-[265px] top-[256px] h-9 w-9 text-slate-400"
          stroke={1.8}
        />
        <IconArrowRight
          className="absolute left-[660px] top-[256px] h-9 w-9 text-slate-400"
          stroke={1.8}
        />

        <div className="absolute left-[150px] bottom-[18px] flex items-center gap-3 rounded-full bg-amber-100 px-5 py-2 text-base font-bold text-amber-800">
          <IconArrowRight className="h-5 w-5 rotate-180" stroke={2} />
          evidence and operational signals feed the next round of policy
        </div>
      </div>
    </Slide>
  );
}

export function DemoPathSlide() {
  const features = [
    {
      title: 'A real policy',
      body: 'OBBBA — the One Big Beautiful Bill Act — reshapes tax credits, deductions, and benefits for tens of millions of households.',
      tone: colors.rose,
    },
    {
      title: 'Household by household',
      body: 'Each dot is a real CPS household. Hover or click to see the dollar impact at every income level and family structure.',
      tone: colors.blue,
    },
    {
      title: 'Rules-as-code in action',
      body: 'Every number comes from the same open Python rules that screeners, outreach tools, and researchers call through our API.',
      tone: colors.teal,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Live demo</Eyebrow>
        <SlideTitle>OBBBA, household by household.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          One product built on the rules layer — visualizing how a single piece
          of legislation lands on real American households, in real dollars.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-3 gap-7">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <div className="mb-6 h-2 rounded-full" style={{ backgroundColor: feature.tone }} />
            <div className="text-2xl font-black text-pe-dark">{feature.title}</div>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{feature.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-teal-50 p-7">
        <p className="text-sm font-bold uppercase tracking-widest text-pe-teal">
          Demo URL
        </p>
        <p className="mt-2 text-3xl font-black text-pe-dark">
          policyengine.org/us/obbba-household-by-household
        </p>
        <p className="mt-4 text-xl leading-relaxed text-gray-700">
          Same rules engine powers Laura&apos;s screener, Jill&apos;s
          navigation, and Jeremy&apos;s research. Different products, one
          computation layer.
        </p>
      </div>
    </Slide>
  );
}

export function PartnerHandoffSlide() {
  const partners = [
    {
      name: 'Laura Glaab',
      org: 'MyFriendBen',
      verb: 'Screen',
      body: 'Turns shared rules into a multi-state, multi-program screener households can actually use.',
      quote: '"Public benefits should feel like Global Entry."',
      icon: IconUsers,
      tone: colors.teal,
    },
    {
      name: 'Jill Bauman',
      org: 'Amplifi',
      verb: 'Navigate',
      body: 'Reaches families before they lose coverage and walks them through what to do next.',
      quote: 'Accurate modeling lets navigators intervene before benefit loss.',
      icon: IconCompass,
      tone: colors.rose,
    },
    {
      name: 'Jeremy Barofsky',
      org: 'Better Government Lab',
      verb: 'Measure',
      body: 'Compares modeled eligibility to administrative enrollment to find the take-up gap.',
      quote: '$80–120B in benefits goes unclaimed every year.',
      icon: IconChartHistogram,
      tone: colors.gold,
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <Eyebrow>Handoff</Eyebrow>
        <SlideTitle>Infrastructure only matters when others build on it.</SlideTitle>
        <p className="mt-3 max-w-5xl text-xl leading-relaxed text-gray-600">
          Three partners, three jobs, one shared rules layer. Each is up next
          to show what clarity looks like in their corner of the system.
        </p>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-3 gap-8">
        {partners.map((partner) => {
          const Icon = partner.icon;
          return (
            <div
              key={partner.name}
              className="min-h-[420px] rounded-3xl border-2 bg-white p-7"
              style={{ borderColor: partner.tone }}
            >
              <div className="flex items-center justify-between gap-4">
                <p
                  className="text-sm font-black uppercase tracking-widest"
                  style={{ color: partner.tone }}
                >
                  {partner.verb}
                </p>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${partner.tone}18` }}
                >
                  <Icon className="h-7 w-7" style={{ color: partner.tone }} stroke={1.8} />
                </div>
              </div>
              <h3 className="mt-6 text-3xl font-black leading-tight text-pe-dark">{partner.name}</h3>
              <p className="text-lg font-semibold text-gray-500">{partner.org}</p>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">{partner.body}</p>
              <p
                className="mt-6 border-l-4 pl-4 text-lg italic leading-snug text-gray-700"
                style={{ borderColor: partner.tone }}
              >
                {partner.quote}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-12 max-w-5xl text-center">
        <p className="text-3xl font-black leading-snug text-pe-dark">
          I&apos;ve shown the rules layer. Laura, Jill, and Jeremy will follow
          a household&apos;s journey through it — from finding eligibility, to
          getting help applying, to seeing the outcomes at scale.
        </p>
      </div>
    </Slide>
  );
}
