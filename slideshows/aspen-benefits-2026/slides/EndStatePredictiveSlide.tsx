import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { IconChartDots3 } from "@tabler/icons-react";

export default function EndStatePredictiveSlide() {
  return (
    <Slide>
      <SlideHeader>
        <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
          The end state &middot; prediction
        </div>
        <SlideTitle>A different world, made real</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[0.85fr_1.15fr] gap-6 mt-1 items-stretch">
        <div className="content-card p-6 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <IconChartDots3 size={24} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            <span className="slide-tag" style={{ fontSize: "0.62rem" }}>
              Thesis &middot; the first step
            </span>
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            Forecast more than the budget line &mdash; the experience effects of a
            policy, read from government data. Wait times. Take-up. What a change
            actually does to a family&apos;s day.
          </p>
        </div>

        <div
          className="rounded-2xl p-7 text-white flex flex-col justify-center"
          style={{
            background:
              "linear-gradient(180deg, var(--pe-dark) 0%, var(--pe-darker) 100%)",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-3">
            The bigger one
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            Can AI paint a picture &mdash; for a policymaker, an individual,
            anyone in between &mdash; of what a different world would feel like?
            Immersive, not just numbers. Predictive storytelling: showing how a
            family would live a policy, so we can all see the choices we have as a
            society &mdash; and where they lead.
          </p>
        </div>
      </div>

      <div className="accent-block mt-7">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          It would take far more than us. That&apos;s the point &mdash; we build
          it together.
        </p>
      </div>
    </Slide>
  );
}
