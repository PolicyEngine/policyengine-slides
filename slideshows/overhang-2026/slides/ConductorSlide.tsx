import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** Closes the loop opened on the PolicyBench slide (slide 4), after the IARIW "Conductors, not oracles" beat. */
export default function ConductorSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>With the stack, the model routes instead of guessing</SlideTitle>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-2 gap-8">
        <div className="content-card p-6">
          <div className="slide-tag mb-3">Slide 4 · answering from memory</div>
          <p className="text-xl leading-relaxed text-gray-700">
            A model reads the household and answers from memory. The best scored{' '}
            <span className="font-semibold text-pe-dark">89.2%</span> without tools, against an answer key computed by PolicyEngine.
          </p>
          <p className="mt-4 text-lg italic text-gray-500">The failure mode PolicyBench measures.</p>
        </div>

        <div className="content-card p-6" style={{ borderLeftColor: 'var(--pe-amber)' }}>
          <div className="slide-tag mb-3" style={{ color: 'var(--pe-amber)' }}>Slides 6 to 11 · routing through the stack</div>
          <p className="text-xl leading-relaxed text-gray-700">
            The bill page routes one question through the stack: the rules supply the parameter, the model supplies the mechanism, and the IRS prints supply the base rate.
          </p>
          <p className="mt-4 text-lg italic text-gray-700">The agent’s judgment sits in named assumptions, and the print grades them.</p>
        </div>
      </div>

      <div className="accent-block mx-auto mt-4 max-w-5xl">
        <p className="text-xl leading-relaxed text-gray-700">
          Two claims sit on the same page: the model’s mechanism and the agent’s judgment. The grade on the second tells us which assumptions deserve to become mechanism.
        </p>
      </div>
    </Slide>
  );
}
