import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CraftScaledSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The craft, scaled</SlideTitle>
      </SlideHeader>

      <div className="mt-12 max-w-5xl space-y-10 text-left">
        <p className="text-4xl text-gray-900 leading-relaxed font-light">
          <span className="font-medium text-pe-teal">I love building models.</span>{' '}
          Structure, program rules, calibrated data, case studies that try to break the model, validation that catches when they do.
        </p>

        <div className="accent-block">
          <p className="text-2xl text-gray-700 leading-relaxed">
            That is the work CBO has done for decades. It is the work that makes policy consequences visible before the choice is made.
          </p>
        </div>

        <p className="text-2xl text-gray-800 leading-relaxed">
          What is changing: thousands, then millions, of agents can poke at every piece of that craft from every angle &mdash; at a scale no individual analyst can match.
        </p>

        <p className="text-2xl text-gray-600 italic leading-relaxed">
          What does that scale make possible, and what does it not change?
        </p>
      </div>
    </Slide>
  );
}
