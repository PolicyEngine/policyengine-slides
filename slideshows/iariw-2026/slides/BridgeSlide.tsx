import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sharedCraft = [
  {
    title: 'Encoded rules',
    detail: 'Tax and benefit law, written as code that computes.',
  },
  {
    title: 'A representative population',
    detail: 'Microdata that stands in for the country.',
  },
  {
    title: 'Validation',
    detail: 'Checks against what the state publishes.',
  },
];

export default function BridgeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Tom just showed you the platform</SlideTitle>
      </SlideHeader>

      <div className="mt-8 space-y-8">
        <p className="text-2xl text-gray-800 leading-relaxed max-w-5xl">
          BEAMM, EUROMOD, FPS Finance&apos;s models, PolicyEngine &mdash; the
          same craft, built by the same kind of people:
        </p>

        <div className="grid grid-cols-3 gap-5">
          {sharedCraft.map((c) => (
            <div key={c.title} className="content-card p-5">
              <h3 className="text-lg font-bold text-pe-dark mb-1">{c.title}</h3>
              <p className="text-base text-gray-700 leading-snug">{c.detail}</p>
            </div>
          ))}
        </div>

        <div className="accent-block max-w-5xl">
          <p className="text-xl text-gray-800 leading-relaxed">
            This talk is about where that stack is heading as AI joins the work
            &mdash; rules that carry their citations, populations calibrated to
            administrative totals, and verification that scales with the
            encoding. The code and the scoreboards are public.
          </p>
        </div>
      </div>
    </Slide>
  );
}
