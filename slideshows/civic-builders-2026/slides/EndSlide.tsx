import Slide from '@/components/core/Slide';

export default function EndSlide() {
  return (
    <Slide isEnd>
      <h1 className="font-display text-6xl font-bold mb-4 text-center">Thank you</h1>

      <p className="text-2xl opacity-80 mb-8 text-center">
        Find me in the breakouts &mdash; let&apos;s build on shared rules.
      </p>

      <div className="opacity-70 text-center space-y-3">
        <p className="text-2xl font-semibold">policyengine.org</p>
        <p className="text-lg">github.com/PolicyEngine</p>
        <p className="text-lg">max@policyengine.org</p>
      </div>
    </Slide>
  );
}
