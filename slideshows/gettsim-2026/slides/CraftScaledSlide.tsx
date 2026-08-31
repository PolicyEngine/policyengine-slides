import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const craft = [
  'Program rules, encoded from the statute',
  'Data calibrated to what agencies publish',
  'Case studies that try to break the model',
  'Validation that catches when it does',
];

export default function CraftScaledSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The craft, scaled</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[1fr_1.1fr] gap-10 items-start">
        <div className="space-y-4">
          <p className="text-2xl text-gray-800 leading-relaxed">
            Building tax-benefit models has always been:
          </p>
          <ul className="space-y-3">
            {craft.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-pe-teal text-xl leading-7">&#9642;</span>
                <span className="text-xl text-gray-700 leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div
            className="rounded-xl p-7 text-white"
            style={{
              background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-3">
              What changes
            </p>
            <p className="text-xl leading-relaxed font-light">
              Thousands of AI agents can now poke at every piece of that craft
              &mdash; encoding, testing, cross-checking &mdash; at a scale no
              individual analyst can match.
            </p>
          </div>

          <div className="accent-block">
            <p className="text-lg text-gray-800 leading-relaxed">
              The question for this talk: what does that scale make possible
              &mdash; and how do we keep the output verifiable?
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
