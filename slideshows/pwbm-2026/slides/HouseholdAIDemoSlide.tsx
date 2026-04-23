import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const moments = [
  {
    year: 'March 2023',
    title: 'AI-generated policy analysis reports',
    image: '/screenshots/policy-analysis-report.png',
    alt: 'AI-generated policy analysis report in PolicyEngine',
    body:
      'The user models a reform. PolicyEngine passes budget impacts, distributional tables, and poverty metrics to GPT-4, which drafts the narrative report.',
  },
  {
    year: '2024',
    title: 'Household benefit explanations',
    image: '/screenshots/household-ai-explainer.gif',
    alt: 'AI-powered household benefit explainer',
    body:
      'The same boundary at household scale: the simulator computes eligibility and intermediate tests; the LLM explains why the household qualifies.',
  },
];

export default function HouseholdAIDemoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle className="text-3xl text-pe-dark tracking-tight">
          Calculator-plus-LLM came first
        </SlideTitle>
        <p className="text-lg text-gray-600 mt-2">
          Compute with code. Explain with a model. Keep the boundary explicit.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-4">
        {moments.map((moment) => (
          <div key={moment.title} className="content-card overflow-hidden rounded-2xl border border-gray-200">
            <div className="h-[130px] overflow-hidden border-b border-gray-100">
              <Image
                src={moment.image}
                alt={moment.alt}
                width={1600}
                height={915}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <div className="p-3">
              <p className="slide-tag mb-2">{moment.year}</p>
              <h3 className="font-mono text-base font-bold text-gray-800 mb-2">
                {moment.title}
              </h3>
              <p className="text-[0.82rem] text-gray-600 leading-relaxed">
                {moment.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-3 rounded-2xl px-6 py-3 text-white"
        style={{ background: 'linear-gradient(135deg, #1d4044 0%, #17343a 100%)' }}
      >
        <p className="text-lg leading-relaxed text-white/90">
          This is the right AI boundary for policy work: deterministic software
          computes; the LLM explains. Each does what it is good at.
        </p>
      </div>
    </Slide>
  );
}
