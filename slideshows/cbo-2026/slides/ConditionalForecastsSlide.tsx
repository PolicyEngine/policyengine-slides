import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ConditionalForecastsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>One direction this is heading: conditional forecasts at scale</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-[1.2fr_0.8fr] gap-10">
        <div className="space-y-6">
          <div>
            <div className="slide-tag mb-2">The shape</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              Calibrated forecasts on public government data &mdash; BLS, BEA, Census, SOI, CBO baselines &mdash; and on specific policy parameters, produced and updated by whichever institutions are best positioned to do so.
            </p>
          </div>

          <div>
            <div className="slide-tag mb-2">Conditional structure</div>
            <p className="text-xl text-gray-800 leading-relaxed font-mono">
              given <span className="text-pe-teal">policy state X</span>, what is <span className="text-pe-amber">outcome Y</span> at time T?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-3">
              Each model runs only inside its domain of validity. The conditional form gives policymakers what a lookup table cannot, without anyone forcing a model into a regime it cannot stand behind.
            </p>
          </div>

          <div>
            <div className="slide-tag mb-2">The discipline</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              Resolution against reality on every publication. Calibration tracked openly. Honest about what each model can and cannot say.
            </p>
          </div>
        </div>

        <div className="content-card p-8">
          <h3 className="text-lg font-bold text-pe-dark mb-3">Example questions</h3>
          <ul className="space-y-3 text-base text-gray-700 leading-relaxed">
            <li>Given a tax reform passes by Q2, what is FY28 individual income tax revenue?</li>
            <li>Given the CTC indexes to inflation, what is the 2030 official child poverty rate?</li>
            <li>Given SNAP work-requirement age rises to 60, what is SNAP enrollment by state in 2027?</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
