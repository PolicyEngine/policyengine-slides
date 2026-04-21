import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const wins = [
  {
    year: '2023',
    title: 'Policy analysis report generation',
    takeaway: 'Turned a reform output into a readable report with narrative and charts.',
    detail:
      'The analysis product generated a first-pass writeup of budget, distribution, and poverty impacts, then embedded the same charts the microsimulation produced.',
    image: '/screenshots/policy-analysis-report.png',
    width: 1600,
    height: 915,
  },
  {
    year: '2024',
    title: 'Household benefit explainer',
    takeaway: 'Made eligibility logic legible to real users, not just policy staff.',
    detail:
      'Claude translated intermediate calculations into plain language so a household could see why it qualified and what would change the result.',
    image: '/screenshots/household-ai-explainer.gif',
    width: 1000,
    height: 548,
  },
];

export default function EarlyWinsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Before agents, simple LLM features were already useful</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-2">
        {wins.map((w) => (
          <div key={w.title} className="content-card overflow-hidden">
            <div className="border-b border-gray-100 bg-slate-50">
              <Image
                src={w.image}
                alt={w.title}
                width={w.width}
                height={w.height}
                className="w-full h-[16.5rem] object-cover object-top"
                priority
              />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <p className="slide-tag">{w.year}</p>
                <p className="text-sm font-medium text-gray-400">Shipped in production</p>
              </div>
              <div>
                <h3 className="font-mono text-xl font-bold text-gray-800 mb-2">{w.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{w.takeaway}</p>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">{w.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #1d4044 0%, #17343a 100%)' }}>
        <p className="text-lg text-white/85 leading-relaxed">
          <span className="text-[var(--pe-teal)] font-semibold">The pattern:</span>{' '}
          explanation was the first high-value use. We only moved to multi-agent systems once the job
          changed from <strong className="text-white">explaining results</strong> to{' '}
          <strong className="text-white">producing reliable, deterministic code at scale</strong>.
        </p>
      </div>
    </Slide>
  );
}
