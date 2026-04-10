import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CaseStudySlide() {
  return (
    <Slide>
      <SlideHeader>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-1">Case study</p>
        <SlideTitle>No. 10 needed to model a universal basic income — in days, not months</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          From &ldquo;we can&rsquo;t answer this&rdquo; to real-time policy scoring for the Prime Minister&rsquo;s office.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {[
          {
            label: 'The problem',
            desc: "Existing UK government models took weeks to score a proposal and couldn't handle novel designs. No. 10 needed rapid, transparent analysis to advise on policy options during live negotiations.",
          },
          {
            label: 'What we did',
            desc: "We encoded 100+ UK tax and benefit rules as open-source, version-controlled code. No. 10 analysts ran scenarios directly — adjusting parameters, seeing distributional results in seconds, no Python required.",
          },
          {
            label: 'The result',
            desc: "PolicyEngine UK is now used regularly for analytical advice to the PM. No. 10 has begun integrating it with macroeconomic models. The same platform serves researchers, think tanks, and the public.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-3">{item.label}</p>
            <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
