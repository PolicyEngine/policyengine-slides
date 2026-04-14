import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function StrategicImplicationsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          You just designed a skill. Now let&apos;s talk about what happens when it works.
        </SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {[
          {
            question: 'What changes about your org?',
            detail:
              'AI success creates strategy pressure. Once work gets cheaper and faster, you have to decide: do the same mission better, or attempt a larger one.',
          },
          {
            question: 'What can AI not do alone?',
            detail:
              'Some tasks need deterministic infrastructure, not just predictions. Knowing where the fault lines are is how you avoid building on sand.',
          },
          {
            question: 'How do you lead through the divergence?',
            detail:
              'Some people will run with AI. Some won\u2019t. That split tells you something important about roles, culture, and what the CIO job actually is now.',
          },
        ].map((item) => (
          <div
            key={item.question}
            className="rounded-xl p-7 text-white flex flex-col"
            style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
          >
            <h3 className="text-xl font-bold mb-4 leading-tight">{item.question}</h3>
            <p className="text-base text-white/80 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 pl-5 border-l-4 border-[var(--pe-teal)]">
        <p className="text-xl text-gray-700 leading-relaxed">
          This morning I asked whether you&apos;d updated your ambitions to match what&apos;s possible.
          Here&apos;s what happened when we did.
        </p>
      </div>
    </Slide>
  );
}
