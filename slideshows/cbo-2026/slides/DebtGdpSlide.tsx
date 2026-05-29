import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DebtGdpSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Marking the boundary explicitly</SlideTitle>
      </SlideHeader>

      <div className="mt-12 grid grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div className="content-card p-10 text-center">
          <div className="stat-number text-8xl text-pe-teal">250%</div>
          <p className="text-xl text-gray-700 mt-3 leading-relaxed">
            CBO does not report debt/GDP beyond this point in long-run projections.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-2xl text-gray-800 leading-relaxed">
            The model can mechanically produce a number. CBO refuses to report it, because the embedded relationships were calibrated on history under ~100% debt/GDP.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            This is an honest, simple convention for handling out-of-domain extrapolation. It is exactly the right craft.
          </p>
          <div className="accent-block">
            <p className="text-lg text-gray-700 leading-relaxed">
              The shared question: how should we mark domain boundaries on microsim outputs? When a reform multiplies a program 5x, when an elasticity model is extrapolated past its training range &mdash; what is the analog?
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
