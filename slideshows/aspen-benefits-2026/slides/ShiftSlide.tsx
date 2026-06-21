import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

const deltas: { task: string; before: string; after: string }[] = [
  { task: "Encode a new benefit rule", before: "months", after: "days" },
  { task: "Analyze who wins and loses", before: "days", after: "minutes" },
  { task: "Build a tool to show it", before: "a team", after: "an afternoon" },
];

export default function ShiftSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>We can just do things now</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-1 items-stretch">
        <div className="content-card p-6">
          <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
            Until recently
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Translating a statute into code, modeling a reform, building a
            calculator &mdash; each was weeks or months of specialist work. So
            you analyzed a slice and moved on.
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
            Agents now do the per-unit work &mdash; read the statute, run the
            scenario, write the code &mdash; at a cost that keeps falling. So
            you ship the whole thing, not a slice.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-7">
        {deltas.map((d, i) => (
          <div key={i} className="content-card p-5">
            <p className="text-sm text-gray-500 leading-snug mb-2">{d.task}</p>
            <p className="text-2xl font-bold text-pe-dark">
              {d.before}
              <span className="text-pe-teal mx-2">&rarr;</span>
              {d.after}
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-6">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          The marginal cost of doing the analysis completely is approaching
          zero. Policy analysis is becoming abundant.
        </p>
      </div>
    </Slide>
  );
}
