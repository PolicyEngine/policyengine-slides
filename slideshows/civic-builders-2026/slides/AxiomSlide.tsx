import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

export default function AxiomSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The same AI can encode the law itself</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[1.05fr_0.95fr] gap-8 mt-4 items-stretch">
        <div className="flex flex-col gap-4">
          <div className="content-card p-6">
            <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
              The bottleneck
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every rule PolicyEngine runs &mdash; the tax code, SNAP, the EITC
              &mdash; is hand-translated from statute into code. Slow,
              expensive, and the reason most of the law still isn&apos;t
              computable.
            </p>
          </div>

          <div className="content-card p-6">
            <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
              The shift
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Now AI can read the statute and encode it directly &mdash; every
              section, every cross-reference, every definition, citation by
              citation.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl p-8 text-white flex flex-col gap-5"
          style={{
            background:
              "linear-gradient(180deg, var(--pe-dark) 0%, var(--pe-darker) 100%)",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal">
            A second mission
          </p>

          <h2 className="text-4xl font-bold text-white leading-none">Axiom</h2>

          <p className="text-xl leading-relaxed font-light text-white">
            Encoding the world&apos;s rules as open, machine-readable code.
          </p>

          <p className="text-lg leading-relaxed text-white/85">
            AI does the encoding. Deterministic software does the computation.
            PolicyEngine helps people understand the rules; Axiom makes the
            rules themselves computable.
          </p>

          <div className="mt-auto pt-4 border-t border-white/15">
            <p className="text-sm font-mono text-white/60">
              axiom-foundation.org
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
