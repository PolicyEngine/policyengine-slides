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
    lines: ['One household file with one', 'set of weights, every source', 'mapped to the same concepts.'],
  },
  {
    n: '2',
    title: 'Fill in what surveys miss',
    lines: ['Wealth, tax detail, tips and', 'employer insurance imputed', 'from the surveys that have them.'],
  },
  {
    n: '3',
    title: 'Run the rules engine',
    lines: ['Taxes and benefits computed', 'for every household; take-up', 'seeded at documented rates.'],
  },
  {
    n: '4',
    title: 'Reweight to match the facts',
    lines: ['Weights adjusted until the', 'totals hit the official statistics,', 'each target published with its error.'],
  },
];

const STEP_W = 236;
const STEP_H = 168;
const STEP_Y = 120;
const stepX = (i: number) => 300 + i * (STEP_W + 34);

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
        viewBox="0 0 1440 440"
        className="mt-4 w-full"
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
        <g>
          <rect x="20" y="70" width="230" height="110" rx="14" fill="#f0f7f7" stroke={teal} strokeWidth="2" />
          <text x="135" y="104" textAnchor="middle" fontSize="19" fontWeight="700" fill={dark}>Public surveys</text>
          <text x="135" y="132" textAnchor="middle" fontSize="14" fill="#4b5563">CPS ASEC · ACS · SCF</text>
          <text x="135" y="154" textAnchor="middle" fontSize="14" fill="#4b5563">SIPP · IRS public-use file</text>

          <rect x="20" y="230" width="230" height="110" rx="14" fill="#fff7ec" stroke={amber} strokeWidth="2" />
          <text x="135" y="264" textAnchor="middle" fontSize="19" fontWeight="700" fill={dark}>Official statistics</text>
          <text x="135" y="292" textAnchor="middle" fontSize="14" fill="#4b5563">agency tables and national</text>
          <text x="135" y="314" textAnchor="middle" fontSize="14" fill="#4b5563">accounts, catalogued in Chronicle</text>
        </g>

        {/* Inputs → step 1 */}
        <path d="M 250 125 C 275 125, 275 175, 300 175" fill="none" stroke={teal} strokeWidth="2.5" markerEnd="url(#arrow)" />
        <path d="M 250 285 C 275 285, 275 225, 300 225" fill="none" stroke={amber} strokeWidth="2.5" markerEnd="url(#arrow-amber)" />

        {/* Official statistics → step 4 as targets */}
        <path
          d={`M 135 340 L 135 405 L ${stepX(3) + STEP_W / 2} 405 L ${stepX(3) + STEP_W / 2} ${STEP_Y + STEP_H}`}
          fill="none"
          stroke={amber}
          strokeWidth="2.5"
          strokeDasharray="7 6"
          markerEnd="url(#arrow-amber)"
        />
        <text x={(135 + stepX(3) + STEP_W / 2) / 2} y="396" textAnchor="middle" fontSize="14" fontWeight="600" fill="#b45309">
          the same statistics become the calibration targets
        </text>

        {/* Steps */}
        {steps.map((s, i) => (
          <g key={s.n}>
            <rect x={stepX(i)} y={STEP_Y} width={STEP_W} height={STEP_H} rx="14" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5" />
            <rect x={stepX(i)} y={STEP_Y} width="5" height={STEP_H} rx="2" fill={teal} />
            <circle cx={stepX(i) + 30} cy={STEP_Y + 30} r="15" fill={teal} />
            <text x={stepX(i) + 30} y={STEP_Y + 35} textAnchor="middle" fontSize="15" fontWeight="700" fill="#ffffff">{s.n}</text>
            <text x={stepX(i) + 54} y={STEP_Y + 35} fontSize="18" fontWeight="700" fill={dark}>{s.title}</text>
            {s.lines.map((l, j) => (
              <text key={l} x={stepX(i) + 18} y={STEP_Y + 72 + j * 24} fontSize="14.5" fill="#374151">{l}</text>
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
        <path d={`M ${stepX(3) + STEP_W} ${STEP_Y + STEP_H / 2} L ${stepX(3) + STEP_W + 34} ${STEP_Y + STEP_H / 2}`} fill="none" stroke={teal} strokeWidth="2.5" markerEnd="url(#arrow)" />
        <g transform={`translate(${stepX(3) + STEP_W + 34}, 0)`}>
          <rect x="0" y={STEP_Y} width={1440 - (stepX(3) + STEP_W + 34) - 4} height={STEP_H} rx="14" fill={dark} />
          <text x={(1440 - (stepX(3) + STEP_W + 34) - 4) / 2} y={STEP_Y + 62} textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">A calibrated</text>
          <text x={(1440 - (stepX(3) + STEP_W + 34) - 4) / 2} y={STEP_Y + 86} textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">synthetic population</text>
          <text x={(1440 - (stepX(3) + STEP_W + 34) - 4) / 2} y={STEP_Y + 122} textAnchor="middle" fontSize="13.5" fill="#cfe3e0">graded in public on the</text>
          <text x={(1440 - (stepX(3) + STEP_W + 34) - 4) / 2} y={STEP_Y + 142} textAnchor="middle" fontSize="13.5" fill="#cfe3e0">calibration dashboard</text>
        </g>
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
