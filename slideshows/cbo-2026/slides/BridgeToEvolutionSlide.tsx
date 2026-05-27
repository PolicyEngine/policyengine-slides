import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function BridgeToEvolutionSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>But it can help us encode them faster</SlideTitle>
      </SlideHeader>

      <div className="mt-12 max-w-5xl space-y-8">
        <p className="text-3xl text-gray-900 leading-relaxed font-light">
          AI can&apos;t accurately compute policy on its own.{' '}
          <span className="font-medium text-pe-teal">
            It can help us build the substrate that does.
          </span>
        </p>

        <div className="accent-block">
          <p className="text-2xl text-gray-800 leading-relaxed">
            Over the last three years we have evolved how AI assists with the
            encoding work itself &mdash; from a single prompt that often
            failed to a multi-agent pipeline that produces tested,
            citation-backed PRs.
          </p>
        </div>

        <p className="text-xl text-gray-600 leading-relaxed italic">
          Six stages of evolution, six lessons learned, one workflow we use
          today.
        </p>
      </div>
    </Slide>
  );
}
