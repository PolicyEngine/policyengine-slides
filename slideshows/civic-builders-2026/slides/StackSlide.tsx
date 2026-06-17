import Slide from "@/components/core/Slide";
import {
  IconChevronUp,
  IconChartDots3,
  IconScale,
  IconUsers,
} from "@tabler/icons-react";

export default function StackSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto">
        {/* Thesis — forecasts on top */}
        <div
          className="w-full rounded-2xl py-4 px-6 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, var(--pe-dark) 0%, var(--pe-darker) 100%)",
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <IconChartDots3 size={24} stroke={1.5} className="text-pe-teal" />
            <span className="text-xl font-bold">Thesis</span>
            <span className="text-white/85 text-lg">
              forecasts every government metric &mdash; even under
              counterfactuals
            </span>
          </div>
        </div>

        <IconChevronUp size={24} stroke={2} className="text-gray-300 my-1" />

        {/* PolicyEngine — the unifier */}
        <div
          className="w-full rounded-2xl py-4 px-6 text-center text-white"
          style={{
            background:
              "linear-gradient(90deg, var(--pe-teal) 0%, var(--pe-teal-dark) 100%)",
          }}
        >
          <span className="text-xl font-bold">PolicyEngine</span>
          <span className="text-white/85 ml-3 text-lg">
            unifies them into tools anyone can run
          </span>
        </div>

        <div className="flex gap-28 my-1">
          <IconChevronUp size={22} stroke={2} className="text-gray-300" />
          <IconChevronUp size={22} stroke={2} className="text-gray-300" />
        </div>

        {/* Two open foundations */}
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <IconScale
                size={24}
                stroke={1.5}
                style={{ color: "var(--pe-teal)" }}
              />
              <h3 className="text-xl font-bold text-pe-dark">Axiom</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              The rules &mdash; the law itself, as open code.
            </p>
          </div>
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <IconUsers
                size={24}
                stroke={1.5}
                style={{ color: "var(--pe-teal)" }}
              />
              <h3 className="text-xl font-bold text-pe-dark">populace</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              The people &mdash; calibrated, open microdata.
            </p>
          </div>
        </div>

        {/* The pattern */}
        <div className="text-center mt-8">
          <p className="text-2xl font-semibold text-pe-dark">
            Encode the rules. Integrate the data. Forecast the outcomes.
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Open public infrastructure, built at a scale humans never could.
          </p>
        </div>
      </div>
    </Slide>
  );
}
