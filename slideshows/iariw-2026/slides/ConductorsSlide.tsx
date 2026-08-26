import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ConductorsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Conductors, not oracles</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-2 gap-8">
        <div className="content-card p-8">
          <div className="slide-tag mb-3">Oracle (the wrong frame)</div>
          <p className="text-xl text-gray-700 leading-relaxed">
            An LLM absorbs text and emits text. Confidently. Without calling
            the models that would actually answer the question.
          </p>
          <p className="text-lg text-gray-500 italic mt-4">
            This is the failure mode PolicyBench measures.
          </p>
        </div>

        <div
          className="content-card p-8"
          style={{ borderLeftColor: 'var(--pe-amber)' }}
        >
          <div className="slide-tag mb-3" style={{ color: 'var(--pe-amber)' }}>
            Conductor (the right frame)
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            The model routes a question to the right tool &mdash; microsim,
            structural model, statistical method, archival lookup &mdash; with
            parameters, and integrates calibrated outputs.
          </p>
          <p className="text-lg text-gray-700 italic mt-4">
            Analyst judgment lives at every routing decision.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto accent-block">
        <p className="text-xl text-gray-700 leading-relaxed">
          <span className="font-medium">The judgment-to-mechanism loop:</span>{' '}
          where LLM judgment captures something current models miss, that
          judgment eventually gets formalized into the next generation of
          models. Analyst intuition becomes mechanism over time &mdash; not the
          other way around.
        </p>
      </div>
    </Slide>
  );
}
