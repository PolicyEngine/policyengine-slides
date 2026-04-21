import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function AskSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Discussion</SlideTitle>
      </SlideHeader>
      <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-8 text-lg leading-relaxed">
        <div>
          <div className="text-xl font-semibold text-pe-dark mb-2">For Lars</div>
          <div className="text-gray-700">
            The split maps onto AEA's own code + data vocabulary: rules bundle
            is the code, calibrated h5 is the data, run-level TRO is the
            citation that binds them. If a packet separately pins all three
            without redistributing restricted raw inputs, is that enough for
            an AEA replication package? If not, what is missing?
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold text-pe-dark mb-2">For Tara</div>
          <div className="text-gray-700">
            When a Brookings estimate moves six months later, what evidence do
            you need to see in order to trust the answer to “rules changed,
            microdata changed, or both?” That is the user test for this whole
            architecture.
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold text-pe-dark mb-2">For John</div>
          <div className="text-gray-700">
            Should the default citation ship the full per-household weighted
            simulation frame, not just the paper's aggregates? That turns any
            downstream researcher's custom split (state &times; child count,
            income deciles, a variable not in the paper) into re-aggregation
            rather than a rerun. What else does the artifact need to be
            scientifically legible?
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold text-pe-dark mb-2">For Pavel</div>
          <div className="text-gray-700">
            Which app surface should come first: the
            &ldquo;cite this result&rdquo; export, the rules-vs-data version
            badge, or the diff view that explains why a result changed?
          </div>
        </div>
      </div>
    </Slide>
  );
}
