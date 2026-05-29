import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ScaleOpportunitySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What if every bill had a score?</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div className="content-card p-10 text-center">
          <div className="stat-number text-7xl text-pe-teal">&gt;300k</div>
          <p className="text-2xl font-semibold text-gray-800 mt-3">
            minimum bill-year-category cells
          </p>
          <p className="text-base text-gray-500 mt-4 leading-snug">
            ~10k bills per Congress x 10 years x 3 headline budget categories.
          </p>
        </div>

        <div className="space-y-5">
          <p className="text-2xl text-gray-800 leading-relaxed">
            CBO publicly estimates the budget-relevant share. But Congress
            introduces an order of magnitude more proposals than become formal
            public cost estimates.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="content-card p-4 text-center">
              <div className="font-mono text-3xl font-bold text-pe-teal">
                ~10k
              </div>
              <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                Bills
              </div>
            </div>
            <div className="content-card p-4 text-center">
              <div className="font-mono text-3xl font-bold text-pe-teal">
                10
              </div>
              <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                Years
              </div>
            </div>
            <div className="content-card p-4 text-center">
              <div className="font-mono text-3xl font-bold text-pe-teal">
                3+
              </div>
              <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                Categories
              </div>
            </div>
          </div>

          <div className="accent-block">
            <p className="text-xl text-gray-800 leading-relaxed">
              The lower bound is already hundreds of thousands of atomic
              estimates before section-level detail, interactions, uncertainty,
              or alternative implementation assumptions.
            </p>
          </div>

          <p className="text-sm text-gray-500 italic leading-snug">
            This is not a claim that every bill deserves a formal score. It is a
            scale check on the information Congress could ask for.
          </p>
        </div>
      </div>
    </Slide>
  );
}
