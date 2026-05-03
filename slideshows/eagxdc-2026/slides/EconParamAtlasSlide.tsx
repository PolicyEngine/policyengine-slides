import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { Kicker, BigStatement } from './WorkshopComponents';

export default function EconParamAtlasSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Economic Parameter Atlas: surfacing AI priors over economic responses</SlideTitle>
        <p className="text-lg text-gray-600 mt-1">
          Even with a structured calculator, an AI&apos;s policy prediction
          depends on the elasticities it implicitly assumes.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1.05fr_0.95fr] gap-9 mt-8 items-center">
        <div>
          <Kicker>The second leakage point</Kicker>
          <BigStatement>
            Calculation accuracy and{' '}
            <span className="text-pe-teal">belief accuracy</span> together
            cover what an AI-driven policy prediction depends on.
          </BigStatement>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            We elicit each frontier model&apos;s distribution over 21 economic
            quantities — ETI, Frisch elasticity, capital-gains realizations,
            Armington, capital-labor substitution, decile-level substitution
            elasticities — then aggregate with pooled, REML, and Bayesian
            intervals.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 text-center text-white"
          style={{
            background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
          }}
        >
          <div className="text-sm font-bold uppercase tracking-[0.16em] text-pe-teal mb-3">
            Live dashboard
          </div>
          <div className="text-3xl font-mono font-black text-white mb-3">
            economic-parameter-<br />atlas.vercel.app
          </div>
          <div className="text-sm text-white/70">
            21 quantities × 11 frontier models · pooled / REML / Bayesian
          </div>
        </div>
      </div>
    </Slide>
  );
}
