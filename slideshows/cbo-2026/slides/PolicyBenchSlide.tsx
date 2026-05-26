import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function PolicyBenchSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What AI cannot do today</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="slide-tag mb-4">PolicyBench (in preparation)</div>
          <p className="text-3xl text-gray-800 leading-relaxed">
            We evaluate leading models on basic tax-and-transfer calculations &mdash; the building blocks of any microsim.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mt-6">
            The point: AI is impressive at code, search, and summarization. It is{' '}
            <span className="font-medium text-gray-900">not</span> a substitute for analyst judgment, institutional knowledge, or quality-control processes.
          </p>
        </div>

        <div className="content-card p-10 text-center">
          <div className="stat-number text-7xl text-pe-teal">1 in 3</div>
          <p className="text-xl text-gray-700 mt-2">to</p>
          <div className="stat-number text-7xl text-pe-teal">1 in 7</div>
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            basic tax-and-transfer calculations frontier models get wrong, depending on the measure.
          </p>
        </div>
      </div>
    </Slide>
  );
}
