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
              text: 'A PolicyEngine result depends on four moving parts: model code, parameters, input microdata, and a calibrated weight vector',
              subtext:
                'Any one of those drifts and the number changes. A version pin on the package alone is not enough.',
            },
            {
              text: 'AEA, QJE, AER, and a growing share of journals now require a replication package that reproduces results bit-exact',
              subtext:
                'What counts as "bit-exact" for a stochastic microsim is exactly what this meeting is about.',
            },
            {
              text: 'PolicyEngine is becoming a citable common good',
              subtext:
                'Brookings, Budget Lab at Yale, CRFB, MN House, OBR Scotland, and the AI Policy Brief Factory all cite specific runs. The citations need to be durable.',
            },
          ]}
        />
      </div>
    </Slide>
  );
}
