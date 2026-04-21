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
            Is the TRO + pinned-version chain enough for an AEA replication
            packet today? What would you want added? We would be glad to
            contribute a microsim-specific packet template if one is useful.
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold text-pe-dark mb-2">For Tara</div>
          <div className="text-gray-700">
            Your EITC reform analysis can already be published as a frozen TRO
            &mdash; against the exact us-data 1.78.2 h5 with the new SOI TY2022
            calibration targets. What would make the citation feel durable
            enough to put in a Brookings working paper?
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold text-pe-dark mb-2">For John</div>
          <div className="text-gray-700">
            SCF net worth, auto loan balance, and auto loan interest are imputed
            onto the stratified CPS via QRF with a seeded predictor list. Should
            we expose the QRF seed + predictor provenance in the TRO so SCF work
            is first-class citable?
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold text-pe-dark mb-2">For Pavel</div>
          <div className="text-gray-700">
            Which app integration surface do we build first: the
            &ldquo;cite this result&rdquo; export, the version badge, or the
            replicate-in-Colab button?
          </div>
        </div>
      </div>
    </Slide>
  );
}
