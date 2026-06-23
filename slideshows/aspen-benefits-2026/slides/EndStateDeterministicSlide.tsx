import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { IconScale, IconBooks } from "@tabler/icons-react";

export default function EndStateDeterministicSlide() {
  return (
    <Slide>
      <SlideHeader>
        <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
          The end state &middot; determinism
        </div>
        <SlideTitle>Every policy, computable</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-1">
        <div className="content-card p-7">
          <div className="flex items-center gap-3 mb-3">
            <IconScale size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            <h3 className="text-xl font-bold text-pe-dark">The law, all of it</h3>
            <span className="slide-tag" style={{ fontSize: "0.62rem" }}>
              Axiom
            </span>
          </div>
          <p className="text-base text-gray-600 leading-relaxed">
            Axiom&apos;s aim: encode every policy &mdash; a computable layer for
            the whole tax-and-benefit system, at every level of government. Agents
            capture the law completely, and exactly.
          </p>
        </div>

        <div className="content-card p-7">
          <div className="flex items-center gap-3 mb-3">
            <IconBooks size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            <h3 className="text-xl font-bold text-pe-dark">
              And everything around it
            </h3>
            <span className="slide-tag" style={{ fontSize: "0.62rem" }}>
              You
            </span>
          </div>
          <p className="text-base text-gray-600 leading-relaxed">
            The law is only part of getting people all the help they can. So much
            of what matters lives beyond it &mdash; eligibility know-how, where
            families fall through, what actually works &mdash; and many of you
            build and curate exactly that. Agents will want it: high-quality and
            structured.
          </p>
        </div>
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          A computable layer for all of policy &mdash; and all the context around
          it, ready for any agent to use.
        </p>
      </div>
    </Slide>
  );
}
