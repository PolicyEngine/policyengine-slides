import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import {
  IconBuildingBank,
  IconRouteAltLeft,
  IconChartHistogram,
  IconHeartHandshake,
  IconUsers,
  type Icon,
} from "@tabler/icons-react";

const sources: { icon: Icon; who: string; corpus: string }[] = [
  {
    icon: IconBuildingBank,
    who: "State & local agencies",
    corpus: "Administrative data, real determinations, the actual notices and rules.",
  },
  {
    icon: IconRouteAltLeft,
    who: "Navigators & service design",
    corpus: "Frontline cases — where enrollment breaks and benefit cliffs show up.",
  },
  {
    icon: IconChartHistogram,
    who: "Researchers",
    corpus: "Take-up rates, evaluations, what actually moves outcomes.",
  },
  {
    icon: IconHeartHandshake,
    who: "Funders",
    corpus: "Outcomes data from everything they fund.",
  },
  {
    icon: IconUsers,
    who: "Community",
    corpus: "Lived experience of benefit cliffs, in people's own words.",
  },
];

export default function WhatTheRoomProducesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          What is this room producing that could ground an agent?
        </SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-5 gap-4 mt-2">
        {sources.map((s, i) => (
          <div key={i} className="content-card p-5 flex flex-col">
            <div
              className="icon-circle mb-3"
              style={{ width: "44px", height: "44px", borderRadius: "13px" }}
            >
              <s.icon size={24} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            </div>
            <h3 className="text-base font-bold text-pe-dark leading-tight mb-2">
              {s.who}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{s.corpus}</p>
          </div>
        ))}
      </div>

      <div
        className="content-card mt-8 p-6 text-center"
        style={{
          background: "linear-gradient(135deg, var(--pe-light) 0%, white 100%)",
        }}
      >
        <p className="text-xl font-semibold text-pe-dark leading-relaxed">
          Each is a candidate ground truth. The opportunity: make your corner of
          it open, structured, and callable &mdash; so the AI people already use
          tells them the truth.
        </p>
      </div>
    </Slide>
  );
}
