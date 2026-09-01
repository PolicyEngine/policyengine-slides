import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

/** The scorekeeper-scale hook, condensed from the IARIW deck. */
export default function ScaleSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The scale of the scoring problem</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-4 gap-5">
        <div className="content-card p-6 text-center">
          <div className="stat-number text-6xl text-pe-teal">~50k</div>
          <div className="text-lg font-semibold text-gray-800 mt-3">
            projections a year today
          </div>
          <div className="text-sm text-gray-500 mt-2 leading-snug">
            CBO&apos;s baseline series-years plus bill-year-category estimate
            cells, and about 1,000 public cost estimates &mdash; extraordinary
            craft, carefully quality-controlled
          </div>
        </div>
        <div className="content-card p-6 text-center">
          <div className="stat-number text-6xl text-pe-teal">&gt;300k</div>
          <div className="text-lg font-semibold text-gray-800 mt-3">
            if every bill had a score
          </div>
          <div className="text-sm text-gray-500 mt-2 leading-snug">
            ~10,000 bills a Congress &times; 10 years &times; 3 budget
            categories, as the floor &mdash; an order of magnitude more
            proposals than ever get a formal public score
          </div>
        </div>
        <div className="content-card p-6 text-center">
          <div className="stat-number text-6xl text-pe-teal">&gt;10m</div>
          <div className="text-lg font-semibold text-gray-800 mt-3">
            if every outcome had an estimate
          </div>
          <div className="text-sm text-gray-500 mt-2 leading-snug">
            a fiscal score is one number; policy also moves poverty, inequality,
            regions, take-up &mdash; a million public statistical cells &times;
            a 10-year horizon, before uncertainty bands
          </div>
        </div>
        <div className="content-card p-6 text-center border-pe-teal">
          <div className="stat-number text-6xl text-pe-teal">&gt;100b</div>
          <div className="text-lg font-semibold text-gray-800 mt-3">
            if you cross them
          </div>
          <div className="text-sm text-gray-500 mt-2 leading-snug">
            bill &times; statistic &times; year cells &mdash; the hard question
            is which deserve estimates, which deserve bands, and which are out
            of domain
          </div>
        </div>
      </div>

      <div className="accent-block mt-8 max-w-5xl">
        <p className="text-xl text-gray-800 leading-relaxed">
          Democracy decides what to value; at this scale it can search the
          design space for the policies that best move the indicators it named,
          and grade every prediction against reality. Getting there takes
          apparatus &mdash; encoded rules, calibrated data, verification that
          scales with both. That apparatus is what your grants have been
          building.
        </p>
      </div>
    </Slide>
  );
}
