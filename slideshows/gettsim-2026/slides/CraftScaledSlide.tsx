import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import {
  IconGavel,
  IconDatabase,
  IconFlask,
  IconShieldCheck,
} from '@tabler/icons-react';

const craft = [
  {
    icon: IconGavel,
    title: 'Rules',
    detail: 'encoded from the statute',
  },
  {
    icon: IconDatabase,
    title: 'Data',
    detail: 'calibrated to what agencies publish',
  },
  {
    icon: IconFlask,
    title: 'Case studies',
    detail: 'that try to break the model',
  },
  {
    icon: IconShieldCheck,
    title: 'Validation',
    detail: 'that catches when it does',
  },
];

export default function CraftScaledSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The craft, scaled</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-800 leading-relaxed">
        Building tax-benefit models has always been:
      </p>

      <div className="mt-5 grid grid-cols-4 gap-5">
        {craft.map((c) => (
          <div key={c.title} className="content-card p-6 flex flex-col">
            <c.icon size={40} stroke={1.5} className="text-pe-teal" />
            <h3 className="text-2xl font-bold text-pe-dark mt-4">{c.title}</h3>
            <p className="text-lg text-gray-700 leading-snug mt-1">
              {c.detail}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-6 rounded-2xl px-9 py-6 text-white"
        style={{
          background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
        }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-2">
          What changes
        </p>
        <p className="text-2xl leading-relaxed font-light">
          Thousands of AI agents can now poke at every piece of that craft
          (encoding, testing, cross-checking) at a scale no
          individual analyst can match.
        </p>
      </div>

      <div className="accent-block mt-6">
        <p className="text-xl text-gray-800 leading-relaxed">
          The question for this talk: what does that scale make possible,
          and how do we keep the output verifiable?
        </p>
      </div>
    </Slide>
  );
}
