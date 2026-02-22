'use client';

import React, { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import IconDefs from '@/components/IconDefs';

const agents = {
  'doc-collector': { x: 80, y: 200, r: 35, icon: '#icon-books', label: 'document-collector', labelY: 250 },
  'param-architect': { x: 200, y: 75, r: 35, icon: '#icon-gear', label: 'parameter-architect', labelY: 28 },
  'test-creator': { x: 200, y: 200, r: 35, icon: '#icon-flask', label: 'test-creator', labelY: 250 },
  'rules-engineer': { x: 200, y: 325, r: 35, icon: '#icon-lambda', label: 'rules-engineer', labelY: 375 },
  'edge-case-gen': { x: 310, y: 260, r: 30, icon: '#icon-lightning', label: 'edge-case-gen', labelY: 305 },
  'impl-validator': { x: 440, y: 75, r: 40, icon: '#icon-search', label: 'impl-validator', labelY: 28 },
  'ref-validator': { x: 415, y: 345, r: 30, icon: '#icon-link', label: 'reference-validator', labelY: 390 },
  'ci-fixer': { x: 530, y: 200, r: 40, icon: '#icon-wrench', label: 'ci-fixer', labelY: 255 },
};

const skills = [
  { id: 'variable', label: 'variable', x: 100, agents: ['doc-collector', 'param-architect', 'rules-engineer'] },
  { id: 'testing', label: 'testing', x: 200, agents: ['test-creator', 'edge-case-gen', 'impl-validator'] },
  { id: 'code-style', label: 'code-style', x: 300, agents: ['param-architect', 'rules-engineer', 'ci-fixer'] },
  { id: 'parameter', label: 'parameter', x: 400, agents: ['param-architect', 'ref-validator'] },
  { id: 'vectorize', label: 'vectorize', x: 500, agents: ['impl-validator', 'ci-fixer'] },
];

const skillY = 430;
const skillWidth = 80;
const skillHeight = 28;

const agentConnections = [
  ['doc-collector', 'param-architect'], ['doc-collector', 'test-creator'], ['doc-collector', 'rules-engineer'],
  ['test-creator', 'edge-case-gen'], ['rules-engineer', 'edge-case-gen'],
  ['test-creator', 'impl-validator'], ['test-creator', 'ci-fixer'],
  ['param-architect', 'impl-validator'], ['param-architect', 'ci-fixer'],
  ['rules-engineer', 'ci-fixer'], ['param-architect', 'ref-validator'], ['rules-engineer', 'ref-validator'],
  ['impl-validator', 'ci-fixer'], ['ref-validator', 'ci-fixer'], ['edge-case-gen', 'ci-fixer'],
];

export default function Evo5SkillsSlide() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Evolution step 5: modular skills</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">15% error rate &mdash; reusable knowledge modules</p>
      </SlideHeader>

      <div className="flex gap-8 h-[calc(100vh-280px)]">
        {/* Left: interactive diagram */}
        <div className="w-[60%] bg-[#f9f8f6] rounded-xl border border-gray-100 flex items-center justify-center p-3">
          <svg className="full-width-flow-svg" viewBox="0 0 600 490">
            <IconDefs />
            <ellipse className="loop-indicator" cx="310" cy="200" rx="230" ry="160" />

            {agentConnections.map(([from, to], i) => {
              const a1 = agents[from as keyof typeof agents];
              const a2 = agents[to as keyof typeof agents];
              return (
                <line key={i} className="network-line" x1={a1.x} y1={a1.y} x2={a2.x} y2={a2.y}
                  style={{ opacity: hoveredSkill === null ? 1 : 0.15, transition: 'opacity 0.2s ease' }} />
              );
            })}

            {skills.map((skill) =>
              skill.agents.map((agentId) => {
                const agent = agents[agentId as keyof typeof agents];
                const isHighlighted = hoveredSkill === skill.id;
                return (
                  <line key={`${skill.id}-${agentId}`} x1={skill.x} y1={skillY} x2={agent.x} y2={agent.y + agent.r}
                    stroke="var(--accent)" strokeWidth={isHighlighted ? 2 : 1}
                    strokeDasharray={isHighlighted ? "none" : "4 3"}
                    opacity={hoveredSkill === null ? 0.4 : isHighlighted ? 1 : 0.15}
                    style={{ transition: 'all 0.2s ease' }} />
                );
              })
            )}

            {Object.entries(agents).map(([id, agent]) => {
              const isConnected = hoveredSkill ? skills.find(s => s.id === hoveredSkill)?.agents.includes(id) : false;
              const op = hoveredSkill === null ? 1 : isConnected ? 1 : 0.4;
              return (
                <g key={id}>
                  <circle className="network-node" cx={agent.x} cy={agent.y} r={agent.r} style={{ opacity: op, transition: 'opacity 0.2s ease' }} />
                  <g transform={`translate(${agent.x},${agent.y + (id === 'rules-engineer' ? 6 : 0)}) scale(${agent.r / 35})`}
                    className="svg-icon" style={{ opacity: op, transition: 'opacity 0.2s ease' }}>
                    <use href={agent.icon} />
                  </g>
                  <text className="network-label" x={agent.x} y={agent.labelY} style={{ opacity: op, transition: 'opacity 0.2s ease', fontSize: '11px' }}>
                    {agent.label}
                  </text>
                </g>
              );
            })}

            <text x="5" y={skillY + skillHeight / 2 + 4} fontFamily="JetBrains Mono" fontSize="10" fill="var(--text-mid)" fontWeight="600">Skills</text>
            {skills.map((skill) => {
              const isHovered = hoveredSkill === skill.id;
              return (
                <g key={skill.id} onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)} style={{ cursor: 'pointer' }}>
                  <rect x={skill.x - skillWidth / 2} y={skillY} width={skillWidth} height={skillHeight} rx="4"
                    fill={isHovered ? "var(--accent)" : "var(--accent-light)"} stroke="var(--accent)"
                    strokeWidth={isHovered ? 2 : 1.5} style={{ transition: 'all 0.2s ease' }} />
                  <text x={skill.x} y={skillY + skillHeight / 2 + 4} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10"
                    fill={isHovered ? "white" : "var(--accent)"} fontWeight={isHovered ? 600 : 400}
                    style={{ transition: 'all 0.2s ease', pointerEvents: 'none' }}>
                    {skill.label}
                  </text>
                </g>
              );
            })}
            <text x="560" y={skillY + skillHeight / 2 + 4} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fill="var(--accent)">...</text>
            <text x="310" y="480" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--text-mid)" fontStyle="italic">Hover over a skill to see which agents use it</text>
          </svg>
        </div>

        {/* Right: text */}
        <div className="w-[40%] flex flex-col">
          <div className="accent-block mb-5">
            <p className="text-gray-700 text-base">
              We introduced <strong>skills</strong>&mdash;reusable knowledge modules that agents load on demand. Instead of repeating instructions in every prompt, we extracted shared knowledge into focused documents.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { name: 'variable-patterns', desc: 'Proper class structure' },
              { name: 'testing-patterns', desc: 'Consistent test format' },
              { name: 'code-style', desc: 'Formatting rules' },
              { name: 'parameter-patterns', desc: 'YAML file structure' },
              { name: 'vectorization', desc: 'NumPy operations' },
              { name: 'review-patterns', desc: 'Review checklist' },
            ].map((skill, i) => (
              <div key={i} className="p-2 bg-pe-teal/5 border border-pe-teal/20 rounded-lg">
                <div className="text-sm font-bold text-pe-dark">{skill.name}</div>
                <div className="text-xs text-gray-500">{skill.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mb-4">
            <div className="flex-1 content-card p-2 text-center">
              <div className="text-xl font-black text-red-500">70%</div>
              <div className="text-xs text-gray-500">Step 1 errors</div>
            </div>
            <div className="flex-1 content-card p-2 text-center">
              <div className="text-xl font-black text-amber-500">40%</div>
              <div className="text-xs text-gray-500">Step 3 errors</div>
            </div>
            <div className="flex-1 content-card p-2 text-center">
              <div className="text-xl font-black text-emerald-500">15%</div>
              <div className="text-xs text-gray-500">Step 5 errors</div>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 font-semibold text-base">
              Key insight: Skills let us scale without redundancy. One skill, many agents&mdash;consistent patterns everywhere.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
