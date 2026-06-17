import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import {
  IconScale,
  IconUsers,
  IconChartDots3,
  type Icon,
} from "@tabler/icons-react";

const verbs: { icon: Icon; verb: string; corpus: string }[] = [
  { icon: IconScale, verb: "Encode", corpus: "the world's rules" },
  { icon: IconUsers, verb: "Integrate", corpus: "the world's data" },
  { icon: IconChartDots3, verb: "Forecast", corpus: "every outcome" },
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
            Every rule you just saw was hand-translated from law into code. Six
            years of work for the US and the UK &mdash; a sliver of what&apos;s
            public. The corpus was always complete; computing it never was.
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
            integrating a dataset, building a forecast &mdash; at a cost that
            keeps falling. So you stop shipping a slice and ship the whole
            thing.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {verbs.map((v, i) => (
          <div key={i} className="content-card p-5 flex items-center gap-4">
            <div
              className="icon-circle shrink-0"
              style={{ width: "44px", height: "44px", borderRadius: "13px" }}
            >
              <v.icon
                size={24}
                stroke={1.5}
                style={{ color: "var(--pe-teal)" }}
              />
            </div>
            <p className="text-base text-pe-dark leading-snug">
              <span className="font-bold">{v.verb}</span>{" "}
              <span className="text-gray-600">{v.corpus}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-6">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Massively scalable digital public goods &mdash; open, runnable, and
          built by agents around the clock.
        </p>
      </div>
    </Slide>
  );
}
