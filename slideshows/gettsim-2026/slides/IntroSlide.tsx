import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const orgs = [
  {
    logo: '/logos/axiom-foundation.svg',
    logoAlt: 'The Axiom Foundation',
    logoHeight: '52px',
    what: 'A nonprofit encoding statutes into executable, verifiable rules: every value citing its authority, every rule traced back to the law.',
    role: 'The rules layer',
  },
  {
    logo: '/logos/teal.svg',
    logoAlt: 'PolicyEngine',
    logoHeight: '52px',
    what: 'Free, open source software to compute the impact of public policy: tax-benefit models used by researchers, governments, and benefit-access builders.',
    role: 'The microsimulation layer',
  },
];

export default function IntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Two organizations, one stack</SlideTitle>
      </SlideHeader>

      <div className="h-[calc(100vh-300px)] flex items-center pb-40">
      <div className="w-full grid grid-cols-2 gap-8 items-stretch">
        {orgs.map((org) => (
          <div key={org.logoAlt} className="content-card px-10 py-9 flex flex-col">
            <div className="h-[72px] flex items-center">
              <Image
                src={org.logo}
                alt={org.logoAlt}
                width={280}
                height={60}
                style={{ height: org.logoHeight, width: 'auto' }}
              />
            </div>
            <p className="text-2xl text-gray-700 leading-relaxed mt-7">
              {org.what}
            </p>
            <div className="mt-9 self-start slide-tag">{org.role}</div>
          </div>
        ))}
      </div>
      </div>
    </Slide>
  );
}
