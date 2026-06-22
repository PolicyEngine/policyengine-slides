import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

// METR, "Measuring AI Ability to Complete Long Tasks" — the length of task
// (by human time) a frontier model finishes with 50% reliability, doubling
// ~every 7 months (≈4 months in 2024–25). Points below are METR's published
// anchors; the newest models are not yet plotted.
const POINTS = [
  { model: "GPT-2", horizon: "2 sec", x: 145, y: 266, labelRight: false },
  { model: "GPT-4", horizon: "~5 min", x: 515, y: 161, labelRight: false },
  { model: "Claude 3.7 Sonnet", horizon: "~50 min", x: 705, y: 113, labelRight: true, ly: 128 },
  { model: "o3", horizon: "~2 hr", x: 745, y: 95, labelRight: true, ly: 95 },
  { model: "Opus 4.6", horizon: "~12 hr", x: 790, y: 57, labelRight: true, ly: 58 },
];

const GRID = [
  { label: "1 sec", y: 280 },
  { label: "1 min", y: 195 },
  { label: "1 hour", y: 109 },
  { label: "1 day", y: 43 },
];

const YEARS = [
  { label: "2019", x: 95 },
  { label: "2021", x: 295 },
  { label: "2023", x: 495 },
  { label: "2025", x: 695 },
  { label: "2027", x: 895 },
];

export default function MetrSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI can do exponentially longer work</SlideTitle>
      </SlideHeader>

      <svg viewBox="0 0 1080 330" className="w-full" style={{ maxHeight: "285px" }}>
        {/* gridlines + y labels */}
        {GRID.map((g) => (
          <g key={g.label}>
            <line x1={95} y1={g.y} x2={895} y2={g.y} stroke="var(--border-light)" strokeWidth={1} />
            <text x={85} y={g.y + 4} textAnchor="end" fontSize={15} fill="var(--text-secondary)">
              {g.label}
            </text>
          </g>
        ))}
        {/* x axis labels */}
        {YEARS.map((yr) => (
          <text key={yr.label} x={yr.x} y={300} textAnchor="middle" fontSize={15} fill="var(--text-secondary)">
            {yr.label}
          </text>
        ))}

        {/* projection (dashed) */}
        <line x1={790} y1={57} x2={895} y2={24} stroke="var(--pe-amber)" strokeWidth={2.5} strokeDasharray="7 6" opacity={0.85} />
        <text x={900} y={22} fontSize={14} fill="var(--pe-amber-dark)" fontStyle="italic">
          if the trend holds
        </text>

        {/* trend line through real points */}
        <polyline
          points={POINTS.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="var(--pe-teal)"
          strokeWidth={3}
        />

        {/* points + labels */}
        {POINTS.map((p) => (
          <g key={p.model}>
            {p.labelRight && (
              <line x1={p.x} y1={p.y} x2={898} y2={p.ly! - 4} stroke="var(--border-medium)" strokeWidth={1} />
            )}
            <circle cx={p.x} cy={p.y} r={6} fill="var(--pe-teal)" stroke="white" strokeWidth={2} />
            {p.labelRight ? (
              <text x={904} y={p.ly} fontSize={15} fill="var(--text-primary)">
                <tspan fontWeight={700}>{p.model}</tspan>
                <tspan fill="var(--text-secondary)"> · {p.horizon}</tspan>
              </text>
            ) : (
              <text x={p.x} y={p.y - 13} textAnchor="middle" fontSize={15} fill="var(--text-primary)">
                <tspan fontWeight={700}>{p.model}</tspan>
                <tspan fill="var(--text-secondary)"> · {p.horizon}</tspan>
              </text>
            )}
          </g>
        ))}

        {/* doubling annotation */}
        <text x={150} y={92} fontSize={17} fill="var(--pe-dark)" fontWeight={600}>
          Doubling ~every 7 months
        </text>
        <text x={150} y={114} fontSize={15} fill="var(--text-secondary)">
          (about 4 months in 2024&ndash;25)
        </text>

        {/* attribution */}
        <text x={95} y={322} fontSize={12.5} fill="var(--text-secondary)" fontStyle="italic">
          Source: METR &mdash; task length a model completes with 50% reliability, 2019&ndash;2026. Newest models not yet plotted.
        </text>
      </svg>

      <div className="accent-block mt-4">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Design for the slope, not the dot. The question isn&apos;t what AI
          means for policy analysis today &mdash; it&apos;s what it means in 6
          and 12 months, as this line keeps climbing.
        </p>
      </div>
    </Slide>
  );
}
