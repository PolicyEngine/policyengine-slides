import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { IconDatabase, IconRobot, IconCircleCheck } from "@tabler/icons-react";

const band: { icon: typeof IconDatabase; label: string; sub: string }[] = [
  { icon: IconDatabase, label: "Grounded corpora", sub: "rules, data, evidence" },
  { icon: IconRobot, label: "The agent", sub: "reasons, then calls" },
  { icon: IconCircleCheck, label: "A true answer", sub: "accurate and cited" },
];

export default function RoomSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          Three sources of truth. Most of them are in this room.
        </SlideTitle>
      </SlideHeader>

      <div className="flex items-center justify-center gap-4 mt-4">
        {band.map((b, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="content-card px-7 py-6 text-center min-w-[210px]">
              <div
                className="icon-circle mx-auto mb-3"
                style={{ width: "52px", height: "52px", borderRadius: "15px" }}
              >
                <b.icon size={28} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
              </div>
              <p className="text-lg font-bold text-pe-dark">{b.label}</p>
              <p className="text-sm text-gray-500 mt-1">{b.sub}</p>
            </div>
            {i < band.length - 1 && (
              <span className="text-3xl text-pe-teal font-bold">&rarr;</span>
            )}
          </div>
        ))}
      </div>

      <p className="text-center text-base text-gray-500 mt-5">
        An agent is only as grounded as the corpora it can call.
      </p>

      <div className="accent-block mt-8 max-w-4xl mx-auto">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          PolicyEngine encodes the rules. But the knowledge that makes AI
          truthful about the safety net &mdash; who&apos;s eligible, what
          take-up looks like, where families fall through &mdash; mostly lives
          with the people in this room.
        </p>
      </div>
    </Slide>
  );
}
