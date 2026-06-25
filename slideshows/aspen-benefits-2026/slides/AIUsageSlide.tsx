import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import {
  IconWallet,
  IconHeartbeat,
  IconChecklist,
  IconBuildingBank,
  type Icon,
} from "@tabler/icons-react";

// Reported ChatGPT weekly active users (OpenAI announcements / press), 2022–2026:
// ~100M late 2023, 200M Aug 2024, 400M Feb 2025, 700M Jul 2025, ~900M Jun 2026.
const PTS = [
  { x: 90, y: 255 },
  { x: 312, y: 232 },
  { x: 478, y: 209 },
  { x: 589, y: 163 },
  { x: 678, y: 94 },
  { x: 889, y: 48 },
];
const GRID = [
  { label: "0", y: 255 },
  { label: "250M", y: 197 },
  { label: "500M", y: 140 },
  { label: "750M", y: 82 },
  { label: "1B", y: 25 },
];
const YEARS = [
  { label: "2023", x: 123 },
  { label: "2024", x: 345 },
  { label: "2025", x: 567 },
  { label: "2026", x: 789 },
];

const uses: { icon: Icon; label: string }[] = [
  { icon: IconWallet, label: "Their own finances" },
  { icon: IconHeartbeat, label: "Their health" },
  { icon: IconChecklist, label: "What they're eligible for" },
  { icon: IconBuildingBank, label: "What a policy would do" },
];

export default function AIUsageSlide() {
  const line = PTS.map((p) => `${p.x},${p.y}`).join(" ");
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>And usage is exploding</SlideTitle>
      </SlideHeader>

      <svg viewBox="0 0 1080 300" className="w-full" style={{ maxHeight: "242px" }}>
        {GRID.map((g) => (
          <g key={g.label}>
            <line x1={90} y1={g.y} x2={900} y2={g.y} stroke="var(--border-light)" strokeWidth={1} />
            <text x={80} y={g.y + 4} textAnchor="end" fontSize={15} fill="var(--text-secondary)">
              {g.label}
            </text>
          </g>
        ))}
        {YEARS.map((yr) => (
          <text key={yr.label} x={yr.x} y={282} textAnchor="middle" fontSize={15} fill="var(--text-secondary)">
            {yr.label}
          </text>
        ))}

        <path d={`M${line} L889,255 L90,255 Z`} fill="var(--pe-teal)" opacity={0.1} />
        <polyline points={line} fill="none" stroke="var(--pe-teal)" strokeWidth={3} />
        {PTS.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={5} fill="var(--pe-teal)" stroke="white" strokeWidth={2} />
        ))}

        <text x={882} y={42} textAnchor="end" fontSize={16} fontWeight={700} fill="var(--pe-dark)">
          ~900M weekly
        </text>
        <text x={120} y={90} fontSize={15} fill="var(--text-secondary)">
          Fastest consumer technology to ~1B users in history
        </text>
        <text x={90} y={300} fontSize={12.5} fill="var(--text-secondary)" fontStyle="italic">
          Reported ChatGPT weekly active users (OpenAI), 2022&ndash;2026
        </text>
      </svg>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {uses.map((u, i) => (
          <div key={i} className="content-card p-3 flex items-center gap-3">
            <u.icon size={22} stroke={1.5} style={{ color: "var(--pe-teal)" }} className="shrink-0" />
            <span className="text-sm font-semibold text-pe-dark leading-snug">{u.label}</span>
          </div>
        ))}
      </div>

      <div className="accent-block mt-5">
        <p className="text-lg font-semibold text-gray-700 leading-relaxed">
          Different people, often &mdash; but increasingly the questions are about
          the benefits they get, and the policies that shape them.
        </p>
      </div>
    </Slide>
  );
}
