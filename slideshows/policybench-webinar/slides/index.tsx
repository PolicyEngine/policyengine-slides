import Slide from "@/components/core/Slide";
import CoverSlideTemplate from "@/components/layout/CoverSlide";
import EndSlideTemplate from "@/components/layout/EndSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { speakers } from "@/lib/speakers";
import {
  IconBuildingBank,
  IconChecks,
  IconListSearch,
  IconLock,
  IconRobot,
  IconScale,
  IconWorld,
} from "@tabler/icons-react";
import type { ComponentType, CSSProperties, ReactNode } from "react";

const colors = {
  teal: "var(--pe-teal)",
  amber: "var(--pe-amber)",
  dark: "var(--pe-dark)",
};

const SITE = "policybench.org";
const SITE_URL = "https://policybench.org";
const PAPER_URL = "https://policybench.org/paper";

// Leaderboard — share of outputs each model gets exactly right (to the dollar),
// June 2026 populace run, scored against PolicyEngine. Source: policybench.org.
const LEADERBOARD = [
  { name: "GPT-5.5", exact: 80.3 },
  { name: "Gemini 3.1 Pro Preview", exact: 77.8 },
  { name: "Claude Opus 4.7", exact: 77.3 },
  { name: "Grok 4.3", exact: 77.2 },
  { name: "Claude Sonnet 4.6", exact: 77.0 },
  { name: "Gemini 3 Flash Preview", exact: 76.8 },
  { name: "Gemini 3.5 Flash", exact: 76.1 },
  { name: "Gemini 3.1 Flash Lite Preview", exact: 76.0 },
  { name: "Grok Build 0.1", exact: 76.0 },
  { name: "Claude Opus 4.8", exact: 72.5 },
  { name: "Claude Haiku 4.5", exact: 71.7 },
  { name: "GPT-5.4 mini", exact: 70.4 },
  { name: "GPT-5.4 nano", exact: 62.2 },
];

// Exact-match rate by output type (hardest to easiest).
const BREAKDOWN = [
  { name: "Federal income tax", exact: 47.1 },
  { name: "State income tax", exact: 53.3 },
  { name: "Payroll tax", exact: 68.2 },
  { name: "SNAP", exact: 76.8 },
  { name: "Eligibility flags", exact: 97, label: "95–99%" },
];

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
        <p className="mt-3 max-w-[940px] text-xl leading-relaxed text-gray-600">
          {body}
        </p>
      )}
    </SlideHeader>
  );
}

function Card({
  title,
  body,
  tone = colors.teal,
  icon: Icon,
}: {
  title: string;
  body: string;
  tone?: string;
  icon?: ComponentType<{
    className?: string;
    stroke?: number;
    style?: CSSProperties;
  }>;
}) {
  return (
    <div className="content-card min-w-0 p-6" style={{ borderLeftColor: tone }}>
      <div className="mb-3 flex items-center gap-3">
        {Icon && (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${tone}18` }}
          >
            <Icon className="h-6 w-6" style={{ color: tone }} stroke={1.8} />
          </div>
        )}
      </div>
      <h3 className="text-xl font-black leading-tight tracking-normal text-pe-dark">
        {title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-6xl font-black leading-none tracking-tight text-pe-teal">
        {value}
      </span>
      <span className="mt-3 text-base font-semibold uppercase tracking-widest text-gray-500">
        {label}
      </span>
    </div>
  );
}

function BarRow({
  name,
  value,
  valueLabel,
  lead = false,
}: {
  name: string;
  value: number;
  valueLabel?: string;
  lead?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-[300px] shrink-0 truncate text-right text-lg ${
          lead ? "font-black text-pe-dark" : "font-semibold text-gray-700"
        }`}
      >
        {name}
      </div>
      <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-slate-100">
        <div
          className="absolute inset-y-0 left-0 rounded-md"
          style={{
            width: `${value}%`,
            backgroundColor: colors.teal,
            opacity: lead ? 1 : 0.5,
          }}
        />
      </div>
      <div
        className={`w-20 shrink-0 text-right font-mono text-lg tabular-nums ${
          lead ? "font-black text-pe-teal" : "font-bold text-gray-700"
        }`}
      >
        {valueLabel ?? `${value.toFixed(1)}%`}
      </div>
    </div>
  );
}

export function CoverSlide() {
  return (
    <CoverSlideTemplate
      title="PolicyBench"
      subtitle="Can AI calculate your taxes and benefits?"
      speakers={[speakers["max-ghenis"]]}
      event="PolicyEngine"
      date="2026-06-25"
    />
  );
}

export function QuestionSlide() {
  return (
    <WebinarSlide>
      <Header
        eyebrow="The question"
        title="Can a frontier model do your taxes from the prompt alone?"
        body="People increasingly ask AI to help with their taxes and benefits. PolicyBench measures whether it can actually compute them — no tools, no lookups, no calculator. Just the model reasoning from a household's facts."
      />
      <div className="mt-auto border-t border-slate-200 pt-6">
        <p className="text-2xl font-black leading-snug tracking-normal text-pe-dark">
          A real answer needs the exact number — not a close one.
        </p>
      </div>
    </WebinarSlide>
  );
}

export function SetupSlide() {
  return (
    <WebinarSlide>
      <Header
        eyebrow="The setup"
        title="13 frontier models, scored to the dollar against PolicyEngine."
        body="Each model gets one household's facts and returns every tax and benefit output — no tools. We grade each answer against PolicyEngine's deterministic calculation: exact to the dollar, or the right eligibility flag."
      />
      <div className="mt-4 grid grid-cols-4 gap-6 border-y border-slate-200 py-8">
        <Stat value="13" label="Frontier models" />
        <Stat value="100" label="US households" />
        <Stat value="18" label="Tax & benefit outputs" />
        <Stat value="0" label="Tools" />
      </div>
    </WebinarSlide>
  );
}

export function LeaderboardSlide() {
  const max = LEADERBOARD[0].exact;
  return (
    <WebinarSlide>
      <Header
        eyebrow="Results"
        title="GPT-5.5 leads — but the field is tight."
        body="Share of outputs each model gets exactly right, to the dollar. The top nine sit between 76% and 80%."
      />
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-[6px]">
        {LEADERBOARD.map((m, i) => (
          <BarRow
            key={m.name}
            name={m.name}
            value={(m.exact / max) * 100}
            valueLabel={`${m.exact.toFixed(1)}%`}
            lead={i === 0}
          />
        ))}
      </div>
    </WebinarSlide>
  );
}

export function BreakdownSlide() {
  return (
    <WebinarSlide>
      <Header
        eyebrow="Where they break"
        title="Models nail eligibility, but miss the math."
        body="Multi-step dollar calculations — income tax especially — are far harder than a yes/no eligibility decision. Best-model exact-match rate by output type:"
      />
      <div className="mt-4 flex min-h-0 flex-1 flex-col justify-center gap-5">
        {BREAKDOWN.map((p) => (
          <BarRow
            key={p.name}
            name={p.name}
            value={p.exact}
            valueLabel={p.label ?? `${p.exact.toFixed(1)}%`}
          />
        ))}
      </div>
    </WebinarSlide>
  );
}

export function ThesisSlide() {
  return (
    <Slide>
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-pe-teal">
          The takeaway
        </p>
        <h2 className="text-5xl font-black leading-[1.1] tracking-tight text-pe-dark">
          To get the last 20%, agents need to call a deterministic engine.
        </h2>
        <p className="mt-7 max-w-[880px] text-2xl leading-relaxed text-gray-600">
          It is hard to hold statutes, regulations, and forms in your head — for
          a model or a person. The reliable path is AI that hands the
          calculation to an engine like PolicyEngine, not one that reasons it
          out from a prompt.
        </p>
      </div>
    </Slide>
  );
}

export function CredibilitySlide() {
  const cards = [
    {
      title: "An open, deterministic reference",
      body: "Every answer is graded against PolicyEngine — open-source, statute-encoded tax and benefit rules, not a hand-built answer key.",
      icon: IconScale,
      tone: colors.teal,
    },
    {
      title: "Every miss hand-audited",
      body: "We reviewed every wrong cell. All traced to model errors — none to PolicyEngine reference defects.",
      icon: IconChecks,
      tone: colors.dark,
    },
    {
      title: "Fully reproducible",
      body: "A frozen, hash-pinned snapshot: every prompt, reference output, and prediction is released, so the leaderboard recomputes exactly.",
      icon: IconLock,
      tone: colors.amber,
    },
    {
      title: "Reconciled across engines",
      body: "PolicyEngine is continuously checked against independent engines — NBER TAXSIM, the Atlanta Fed, and NYC benefit rules.",
      icon: IconBuildingBank,
      tone: colors.teal,
    },
  ];
  return (
    <WebinarSlide>
      <Header
        eyebrow="How we score it"
        title="A benchmark is only as good as its reference."
      />
      <div className="grid min-w-0 grid-cols-2 gap-5">
        {cards.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            body={c.body}
            tone={c.tone}
            icon={c.icon}
          />
        ))}
      </div>
    </WebinarSlide>
  );
}

export function DemoSlide() {
  return (
    <Slide>
      <div className="mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-pe-teal">
          Live demo
        </p>
        <h2 className="text-5xl font-black leading-tight tracking-tight text-pe-dark">
          Let&rsquo;s look at it.
        </h2>
        <p className="mt-6 max-w-[760px] text-2xl leading-relaxed text-gray-600">
          The live leaderboard, and a scenario explorer with every prompt and
          every PolicyEngine reference output.
        </p>
        <p className="mt-10 text-4xl font-black tracking-tight text-pe-teal">
          {SITE}
        </p>
      </div>
    </Slide>
  );
}

export function OpenSlide() {
  const cards = [
    {
      title: "Live leaderboard",
      body: "Slice accuracy by model and by program, and switch between exact match and within-1%.",
      icon: IconListSearch,
      tone: colors.teal,
    },
    {
      title: "Scenario explorer",
      body: "Every household prompt, every model answer, and every PolicyEngine reference output — open to inspect.",
      icon: IconListSearch,
      tone: colors.amber,
    },
    {
      title: "Full paper and code",
      body: "The method, scoring, and uncertainty are documented, and the entire harness is open-source.",
      icon: IconChecks,
      tone: colors.dark,
    },
  ];
  return (
    <WebinarSlide>
      <Header
        eyebrow="Everything is open"
        title="Inspect every prompt, answer, and reference number."
      />
      <div className="grid min-w-0 grid-cols-3 gap-5">
        {cards.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            body={c.body}
            tone={c.tone}
            icon={c.icon}
          />
        ))}
      </div>
    </WebinarSlide>
  );
}

export function NextSlide() {
  const cards = [
    {
      title: "A protected held-out set",
      body: "Today’s public benchmark exposes its prompts, so a held-out split will measure models without leakage.",
      icon: IconLock,
      tone: colors.teal,
    },
    {
      title: "More countries",
      body: "The UK is already live; the same harness extends to every system PolicyEngine models.",
      icon: IconWorld,
      tone: colors.amber,
    },
    {
      title: "Agents that call the engine",
      body: "The interesting frontier is not the model alone — it is the model wired to a deterministic calculator.",
      icon: IconRobot,
      tone: colors.dark,
    },
  ];
  return (
    <WebinarSlide>
      <Header
        eyebrow="What’s next"
        title="From a leaderboard to a reference for AI on policy."
      />
      <div className="grid min-w-0 grid-cols-3 gap-5">
        {cards.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            body={c.body}
            tone={c.tone}
            icon={c.icon}
          />
        ))}
      </div>
    </WebinarSlide>
  );
}

export function EndSlide() {
  return (
    <EndSlideTemplate
      message="Questions?"
      subtitle={SITE}
      links={[
        { label: SITE, url: SITE_URL },
        { label: "Read the paper", url: PAPER_URL },
        { label: "policyengine.org", url: "https://policyengine.org" },
      ]}
    />
  );
}
