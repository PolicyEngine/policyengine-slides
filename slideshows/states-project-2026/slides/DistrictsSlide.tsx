import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DistrictsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What did that vote do to the people you represent?</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-500 -mt-4 mb-9">
        Reforms, broken down to the district — household by household
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="content-card p-8">
          <div className="slide-tag mb-4">New</div>
          <div className="text-3xl font-bold text-pe-dark mb-3">
            All 435 congressional districts
          </div>
          <p className="text-xl text-gray-600 leading-snug">
            A capability we just built, on enhanced microdata: take any federal reform and see its
            effect district by district, with demographic crosstabs.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50 p-8">
          <div className="mb-4 inline-flex items-center rounded-full bg-gray-200 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gray-600">
            The frontier
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-3">
            State legislative districts
          </div>
          <p className="text-xl text-gray-600 leading-snug">
            Not built yet — and the piece we&apos;d most like to build next: the same household-level
            view for state house and senate districts.
          </p>
        </div>
      </div>

      <p className="mt-9 text-2xl text-gray-600">
        The goal: show, household by household, what a state legislator&apos;s vote would do to the
        people they represent.
      </p>
    </Slide>
  );
}
