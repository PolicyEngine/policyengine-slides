import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function SkillsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Skills: modular instructions for AI agents</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          A &ldquo;skill&rdquo; is a focused job description for one specific task — loaded when needed, not all at once.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="space-y-5">
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">What a skill is</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              A self-contained document an AI loads when it recognizes a matching task.
              Contains context, constraints, examples, and quality standards — everything
              needed to do one thing well.
            </p>
          </div>
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">Why not one big instruction file?</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Like handing a new staff member the entire operations manual before their first task.
              Overwhelming and ineffective. Skills let each agent focus — load the right handbook
              for this task, not everything at once.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">Skills we use daily</h3>
          <div className="space-y-3">
            {[
              { name: 'encode-policy', desc: 'Reads a statute, encodes parameters + formulas + tests as working code' },
              { name: 'review-work', desc: 'Validates a change against the original source documents and quality standards' },
              { name: 'create-dashboard', desc: 'Plans, builds, and deploys a policy analysis report from a plain description' },
              { name: 'match-client', desc: 'Match a legal query to the right licensed professional from a roster (DC Bar does this today)' },
              { name: 'triage-intake', desc: 'Route a student or client request to the right support path based on eligibility and history' },
              { name: '(yours?)', desc: 'Grant compliance review, board memo drafting, donor research, program evaluation — same pattern' },
            ].map((s) => (
              <div key={s.name} className="flex items-start gap-3">
                <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono text-[var(--pe-teal)] whitespace-nowrap mt-0.5">{s.name}</code>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4 italic">
            ~50 skills total. Each is a markdown file with structured instructions — no code required to write one.
          </p>
        </div>
      </div>
    </Slide>
  );
}
