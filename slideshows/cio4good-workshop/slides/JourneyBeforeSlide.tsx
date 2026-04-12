import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function JourneyBeforeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How it started: one AI, one big ask</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-6">
        <div className="flex flex-col gap-5">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">The experiment</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              One AI, one statute, one ask: <em>&ldquo;Read this welfare law and write all the code
              to implement it.&rdquo;</em>
            </p>
            <p className="text-base text-gray-600 leading-relaxed mt-3">
              Sounds simple. And the AI produced something. It just wasn&apos;t reliable.
            </p>
          </div>

          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">The analogy</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Like handing a new hire a 500-page regulations binder on Monday and asking for
              perfect, tested code by Tuesday. Impressive effort. Not production-ready.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-7xl font-black text-red-500 font-mono leading-none">70%</span>
            <div>
              <p className="text-2xl font-bold text-gray-800">of outputs had errors</p>
              <p className="text-base text-gray-500">Missing values, wrong citations, inconsistent code</p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              'Made up tax rates that weren\'t in the law',
              'Ignored edge cases and eligibility exceptions',
              'No citations back to source text',
              'Inconsistent patterns across different programs',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">&#10007;</span>
                <span className="text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-2 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 font-semibold text-base">
              The AI could do each piece. It couldn&apos;t hold the entire task at once — code standards,
              legal requirements, testing patterns, citation rules. Too much to track in one pass.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
