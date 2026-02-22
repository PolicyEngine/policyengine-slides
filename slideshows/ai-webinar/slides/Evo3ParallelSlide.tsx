import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import IconDefs from '@/components/IconDefs';

export default function Evo3ParallelSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Evolution step 3: parallel execution</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">5 agents, 40% error rate</p>
      </SlideHeader>

      <div className="flex gap-8 h-[calc(100vh-280px)]">
        {/* Left: diagram */}
        <div className="w-[60%] bg-[#f9f8f6] rounded-xl border border-gray-100 flex items-center justify-center p-4">
          <svg className="full-width-flow-svg" viewBox="0 0 750 420">
            <IconDefs />
            <circle className="network-node" cx="80" cy="210" r="55" />
            <g transform="translate(80,200) scale(1.6)" className="svg-icon"><use href="#icon-books" /></g>
            <text className="network-label" x="80" y="285">doc-collector</text>
            <line className="network-line" x1="135" y1="175" x2="230" y2="70" />
            <line className="network-line" x1="135" y1="210" x2="230" y2="210" />
            <line className="network-line" x1="135" y1="245" x2="230" y2="350" />
            <circle className="network-node" cx="280" cy="70" r="50" />
            <g transform="translate(280,70) scale(1.4)" className="svg-icon"><use href="#icon-gear" /></g>
            <text className="network-label" x="280" y="140">param-architect</text>
            <circle className="network-node" cx="280" cy="210" r="50" />
            <g transform="translate(280,210) scale(1.4)" className="svg-icon"><use href="#icon-flask" /></g>
            <text className="network-label" x="280" y="280">test-creator</text>
            <circle className="network-node" cx="280" cy="350" r="50" />
            <g transform="translate(280,358) scale(1.4)" className="svg-icon"><use href="#icon-lambda" /></g>
            <text className="network-label" x="280" y="420">rules-engineer</text>
            <line className="network-line" x1="330" y1="70" x2="450" y2="165" />
            <line className="network-line" x1="330" y1="210" x2="435" y2="210" />
            <line className="network-line" x1="330" y1="350" x2="450" y2="255" />
            <circle className="network-node" cx="490" cy="210" r="55" />
            <g transform="translate(490,210) scale(1.6)" className="svg-icon"><use href="#icon-search" /></g>
            <text className="network-label" x="490" y="285">impl-validator</text>
            <line className="network-line" x1="545" y1="210" x2="615" y2="210" />
            <polygon className="flow-arrow" points="615,204 629,210 615,216" />
            <circle className="network-node" cx="670" cy="210" r="50" />
            <g transform="translate(670,210) scale(1.4)" className="svg-icon"><use href="#icon-document" /></g>
            <text className="network-label" x="670" y="280">output</text>
          </svg>
        </div>

        {/* Right: text */}
        <div className="w-[40%] flex flex-col">
          <div className="accent-block mb-5">
            <p className="text-gray-700 text-base">
              Test-creator and rules-engineer run in <strong>parallel</strong>. Both read the same documentation. Neither sees the other&apos;s output. When tests fail, it reveals actual discrepancies between implementation and requirements.
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
                ['Tests verify requirements', 'No reference validation'],
                ['Catches real bugs', 'No edge case testing'],
                ['Error rate dropped to 40%', 'Manual review iterations'],
                ['Added impl-validator', 'Styling mismatch between params and vars'],
              ].map((row, i) => (
                <tr key={i}>
                  <td className="py-1.5 pr-4 text-gray-700 align-top"><span className="text-emerald-500 mr-2">&#10003;</span>{row[0]}</td>
                  <td className="py-1.5 text-gray-700 align-top"><span className="text-red-500 mr-2">&#10007;</span>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 font-semibold text-base">
              Key insight: Agent isolation prevents confirmation bias but requires manual intervention on each iteration.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
