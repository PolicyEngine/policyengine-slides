import Slide from '@/components/core/Slide';

export default function OpeningSlide() {
  return (
    <Slide>
      <div className="flex gap-10 h-full items-stretch mt-4">
        {/* Left: the hook */}
        <div className="w-1/2 flex flex-col justify-center">
          <p className="text-3xl text-gray-700 leading-snug italic">
            &ldquo;Think about why you chose your organization over a corporate job, a government job,
            another nonprofit.&rdquo;
          </p>
          <p className="text-3xl text-gray-800 font-semibold leading-snug mt-6">
            You&apos;re here because the mission matters.
          </p>
        </div>

        {/* Right: the provocation */}
        <div className="w-1/2 flex flex-col gap-4">
          <div className="rounded-xl p-7 text-white flex-1" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
            <h3 className="font-mono text-xl font-bold mb-5 leading-snug">
              Now — have you updated your ambitions to match what&apos;s possible?
            </h3>
            <div className="space-y-3">
              {[
                'Our mission: make every public policy in the world computable',
                '10-person team, $60K/week in AI coding agents',
                '#1 globally on Straude by 6× — next closest is ~$10K/week',
                'Encoding tax and benefit rules across dozens of jurisdictions at a pace that would have required 50 engineers two years ago',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[var(--pe-teal)] font-bold mt-0.5 flex-shrink-0">&#8594;</span>
                  <p className="text-base text-white/85 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pl-5 border-l-4 border-[var(--pe-teal)]">
            <p className="text-base text-gray-600 leading-relaxed">
              This talk is about the <strong className="text-gray-800">organizational decisions</strong> that
              made it possible — not the technology.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
