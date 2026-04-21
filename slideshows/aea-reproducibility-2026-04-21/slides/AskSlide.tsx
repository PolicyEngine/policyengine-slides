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
            If a packet separately pins the rules bundle, the calibrated h5,
            and the run-level results TRO, is that enough for an AEA-style
            replication package without redistributing restricted raw
            microdata? If not, what is missing?
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
            Is the right transparency boundary the frozen calibrated h5 plus
            calibration log, or do we need more of the upstream imputation
            pipeline exposed before the packet feels scientifically legible?
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
