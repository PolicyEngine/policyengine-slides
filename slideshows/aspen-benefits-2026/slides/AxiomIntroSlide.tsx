import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

const requirements = [
  {
    title: "Accuracy at every step",
    detail:
      "Not just the final answer — every parameter, formula, citation, and test produced along the way.",
  },
  {
    title: "Deterministic quality gates",
    detail:
      "Tests, type checks, and cross-validation against other ground truths — TAXSIM, agency tables — that the agents must pass.",
  },
  {
    title: "Human review at the right boundary",
    detail:
      "Not every prompt — the assumptions and edge cases worth a second pair of eyes.",
  },
];

export default function AxiomIntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Axiom: start from the statute itself</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[1fr_1fr] gap-8 items-start">
        <div className="space-y-3">
          {requirements.map((r, i) => (
            <div
              key={r.title}
              className="content-card p-4 grid grid-cols-[40px_1fr] gap-3 items-start"
            >
              <div className="font-mono text-2xl font-bold text-pe-teal leading-none pt-1">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-pe-dark mb-1">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-700 leading-snug">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-7 text-white flex flex-col gap-5 h-full"
          style={{
            background: "linear-gradient(180deg, #1d4044 0%, #17343a 100%)",
          }}
        >
          <p className="text-xl leading-relaxed font-light text-white">
            Encode the law from{" "}
            <span className="font-medium text-pe-teal">
              the statute itself
            </span>{" "}
            &mdash; not a stylized version with just enough detail to run a
            microsimulation.
          </p>

          <p className="text-base leading-relaxed text-white/90">
            Every section, cross-reference, and definition, citation by citation
            &mdash; a foundation any downstream system, or agent, can build on.
          </p>

          <div className="mt-auto pt-4 border-t border-white/15">
            <p className="text-sm text-white/80 leading-relaxed">
              Ariel Kennan &mdash; here today, incoming president of the Axiom
              Foundation &mdash; goes deeper in a later session.
            </p>
            <p className="text-sm font-mono text-white/55 mt-2">
              axiom-foundation.org
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
