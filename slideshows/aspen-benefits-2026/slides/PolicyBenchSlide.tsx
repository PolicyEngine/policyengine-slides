import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

type Row = { model: string; exact: number; rank: number };

const top: Row[] = [
  { model: "GPT-5.5", exact: 80.3, rank: 1 },
  { model: "Gemini 3.1 Pro", exact: 77.8, rank: 2 },
  { model: "Claude Opus 4.7", exact: 77.3, rank: 3 },
];
const bottom: Row = { model: "GPT-5.4 nano", exact: 62.2, rank: 13 };

function Bar({ row, lead }: { row: Row; lead?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 text-right text-sm font-semibold text-gray-400 tabular-nums">
        {row.rank}
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between mb-1">
          <span
            className={`text-base ${lead ? "font-bold text-pe-dark" : "font-semibold text-gray-700"}`}
          >
            {row.model}
          </span>
          <span
            className="text-lg font-bold tabular-nums"
            style={{ color: lead ? "var(--pe-teal)" : "var(--pe-dark)" }}
          >
            {row.exact}%
          </span>
        </div>
        <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${row.exact}%`,
              background: lead
                ? "linear-gradient(90deg, var(--pe-teal) 0%, var(--pe-teal-dark) 100%)"
                : "var(--pe-teal-light)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function PolicyBenchSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>So we measured how good it is: PolicyBench</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[0.9fr_1.1fr] gap-7 mt-1">
        <div className="flex flex-col gap-4">
          <div className="content-card p-5">
            <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
              The test
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              13 frontier models, 100 representative US households, 18 tax and
              benefit outputs &mdash; no tools, just the model reasoning from the
              prompt. Scored against PolicyEngine.
            </p>
          </div>
          <div className="accent-block">
            <p className="text-lg font-semibold text-gray-700 leading-relaxed">
              The best model gets four in five figures to the dollar. The
              multi-step dollar amounts &mdash; income tax &mdash; sit near a
              coin flip. Every error we hand-checked was the model&apos;s, not
              PolicyEngine&apos;s.
            </p>
          </div>
          <p className="text-sm text-pe-teal-dark font-semibold mt-auto">
            policybench.org
          </p>
        </div>

        <div className="content-card p-6">
          <div className="slide-tag mb-4" style={{ fontSize: "0.7rem" }}>
            Exact match &mdash; share of figures right to the dollar
          </div>
          <div className="space-y-4">
            <Bar row={top[0]} lead />
            <Bar row={top[1]} />
            <Bar row={top[2]} />
            <div className="flex items-center gap-3 py-1">
              <div className="w-6" />
              <p className="text-xs text-gray-400 italic">
                9 more frontier models between
              </p>
            </div>
            <Bar row={bottom} />
          </div>
        </div>
      </div>
    </Slide>
  );
}
