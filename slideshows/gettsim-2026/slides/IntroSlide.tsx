import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const orgs = [
  {
    logo: '/logos/teal.svg',
    logoAlt: 'PolicyEngine',
    logoHeight: '44px',
    what: 'Free, open source software to compute the impact of public policy — tax-benefit models used by researchers, governments, and benefit-access builders.',
    role: 'The microsimulation layer',
  },
  {
    logo: '/logos/axiom-foundation.svg',
    logoAlt: 'The Axiom Foundation',
    logoHeight: '44px',
    what: 'A nonprofit encoding statutes into executable, verifiable rules — every value citing its authority, every rule traced back to the law.',
    role: 'The rules layer',
  },
];

export default function IntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Two organizations, one stack</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-2 gap-8 items-stretch">
        {orgs.map((org) => (
          <div key={org.logoAlt} className="content-card p-8 flex flex-col">
            <div className="h-[60px] flex items-center">
              <Image
                src={org.logo}
                alt={org.logoAlt}
                width={280}
                height={60}
                style={{ height: org.logoHeight, width: 'auto' }}
              />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mt-5">
              {org.what}
            </p>
            <div className="slide-tag mt-auto pt-6">{org.role}</div>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8 max-w-5xl">
        <p className="text-xl text-gray-800 leading-relaxed">
          A tax-benefit model is rules applied to data. This talk walks that
          stack layer by layer &mdash; and shows how AI now helps build every
          layer of it.
        </p>
      </div>
    </Slide>
  );
}
