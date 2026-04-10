import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ContextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine in 30 seconds</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Open-source tax and benefit microsimulation for the US, UK, Canada, and beyond.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {[
          {
            title: 'The problem we solve',
            desc: 'Policy analysis was locked behind proprietary models. No one outside CBO or JCT could independently score a tax proposal or see how a benefit change would affect real families.',
          },
          {
            title: 'What we built',
            desc: 'Hundreds of policy rules encoded as open-source code. Anyone can model "what if we expanded the CTC?" and see household-level impacts in seconds — no coding required.',
          },
          {
            title: 'Why this matters today',
            desc: "Being fully open-source with open data makes us a foil for the data governance conversation. We can go all-in on AI, almost unrestrained — and share what that looks like.",
          },
        ].map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
