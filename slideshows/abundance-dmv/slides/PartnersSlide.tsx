import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const organizations: { name: string; logo: string; smaller?: boolean }[] = [
  { name: '10 Downing Street', logo: '/logos/organizations/10-downing-street.png' },
  { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png' },
  { name: 'Bureau of Economic Analysis', logo: '/logos/organizations/bea.png' },
  { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
  { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
  { name: 'NBER', logo: '/logos/organizations/nber.png' },
  { name: 'Georgetown University', logo: '/logos/organizations/georgetown.png' },
  { name: 'University of Michigan', logo: '/logos/organizations/umich.png' },
  { name: 'USC', logo: '/logos/organizations/usc.png', smaller: true },
  { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png' },
  { name: 'Colorado Fiscal Institute', logo: '/logos/organizations/cfi.png' },
  { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
  { name: 'Mothers Outreach Network', logo: '/logos/organizations/mothers-outreach-network.png' },
  { name: 'Atlanta Fed', logo: '/logos/organizations/atlanta-fed.png' },
  { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.jpg' },
  { name: 'Living Wage Calculator', logo: '/logos/organizations/living-wage-calculator.png' },
  { name: 'UHERO', logo: '/logos/organizations/uhero.png' },
  { name: 'UBI Center', logo: '/logos/organizations/ubicenter.png' },
  { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
  { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
  { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
];

export default function PartnersSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Who uses PolicyEngine?</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="content-card p-4 animate-fade-in-up delay-1">
          <div className="slide-tag mb-2" style={{ fontSize: '0.7rem' }}>UK government</div>
          <h3 className="text-sm font-bold text-pe-dark mb-1">
            CTO embedded at 10 Downing Street
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Real-time policy analysis in No 10&apos;s internal dashboards.
          </p>
        </div>

        <div className="content-card p-4 animate-fade-in-up delay-2">
          <div className="slide-tag mb-2" style={{ fontSize: '0.7rem' }}>Rhode Island</div>
          <h3 className="text-sm font-bold text-pe-dark mb-1">
            Governor McKee designed his CTC with PolicyEngine
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            $325 credit, $36.7M cost, 29.2% of residents benefit.
          </p>
        </div>

        <div className="content-card p-4 animate-fade-in-up delay-3">
          <div className="slide-tag mb-2" style={{ fontSize: '0.7rem' }}>Cross-partisan</div>
          <h3 className="text-sm font-bold text-pe-dark mb-1">
            Congress, think tanks, and universities
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            JEC, Niskanen, AEI, Georgetown, NBER, and more.
          </p>
        </div>
      </div>

      <div className="w-full mt-4 animate-fade-in-up delay-4">
        <div className="grid grid-cols-7 gap-x-5 gap-y-6 w-full px-2">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center"
              style={{ height: '45px' }}
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={org.smaller ? 60 : 85}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
