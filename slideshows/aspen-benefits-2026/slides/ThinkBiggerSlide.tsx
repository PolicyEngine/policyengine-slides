import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

export default function ThinkBiggerSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Think bigger than the budget line</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-2 items-stretch">
        <div className="content-card p-6 flex flex-col justify-center">
          <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
            The outcomes that matter
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether a family takes up a benefit. The call-center wait a Medicaid
            work requirement creates. Whether someone actually gets helped
            &mdash; the things that decide if the system works, none of them
            measured in dollars.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 text-white flex flex-col justify-center"
          style={{
            background:
              "linear-gradient(180deg, var(--pe-dark) 0%, var(--pe-darker) 100%)",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-2">
            The leap
          </p>
          <p className="font-display text-6xl font-bold text-white leading-none mb-3">
            Millions
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            of credible forecasters &mdash; AI agents that now match the best
            humans &mdash; reading the evidence and forecasting every outcome,
            not just the budget.
          </p>
        </div>
      </div>

      <div className="accent-block mt-7">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Millions of expert-grade forecasts, on the outcomes families live
          &mdash; enough to guide us toward a better benefits system.
        </p>
      </div>
    </Slide>
  );
}
