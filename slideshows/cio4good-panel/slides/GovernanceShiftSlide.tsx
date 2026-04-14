import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function GovernanceShiftSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI doesn&apos;t just serve the mission &mdash; it changes what the mission can be</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">Two missions, not one</h3>
          <p className="text-base text-gray-600 leading-relaxed mb-3">
            Democratizing policy analysis is a big mission. Making the world&apos;s
            rules computable is a different big mission. Before AI, we couldn&apos;t
            seriously pursue both. Now we can &mdash; but not inside one organization.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-3">
            So we created the Axiom Foundation to encode rules at scale, while
            PolicyEngine stays focused on helping people understand what those
            rules mean for them. Each mission gets the scope and leadership it
            deserves.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-semibold">
            AI didn&apos;t just help us do our mission faster. It forced us to
            ask: are we thinking about the right mission? And is one org the
            right shape to pursue it?
          </p>
        </div>

        <div className="rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
          <h3 className="font-mono text-lg font-bold mb-2">The question for your org</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-4 opacity-80">Building missions, not just serving them</p>
          <ul className="space-y-4 text-base text-white/85">
            <li>What would you attempt if your capacity tripled overnight?</li>
            <li>Is that still the same mission &mdash; or is it a bigger one that needs its own structure?</li>
            <li>How do you define each mission precisely enough to guide the AI agents pursuing it?</li>
          </ul>
          <p className="text-sm text-white/50 mt-5 italic">
            Sometimes the right move is to think entire organizations, not just tools.
          </p>
        </div>
      </div>
    </Slide>
  );
}
