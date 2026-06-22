import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import {
  IconBuildingBank,
  IconArrowsSplit2,
  IconRobot,
  type Icon,
} from "@tabler/icons-react";

const cards: { icon: Icon; tag: string; body: string }[] = [
  {
    icon: IconBuildingBank,
    tag: "The open-source CBO",
    body: "Five years building open software for tax-and-benefit policy. We work the way the Congressional Budget Office does when it scores these programs — except ours is open, so anyone can do CBO-grade analysis.",
  },
  {
    icon: IconArrowsSplit2,
    tag: "We built both sides",
    body: "We started from the prediction question. To answer it we had to build the deterministic side too — the exact current-law calculations of who's eligible and how much they get. The kind of thing PolicyBench just showed models get wrong.",
  },
  {
    icon: IconRobot,
    tag: "The public reaches us through agents",
    body: "More and more, people reach us through agents — Claude calling PolicyEngine under the hood to answer a question. So we built for that, and for agents that do the analysis on their own.",
  },
];

export default function OpenSourceCboSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Where we come at this from</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-2">
        {cards.map((c, i) => (
          <div key={i} className="content-card p-6 flex flex-col">
            <div
              className="icon-circle mb-4"
              style={{ width: "48px", height: "48px", borderRadius: "14px" }}
            >
              <c.icon size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            </div>
            <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
              {c.tag}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Build for a broad audience, and you build for agents.
        </p>
      </div>
    </Slide>
  );
}
