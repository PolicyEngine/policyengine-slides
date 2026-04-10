import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ContextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine in 60 seconds</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="space-y-5">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">What we do</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Open-source tax and benefit microsimulation. Model &ldquo;what if we expanded the CTC?&rdquo; and see household-level impacts across the US or UK in seconds.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">Who uses it</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              No. 10 Downing Street, NBER, Brookings, Congressional committees, state legislatures, benefits navigators, and the public.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">The team</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              ~10 people. Entirely software &mdash; unusual for a nonprofit. Everyone uses Claude Code or Codex daily. $20k+/week in AI coding tokens.
            </p>
          </div>
          <div className="rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
            <h3 className="font-mono text-lg font-bold mb-2">The core challenge</h3>
            <p className="text-base text-white/80 leading-relaxed">
              Encode thousands of policy rules &mdash; federal, state, and local statutes &mdash; as executable, tested, version-controlled code. By hand, this took years. With AI, we rethought everything.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
