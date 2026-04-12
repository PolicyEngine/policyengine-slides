import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function JourneyBreakthroughSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The turning point: splitting the work</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-6">
        <div className="flex flex-col gap-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">Before</p>
            <p className="text-base text-gray-700 leading-relaxed">
              One AI doing everything: read the law, write parameters, write formulas, write tests,
              check for consistency. <strong>Result: overloaded and error-prone.</strong>
            </p>
          </div>

          <div className="rounded-xl p-5 text-white" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-2">After</p>
            <div className="space-y-2">
              {[
                { role: 'Researcher', task: 'Read the statute, collect the facts' },
                { role: 'Engineer A', task: 'Design parameters — same docs, no other context' },
                { role: 'Engineer B', task: 'Write tests — independently from the same source' },
                { role: 'Reviewer', task: 'Validate everything against the law' },
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <code className="text-xs bg-white/10 text-[var(--pe-teal)] px-2 py-1 rounded font-mono whitespace-nowrap mt-0.5 flex-shrink-0">{a.role}</code>
                  <p className="text-sm text-white/80">{a.task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <div className="flex items-center gap-4">
            <span className="text-7xl font-black text-amber-500 font-mono leading-none">40%</span>
            <div>
              <p className="text-2xl font-bold text-gray-800">error rate</p>
              <p className="text-base text-gray-500">Down from 70%</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Independent agents catch real bugs', sub: 'Tests and code written separately — they can\'t cover for each other\'s mistakes' },
              { label: 'Each agent focuses on one task', sub: 'No context overload; specialists do better work' },
              { label: 'Humans review at the end, not every step', sub: 'Faster iteration without sacrificing accountability' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                <div>
                  <p className="text-base font-semibold text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 font-semibold text-base">
              When tests and code come from the same source but different agents — failure is real,
              not just a gap in one agent&apos;s memory.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
