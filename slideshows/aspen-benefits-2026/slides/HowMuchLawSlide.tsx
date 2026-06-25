import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

export default function HowMuchLawSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>There&apos;s more law than any team can hand-encode</SlideTitle>
      </SlideHeader>

      <p className="text-lg text-gray-600 leading-relaxed mt-1 max-w-4xl">
        Federal law, 50 states, DC, thousands of localities &mdash; every
        program, every parameter, changing constantly.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-6 items-stretch">
        <div className="content-card p-6">
          <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
            How it&apos;s done today
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We &mdash; and the consultancies behind state eligibility systems
            &mdash; hand-pick the relevant pieces and translate them into code,
            one program at a time. Slow, and most of the law stays uncomputable.
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
            Agents don&apos;t get tired. So stop picking pieces &mdash; encode
            the whole law, start from the statute, and give every agent the
            grounding it needs to answer correctly.
          </p>
        </div>
      </div>

      <div className="accent-block mt-7">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Don&apos;t pick the pieces. Boil the ocean &mdash; encode all of it.
        </p>
      </div>
    </Slide>
  );
}
