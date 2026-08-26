import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CalibrationSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Calibration: matching administrative totals</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <div className="slide-tag mb-2">The method</div>
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="font-semibold">Gradient descent</span> over
              household weights, optimizing simultaneously against published
              administrative targets &mdash; tax authority tables, statistical
              office series, census tabulations, program totals.
            </p>
          </div>

          <div>
            <div className="slide-tag mb-2">Why it works</div>
            <p className="text-base text-gray-700 leading-relaxed">
              When the optimizer fits all targets at once, the resulting
              weights reproduce the cross-tabulations ministries and
              statistical offices already publish &mdash; while preserving the
              joint distribution the microdata carries.
            </p>
          </div>
        </div>

        <div className="content-card p-6">
          <div className="slide-tag mb-3">Where AI changes this layer</div>
          <ul className="space-y-3 text-base text-gray-700 leading-snug">
            <li className="flex gap-3">
              <span className="text-pe-teal font-bold flex-shrink-0">·</span>
              <span>
                <span className="font-semibold">Target ingestion.</span>{' '}
                Agents read statistical releases, tax authority tables, and
                ministry PDFs and pull numbers into a canonical target format,
                keeping pace as publications land.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pe-teal font-bold flex-shrink-0">·</span>
              <span>
                <span className="font-semibold">Schema reconciliation.</span>{' '}
                When definitions change between releases, agents surface the
                diff before it silently miscalibrates the model.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pe-teal font-bold flex-shrink-0">·</span>
              <span>
                <span className="font-semibold">Promotion decisions.</span>{' '}
                The agent proposes which targets to add; analysts decide
                which ones go into the live calibration and which stay in
                reserve.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-7 text-sm text-gray-500 italic text-center max-w-4xl mx-auto">
        Same calibration discipline. Many more targets, much faster turn,
        humans on the judgment calls.
      </p>
    </Slide>
  );
}
