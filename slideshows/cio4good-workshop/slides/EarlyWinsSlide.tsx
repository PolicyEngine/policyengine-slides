import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const wins = [
  {
    when: '2023',
    title: 'Automated research reports',
    desc: 'GPT-4 could read our model outputs and write a plain-language analysis of a policy reform — revenue impact, distributional effects, who wins and loses. Published directly on our site.',
    lesson: 'Even early LLMs could deconstruct complicated policy into patterns',
  },
  {
    when: '2023',
    title: 'Household explainer',
    desc: 'Given a household\'s situation, the AI walks through the math — why you\'re eligible, how the benefit phases out, which rules apply. Step-by-step, citing the statute.',
    lesson: 'Summarization and explanation were the first high-value uses',
  },
  {
    when: '2024',
    title: 'One-prompt coding',
    desc: 'We started asking Claude to implement individual policy rules from legislative text. Simple programs worked well. Complex ones didn\'t.',
    lesson: 'Useful for narrow tasks — but limits showed up fast at scale',
  },
];

export default function EarlyWinsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Before agents, simple LLMs already paid off</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {wins.map((w) => (
          <div key={w.title} className="border border-gray-200 rounded-xl p-6 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">{w.when}</p>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">{w.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed flex-1">{w.desc}</p>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-sm text-[var(--pe-teal)] font-semibold">{w.lesson}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pl-5 border-l-4 border-[var(--pe-teal)]">
        <p className="text-lg text-gray-600 leading-relaxed">
          Our first AI wins were simple and useful. We moved to multi-agent systems only when
          scale and reliability demanded it.
        </p>
      </div>
    </Slide>
  );
}
