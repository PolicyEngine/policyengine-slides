import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ParamVsModelSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Parameter uncertainty versus model uncertainty</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-2 gap-8">
        <div className="content-card p-8">
          <div className="slide-tag mb-3">Parameter uncertainty</div>
          <p className="text-2xl text-gray-800 leading-relaxed mb-4">
            Confidence intervals on inputs propagate to confidence intervals on outputs.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Standard machinery: Monte Carlo, fan charts, parametric sensitivity.
          </p>
        </div>

        <div className="content-card p-8">
          <div className="slide-tag mb-3">Model uncertainty</div>
          <p className="text-2xl text-gray-800 leading-relaxed mb-4">
            The structural relationships in the model may no longer hold in the regime being asked about.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Harder to put a number on. Often more important.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto accent-block">
        <p className="text-xl text-gray-700 leading-relaxed">
          <span className="font-medium">A more useful lens:</span> domains of validity. A model is a function with a region where its behavior is empirically grounded. Outside that region, mechanical extrapolation is the issue &mdash; not the model class.
        </p>
      </div>
    </Slide>
  );
}
