import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function TwoAIConversationsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Two AI conversations, kept distinct</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-2 gap-8">
        <div className="content-card p-8">
          <div className="slide-tag mb-4">AI as economic force</div>
          <p className="text-2xl text-gray-800 leading-relaxed">
            Earnings distributions, labor versus capital share, tax base composition, long-run social security questions.
          </p>
          <p className="text-xl text-gray-500 mt-4 italic">Worth naming. Not the focus today.</p>
        </div>

        <div className="content-card p-8">
          <div className="slide-tag mb-4">AI as modeling tool</div>
          <p className="text-2xl text-gray-800 leading-relaxed">
            Encoding statutes, generating tests, refactoring infrastructure, building interactives, accelerating quality control.
          </p>
          <p className="text-xl text-pe-teal mt-4 font-medium">This is the focus.</p>
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto accent-block">
        <p className="text-xl text-gray-700 leading-relaxed">
          <span className="font-medium">Where they connect:</span> anyone &mdash; economists or otherwise &mdash; who uses the latest coding agents regularly tends to shift their view of how fast AI is progressing, especially when they experience each generation&apos;s improvements in real time. Reading about the tools does not produce the same update.
        </p>
      </div>
    </Slide>
  );
}
