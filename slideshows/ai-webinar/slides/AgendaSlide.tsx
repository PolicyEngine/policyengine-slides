import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sections = [
  { number: '01', title: 'What is PolicyEngine?', description: 'Microsimulation, ingredients, and who uses it' },
  { number: '02', title: 'Live demo', description: 'Claude Code in action' },
  { number: '03', title: 'Multi-agent AI flow', description: 'From single prompt to multi-agent workflow' },
  { number: '04', title: 'Design principles', description: 'Patterns that emerged from the evolution' },
  { number: '05', title: 'Results and takeaways', description: 'What we learned and what comes next' },
];

export default function AgendaSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Agenda</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col gap-5 mt-6 max-w-3xl">
        {sections.map((section, i) => (
          <div key={i} className="flex items-baseline gap-6">
            <span className="font-mono text-3xl font-bold text-[var(--accent)] opacity-40">{section.number}</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
              <p className="text-gray-500 text-lg mt-1">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
