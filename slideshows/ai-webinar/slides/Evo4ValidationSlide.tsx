import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import IconDefs from '@/components/IconDefs';

export default function Evo4ValidationSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Evolution step 4: validation loop</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">8 agents with CI feedback</p>
      </SlideHeader>

      <div className="flex gap-8 h-[calc(100vh-280px)]">
        {/* Left: diagram */}
        <div className="w-[65%] bg-[#f9f8f6] rounded-xl border border-gray-100 flex items-center justify-center p-3">
          <svg className="full-width-flow-svg" viewBox="0 0 1100 680">
            <IconDefs />
            <ellipse className="loop-indicator" cx="500" cy="340" rx="350" ry="290" />
            <text x="500" y="650" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--text-mid)" fontStyle="italic">iterate until tests pass</text>
            <line className="network-line" x1="162" y1="300" x2="245" y2="165" />
            <line className="network-line" x1="162" y1="340" x2="238" y2="340" />
            <line className="network-line" x1="162" y1="380" x2="245" y2="515" />
            <line className="network-line" x1="362" y1="365" x2="470" y2="425" />
            <line className="network-line" x1="349" y1="525" x2="470" y2="425" />
            <line className="network-line" x1="362" y1="340" x2="635" y2="120" />
            <line className="network-line" x1="362" y1="340" x2="780" y2="340" />
            <line className="network-line" x1="362" y1="120" x2="635" y2="120" />
            <line className="network-line" x1="355" y1="145" x2="780" y2="340" />
            <line className="network-line" x1="362" y1="560" x2="815" y2="400" />
            <line className="network-line" x1="344" y1="165" x2="705" y2="560" />
            <line className="network-line" x1="362" y1="560" x2="705" y2="560" />
            <line className="network-line" x1="755" y1="165" x2="815" y2="285" />
            <line className="network-line" x1="705" y1="560" x2="815" y2="400" />
            <line className="network-line" x1="514" y1="425" x2="780" y2="340" />
            <line className="network-line" x1="915" y1="340" x2="980" y2="340" />
            <circle className="network-node" cx="100" cy="340" r="62" />
            <g transform="translate(100,330) scale(1.8)" className="svg-icon"><use href="#icon-books" /></g>
            <text className="network-label" x="100" y="425">document-</text>
            <text className="network-label" x="100" y="445">collector</text>
            <circle className="network-node" cx="300" cy="120" r="62" />
            <g transform="translate(300,120) scale(1.8)" className="svg-icon"><use href="#icon-gear" /></g>
            <text className="network-label" x="300" y="42">parameter-architect</text>
            <circle className="network-node" cx="300" cy="340" r="62" />
            <g transform="translate(300,340) scale(1.8)" className="svg-icon"><use href="#icon-flask" /></g>
            <text className="network-label" x="300" y="425">test-creator</text>
            <circle className="network-node" cx="300" cy="560" r="62" />
            <g transform="translate(300,568) scale(1.8)" className="svg-icon"><use href="#icon-lambda" /></g>
            <text className="network-label" x="300" y="645">rules-engineer</text>
            <circle className="network-node" cx="470" cy="425" r="55" />
            <g transform="translate(470,425) scale(1.6)" className="svg-icon"><use href="#icon-lightning" /></g>
            <text className="network-label" x="470" y="503">edge-case-gen</text>
            <circle className="network-node" cx="705" cy="120" r="72" />
            <g transform="translate(705,120) scale(2.0)" className="svg-icon"><use href="#icon-search" /></g>
            <text className="network-label" x="705" y="42">impl-validator</text>
            <circle className="network-node" cx="670" cy="600" r="55" />
            <g transform="translate(670,600) scale(1.6)" className="svg-icon"><use href="#icon-link" /></g>
            <text className="network-label" x="670" y="678">reference-validator</text>
            <circle className="network-node" cx="850" cy="340" r="72" />
            <g transform="translate(850,340) scale(2.0)" className="svg-icon"><use href="#icon-wrench" /></g>
            <text className="network-label" x="850" y="435">ci-fixer</text>
            <circle className="network-node" cx="1020" cy="340" r="45" />
            <g transform="translate(1020,340) scale(1.3)" className="svg-icon"><use href="#icon-document" /></g>
            <text className="network-label" x="1020" y="405">output</text>
          </svg>
        </div>

        {/* Right: text */}
        <div className="w-[35%] flex flex-col">
          <div className="accent-block mb-5">
            <p className="text-gray-700 text-base">
              We added <strong>edge-case-generator</strong>, <strong>reference-validator</strong>, and <strong>ci-fixer</strong> to automatically iterate on failures. The workflow now loops&mdash;when tests fail, ci-fixer analyzes the error and retries.
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
                ['Automatic iteration cycles', 'Inconsistent patterns'],
                ['Edge cases covered', 'Long repeated prompts'],
                ['Citations validated', 'Same rules in every agent'],
                ['Less manual work', null],
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
              Key insight: More agents provide more coverage, but also introduces more inconsistency. Shared knowledge is necessary at scale.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
