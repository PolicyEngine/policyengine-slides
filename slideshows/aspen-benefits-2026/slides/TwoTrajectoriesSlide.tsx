import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { IconScale, IconChartDots3 } from "@tabler/icons-react";

export default function TwoTrajectoriesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Two trajectories, two public goods</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-2">
        <div className="content-card p-7">
          <div className="flex items-center gap-3 mb-2">
            <IconScale size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            <h3 className="text-2xl font-bold text-pe-dark">Axiom</h3>
            <span className="slide-tag" style={{ fontSize: "0.62rem" }}>
              The law
            </span>
          </div>
          <p className="text-base text-gray-600 leading-relaxed">
            Agents encode the law itself &mdash; open, executable, exact &mdash;
            so any developer, agency, or agent can know what a policy actually
            is.
          </p>
        </div>

        <div className="content-card p-7">
          <div className="flex items-center gap-3 mb-2">
            <IconChartDots3 size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            <h3 className="text-2xl font-bold text-pe-dark">Thesis</h3>
            <span className="slide-tag" style={{ fontSize: "0.62rem" }}>
              The outcomes
            </span>
          </div>
          <p className="text-base text-gray-600 leading-relaxed">
            Agents forecast what a policy would do &mdash; every outcome, with
            honest uncertainty, even under policies that don&apos;t exist yet.
          </p>
        </div>
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Imagine a million experts working out every corner of what a policy is
          and what it does. We&apos;re not there yet &mdash; but the agents are
          only as good as what we ground them in.
        </p>
      </div>
    </Slide>
  );
}
