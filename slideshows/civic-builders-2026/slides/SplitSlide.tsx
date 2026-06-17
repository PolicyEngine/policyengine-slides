import Slide from "@/components/core/Slide";
import {
  IconChevronDown,
  IconScale,
  IconChartDots3,
} from "@tabler/icons-react";

export default function SplitSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
        {/* PolicyEngine — has done both */}
        <div
          className="rounded-2xl py-3 px-8 text-center text-white"
          style={{
            background:
              "linear-gradient(90deg, var(--pe-teal) 0%, var(--pe-teal-dark) 100%)",
          }}
        >
          <span className="text-xl font-bold">PolicyEngine</span>
          <span className="text-white/85 ml-3 text-lg">
            has always done both &mdash; the rules, and what they cause
          </span>
        </div>

        <div className="flex gap-40 my-1">
          <IconChevronDown size={24} stroke={2} className="text-gray-300" />
          <IconChevronDown size={24} stroke={2} className="text-gray-300" />
        </div>

        {/* Split into two focused missions */}
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-1">
              <IconScale
                size={24}
                stroke={1.5}
                style={{ color: "var(--pe-teal)" }}
              />
              <h3 className="text-xl font-bold text-pe-dark">Axiom</h3>
              <span className="slide-tag" style={{ fontSize: "0.65rem" }}>
                Determinism
              </span>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Agents encode the law itself &mdash; open, executable, exact.
            </p>
          </div>
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-1">
              <IconChartDots3
                size={24}
                stroke={1.5}
                style={{ color: "var(--pe-teal)" }}
              />
              <h3 className="text-xl font-bold text-pe-dark">Thesis</h3>
              <span className="slide-tag" style={{ fontSize: "0.65rem" }}>
                Prediction
              </span>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Agents forecast the outcomes &mdash; even under policies that
              don&apos;t exist yet.
            </p>
          </div>
        </div>

        <p className="text-base text-gray-500 leading-relaxed text-center mt-5 max-w-3xl">
          Each was one-off and partial by hand. Agents scale each into a massive
          digital public good &mdash; and make AI truthful about law and policy.
        </p>

        {/* The call */}
        <div className="accent-block mt-7 w-full text-center">
          <p className="text-2xl font-bold text-pe-dark leading-snug">
            What could a massive digital public good look like in your corner of
            civic tech?
          </p>
        </div>
      </div>
    </Slide>
  );
}
