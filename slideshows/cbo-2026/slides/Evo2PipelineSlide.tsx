import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import IconDefs from '@/components/IconDefs';

export default function Evo2PipelineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Evolution step 2: core pipeline</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">4 agents, sequential</p>
      </SlideHeader>

      <div className="flex gap-8 h-[calc(100vh-280px)]">
        {/* Left: diagram */}
        <div className="w-[55%] bg-[#f9f8f6] rounded-xl border border-gray-100 flex items-center justify-center p-4">
          <svg className="full-width-flow-svg" viewBox="0 0 800 220">
            <IconDefs />
            <circle className="network-node" cx="80" cy="110" r="50" />
            <g transform="translate(80,100) scale(1.4)" className="svg-icon"><use href="#icon-books" /></g>
            <text className="network-label" x="80" y="180">doc-collector</text>
            <line className="network-line" x1="130" y1="110" x2="170" y2="110" />
            <polygon className="flow-arrow" points="170,104 184,110 170,116" />
            <circle className="network-node" cx="230" cy="110" r="50" />
            <g transform="translate(230,110) scale(1.4)" className="svg-icon"><use href="#icon-gear" /></g>
            <text className="network-label" x="230" y="180">param-architect</text>
            <line className="network-line" x1="280" y1="110" x2="320" y2="110" />
            <polygon className="flow-arrow" points="320,104 334,110 320,116" />
            <circle className="network-node" cx="380" cy="110" r="50" />
            <g transform="translate(380,118) scale(1.4)" className="svg-icon"><use href="#icon-lambda" /></g>
            <text className="network-label" x="380" y="180">rules-engineer</text>
            <line className="network-line" x1="430" y1="110" x2="470" y2="110" />
            <polygon className="flow-arrow" points="470,104 484,110 470,116" />
            <circle className="network-node" cx="530" cy="110" r="50" />
            <g transform="translate(530,110) scale(1.4)" className="svg-icon"><use href="#icon-flask" /></g>
            <text className="network-label" x="530" y="180">test-creator</text>
            <line className="network-line" x1="580" y1="110" x2="620" y2="110" />
            <polygon className="flow-arrow" points="620,104 634,110 620,116" />
            <circle className="network-node" cx="680" cy="110" r="50" />
            <g transform="translate(680,110) scale(1.4)" className="svg-icon"><use href="#icon-document" /></g>
            <text className="network-label" x="680" y="180">output</text>
            <text x="400" y="30" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--warning)" fontStyle="italic">tests created after seeing rules-engineer&apos;s work</text>
          </svg>
        </div>

        {/* Right: text */}
        <div className="w-[45%] flex flex-col">
          <div className="accent-block mb-5">
            <p className="text-gray-700 text-base">
              We introduced <strong>agents</strong>&mdash;specialized AI workers that each focus on a single concern. A document-collector gathers sources. A parameter-architect structures data. A rules-engineer implements logic. A test-creator writes validations.
            </p>
          </div>

          <table className="w-full text-base mb-4 border-collapse">
            <thead>
              <tr>
                <th className="text-left font-bold text-emerald-700 pb-2 pr-4 border-b border-gray-200">What worked</th>
                <th className="text-left font-bold text-red-700 pb-2 border-b border-gray-200">What didn&apos;t</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Each agent focused on one task', 'Tests run with variable logic in mind'],
                ['Clearer, shorter prompts', 'Bugs are reinforced, not fixed'],
                ['Easier to debug failures', 'No validation step'],
                ['Improve agents independently', null],
              ].map((row, i) => (
                <tr key={i}>
                  <td className="py-1.5 pr-4 text-gray-700 align-top">{row[0] && <><span className="text-emerald-500 mr-2">&#10003;</span>{row[0]}</>}</td>
                  <td className="py-1.5 text-gray-700 align-top">{row[1] && <><span className="text-red-500 mr-2">&#10007;</span>{row[1]}</>}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 font-semibold text-base">
              Key insight: Sequential execution means tests validate existing code patterns&mdash;not actual program document requirements.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
