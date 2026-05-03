import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const segments = [
  {
    label: 'Individual understanding',
    detail: 'Households use the public web app to check their own benefit eligibility and tax situation.',
  },
  {
    label: 'Benefit navigators',
    detail: 'MyFriendBen, Amplifi, Starlight, and Mirza screen families for 40+ programs through the API. Together they have identified $1B+ in unclaimed benefits.',
  },
  {
    label: 'Government & Hill',
    detail: 'Joint Economic Committee Republicans built an Immigration Fiscal Impact Calculator on PolicyEngine. 10 Downing Street, BEA, and others cite or use the model.',
  },
  {
    label: 'Research',
    detail: 'Brookings, Niskanen, AEI, NBER TAXSIM, Atlanta Fed, Georgetown, USC, UMich, UHERO, CRFB compare against, cite, or build on PolicyEngine.',
  },
];

const organizations: {
  name: string;
  logo: string;
  width?: number;
  height?: number;
  className?: string;
}[] = [
  { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png' },
  { name: '10 Downing Street', logo: '/logos/organizations/10-downing-street.png' },
  { name: 'Brookings Institution', logo: '/logos/organizations/brookings.svg', width: 150, height: 50 },
  { name: 'Committee for a Responsible Federal Budget', logo: '/logos/organizations/crfb.png', width: 135, className: 'invert' },
  { name: 'Foundation for Government Accountability', logo: '/logos/organizations/fga.png', width: 100 },
  { name: 'Bureau of Economic Analysis', logo: '/logos/organizations/bea.png' },
  { name: 'NBER', logo: '/logos/organizations/nber.png', width: 145 },
  { name: 'Atlanta Fed', logo: '/logos/organizations/atlanta-fed.png', width: 125 },
  { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
  { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
  { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
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
  { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
  { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
  { name: 'Starlight', logo: '/logos/organizations/starlight.png' },
];

export default function WhoUsesItSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Who runs on PolicyEngine</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          One open model serves individual households, advocacy organizations,
          governments, and academic researchers.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-4 gap-4 mt-5">
        {segments.map((s) => (
          <div key={s.label} className="content-card p-4">
            <div className="text-sm uppercase tracking-[0.16em] font-bold text-pe-teal mb-2">
              {s.label}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
          </div>
        ))}
      </div>

      <div className="w-full mt-5">
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
