import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function OpeningSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine&apos;s AI design journey</SlideTitle>
        <p className="text-xl text-gray-600 mt-1">
          How a 10-person nonprofit went from copy-paste to a 100-agent pipeline
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">Who we are</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Open-source nonprofit. We build tax and benefit simulations — model any policy reform
            and see household-level impacts instantly. Used by No.&nbsp;10 Downing Street, Brookings,
            and Congressional committees.
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">Our constraint</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            ~10 people. Entirely software. No large data team. Thousands of federal and state
            policy rules — each one needing to be turned into working, tested, citable code.
          </p>
        </div>

        <div className="rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
          <h3 className="font-mono text-lg font-bold mb-2">The question we asked</h3>
          <p className="text-base text-white/80 leading-relaxed">
            Can AI do this work reliably? And if so, what does the <em>organization</em> around that AI
            need to look like? That is what the next few slides are about.
          </p>
        </div>
      </div>

      <div className="mt-6 pl-5 border-l-4 border-[var(--pe-teal)]">
        <p className="text-lg text-gray-700">
          <strong>Spoiler:</strong> yes — but only once we stopped treating AI like a magic search engine
          and started designing the work around it.
        </p>
      </div>
    </Slide>
  );
}
