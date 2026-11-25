// Static figures for the three walkthrough steps this deck draws itself (the encoder's checks, the rule graph and the
// potential uses of the same rules), adapted from axiom.org's drawings of the same steps. Every word comes from
// text.walkthrough.figures. Each figure fills the walkthrough card and scales with it, so its type keeps its place.
import type { ReactNode } from 'react';
import { walkthrough } from '../text';

export type FigureId = keyof typeof walkthrough.figures.byId;

/** The drawing's size in its own units, in the walkthrough card's shape (937 to 435, width to height). */
const W = 1300;
const H = 604;

const LINE = { stroke: 'var(--pe-amber-dark)' };
const VALUE = { fill: 'var(--pe-teal-dark)' };

type Box = { x: number; y: number; w: number; h: number };

function Defs() {
  return (
    <defs>
      <filter id="wf-shadow" x="-10%" y="-20%" width="120%" height="150%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.1" />
      </filter>
      <marker id="wf-arrow" viewBox="0 0 8 8" refX="7.2" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
        <path d="M0.5 0.8 L7.2 4 L0.5 7.2 z" style={{ fill: 'var(--pe-amber-dark)' }} />
      </marker>
    </defs>
  );
}

function Card({ x, y, w, h, dashed, children }: Box & { dashed?: boolean; children?: ReactNode }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        className={dashed ? 'fill-white/60 stroke-gray-400' : 'fill-white stroke-gray-200'}
        strokeDasharray={dashed ? '7 6' : undefined}
        filter={dashed ? undefined : 'url(#wf-shadow)'}
      />
      {children}
    </g>
  );
}

function Kicker({ x, y, children, anchor }: { x: number; y: number; children: string; anchor?: 'start' | 'end' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="fill-gray-500 font-mono" fontSize={12.5} letterSpacing="0.14em">
      {children.toUpperCase()}
    </text>
  );
}

function Lines({
  x,
  y,
  lines,
  size,
  gap,
  className,
  anchor,
}: {
  x: number;
  y: number;
  lines: readonly string[];
  size: number;
  gap?: number;
  className: string;
  anchor?: 'start' | 'middle' | 'end';
}) {
  return (
    <text x={x} y={y} fontSize={size} textAnchor={anchor} className={className}>
      {lines.map((line, i) => (
        <tspan key={line} x={x} dy={i === 0 ? 0 : (gap ?? size * 1.32)}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function Edge({ d, arrow = true }: { d: string; arrow?: boolean }) {
  return <path d={d} fill="none" style={LINE} strokeWidth={1.7} strokeLinecap="round" markerEnd={arrow ? 'url(#wf-arrow)' : undefined} />;
}

/** A left-to-right curve that leaves and arrives level. */
function curve(x1: number, y1: number, x2: number, y2: number) {
  const mid = (x1 + x2) / 2;
  return `M${x1} ${y1} C${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`;
}

function Credit() {
  return (
    <text x={W - 26} y={H - 18} textAnchor="end" fontSize={12.5} className="fill-gray-500">
      {walkthrough.figures.credit}
    </text>
  );
}

/** Step 4: what a draft must pass before the encoder applies it, and the two checks that sit outside that sequence. */
function GatesFigure() {
  const f = walkthrough.figures.byId.gates;
  const railY = 84;
  const railH = 112;
  const rail: Box[] = [
    { x: 64, y: railY, w: 290, h: railH },
    { x: 430, y: railY, w: 440, h: railH },
    { x: 946, y: railY, w: 290, h: railH },
  ];
  const mid = railY + railH / 2;
  const asideY = 318;
  return (
    <>
      {f.rail.map((step, i) => (
        <Card key={step.kicker} {...rail[i]}>
          <Kicker x={rail[i].x + 24} y={railY + 40}>
            {step.kicker}
          </Kicker>
          <Lines x={rail[i].x + 24} y={railY + 78} lines={[step.text]} size={21} className="fill-gray-900 font-semibold" />
        </Card>
      ))}
      <Edge d={`M${rail[0].x + rail[0].w + 8} ${mid} H${rail[1].x - 8}`} />
      <Edge d={`M${rail[1].x + rail[1].w + 8} ${mid} H${rail[2].x - 8}`} />
      {/* The way back: a failed check returns the draft to the encoder. */}
      <Edge d={`M${rail[1].x + 150} ${railY + railH + 8} V${railY + railH + 38} Q${rail[1].x + 150} ${railY + railH + 50} ${rail[1].x + 138} ${railY + railH + 50} H${rail[0].x + 157} Q${rail[0].x + 145} ${railY + railH + 50} ${rail[0].x + 145} ${railY + railH + 38} V${railY + railH + 10}`} />
      <Lines x={(rail[0].x + 145 + rail[1].x + 150) / 2} y={railY + railH + 78} lines={[f.loop]} size={16.5} anchor="middle" className="fill-gray-700" />

      <Card x={64} y={asideY} w={400} h={104} dashed>
        <Kicker x={88} y={asideY + 38}>
          {f.aside[0].kicker}
        </Kicker>
        <Lines x={88} y={asideY + 74} lines={f.aside[0].lines} size={18.5} className="fill-gray-900" />
      </Card>
      <Card x={496} y={asideY} w={740} h={104} dashed>
        <Kicker x={520} y={asideY + 38}>
          {f.aside[1].kicker}
        </Kicker>
        <Lines x={520} y={asideY + 74} lines={f.aside[1].lines} size={18.5} className="fill-gray-900" />
      </Card>

      <Lines x={64} y={482} lines={f.caveat} size={16.5} gap={26} className="fill-gray-700" />
    </>
  );
}

/** One node of the rule graph: what kind of value it is, its name and its value in the test case. */
function GraphNode({ box, kicker, label, value }: { box: Box; kicker: string; label: readonly string[]; value: string }) {
  return (
    <Card {...box}>
      <Kicker x={box.x + 16} y={box.y + 21}>
        {kicker}
      </Kicker>
      <Lines x={box.x + 16} y={box.y + 41} lines={label} size={15} gap={19} className="fill-gray-900" />
      <text x={box.x + 16} y={box.y + box.h - 11} fontSize={14} className="font-mono font-semibold" style={VALUE}>
        {value}
      </text>
    </Card>
  );
}

/** Step 6: selected dependencies of one test case, with the two lines into the allotment drawn apart. */
function GraphFigure() {
  const f = walkthrough.figures.byId.graph;
  const aX = 36;
  const aW = 300;
  const bX = 392;
  const cX = 704;
  const w = 262;
  const outX = 1016;
  const outW = 250;
  // Inputs, top to bottom; a two-line label takes a taller card.
  const inputs = f.inputs.map((node) => ({ ...node, h: node.label.length > 1 ? 88 : 68 }));
  const tops = inputs.map((_, i) => 84 + inputs.slice(0, i).reduce((sum, node) => sum + node.h + 16, 0));
  const a = inputs.map((node, i) => ({ ...node, x: aX, y: tops[i], w: aW, cy: tops[i] + node.h / 2 }));
  const [netIn, rate, max, size, minRate] = a;
  const net = { x: bX, y: netIn.cy - 34, w, h: 68, cy: netIn.cy };
  const minimum = { x: bX, y: (size.cy + minRate.cy) / 2 - 34, w, h: 68, cy: (size.cy + minRate.cy) / 2 };
  const contribution = { x: cX, y: (netIn.cy + rate.cy) / 2 - 34, w, h: 68, cy: (netIn.cy + rate.cy) / 2 };
  const before = { x: cX, y: max.cy - 34, w, h: 68, cy: max.cy };
  const out = { x: outX, y: before.cy - 62, w: outW, h: 196 };
  const outLow = out.y + out.h - 44;

  return (
    <>
      <Kicker x={aX} y={54}>
        {f.testCase}
      </Kicker>

      <Edge d={`M${aX + aW + 4} ${netIn.cy} H${bX - 6}`} />
      <Edge d={curve(bX + w + 4, net.cy, cX - 6, contribution.cy - 12)} />
      <Edge d={curve(aX + aW + 4, rate.cy, cX - 6, contribution.cy + 12)} />
      <Edge d={`M${aX + aW + 4} ${max.cy} H${cX - 6}`} />
      <Edge d={`M${cX + w / 2} ${contribution.y + 68 + 4} V${before.y - 6}`} />
      <Edge d={curve(aX + aW + 4, max.cy + 14, bX - 6, minimum.cy - 16)} />
      <Edge d={curve(aX + aW + 4, size.cy, bX - 6, minimum.cy)} />
      <Edge d={curve(aX + aW + 4, minRate.cy, bX - 6, minimum.cy + 16)} />
      <Edge d={`M${cX + w + 4} ${before.cy} H${outX - 6}`} />
      <Edge d={curve(bX + w + 4, minimum.cy, outX - 6, outLow)} />

      {a.map((node) => (
        <GraphNode key={node.value + node.label[0]} box={node} kicker={node.kind} label={node.label} value={node.value} />
      ))}
      <GraphNode box={net} kicker={f.result} label={f.net.label} value={f.net.value} />
      <GraphNode box={minimum} kicker={f.result} label={f.minimum.label} value={f.minimum.value} />
      <GraphNode box={contribution} kicker={f.result} label={f.contribution.label} value={f.contribution.value} />
      <GraphNode box={before} kicker={f.result} label={f.before.label} value={f.before.value} />

      <Card {...out}>
        <Kicker x={out.x + 20} y={out.y + 30}>
          {f.output.kicker}
        </Kicker>
        <Lines x={out.x + 20} y={out.y + 58} lines={f.output.label} size={16} className="fill-gray-900" />
        <text x={out.x + 20} y={out.y + 118} fontSize={48} className="font-semibold" style={VALUE}>
          {f.output.value}
        </text>
        <Lines x={out.x + 20} y={out.y + 150} lines={f.output.rule} size={14.5} gap={19} className="fill-gray-700" />
      </Card>
    </>
  );
}

/** Step 8: the encoded rules as one source, and four kinds of tool that could use them. */
function UsesFigure() {
  const f = walkthrough.figures.byId.uses;
  const source = { x: 84, y: 176, w: 410, h: 236 };
  const useX = 640;
  const useW = 580;
  const useH = 104;
  const tops = [78, 200, 322, 444];
  const from = source.x + source.w + 6;
  return (
    <>
      {tops.map((top, i) => (
        <Edge key={top} d={curve(from, source.y + 74 + i * 30, useX - 8, top + useH / 2)} />
      ))}
      <Card {...source}>
        <Kicker x={source.x + 30} y={source.y + 46}>
          {f.source.kicker}
        </Kicker>
        <Lines x={source.x + 30} y={source.y + 96} lines={[f.source.title]} size={31} className="fill-gray-900 font-semibold" />
        <Lines x={source.x + 30} y={source.y + 142} lines={f.source.lines} size={17} gap={25} className="fill-gray-700" />
      </Card>
      <Kicker x={useX} y={52}>
        {f.usesKicker}
      </Kicker>
      {f.uses.map((use, i) => (
        <Card key={use.name} x={useX} y={tops[i]} w={useW} h={useH}>
          <Lines x={useX + 26} y={tops[i] + 40} lines={[use.name]} size={20} className="fill-gray-900 font-semibold" />
          <Lines x={useX + 26} y={tops[i] + 66} lines={use.lines} size={14.5} gap={19} className="fill-gray-700" />
        </Card>
      ))}
    </>
  );
}

const FIGURES: Record<FigureId, () => ReactNode> = { gates: GatesFigure, graph: GraphFigure, uses: UsesFigure };

/**
 * The figure for one walkthrough step, filling the card. Screen readers skip it and read the slide's hidden caption,
 * which describes the step.
 */
export default function WalkthroughFigure({ id }: { id: FigureId }) {
  const Figure = FIGURES[id];
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
      aria-hidden={true}
      data-walkthrough-figure={id}
    >
      <Defs />
      <Figure />
      <Credit />
    </svg>
  );
}
