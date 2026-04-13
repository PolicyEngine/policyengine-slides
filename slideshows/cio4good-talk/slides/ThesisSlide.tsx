import Slide from '@/components/core/Slide';

export default function ThesisSlide() {
  return (
    <Slide>
      <div className="flex gap-10 h-full items-stretch mt-4">
        {/* Left: the hook */}
        <div className="w-1/2 flex flex-col justify-center space-y-6">
          <p className="text-3xl text-gray-700 leading-snug italic">
            &ldquo;Think about why you chose your organization over a corporate
            job, a government job, another nonprofit.&rdquo;
          </p>
          <p className="text-3xl text-gray-800 font-semibold leading-snug">
            You&apos;re here because the mission matters to you.
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Now &mdash; have you updated your ambitions to match what&apos;s
            possible?
          </p>
        </div>

        {/* Right: PolicyEngine as proof */}
        <div className="w-1/2 flex flex-col gap-5">
          <div
            className="rounded-xl p-7 text-white flex-1 flex flex-col justify-between"
            style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Our answer at PolicyEngine
            </p>
            <div className="space-y-4">
              {[
                'Mission: make every public policy in the world computable',
                '10-person team — the mission is impossible at human scale',
                'AI made it not insane to try',
                '$60K/week in coding agents; #1 globally on Straude by 6×',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[var(--pe-teal)] font-bold mt-0.5 flex-shrink-0">
                    &#8594;
                  </span>
                  <p className="text-base text-white/85 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pl-5 border-l-4 border-[var(--pe-teal)]">
            <p className="text-base text-gray-600 leading-relaxed">
              I want to talk about the{' '}
              <strong className="text-gray-800">organizational decisions</strong>{' '}
              that made it possible &mdash; not the technology.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
