import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ContextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine — quick context</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">What</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Open-source tax and benefit microsimulation. Model any reform and see household-level impacts in seconds.
            Used by No. 10 Downing Street, NBER, Brookings, and Congressional committees.
          </p>
        </div>
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">Who</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            ~10-person nonprofit. Entirely software — unusual for our sector. Everyone uses
            AI coding tools daily. $20k+/week in AI tokens.
          </p>
        </div>
        <div className="rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
          <h3 className="font-mono text-lg font-bold mb-2">The task</h3>
          <p className="text-base text-white/80 leading-relaxed">
            Encode thousands of policy rules — federal, state, local — as executable,
            tested code. This is the design challenge the next slides walk through.
          </p>
        </div>
      </div>
    </Slide>
  );
}
