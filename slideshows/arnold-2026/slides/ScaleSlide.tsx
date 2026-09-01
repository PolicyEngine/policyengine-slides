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

      <div className="mt-10 grid grid-cols-3 gap-6">
        <div className="content-card p-8 text-center">
          <div className="stat-number text-7xl text-pe-teal">~50k</div>
          <div className="text-xl font-semibold text-gray-800 mt-3">
            atomic projections a year
          </div>
          <div className="text-base text-gray-500 mt-2 leading-snug">
            CBO&apos;s baseline series-years plus bill-year-category estimate
            cells &mdash; extraordinary craft, carefully quality-controlled
          </div>
        </div>
        <div className="content-card p-8 text-center">
          <div className="stat-number text-7xl text-pe-teal">~1,000</div>
          <div className="text-xl font-semibold text-gray-800 mt-3">
            public cost estimates a year
          </div>
          <div className="text-base text-gray-500 mt-2 leading-snug">
            while each Congress introduces roughly 10,000 bills &mdash; an order
            of magnitude more proposals than ever receive a score
          </div>
        </div>
        <div className="content-card p-8 text-center">
          <div className="stat-number text-7xl text-pe-teal">&gt;300k</div>
          <div className="text-xl font-semibold text-gray-800 mt-3">
            cells, at minimum
          </div>
          <div className="text-base text-gray-500 mt-2 leading-snug">
            bills &times; years &times; headline categories, before
            section-level detail, interactions, or uncertainty
          </div>
        </div>
      </div>

      <div className="accent-block mt-10 max-w-5xl">
        <p className="text-xl text-gray-800 leading-relaxed">
          Legislatures could ask for orders of magnitude more scores than anyone
          can produce today. Closing that gap takes apparatus &mdash; encoded
          rules, calibrated data, verification that scales with both. That
          apparatus is what your grants have been building.
        </p>
      </div>
    </Slide>
  );
}
