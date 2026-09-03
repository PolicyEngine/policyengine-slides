import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const teal = 'var(--pe-teal)';
const dark = 'var(--pe-dark, #17343a)';
const amber = 'var(--pe-amber)';

// The operator algebra as documented on microcosm.institute ("How a release
// is built", intended pipeline) for PolicyEngine/microcosm.
const ops = [
  { name: 'Harmonize sources', l1: 'asec · acs · puf · scf · sipp', l2: 'shared columns · universes' },
  { name: 'Assemble multispine', l1: 'acs main spine · asec_puf', l2: 'mass allocated across spines' },
  { name: 'Clone operator', l1: 'puf tax-detail twins', l2: 'on the assembled frame' },
  { name: 'Imputation operators', l1: 'scf wealth · sipp tips · esi', l2: 'mass conservation' },
  { name: 'Derivations', l1: 'statute-defined concepts', l2: 'rules on the frame' },
  { name: 'Take-up seeds', l1: 'all programs', l2: 'draws at documented priors' },
  { name: 'Materialize once', l1: 'engine run once per input state', l2: 'telemetry-asserted' },
  { name: 'Target matrix', l1: 'sums of Chronicle facts', l2: 'static columns · districts' },
  { name: 'Calibration', l1: 'matrix descent', l2: 'weights only · capped rel. error' },
  { name: 'Selection / export', l1: 'sparse + dense arm', l2: 'h5 + manifests · hard gates' },
];

// phase bands: [label, first op index, last op index]
const phases: [string, number, number][] = [
  ['Observations', 0, 1],
  ['Enrichment', 2, 3],
  ['Rules', 4, 4],
  ['Seeds', 5, 5],
  ['Simulation', 6, 6],
  ['Weights', 7, 9],
];

const BOX_W = 250;
const BOX_H = 112;
const GAP = 30;
const X0 = 35;
const ROW_Y = [62, 262];
const PER_ROW = 5;
const pos = (i: number) => ({
  x: X0 + (i % PER_ROW) * (BOX_W + GAP),
  y: ROW_Y[Math.floor(i / PER_ROW)],
});

export default function MicrodataPipelineDetailSlide() {
  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>The full calibration pipeline</SlideTitle>
          <span className="font-mono text-lg text-pe-teal">
            microcosm.institute · how a release is built
          </span>
        </div>
      </SlideHeader>

      <p className="text-lg text-gray-800 leading-relaxed max-w-6xl">
        Ten operators on one weighted frame, in this order. Each hand-off is
        a gate that refuses a silently broken input instead of passing it on.
      </p>

      <svg
        viewBox="0 0 1440 400"
        className="mt-2 w-full"
        style={{ fontFamily: 'inherit' }}
        role="img"
        aria-label="The ten-operator Microcosm pipeline in two rows, grouped into six phases"
      >
        <defs>
          <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={teal} />
          </marker>
        </defs>

        {/* Phase bands */}
        {phases.map(([label, a, b]) => {
          const pa = pos(a);
          const pb = pos(b);
          const x1 = pa.x;
          const x2 = pb.x + BOX_W;
          const y = pa.y - 22;
          return (
            <g key={label}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke={teal} strokeWidth="3" strokeLinecap="round" />
              <text x={x1} y={y - 7} fontSize="12" fontWeight="700" fill={teal} style={{ letterSpacing: '0.12em' }}>
                {label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Boxes and arrows */}
        {ops.map((o, i) => {
          const { x, y } = pos(i);
          const isRowEnd = i % PER_ROW === PER_ROW - 1;
          const last = i === ops.length - 1;
          return (
            <g key={o.name}>
              <rect x={x} y={y} width={BOX_W} height={BOX_H} rx="12" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5" />
              <rect x={x} y={y} width="5" height={BOX_H} rx="2" fill={i >= 7 ? amber : teal} />
              <circle cx={x + 28} cy={y + 26} r="12" fill={i >= 7 ? amber : teal} />
              <text x={x + 28} y={y + 30} textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">{i + 1}</text>
              <text x={x + 48} y={y + 31} fontSize="15" fontWeight="700" fill={dark}>{o.name}</text>
              <text x={x + 16} y={y + 62} fontSize="12" fill="#374151" style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace' }}>{o.l1}</text>
              <text x={x + 16} y={y + 84} fontSize="12" fill="#6b7280" style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace' }}>{o.l2}</text>
              {!last && !isRowEnd && (
                <g>
                  <path d={`M ${x + BOX_W} ${y + BOX_H / 2} L ${x + BOX_W + GAP} ${y + BOX_H / 2}`} fill="none" stroke={teal} strokeWidth="2.5" markerEnd="url(#arrow2)" />
                  <text x={x + BOX_W + GAP / 2} y={y + BOX_H / 2 + 16} textAnchor="middle" fontSize="9" fill="#9ca3af" style={{ letterSpacing: '0.1em' }}>GATE</text>
                </g>
              )}
              {isRowEnd && !last && (
                <g>
                  <path
                    d={`M ${x + BOX_W / 2} ${y + BOX_H} L ${x + BOX_W / 2} ${y + BOX_H + 40} L ${X0 + BOX_W / 2} ${y + BOX_H + 40} L ${X0 + BOX_W / 2} ${ROW_Y[1] - 4}`}
                    fill="none"
                    stroke={teal}
                    strokeWidth="2.5"
                    markerEnd="url(#arrow2)"
                  />
                  <text x={(x + BOX_W / 2 + X0 + BOX_W / 2) / 2} y={y + BOX_H + 34} textAnchor="middle" fontSize="9" fill="#9ca3af" style={{ letterSpacing: '0.1em' }}>GATE</text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      <p className="mt-1 text-sm text-gray-600 leading-snug">
        Teal operators build and enrich the population; amber operators set
        the weights. The order is load-bearing: observations, then
        enrichment, then rules, then seeds, then one simulation run, then
        weights. Every output is scored by the evaluation harness before a
        release ships.
      </p>
    </Slide>
  );
}
