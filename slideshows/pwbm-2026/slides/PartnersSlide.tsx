import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const evidence = [
  {
    label: 'Policy analysis',
    title: 'Used and cited by major policy institutions',
    detail: 'Brookings, JEC, CRFB, FGA, No. 10, Niskanen, AEI, and others.',
  },
  {
    label: 'Validation',
    title: 'External model comparison partners',
    detail: 'NBER TAXSIM and Atlanta Fed Policy Rules Database.',
  },
  {
    label: 'Production',
    title: 'Benefit navigators run on our API',
    detail: '100K+ people served via API partners globally.',
  },
];

const organizations: {
  name: string;
  logo: string;
  width?: number;
  height?: number;
  className?: string;
}[] = [
  { name: 'Brookings Institution', logo: '/logos/organizations/brookings.svg', width: 150, height: 50 },
  { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png' },
  { name: 'Committee for a Responsible Federal Budget', logo: '/logos/organizations/crfb.png', width: 135, className: 'invert' },
  { name: '10 Downing Street', logo: '/logos/organizations/10-downing-street.png' },
  { name: 'Foundation for Government Accountability', logo: '/logos/organizations/fga.png', width: 100 },
  { name: 'Bureau of Economic Analysis', logo: '/logos/organizations/bea.png' },
  { name: 'NBER', logo: '/logos/organizations/nber.png', width: 145 },
  { name: 'Atlanta Fed', logo: '/logos/organizations/atlanta-fed.png', width: 125 },
  { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
  { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
  { name: 'Living Wage Institute', logo: '/logos/organizations/living-wage-calculator.png', width: 95 },
  { name: 'Georgetown University', logo: '/logos/organizations/georgetown.png' },
  { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png' },
  { name: 'University of Michigan', logo: '/logos/organizations/umich.png' },
  { name: 'USC', logo: '/logos/organizations/usc.png', width: 70 },
  { name: 'UHERO', logo: '/logos/organizations/uhero.png' },
  { name: 'Colorado Fiscal Institute', logo: '/logos/organizations/cfi.png' },
  { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.jpg' },
  { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
  { name: 'Mothers Outreach Network', logo: '/logos/organizations/mothers-outreach-network.png' },
  { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
  { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
  { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
  { name: 'Starlight', logo: '/logos/organizations/starlight.png' },
];

export default function PartnersSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Who uses PolicyEngine?</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Researchers, governments, validation partners, and benefit navigators
          all pressure-test the same open rules engine.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {evidence.map((item, index) => (
          <div
            key={item.label}
            className={`content-card p-4 animate-fade-in-up delay-${index + 1}`}
          >
            <div className="slide-tag mb-2" style={{ fontSize: '0.7rem' }}>
              {item.label}
            </div>
            <h3 className="text-base font-bold text-pe-dark leading-tight mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full mt-5 animate-fade-in-up delay-4">
        <div className="grid grid-cols-6 gap-x-7 gap-y-5 w-full px-4">
          {organizations.map((org) => (
            <div
              key={org.name}
              className="flex items-center justify-center"
              style={{ height: '46px' }}
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={org.width ?? 105}
                height={org.height ?? 48}
                className={`object-contain max-h-11 ${org.className ?? ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
