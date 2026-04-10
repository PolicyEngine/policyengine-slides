import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function SkillsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Skills became our core building block</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Rather than one massive instruction file, modular skills the agent loads on demand.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="space-y-5">
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">What a skill is</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              A self-contained instruction set the AI loads when it recognizes a matching task.
              Contains context, constraints, examples, and quality criteria &mdash; everything the
              agent needs to do one thing well.
            </p>
          </div>
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">Why not just one big prompt?</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Context windows are finite. Loading everything at once wastes tokens and confuses
              the agent. Skills use progressive disclosure &mdash; the agent decides what to load
              based on the task at hand.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">Skills we use daily</h3>
          <div className="space-y-3">
            {[
              { name: 'encode-policy', desc: 'Multi-agent workflow: reads a statute, encodes parameters + formulas + tests' },
              { name: 'review-pr', desc: 'Validates a code change against source documents and quality standards' },
              { name: 'create-dashboard', desc: 'Plans, builds, and deploys a policy analysis dashboard from a description' },
              { name: 'fix-pr', desc: 'Reads review comments, applies fixes, re-runs tests' },
              { name: 'gmail', desc: 'Drafts and sends emails following org patterns and tone' },
            ].map((s) => (
              <div key={s.name} className="flex items-start gap-3">
                <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono text-[var(--pe-teal)] whitespace-nowrap mt-0.5">{s.name}</code>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4 italic">
            ~50 skills total, loaded on demand. Each is a markdown file with structured instructions.
          </p>
        </div>
      </div>
    </Slide>
  );
}
