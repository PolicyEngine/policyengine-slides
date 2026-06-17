import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { IconScale, IconChartDots3, type Icon } from "@tabler/icons-react";

const kinds: { icon: Icon; label: string; line: string }[] = [
  {
    icon: IconScale,
    label: "Determinism",
    line: "Compute exactly what the rules say.",
  },
  {
    icon: IconChartDots3,
    label: "Prediction",
    line: "Forecast what actually happens.",
  },
];

export default function RealizationSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What if none of it had to be built by hand?</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-1 items-stretch">
        <div className="content-card p-6">
          <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
            Until now
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Everything you just saw was built by hand &mdash; the rules
            translated from statute, the analysis assembled run by run. Years of
            work for a sliver of what&apos;s possible.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 text-white flex flex-col justify-center"
          style={{
            background:
              "linear-gradient(180deg, var(--pe-dark) 0%, var(--pe-darker) 100%)",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-3">
            The shift
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            Agents can now do the per-unit work &mdash; reading a statute,
            running a forecast &mdash; at a cost that keeps falling. So you stop
            shipping a slice and ship the whole thing.
          </p>
        </div>
      </div>

      <p className="slide-tag mt-7 mb-3" style={{ fontSize: "0.7rem" }}>
        Policy analysis needs two things
      </p>
      <div className="grid grid-cols-2 gap-5">
        {kinds.map((k, i) => (
          <div key={i} className="content-card p-5 flex items-center gap-4">
            <div
              className="icon-circle shrink-0"
              style={{ width: "44px", height: "44px", borderRadius: "13px" }}
            >
              <k.icon
                size={24}
                stroke={1.5}
                style={{ color: "var(--pe-teal)" }}
              />
            </div>
            <p className="text-base text-pe-dark leading-snug">
              <span className="font-bold">{k.label}</span>{" "}
              <span className="text-gray-600">&mdash; {k.line}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-6">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Both done by hand, partial and one-off. Agents scale each into a
          massive digital public good.
        </p>
      </div>
    </Slide>
  );
}
