import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ClosingSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>It takes all of us</SlideTitle>
      </SlideHeader>

      <div className="mt-12 max-w-5xl space-y-10">
        <p className="text-3xl text-gray-900 leading-relaxed font-light">
          Model-building has always been about making the consequences of
          policy visible before the choice is made.
        </p>

        <p className="text-3xl text-gray-900 leading-relaxed font-light">
          AI lets this community encode more law, faster &mdash; and the
          harness is what keeps the speed honest.
        </p>

        <div className="accent-block">
          <p className="text-2xl text-gray-800 leading-relaxed">
            Every rule citing its statute. Every engine checked against its
            peers. Every dataset graded against what agencies publish.
          </p>
        </div>

        <p className="text-2xl text-pe-teal leading-relaxed font-medium">
          GETTSIM, EUROMOD, statistical offices, open models &mdash; each
          piece, doing what it does best, cross-checking the others.
        </p>

        <p className="text-xl text-gray-600 italic">
          It is the work of a community, not any one institution.
        </p>
      </div>
    </Slide>
  );
}
