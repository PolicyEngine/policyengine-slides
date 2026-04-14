import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const milestones = [
  {
    year: '2022',
    tool: 'GitHub Copilot',
    what: 'Autocomplete for policy logic — faster boilerplate, but no real understanding of the domain.',
  },
  {
    year: '2023',
    tool: 'ChatGPT',
    what: 'Copy-paste workflow: paste a block of model output into ChatGPT, ask it to analyze. Useful but manual and disconnected.',
  },
  {
    year: '2023',
    tool: 'GPT-4',
    what: 'A step change in accuracy. We could paste our microsimulation results and get analysis that would have been genuinely hard to produce otherwise.',
  },
];

export default function CodingEraSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How it started: AI as a coding and analysis assistant</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col gap-5 mt-6">
        {milestones.map((m, i) => (
          <div key={m.tool} className="flex items-start gap-5">
            <div className="flex-shrink-0 w-20 pt-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">{m.year}</p>
            </div>
            <div
              className={`flex-1 rounded-xl p-5 ${
                i === milestones.length - 1
                  ? 'text-white'
                  : 'border border-gray-200'
              }`}
              style={
                i === milestones.length - 1
                  ? { background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }
                  : undefined
              }
            >
              <h3
                className={`font-mono text-lg font-bold mb-2 ${
                  i === milestones.length - 1 ? 'text-white' : 'text-gray-800'
                }`}
              >
                {m.tool}
              </h3>
              <p
                className={`text-base leading-relaxed ${
                  i === milestones.length - 1 ? 'text-white/80' : 'text-gray-600'
                }`}
              >
                {m.what}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pl-5 border-l-4 border-[var(--pe-teal)]">
        <p className="text-lg text-gray-600 leading-relaxed">
          At this point we were using AI <strong className="text-gray-800">alongside</strong> our
          work — not embedded in it. The question was: could we put this inside the product?
        </p>
      </div>
    </Slide>
  );
}
