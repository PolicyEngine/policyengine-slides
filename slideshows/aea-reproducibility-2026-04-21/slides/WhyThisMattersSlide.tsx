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
              text: 'This is a very active project',
              subtext:
                'Since April 14, policyengine-us merged 109 PRs and policyengine-us-data merged 39. Themes included broader CHIP and Medicaid coverage, richer EITC and ACA calibration targets by state and AGI, marketplace imputation work, and RNG/reproducibility fixes in the data pipeline. Those changes interact: once the microdata is recalibrated to fit the improved health and tax targets together, EITC simulations can move too.',
            },
            {
              text: 'A microsimulation result can move because the rules changed, because the calibrated microdata changed, or because both changed',
              subtext:
                "Tara's Brookings question and John's code-plus-data point are the same reproducibility problem: a package version alone does not tell you which layer moved.",
            },
            {
              text: 'For AEA-style reproducibility, the defensible claim is narrower than “rebuild the whole microsim stack from raw data”',
              subtext:
                'A reviewer should be able to replay the published result against a frozen rules bundle and a frozen calibrated household file, even when raw licensed inputs remain private.',
            },
            {
              text: 'PolicyEngine results already enter public policy debate',
              subtext:
                'Relevant users already include CRFB, Georgetown, BEA, and 10 Downing Street. The next bar is a citation that stays interpretable after later model and data releases.',
            },
          ]}
        />
      </div>
    </Slide>
  );
}
