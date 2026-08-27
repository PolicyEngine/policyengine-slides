import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const layers = [
  {
    title: 'Encoded the rules',
    detail:
      'US and UK tax and benefit law — by hand at first, increasingly with AI.',
  },
  {
    title: 'Built the microdata',
    detail:
      'Imputed across surveys and administrative sources, calibrated to official statistics.',
  },
  {
    title: 'Ran the simulations',
    detail: 'Households to full populations, baseline against reform.',
  },
  {
    title: 'Shipped the web app',
    detail:
      'Where people explore it — still there, no longer the center of gravity.',
  },
];

export default function HistorySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Six years under one roof</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[1.05fr_0.95fr] gap-10 items-start">
        <div className="space-y-4">
          <p className="text-2xl text-gray-800 leading-relaxed">
            This paradigm comes out of building PolicyEngine since 2021 &mdash;
            the first four primitives, together, under one brand:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {layers.map((l) => (
              <div key={l.title} className="content-card p-4">
                <h3 className="text-base font-bold text-pe-dark mb-1">
                  {l.title}
                </h3>
                <p className="text-sm text-gray-700 leading-snug">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl p-7 text-white flex flex-col gap-4"
          style={{
            background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal">
            The realization
          </p>
          <p className="text-xl leading-relaxed font-light">
            Each layer deserves to stand on its own &mdash; with its own name,
            its own users, and its own feedback loop.
          </p>
          <p className="text-lg leading-relaxed text-white/85">
            So the rules layer became the Axiom Foundation, the fact store
            became Chronicle, the population layer became Microcosm &mdash;
            and PolicyEngine is the model that composes them.
          </p>
        </div>
      </div>
    </Slide>
  );
}
