import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import BulletList from '@/components/content/BulletList';

export default function WhyThisMattersSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Why a microsimulation needs first-class reproducibility</SlideTitle>
      </SlideHeader>
      <div className="mt-10 max-w-5xl">
        <BulletList
          size="md"
          items={[
            {
              text: 'A microsimulation result can move because the rules changed, because the calibrated microdata changed, or because both changed',
              subtext:
                "That is Tara's Brookings concern and John's code-plus-data point in one sentence. A package version alone does not tell you which layer moved.",
            },
            {
              text: 'For AEA-style reproducibility, the defensible claim is narrower than “rebuild the whole microsim stack from raw data”',
              subtext:
                'A reviewer should be able to replay the published result against a frozen rules bundle and a frozen calibrated household file, even when raw licensed inputs remain private.',
            },
            {
              text: 'PolicyEngine results already enter public policy debate',
              subtext:
                'Brookings and CRFB already appear in the website citations section. The next bar is a citation that stays interpretable after later model and data releases.',
            },
          ]}
        />
      </div>
    </Slide>
  );
}
