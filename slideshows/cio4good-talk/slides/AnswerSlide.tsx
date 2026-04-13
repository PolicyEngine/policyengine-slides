import Slide from '@/components/core/Slide';

export default function AnswerSlide() {
  return (
    <Slide>
      <div className="flex gap-10 h-full items-stretch mt-4">
        <div className="w-3/5 flex flex-col gap-5">
          <div
            className="rounded-xl p-8 text-white flex-1 flex flex-col justify-center"
            style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">
              Our answer at PolicyEngine
            </p>
            <div className="space-y-5">
              {[
                'Mission: democratize policy analysis — open what was locked behind proprietary models',
                'AI kept expanding what was possible — more policies, faster, for more people',
                'Now: what if every policy were computable? That forced us to rethink our org',
                'I personally use $60K/week in AI coding agents — 10-person team',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[var(--pe-teal)] font-bold mt-0.5 flex-shrink-0">
                    &#8594;
                  </span>
                  <p className="text-lg text-white/85 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-2/5 flex flex-col justify-center">
          <div className="pl-6 border-l-4 border-[var(--pe-teal)]">
            <p className="text-2xl text-gray-600 leading-relaxed">
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
