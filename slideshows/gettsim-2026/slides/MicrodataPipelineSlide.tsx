import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const teal = 'var(--pe-teal)';
const dark = 'var(--pe-dark, #17343a)';
const amber = 'var(--pe-amber)';

const steps = [
  {
    n: '1',
    title: 'Combine the surveys',
    lines: ['One household file, one', 'set of weights, every', 'source on shared concepts.'],
  },
  {
    n: '2',
    title: 'Fill in the gaps',
    lines: ['Wealth, tax detail, tips', 'and employer insurance,', 'imputed across surveys.'],
  },
  {
    n: '3',
    title: 'Run the rules engine',
    lines: ['Taxes and benefits for', 'every household; take-up', 'seeded at documented rates.'],
  },
  {
    n: '4',
    title: 'Reweight to targets',
    lines: ['Weights adjusted until', 'totals hit the statistics;', "each target's error published."],
  },
];

// Geometry (SVG units, viewBox 1440 wide)
const IN_X = 20;
const IN_W = 200;
const STEP_W = 219;
const GAP = 26;
const STEP_Y = 95;
const STEP_H = 160;
const stepX = (i: number) => 260 + i * (STEP_W + GAP);
const OUT_X = stepX(3) + STEP_W + GAP;
const OUT_W = 1440 - OUT_X - 8;
const LOOP_Y = 372;

export default function MicrodataPipelineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>How Microcosm builds the microdata</SlideTitle>
          <span className="font-mono text-lg text-pe-teal">
            github.com/PolicyEngine/microcosm
          </span>
        </div>
      </SlideHeader>

      <p className="text-xl text-gray-800 leading-relaxed max-w-6xl">
        Public surveys go in, official statistics set the targets, and a
        synthetic population comes out whose totals match what the agencies
        publish. A check between every step refuses broken inputs.
      </p>

      <svg
        viewBox="0 0 1440 395"
        className="mt-3 w-full"
        style={{ fontFamily: 'inherit' }}
        role="img"
        aria-label="Microcosm pipeline: surveys and official statistics in, four steps, calibrated synthetic population out"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={teal} />
          </marker>
          <marker id="arrow-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={amber} />
          </marker>
        </defs>

        {/* Inputs */}
        <rect x={IN_X} y="55" width={IN_W} height="105" rx="14" fill="#f0f7f7" stroke={teal} strokeWidth="2" />
        <text x={IN_X + IN_W / 2} y="88" textAnchor="middle" fontSize="18" fontWeight="700" fill={dark}>Public surveys</text>
        <text x={IN_X + IN_W / 2} y="114" textAnchor="middle" fontSize="13.5" fill="#4b5563">CPS ASEC · ACS · SCF</text>
        <text x={IN_X + IN_W / 2} y="136" textAnchor="middle" fontSize="13.5" fill="#4b5563">SIPP · IRS public-use file</text>

        <rect x={IN_X} y="200" width={IN_W} height="105" rx="14" fill="#fff7ec" stroke={amber} strokeWidth="2" />
        <text x={IN_X + IN_W / 2} y="233" textAnchor="middle" fontSize="18" fontWeight="700" fill={dark}>Official statistics</text>
        <text x={IN_X + IN_W / 2} y="259" textAnchor="middle" fontSize="13.5" fill="#4b5563">agency tables and national</text>
        <text x={IN_X + IN_W / 2} y="281" textAnchor="middle" fontSize="13.5" fill="#4b5563">accounts, held in Chronicle</text>

        {/* Inputs → step 1 */}
        <path d={`M ${IN_X + IN_W} 107 C 240 107, 240 150, ${stepX(0)} 150`} fill="none" stroke={teal} strokeWidth="2.5" markerEnd="url(#arrow)" />
        <path d={`M ${IN_X + IN_W} 252 C 240 252, 240 200, ${stepX(0)} 200`} fill="none" stroke={amber} strokeWidth="2.5" markerEnd="url(#arrow-amber)" />

        {/* Official statistics → step 4 as calibration targets */}
        <path
          d={`M ${IN_X + IN_W / 2} 305 L ${IN_X + IN_W / 2} ${LOOP_Y} L ${stepX(3) + STEP_W / 2} ${LOOP_Y} L ${stepX(3) + STEP_W / 2} ${STEP_Y + STEP_H}`}
          fill="none"
          stroke={amber}
          strokeWidth="2.5"
          strokeDasharray="7 6"
          markerEnd="url(#arrow-amber)"
        />
        <text x={(IN_X + IN_W / 2 + stepX(3) + STEP_W / 2) / 2} y={LOOP_Y - 9} textAnchor="middle" fontSize="14" fontWeight="600" fill="#b45309">
          the same statistics become the calibration targets
        </text>

        {/* Steps */}
        {steps.map((s, i) => (
          <g key={s.n}>
            <rect x={stepX(i)} y={STEP_Y} width={STEP_W} height={STEP_H} rx="14" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5" />
            <rect x={stepX(i)} y={STEP_Y} width="5" height={STEP_H} rx="2" fill={teal} />
            <circle cx={stepX(i) + 30} cy={STEP_Y + 30} r="14" fill={teal} />
            <text x={stepX(i) + 30} y={STEP_Y + 35} textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">{s.n}</text>
            <text x={stepX(i) + 52} y={STEP_Y + 35} fontSize="15.5" fontWeight="700" fill={dark}>{s.title}</text>
            {s.lines.map((l, j) => (
              <text key={l} x={stepX(i) + 18} y={STEP_Y + 70 + j * 23} fontSize="13.5" fill="#374151">{l}</text>
            ))}
            {i < steps.length - 1 && (
              <path
                d={`M ${stepX(i) + STEP_W} ${STEP_Y + STEP_H / 2} L ${stepX(i + 1)} ${STEP_Y + STEP_H / 2}`}
                fill="none"
                stroke={teal}
                strokeWidth="2.5"
                markerEnd="url(#arrow)"
              />
            )}
          </g>
        ))}

        {/* Output */}
        <path d={`M ${stepX(3) + STEP_W} ${STEP_Y + STEP_H / 2} L ${OUT_X} ${STEP_Y + STEP_H / 2}`} fill="none" stroke={teal} strokeWidth="2.5" markerEnd="url(#arrow)" />
        <rect x={OUT_X} y={STEP_Y} width={OUT_W} height={STEP_H} rx="14" fill={dark} />
        <text x={OUT_X + OUT_W / 2} y={STEP_Y + 58} textAnchor="middle" fontSize="16" fontWeight="700" fill="#ffffff">A calibrated synthetic</text>
        <text x={OUT_X + OUT_W / 2} y={STEP_Y + 80} textAnchor="middle" fontSize="16" fontWeight="700" fill="#ffffff">population</text>
        <text x={OUT_X + OUT_W / 2} y={STEP_Y + 114} textAnchor="middle" fontSize="12.5" fill="#cfe3e0">graded in public on the</text>
        <text x={OUT_X + OUT_W / 2} y={STEP_Y + 133} textAnchor="middle" fontSize="12.5" fill="#cfe3e0">calibration dashboard</text>
      </svg>

      <p className="mt-2 text-base text-gray-600 leading-snug">
        Code at <span className="font-mono">github.com/PolicyEngine/microcosm</span>;
        the source catalogue at <span className="font-mono">github.com/PolicyEngine/chronicle</span>;
        releases on <span className="font-mono">huggingface.co/policyengine</span>.
        Belgium runs this stack today; Germany would run the same one.
      </p>
    </Slide>
  );
}
