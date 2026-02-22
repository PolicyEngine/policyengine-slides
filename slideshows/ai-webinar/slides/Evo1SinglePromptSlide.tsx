import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import IconDefs from '@/components/IconDefs';

export default function Evo1SinglePromptSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Evolution step 1: single prompt</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">70% error rate</p>
      </SlideHeader>

      <div className="flex gap-8 h-[calc(100vh-280px)]">
        {/* Left: diagram */}
        <div className="w-[55%] bg-[#f9f8f6] rounded-xl border border-gray-100 flex items-center justify-center p-4">
          <svg className="full-width-flow-svg" viewBox="0 0 500 200">
            <IconDefs />
            <circle className="network-node" cx="150" cy="100" r="60" />
            <g transform="translate(150,100) scale(1.8)" className="svg-icon"><use href="#icon-chat" /></g>
            <text className="network-label" x="150" y="180">Single Prompt</text>
            <line className="network-line" x1="210" y1="100" x2="280" y2="100" />
            <polygon className="flow-arrow" points="280,94 294,100 280,106" />
            <circle className="network-node" cx="350" cy="100" r="50" style={{ stroke: '#dc2626' }} />
            <g transform="translate(350,100) scale(1.4)" className="svg-icon" style={{ color: '#dc2626' }}><use href="#icon-document" /></g>
            <text className="network-label" x="350" y="170">Output</text>
            <circle cx="420" cy="55" r="30" fill="#fef2f2" stroke="#dc2626" strokeWidth="2.5"/>
            <text x="420" y="52" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="15" fontWeight="600" fill="#dc2626">70%</text>
            <text x="420" y="68" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#dc2626">errors</text>
          </svg>
        </div>

        {/* Right: text */}
        <div className="w-[45%] flex flex-col">
          <div className="accent-block mb-5">
            <p className="text-gray-700 text-base">
              We started with the simplest approach: a single prompt asking Claude to implement one benefit program end-to-end. <strong>One command, one output</strong>&mdash;parameters, variables, tests, everything in one shot.
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
                ['Simple to start\u2014one prompt', '70% of outputs had errors'],
                ['Produces accurate code on simple tasks', 'Hard-coded values'],
                ['Fast iteration cycles', 'No source citations'],
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
              Key insight: Too much context for one prompt. The model couldn&apos;t hold code standards, legal requirements, and testing patterns all at once.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
