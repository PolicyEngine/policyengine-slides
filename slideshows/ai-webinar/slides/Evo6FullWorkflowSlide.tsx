'use client';

import React, { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import IconDefs from '@/components/IconDefs';

const agents: Record<string, { x: number; y: number; r: number; icon: string; label: string | string[]; labelY: number }> = {
  'issue-manager': { x: 55, y: 230, r: 35, icon: '#icon-clipboard', label: 'issue-manager', labelY: 280 },
  'doc-collector': { x: 150, y: 230, r: 38, icon: '#icon-books', label: ['document-', 'collector'], labelY: 285 },
  'param-architect': { x: 290, y: 80, r: 38, icon: '#icon-gear', label: 'param-architect', labelY: 30 },
  'test-creator': { x: 290, y: 230, r: 38, icon: '#icon-flask', label: 'test-creator', labelY: 285 },
  'rules-engineer': { x: 290, y: 380, r: 38, icon: '#icon-lambda', label: 'rules-engineer', labelY: 432 },
  'edge-case-gen': { x: 410, y: 300, r: 32, icon: '#icon-lightning', label: 'edge-case-gen', labelY: 346 },
  'impl-validator': { x: 570, y: 80, r: 44, icon: '#icon-search', label: 'impl-validator', labelY: 30 },
  'ref-validator': { x: 545, y: 400, r: 32, icon: '#icon-link', label: 'ref-validator', labelY: 446 },
  'ci-fixer': { x: 680, y: 230, r: 44, icon: '#icon-wrench', label: 'ci-fixer', labelY: 290 },
  'pr-pusher': { x: 770, y: 230, r: 24, icon: '#icon-upload', label: 'pr-pusher', labelY: 268 },
  'program-reviewer': { x: 840, y: 230, r: 24, icon: '#icon-book', label: ['program-', 'reviewer'], labelY: 268 },
  'draft-pr': { x: 910, y: 230, r: 24, icon: '#icon-document', label: 'Draft PR', labelY: 268 },
};

const skills = [
  { id: 'variable', label: 'variable', x: 160, agents: ['doc-collector', 'param-architect', 'rules-engineer'] },
  { id: 'testing', label: 'testing', x: 280, agents: ['test-creator', 'edge-case-gen', 'impl-validator'] },
  { id: 'code-style', label: 'code-style', x: 400, agents: ['param-architect', 'rules-engineer', 'ci-fixer'] },
  { id: 'parameter', label: 'parameter', x: 520, agents: ['param-architect', 'ref-validator'] },
  { id: 'vectorize', label: 'vectorize', x: 640, agents: ['impl-validator', 'ci-fixer'] },
  { id: 'review', label: 'review', x: 760, agents: ['program-reviewer', 'ci-fixer'] },
];

const skillY = 490;
const skillWidth = 80;
const skillHeight = 28;

const agentConnections = [
  ['issue-manager', 'doc-collector'],
  ['doc-collector', 'param-architect'], ['doc-collector', 'test-creator'], ['doc-collector', 'rules-engineer'],
  ['test-creator', 'edge-case-gen'], ['rules-engineer', 'edge-case-gen'],
  ['test-creator', 'impl-validator'], ['test-creator', 'ci-fixer'],
  ['param-architect', 'impl-validator'], ['param-architect', 'ci-fixer'],
  ['rules-engineer', 'ci-fixer'], ['param-architect', 'ref-validator'], ['rules-engineer', 'ref-validator'],
  ['impl-validator', 'ci-fixer'], ['ref-validator', 'ci-fixer'], ['edge-case-gen', 'ci-fixer'],
  ['ci-fixer', 'pr-pusher'], ['pr-pusher', 'program-reviewer'], ['program-reviewer', 'draft-pr'],
];

export default function Evo6FullWorkflowSlide() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Evolution step 6: full workflow</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">Complete pipeline &mdash; one command to a draft PR in ~90 minutes</p>
      </SlideHeader>

      <div className="flex gap-6 h-[calc(100vh-280px)]">
        {/* Left: diagram */}
        <div className="w-[65%] bg-[#f9f8f6] rounded-xl p-2 border border-gray-100 flex items-center justify-center">
          <svg className="full-width-flow-svg" viewBox="0 0 950 550" style={{ maxWidth: 850 }}>
            <IconDefs />

            <ellipse className="loop-indicator" cx="430" cy="230" rx="260" ry="195" />
            <text x="430" y="440" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--text-mid)" fontStyle="italic">iterate until tests pass</text>

            {agentConnections.map(([from, to], i) => {
              const a1 = agents[from]; const a2 = agents[to];
              return (
                <line key={i} className="network-line" x1={a1.x} y1={a1.y} x2={a2.x} y2={a2.y}
                  style={{ opacity: hoveredSkill === null ? 1 : 0.15, transition: 'opacity 0.2s ease' }} />
              );
            })}

            {skills.map((skill) =>
              skill.agents.map((agentId) => {
                const agent = agents[agentId];
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
                  <g transform={`translate(${agent.x},${agent.y + (id === 'rules-engineer' ? 6 : id === 'doc-collector' ? -6 : 0)}) scale(${agent.r / 38})`}
                    className="svg-icon" style={{ opacity: op, transition: 'opacity 0.2s ease' }}>
                    <use href={agent.icon} />
                  </g>
                  {Array.isArray(agent.label) ? (
                    agent.label.map((line, i) => (
                      <text key={i} className="network-label" x={agent.x} y={agent.labelY + i * 14}
                        style={{ opacity: op, transition: 'opacity 0.2s ease', fontSize: '10px' }}>{line}</text>
                    ))
                  ) : (
                    <text className="network-label" x={agent.x} y={agent.labelY}
                      style={{ opacity: op, transition: 'opacity 0.2s ease', fontSize: '10px' }}>{agent.label}</text>
                  )}
                </g>
              );
            })}

            <text x="55" y={skillY + skillHeight / 2 + 4} fontFamily="JetBrains Mono" fontSize="10" fill="var(--text-mid)" fontWeight="600">Skills</text>
            {skills.map((skill) => {
              const isHovered = hoveredSkill === skill.id;
              return (
                <g key={skill.id} onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)} style={{ cursor: 'pointer' }}>
                  <rect x={skill.x - skillWidth / 2} y={skillY} width={skillWidth} height={skillHeight} rx="4"
                    fill={isHovered ? "var(--accent)" : "var(--accent-light)"} stroke="var(--accent)"
                    strokeWidth={isHovered ? 2 : 1.5} style={{ transition: 'all 0.2s ease' }} />
                  <text x={skill.x} y={skillY + skillHeight / 2 + 4} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10"
                    fill={isHovered ? "white" : "var(--accent)"} fontWeight={isHovered ? 600 : 400}
                    style={{ transition: 'all 0.2s ease', pointerEvents: 'none' }}>{skill.label}</text>
                </g>
              );
            })}
            <text x="475" y="540" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--text-mid)" fontStyle="italic">Hover over a skill to see which agents use it</text>
          </svg>
        </div>

        {/* Right: text */}
        <div className="w-[35%] flex flex-col">
          <div className="accent-block mb-5">
            <p className="text-gray-700 text-base">
              The complete pipeline: <strong>12 agents</strong> and <strong>6 skills</strong> working together. One command triggers the entire workflow&mdash;from issue creation to a draft PR ready for human review.
            </p>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl mb-3">
            <span className="text-emerald-800 font-bold text-base">What it produces: </span>
            <span className="text-emerald-700 text-base">11 parameter files, 8 variable files, 65 test cases, 1 complete PR&mdash;all in ~90 minutes.</span>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl mb-3">
            <span className="text-blue-800 font-bold text-base">Human role: </span>
            <span className="text-blue-700 text-base">Review the final PR and make the merge decision. Agents handle all mechanical work.</span>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="flex-1 content-card p-2 text-center">
              <div className="text-xl font-black text-pe-teal">~90</div>
              <div className="text-xs text-gray-500">minutes</div>
            </div>
            <div className="flex-1 content-card p-2 text-center">
              <div className="text-xl font-black text-pe-teal">12</div>
              <div className="text-xs text-gray-500">agents</div>
            </div>
            <div className="flex-1 content-card p-2 text-center">
              <div className="text-xl font-black text-pe-teal">6</div>
              <div className="text-xs text-gray-500">skills</div>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 font-semibold text-base">
              The orchestrator never writes code&mdash;it invokes agents and checks quality gates.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
