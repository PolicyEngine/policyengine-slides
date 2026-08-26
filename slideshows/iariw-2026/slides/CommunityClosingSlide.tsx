import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CommunityClosingSlide() {
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
          AI lets this community produce more evidence &mdash; at more scale,
          more conditionally, more calibrated against what governments publish.
        </p>

        <div className="accent-block">
          <p className="text-2xl text-gray-800 leading-relaxed">
            The work is not choosing the policy.
          </p>
          <p className="text-2xl text-gray-800 leading-relaxed mt-2">
            The work is knowing what each policy will actually do &mdash; so
            the people who do choose can align outcomes with what they are
            trying to achieve.
          </p>
        </div>

        <p className="text-2xl text-pe-teal leading-relaxed font-medium">
          Statistical offices, EUROMOD, BEAMM, ministries, open models &mdash;
          each piece, doing what it does best.
        </p>

        <p className="text-xl text-gray-600 italic">
          It is the work of a community, not any one institution.
        </p>
      </div>
    </Slide>
  );
}
