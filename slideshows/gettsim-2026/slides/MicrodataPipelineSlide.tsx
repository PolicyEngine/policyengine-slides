import { Fragment } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconChevronRight } from '@tabler/icons-react';

// Stages and operators as documented on microcosm.institute ("How a release
// is built", the operator algebra) and in PolicyEngine/microcosm DESIGN.md.
const phases = [
  {
    phase: 'Observations',
    ops: ['Harmonize sources', 'Assemble multispine'],
    detail: 'asec · acs · puf · scf · sipp',
  },
  {
    phase: 'Enrichment',
    ops: ['Clone operator', 'Imputation operators'],
    detail: 'tax-detail twins · wealth · tips · esi',
  },
  {
    phase: 'Rules',
    ops: ['Derivations'],
    detail: 'statute-defined concepts on the frame',
  },
  {
    phase: 'Seeds',
    ops: ['Take-up seeds'],
    detail: 'seeded draws at documented priors',
  },
  {
    phase: 'Simulation',
    ops: ['Materialize once'],
    detail: 'the rules engine, run once per input state',
  },
  {
    phase: 'Weights',
    ops: ['Target matrix', 'Calibration', 'Selection / export'],
    detail: 'matrix descent against administrative totals',
  },
];

const strategies = [
  { name: 'support', what: 'which records exist', status: 'shipped' },
  { name: 'calibration', what: 'weights hit admin facts', status: 'shipped' },
  { name: 'sparsity', what: 'fewer records, same totals', status: 'shipped' },
  { name: 'evaluation', what: 'the referee', status: 'shipped' },
  { name: 'composition', what: 'the interactions', status: 'in progress' },
  { name: 'dynamics', what: 'time', status: 'design' },
];

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
        One weighted sampling frame, made a first-class datatype. Every stage
        is an operator on that frame, the order is load-bearing, and a gate
        at each hand-off refuses silently broken inputs.
      </p>

      <div className="mt-6 flex items-stretch gap-1">
        {phases.map((p, i) => (
          <Fragment key={p.phase}>
            {i > 0 && (
              <div className="flex flex-col items-center justify-center shrink-0 w-6">
                <IconChevronRight size={22} className="text-pe-teal" />
                <span className="text-[9px] uppercase tracking-wider text-gray-400 mt-1">
                  gate
                </span>
              </div>
            )}
            <div className="flex-1 content-card p-4 flex flex-col min-h-[230px]">
              <div className="slide-tag mb-3" style={{ fontSize: '0.7rem' }}>
                {p.phase}
              </div>
              <ul className="space-y-1">
                {p.ops.map((op) => (
                  <li
                    key={op}
                    className="text-base font-semibold text-pe-dark leading-snug"
                  >
                    {op}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 font-mono leading-snug mt-auto pt-3">
                {p.detail}
              </p>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-6 gap-3">
        {strategies.map((s) => (
          <div
            key={s.name}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 flex items-baseline justify-between gap-2"
          >
            <div>
              <span className="font-mono text-base text-pe-dark">{s.name}</span>
              <span className="block text-xs text-gray-500 leading-snug">
                {s.what}
              </span>
            </div>
            <span
              className="text-[10px] uppercase tracking-wider shrink-0"
              style={{
                color:
                  s.status === 'shipped'
                    ? 'var(--pe-teal)'
                    : s.status === 'in progress'
                      ? 'var(--pe-amber)'
                      : '#9ca3af',
              }}
            >
              {s.status}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-base text-gray-600 leading-snug">
        Sources: Chronicle catalogues every survey and administrative input
        and its mapping to statute concepts
        (<span className="font-mono">github.com/PolicyEngine/chronicle</span>);
        releases ship as populace datasets on Hugging Face
        (<span className="font-mono">huggingface.co/policyengine</span>).
        Belgium runs the same stack; Germany would too.
      </p>
    </Slide>
  );
}
